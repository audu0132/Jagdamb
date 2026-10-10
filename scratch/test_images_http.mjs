import http from 'http';
import { products } from '../src/data/products.js';

async function checkUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:5173${urlPath}`, (res) => {
      resolve({ path: urlPath, statusCode: res.statusCode, contentType: res.headers['content-type'] });
    }).on('error', (err) => {
      resolve({ path: urlPath, error: err.message });
    });
  });
}

async function run() {
  console.log(`Testing HTTP response for all 28 product images on http://localhost:5173...`);
  let allOk = true;
  for (const p of products) {
    const res = await checkUrl(p.image);
    const ok = res.statusCode === 200;
    if (!ok) allOk = false;
    console.log(`[${ok ? 'OK 200' : 'FAIL ' + res.statusCode}] ${p.id} -> ${p.image} (${res.contentType || res.error})`);
  }
  console.log(`\nAll product images HTTP 200 OK: ${allOk}`);
}

run();
