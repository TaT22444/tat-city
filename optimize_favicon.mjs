import sharp from 'sharp';
import { stat } from 'fs/promises';

const inputFile = 'public/favicon.png';
const outputFile = 'public/favicon-192.png'; // Overwrite the original later if successful
const targetSize = 192;

async function getFileSize(filePath) {
  try {
    const stats = await stat(filePath);
    return (stats.size / 1024).toFixed(2) + ' KB';
  } catch {
    return 'N/A';
  }
}

async function optimizeFavicon() {
  try {
    console.log(`Optimizing ${inputFile}...`);
    const originalSize = await getFileSize(inputFile);

    await sharp(inputFile)
      .resize(targetSize, targetSize)
      .png({ quality: 90 }) // Adjust quality
      .toFile(outputFile);

    const newSize = await getFileSize(outputFile);
    
    console.log(`✅ Success!`);
    console.log(`   - Original size: ${originalSize}`);
    console.log(`   - New size (192x192): ${newSize}`);
    console.log(`   - Output: ${outputFile}`);
    console.log('\nNow, you might want to replace the original favicon.png with this new version.');

  } catch (error) {
    console.error('❌ Error during favicon optimization:', error);
  }
}

optimizeFavicon();
