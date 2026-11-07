// Privacy Policy. English only, linked from every page's footer. The facts in it
// (Formspree, Google Tag Manager, GitHub Pages) must match what the site really
// uses; update it when any of those change.
const { href } = require('../../helpers');
const site = require('../site');

const UPDATED = 'November 7, 2026';

function main(locale) {
  return `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">Home</a> / Privacy Policy</p>
    <span class="eyebrow">Legal</span>
    <h1 class="section-heading" style="font-size:clamp(34px,4vw,52px);max-width:18ch;margin-bottom:var(--space-5)">Privacy Policy</h1>
    <p class="section-subtext" style="font-size:var(--text-md);max-width:60ch">This policy explains what information ${site.legalName} collects through this website, why we collect it, and what you can do about it. Last updated ${UPDATED}.</p>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <div class="prose">
      <h2 class="prose-heading">Who we are</h2>
      <p>${site.legalName} runs this website, which is also known as ${site.alternateName}. We are responsible for the information described here. You can reach us by <a href="mailto:${site.email}">email</a>.</p>

      <h2 class="prose-heading">What we collect</h2>
      <p><strong>Messages you send us.</strong> When you use a contact form, we receive what you type: your name, email address, organization, the service you are asking about, and your message. A form on a person's profile page also tells us which person you wanted to reach. The form sends this to us through Formspree, a form-handling service.</p>
      <p><strong>How the site is used.</strong> We use Google Tag Manager to load measurement tools. It loads after you first interact with a page, or about eight seconds after the page has loaded. Tools loaded this way can record the pages you view, your device and browser type and your approximate location, and they can set cookies.</p>
      <p><strong>Hosting records.</strong> GitHub Pages hosts this site. GitHub records technical details of each request, such as your IP address, as part of running the service.</p>

      <h2 class="prose-heading">How we use it</h2>
      <p>We use your information to reply to your message, to run and improve the site, and to keep it secure and fast. We do not sell your personal information.</p>

      <h2 class="prose-heading">Who we share it with</h2>
      <p>We share information only with the services that help us run the site: Formspree for forms, Google for Tag Manager and any tools loaded through it, and GitHub for hosting. We may also share information when the law requires it.</p>

      <h2 class="prose-heading">Cookies</h2>
      <p>Tag Manager, and tools loaded through it, can set cookies. You can block or delete cookies in your browser settings. The site works without them.</p>

      <h2 class="prose-heading">Links to other sites</h2>
      <p>The share buttons in the footer and the links to other sites open pages run by other organizations, such as LinkedIn, Facebook and X. They have their own privacy policies. The share buttons send nothing to those sites until you click them.</p>

      <h2 class="prose-heading">How long we keep it</h2>
      <p>We keep your messages for as long as we need them to reply and to keep a record of our work together. We then delete them.</p>

      <h2 class="prose-heading">Your choices</h2>
      <p>Depending on where you live, you may have the right to ask what information we hold about you, to have it corrected, or to have it deleted. <a href="mailto:${site.email}">Contact us by email</a> and we will reply.</p>

      <h2 class="prose-heading">Children</h2>
      <p>This site is written for organization leaders. It is not aimed at children, and we do not knowingly collect their information.</p>

      <h2 class="prose-heading">Changes to this policy</h2>
      <p>If we change this policy, we will post the new version here and update the date at the top.</p>
    </div>
  </div>
</section>`;
}

module.exports = {
  slug: 'privacy',
  outputFile: 'privacy.html',
  activeNavId: null,
  englishOnly: true,
  meta: {
    title: { en: 'Privacy Policy', fr: 'Privacy Policy', es: 'Privacy Policy', pt: 'Privacy Policy' },
    seoTitle: { en: 'Privacy Policy: How We Handle Your Information' },
    description: {
      en: 'What information Equity Is the Word collects through this website, how we use it, who we share it with, and the choices you have.',
      fr: 'What information Equity Is the Word collects through this website, how we use it, who we share it with, and the choices you have.',
      es: 'What information Equity Is the Word collects through this website, how we use it, who we share it with, and the choices you have.',
      pt: 'What information Equity Is the Word collects through this website, how we use it, who we share it with, and the choices you have.'
    },
    ogImage: 'home'
  },
  main
};
