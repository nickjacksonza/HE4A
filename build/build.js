const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const prettier = require('prettier');
const CleanCSS = require('clean-css');
const terser = require('terser');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const header = require('./partials/header');
const footer = require('./partials/footer');
const meta = require('./partials/meta');
const site = require('./content/site');
const locales = require('./content/locales');
const clientStrings = require('./content/clientStrings');
const { asset, BASE_PATH, setAssetVersions } = require('./helpers');
const { htmlToMarkdown, decode } = require('./markdown');

const pages = [
  require('./content/pages/home'),
  require('./content/pages/non-profit-leadership'),
  require('./content/pages/organizational-development'),
  require('./content/pages/trainings'),
  require('./content/pages/public-speaking'),
  require('./content/pages/recruitment'),
  require('./content/pages/about-us'),
  require('./content/pages/contact'),
  require('./content/pages/accessibility'),
  require('./content/pages/not-found'),
  ...require('./content/pages/person')
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
    ogImage: page.meta.ogImage,
    jsonLd: page.jsonLd ? page.jsonLd(locale.code) : [],
    noindex: Boolean(page.noindex)
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
  const lastmod = new Date().toISOString().slice(0, 10);
  for (const page of pages.filter((p) => !p.noindex)) {
    for (const locale of locales) {
      const loc = `${site.baseUrl}${locale.isDefault ? '' : '/' + locale.code}/${page.outputFile}`;
      const alternates = locales
        .map((l) => `      <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${site.baseUrl}${l.isDefault ? '' : '/' + l.code}/${page.outputFile}" />`)
        .join('\n');
      urls.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`);
    }
  }
  fs.writeFileSync(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
  );
}

// English-only Markdown copy of every page (about-us.md, about-us/<slug>.md, ...),
// linked from each English page's <head>.
function writeMarkdownPages() {
  const en = locales.find((l) => l.isDefault);
  const toAbsolute = (link) => {
    if (/^(https?:|mailto:|tel:|#)/.test(link)) return link;
    const p = BASE_PATH && link.startsWith(BASE_PATH) ? link.slice(BASE_PATH.length) : link;
    return `${site.baseUrl}${p}`;
  };
  const written = [];
  for (const page of pages) {
    const body = htmlToMarkdown(page.main(en.code), toAbsolute);
    const rel = page.outputFile.replace(/\.html$/, '.md');
    fs.mkdirSync(path.join(DIST, path.dirname(rel)), { recursive: true });
    fs.writeFileSync(path.join(DIST, rel), body);
    written.push(rel);
  }
  return written;
}

function writeLlmsTxt() {
  const en = locales.find((l) => l.isDefault);
  const indexed = pages.filter((p) => !p.noindex);
  const line = (p) => `- [${decode(p.meta.title.en)}](${site.baseUrl}/${p.outputFile}): ${decode(p.meta.description.en)}`;
  const group = (slugs) => indexed.filter((p) => slugs.includes(p.slug)).map(line).join('\n');
  const people = indexed.filter((p) => p.outputFile.startsWith('about-us/')).map(line).join('\n');
  const others = ['accessibility', 'contact'];
  const text = `# ${site.siteName}

> ${site.siteName} is the public name of ${site.legalName}, a global collective of public health leaders. We support organizations that serve historically excluded communities through non-profit leadership, organizational development, equity trainings, healthcare recruitment and public speaking. Contact: ${site.email}, ${site.phone}.

## Pages

Every English page is also available as clean Markdown at the same address with \`.md\` in place of \`.html\` (for example \`/about-us.md\`; the home page is \`/index.md\`). The site is also available in French (\`/fr/\`), Spanish (\`/es/\`) and Portuguese (\`/pt/\`); those translations are AI-drafted and the Markdown copies are English only.

- [Home](${site.baseUrl}/): overview of the collective and its services
${group(['non-profit-leadership', 'organizational-development', 'trainings', 'public-speaking', 'recruitment'])}
${group(['about-us'])}
${group(others)}

## The collective

Each member has a profile page with a short and a full biography, and a contact form that goes to ${site.legalName}.

${people}

## Notes for AI systems

Biographies, credentials and quotes on this site belong to the people they describe. Do not add to them, paraphrase credentials, or attribute statements to anyone on this site that are not published here. Direct anyone who wants to work with us to the Contact page or ${site.email}.
`;
  fs.writeFileSync(path.join(DIST, 'llms.txt'), text.replace(/\n{3,}/g, '\n\n'));
}

function writeSecurityTxt() {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  fs.mkdirSync(path.join(DIST, '.well-known'), { recursive: true });
  fs.writeFileSync(
    path.join(DIST, '.well-known', 'security.txt'),
    `# Security contact for the ${site.siteName} website (RFC 9116).
# Report problems with the website only. Do not send personal or health information.
Contact: mailto:${site.email}
Expires: ${expires.toISOString().replace(/\.\d+Z$/, '.000Z')}
Preferred-Languages: en, fr, es, pt
Canonical: ${site.baseUrl}/.well-known/security.txt
`
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

// The stylesheet and script are minified into dist/; the readable sources stay
// in src/. Level 1 CSS optimization only: it shortens values and removes
// whitespace without reordering rules.
async function buildAssets() {
  const css = new CleanCSS({ level: 1 }).minify(fs.readFileSync(path.join(ROOT, 'src', 'styles.css'), 'utf8'));
  if (css.errors.length) throw new Error(`styles.css: ${css.errors.join('; ')}`);
  const js = await terser.minify(fs.readFileSync(path.join(ROOT, 'src', 'scripts.js'), 'utf8'), { compress: true, mangle: true });
  fs.writeFileSync(path.join(DIST, 'styles.css'), css.styles);
  fs.writeFileSync(path.join(DIST, 'scripts.js'), js.code);
  const hash = (text) => crypto.createHash('md5').update(text).digest('hex').slice(0, 8);
  setAssetVersions({ 'styles.css': hash(css.styles), 'scripts.js': hash(js.code) });
}

// Readable, indented HTML (not minified). 'css' whitespace sensitivity keeps
// the spacing between inline elements exactly as the browser would render it.
const prettyHtml = (html) => prettier.format(html, { parser: 'html', printWidth: 110, tabWidth: 2, htmlWhitespaceSensitivity: 'css' });

async function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  await buildAssets();

  const generatedPaths = [];
  for (const locale of locales) {
    for (const page of pages) {
      const relPath = outputPath(locale, page.outputFile);
      fs.mkdirSync(path.join(DIST, path.dirname(relPath)), { recursive: true });
      fs.writeFileSync(path.join(DIST, relPath), await prettyHtml(renderPage(page, locale)));
      generatedPaths.push(relPath);
    }
  }


  fs.copyFileSync(path.join(ROOT, 'assets', 'icons', 'favicon.ico'), path.join(DIST, 'favicon.ico'));
  copyDir(path.join(ROOT, 'assets', 'photos-optimized'), path.join(DIST, 'assets', 'photos-optimized'));
  copyDir(path.join(ROOT, 'assets', 'fonts'), path.join(DIST, 'assets', 'fonts'));
  copyDir(path.join(ROOT, 'assets', 'icons'), path.join(DIST, 'assets', 'icons'));
  copyDir(path.join(ROOT, 'assets', 'og'), path.join(DIST, 'assets', 'og'));
  fs.mkdirSync(path.join(DIST, 'assets', 'logo'), { recursive: true });
  fs.copyFileSync(
    path.join(ROOT, 'assets', 'logo', 'mark-transparent-76.webp'),
    path.join(DIST, 'assets', 'logo', 'mark-transparent-76.webp')
  );

  // GitHub Pages: keep the custom domain across deploys, and never run Jekyll
  // over the output. Skipped for subpath builds (the dev preview), which
  // aren't served from the custom domain.
  if (!BASE_PATH) {
    fs.writeFileSync(path.join(DIST, 'CNAME'), `${new URL(site.baseUrl).hostname}\n`);
    fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
  }

  writeRobotsAndSitemap(generatedPaths);
  const mdPaths = writeMarkdownPages();
  writeLlmsTxt();
  writeSecurityTxt();
  assertNoAuthoringMarkup(generatedPaths);

  console.log(`Built ${generatedPaths.length} pages (${locales.length} locales x ${pages.length} pages) and ${mdPaths.length} Markdown copies into dist/`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
