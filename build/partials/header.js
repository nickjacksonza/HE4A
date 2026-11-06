const { NAV_STRUCTURE, NAV_LABELS } = require('../content/nav');
const locales = require('../content/locales');
const { href, asset } = require('../helpers');
const site = require('../content/site');

function langBar(currentLocale, currentOutputFile) {
  const buttons = locales.map((locale) => {
    if (locale.code === currentLocale) {
      return `      <span class="lang-btn is-active" aria-current="true">${locale.code.toUpperCase()}</span>`;
    }
    return `      <a href="${href(locale.code, currentOutputFile)}" class="lang-btn" title="${locale.endonym}">${locale.code.toUpperCase()}</a>`;
  }).join('\n');

  return `  <div class="lang-bar">
    <span class="lang-bar-label">Language</span>
    <div class="lang-buttons">
${buttons}
    </div>
  </div>`;
}

// Language, contact and social links shown at the bottom of the mobile menu
// (hidden on desktop, where the lang bar above the header covers language).
function navExtras(currentLocale, currentOutputFile) {
  const langs = locales.map((locale) => (locale.code === currentLocale
    ? `<span class="nav-lang-chip is-active" aria-current="true">${locale.code.toUpperCase()}</span>`
    : `<a href="${href(locale.code, currentOutputFile)}" class="nav-lang-chip" title="${locale.endonym}" lang="${locale.hreflang}">${locale.code.toUpperCase()}</a>`)).join('\n        ');
  const social = [['Facebook', site.social.facebook], ['Instagram', site.social.instagram], ['LinkedIn', site.social.linkedin], ['Twitter', site.social.twitter]]
    .map(([label, url]) => `<a href="${url}" class="nav-extras-link" rel="noopener">${label}</a>`).join('\n        ');
  return `      <div class="nav-extras">
        <div class="nav-extras-row">
        ${langs}
        </div>
        <div class="nav-extras-row">
          <a href="mailto:${site.email}" class="nav-extras-link">${site.email}</a>
          <a href="tel:${site.phone.replace(/\s+/g, '')}" class="nav-extras-link">${site.phone}</a>
        </div>
        <div class="nav-extras-row">
        ${social}
        </div>
      </div>`;
}

function navMarkup(locale, activeNavId) {
  const labels = NAV_LABELS[locale];
  return NAV_STRUCTURE
    .map((item) => {
      const isActive = item.id === activeNavId;
      const hasDropdown = item.items.length > 0;
      const underline = isActive ? '\n        <span class="nav-link-underline" aria-hidden="true"></span>' : '';
      const itemHref = href(locale, item.href);

      if (!hasDropdown) {
        return `      <div class="nav-item">
        <a href="${itemHref}" class="nav-link"${isActive ? ' aria-current="page"' : ''}>${labels[item.id]}</a>${underline}
      </div>`;
      }

      const dropdownLinks = item.items
        .map((sub) => `          <a href="${itemHref}#${sub.anchor}" class="nav-dropdown-link">${labels[sub.id]}</a>`)
        .join('\n');

      return `      <div class="nav-item">
        <a href="${itemHref}" class="nav-link" aria-haspopup="true" aria-expanded="false">${labels[item.id]} <span class="nav-caret" aria-hidden="true">▾</span></a>${underline}
        <div class="nav-dropdown">
${dropdownLinks}
        </div>
      </div>`;
    })
    .join('\n');
}

function header(locale, activeNavId, currentOutputFile) {
  // Translated labels are longer, so fr/es/pt get a compact desktop layout (styles.css).
  return `<div class="site-header-wrap${locale === 'en' ? '' : ' nav--long'}">
${langBar(locale, currentOutputFile)}
  <header class="site-header">
    <a href="${href(locale, 'index.html')}" class="site-logo">
      <img src="${asset('assets/logo/mark-transparent-76.webp')}" alt="Health Equity 4 All" width="43" height="38" class="site-logo-mark">
      <span class="site-logo-word">Equity Is the Word</span>
    </a>
    <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Menu">
      <span class="nav-toggle-icon" aria-hidden="true"></span>
    </button>
    <nav class="nav" id="primary-nav">
${navMarkup(locale, activeNavId)}
      <a href="${href(locale, 'contact.html')}" class="btn btn-primary btn-sm nav-cta">${NAV_LABELS[locale].workWithUs}</a>
${navExtras(locale, currentOutputFile)}
    </nav>
  </header>
</div>`;
}

module.exports = header;
