const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const chrome = spawn(chromePath, [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--window-size=375,812',
    '--user-data-dir=C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile-2'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  const req = http.request('http://127.0.0.1:9222/json/new?http://localhost:3000/', { method: 'PUT' }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const target = JSON.parse(data);
      const ws = new WebSocket(target.webSocketDebuggerUrl);
      ws.onopen = () => {
        ws.send(JSON.stringify({
          id: 10,
          method: 'Emulation.setDeviceMetricsOverride',
          params: {
            width: 375,
            height: 812,
            deviceScaleFactor: 2,
            mobile: true
          }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Runtime.evaluate',
            params: {
              expression: `(() => {
                const docWidth = document.documentElement.clientWidth;
                const scrollWidth = document.documentElement.scrollWidth;
                const info = { docWidth, scrollWidth, windowInnerWidth: window.innerWidth, bodyScrollWidth: document.body.scrollWidth };
                
                // Find top-level parents with right > docWidth
                const elements = [];
                document.querySelectorAll('*').forEach(el => {
                  if (el.closest('.mobile-drawer')) return;
                  const r = el.getBoundingClientRect();
                  if (r.right > docWidth + 1 || el.scrollWidth > docWidth + 1) {
                    elements.push({
                      tag: el.tagName,
                      class: el.className,
                      id: el.id,
                      rectLeft: Math.round(r.left),
                      rectRight: Math.round(r.right),
                      rectWidth: Math.round(r.width),
                      scrollWidth: el.scrollWidth,
                      parent: el.parentElement ? el.parentElement.tagName + '.' + el.parentElement.className : null
                    });
                  }
                });
                return JSON.stringify({ info, count: elements.length, elements: elements.slice(0, 30) });
              })()`,
              returnByValue: true
            }
          }));
        }, 3000);
      };

      ws.onmessage = (msg) => {
        const res = JSON.parse(msg.data);
        if (res.id === 1) {
          console.log(JSON.stringify(JSON.parse(res.result.result.value), null, 2));
          ws.close();
          chrome.kill();
          process.exit(0);
        }
      };
    });
  });
  req.end();
}

run();
