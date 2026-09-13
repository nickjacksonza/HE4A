// Single source of truth for the primary nav + dropdown sub-items.
//
// The original design mockup (SiteHeader.dc.html) reused the parent item's href for every
// sub-item link, so every dropdown item under a section pointed at the same bare page URL.
// Here each sub-item instead points at a real in-page anchor on its target page.
//
// Organizational Development note: the nav lists 4 sub-items (Program Oversight / Marketing
// and Communications / Public Policy / Grant Writing) but the page itself has only 3 content
// rows -- row 2 covers both communications and public policy under one heading. That's a
// deliberate merge, not a bug: both "Marketing and Communications" and "Public Policy" point
// at the same #communications-and-public-policy anchor.
module.exports = [
  {
    label: 'Non-Profit Leadership',
    href: 'non-profit-leadership.html',
    items: [
      { label: 'Board Governance', anchor: 'board-governance-review' },
      { label: 'Executive Coaching', anchor: 'executive-coaching' }
    ]
  },
  {
    label: 'Organizational Development',
    href: 'organizational-development.html',
    items: [
      { label: 'Program Oversight', anchor: 'program-oversight' },
      { label: 'Marketing and Communications', anchor: 'communications-and-public-policy' },
      { label: 'Public Policy', anchor: 'communications-and-public-policy' },
      { label: 'Grant Writing', anchor: 'grant-writing' }
    ]
  },
  {
    label: 'Trainings',
    href: 'trainings.html',
    items: [
      { label: 'Racial Equity', anchor: 'racial-equity' },
      { label: 'LGBTQ+ Equity', anchor: 'lgbtq-equity' },
      { label: 'Social Determinants of Health Awareness', anchor: 'social-determinants' }
    ]
  },
  {
    label: 'Public Speaking',
    href: 'public-speaking.html',
    items: [
      { label: 'Keynote', anchor: 'keynote' },
      { label: 'Moderating', anchor: 'moderating' }
    ]
  },
  {
    label: 'About Us',
    href: 'about-us.html',
    items: []
  }
];
