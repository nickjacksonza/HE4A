const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const header = require('./partials/header');
const footer = require('./partials/footer');
const meta = require('./partials/meta');
const site = require('./content/site');

const pages = [
  require('./content/pages/home'),
  require('./content/pages/non-profit-leadership'),
  require('./content/pages/organizational-development'),
  require('./content/pages/trainings'),
  require('./content/pages/public-speaking'),
  require('./content/pages/about-us'),
  require('./content/pages/contact')
];

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function renderPage(page) {
  const metaHtml = meta({
    title: page.meta.title,
    description: page.meta.description,
    path: page.outputFile,
    ogImage: page.meta.ogImage
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
${metaHtml}
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
${header(page.activeNavLabel)}
<main id="main-content">
${page.main()}
</main>
${footer()}
<script defer src="scripts.js"></script>
</body>
</html>
`;
}

function writeRobotsAndSitemap() {
  fs.writeFileSync(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\nSitemap: ${site.baseUrl}/sitemap.xml\n`
  );

  const urls = pages
    .map((page) => `  <url>\n    <loc>${site.baseUrl}/${page.outputFile}</loc>\n  </url>`)
    .join('\n');
  fs.writeFileSync(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
}

function assertNoAuthoringMarkup() {
  const banned = ['dc-import', 'sc-if', 'sc-for', 'x-dc', 'hint-placeholder', 'style-hover', 'data-dc-script'];
  for (const page of pages) {
    const filePath = path.join(DIST, page.outputFile);
    const html = fs.readFileSync(filePath, 'utf8');
    for (const token of banned) {
      if (html.includes(token)) {
        throw new Error(`Authoring-tool markup "${token}" leaked into ${page.outputFile}`);
      }
    }
  }
}

function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  for (const page of pages) {
    fs.writeFileSync(path.join(DIST, page.outputFile), renderPage(page));
  }

  fs.copyFileSync(path.join(ROOT, 'src', 'styles.css'), path.join(DIST, 'styles.css'));
  fs.copyFileSync(path.join(ROOT, 'src', 'scripts.js'), path.join(DIST, 'scripts.js'));

  copyDir(path.join(ROOT, 'assets', 'photos-optimized'), path.join(DIST, 'assets', 'photos-optimized'));
  copyDir(path.join(ROOT, 'assets', 'fonts'), path.join(DIST, 'assets', 'fonts'));
  copyDir(path.join(ROOT, 'assets', 'icons'), path.join(DIST, 'assets', 'icons'));
  copyDir(path.join(ROOT, 'assets', 'og'), path.join(DIST, 'assets', 'og'));
  fs.mkdirSync(path.join(DIST, 'assets', 'logo'), { recursive: true });
  fs.copyFileSync(
    path.join(ROOT, 'assets', 'logo', 'mark-transparent-76.webp'),
    path.join(DIST, 'assets', 'logo', 'mark-transparent-76.webp')
  );

  writeRobotsAndSitemap();
  assertNoAuthoringMarkup();

  console.log(`Built ${pages.length} pages into dist/`);
}

build();
