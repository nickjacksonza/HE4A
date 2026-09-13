const site = require('../content/site');

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

// pageMeta: { title, description, path, ogImage }
function meta(pageMeta) {
  const url = `${site.baseUrl}/${pageMeta.path}`;
  const ogImage = `${site.baseUrl}/assets/og/${pageMeta.ogImage}.jpg`;
  const fullTitle = pageMeta.title === site.siteName ? site.siteName : `${pageMeta.title} | ${site.siteName}`;

  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${fullTitle}</title>
<meta name="description" content="${pageMeta.description}">
<link rel="canonical" href="${url}">

<link rel="icon" href="assets/icons/favicon.ico" sizes="32x32">
<link rel="icon" type="image/png" href="assets/icons/icon-192.png" sizes="192x192">
<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
<link rel="manifest" href="assets/icons/site.webmanifest">

<link rel="preload" as="font" type="font/woff2" href="assets/fonts/public-sans/public-sans-400-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/newsreader/newsreader-600-latin.woff2" crossorigin>
<link rel="stylesheet" href="styles.css">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.siteName}">
<meta property="og:title" content="${fullTitle}">
<meta property="og:description" content="${pageMeta.description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${fullTitle}">
<meta name="twitter:description" content="${pageMeta.description}">
<meta name="twitter:image" content="${ogImage}">

<script type="application/ld+json">${JSON.stringify(organizationJsonLd())}</script>`;
}

module.exports = meta;
