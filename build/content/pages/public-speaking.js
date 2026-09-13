const { picture, accordion, teamCard } = require('../../helpers');

const FAQS = [
  { q: 'How far ahead should we book?', a: 'Three months is comfortable. We hold a small amount of short-notice capacity for community convenings and policy moments that cannot wait.' },
  { q: 'Do you speak at events without a fee?', a: 'Yes, selectively — community-led convenings and youth programmes in particular. Travel and accommodation still need to be covered.' },
  { q: 'Can you tailor a talk to our theme?', a: 'That is the default, not the exception. We ask for the programme, the audience list and the outcome the convening needs to produce, then write against all three.' },
  { q: 'Will you appear on a panel you are not moderating?', a: 'Yes, provided equity is woven into the programme rather than confined to one panel. If it is the only place equity appears, we will say so — and we can help you fix that.' }
];

const TEAM = [
  { name: 'Ace Robinson', role: 'Keynote & Moderation · Seattle', bio: 'M.P.H., M.H.L. Communicable disease policy advocate and Acting Director of the Duke University Sexual & Gender Minority Wellness program.' },
  { name: 'Eduardo Culbeaux', role: 'Moderation & Media · Southeast Asia', bio: 'Educator for over a decade, empowering youth through journalism programmes. Moderates youth and media-facing sessions.' }
];

function main() {
  return `<section class="hero">
  ${picture({ name: 'panel-speaking', widths: [640, 960, 1200], sizes: '100vw', alt: 'A collective member speaking on a panel', imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="index.html">Home</a> / Public Speaking</p>
    <span class="eyebrow eyebrow--on-dark">Services</span>
    <h1 class="hero-title" style="max-width:12ch">Public Speaking</h1>
    <p class="hero-text">Conferences, convenings and closed-door briefings. We prepare for your audience and your goals — every talk is written for the room it will be delivered in.</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--indigo">Keynote</span>
      <span class="tag-pill tag-pill--indigo">Moderating</span>
    </div>
    <div class="hero-actions"><a href="contact.html" class="btn btn-on-sky">Check Availability</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">What we can bring to your event</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Each format is booked individually or together across a full programme.</p>
    <div class="auto-grid" style="--min:300px">
      <div class="format-card format-card--sky">
        <div class="format-label">Keynote</div>
        <h3 class="format-title" id="keynote">Opening or Closing Address</h3>
        <p class="format-text">Thirty to forty-five minutes on health equity, HIV policy, or leading through political hostility — written against the theme you have set, for the audience you have gathered.</p>
      </div>
      <div class="format-card format-card--blossom">
        <div class="format-label">Moderating</div>
        <h3 class="format-title" id="moderating">Panels and Plenaries</h3>
        <p class="format-text">Preparation calls with every panelist, a real running order, and a moderator who keeps the conversation productive and honest.</p>
      </div>
      <div class="format-card format-card--paper">
        <div class="format-label">Briefing</div>
        <h3 class="format-title">Board and Funder Sessions</h3>
        <p class="format-text">Closed-room briefings for trustees, funders and government teams who need the evidence and the case for action in one sitting.</p>
      </div>
    </div>
  </div>
</section>

<section class="quote-band band-blossom">
  <div class="quote-band-inner">
    <span class="eyebrow eyebrow--on-blossom">On Stage</span>
    <p class="quote-text">“Achieving health equity is hard. Sometimes it means we have to go over, under, around or through challenges.”</p>
    <span class="quote-author">Ace Robinson, M.P.H., M.H.L</span>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="split-block">
      <div class="split-col">
        <h2 class="split-col-heading">How we prepare</h2>
        <p class="split-col-text">We ask for the audience list, the decision the convening is meant to produce, and whatever the organizers would rather not have said out loud. That last one often matters most — it tells us where the real conversation needs to go.</p>
      </div>
      <div class="split-col">
        <h2 class="split-col-heading">Languages and logistics</h2>
        <p class="split-col-text">Talks are delivered in English, French, Spanish or Portuguese. We work with interpreters where the audience needs it. Three months' lead time is comfortable; we hold short-notice capacity for policy moments and community convenings.</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <h2 class="section-heading">Who takes the stage</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Speakers with a record in the rooms you are convening.</p>
    <div class="auto-grid" style="--min:280px">
      ${TEAM.map(teamCard).join('\n      ')}
    </div>
  </div>
</section>

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">Common questions</h2>
    ${accordion(FAQS, 'ps-faq')}
  </div>
</section>

<section class="cta-band band-ink">
  <div class="cta-band-inner">
    <h2 class="cta-heading cta-heading--on-dark">Have an event coming up?</h2>
    <p class="cta-text cta-text--on-dark">Send us the dates, the audience and the outcome you need. We will confirm availability within a week.</p>
    <a href="contact.html" class="btn btn-on-sky">Get in Touch</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'public-speaking',
  outputFile: 'public-speaking.html',
  activeNavLabel: 'Public Speaking',
  meta: {
    title: 'Public Speaking',
    description: 'Keynotes, panel moderation and closed-door briefings on health equity — written for the audience and outcome each room actually needs.',
    ogImage: 'public-speaking'
  },
  main
};
