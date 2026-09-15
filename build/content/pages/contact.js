const { picture, escapeHtml, href } = require('../../helpers');
const site = require('../site');
const shared = require('../shared');

function field({ id, label, type = 'text', required = false, autocomplete, textarea = false, select = false, options = [] }) {
  const describedBy = `aria-describedby="${id}-error"`;
  const requiredAttr = required ? 'required' : '';
  const autocompleteAttr = autocomplete ? `autocomplete="${autocomplete}"` : '';

  let control;
  if (select) {
    control = `<select class="form-select" id="${id}" name="${id}" ${requiredAttr} ${describedBy}>
        ${options.map((opt) => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('\n        ')}
      </select>`;
  } else if (textarea) {
    control = `<textarea class="form-textarea" id="${id}" name="${id}" rows="5" ${requiredAttr} ${describedBy} placeholder="${escapeHtml(options.placeholder || '')}"></textarea>`;
  } else {
    control = `<input class="form-input" type="${type}" id="${id}" name="${id}" ${requiredAttr} ${autocompleteAttr} ${describedBy}>`;
  }

  return `<div class="form-field">
      <label class="form-label" for="${id}">${escapeHtml(label)}</label>
      ${control}
      <span class="form-error" id="${id}-error" role="alert"></span>
    </div>`;
}

const COPY = {
  en: {
    heading: "Let's talk about what comes next",
    subtext: 'Share the challenge you are working through. We reply within three business days, and we will be honest about how we can help.',
    formHeading: 'Send a message',
    fields: { name: 'Name', email: 'Email', organization: 'Organization', service: 'What can we help with?', message: 'Message' },
    messagePlaceholder: 'Tell us about the challenge you are working through.',
    serviceOptions: ['Non-Profit Leadership', 'Organizational Development', 'Trainings', 'Public Speaking', 'Something else'],
    submit: 'Send Message',
    photoAlt: 'Two colleagues working together',
    findUs: { heading: 'Where to find us', offices: 'Offices', hours: 'Hours', languages: 'Languages', email: 'Email', phone: 'Phone' },
    followAlong: 'Follow along'
  },
  fr: {
    heading: 'Parlons de la suite',
    subtext: 'Partagez le défi que vous traversez. Nous répondons dans un délai de trois jours ouvrables, et nous serons honnêtes sur notre capacité à vous aider.',
    formHeading: 'Envoyer un message',
    fields: { name: 'Nom', email: 'Courriel', organization: 'Organisation', service: 'En quoi pouvons-nous vous aider ?', message: 'Message' },
    messagePlaceholder: 'Parlez-nous du défi que vous traversez.',
    serviceOptions: ['Direction Associative', 'Développement Organisationnel', 'Formations', 'Prise de Parole Publique', 'Autre chose'],
    submit: 'Envoyer le Message',
    photoAlt: 'Deux collègues travaillant ensemble',
    findUs: { heading: 'Où nous trouver', offices: 'Bureaux', hours: 'Horaires', languages: 'Langues', email: 'Courriel', phone: 'Téléphone' },
    followAlong: 'Suivez-nous'
  },
  es: {
    heading: 'Hablemos de lo que sigue',
    subtext: 'Comparte el desafío que estás enfrentando. Respondemos dentro de tres días hábiles, y seremos honestos sobre cómo podemos ayudar.',
    formHeading: 'Enviar un mensaje',
    fields: { name: 'Nombre', email: 'Correo electrónico', organization: 'Organización', service: '¿En qué podemos ayudarte?', message: 'Mensaje' },
    messagePlaceholder: 'Cuéntanos sobre el desafío que estás enfrentando.',
    serviceOptions: ['Liderazgo sin Fines de Lucro', 'Desarrollo Organizacional', 'Capacitaciones', 'Oratoria Pública', 'Algo más'],
    submit: 'Enviar Mensaje',
    photoAlt: 'Dos colegas trabajando juntos',
    findUs: { heading: 'Dónde encontrarnos', offices: 'Oficinas', hours: 'Horario', languages: 'Idiomas', email: 'Correo electrónico', phone: 'Teléfono' },
    followAlong: 'Síguenos'
  },
  pt: {
    heading: 'Vamos falar sobre os próximos passos',
    subtext: 'Compartilhe o desafio que você está enfrentando. Respondemos em até três dias úteis, e seremos honestos sobre como podemos ajudar.',
    formHeading: 'Enviar uma mensagem',
    fields: { name: 'Nome', email: 'E-mail', organization: 'Organização', service: 'Com o que podemos ajudar?', message: 'Mensagem' },
    messagePlaceholder: 'Conte-nos sobre o desafio que você está enfrentando.',
    serviceOptions: ['Liderança Sem Fins Lucrativos', 'Desenvolvimento Organizacional', 'Capacitações', 'Oratória Pública', 'Outra coisa'],
    submit: 'Enviar Mensagem',
    photoAlt: 'Dois colegas trabalhando juntos',
    findUs: { heading: 'Onde nos encontrar', offices: 'Escritórios', hours: 'Horário', languages: 'Idiomas', email: 'E-mail', phone: 'Telefone' },
    followAlong: 'Siga-nos'
  }
};

