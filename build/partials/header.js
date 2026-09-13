const navItems = require('../content/nav');
const { slugify } = require('../helpers');

const LANGS = [
  { code: 'EN', name: 'English', active: true },
  { code: 'FR', name: 'Français', active: false },
  { code: 'ES', name: 'Español', active: false },
  { code: 'PT', name: 'Português', active: false }
];

function langBar() {
  const buttons = LANGS.map((lang) => {
    if (lang.active) {
      return `      <button type="button" class="lang-btn is-active" aria-current="true">${lang.code}</button>`;
    }
    return `      <button type="button" class="lang-btn" disabled aria-disabled="true" title="${lang.name} — translation coming soon">${lang.code}<span class="visually-hidden"> (${lang.name}, coming soon)</span></button>`;
  }).join('\n');

  return `  <div class="lang-bar">
    <span class="lang-bar-label">Language</span>
    <div class="lang-buttons">
${buttons}
    </div>
  </div>`;
}

function navMarkup(activeLabel) {
  return navItems
    .map((item) => {
      const isActive = item.label === activeLabel;
      const hasDropdown = item.items.length > 0;
      const underline = isActive ? '\n        <span class="nav-link-underline" aria-hidden="true"></span>' : '';

      if (!hasDropdown) {
        return `      <div class="nav-item">
        <a href="${item.href}" class="nav-link"${isActive ? ' aria-current="page"' : ''}>${item.label}</a>${underline}
      </div>`;
      }

      const dropdownLinks = item.items
        .map((sub) => `          <a href="${item.href}#${sub.anchor}" class="nav-dropdown-link">${sub.label}</a>`)
        .join('\n');

      return `      <div class="nav-item">
        <a href="${item.href}" class="nav-link" aria-haspopup="true" aria-expanded="false">${item.label} <span class="nav-caret" aria-hidden="true">▾</span></a>${underline}
        <div class="nav-dropdown">
${dropdownLinks}
        </div>
      </div>`;
    })
    .join('\n');
}

function header(activeLabel) {
  return `<div class="site-header-wrap">
${langBar()}
  <header class="site-header">
    <a href="index.html" class="site-logo">
      <img src="assets/logo/mark-transparent-76.webp" alt="Health Equity 4 All" width="43" height="38" class="site-logo-mark">
      <span class="site-logo-word">Equity Is the Word</span>
    </a>
    <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
      <span class="nav-toggle-icon" aria-hidden="true"></span>
    </button>
    <nav class="nav" id="primary-nav">
${navMarkup(activeLabel)}
      <a href="contact.html" class="btn btn-primary btn-sm nav-cta">Work With Us</a>
    </nav>
  </header>
</div>`;
}

module.exports = header;
