import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, 'public');
const srcDir = path.resolve(__dirname, 'src');

function getAllFiles(dir, exts = ['.ts', '.tsx']) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, exts));
    } else if (exts.includes(path.extname(item.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

const srcFiles = getAllFiles(srcDir);
const imageRegex = /['"`](\/(?:gallery|disciplines|campuses|academics|icons|images|assets)[^'"`]+\.(?:jpg|jpeg|png|svg|webp))['"`]/g;

const foundImages = new Set();

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    foundImages.add({
      imagePath: match[1],
      sourceFile: path.relative(srcDir, file),
    });
  }
}

console.log(`Found ${foundImages.size} unique image references across src/ files.`);

const missingImages = [];
const existingImages = [];

for (const item of foundImages) {
  const diskPath = path.join(publicDir, item.imagePath);
  if (!fs.existsSync(diskPath)) {
    missingImages.push(item);
  } else {
    const stat = fs.statSync(diskPath);
    existingImages.push({ ...item, size: stat.size });
  }
}

console.log('\n=== EXISTING IMAGES ===');
existingImages.forEach((img) => console.log(`✓ [${img.size} bytes] ${img.imagePath} (in ${img.sourceFile})`));

console.log('\n=== MISSING IMAGES ===');
if (missingImages.length === 0) {
  console.log('✓ NO MISSING IMAGES! All images exist on disk.');
} else {
  missingImages.forEach((img) => console.log(`✗ MISSING: ${img.imagePath} referenced in ${img.sourceFile}`));
}
