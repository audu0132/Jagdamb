const { execSync } = require('child_process');
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=3000 --window-size=1440,4200 --screenshot="d:\\React\\Freelace\\Jagdamb\\scratch\\analyser_full.png" http://localhost:3000/product/ma-815bs-milk-analyser-with-stirrer`);
console.log('Saved analyser_full.png');
