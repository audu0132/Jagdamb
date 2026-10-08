const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--user-data-dir=C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile-card'
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
          width: 375,
          height: 812,
          deviceScaleFactor: 2,
          mobile: true
        });

        await send('Page.navigate', { url: 'http://localhost:3000/' });
        await new Promise(r => setTimeout(r, 1500));

        await send('Runtime.evaluate', {
          expression: `
            const target = Array.from(document.querySelectorAll('h3')).find(el => el.textContent.includes('Maharashtra'));
            if (target) target.scrollIntoView({ block: 'center' });
          `
        });
        await new Promise(r => setTimeout(r, 800));

        const ss = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync('scratch/mobile_maharashtra_card.png', Buffer.from(ss.data, 'base64'));
        console.log('Saved scratch/mobile_maharashtra_card.png');

        ws.close();
        chrome.kill();
        process.exit(0);
      };
    });
  });
  req.end();
}, 2000);
