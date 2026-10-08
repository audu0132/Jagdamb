const { execSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const desktopOut = path.resolve('scratch/analyser_desktop.png');
const mobileOut = path.resolve('scratch/analyser_mobile.png');

console.log('--- 1. Testing PDF file HTTP accessibility ---');
http.get('http://localhost:3000/documents/CAT-MA-815BS.pdf', (res) => {
  console.log('PDF HTTP Status:', res.statusCode);
  console.log('PDF Content-Type:', res.headers['content-type']);
  console.log('PDF Content-Length:', res.headers['content-length']);

  console.log('\n--- 2. Capturing Desktop Screenshot (1440x2200) ---');
  execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=3000 --window-size=1440,2400 --screenshot="${desktopOut}" http://localhost:3000/product/ma-815bs-milk-analyser-with-stirrer`);
  console.log('Desktop screenshot saved:', desktopOut, 'Size:', fs.statSync(desktopOut).size);

  console.log('\n--- 3. Capturing Mobile Screenshot (390x2400) ---');
  execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=3000 --window-size=390,2600 --screenshot="${mobileOut}" http://localhost:3000/product/ma-815bs-milk-analyser-with-stirrer`);
  console.log('Mobile screenshot saved:', mobileOut, 'Size:', fs.statSync(mobileOut).size);

  console.log('\n--- 4. Checking Products Listing Page ---');
  const prodOut = path.resolve('scratch/products_list_check.png');
  execSync(`"${chrome}" --headless --disable-gpu --virtual-time-budget=3000 --window-size=1440,1600 --screenshot="${prodOut}" http://localhost:3000/products`);
  console.log('Products list screenshot saved:', prodOut);

  console.log('\nAll checks completed successfully!');
}).on('error', (e) => {
  console.error('HTTP Error:', e.message);
});
