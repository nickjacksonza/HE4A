const { picture, accordion, teamCard } = require('../../helpers');

const FAQS = [
  { q: 'How long is a typical governance engagement?', a: 'Three to nine months. A standalone review usually runs about eight weeks; adding implementation support through two board cycles extends to the longer end. We scope it together after our first conversation.' },
  { q: 'Do you work with boards outside the United States?', a: 'Yes. Collective members lead work across twelve countries, and engagements run in English, French, Spanish and Portuguese.' },
  { q: 'Can coaching be arranged for someone other than the executive director?', a: 'Absolutely — and often it should be. We coach deputy directors, program leads and first-time managers. All sessions are confidential, including from the board.' },
  { q: 'What does an engagement cost?', a: 'We scope after a first conversation and quote a fixed fee with no surprises. We hold a reduced rate for community-based organizations with budgets under one million dollars.' }
];

const TEAM = [
  { name: 'Ace Robinson', role: 'Founder & Principal · Seattle', bio: 'M.P.H., M.H.L. Leads board governance reviews and executive coaching. Acting Director of the Duke University Sexual & Gender Minority Wellness program.' },
  { name: 'Lauren Miller', role: 'Leadership Faculty · Atlanta', bio: 'Advocate for DEI and health equity. Works with executives and boards on culture, accountability and succession planning.' }
];

function main() {
  return `<section class="hero">
  ${picture({ name: 'whiteboard-session', widths: [400, 640, 960, 1200], sizes: '100vw', alt: 'Two colleagues mapping ideas on a whiteboard', imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="index.html">Home</a> / Non-Profit Leadership</p>
    <span class="eyebrow eyebrow--on-dark">Services</span>
    <h1 class="hero-title">Non-Profit Leadership</h1>
    <p class="hero-text">You already know what equity asks of your organization. We help with the governance and coaching that make it possible to deliver — sustainably, and without burning out the people who care most.</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--coral">Board Governance</span>
      <span class="tag-pill tag-pill--coral">Executive Coaching</span>
    </div>
    <div class="hero-actions"><a href="contact.html" class="btn btn-on-sky">Start a Conversation</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">What this work looks like</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Three engagements that can run separately or together across a fiscal year, depending on where you are.</p>
    <div class="auto-grid" style="--min:260px">
      <div class="card card-numbered">
        <div class="card-number-badge card-number-badge--sky">1</div>
        <h3 class="card-title" id="board-governance-review">Board Governance Review</h3>
        <p class="card-body">We review bylaws, sit in on meetings and interview trustees. You receive a clear picture of where authority sits and a practical plan for the next two board cycles.</p>
      </div>
      <div class="card card-numbered">
        <div class="card-number-badge card-number-badge--sky">2</div>
        <h3 class="card-title" id="executive-coaching">Executive Coaching</h3>
        <p class="card-body">Confidential monthly sessions for executive directors and senior staff — especially those who are the first to hold their role in the organization's history.</p>
      </div>
      <div class="card card-numbered">
        <div class="card-number-badge card-number-badge--sky">3</div>
        <h3 class="card-title" id="leadership-transition">Leadership Transition</h3>
        <p class="card-body">Succession planning and interim support through a founder exit or a first outside hire, so the mission carries through the change.</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="split-block">
      <div class="quote-card">
        <span class="eyebrow eyebrow--on-blossom">In Their Words</span>
        <p class="quote-text">“We must move beyond words into actionable steps. Show me your receipts.”</p>
        <span class="quote-author">Ace Robinson, M.P.H., M.H.L</span>
      </div>
      <div class="split-col" style="padding-top:12px">
        <h2 class="split-col-heading">Our approach</h2>
        <div class="split-col-text">Governance work starts with a direct question: who is this board accountable to, and who is missing? We help you answer that honestly — and then build the structures that keep equity at the centre of decision-making.</div>
        <div class="split-col-text">Most engagements run three to nine months. Everything we produce belongs to your team and is documented so it outlasts our involvement.</div>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <h2 class="section-heading">Who leads this work</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">You work directly with the person, not an account team.</p>
    <div class="auto-grid" style="--min:280px">
      ${TEAM.map(teamCard).join('\n      ')}
    </div>
  </div>
</section>

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">Common questions</h2>
    ${accordion(FAQS, 'npl-faq')}
  </div>
</section>

<section class="cta-band band-blossom">
  <div class="cta-band-inner">
    <h2 class="cta-heading">Ready to strengthen your board or support your leadership team?</h2>
    <p class="cta-text">Share what you are working through and we will let you know how we can help.</p>
    <a href="contact.html" class="btn btn-primary">Get in Touch</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'non-profit-leadership',
  outputFile: 'non-profit-leadership.html',
  activeNavLabel: 'Non-Profit Leadership',
  meta: {
    title: 'Non-Profit Leadership',
    description: 'Board governance reviews and confidential executive coaching for non-profit leaders navigating equity-centered work sustainably.',
    ogImage: 'non-profit-leadership'
  },
  main
};
