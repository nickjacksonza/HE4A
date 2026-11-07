const site = require('../content/site');
const { NAV_LABELS } = require('../content/nav');
const shared = require('../content/shared');
const { href, asset } = require('../helpers');

// Footer link text. The same pages are linked from the header menu, so these
// describe the page instead of repeating its menu label. Every link text then
// appears once on a page.
const FOOTER_LINKS = {
  en: { nonProfitLeadership: 'Board governance and coaching', organizationalDevelopment: 'Programs, policy and grants', trainings: 'Racial equity and LGBTQ+ training', publicSpeaking: 'Keynotes and moderation', recruitment: 'Executive search and hiring', aboutUs: 'Meet the collective', contact: 'Send us a message' },
  fr: { nonProfitLeadership: 'Gouvernance et coaching', organizationalDevelopment: 'Programmes, politiques et subventions', trainings: 'Formation en équité raciale et LGBTQ+', publicSpeaking: 'Conférences et modération', recruitment: 'Recherche de cadres et recrutement', aboutUs: 'Rencontrer le collectif', contact: 'Envoyez-nous un message' },
  es: { nonProfitLeadership: 'Gobernanza y coaching', organizationalDevelopment: 'Programas, políticas y subvenciones', trainings: 'Formación en equidad racial y LGBTQ+', publicSpeaking: 'Conferencias y moderación', recruitment: 'Búsqueda de ejecutivos y contratación', aboutUs: 'Conoce al colectivo', contact: 'Envíanos un mensaje' },
  pt: { nonProfitLeadership: 'Governança e coaching', organizationalDevelopment: 'Programas, políticas e financiamentos', trainings: 'Treinamento em equidade racial e LGBTQ+', publicSpeaking: 'Palestras e moderação', recruitment: 'Busca de executivos e contratação', aboutUs: 'Conheça o coletivo', contact: 'Envie-nos uma mensagem' }
};

const FOOTER_COPY = {
  en: { services: 'Services', organization: 'Organization', businessHours: 'Business Hours', availableIn: 'Available in', contactCta: 'Contact Us →', blurb: 'A global health equity collective working with the communities healthcare has left out.' },
  fr: { services: 'Services', organization: 'Organisation', businessHours: 'Heures d’Ouverture', availableIn: 'Disponible en', contactCta: 'Contactez-Nous →', blurb: 'Un collectif mondial pour l’équité en santé, travaillant avec les communautés que le système de santé a laissées de côté.' },
  es: { services: 'Servicios', organization: 'Organización', businessHours: 'Horario de Atención', availableIn: 'Disponible en', contactCta: 'Contáctanos →', blurb: 'Un colectivo global por la equidad en salud, que trabaja con las comunidades que el sistema de salud ha dejado atrás.' },
  pt: { services: 'Serviços', organization: 'Organização', businessHours: 'Horário de Atendimento', availableIn: 'Disponível em', contactCta: 'Fale Conosco →', blurb: 'Um coletivo global pela equidade em saúde, trabalhando com as comunidades que o sistema de saúde deixou de lado.' }
};

// Plain share links: no scripts, no trackers. The visible text is just the
// network name; the hidden text makes each link's name unique and tells
// screen reader users that it opens a new tab.
const SHARE_COPY = {
  en: { label: 'Share this page', on: 'Share on', byEmail: 'Share by email', email: 'Email', newTab: '(opens in a new tab)' },
  fr: { label: 'Partager cette page', on: 'Partager sur', byEmail: 'Partager par courriel', email: 'Courriel', newTab: '(s’ouvre dans un nouvel onglet)' },
  es: { label: 'Compartir esta página', on: 'Compartir en', byEmail: 'Compartir por correo', email: 'Correo', newTab: '(se abre en una pestaña nueva)' },
  pt: { label: 'Compartilhar esta página', on: 'Compartilhar em', byEmail: 'Compartilhar por e-mail', email: 'E-mail', newTab: '(abre em uma nova guia)' }
};

