const { execSync } = require('child_process');
const fs = require('fs');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const gridOut = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\f710a13c-3e6d-42e3-842a-f28987e5a254\\catalogue_grid_screen.png';

console.log('Capturing product grid...');
execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=5000 --window-size=1400,2400 --screenshot="${gridOut}" http://localhost:3000/catalogue`);
console.log('Grid screenshot saved!');
