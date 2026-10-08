const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const pages = [
  '/',
  '/about',
  '/products',
  '/services',
  '/contact',
  '/enquiry'
];

async function run() {
  const chrome = spawn(chromePath, [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile-culprits'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  const req = http.request('http://127.0.0.1:9222/json/new?http://localhost:3000/', { method: 'PUT' }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const target = JSON.parse(data);
      const ws = new WebSocket(target.webSocketDebuggerUrl);

      let msgId = 1;
      const send = (method, params = {}) => new Promise((resolve) => {
        const id = msgId++;
        const handler = (event) => {
          const resp = JSON.parse(event.data);
          if (resp.id === id) {
            ws.removeEventListener('message', handler);
            resolve(resp.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });

      ws.onopen = async () => {
        await send('Emulation.setDeviceMetricsOverride', {
          width: 375,
          height: 800,
          deviceScaleFactor: 2,
          mobile: true
        });

        for (const page of pages) {
          await send('Page.navigate', { url: `http://localhost:3000${page}` });
          await new Promise(r => setTimeout(r, 1200));

          const res = await send('Runtime.evaluate', {
            expression: `(() => {
              const cW = document.documentElement.clientWidth;
              const sW = document.documentElement.scrollWidth;
              
              const culprits = [];
              document.querySelectorAll('*').forEach(el => {
                const r = el.getBoundingClientRect();
                if (r.right > cW + 1) {
                  // Only report elements whose parent is not also right > cW + 1 (i.e. highest level culprits)
                  const parentR = el.parentElement ? el.parentElement.getBoundingClientRect() : null;
                  const isTopLevel = !parentR || parentR.right <= cW + 1;
                  culprits.push({
                    tag: el.tagName,
                    class: el.className,
                    id: el.id,
                    right: Math.round(r.right),
                    width: Math.round(r.width),
                    parentTag: el.parentElement ? el.parentElement.tagName : null,
                    parentClass: el.parentElement ? el.parentElement.className : null,
                    snippet: (el.textContent || '').slice(0, 50).replace(/\\s+/g, ' ')
                  });
                }
              });
              return JSON.stringify({ page: '${page}', cW, sW, overflow: sW - cW, culprits });
            })()`,
            returnByValue: true
          });

          const result = JSON.parse(res.result.value);
          console.log(`\n=================== ${result.page} ===================`);
          console.log(`clientWidth: ${result.cW}, scrollWidth: ${result.sW}, overflow: ${result.overflow}px`);
          console.log('Top culprits:');
          result.culprits.slice(0, 8).forEach(c => {
            console.log(` - <${c.tag} class="${c.class}"> [width=${c.width}, right=${c.right}] inside <${c.parentTag}.${c.parentClass}>: "${c.snippet}"`);
          });
        }

        ws.close();
        chrome.kill();
        process.exit(0);
      };
    });
  });
  req.end();
}

run();
