const { href, escapeHtml, personPhoto, PORTRAIT_LABEL } = require('../../helpers');
const site = require('../site');
const locales = require('../locales');
const shared = require('../shared');
const profiles = require('../profiles');
const aboutUs = require('./about-us');
const { formCard } = require('./contact');

const COLLECTIVE = { en: 'The Collective', fr: 'Le collectif', es: 'El colectivo', pt: 'O coletivo' };

const COPY = {
  en: {
    bioHeading: 'Biography',
    toggleLabel: 'Biography language',
    contactHeading: 'Contact',
    email: 'Email',
    phone: 'Phone',
    follow: 'Find them online',
    website: 'Website',
    formIntro: 'This form sends your message to Ace Robinson at Health Equity 4 All.',
    formSubject: (name) => `Message for ${name} via the website`
  },
  fr: {
    bioHeading: 'Biographie',
    toggleLabel: 'Langue de la biographie',
    contactHeading: 'Contact',
    email: 'Courriel',
    phone: 'Téléphone',
    follow: 'En ligne',
    website: 'Site web',
    formIntro: 'Ce formulaire envoie votre message à Ace Robinson, chez Health Equity 4 All.',
    formSubject: (name) => `Message pour ${name} via le site`
  },
  es: {
    bioHeading: 'Biografía',
    toggleLabel: 'Idioma de la biografía',
    contactHeading: 'Contacto',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    follow: 'En línea',
    website: 'Sitio web',
    formIntro: 'Este formulario envía tu mensaje a Ace Robinson, en Health Equity 4 All.',
    formSubject: (name) => `Mensaje para ${name} desde el sitio`
  },
  pt: {
    bioHeading: 'Biografia',
    toggleLabel: 'Idioma da biografia',
    contactHeading: 'Contato',
    email: 'E-mail',
    phone: 'Telefone',
    follow: 'Na internet',
    website: 'Site',
    formIntro: 'Este formulário envia sua mensagem para Ace Robinson, na Health Equity 4 All.',
    formSubject: (name) => `Mensagem para ${name} pelo site`
  }
};

const SOCIAL_LABELS = { linkedin: 'LinkedIn', twitter: 'Twitter', instagram: 'Instagram', facebook: 'Facebook' };

// Splits a bio on blank lines into <p> elements.
function paragraphs(text) {
  return text.split(/\n\s*\n/).map((para) => `<p>${escapeHtml(para.trim())}</p>`).join('\n        ');
}

function bioSection(locale, person, profile, t) {
  // With a full bio, a locale that has no translation of it falls back to the
  // English one and is labeled as English. Otherwise the localized short bio.
  const full = profile.fullBio;
  const mainCode = full ? (full[locale] ? locale : 'en') : locale;
  const mainInfo = locales.find((l) => l.code === mainCode);
  const mainText = full ? full[mainCode] : person.bio;
  // A home-language bio in the same language as the first panel would only repeat it.
  const homes = (profile.homeBios || []).filter((h) => h.code !== mainInfo.hreflang.split('-')[0]);

  const mainPanel = `<div class="profile-bio-panel" id="bio-0" lang="${mainInfo.hreflang}" data-bio-panel>
        ${paragraphs(mainText)}
      </div>`;
  if (!homes.length) {
    return `<h2 class="section-heading profile-bio-heading">${t.bioHeading}</h2>
      ${mainPanel}`;
  }

  const buttons = [{ id: 'bio-0', code: mainInfo.hreflang, name: mainInfo.endonym }]
    .concat(homes.map((h, i) => ({ id: `bio-${i + 1}`, code: h.code, name: h.name, dir: h.dir })))
    .map((b, i) => `<button type="button" class="bio-toggle-btn" aria-pressed="${i === 0}" aria-controls="${b.id}" data-bio-target="${b.id}" lang="${b.code}"${b.dir ? ` dir="${b.dir}"` : ''}>${escapeHtml(b.name)}</button>`)
    .join('\n          ');
  const homePanels = homes
    .map((h, i) => `<div class="profile-bio-panel" id="bio-${i + 1}" lang="${h.code}"${h.dir ? ` dir="${h.dir}"` : ''} data-bio-panel>
        ${paragraphs(h.text)}
      </div>`)
    .join('\n      ');
  return `<div class="profile-bio-head">
        <h2 class="section-heading profile-bio-heading">${t.bioHeading}</h2>
        <div class="bio-toggle" role="group" aria-label="${t.toggleLabel}" data-bio-toggle>
          ${buttons}
        </div>
      </div>
      ${mainPanel}
      ${homePanels}`;
}

