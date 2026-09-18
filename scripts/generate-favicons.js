// One-off script: generate the favicon/icon set + per-page Open Graph images.
// Run manually with `npm run favicons`. Source: assets/logo/mark-rainbow-square.jpg
// (the transparent wordmark logo reads too thin at 16-32px, the solid rainbow square doesn't).
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;

const SRC = path.join(__dirname, '..', 'assets', 'logo', 'mark-rainbow-square.jpg');
const ICONS_DIR = path.join(__dirname, '..', 'assets', 'icons');
const OG_DIR = path.join(__dirname, '..', 'assets', 'og');

const OG_PAGES = [
  'home', 'non-profit-leadership', 'organizational-development',
  'trainings', 'public-speaking', 'recruitment', 'about-us', 'contact'
];

async function icons() {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
  const sizes = [16, 32, 192, 512];
  for (const size of sizes) {
    await sharp(SRC).resize(size, size).png().toFile(path.join(ICONS_DIR, `icon-${size}.png`));
  }
  await sharp(SRC).resize(180, 180).png().toFile(path.join(ICONS_DIR, 'apple-touch-icon.png'));

  const icoBuffer = await pngToIco([
    path.join(ICONS_DIR, 'icon-16.png'),
    path.join(ICONS_DIR, 'icon-32.png')
  ]);
  fs.writeFileSync(path.join(ICONS_DIR, 'favicon.ico'), icoBuffer);

  const manifest = {
    name: 'Health Equity 4 All',
    short_name: 'HE4A',
    icons: [
      { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    theme_color: '#3d7ea6',
    background_color: '#fdf9f2',
    display: 'standalone'
  };
  fs.writeFileSync(path.join(ICONS_DIR, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Generated favicon.ico, apple-touch-icon.png, icon-{16,32,192,512}.png, site.webmanifest');
}

async function ogImages() {
  fs.mkdirSync(OG_DIR, { recursive: true });
  // Simple brand-mark-on-paper OG image, shared across pages (a single generic asset is fine --
  // per-page distinctiveness in OG cards matters far less here than shipping *something* valid).
  const canvas = await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#fdf9f2' }
  })
    .composite([{ input: await sharp(SRC).resize(360, 360).toBuffer(), gravity: 'center' }])
    .jpeg({ quality: 82 })
    .toBuffer();
  for (const slug of OG_PAGES) {
    fs.writeFileSync(path.join(OG_DIR, `${slug}.jpg`), canvas);
  }
  console.log(`Generated ${OG_PAGES.length} OG images in assets/og/`);
}

(async () => {
  await icons();
  await ogImages();
})();
