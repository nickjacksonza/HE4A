const { NAV_STRUCTURE, NAV_LABELS } = require('../content/nav');
const shared = require('../content/shared');
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
    <a href="${href(currentLocale, 'contact.html')}" class="lang-bar-cta">${shared.contactLabel[currentLocale]}</a>
  </div>`;
}

// Social links shown at the bottom of the mobile menu (hidden on desktop). The
// language bar above the header stays on screen at every width, and the footer
// has the email and phone, so neither is repeated here: each link text appears
// once per page.
function navExtras() {
  const social = [['Facebook', site.social.facebook], ['Instagram', site.social.instagram], ['LinkedIn', site.social.linkedin], ['Twitter', site.social.twitter]]
    .map(([label, url]) => `<a href="${url}" class="nav-extras-link" rel="noopener">${label}</a>`).join('\n        ');
  return `      <div class="nav-extras">
        <div class="nav-extras-row">
        ${social}
        </div>
      </div>`;
}

// Accessible name for the button that opens a nav item's sub-pages. The item
// itself is a normal link to its page; this button only toggles the list.
const SUBMENU_LABEL = {
  en: (label) => `${label} submenu`,
  fr: (label) => `Sous-menu ${label}`,
  es: (label) => `Submenú ${label}`,
  pt: (label) => `Submenu ${label}`
};

const CHEVRON = '<svg class="nav-caret" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3.5 6l4.5 4.5L12.5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function navMarkup(locale, activeNavId) {
  const labels = NAV_LABELS[locale];
  return NAV_STRUCTURE
    .map((item) => {
      const isActive = item.id === activeNavId;
      const hasDropdown = item.items.length > 0;
      const underline = isActive ? '\n        <span class="nav-link-underline" aria-hidden="true"></span>' : '';
      const itemHref = href(locale, item.href);
      const link = `<a href="${itemHref}" class="nav-link"${isActive ? ' aria-current="page"' : ''}>${labels[item.id]}</a>`;

      if (!hasDropdown) {
        return `      <div class="nav-item">
        <div class="nav-item-row">
          ${link}
        </div>${underline}
      </div>`;
      }

      const submenuId = `submenu-${item.id}`;
      const dropdownLinks = item.items
        .map((sub) => `          <a href="${itemHref}#${sub.anchor}" class="nav-dropdown-link">${labels[sub.id]}</a>`)
        .join('\n');

      return `      <div class="nav-item">
        <div class="nav-item-row">
          ${link}
          <button type="button" class="nav-caret-btn" aria-expanded="false" aria-controls="${submenuId}" aria-label="${SUBMENU_LABEL[locale](labels[item.id])}">${CHEVRON}</button>
        </div>${underline}
        <div class="nav-dropdown" id="${submenuId}">
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
      <img src="${asset('assets/logo/mark-transparent-76.webp')}" alt="Equity Is the Word" width="43" height="38" class="site-logo-mark">
      <span class="site-logo-word">Equity Is the Word</span>
    </a>
    <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Menu">
      <span class="nav-toggle-icon" aria-hidden="true"></span>
    </button>
    <nav class="nav" id="primary-nav">
${navMarkup(locale, activeNavId)}
      <a href="${href(locale, 'contact.html')}" class="btn btn-primary btn-sm nav-cta">${NAV_LABELS[locale].workWithUs}</a>
${navExtras()}
    </nav>
  </header>
</div>`;
}

module.exports = header;
