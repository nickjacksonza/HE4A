// Client testimonials, reused verbatim across all 4 service pages (matching
// the pattern on the live site, which repeats the same 3 quotes everywhere).
// Attribution (name/title) is a proper noun and stays fixed across locales;
// only the quote text itself is translated.
const ATTRIBUTION = [
  { name: 'Scott Clarke', title: 'Director, Amandla Development' },
  { name: 'Dr. Cheyenne Batista', title: 'Founding CEO, Firefly Worldwide, Inc.' },
  { name: 'Dr. Miriam Rosenberg', title: null }
];

const QUOTES = {
  en: [
    'Having the opportunity to work with Equity Is the Word has been nothing short of transformative.',
    'They go far beyond with their invaluable insights and ability to cut through the noise to get to the heart of a matter. Simply a pleasure to work with.',
    'Working with them through their Executive Coaching programming has been a fantastic experience. Our sessions were tailored to me.'
  ],
  fr: [
    'Avoir eu l’opportunité de travailler avec Equity Is the Word a été tout simplement transformateur.',
    'Ils vont bien au-delà avec leurs analyses précieuses et leur capacité à aller droit au cœur du sujet. Un plaisir de travailler avec eux.',
    'Travailler avec eux dans le cadre de leur programme de Coaching de Direction a été une expérience formidable. Nos séances étaient sur mesure.'
  ],
  es: [
    'Tener la oportunidad de trabajar con Equity Is the Word ha sido sencillamente transformador.',
    'Van mucho más allá con sus valiosas perspectivas y su capacidad para ir directo al corazón del asunto. Un placer trabajar con ellos.',
    'Trabajar con ellos a través de su programa de Coaching Ejecutivo ha sido una experiencia fantástica. Nuestras sesiones fueron hechas a mi medida.'
  ],
  pt: [
    'Ter a oportunidade de trabalhar com a Equity Is the Word foi simplesmente transformador.',
    'Eles vão muito além com suas percepções valiosas e sua capacidade de ir direto ao cerne da questão. Um prazer trabalhar com eles.',
    'Trabalhar com eles através do programa de Coaching Executivo foi uma experiência fantástica. Nossas sessões foram feitas sob medida para mim.'
  ]
};

const HEADING = {
  en: 'What Clients Say',
  fr: 'Ce Que Disent les Clients',
  es: 'Lo Que Dicen los Clientes',
  pt: 'O Que Dizem os Clientes'
};

function testimonials(locale) {
  return ATTRIBUTION.map((a, i) => ({ ...a, quote: QUOTES[locale][i] }));
}

module.exports = { testimonials, HEADING };
