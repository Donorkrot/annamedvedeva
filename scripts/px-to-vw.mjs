#!/usr/bin/env node
// Convert all `Npx` values inside `@media (max-width: 768px)` blocks of
// globals.css to vw units relative to a 375 base. This guarantees the
// mobile design renders pixel-identical proportionally on any phone width
// (320 / 375 / 393 / 430), instead of relying on a viewport-meta lock that
// some iOS Safari versions interpret inconsistently.
//
// Conversion rule: `Npx` → `(N/375 * 100).vw` rounded to 4 decimal places.
//
// Skipped values:
//   • literal `0px` — pointless to convert, stays 0
//   • `1px` inside `border:` / `outline:` declarations — keeps hairline
//     crispness on hi-DPI screens (sub-1px antialiasing looks fuzzy)
//
// Run: node scripts/px-to-vw.mjs
import { readFile, writeFile, copyFile } from 'node:fs/promises';

const CSS = 'src/app/globals.css';
const BACKUP = `${CSS}.bak-${Date.now()}`;

const src = await readFile(CSS, 'utf8');
await copyFile(CSS, BACKUP);
console.log(`backup: ${BACKUP}`);

// Find every `@media (max-width: 768px) { ... }` block, including nested
// braces. We track depth so we exit at the matching closing brace, not the
// first one we hit.
const startRe = /@media\s*\(\s*max-width:\s*768px\s*\)\s*\{/gi;
let out = '';
let cursor = 0;
let convertedCount = 0;

while (true) {
  startRe.lastIndex = cursor;
  const match = startRe.exec(src);
  if (!match) break;

  // Copy everything before this block as-is.
  out += src.slice(cursor, match.index + match[0].length);
  let i = match.index + match[0].length;
  let depth = 1;

  let block = '';
  while (i < src.length && depth > 0) {
    const c = src[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) break;
    }
    block += c;
    i++;
  }

  // Transform inside the block.
  const transformed = block.replace(
    /(border(?:-(?:top|right|bottom|left))?\s*:\s*)?(\d+(?:\.\d+)?)px/g,
    (full, borderPrefix, num) => {
      const n = parseFloat(num);
      // Keep 1px borders / outlines crisp on retina.
      if (borderPrefix && n === 1) return full;
      // 0px → 0 (vw of 0 is 0; just write 0 for clarity)
      if (n === 0) return borderPrefix ? `${borderPrefix}0` : '0';
      const vw = (n / 375 * 100).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
      convertedCount++;
      return `${borderPrefix ?? ''}${vw}vw`;
    }
  );

  out += transformed + '}';
  cursor = i + 1;
}

// Tail.
out += src.slice(cursor);

await writeFile(CSS, out);
console.log(`converted ${convertedCount} px values → vw inside mobile media queries`);
