const { picture } = require('../../helpers');

const QUOTES = [
  { quote: 'We must move beyond words into actionable steps. Show me your receipts.', author: 'Ace Robinson, M.P.H., M.H.L' },
  { quote: 'The major difference between public health and thermodynamics is that thermodynamics is easier.', author: 'Ace Robinson, M.P.H., M.H.L' },
  { quote: 'Achieving health equity is hard. Sometimes it means we have to go over, under, around or through challenges.', author: 'Ace Robinson, M.P.H., M.H.L' }
];

const PEOPLE = [
  { name: 'Ace Robinson', place: 'Seattle, USA', bio: 'Founder and Principal. Administrative and policy advocate in communicable disease; Acting Director of the Duke University Sexual & Gender Minority Wellness program.', stagger: 0 },
  { name: 'Lauren Miller', place: 'Atlanta, USA', bio: 'Advocate for DEI and health equity, guided by friendship, leadership and service to humanity.', stagger: 24 },
  { name: 'Diego Calixto', place: 'Brasília, Brazil', bio: 'Activist living with HIV and researcher at Fiocruz Brasília, focused on health and social justice.', stagger: 8 },
  { name: 'Lucy Wanjiku Njenga', place: 'Nairobi, Kenya', bio: 'HIV response leader for over a decade, building feminist movements from grassroots to global level.', stagger: 32 },
  { name: 'Eduardo Culbeaux', place: 'Southeast Asia', bio: 'Educator for over a decade, empowering youth through journalism and media programs.', stagger: 12 }
];

