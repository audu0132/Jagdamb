import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from '../src/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const existingImages = new Set(fs.readdirSync(path.join(__dirname, '..', 'public', 'images', 'products')));

console.log(`Total products: ${products.length}`);
console.log('Available files in public/images/products:', Array.from(existingImages));

let missingCount = 0;
products.forEach(p => {
  const imgFilename = path.basename(p.image);
  const exists = existingImages.has(imgFilename);
  if (!exists) missingCount++;
  console.log(`[${exists ? 'OK' : 'MISSING'}] ${p.id} | ${p.name}`);
  console.log(`   image: ${p.image}`);
  if (p.gallery) {
    p.gallery.forEach(g => {
      const gFile = path.basename(g);
      const gExists = existingImages.has(gFile);
      if (!gExists) {
        console.log(`   gallery [MISSING]: ${g}`);
      }
    });
  }
});

console.log(`\nSummary: ${products.length - missingCount} have main image, ${missingCount} missing main image.`);
