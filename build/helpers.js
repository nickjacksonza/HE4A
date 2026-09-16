// Shared template helpers used by build/content/pages/*.js modules.

const locales = require('./content/locales');
const { testimonials, HEADING: TESTIMONIALS_HEADING } = require('./content/testimonials');
const PEOPLE_PHOTOS = require('./content/peoplePhotos');

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

// Intrinsic pixel dimensions of the optimized people-photo variants -- all
// square (scripts/optimize-people-photos.js center-crops every source to
// 1:1), so this is the same for everyone with a photo.
const PEOPLE_PHOTO_WIDTHS = [200, 400, 700];
const PEOPLE_PHOTO_DIMS = { w: 400, h: 400 };

// Renders a person's real headshot as a <picture>, if one exists for their
// name (build/content/peoplePhotos.js); returns null otherwise so callers
// fall back to the placeholder box. `sizes` defaults to the small team-card/
// collective-grid slot; pass a larger hint for a bigger feature portrait so
// the browser picks the 700w variant instead.
function personPhoto(name, imgClass, sizes = '400px') {
  const key = PEOPLE_PHOTOS[name];
  if (!key) return null;
  const dir = asset(`assets/photos-optimized/people/${key}`);
  const srcset = (ext) => PEOPLE_PHOTO_WIDTHS.map((w) => `${dir}/${key}-${w}.${ext} ${w}w`).join(', ');
  const largest = PEOPLE_PHOTO_WIDTHS[PEOPLE_PHOTO_WIDTHS.length - 1];
  return `<picture>
  <source type="image/avif" srcset="${srcset('avif')}" sizes="${sizes}">
  <source type="image/webp" srcset="${srcset('webp')}" sizes="${sizes}">
  <img src="${dir}/${key}-${largest}.jpg" srcset="${srcset('jpg')}" sizes="${sizes}" width="${PEOPLE_PHOTO_DIMS.w}" height="${PEOPLE_PHOTO_DIMS.h}" alt="${escapeHtml(name)}"${imgClass ? ` class="${imgClass}"` : ''} loading="lazy" decoding="async">
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

// Renders one team-card row. Uses the person's real headshot when one
// exists (build/content/peoplePhotos.js), otherwise the dashed placeholder.
function teamCard(person, locale) {
  const photo = personPhoto(person.name, 'team-portrait-photo');
  const portraitInner = photo
    ? photo
    : `<span>${PORTRAIT_LABEL[locale] || PORTRAIT_LABEL.en} — ${escapeHtml(person.name)}</span>`;
  const portraitClass = photo ? 'team-portrait' : 'team-portrait team-portrait-placeholder';
  return `<div class="team-card">
  <div class="${portraitClass}">${portraitInner}</div>
  <div class="team-info">
    <div class="team-name">${escapeHtml(person.name)}</div>
    <div class="team-role">${escapeHtml(person.role)}</div>
    <div class="team-bio">${escapeHtml(person.bio)}</div>
  </div>
</div>`;
}

// Renders one collective-grid person card (Home/About Us). Uses the
// person's real headshot when one exists, otherwise the dashed placeholder
// box with their name as caption. `stagger` is the px offset already used
// by callers for the staggered-grid rhythm.
function personCard({ name, role, bio, stagger }) {
  const photo = personPhoto(name, 'person-portrait-photo');
  const portraitInner = photo ? photo : `<span>${escapeHtml(name)}</span>`;
  const portraitClass = photo ? 'person-portrait' : 'person-portrait person-portrait-placeholder';
  return `<div class="person" style="--stagger:${stagger}px">
        <div class="${portraitClass}">${portraitInner}</div>
        <div class="person-name">${escapeHtml(name)}</div>
        <div class="person-role">${escapeHtml(role)}</div>
        <div class="person-bio">${escapeHtml(bio)}</div>
      </div>`;
}

// Renders the shared client-testimonials section used on all 4 service pages.
// `band` lets each caller pick a class that alternates cleanly with
// whichever section comes immediately before it.
function testimonialsSection(locale, band = 'band-paper') {
  const items = testimonials(locale);
  return `<section class="section ${band}">
  <div class="container">
    <h2 class="section-heading" style="text-align:center;margin:0 auto var(--space-7);max-width:none">${TESTIMONIALS_HEADING[locale]}</h2>
    <div class="auto-grid" style="--min:260px">
      ${items.map((t) => `<div class="testimonial-card">
        <p class="testimonial-quote">“${escapeHtml(t.quote)}”</p>
        <div class="testimonial-attribution">
          <div class="testimonial-name">${escapeHtml(t.name)}</div>
          ${t.title ? `<div class="testimonial-title">${escapeHtml(t.title)}</div>` : ''}
        </div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

module.exports = { escapeHtml, href, asset, BASE_PATH, picture, personPhoto, personCard, slugify, accordion, teamCard, testimonialsSection, PORTRAIT_LABEL, INTRINSIC };
