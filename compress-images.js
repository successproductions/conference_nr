const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDirs = [
  './public/images/quiz',
  './public/images/liste-attente',
  './public/images/quiz2',
];

async function compressImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 60, progressive: true })
        .toFile(filePath + '.tmp');
      
      fs.renameSync(filePath + '.tmp', filePath);
      console.log(`✓ Compressed: ${filePath}`);
    } else if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 60 })
        .toFile(filePath + '.tmp');
      
      fs.renameSync(filePath + '.tmp', filePath);
      console.log(`✓ Compressed: ${filePath}`);
    }
  } catch (err) {
    console.error(`✗ Error compressing ${filePath}:`, err.message);
  }
}

async function compressAllImages() {
  console.log('🖼️  Starting image compression...\n');
  
  for (const dir of imageDirs) {
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile()) {
        await compressImage(filePath);
      }
    }
  }
  
  console.log('\n✅ Image compression complete!');
}

compressAllImages().catch(console.error);
