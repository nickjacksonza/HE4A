// Single source of truth for cross-page facts referenced by partials and page modules.
// Brand/legal names, URLs, and office city/country are proper nouns -- they stay
// flat (unchanged across locales). Only tagline/hours are locale-keyed copy.
module.exports = {
  siteName: 'Health Equity 4 All',
  legalName: 'Equity Is the Word, LLC',
  tagline: {
    en: 'Onward. Together.',
    fr: 'En Avant. Ensemble.',
    es: 'Adelante. Juntos.',
    pt: 'Em Frente. Juntos.'
  },
  baseUrl: 'https://www.healthequity4all.org',
  formEndpoint: 'https://formspree.io/f/REPLACE_ME',
  email: 'info@healthequity4all.org',
  phone: '+1 206 931 3853',
  social: {
    facebook: 'https://www.facebook.com/EquityIsTheWord',
    twitter: 'https://twitter.com/EquityIsTheWord',
    instagram: 'https://instagram.com/healthequity_4_all',
    linkedin: 'https://linkedin.com/company/healthequity-4-all'
  },
  offices: [
    { city: 'Seattle', country: 'USA' },
    { city: 'Cape Town', country: 'South Africa' }
  ],
  hours: {
    en: { weekday: 'Mon – Fri, 8:00 am – 5:00 pm', weekend: 'Sat – Sun, Closed' },
    fr: { weekday: 'Lun – Ven, 8h00 – 17h00', weekend: 'Sam – Dim, Fermé' },
    es: { weekday: 'Lun – Vie, 8:00 – 17:00', weekend: 'Sáb – Dom, Cerrado' },
    pt: { weekday: 'Seg – Sex, 8h00 – 17h00', weekend: 'Sáb – Dom, Fechado' }
  },
  languages: ['English', 'Français', 'Español', 'Português'],
  copyrightYear: 2026
};