function main(locale) {
  const t = COPY[locale];
  const officesLine = site.offices.map((o) => `${o.city}, ${o.country}`).join('<br>');
  const hours = site.hours[locale];

  return `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">${shared.breadcrumbHome[locale]}</a> / ${shared.contactLabel[locale]}</p>
    <h1 class="section-heading" style="font-size:clamp(34px,4vw,52px);max-width:18ch;margin-bottom:var(--space-5)">${t.heading}</h1>
    <p class="section-subtext" style="font-size:var(--text-md);max-width:52ch">${t.subtext}</p>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <div class="contact-grid">
      <div class="form-card">
        <h2 class="form-card-heading">${t.formHeading}</h2>
        <form class="form" data-contact-form data-endpoint="${site.formEndpoint}" novalidate>
          ${field({ id: 'name', label: t.fields.name, required: true, autocomplete: 'name' })}
          ${field({ id: 'email', label: t.fields.email, type: 'email', required: true, autocomplete: 'email' })}
          ${field({ id: 'organization', label: t.fields.organization, autocomplete: 'organization' })}
          ${field({ id: 'service', label: t.fields.service, select: true, options: t.serviceOptions })}
          ${field({ id: 'message', label: t.fields.message, textarea: true, required: true, options: { placeholder: t.messagePlaceholder } })}
          <button type="submit" class="btn btn-primary form-submit">${t.submit}</button>
        </form>
        <div class="form-status" role="status" aria-live="polite" tabindex="-1" hidden data-form-status></div>
      </div>

      <div class="contact-aside">
        <div class="contact-photo">${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '(max-width: 720px) 100vw, 40vw', alt: t.photoAlt })}</div>

        <div class="info-block band-sky">
          <h2 class="info-block-heading">${t.findUs.heading}</h2>
          <div class="info-block-grid">
            <div>
              <h3 class="info-block-label">${t.findUs.offices}</h3>
              <div class="info-block-value">${officesLine}</div>
            </div>
            <div>
              <h3 class="info-block-label">${t.findUs.hours}</h3>
              <div class="info-block-value">${hours.weekday.replace(', ', '<br>')}</div>
            </div>
          </div>
          <div class="info-block-grid" style="margin-top:var(--space-5)">
            <div>
              <h3 class="info-block-label">${t.findUs.email}</h3>
              <div class="info-block-value"><a href="mailto:${site.email}">${site.email}</a></div>
            </div>
            <div>
              <h3 class="info-block-label">${t.findUs.phone}</h3>
              <div class="info-block-value"><a href="tel:${site.phone.replace(/\s+/g, '')}">${site.phone}</a></div>
            </div>
          </div>
          <div>
            <h3 class="info-block-label">${t.findUs.languages}</h3>
            <div class="info-block-value">${site.languages.join(' · ')}</div>
          </div>
        </div>

        <div class="info-block band-blossom">
          <h2 class="info-block-heading" style="font-size:20px">${t.followAlong}</h2>
          <div class="social-links">
            <a href="${site.social.facebook}" class="social-link">Facebook</a>
            <a href="${site.social.twitter}" class="social-link">Twitter</a>
            <a href="${site.social.instagram}" class="social-link">Instagram</a>
            <a href="${site.social.linkedin}" class="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = {
  slug: 'contact',
  outputFile: 'contact.html',
  activeNavId: null,
  meta: {
    title: {
      en: 'Contact',
      fr: 'Contact',
      es: 'Contacto',
      pt: 'Contato'
    },
    description: {
      en: 'Share the challenge your organization is working through. We reply within three business days and are honest about how we can help.',
      fr: 'Partagez le défi que traverse votre organisation. Nous répondons dans un délai de trois jours ouvrables et sommes honnêtes sur notre capacité à vous aider.',
      es: 'Comparte el desafío que tu organización está enfrentando. Respondemos dentro de tres días hábiles y somos honestos sobre cómo podemos ayudar.',
      pt: 'Compartilhe o desafio que sua organização está enfrentando. Respondemos em até três dias úteis e somos honestos sobre como podemos ajudar.'
    },
    ogImage: 'contact'
  },
  main
};
