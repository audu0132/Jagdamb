const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--user-data-dir=C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile-desktop'
]);

setTimeout(() => {
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
          width: 1440,
          height: 900,
          deviceScaleFactor: 1,
          mobile: false
        });

        await send('Page.navigate', { url: 'http://localhost:3000/' });
        await new Promise(r => setTimeout(r, 1500));

        const res = await send('Runtime.evaluate', {
          expression: `JSON.stringify({
            cW: document.documentElement.clientWidth,
            sW: document.documentElement.scrollWidth,
            drawerVisible: window.getComputedStyle(document.querySelector('.mobile-drawer')).visibility,
            stickyBarDisplay: window.getComputedStyle(document.querySelector('.mobile-sticky-bar')).display
          })`
        });
        console.log('Desktop eval:', res.result.value);

        const ss = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync('scratch/desktop_home.png', Buffer.from(ss.data, 'base64'));
        console.log('Saved scratch/desktop_home.png');

        ws.close();
        chrome.kill();
        process.exit(0);
      };
    });
  });
  req.end();
}, 2000);