function contactSection(profile, t) {
  const rows = [];
  if (profile.email) rows.push(`<div><h3 class="info-block-label">${t.email}</h3><div class="info-block-value"><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></div></div>`);
  if (profile.phone) rows.push(`<div><h3 class="info-block-label">${t.phone}</h3><div class="info-block-value"><a href="tel:${escapeHtml(profile.phone.replace(/\s+/g, ''))}">${escapeHtml(profile.phone)}</a></div></div>`);

  const social = profile.social || {};
  const links = Object.keys(social)
    .filter((k) => social[k])
    .map((k) => `<a href="${escapeHtml(social[k])}" class="social-link" rel="noopener">${SOCIAL_LABELS[k] || t.website}</a>`);

  if (!rows.length && !links.length) return '';
  return `<div class="info-block band-sky">
          <h2 class="info-block-heading">${t.contactHeading}</h2>
          ${rows.length ? `<div class="info-block-grid">${rows.join('')}</div>` : ''}
          ${links.length ? `<div><h3 class="info-block-label">${t.follow}</h3><div class="social-links">${links.join('')}</div></div>` : ''}
        </div>`;
}

function makePage(slug) {
  const profile = profiles[slug] || {};
  const person = (locale) => aboutUs.roster(locale).find((p) => p.slug === slug);
  const name = person('en').name;

  function main(locale) {
    const t = COPY[locale];
    const p = person(locale);
    const photo = personPhoto(p.name, 'profile-portrait-photo', '(max-width: 720px) 100vw, 380px', true);
    const portrait = photo
      ? `<div class="profile-portrait">${photo}</div>`
      : `<div class="profile-portrait profile-portrait-placeholder"><span>${PORTRAIT_LABEL[locale]} — ${escapeHtml(p.name)}</span></div>`;
    const contact = contactSection(profile, t);

    return `<section class="section section--first profile-hero band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">${shared.breadcrumbHome[locale]}</a> / <a href="${href(locale, 'about-us.html')}">${COLLECTIVE[locale]}</a> / ${escapeHtml(p.name)}</p>
    <div class="profile-grid">
      ${portrait}
      <div class="profile-intro">
        <h1 class="section-heading profile-name">${escapeHtml(p.name)}</h1>
        <div class="person-role profile-role">${escapeHtml(p.role)}</div>
        ${bioSection(locale, p, profile, t)}
      </div>
    </div>
  </div>
</section>

<section class="section profile-contact band-paper-subtle">
  <div class="container">
    <div class="contact-grid">
      ${formCard(locale, { intro: t.formIntro, hidden: { _subject: t.formSubject(p.name), profile: p.name } })}
      ${contact ? `<div class="contact-aside">${contact}</div>` : ''}
    </div>
  </div>
</section>`;
  }

  const title = {};
  const seoTitle = {};
  const description = {};
  // Search snippets show about 155 characters, so cut at a word boundary.
  const fit = (text, max = 158) => {
    if (text.length <= max) return text;
    return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
  };
  for (const l of locales) {
    const p = person(l.code);
    const role = p.role.split(' · ')[0];
    title[l.code] = p.name;
    if (l.code === 'en') {
      const withBrand = `${p.name}: ${role} | ${site.siteName}`;
      seoTitle.en = escapeHtml(withBrand.length <= 62 ? withBrand : `${p.name}: ${role}`);
    }
    description[l.code] = escapeHtml(fit(`${p.name}, ${role}, ${site.siteName}. ${p.bio}`));
  }

  const absolute = (locale, file) => `${site.baseUrl}${locale === 'en' ? '' : '/' + locale}/${file}`;
  return {
    slug,
    outputFile: `about-us/${slug}.html`,
    activeNavId: 'aboutUs',
    meta: { title, seoTitle, description, ogImage: 'about-us' },
    main
  };
}

module.exports = aboutUs.roster('en').map((p) => makePage(p.slug));
