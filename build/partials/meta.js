const site = require('../content/site');
const locales = require('../content/locales');
const { asset, cleanPath } = require('../helpers');

// Google Tag Manager. The dataLayer is set up straight away, so nothing is lost,
// but gtm.js itself loads on the visitor's first interaction (or about eight
// seconds after the page has loaded, whichever comes first). That keeps its
// ~70 KB of JavaScript off the critical path, which is what costs the
// performance score (blocking time). Tracking starts a moment later, not
// never: a visitor who leaves within eight seconds without touching the page
// is not counted.
const GTM_SNIPPET = `<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  (function () {
    var started = false;
    function load() {
      if (started) return;
      started = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K7QJ4WB9';
      document.head.appendChild(s);
    }
    ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (e) {
      addEventListener(e, load, { once: true, passive: true });
    });
    addEventListener('load', function () { setTimeout(load, 8000); });
  })();
</script>`;

function urlFor(locale, outputFile) {
  const prefix = locale.isDefault ? '' : `/${locale.code}`;
  return `${site.baseUrl}${prefix}/${cleanPath(outputFile)}`;
}

// pageMeta: { locale, title, description, outputFile, ogImage }
function meta(pageMeta) {
  const { locale, title, description, outputFile, ogImage, jsonLd, noindex = false } = pageMeta;
  const url = urlFor(locale, outputFile);
  const ogImageUrl = `${site.baseUrl}/assets/og/${ogImage}.jpg`;
  const fullTitle = title.includes(site.siteName) ? title : `${title} | ${site.siteName}`;

  const alternates = locales
    .map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${urlFor(l, outputFile)}">`)
    .join('\n');
  const defaultLocale = locales.find((l) => l.isDefault);
  const xDefault = `<link rel="alternate" hreflang="x-default" href="${urlFor(defaultLocale, outputFile)}">`;

  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="jII_-pe_fkFM_Ft2Xjh8usSYIMGxs6m-SbZpmid3Fpw">
<title>${fullTitle}</title>
<meta name="description" content="${description}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">
${alternates}
${xDefault}${locale.isDefault ? `\n<link rel="alternate" type="text/markdown" href="${asset(outputFile.replace(/\.html$/, '.md'))}">` : ''}`}

<link rel="icon" href="${asset('assets/icons/favicon.ico')}" sizes="32x32">
<link rel="icon" type="image/png" href="${asset('assets/icons/icon-192.png')}" sizes="192x192">
<link rel="apple-touch-icon" href="${asset('assets/icons/apple-touch-icon.png')}">
<link rel="manifest" href="${asset('assets/icons/site.webmanifest')}">

<link rel="preload" as="font" type="font/woff2" href="${asset('assets/fonts/public-sans/public-sans-400-latin.woff2')}" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${asset('assets/fonts/newsreader/newsreader-600-latin.woff2')}" crossorigin>
<link rel="stylesheet" href="${asset('styles.css')}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.siteName}">
<meta property="og:title" content="${fullTitle}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImageUrl}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${fullTitle}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${ogImageUrl}">

<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>

${GTM_SNIPPET}`;
}

meta.urlFor = urlFor;
module.exports = meta;
