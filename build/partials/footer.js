const site = require('../content/site');
const { NAV_LABELS } = require('../content/nav');
const shared = require('../content/shared');
const { href } = require('../helpers');

const FOOTER_COPY = {
  en: { services: 'Services', organization: 'Organization', businessHours: 'Business Hours', availableIn: 'Available in', contactCta: 'Contact Us →', blurb: 'A global health equity collective working with the communities healthcare has left out.' },
  fr: { services: 'Services', organization: 'Organisation', businessHours: 'Heures d’Ouverture', availableIn: 'Disponible en', contactCta: 'Contactez-Nous →', blurb: 'Un collectif mondial pour l’équité en santé, travaillant avec les communautés que le système de santé a laissées de côté.' },
  es: { services: 'Servicios', organization: 'Organización', businessHours: 'Horario de Atención', availableIn: 'Disponible en', contactCta: 'Contáctanos →', blurb: 'Un colectivo global por la equidad en salud, que trabaja con las comunidades que el sistema de salud ha dejado atrás.' },
  pt: { services: 'Serviços', organization: 'Organização', businessHours: 'Horário de Atendimento', availableIn: 'Disponível em', contactCta: 'Fale Conosco →', blurb: 'Um coletivo global pela equidade em saúde, trabalhando com as comunidades que o sistema de saúde deixou de lado.' }
};

function footer(locale) {
  const f = FOOTER_COPY[locale];
  const labels = NAV_LABELS[locale];
  const officesLine = site.offices.map((o) => `${o.city}, ${o.country}`).join('<br>');
  const hours = site.hours[locale];

  return `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-col">
      <div class="footer-brand-row">
        <img src="/assets/logo/mark-transparent-76.webp" alt="Health Equity 4 All" width="39" height="34" class="footer-logo">
        <span class="footer-wordmark">Equity Is the Word</span>
      </div>
      <p class="footer-blurb">${f.blurb}</p>
      <div class="footer-motto">${site.tagline[locale]}</div>
    </div>
    <div class="footer-col">
      <div class="footer-heading">${f.services}</div>
      <a href="${href(locale, 'non-profit-leadership.html')}" class="footer-link">${labels.nonProfitLeadership}</a>
      <a href="${href(locale, 'organizational-development.html')}" class="footer-link">${labels.organizationalDevelopment}</a>
      <a href="${href(locale, 'trainings.html')}" class="footer-link">${labels.trainings}</a>
      <a href="${href(locale, 'public-speaking.html')}" class="footer-link">${labels.publicSpeaking}</a>
    </div>
    <div class="footer-col">
      <div class="footer-heading">${f.organization}</div>
      <a href="${href(locale, 'about-us.html')}" class="footer-link">${labels.aboutUs}</a>
      <a href="${href(locale, 'contact.html')}" class="footer-link">${shared.contactLabel[locale]}</a>
      <div class="footer-text">${officesLine}</div>
    </div>
    <div class="footer-col">
      <div class="footer-heading">${f.businessHours}</div>
      <div class="footer-text">${hours.weekday}<br>${hours.weekend}</div>
      <div class="footer-text">${f.availableIn} ${site.languages.join(', ')}</div>
      <a href="${href(locale, 'contact.html')}" class="footer-cta">${f.contactCta}</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${site.copyrightYear} ${site.legalName}</span>
    <span>${site.siteName}</span>
  </div>
</footer>`;
}

module.exports = footer;
