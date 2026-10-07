const { execSync } = require('child_process');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const catTall = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\f710a13c-3e6d-42e3-842a-f28987e5a254\\catalogue_tall.png';

console.log('Capturing tall catalogue...');
execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=4000 --window-size=1400,3400 --screenshot="${catTall}" http://localhost:3000/catalogue`);
console.log('Tall screenshot captured!');
