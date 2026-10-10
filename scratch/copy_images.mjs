import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/f695972d-d594-43f1-830d-0f209756e29d';
const targetDir = 'd:/React/Freelace/Jagdamb/public/images/products';

const brainFiles = fs.readdirSync(brainDir);
console.log('Brain files:', brainFiles);

const fileMappings = [
  { prefix: 'single_bucket_milker', target: 'single-bucket-milker.jpg' },
  { prefix: 'double_bucket_milker', target: 'double-bucket-milker.jpg' },
  { prefix: 'pipeline_milking', target: 'pipeline-milking.jpg' },
  { prefix: 'bulk_milk_cooler', target: 'bulk-milk-cooler.jpg' },
  { prefix: 'amcu_setup', target: 'amcu-setup.jpg' },
  { prefix: 'cream_separator_electric', target: 'cream-separator-electric.jpg' },
  { prefix: 'cream_separator_manual', target: 'cream-separator-manual.jpg' },
  { prefix: 'ss_milk_can', target: 'ss-milk-can.jpg' },
  { prefix: 'pulsator', target: 'pulsator.jpg' },
  { prefix: 'liners', target: 'liners.jpg' },
  { prefix: 'vacuum_pump', target: 'vacuum-pump.jpg' },
  { prefix: 'weighing_scale', target: 'weighing-scale.jpg' },
  { prefix: 'milk_plunger_set', target: 'milk-plunger-set.jpg' }
];

fileMappings.forEach(({ prefix, target }) => {
  const match = brainFiles.find(f => f.startsWith(prefix) && f.endsWith('.jpg'));
  if (match) {
    const src = path.join(brainDir, match);
    const dest = path.join(targetDir, target);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${match} -> ${target}`);
  } else {
    console.log(`No match found for prefix: ${prefix}`);
  }
});

// Also handle milk-analyser.jpg from essae-ma-815-milk-analyser.jpg if not present
const essaeSrc = path.join(targetDir, 'essae-ma-815-milk-analyser.jpg');
const milkAnalyserDest = path.join(targetDir, 'milk-analyser.jpg');
if (fs.existsSync(essaeSrc)) {
  fs.copyFileSync(essaeSrc, milkAnalyserDest);
  console.log(`Copied essae-ma-815-milk-analyser.jpg -> milk-analyser.jpg`);
}

// Also handle milker-bucket-detail.jpg from 25l-milking-bucket-assembly-set.jpg
const bucketSrc = path.join(targetDir, '25l-milking-bucket-assembly-set.jpg');
const bucketDetailDest = path.join(targetDir, 'milker-bucket-detail.jpg');
if (fs.existsSync(bucketSrc)) {
  fs.copyFileSync(bucketSrc, bucketDetailDest);
  console.log(`Copied 25l-milking-bucket-assembly-set.jpg -> milker-bucket-detail.jpg`);
}
