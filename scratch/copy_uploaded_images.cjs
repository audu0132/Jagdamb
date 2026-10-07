const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\f710a13c-3e6d-42e3-842a-f28987e5a254\\.user_uploaded';
const prodDir = 'd:\\React\\Freelace\\Jagdamb\\public\\images\\products';
const catDir = 'd:\\React\\Freelace\\Jagdamb\\public\\images\\catalogue';

const mappings = [
  { src: 'media_1791394236710.jpg', name: 'essae-ma-815-milk-analyser.jpg' },
  { src: 'media_1791394236718.jpg', name: 'c17m-kp-single-bucket.jpg' },
  { src: 'media_1791394236711.jpg', name: 'c17v-kp-single-bucket.jpg' },
  { src: 'media_1791394236732.jpg', name: '25l-milking-bucket-assembly-set.jpg' }
];

mappings.forEach(m => {
  const srcPath = path.join(srcDir, m.src);
  const dstProd = path.join(prodDir, m.name);
  const dstCat = path.join(catDir, m.name);
  fs.copyFileSync(srcPath, dstProd);
  fs.copyFileSync(srcPath, dstCat);
  console.log('Copied ' + m.src + ' -> ' + m.name + ' (' + fs.statSync(dstProd).size + ' bytes)');
});
