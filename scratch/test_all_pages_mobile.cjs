const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const widths = [320, 360, 375, 390, 414, 430];
const pages = [
  '/',
  '/about',
  '/products',
  '/services',
  '/gallery',
  '/contact',
  '/enquiry',
  '/product/ma-815bs-milk-analyser-with-stirrer'
];

async function run() {
  const chrome = spawn(chromePath, [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile-test'
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
        console.log('Connected to Chrome. Testing viewports and routes...');

        for (const page of pages) {
          console.log(`\n=== ROUTE: ${page} ===`);
          await send('Page.navigate', { url: `http://localhost:3000${page}` });
          await new Promise(r => setTimeout(r, 1200));

          for (const width of widths) {
            await send('Emulation.setDeviceMetricsOverride', {
              width,
              height: 800,
              deviceScaleFactor: 2,
              mobile: true
            });
            await new Promise(r => setTimeout(r, 200));

            const res = await send('Runtime.evaluate', {
              expression: `(() => {
                const cW = document.documentElement.clientWidth;
                const sW = document.documentElement.scrollWidth;
                const bSW = document.body.scrollWidth;
                const diff = sW - cW;
                
                let badElements = [];
                if (diff > 1) {
                  document.querySelectorAll('*').forEach(el => {
                    const r = el.getBoundingClientRect();
                    if (r.right > cW + 1) {
                      badElements.push(el.tagName + (el.className ? '.' + String(el.className).slice(0, 30) : '') + ' [right=' + Math.round(r.right) + ']');
                    }
                  });
                }
                return JSON.stringify({ width: ${width}, clientWidth: cW, scrollWidth: sW, diff, badElements: badElements.slice(0, 5) });
              })()`,
              returnByValue: true
            });

            const result = JSON.parse(res.result.value);
            if (result.diff > 1) {
              console.log(`  ❌ Width ${width}: scrollWidth=${result.scrollWidth} (OVERFLOW +${result.diff}px)`);
              console.log('     Culprits:', result.badElements);
            } else {
              console.log(`  ✅ Width ${width}: OK (sW=${result.scrollWidth}, cW=${result.clientWidth})`);
            }
          }
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
