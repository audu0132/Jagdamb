const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const chrome = spawn(chromePath, [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--window-size=375,812',
    '--user-data-dir=C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile'
  ]);

  // Wait for chrome to open port
  await new Promise(r => setTimeout(r, 2000));

  const req = http.request('http://127.0.0.1:9222/json/new?http://localhost:3000/', { method: 'PUT' }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const target = JSON.parse(data);
      console.log('Target WebSocket URL:', target.webSocketDebuggerUrl);

      const ws = new WebSocket(target.webSocketDebuggerUrl);
      ws.onopen = () => {
        // Wait for page load
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Runtime.evaluate',
            params: {
              expression: `(() => {
                const results = [];
                const docWidth = document.documentElement.clientWidth;
                const scrollWidth = document.documentElement.scrollWidth;
                results.push({ type: 'doc', clientWidth: docWidth, scrollWidth: scrollWidth, innerWidth: window.innerWidth });

                const all = document.querySelectorAll('*');
                all.forEach(el => {
                  const rect = el.getBoundingClientRect();
                  if (rect.right > docWidth + 2 || el.scrollWidth > docWidth + 2) {
                    results.push({
                      tag: el.tagName,
                      id: el.id,
                      className: el.className,
                      rectRight: rect.right,
                      rectWidth: rect.width,
                      scrollWidth: el.scrollWidth,
                      text: (el.textContent || '').slice(0, 40).replace(/\\s+/g, ' ')
                    });
                  }
                });
                return JSON.stringify(results);
              })()`,
              returnByValue: true
            }
          }));
        }, 3000);
      };

      ws.onmessage = (msg) => {
        const res = JSON.parse(msg.data);
        if (res.id === 1) {
          console.log('EVAL RESULT:');
          const data = JSON.parse(res.result.result.value);
          console.log(JSON.stringify(data, null, 2));
          ws.close();
          chrome.kill();
          process.exit(0);
        }
      };
    });
  });
  req.end();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
