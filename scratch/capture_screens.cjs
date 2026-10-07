const { execSync } = require('child_process');
const fs = require('fs');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = fs.existsSync(chrome) ? chrome : (fs.existsSync(edge) ? edge : null);

console.log('Using browser:', browser);

if (browser) {
  const desktopOut = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\f710a13c-3e6d-42e3-842a-f28987e5a254\\catalogue_desktop_screen.png';
  const mobileOut = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\f710a13c-3e6d-42e3-842a-f28987e5a254\\catalogue_mobile_screen.png';

  console.log('Taking desktop screenshot...');
  execSync(`"${browser}" --headless --disable-gpu --virtual-time-budget=5000 --window-size=1400,1000 --screenshot="${desktopOut}" http://localhost:3000/catalogue`);
  console.log('Desktop saved!');

  console.log('Taking mobile screenshot...');
  execSync(`"${browser}" --headless --disable-gpu --virtual-time-budget=5000 --window-size=390,844 --screenshot="${mobileOut}" http://localhost:3000/catalogue`);
  console.log('Mobile saved!');
}
