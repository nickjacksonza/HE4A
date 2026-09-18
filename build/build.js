const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const header = require('./partials/header');
const footer = require('./partials/footer');
const meta = require('./partials/meta');
const site = require('./content/site');
const locales = require('./content/locales');
const clientStrings = require('./content/clientStrings');
const { asset } = require('./helpers');

const pages = [
  require('./content/pages/home'),
  require('./content/pages/non-profit-leadership'),
  require('./content/pages/organizational-development'),
  require('./content/pages/trainings'),
  require('./content/pages/public-speaking'),
  require('./content/pages/recruitment'),
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

function outputPath(locale, outputFile) {
  return locale.isDefault ? outputFile : path.join(locale.code, outputFile);
}

function renderPage(page, locale) {
  const metaHtml = meta({
    locale,
    title: page.meta.title[locale.code],
    description: page.meta.description[locale.code],
    outputFile: page.outputFile,
    ogImage: page.meta.ogImage
  });

  const i18nScript = `<script>window.__I18N__=${JSON.stringify(clientStrings[locale.code])};</script>`;

  return `<!DOCTYPE html>
<html lang="${locale.hreflang}">
<head>
${metaHtml}
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
${header(locale.code, page.activeNavId, page.outputFile)}
<main id="main-content">
${page.main(locale.code)}
</main>
${footer(locale.code)}
${i18nScript}
<script defer src="${asset('scripts.js')}"></script>
</body>
</html>
`;
}

function writeRobotsAndSitemap(generatedPaths) {
  fs.writeFileSync(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\nSitemap: ${site.baseUrl}/sitemap.xml\n`
  );

  const urls = [];
  for (const page of pages) {
    for (const locale of locales) {
      const loc = `${site.baseUrl}${locale.isDefault ? '' : '/' + locale.code}/${page.outputFile}`;
      const alternates = locales
        .map((l) => `      <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${site.baseUrl}${l.isDefault ? '' : '/' + l.code}/${page.outputFile}" />`)
        .join('\n');
      urls.push(`  <url>\n    <loc>${loc}</loc>\n${alternates}\n  </url>`);
    }
  }
  fs.writeFileSync(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
  );
}

function assertNoAuthoringMarkup(generatedPaths) {
  const banned = ['dc-import', 'sc-if', 'sc-for', 'x-dc', 'hint-placeholder', 'style-hover', 'data-dc-script'];
  for (const relPath of generatedPaths) {
    const html = fs.readFileSync(path.join(DIST, relPath), 'utf8');
    for (const token of banned) {
      if (html.includes(token)) {
        throw new Error(`Authoring-tool markup "${token}" leaked into ${relPath}`);
      }
    }
  }
}

function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  const generatedPaths = [];
  for (const locale of locales) {
    for (const page of pages) {
      const relPath = outputPath(locale, page.outputFile);
      fs.mkdirSync(path.join(DIST, path.dirname(relPath)), { recursive: true });
      fs.writeFileSync(path.join(DIST, relPath), renderPage(page, locale));
      generatedPaths.push(relPath);
    }
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

  writeRobotsAndSitemap(generatedPaths);
  assertNoAuthoringMarkup(generatedPaths);

  console.log(`Built ${generatedPaths.length} pages (${locales.length} locales x ${pages.length} pages) into dist/`);
}

build();
