const { execSync } = require('child_process');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const catOut = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\f710a13c-3e6d-42e3-842a-f28987e5a254\\catalogue_latest.png';
const prodOut = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\f710a13c-3e6d-42e3-842a-f28987e5a254\\products_latest.png';

console.log('Capturing catalogue...');
execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=4000 --window-size=1400,1800 --screenshot="${catOut}" http://localhost:3000/catalogue`);

console.log('Capturing products...');
execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=4000 --window-size=1400,1800 --screenshot="${prodOut}" http://localhost:3000/products`);

console.log('All screenshots captured!');
