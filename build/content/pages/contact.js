const { picture } = require('../../helpers');
const site = require('../site');

function field({ id, label, type = 'text', required = false, autocomplete, textarea = false, select = false, options = [] }) {
  const describedBy = `aria-describedby="${id}-error"`;
  const requiredAttr = required ? 'required' : '';
  const autocompleteAttr = autocomplete ? `autocomplete="${autocomplete}"` : '';

  let control;
  if (select) {
    control = `<select class="form-select" id="${id}" name="${id}" ${requiredAttr} ${describedBy}>
        ${options.map((opt) => `<option value="${opt}">${opt}</option>`).join('\n        ')}
      </select>`;
  } else if (textarea) {
    control = `<textarea class="form-textarea" id="${id}" name="${id}" rows="5" ${requiredAttr} ${describedBy} placeholder="Tell us about the challenge you are working through."></textarea>`;
  } else {
    control = `<input class="form-input" type="${type}" id="${id}" name="${id}" ${requiredAttr} ${autocompleteAttr} ${describedBy}>`;
  }

  return `<div class="form-field">
      <label class="form-label" for="${id}">${label}</label>
      ${control}
      <span class="form-error" id="${id}-error" role="alert"></span>
    </div>`;
}

function main() {
  const officesLine = site.offices.map((o) => `${o.city}, ${o.country}`).join('<br>');

  return `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="index.html">Home</a> / Contact</p>
    <h1 class="section-heading" style="font-size:clamp(34px,4vw,52px);max-width:18ch;margin-bottom:var(--space-5)">Let's talk about what comes next</h1>
    <p class="section-subtext" style="font-size:var(--text-md);max-width:52ch">Share the challenge you are working through. We reply within three business days, and we will be honest about how we can help.</p>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <div class="contact-grid">
      <div class="form-card">
        <h2 class="form-card-heading">Send a message</h2>
        <form class="form" data-contact-form data-endpoint="${site.formEndpoint}" novalidate>
          ${field({ id: 'name', label: 'Name', required: true, autocomplete: 'name' })}
          ${field({ id: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' })}
          ${field({ id: 'organization', label: 'Organization', autocomplete: 'organization' })}
          ${field({ id: 'service', label: 'What can we help with?', select: true, options: ['Non-Profit Leadership', 'Organizational Development', 'Trainings', 'Public Speaking', 'Something else'] })}
          ${field({ id: 'message', label: 'Message', textarea: true, required: true })}
          <button type="submit" class="btn btn-primary form-submit">Send Message</button>
        </form>
        <div class="form-status" role="status" aria-live="polite" tabindex="-1" hidden data-form-status></div>
      </div>

      <div class="contact-aside">
        <div class="contact-photo">${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '(max-width: 720px) 100vw, 40vw', alt: 'Two colleagues working together' })}</div>

        <div class="info-block band-sky">
          <h2 class="info-block-heading">Where to find us</h2>
          <div class="info-block-grid">
            <div>
              <h3 class="info-block-label">Offices</h3>
              <div class="info-block-value">${officesLine}</div>
            </div>
            <div>
              <h3 class="info-block-label">Hours</h3>
              <div class="info-block-value">${site.hours.weekday.replace(', ', '<br>')}</div>
            </div>
          </div>
          <div>
            <h3 class="info-block-label">Languages</h3>
            <div class="info-block-value">${site.languages.join(' · ')}</div>
          </div>
        </div>

        <div class="info-block band-blossom">
          <h2 class="info-block-heading" style="font-size:20px">Follow along</h2>
          <div class="social-links">
            <a href="${site.social.facebook}" class="social-link">Facebook</a>
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
  activeNavLabel: 'Contact',
  meta: {
    title: 'Contact',
    description: 'Share the challenge your organization is working through. We reply within three business days and are honest about how we can help.',
    ogImage: 'contact'
  },
  main
};
