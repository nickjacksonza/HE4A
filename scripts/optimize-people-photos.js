// One-off script: generate responsive AVIF/WebP/JPG variants for real
// collective-member headshots pulled from the live site (assets/photos/people/*).
// Run manually via `npm run optimize:people` whenever a headshot is added/changed.
// Source photos vary in aspect ratio; all are center-cropped to a 1:1 square so
// every team-card/collective-grid slot can assume a uniform ratio.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'assets', 'photos', 'people');
const OUT_DIR = path.join(__dirname, '..', 'assets', 'photos-optimized', 'people');
const WIDTHS = [200, 400];

(async () => {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  const files = fs.readdirSync(SRC_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    const name = file.replace(/\.[^.]+$/, '');
    const input = path.join(SRC_DIR, file);
    const outDir = path.join(OUT_DIR, name);
    fs.mkdirSync(outDir, { recursive: true });
    console.log(`Optimizing ${name}...`);
    for (const w of WIDTHS) {
      const base = sharp(input).resize(w, w, { fit: 'cover', position: 'attention' });
      await base.clone().avif({ quality: 55 }).toFile(path.join(outDir, `${name}-${w}.avif`));
      await base.clone().webp({ quality: 75 }).toFile(path.join(outDir, `${name}-${w}.webp`));
      await base.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(outDir, `${name}-${w}.jpg`));
      console.log(`  ${name}-${w}.{avif,webp,jpg}`);
    }
  }
  console.log('Done.');
})();
