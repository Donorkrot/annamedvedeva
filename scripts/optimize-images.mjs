/**
 * Re-encode large image assets in place to reduce file size while keeping
 * visual quality intact. Strategy per file:
 *   • If alpha channel is *actually* used → write an optimized PNG (palette + effort).
 *   • If alpha is unused (or the file has no alpha) → write a mozjpeg q=85
 *     progressive JPEG. Extension is left unchanged: modern browsers detect
 *     image type by magic bytes, and Next.js's image optimizer re-encodes
 *     anyway, so a .png file containing JPEG bytes works fine in practice.
 *
 * Dimensions are NEVER reduced — we only compress the bytes.
 *
 * Usage:
 *   node scripts/optimize-images.mjs --dry        # show estimated savings
 *   node scripts/optimize-images.mjs              # write changes in place
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const DRY_RUN = process.argv.includes('--dry');

// Curated list of largest assets that we want to re-encode.
const TARGETS = [
  'public/images/backgrounds/s2-bg-mobile-clean.jpg',
  'public/images/backgrounds/s4-bg-mobile-clean.jpg',
  'public/images/backgrounds/s3-bg-mobile-clean.jpg',
  'public/images/backgrounds/bg-s7-mobile.jpg',
  'public/images/backgrounds/bg-s7-desktop.jpg',
  'public/images/backgrounds/bg-s11-mobile.jpg',
  'public/images/backgrounds/bg-s9-mobile.jpg',
  'public/images/backgrounds/bg-s9-desktop.jpg',
  'public/images/backgrounds/bg-s12-desktop.jpg',
  'public/images/backgrounds/bg-s12-mobile.jpg',
  'public/images/backgrounds/bg-s3-desktop.jpg',
  'public/images/backgrounds/bg-s5-mobile.jpg',
  'public/images/backgrounds/bg-s10-desktop.jpg',
  'public/images/backgrounds/bg-s10-mobile.jpg',
  'public/images/backgrounds/bg-s2-mobile.jpg',
  'public/images/content/s7-photo-mobile.jpg',
  'public/images/content/s7-photo-desktop.jpg',
  'public/images/content/s4-ri-clean.png',
  'public/images/content/s4-iq.png',
  'public/images/content/s4-iq-clean.png',
  'public/images/content/s4-eq.png',
  'public/images/content/s4-eq-clean.png',
  'public/images/content/s4-sq.png',
  'public/images/content/s4-sq-clean.png',
  'public/images/content/s9-venn-mobile.png',
  'public/images/content/s9-venn-desktop.png',
  'public/images/content/s8-dna-mobile.png',
  'public/images/content/s8-dna-desktop.png',
  'public/images/content/s4-ri.png',
  'public/images/about/a1-d-bg.png',
  'public/images/about/a1-m-bg.png',
  'public/images/about/a1-d-photo.png',
  'public/images/about/a1-m-photo.png',
  'public/images/backgrounds/about/a1.jpg',
  'public/images/backgrounds/about/ua/a1.jpg',
  'public/images/backgrounds/about/en/a1.jpg',
  'public/images/backgrounds/about/a3.jpg',
  'public/images/backgrounds/about/ua/a3.jpg',
  'public/images/backgrounds/about/en/a3.jpg',
  'public/images/mobile/about/a1.jpg',
  'public/images/mobile/about/ua/a1.jpg',
  'public/images/mobile/about/a3.jpg',
  'public/images/mobile/about/ua/a3.jpg',
  'public/images/mobile/about/a4.jpg',
  'public/images/mobile/about/ua/a4.jpg',
  'public/images/mobile/about/a5.jpg',
  'public/images/mobile/about/ua/a5.jpg',
];

async function isAlphaActuallyUsed(file) {
  const m = await sharp(file).metadata();
  if (!m.hasAlpha) return false;
  const stats = await sharp(file).stats();
  const alphaCh = stats.channels[stats.channels.length - 1];
  return alphaCh.min < 255;
}

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(0).padStart(6) + ' KB';
}

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

for (const fp of TARGETS) {
  if (!fs.existsSync(fp)) {
    console.log(`SKIP (missing): ${fp}`);
    continue;
  }

  const sizeBefore = fs.statSync(fp).size;
  const m = await sharp(fp).metadata();
  const alphaUsed = await isAlphaActuallyUsed(fp);

  let outBuf;
  let outFmt;
  if (alphaUsed) {
    outBuf = await sharp(fp)
      .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
      .toBuffer();
    outFmt = 'png';
  } else {
    outBuf = await sharp(fp)
      .flatten({ background: { r: 255, g: 255, b: 255 } }) // strip unused alpha cleanly
      .jpeg({ quality: 85, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
      .toBuffer();
    outFmt = 'jpeg';
  }

  const sizeAfter = outBuf.length;
  totalBefore += sizeBefore;

  // Only write if we actually got smaller. Some already-tight files won't shrink.
  if (sizeAfter < sizeBefore * 0.95) {
    if (!DRY_RUN) fs.writeFileSync(fp, outBuf);
    totalAfter += sizeAfter;
    processed++;
    const pct = Math.round((1 - sizeAfter / sizeBefore) * 100);
    console.log(
      `${DRY_RUN ? '[dry]' : '[ok ]'} ${fmtKB(sizeBefore)} → ${fmtKB(sizeAfter)}  (-${pct}% ${outFmt})  ${fp}`
    );
  } else {
    totalAfter += sizeBefore;
    skipped++;
    console.log(`[skip] already tight: ${fp}`);
  }
}

console.log('\n──────');
console.log(`processed: ${processed}, skipped: ${skipped}`);
console.log(`total: ${fmtKB(totalBefore)} → ${fmtKB(totalAfter)} (saved ${fmtKB(totalBefore - totalAfter)})`);
if (DRY_RUN) console.log('(dry run — no files written)');
