const { picture, accordion, teamCard } = require('../../helpers');

const FAQS = [
  { q: 'Do you write grants on contingency?', a: 'No. We charge a flat fee for the work whether or not the application is funded. We will also be upfront if we think a proposal is not competitive — and help you decide whether to submit or redirect.' },
  { q: 'Can you support an organization with no communications staff?', a: 'Yes, and many of our clients are in that position. We build a message architecture and a small set of templates a program lead can maintain in a few hours a month.' },
  { q: 'What languages can deliverables be produced in?', a: 'English, French, Spanish and Portuguese. Policy submissions are drafted in the language of the receiving body.' },
  { q: 'How quickly can you start?', a: 'A scoping call within two weeks, and most engagements begin within a month. Grant deadlines are the usual exception — we hold capacity for those.' }
];

const TEAM = [
  { name: 'Lucy Wanjiku Njenga', role: 'Programs & Policy · Nairobi', bio: 'HIV response leader for over a decade. Builds feminist movement infrastructure from grassroots organizations to global funding bodies.' },
  { name: 'Diego Calixto', role: 'Research & Advocacy · Brasília', bio: 'Activist living with HIV and researcher at Fiocruz Brasília. Leads policy analysis and evidence work across Latin America.' }
];

function main() {
  return `<section class="hero">
  ${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '100vw', alt: 'Two colleagues working through a problem at a laptop', imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="index.html">Home</a> / Organizational Development</p>
    <span class="eyebrow eyebrow--on-dark">Services</span>
    <h1 class="hero-title" style="max-width:16ch">Organizational Development</h1>
    <p class="hero-text">Good programs need good infrastructure behind them. We help you build the oversight, messaging, policy work and proposals that keep the mission moving — and funded — past the first grant cycle.</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--teal">Program Oversight</span>
      <span class="tag-pill tag-pill--teal">Communications</span>
      <span class="tag-pill tag-pill--teal">Public Policy</span>
      <span class="tag-pill tag-pill--teal">Grant Writing</span>
    </div>
    <div class="hero-actions"><a href="contact.html" class="btn btn-on-sky">Start a Conversation</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">Where organizations need support most</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Three areas we are asked about most often — and what we hand back when the work is done.</p>

    <div class="media-row">
      <div class="media-row-media">${picture({ name: 'lab-research', widths: [400, 600, 900, 1200], sizes: '(max-width: 720px) 100vw, 50vw', alt: 'A researcher at work in a laboratory' })}</div>
      <div class="media-row-body">
        <div class="card-number-badge card-number-badge--blossom">1</div>
        <h3 class="card-title" id="program-oversight">Program Oversight</h3>
        <p class="card-body" style="max-width:44ch">Logic models, indicators and reporting rhythms that give funders what they need without turning your frontline staff into data clerks. We build systems your team can actually maintain.</p>
      </div>
    </div>

    <div class="media-row media-row--reverse">
      <div class="media-row-body">
        <div class="card-number-badge card-number-badge--blossom">2</div>
        <h3 class="card-title" id="communications-and-public-policy">Communications and Public Policy</h3>
        <p class="card-body" style="max-width:44ch">Message architecture, spokesperson preparation and written policy positions — including testimony and consultation responses. We help you find the words that open doors.</p>
      </div>
      <div class="media-row-media">${picture({ name: 'team-meeting', widths: [400, 640, 960, 1280, 1920], sizes: '(max-width: 720px) 100vw, 50vw', alt: 'A team in discussion around a table' })}</div>
    </div>

    <div class="media-row" style="margin-bottom:0">
      <div class="media-row-media">${picture({ name: 'whiteboard-session', widths: [400, 640, 960, 1200], sizes: '(max-width: 720px) 100vw, 50vw', alt: 'Two colleagues working through ideas on a whiteboard' })}</div>
      <div class="media-row-body">
        <div class="card-number-badge card-number-badge--blossom">3</div>
        <h3 class="card-title" id="grant-writing">Grant Writing</h3>
        <p class="card-body" style="max-width:44ch">Full proposals and a reusable narrative library, so the next application starts from your own language rather than a blank page. We also review drafts in progress — sometimes a second set of eyes is all you need.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta-band band-blossom">
  <div class="cta-band-inner" style="max-width:720px">
    <span class="eyebrow eyebrow--on-blossom" style="text-align:center">How We Work</span>
    <p class="quote-text" style="font-size:clamp(22px,2.4vw,30px);line-height:1.32">We don't run parallel to your team — we work inside the systems they already use, and everything we produce is written to be maintained by the people who will still be there next year.</p>
    <p class="cta-text" style="color:var(--color-ink-700)">A first engagement usually opens with two weeks of listening: staff interviews, a review of current reporting, and a look at your last few funder submissions.</p>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <h2 class="section-heading">Who leads this work</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Practitioners who have run the programs they are now advising on.</p>
    <div class="auto-grid" style="--min:280px">
      ${TEAM.map(teamCard).join('\n      ')}
    </div>
  </div>
</section>

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">Common questions</h2>
    ${accordion(FAQS, 'od-faq')}
  </div>
</section>

<section class="cta-band band-sky">
  <div class="cta-band-inner">
    <h2 class="cta-heading">Have a proposal deadline coming up, or a program that needs stronger foundations?</h2>
    <p class="cta-text">Tell us what you are working on. We will scope what it takes and give you a clear timeline.</p>
    <a href="contact.html" class="btn btn-primary">Get in Touch</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'organizational-development',
  outputFile: 'organizational-development.html',
  activeNavLabel: 'Organizational Development',
  meta: {
    title: 'Organizational Development',
    description: 'Program oversight, communications, public policy and grant writing support that keeps your organization’s mission funded past the first grant cycle.',
    ogImage: 'organizational-development'
  },
  main
};
