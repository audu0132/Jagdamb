const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const pages = ['/', '/about', '/products', '/services', '/contact', '/enquiry'];

async function run() {
  const chrome = spawn(chromePath, [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile-inspect'
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
          await new Promise(r => setTimeout(r, 1500));

          const res = await send('Runtime.evaluate', {
            expression: `(() => {
              const cW = 375;
              const wide = [];
              document.querySelectorAll('*').forEach(el => {
                if (el.closest('.mobile-drawer') || el.classList.contains('mobile-drawer-overlay')) return;
                // Check non-transformed physical layout width
                const offsetW = el.offsetWidth;
                const scrollW = el.scrollWidth;
                const rect = el.getBoundingClientRect();
                
                if (rect.right > cW + 1 || offsetW > cW + 1 || scrollW > cW + 1) {
                  // Check if this element itself is the source (none of its children are causing it, or it has fixed width/grid/min-width)
                  wide.push({
                    tag: el.tagName,
                    class: (typeof el.className === 'string') ? el.className : '',
                    id: el.id,
                    rectRight: Math.round(rect.right),
                    rectWidth: Math.round(rect.width),
                    offsetW,
                    scrollW,
                    styleWidth: el.style.width,
                    styleGrid: el.style.gridTemplateColumns,
                    parent: el.parentElement ? el.parentElement.tagName + '.' + ((typeof el.parentElement.className === 'string') ? el.parentElement.className : '') : '',
                    text: (el.textContent || '').slice(0, 40).replace(/\\s+/g, ' ')
                  });
                }
              });
              // Sort by rectRight descending
              wide.sort((a, b) => b.rectRight - a.rectRight);
              return JSON.stringify({ page: '${page}', count: wide.length, widest: wide.slice(0, 10) });
            })()`,
            returnByValue: true
          });

          const data = JSON.parse(res.result.value);
          console.log(`\n=================== ${data.page} ===================`);
          data.widest.forEach(w => {
            console.log(` - <${w.tag} class="${w.class}"> right=${w.rectRight}, width=${w.rectWidth}, offsetW=${w.offsetW}, grid="${w.styleGrid}" inside <${w.parent}>: "${w.text}"`);
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
