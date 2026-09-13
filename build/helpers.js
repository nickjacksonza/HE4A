// Shared template helpers used by build/content/pages/*.js modules.

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
  const dir = `assets/photos-optimized/${name}`;
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

// Renders one team-card row.
function teamCard(person) {
  return `<div class="team-card">
  <div class="team-portrait-placeholder"><span>Portrait — ${escapeHtml(person.name)}</span></div>
  <div class="team-info">
    <div class="team-name">${escapeHtml(person.name)}</div>
    <div class="team-role">${escapeHtml(person.role)}</div>
    <div class="team-bio">${escapeHtml(person.bio)}</div>
  </div>
</div>`;
}

module.exports = { escapeHtml, picture, slugify, accordion, teamCard, INTRINSIC };