function main() {
  return `<section class="hero hero--tall">
  ${picture({ name: 'team-outdoors', widths: [640, 960, 1280, 1920], sizes: '100vw', alt: 'Members of the collective standing together outdoors', imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="eyebrow eyebrow--on-dark">Onward. Together.</span>
    <h1 class="hero-title hero-title--wide">Equitable healthcare, built with communities</h1>
    <p class="hero-text">We are a global collective of public health leaders working alongside organizations to strengthen governance, programs and practice so your equity commitments become lasting change.</p>
    <div class="hero-actions">
      <a href="contact.html" class="btn btn-on-sky">Start a Conversation</a>
      <a href="#services" class="btn btn-outline">See Our Services</a>
    </div>
  </div>
</section>

<section class="section-tight band-paper">
  <div class="text-strip">
    <p class="text-strip-quote">We transform healthcare systems into agents of change for historically excluded communities — BIPOC, LGBTQ+, differently abled, immigrant and refugee populations worldwide.</p>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <span class="eyebrow" style="text-align:center;color:var(--color-ink-800)">Our Reach</span>
    <div class="auto-grid" style="--min:200px;text-align:center">
      <div class="stat">
        <div class="stat-number">12</div>
        <div class="stat-label">countries where collective members lead health equity work</div>
      </div>
      <div class="stat">
        <div class="stat-number">40+</div>
        <div class="stat-label">organizations supported with governance, policy and programs</div>
      </div>
      <div class="stat">
        <div class="stat-number">20 yrs</div>
        <div class="stat-label">of frontline experience in HIV, LGBTQ+ and community health</div>
      </div>
    </div>
  </div>
</section>

<section id="services" class="section band-paper">
  <div class="container">
    <span class="eyebrow">What We Do</span>
    <div class="section-header">
      <div>
        <h2 class="section-heading">Four ways we can support your work</h2>
        <p class="section-subtext">Every engagement is shaped around what your team needs most — and designed so you can carry it forward on your own.</p>
      </div>
      <a href="contact.html" class="btn btn-outline-dark">Work with us</a>
    </div>
    <div class="services-grid">
      <a href="non-profit-leadership.html" class="service-card service-card--featured">
        ${picture({ name: 'whiteboard-session', widths: [400, 640, 960, 1200], sizes: '(max-width: 720px) 100vw, 50vw', alt: 'Two colleagues mapping ideas on a whiteboard', imgClass: 'service-media' })}
        <div class="service-body">
          <div class="service-heading">Non-Profit Leadership</div>
          <p class="service-desc">Board governance and executive coaching for leaders navigating the real complexity of equity-centered work.</p>
          <div class="service-tags">
            <span class="tag-soft">Board Governance</span>
            <span class="tag-soft">Executive Coaching</span>
          </div>
        </div>
      </a>
      <a href="organizational-development.html" class="service-card service-card--compact">
        ${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '180px', alt: 'Two colleagues working at a laptop', imgClass: 'service-media' })}
        <div class="service-body">
          <div class="service-heading">Organizational Development</div>
          <p class="service-desc">Program oversight, communications, public policy and grant writing that keep your mission funded.</p>
          <div class="service-link">Explore →</div>
        </div>
      </a>
      <a href="trainings.html" class="service-card service-card--compact">
        ${picture({ name: 'team-meeting', widths: [400, 640, 960, 1280, 1920], sizes: '180px', alt: 'A team in discussion around a table', imgClass: 'service-media' })}
        <div class="service-body">
          <div class="service-heading">Trainings</div>
          <p class="service-desc">Racial equity, LGBTQ+ equity and social determinants of health — built for practice, not just awareness.</p>
          <div class="service-link">Explore →</div>
        </div>
      </a>
      <a href="public-speaking.html" class="service-card service-card--banner">
        <div class="service-body">
          <div class="service-heading">Public Speaking</div>
          <p class="service-desc">Keynotes and panel moderation grounded in the real questions your audience is carrying — not a circuit talk.</p>
          <div class="service-link">Explore →</div>
        </div>
        ${picture({ name: 'panel-speaking', widths: [640, 960, 1200], sizes: '(max-width: 720px) 100vw, 50vw', alt: 'A collective member speaking on a panel', imgClass: 'service-media' })}
      </a>
    </div>
  </div>
</section>

<section class="quote-band band-blossom">
  <div class="quote-band-inner" data-carousel>
    <span class="eyebrow eyebrow--on-blossom">What We Say To People</span>
    <div aria-live="polite">
      <blockquote class="quote-text" data-quote-text>“${QUOTES[0].quote}”</blockquote>
      <p class="quote-author" data-quote-author>${QUOTES[0].author}</p>
    </div>
    <div class="quote-dots" role="group" aria-label="Choose a quote">
      ${QUOTES.map((_, i) => `<button type="button" class="quote-dot" data-quote-index="${i}" aria-current="${i === 0}" aria-label="Quote ${i + 1}"></button>`).join('\n      ')}
    </div>
    <script type="application/json" id="home-quotes-data">${JSON.stringify(QUOTES)}</script>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <div class="section-header">
      <div>
        <span class="eyebrow">Who We Are</span>
        <h2 class="section-heading" style="margin-bottom:10px">The Collective</h2>
        <p class="section-subtext" style="max-width:50ch">Public health leaders across twelve countries, each working where they live.</p>
      </div>
      <a href="about-us.html" class="btn btn-outline-dark">Meet everyone</a>
    </div>
    <div class="auto-grid" style="--min:190px">
      ${PEOPLE.map((p) => `<div class="person" style="--stagger:${p.stagger}px">
        <div class="person-portrait"><span>Portrait — ${p.name}</span></div>
        <div class="person-name">${p.name}</div>
        <div class="person-role">${p.place}</div>
        <div class="person-bio">${p.bio}</div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="cta-band band-sky">
  <div class="cta-band-inner">
    <h2 class="cta-heading">Let's talk about what comes next</h2>
    <p class="cta-text">Share the challenge you are working through. We will listen, and we will be honest about whether we can help.</p>
    <a href="contact.html" class="btn btn-primary">Get in Touch</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'home',
  outputFile: 'index.html',
  activeNavLabel: 'Home',
  meta: {
    title: 'Health Equity 4 All',
    description: 'A global collective of public health leaders strengthening governance, programs and practice so your organization’s equity commitments become lasting change.',
    ogImage: 'home'
  },
  main
};
