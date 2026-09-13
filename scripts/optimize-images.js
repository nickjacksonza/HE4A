// One-off script: regenerate the responsive photo variants used by the built pages.
// Run manually with `npm run optimize:images` whenever a source photo under assets/photos/
// changes. Not part of `npm run build` -- outputs are checked in like any other asset.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'assets', 'photos');
const OUT_DIR = path.join(__dirname, '..', 'assets', 'photos-optimized');
const LOGO_SRC = path.join(__dirname, '..', 'assets', 'logo', 'mark-transparent.webp');
const LOGO_OUT = path.join(__dirname, '..', 'assets', 'logo', 'mark-transparent-76.webp');

// width variants to generate per photo, keyed by filename (without extension).
// Photos used as a page hero need widths up to their native size (sizes="100vw");
// photos used only in cards/media-rows stay smaller. Requested widths beyond a
// photo's native size are clamped (see optimizePhoto) and de-duplicated below.
const PHOTOS = {
  'team-outdoors': [640, 960, 1280, 1920],        // hero (Home, About Us) -- native 1920x1280
  'whiteboard-session': [400, 640, 960, 1200],    // hero (Non-Profit Leadership) + card (Home, Org Dev, Trainings) -- native 1200x627
  'pair-working': [400, 640, 960, 1280, 1920],    // hero (Organizational Development) + card (Home, Contact) -- native 1920x1280
  'team-meeting': [400, 640, 960, 1280, 1920],    // hero (Trainings) + card (Home, Org Dev) -- native 1920x1280
  'panel-speaking': [640, 960, 1200],             // hero (Public Speaking) + card (Home) -- native 1200x627
  'lab-research': [400, 600, 900, 1200]           // card / media-row / tab panel (Org Dev, Trainings) -- native 1200x627
};

async function optimizePhoto(name, widths) {
  const input = path.join(SRC_DIR, `${name}.jpg`);
  const outDir = path.join(OUT_DIR, name);
  fs.mkdirSync(outDir, { recursive: true });
  const meta = await sharp(input).metadata();

  // Clamp requested widths to the source's native width and de-duplicate --
  // keeps srcset "Nw" descriptors truthful (the file is really N px wide).
  const actualWidths = [...new Set(widths.map((w) => Math.min(w, meta.width)))];

  for (const w of actualWidths) {
    const base = sharp(input).resize({ width: w });
    await base.clone().avif({ quality: 50 }).toFile(path.join(outDir, `${name}-${w}.avif`));
    await base.clone().webp({ quality: 70 }).toFile(path.join(outDir, `${name}-${w}.webp`));
    await base.clone().jpeg({ quality: 72, mozjpeg: true }).toFile(path.join(outDir, `${name}-${w}.jpg`));
    console.log(`  ${name}-${w}.{avif,webp,jpg}`);
  }
  return actualWidths;
}

async function optimizeLogo() {
  await sharp(LOGO_SRC).resize({ height: 76 }).webp({ quality: 90 }).toFile(LOGO_OUT);
  console.log('  mark-transparent-76.webp');
}

(async () => {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  const finalWidths = {};
  for (const [name, widths] of Object.entries(PHOTOS)) {
    console.log(`Optimizing ${name}...`);
    finalWidths[name] = await optimizePhoto(name, widths);
  }
  console.log('Resizing logo...');
  await optimizeLogo();
  console.log('Done. Actual widths generated (use these exact arrays in page modules):');
  console.log(JSON.stringify(finalWidths, null, 2));
})();
