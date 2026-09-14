// Shared template helpers used by build/content/pages/*.js modules.

const locales = require('./content/locales');

// Deployment base path, e.g. "/HE4A" when the build is served from a
// GitHub Pages project subpath (nickjacksonza.github.io/HE4A/) rather than
// a domain root. Empty by default (root deployment, matching the site's
// real production domain). Set via SITE_BASE_PATH in the build environment;
// normalized to have no trailing slash.
const BASE_PATH = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');

// Builds an internal same-site link, prefixed with BASE_PATH and the
// current locale's URL segment (e.g. locale 'fr' -> "/fr/contact.html";
// the default locale 'en' stays unprefixed -> "/contact.html"). Every
// internal href/src in the build must go through this (or `asset()` below,
// or already be locale-agnostic like a same-page "#anchor" link) so
// translated pages don't silently link back to the English root, and the
// whole site still resolves correctly under a subpath deployment.
function href(locale, targetPath) {
  const l = locales.find((x) => x.code === locale);
  const localePrefix = l && !l.isDefault ? `/${l.code}` : '';
  return `${BASE_PATH}${localePrefix}/${targetPath}`;
}

// Builds a locale-agnostic asset/root-file link (stylesheet, script, icon,
// font, logo, etc.) -- just BASE_PATH + the given path, no locale segment.
function asset(assetPath) {
  return `${BASE_PATH}/${assetPath}`;
}

// Intrinsic pixel dimensions of each source photo (assets/photos/*.jpg) --
// used for width/height attributes so the browser can reserve layout space
// before the image loads (prevents CLS) regardless of the CSS display size.
const INTRINSIC = {
  'team-outdoors': { w: 1920, h: 1280 },
  'whiteboard-session': { w: 1200, h: 627 },
  'pair-working': { w: 1920, h: 1280 },
  'team-meeting': { w: 1920, h: 1280 },
  'panel-speaking': { w: 1200, h: 627 },
  'lab-research': { w: 1200, h: 627 }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Renders a <picture> with AVIF/WebP/JPG sources at the given widths.
// `priority: true` marks the page's LCP image (fetchpriority high, eager);
// otherwise the image is lazy-loaded.
function picture({ name, widths, sizes, alt, imgClass, priority }) {
  // Root-relative (plus BASE_PATH) so the same markup resolves correctly
  // from locale subdirectories (dist/fr/page.html) and under a subpath
  // deployment alike.
  const dir = asset(`assets/photos-optimized/${name}`);
  const srcset = (ext) => widths.map((w) => `${dir}/${name}-${w}.${ext} ${w}w`).join(', ');
  const largest = widths[widths.length - 1];
  const dims = INTRINSIC[name];

  const loadingAttrs = priority
    ? 'fetchpriority="high"'
    : 'loading="lazy" decoding="async"';

  return `<picture>
  <source type="image/avif" srcset="${srcset('avif')}" sizes="${sizes}">
  <source type="image/webp" srcset="${srcset('webp')}" sizes="${sizes}">
  <img src="${dir}/${name}-${largest}.jpg" srcset="${srcset('jpg')}" sizes="${sizes}" width="${dims.w}" height="${dims.h}" alt="${escapeHtml(alt)}"${imgClass ? ` class="${imgClass}"` : ''} ${loadingAttrs}>
</picture>`;
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Renders one FAQ accordion given a list of {q, a}. `idPrefix` keeps ids
// unique across pages that reuse this component more than once.
function accordion(faqs, idPrefix) {
  return `<div class="accordion">
${faqs
  .map((faq, i) => {
    const triggerId = `${idPrefix}-trigger-${i}`;
    const panelId = `${idPrefix}-panel-${i}`;
    const open = i === 0;
    return `  <div class="accordion-item">
    <h3>
      <button type="button" class="accordion-trigger" id="${triggerId}" aria-expanded="${open}" aria-controls="${panelId}">
        ${escapeHtml(faq.q)}
        <span class="accordion-icon" aria-hidden="true">+</span>
      </button>
    </h3>
    <div class="accordion-panel" id="${panelId}" role="region" aria-labelledby="${triggerId}"${open ? '' : ' hidden'}>
      <p>${escapeHtml(faq.a)}</p>
    </div>
  </div>`;
  })
  .join('\n')}
</div>`;
}

// "Portrait" placeholder-text prefix shown over portrait-placeholder boxes,
// translated since it's user-visible copy (unlike the person's own name).
const PORTRAIT_LABEL = { en: 'Portrait', fr: 'Portrait', es: 'Retrato', pt: 'Retrato' };

// Renders one team-card row.
function teamCard(person, locale) {
  const label = PORTRAIT_LABEL[locale] || PORTRAIT_LABEL.en;
  return `<div class="team-card">
  <div class="team-portrait-placeholder"><span>${label} — ${escapeHtml(person.name)}</span></div>
  <div class="team-info">
    <div class="team-name">${escapeHtml(person.name)}</div>
    <div class="team-role">${escapeHtml(person.role)}</div>
    <div class="team-bio">${escapeHtml(person.bio)}</div>
  </div>
</div>`;
}

module.exports = { escapeHtml, href, asset, BASE_PATH, picture, slugify, accordion, teamCard, PORTRAIT_LABEL, INTRINSIC };
