// Nav structure (locale-independent: pages, hrefs, anchor slugs) is separated
// from nav labels (locale-keyed translated text) so translating the site
// doesn't require re-declaring hrefs/anchors four times over.
//
// Anchor slugs (e.g. "board-governance-review") are internal HTML ids, not
// user-facing URLs -- they stay identical across every locale variant of a
// page, so a translated dropdown link still lands on the right section.
//
// Organizational Development note: the nav lists 5 sub-items (Program Oversight /
// Marketing and Communications / Public Policy / Grant Writing / Financial Leadership)
// but the page itself has only 4 content rows -- row 2 covers both communications and
// public policy under one heading. That's a deliberate merge, not a bug: both "Marketing
// and Communications" and "Public Policy" point at the same #communications-and-public-policy
// anchor in every locale.

const NAV_STRUCTURE = [
  {
    id: 'nonProfitLeadership',
    href: 'non-profit-leadership.html',
    items: [
      { id: 'boardGovernance', anchor: 'board-governance-review' },
      { id: 'executiveCoaching', anchor: 'executive-coaching' }
    ]
  },
  {
    id: 'organizationalDevelopment',
    href: 'organizational-development.html',
    items: [
      { id: 'programOversight', anchor: 'program-oversight' },
      { id: 'marketingCommunications', anchor: 'communications-and-public-policy' },
      { id: 'publicPolicy', anchor: 'communications-and-public-policy' },
      { id: 'grantWriting', anchor: 'grant-writing' },
      { id: 'financialLeadership', anchor: 'financial-leadership' }
    ]
  },
  {
    id: 'trainings',
    href: 'trainings.html',
    items: [
      { id: 'racialEquity', anchor: 'racial-equity' },
      { id: 'lgbtqEquity', anchor: 'lgbtq-equity' },
      { id: 'socialDeterminants', anchor: 'social-determinants' }
    ]
  },
  {
    id: 'publicSpeaking',
    href: 'public-speaking.html',
    items: [
      { id: 'keynote', anchor: 'keynote' },
      { id: 'moderating', anchor: 'moderating' }
    ]
  },
  {
    id: 'recruitment',
    href: 'recruitment.html',
    items: [
      { id: 'executiveSearch', anchor: 'executive-search' },
      { id: 'clinicalFrontline', anchor: 'clinical-frontline' },
      { id: 'equityHiring', anchor: 'equity-hiring' }
    ]
  },
  {
    id: 'aboutUs',
    href: 'about-us.html',
    items: []
  }
];

const NAV_LABELS = {
  en: {
    nonProfitLeadership: 'Non-Profit Leadership',
    organizationalDevelopment: 'Organizational Development',
    trainings: 'Equity Trainings',
    publicSpeaking: 'Public Speaking',
    recruitment: 'Healthcare Recruitment',
    aboutUs: 'About Us',
    boardGovernance: 'Board Governance',
    executiveCoaching: 'Executive Coaching',
    programOversight: 'Program Oversight',
    marketingCommunications: 'Marketing and Communications',
    publicPolicy: 'Public Policy',
    grantWriting: 'Grant Writing',
    financialLeadership: 'Financial Leadership',
    racialEquity: 'Racial Equity',
    lgbtqEquity: 'LGBTQ+ Equity',
    socialDeterminants: 'Social Determinants of Health Awareness',
    keynote: 'Keynote',
    moderating: 'Moderating',
    executiveSearch: 'Executive Search',
    clinicalFrontline: 'Clinical & Frontline',
    equityHiring: 'Equity-Centered Hiring',
    workWithUs: 'Work With Us'
  },
  fr: {
    nonProfitLeadership: 'Direction Associative',
    organizationalDevelopment: 'Développement Organisationnel',
    trainings: 'Formations Équité',
    publicSpeaking: 'Prise de Parole Publique',
    recruitment: 'Recrutement en Santé',
    aboutUs: 'À Propos',
    boardGovernance: 'Gouvernance du Conseil',
    executiveCoaching: 'Coaching de Direction',
    programOversight: 'Supervision de Programmes',
    marketingCommunications: 'Marketing et Communication',
    publicPolicy: 'Politiques Publiques',
    grantWriting: 'Rédaction de Demandes de Subvention',
    financialLeadership: 'Direction Financière',
    racialEquity: 'Équité Raciale',
    lgbtqEquity: 'Équité LGBTQ+',
    socialDeterminants: 'Sensibilisation aux Déterminants Sociaux de la Santé',
    keynote: 'Conférence Principale',
    moderating: 'Modération',
    executiveSearch: 'Recherche de Cadres',
    clinicalFrontline: 'Clinique et Terrain',
    equityHiring: 'Recrutement Équitable',
    workWithUs: 'Travaillons Ensemble'
  },
  es: {
    nonProfitLeadership: 'Liderazgo sin Fines de Lucro',
    organizationalDevelopment: 'Desarrollo Organizacional',
    trainings: 'Capacitaciones en Equidad',
    publicSpeaking: 'Oratoria Pública',
    recruitment: 'Reclutamiento en Salud',
    aboutUs: 'Sobre Nosotros',
    boardGovernance: 'Gobernanza de la Junta',
    executiveCoaching: 'Coaching Ejecutivo',
    programOversight: 'Supervisión de Programas',
    marketingCommunications: 'Marketing y Comunicaciones',
    publicPolicy: 'Política Pública',
    grantWriting: 'Redacción de Propuestas de Subvención',
    financialLeadership: 'Liderazgo Financiero',
    racialEquity: 'Equidad Racial',
    lgbtqEquity: 'Equidad LGBTQ+',
    socialDeterminants: 'Sensibilización sobre los Determinantes Sociales de la Salud',
    keynote: 'Conferencia Magistral',
    moderating: 'Moderación',
    executiveSearch: 'Búsqueda de Ejecutivos',
    clinicalFrontline: 'Clínico y Primera Línea',
    equityHiring: 'Contratación Equitativa',
    workWithUs: 'Trabaja con Nosotros'
  },
  pt: {
    nonProfitLeadership: 'Liderança Sem Fins Lucrativos',
    organizationalDevelopment: 'Desenvolvimento Organizacional',
    trainings: 'Capacitações em Equidade',
    publicSpeaking: 'Oratória Pública',
    recruitment: 'Recrutamento em Saúde',
    aboutUs: 'Sobre Nós',
    boardGovernance: 'Governança do Conselho',
    executiveCoaching: 'Coaching Executivo',
    programOversight: 'Supervisão de Programas',
    marketingCommunications: 'Marketing e Comunicação',
    publicPolicy: 'Política Pública',
    grantWriting: 'Redação de Propostas de Financiamento',
    financialLeadership: 'Liderança Financeira',
    racialEquity: 'Equidade Racial',
    lgbtqEquity: 'Equidade LGBTQ+',
    socialDeterminants: 'Conscientização sobre os Determinantes Sociais da Saúde',
    keynote: 'Palestra Principal',
    moderating: 'Moderação',
    executiveSearch: 'Busca de Executivos',
    clinicalFrontline: 'Clínico e Linha de Frente',
    equityHiring: 'Contratação Equitativa',
    workWithUs: 'Trabalhe Conosco'
  }
};

module.exports = { NAV_STRUCTURE, NAV_LABELS };