function shareLinks(locale, page) {
  const c = SHARE_COPY[locale];
  const title = page.title.replace(/&amp;/g, '&');
  const u = encodeURIComponent(page.url);
  const t = encodeURIComponent(title);
  const both = encodeURIComponent(`${title} ${page.url}`);
  const networks = [
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${u}`],
    ['X', `https://x.com/intent/post?url=${u}&text=${t}`],
    ['WhatsApp', `https://wa.me/?text=${both}`],
    ['Bluesky', `https://bsky.app/intent/compose?text=${both}`]
  ];
  const items = networks.map(([name, url]) => `<li><a href="${url}" class="share-link" target="_blank" rel="noopener noreferrer"><span class="visually-hidden">${c.on} </span>${name}<span class="visually-hidden"> ${c.newTab}</span></a></li>`);
  items.push(`<li><a href="mailto:?subject=${t}&amp;body=${u}" class="share-link"><span class="visually-hidden">${c.byEmail}: </span>${c.email}</a></li>`);
  return `<div class="footer-share">
    <span class="footer-share-label" id="share-label">${c.label}</span>
    <ul class="footer-share-list" aria-labelledby="share-label">
      ${items.join('\n      ')}
    </ul>
  </div>`;
}

function footer(locale, page) {
  const f = FOOTER_COPY[locale];
  const text = FOOTER_LINKS[locale];
  const officesLine = site.offices.map((o) => `${o.city}, ${o.country}`).join('<br>');
  const hours = site.hours[locale];

  return `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-col">
      <div class="footer-brand-row">
        <img src="${asset('assets/logo/mark-transparent-76.webp')}" alt="Health Equity 4 All" width="39" height="34" class="footer-logo">
        <span class="footer-wordmark">Equity Is the Word</span>
      </div>
      <p class="footer-blurb">${f.blurb}</p>
      <div class="footer-motto">${site.tagline[locale]}</div>
    </div>
    <div class="footer-col">
      <div class="footer-heading">${f.services}</div>
      <a href="${href(locale, 'non-profit-leadership.html')}" class="footer-link">${text.nonProfitLeadership}</a>
      <a href="${href(locale, 'organizational-development.html')}" class="footer-link">${text.organizationalDevelopment}</a>
      <a href="${href(locale, 'trainings.html')}" class="footer-link">${text.trainings}</a>
      <a href="${href(locale, 'public-speaking.html')}" class="footer-link">${text.publicSpeaking}</a>
      <a href="${href(locale, 'recruitment.html')}" class="footer-link">${text.recruitment}</a>
    </div>
    <div class="footer-col">
      <div class="footer-heading">${f.organization}</div>
      <a href="${href(locale, 'about-us.html')}" class="footer-link">${text.aboutUs}</a>
      <a href="${href(locale, 'contact.html')}" class="footer-link">${text.contact}</a>
      <a href="${href(locale, 'accessibility.html')}" class="footer-link">${shared.accessibilityLabel[locale]}</a>
      <div class="footer-text">${officesLine}</div>
      <a href="mailto:${site.email}" class="footer-link" style="margin-top:6px">${site.email}</a>
      <a href="tel:${site.phone.replace(/\s+/g, '')}" class="footer-link">${site.phone}</a>
    </div>
    <div class="footer-col">
      <div class="footer-heading">${f.businessHours}</div>
      <div class="footer-text">${hours.weekday}<br>${hours.weekend}</div>
      <div class="footer-text">${f.availableIn} ${site.languages.join(', ')}</div>
      <a href="${href(locale, 'contact.html')}" class="footer-cta">${f.contactCta}</a>
    </div>
  </div>
  ${shareLinks(locale, page)}
  <div class="footer-bottom">
    <span>© ${site.copyrightYear} ${site.legalName}</span>
    <span>${site.siteName}</span>
  </div>
</footer>`;
}

module.exports = footer;
