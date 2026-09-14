const site = require('../content/site');
const locales = require('../content/locales');
const { asset } = require('../helpers');

function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.siteName,
    legalName: site.legalName,
    url: site.baseUrl,
    logo: `${site.baseUrl}/assets/logo/mark-transparent-76.webp`,
    sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
    address: site.offices.map((o) => ({
      '@type': 'PostalAddress',
      addressLocality: o.city,
      addressCountry: o.country
    }))
  };
}

function urlFor(locale, outputFile) {
  const prefix = locale.isDefault ? '' : `/${locale.code}`;
  return `${site.baseUrl}${prefix}/${outputFile}`;
}

// pageMeta: { locale, title, description, outputFile, ogImage }
function meta(pageMeta) {
  const { locale, title, description, outputFile, ogImage } = pageMeta;
  const url = urlFor(locale, outputFile);
  const ogImageUrl = `${site.baseUrl}/assets/og/${ogImage}.jpg`;
  const fullTitle = title === site.siteName ? site.siteName : `${title} | ${site.siteName}`;

  const alternates = locales
    .map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${urlFor(l, outputFile)}">`)
    .join('\n');
  const defaultLocale = locales.find((l) => l.isDefault);
  const xDefault = `<link rel="alternate" hreflang="x-default" href="${urlFor(defaultLocale, outputFile)}">`;

  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${fullTitle}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${url}">
${alternates}
${xDefault}

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

<script type="application/ld+json">${JSON.stringify(organizationJsonLd())}</script>`;
}

module.exports = meta;
