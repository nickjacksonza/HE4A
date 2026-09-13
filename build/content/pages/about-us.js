const { picture } = require('../../helpers');

const PEOPLE = [
  { name: 'Ace Robinson', role: 'Founder & Principal · Seattle, USA', bio: 'M.P.H., M.H.L. Administrative and policy advocate in communicable disease. Acting Director of the Duke University Sexual & Gender Minority Wellness program.', stagger: 0 },
  { name: 'Lauren Miller', role: 'Leadership Faculty · Atlanta, USA', bio: 'Advocate for DEI and health equity, guided by friendship, leadership and service to humanity.', stagger: 20 },
  { name: 'Diego Calixto', role: 'Research & Advocacy · Brasília, Brazil', bio: 'Activist living with HIV and researcher at Fiocruz Brasília, focused on health and social justice across Latin America.', stagger: 6 },
  { name: 'Lucy Wanjiku Njenga', role: 'Programs & Policy · Nairobi, Kenya', bio: 'HIV response leader for over a decade, building feminist movements from grassroots to global level.', stagger: 28 },
  { name: 'Eduardo Culbeaux', role: 'Education & Media · Southeast Asia', bio: 'Educator for over a decade, empowering youth through journalism and media programmes.', stagger: 10 },
  { name: 'Open Seat', role: 'Cape Town, South Africa', bio: 'We are growing the collective with members whose practice is rooted in Southern Africa. Know someone who should be here? Tell us.', stagger: 18 }
];

function main() {
  return `<section class="hero">
  ${picture({ name: 'team-outdoors', widths: [640, 960, 1280, 1920], sizes: '100vw', alt: 'Members of the collective standing together outdoors', imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="index.html">Home</a> / About Us</p>
    <span class="eyebrow eyebrow--on-dark">Onward. Together.</span>
    <h1 class="hero-title">A collective, not a consultancy</h1>
    <p class="hero-text" style="max-width:48ch">Equity Is the Word, LLC works publicly as Health Equity 4 All. We are public health leaders based in Seattle and Cape Town, supporting organizations that serve BIPOC, LGBTQ+, differently abled, asylee, immigrant and sex worker communities.</p>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="auto-grid" style="--min:300px">
      <div class="pillar-card">
        <span class="eyebrow" style="margin-bottom:0">Vision</span>
        <p class="pillar-quote">Liberating people and communities from systemic and structural barriers that lessen health outcomes.</p>
      </div>
      <div class="pillar-card">
        <span class="eyebrow eyebrow--on-blossom" style="margin-bottom:0">Mission</span>
        <p class="pillar-quote">To transform healthcare systems into agents of change for historically excluded communities.</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">What we hold ourselves to</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Three commitments we are accountable for — to the communities first.</p>
    <div class="auto-grid" style="--min:260px">
      <div class="value-card">
        <div class="value-bar value-bar--coral"></div>
        <h3 class="card-title">Receipts over statements</h3>
        <p class="card-body">We ask organizations to show what changed after the commitment was published, and we welcome the same question in return.</p>
      </div>
      <div class="value-card">
        <div class="value-bar value-bar--teal"></div>
        <h3 class="card-title">Local before global</h3>
        <p class="card-body">Members lead work where they live, in the language of the community. Nobody is flown in to explain a context they have only read about.</p>
      </div>
      <div class="value-card">
        <div class="value-bar value-bar--gold"></div>
        <h3 class="card-title">Leave the capacity behind</h3>
        <p class="card-body">Every engagement is designed to end. What we build is documented and handed to the people who will still be there next year.</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <span class="eyebrow">Who We Are</span>
    <h2 class="section-heading" style="margin-bottom:10px">The Collective</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">Public health leaders across twelve countries, each carrying a practice of their own.</p>
    <div class="auto-grid" style="--min:220px">
      ${PEOPLE.map((p) => `<div class="person" style="--stagger:${p.stagger}px">
        <div class="person-portrait"><span>Portrait — ${p.name}</span></div>
        <div class="person-name">${p.name}</div>
        <div class="person-role">${p.role}</div>
        <div class="person-bio">${p.bio}</div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="cta-band band-blossom">
  <div class="cta-band-inner">
    <span class="eyebrow eyebrow--on-blossom">What We Say To People</span>
    <p class="quote-text" style="font-size:clamp(24px,2.6vw,34px)">“The major difference between public health and thermodynamics is that thermodynamics is easier.”</p>
    <span class="quote-author">Ace Robinson, M.P.H., M.H.L</span>
    <a href="contact.html" class="btn btn-primary">Work With Us</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'about-us',
  outputFile: 'about-us.html',
  activeNavLabel: 'About Us',
  meta: {
    title: 'About Us',
    description: 'A global collective, not a consultancy — public health leaders based in Seattle and Cape Town supporting historically excluded communities worldwide.',
    ogImage: 'about-us'
  },
  main
};
