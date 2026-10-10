const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'src', 'data', 'products.js');
const content = fs.readFileSync(productsFilePath, 'utf8');

// Parse products
const regex = /id:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;

let match;
const found = [];
while ((match = regex.exec(content)) !== null) {
  found.push({
    id: match[1],
    slug: match[2],
    name: match[3],
    category: match[4],
    image: match[5]
  });
}

console.log(`Found ${found.length} products:`);
const existingImages = new Set(fs.readdirSync(path.join(__dirname, '..', 'public', 'images', 'products')));

found.forEach(p => {
  const imgFilename = path.basename(p.image);
  const exists = existingImages.has(imgFilename);
  console.log(`${p.id} | ${p.name} | ${p.image} | Exists: ${exists}`);
});
