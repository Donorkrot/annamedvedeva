import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = decodeURIComponent(new URL('../public/images/', import.meta.url).pathname);
const JPG_QUALITY = 78;
const PNG_QUALITY = 80;
const WEBP_QUALITY = 75;

let totalBefore = 0;
let totalAfter = 0;
let totalWebp = 0;
let processed = 0;
let skipped = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      await process(full);
    }
  }
}

async function process(file) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  if (file.includes('/_backup/')) return;

  const before = (await stat(file)).size;
  totalBefore += before;

  const tmp = file + '.tmp';
  const webpOut = file.replace(/\.(jpe?g|png)$/i, '.webp');

  try {
    const pipeline = sharp(file, { failOn: 'none' }).rotate();

    if (ext === '.png') {
      await pipeline.clone().png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toFile(tmp);
    } else {
      await pipeline.clone().jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true }).toFile(tmp);
    }

    const tmpSize = (await stat(tmp)).size;
    if (tmpSize < before * 0.98) {
      await rename(tmp, file);
      totalAfter += tmpSize;
    } else {
      await unlink(tmp);
      totalAfter += before;
      skipped++;
    }

    await sharp(file, { failOn: 'none' }).rotate().webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(webpOut);
    const webpSize = (await stat(webpOut)).size;
    totalWebp += webpSize;

    processed++;
    if (processed % 20 === 0) {
      console.log(`  ... ${processed} files processed`);
    }
  } catch (err) {
    console.error(`FAIL ${file}: ${err.message}`);
    try { await unlink(tmp); } catch {}
  }
}

console.log('Compressing images in', ROOT);
await walk(ROOT);

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log('\n=== DONE ===');
console.log(`Files processed: ${processed} (skipped re-encode: ${skipped})`);
console.log(`JPG/PNG before: ${mb(totalBefore)} MB`);
console.log(`JPG/PNG after:  ${mb(totalAfter)} MB  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% smaller)`);
console.log(`WebP total:     ${mb(totalWebp)} MB  (${((1 - totalWebp / totalBefore) * 100).toFixed(1)}% vs original)`);
