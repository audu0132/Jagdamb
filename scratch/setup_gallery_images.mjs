import fs from 'fs';
import path from 'path';

const galleryDir = 'd:/React/Freelace/Jagdamb/public/images/gallery';
const productsDir = 'd:/React/Freelace/Jagdamb/public/images/products';

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
  console.log(`Created directory: ${galleryDir}`);
}

const copyMap = [
  { src: 'double-bucket-milker.jpg', dest: 'milking-trolley.jpg' },
  { src: 'single-bucket-milker.jpg', dest: 'single-milking-trolley.jpg' },
  { src: 'essae-ma-815-milk-analyser.jpg', dest: 'milk-testing.jpg' },
  { src: 'bulk-milk-cooler.jpg', dest: 'bmc-chiller.jpg' },
  { src: 'ss-milk-can.jpg', dest: 'milk-cans.jpg' },
  { src: 'cream-separator-electric.jpg', dest: 'cream-separator.jpg' },
  { src: 'liners.jpg', dest: 'spares-stock.jpg' },
  { src: 'pipeline-milking.jpg', dest: 'pipeline-barn.jpg' },
  { src: 'amcu-setup.jpg', dest: 'amcu-center.jpg' },
  { src: 'boxer-chaff-cutter-1-main.jpg', dest: 'chaff-cutter-boxer.jpg' },
  { src: 'chaff-cutter-fighter.jpg', dest: 'chaff-cutter-fighter.jpg' },
  { src: 'khoa-machine.jpg', dest: 'khoa-machine.jpg' },
  { src: 'cow-mat-cow.jpg', dest: 'cow-mats.jpg' }
];

copyMap.forEach(({ src, dest }) => {
  const srcPath = path.join(productsDir, src);
  const destPath = path.join(galleryDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> gallery/${dest}`);
  } else {
    console.warn(`Source not found: ${srcPath}`);
  }
});

console.log('Gallery directory contents:', fs.readdirSync(galleryDir));
