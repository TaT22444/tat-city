import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { existsSync } from 'fs';

// 画像最適化設定
const optimizationConfig = {
  // Hero背景画像: max-width 2200px (Retina対応で2倍の4400pxでも可、ただしファイルサイズを考慮して2200px)
  hero: {
    width: 2200,
    quality: 85,
    format: 'webp'
  },
  // Works画像: 最大1600px幅（Retina対応、実際の表示は800px程度）
  works: {
    width: 1600,
    quality: 85,
    format: 'webp'
  },
  // プロフィール画像: 800px幅
  profile: {
    width: 800,
    quality: 85,
    format: 'webp'
  }
};

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // 既に最適化サイズ以下の場合はスキップ（ただしWebP変換は行う）
    const targetWidth = Math.min(config.width, metadata.width);
    
    await image
      .resize(targetWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: config.quality })
      .toFile(outputPath);
    
    const originalSize = metadata.size || 0;
    const optimized = await sharp(outputPath).metadata();
    const optimizedSize = optimized.size || 0;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    console.log(`  Resolution: ${metadata.width}x${metadata.height} → ${optimized.width}x${optimized.height}`);
    
    return { originalSize, optimizedSize, reduction };
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeWorksImages() {
  const worksDir = 'src/assets/images/works';
  const files = await readdir(worksDir);
  const pngFiles = files.filter(f => f.endsWith('.png') && !f.includes('original'));
  
  console.log('\n=== Optimizing Works Images ===');
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of pngFiles) {
    const inputPath = join(worksDir, file);
    const outputPath = join(worksDir, file.replace('.png', '.webp'));
    
    const result = await optimizeImage(inputPath, outputPath, optimizationConfig.works);
    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.optimizedSize;
    }
  }
  
  console.log(`\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  return { totalOriginal, totalOptimized };
}

async function optimizeProfileImage() {
  const profileDir = 'src/assets/images/profile';
  const inputPath = join(profileDir, 'profile.png');
  
  if (!existsSync(inputPath)) {
    console.log('Profile image not found, skipping...');
    return null;
  }
  
  console.log('\n=== Optimizing Profile Image ===');
  const outputPath = join(profileDir, 'profile.webp');
  return await optimizeImage(inputPath, outputPath, optimizationConfig.profile);
}

async function optimizeHeroImage() {
  const inputPath = 'src/assets/hero-ittow-backgroundImage.png';
  
  if (!existsSync(inputPath)) {
    console.log('Hero image not found, skipping...');
    return null;
  }
  
  console.log('\n=== Optimizing Hero Background Image ===');
  const outputPath = 'src/assets/hero-ittow-backgroundImage.webp';
  return await optimizeImage(inputPath, outputPath, optimizationConfig.hero);
}

async function main() {
  console.log('Starting image optimization...\n');
  
  const worksResult = await optimizeWorksImages();
  const profileResult = await optimizeProfileImage();
  const heroResult = await optimizeHeroImage();
  
  console.log('\n=== Optimization Complete ===');
  const totalOriginal = (worksResult?.totalOriginal || 0) + (profileResult?.originalSize || 0) + (heroResult?.originalSize || 0);
  const totalOptimized = (worksResult?.totalOptimized || 0) + (profileResult?.optimizedSize || 0) + (heroResult?.optimizedSize || 0);
  const totalReduction = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
  
  console.log(`\nTotal size reduction: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalOptimized / 1024 / 1024).toFixed(2)}MB (${totalReduction}% reduction)`);
  console.log('\nNote: Original PNG files are preserved in original/ folders.');
}

main().catch(console.error);
