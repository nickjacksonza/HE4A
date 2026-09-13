const { picture, accordion, teamCard } = require('../../helpers');

const CURRICULUM = [
  {
    label: 'Racial Equity',
    anchor: 'racial-equity',
    image: 'whiteboard-session',
    imageWidths: [400, 640, 960, 1200],
    alt: 'Colleagues working through ideas on a whiteboard',
    title: 'Racial Equity',
    desc: 'How racism shows up in intake, referral, hiring and data collection — and what a team can change this month without waiting for permission.',
    topics: ['Structural racism in healthcare access', 'Bias in intake and referral processes', 'Data collection that reflects community reality', 'Building accountability into daily practice']
  },
  {
    label: 'LGBTQ+ Equity',
    anchor: 'lgbtq-equity',
    image: 'team-outdoors',
    imageWidths: [640, 960, 1280, 1920],
    alt: 'Members of the collective together outdoors',
    title: 'LGBTQ+ Equity',
    desc: 'Affirming care and employment practice for LGBTQ+ people, with particular attention to trans and gender diverse clients and staff.',
    topics: ['Creating affirming clinical environments', 'Inclusive employment policies and practices', 'Working with trans and gender diverse communities', 'Addressing intersecting identities in care']
  },
  {
    label: 'Social Determinants',
    anchor: 'social-determinants',
    image: 'lab-research',
    imageWidths: [400, 600, 900, 1200],
    alt: 'A researcher at work in a laboratory',
    title: 'Social Determinants of Health',
    desc: 'Housing, income, migration status and criminalization treated as clinical facts — and how to design services that account for them.',
    topics: ['Housing instability as a health determinant', 'Immigration status and access to care', 'Economic barriers to health outcomes', 'Designing services around real circumstances']
  }
];

const FAQS = [
  { q: 'Are sessions delivered online or in person?', a: 'Both. In person for groups up to 30, online up to 60. Multi-part series often mix the two — opening in person and continuing online works well for many teams.' },
  { q: 'Do you offer continuing education credit?', a: 'Not directly, but we provide a syllabus, attendance record and learning objectives that most accrediting bodies accept for self-submission.' },
  { q: 'Can a training be adapted for clinical staff specifically?', a: 'Absolutely. Clinical, frontline, administrative and board audiences each receive different case material. We recommend not mixing board members with staff in the same room.' },
  { q: 'What happens after the session?', a: 'You receive the commitments made in the room, written up by name and date, plus a 60-day check-in call included in the fee. That follow-up makes the difference.' }
];

const TEAM = [
  { name: 'Lauren Miller', role: 'Racial Equity Faculty · Atlanta', bio: 'Advocate for DEI and health equity, guided by friendship, leadership and service to humanity. Leads the racial equity curriculum.' },
  { name: 'Diego Calixto', role: 'LGBTQ+ Equity Faculty · Brasília', bio: 'Activist living with HIV and researcher at Fiocruz Brasília. Delivers LGBTQ+ equity sessions in Portuguese and Spanish.' },
  { name: 'Lucy Wanjiku Njenga', role: 'Determinants of Health Faculty · Nairobi', bio: 'HIV response leader for over a decade, teaching the social and structural determinants that shape service uptake.' }
];

function main() {
  const tabs = CURRICULUM.map((c, i) => `      <button type="button" class="tab" role="tab" id="${c.anchor}" aria-selected="${i === 0}" aria-controls="panel-${c.anchor}" tabindex="${i === 0 ? '0' : '-1'}">${c.label}</button>`).join('\n');

  const panels = CURRICULUM.map((c, i) => `    <div class="tabpanel" id="panel-${c.anchor}" role="tabpanel" aria-labelledby="${c.anchor}" tabindex="0"${i === 0 ? '' : ' hidden'}>
      <div class="tabpanel-grid">
        <div class="tabpanel-media">${picture({ name: c.image, widths: c.imageWidths, sizes: '(max-width: 720px) 100vw, 50vw', alt: c.alt })}</div>
        <div class="tabpanel-body">
          <h3 class="tabpanel-title">${c.title}</h3>
          <p class="tabpanel-desc">${c.desc}</p>
          <div class="topic-list">
            ${c.topics.map((t) => `<div class="topic-item"><span class="topic-dot" aria-hidden="true"></span><span class="topic-text">${t}</span></div>`).join('\n            ')}
          </div>
        </div>
      </div>
    </div>`).join('\n');

  return `<section class="hero">
  ${picture({ name: 'team-meeting', widths: [400, 640, 960, 1280, 1920], sizes: '100vw', alt: 'A team in discussion around a table', imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="index.html">Home</a> / Trainings</p>
    <span class="eyebrow eyebrow--on-dark">Services</span>
    <h1 class="hero-title">Trainings</h1>
    <p class="hero-text">Sessions designed for teams who will be back at work on Monday. Every training ends with concrete commitments the group has agreed to make — written down, owned by name, and followed up on.</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--gold">Racial Equity</span>
      <span class="tag-pill tag-pill--gold">LGBTQ+ Equity</span>
      <span class="tag-pill tag-pill--gold">Social Determinants of Health</span>
    </div>
    <div class="hero-actions"><a href="contact.html" class="btn btn-on-sky">Book a Session</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">The curriculum</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-6)">Each module runs as a half day, a full day, or a series across a quarter. Content is adapted to your sector before delivery.</p>
    <div class="tablist" role="tablist" aria-label="Training curriculum">
${tabs}
    </div>
${panels}
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="auto-grid" style="--min:240px">
      <div class="info-card">
        <div class="info-card-title">Formats</div>
        <p class="card-body">Half day, full day, or a multi-part series across a quarter. In person for groups up to 30, online up to 60.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">Preparation</div>
        <p class="card-body">We ask for a short pre-session survey and one conversation with a frontline staff member. The examples in the room will be yours, not borrowed.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">Languages</div>
        <p class="card-body">Sessions run in English, French, Spanish and Portuguese — delivered by facilitators who teach in the language they live in.</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">Follow-up</div>
        <p class="card-body">You receive the commitments made in the room, written up by name and date, plus a 60-day check-in call included in the fee.</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <h2 class="section-heading">Who leads this work</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Facilitators who have done the work they are teaching about.</p>
    <div class="auto-grid" style="--min:280px">
      ${TEAM.map(teamCard).join('\n      ')}
    </div>
  </div>
</section>

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">Common questions</h2>
    ${accordion(FAQS, 'trainings-faq')}
  </div>
</section>

<section class="cta-band band-blossom">
  <div class="cta-band-inner">
    <h2 class="cta-heading">Ready to move your team from awareness to practice?</h2>
    <p class="cta-text">Tell us who is in the room — team, size, language and what has been tried before. We will propose a format that fits.</p>
    <a href="contact.html" class="btn btn-primary">Get in Touch</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'trainings',
  outputFile: 'trainings.html',
  activeNavLabel: 'Trainings',
  meta: {
    title: 'Trainings',
    description: 'Racial equity, LGBTQ+ equity and social determinants of health trainings built for practice — every session ends with commitments the team follows up on.',
    ogImage: 'trainings'
  },
  main
};
