const { picture, href, personCard } = require('../../helpers');
const site = require('../site');
const people = require('../people');

const PEOPLE_META = [
  { name: 'Ace Robinson', stagger: 0 },
  { name: 'Lauren Miller', stagger: 20 },
  { name: 'Diego Calixto', stagger: 6 },
  { name: 'Lucy Wanjiku Njenga', stagger: 28 },
  { name: 'Eduardo Culbeaux', stagger: 10 }
];

// Members beyond the original 5, sourced from build/content/people.js (kept
// there since the same bios are reused on service-page team cards). Ordered
// to roughly match the live site's roster; stagger values just vary the
// staggered-grid rhythm, no other significance.
const EXTRA_PEOPLE = [
  { key: 'johnHanna', stagger: 14 },
  { key: 'victoriaOwoyele', stagger: 24 },
  { key: 'leandroMaldonado', stagger: 4 },
  { key: 'robertMiller', stagger: 18 },
  { key: 'nickJackson', stagger: 8 },
  { key: 'keletsoMakofane', stagger: 22 },
  { key: 'stephenPlaceholder', stagger: 12 } // Juan Michael Porter II was removed at the user's request; this holds his slot for an incoming member (surname/bio pending)
];

const OPEN_SEAT = { name: null, stagger: 16 }; // no proper name, label is itself translated copy

const COPY = {
  en: {
    hero: {
      title: 'A collective, not a consultancy',
      text: 'Equity Is the Word, LLC works publicly as Health Equity 4 All. We’re public health leaders based in Seattle and Cape Town, supporting organizations that serve BIPOC, LGBTQ+, differently abled, asylee, immigrant and sex worker communities.'
    },
    pillars: {
      vision: { label: 'Vision', text: 'Liberating people and communities from systemic and structural barriers that lessen health outcomes.' },
      mission: { label: 'Mission', text: 'To transform healthcare systems into agents of change for historically excluded communities.' }
    },
    values: {
      heading: 'What we hold ourselves to',
      subtext: 'Three commitments we’re accountable for, to the communities before anyone else.',
      items: [
        { title: 'Receipts over statements', body: 'We ask organizations to show what changed after the commitment was published, and we welcome the same question in return.' },
        { title: 'Local before global', body: 'Members lead work where they live, in the language of the community. We don’t fly someone in to explain a place they’ve only read about.' },
        { title: 'Leave the capacity behind', body: 'Every engagement is designed to end. What we build gets documented and handed to the people who’ll still be there next year.' }
      ]
    },
    collective: {
      eyebrow: 'Who We Are',
      heading: 'The Collective',
      subtext: 'Public health leaders across twelve countries, each carrying a practice of their own.',
      roles: [
        'Founder & Principal · Seattle, USA',
        'Leadership Faculty · Atlanta, USA',
        'Research & Advocacy · Brasília, Brazil',
        'Programs & Policy · Nairobi, Kenya',
        'Education & Media · Southeast Asia'
      ],
      bios: [
        'M.P.H., M.H.L. Administrative and policy advocate in communicable disease. Acting Director of the Duke University Sexual & Gender Minority Wellness program.',
        'Advocate for DEI and health equity, guided by friendship, leadership and service to humanity.',
        'Activist living with HIV and researcher at Fiocruz Brasília, focused on health and social justice across Latin America.',
        'HIV response leader for over a decade, building feminist movements from grassroots to global level.',
        'Educator for over a decade, empowering youth through journalism and media programs.'
      ],
      openSeatName: 'Open Seat',
      openSeatRole: 'Cape Town, South Africa',
      openSeatBio: 'We’re growing the collective with members whose practice is rooted in Southern Africa. Know someone who should be here? Tell us.'
    },
    quote: { eyebrow: 'What We Say To People', text: 'The major difference between public health and thermodynamics is that thermodynamics is easier.' },
    ctaButton: 'Work With Us',
    heroAlt: 'Members of the collective standing together outdoors'
  },
  fr: {
    hero: {
      title: "Un collectif, pas un cabinet de conseil",
      text: "Equity Is the Word, LLC opère publiquement sous le nom de Health Equity 4 All. Nous sommes des responsables de santé publique basés à Seattle et Cape Town, soutenant des organisations qui servent les communautés BIPOC, LGBTQ+, en situation de handicap, demandeuses d'asile, immigrantes et de travailleuses et travailleurs du sexe."
    },
    pillars: {
      vision: { label: 'Vision', text: 'Libérer les personnes et les communautés des barrières systémiques et structurelles qui réduisent les résultats de santé.' },
      mission: { label: 'Mission', text: 'Transformer les systèmes de santé en moteurs de changement pour les communautés historiquement exclues.' }
    },
    values: {
      heading: 'Ce à quoi nous nous tenons',
      subtext: 'Trois engagements dont nous sommes redevables, aux communautés avant tous les autres.',
      items: [
        { title: 'Des preuves plutôt que des déclarations', body: 'Nous demandons aux organisations de montrer ce qui a changé après la publication de leur engagement, et nous accueillons la même question en retour.' },
        { title: 'Le local avant le mondial', body: 'Les membres dirigent le travail là où ils vivent, dans la langue de la communauté. Nous n’envoyons personne expliquer un endroit qu’il n’a fait que lire.' },
        { title: 'Laisser la capacité en héritage', body: 'Chaque intervention est conçue pour se terminer. Ce que nous construisons est documenté et remis aux personnes qui seront encore là l’année prochaine.' }
      ]
    },
    collective: {
      eyebrow: 'Qui Nous Sommes',
      heading: 'Le Collectif',
      subtext: 'Des responsables de santé publique dans douze pays, chacun portant sa propre pratique.',
      roles: [
        'Fondateur et Principal · Seattle, États-Unis',
        'Faculté de Leadership · Atlanta, États-Unis',
        'Recherche et Plaidoyer · Brasília, Brésil',
        'Programmes et Politiques · Nairobi, Kenya',
        'Éducation et Médias · Asie du Sud-Est'
      ],
      bios: [
        'M.P.H., M.H.L. Défenseur des politiques administratives en maladies transmissibles. Directeur par intérim du programme de bien-être des minorités sexuelles et de genre de l’Université Duke.',
        "Défenseure de la diversité, de l'équité et de l'inclusion ainsi que de l'équité en santé, guidée par l'amitié, le leadership et le service à l'humanité.",
        'Militant séropositif et chercheur à la Fiocruz Brasília, engagé pour la santé et la justice sociale à travers l’Amérique latine.',
        "Leader de la réponse au VIH depuis plus de dix ans, bâtissant des mouvements féministes de la base jusqu'à l'échelle mondiale.",
        "Éducateur depuis plus de dix ans, donnant aux jeunes les moyens d'agir par le journalisme et les programmes médiatiques."
      ],
      openSeatName: 'Poste à Pourvoir',
      openSeatRole: 'Cape Town, Afrique du Sud',
      openSeatBio: 'Nous développons le collectif avec des membres dont la pratique est enracinée en Afrique australe. Vous connaissez quelqu’un qui devrait être ici ? Dites-le-nous.'
    },
    quote: { eyebrow: 'Ce que Nous Disons aux Gens', text: "La principale différence entre la santé publique et la thermodynamique, c'est que la thermodynamique est plus simple." },
    ctaButton: 'Travaillons Ensemble',
    heroAlt: 'Des membres du collectif réunis à l’extérieur'
  },
  es: {
    hero: {
      title: 'Un colectivo, no una consultora',
      text: 'Equity Is the Word, LLC opera públicamente como Health Equity 4 All. Somos líderes de salud pública con base en Seattle y Ciudad del Cabo, que apoyamos a organizaciones que atienden a comunidades BIPOC, LGBTQ+, con discapacidad, solicitantes de asilo, inmigrantes y trabajadoras y trabajadores sexuales.'
    },
    pillars: {
      vision: { label: 'Visión', text: 'Liberar a las personas y comunidades de las barreras sistémicas y estructurales que reducen los resultados de salud.' },
      mission: { label: 'Misión', text: 'Transformar los sistemas de salud en agentes de cambio para las comunidades históricamente excluidas.' }
    },
    values: {
      heading: 'A qué nos comprometemos',
      subtext: 'Tres compromisos por los que rendimos cuentas, a las comunidades antes que a nadie.',
      items: [
        { title: 'Comprobantes antes que declaraciones', body: 'Pedimos a las organizaciones que muestren qué cambió después de publicar su compromiso, y damos la bienvenida a la misma pregunta a cambio.' },
        { title: 'Lo local antes que lo global', body: 'Los miembros dirigen el trabajo donde viven, en el idioma de la comunidad. No enviamos a nadie a explicar un lugar que solo ha leído.' },
        { title: 'Dejar la capacidad instalada', body: 'Cada intervención está diseñada para terminar. Lo que construimos queda documentado y se entrega a las personas que seguirán ahí el año próximo.' }
      ]
    },
    collective: {
      eyebrow: 'Quiénes Somos',
      heading: 'El Colectivo',
      subtext: 'Líderes de salud pública en doce países, cada uno con su propia práctica.',
      roles: [
        'Fundador y Principal · Seattle, EE. UU.',
        'Facultad de Liderazgo · Atlanta, EE. UU.',
        'Investigación y Defensoría · Brasília, Brasil',
        'Programas y Políticas · Nairobi, Kenia',
        'Educación y Medios · Sudeste Asiático'
      ],
      bios: [
        'M.P.H., M.H.L. Defensor de políticas administrativas en enfermedades transmisibles. Director interino del programa de bienestar de minorías sexuales y de género de la Universidad Duke.',
        'Defensora de la diversidad, equidad e inclusión y de la equidad en salud, guiada por la amistad, el liderazgo y el servicio a la humanidad.',
        'Activista que vive con VIH e investigador en Fiocruz Brasília, enfocado en la salud y la justicia social en toda América Latina.',
        'Líder de la respuesta al VIH durante más de una década, construyendo movimientos feministas desde las bases hasta el nivel global.',
        'Educador durante más de una década, empoderando a los jóvenes a través del periodismo y programas de medios.'
      ],
      openSeatName: 'Puesto por Cubrir',
      openSeatRole: 'Ciudad del Cabo, Sudáfrica',
      openSeatBio: 'Estamos haciendo crecer el colectivo con miembros cuya práctica está arraigada en el África meridional. ¿Conoces a alguien que debería estar aquí? Cuéntanos.'
    },
    quote: { eyebrow: 'Lo Que le Decimos a la Gente', text: 'La principal diferencia entre la salud pública y la termodinámica es que la termodinámica es más fácil.' },
    ctaButton: 'Trabaja con Nosotros',
    heroAlt: 'Miembros del colectivo reunidos al aire libre'
  },
  pt: {
    hero: {
      title: 'Um coletivo, não uma consultoria',
      text: 'A Equity Is the Word, LLC opera publicamente como Health Equity 4 All. Somos líderes de saúde pública baseados em Seattle e Cidade do Cabo, apoiando organizações que atendem comunidades BIPOC, LGBTQ+, com deficiência, solicitantes de asilo, imigrantes e profissionais do sexo.'
    },
    pillars: {
      vision: { label: 'Visão', text: 'Libertar pessoas e comunidades das barreiras sistêmicas e estruturais que reduzem os resultados de saúde.' },
      mission: { label: 'Missão', text: 'Transformar sistemas de saúde em agentes de mudança para comunidades historicamente excluídas.' }
    },
    values: {
      heading: 'Ao que nos responsabilizamos',
      subtext: 'Três compromissos pelos quais respondemos, às comunidades antes de qualquer outro.',
      items: [
        { title: 'Comprovantes antes de declarações', body: 'Pedimos que as organizações mostrem o que mudou depois de publicar seu compromisso, e recebemos de bom grado a mesma pergunta em troca.' },
        { title: 'O local antes do global', body: 'Os membros lideram o trabalho onde vivem, no idioma da comunidade. Não mandamos ninguém explicar um lugar que apenas leu a respeito.' },
        { title: 'Deixar a capacidade instalada', body: 'Cada atuação é desenhada para terminar. O que construímos é documentado e entregue às pessoas que ainda estarão lá no próximo ano.' }
      ]
    },
    collective: {
      eyebrow: 'Quem Somos',
      heading: 'O Coletivo',
      subtext: 'Líderes de saúde pública em doze países, cada um com sua própria prática.',
      roles: [
        'Fundador e Diretor Principal · Seattle, EUA',
        'Corpo Docente de Liderança · Atlanta, EUA',
        'Pesquisa e Advocacy · Brasília, Brasil',
        'Programas e Políticas · Nairobi, Quênia',
        'Educação e Mídia · Sudeste Asiático'
      ],
      bios: [
        'M.P.H., M.H.L. Defensor de políticas administrativas em doenças transmissíveis. Diretor interino do programa de bem-estar de minorias sexuais e de gênero da Universidade Duke.',
        'Defensora da diversidade, equidade e inclusão e da equidade em saúde, guiada pela amizade, liderança e serviço à humanidade.',
        'Ativista vivendo com HIV e pesquisador na Fiocruz Brasília, focado em saúde e justiça social em toda a América Latina.',
        'Líder da resposta ao HIV por mais de uma década, construindo movimentos feministas das bases até o nível global.',
        'Educador por mais de uma década, capacitando jovens por meio do jornalismo e de programas de mídia.'
      ],
      openSeatName: 'Vaga Aberta',
      openSeatRole: 'Cidade do Cabo, África do Sul',
      openSeatBio: 'Estamos expandindo o coletivo com membros cuja prática é enraizada na África Austral. Conhece alguém que deveria estar aqui? Conte para nós.'
    },
    quote: { eyebrow: 'O Que Dizemos às Pessoas', text: 'A principal diferença entre saúde pública e termodinâmica é que a termodinâmica é mais fácil.' },
    ctaButton: 'Fale Conosco',
    heroAlt: 'Membros do coletivo reunidos ao ar livre'
  }
};

function main(locale) {
  const t = COPY[locale];

  return `<section class="hero">
  ${picture({ name: 'team-outdoors', widths: [640, 960, 1280, 1920], sizes: '100vw', alt: t.heroAlt, imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="eyebrow eyebrow--on-dark">${site.tagline[locale]}</span>
    <h1 class="hero-title">${t.hero.title}</h1>
    <p class="hero-text" style="max-width:48ch">${t.hero.text}</p>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="auto-grid" style="--min:300px">
      <div class="pillar-card">
        <span class="eyebrow" style="margin-bottom:0">${t.pillars.vision.label}</span>
        <p class="pillar-quote">${t.pillars.vision.text}</p>
      </div>
      <div class="pillar-card">
        <span class="eyebrow eyebrow--on-blossom" style="margin-bottom:0">${t.pillars.mission.label}</span>
        <p class="pillar-quote">${t.pillars.mission.text}</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">${t.values.heading}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.values.subtext}</p>
    <div class="auto-grid" style="--min:260px">
      <div class="value-card">
        <div class="value-bar value-bar--coral"></div>
        <h3 class="card-title">${t.values.items[0].title}</h3>
        <p class="card-body">${t.values.items[0].body}</p>
      </div>
      <div class="value-card">
        <div class="value-bar value-bar--teal"></div>
        <h3 class="card-title">${t.values.items[1].title}</h3>
        <p class="card-body">${t.values.items[1].body}</p>
      </div>
      <div class="value-card">
        <div class="value-bar value-bar--gold"></div>
        <h3 class="card-title">${t.values.items[2].title}</h3>
        <p class="card-body">${t.values.items[2].body}</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <span class="eyebrow">${t.collective.eyebrow}</span>
    <h2 class="section-heading" style="margin-bottom:10px">${t.collective.heading}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.collective.subtext}</p>
    <div class="auto-grid" style="--min:220px">
      ${PEOPLE_META.map((p, i) => personCard({ name: p.name, role: t.collective.roles[i], bio: t.collective.bios[i], stagger: p.stagger })).join('\n      ')}
      ${EXTRA_PEOPLE.map((entry) => {
        const person = people[entry.key];
        return personCard({ name: person.name, role: person.aboutRole[locale], bio: person.bio[locale], stagger: entry.stagger });
      }).join('\n      ')}
      ${personCard({ name: t.collective.openSeatName, role: t.collective.openSeatRole, bio: t.collective.openSeatBio, stagger: OPEN_SEAT.stagger })}
    </div>
  </div>
</section>

<section class="cta-band band-blossom">
  <div class="cta-band-inner">
    <span class="eyebrow eyebrow--on-blossom">${t.quote.eyebrow}</span>
    <p class="quote-text" style="font-size:clamp(24px,2.6vw,34px)">“${t.quote.text}”</p>
    <span class="quote-author">Ace Robinson, M.P.H., M.H.L</span>
    <a href="${href(locale, 'contact.html')}" class="btn btn-primary">${t.ctaButton}</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'about-us',
  outputFile: 'about-us.html',
  activeNavId: 'aboutUs',
  meta: {
    title: {
      en: 'About Us',
      fr: 'À Propos',
      es: 'Sobre Nosotros',
      pt: 'Sobre Nós'
    },
    description: {
      en: 'A global collective, not a consultancy. Public health leaders based in Seattle and Cape Town supporting historically excluded communities worldwide.',
      fr: 'Un collectif mondial, pas un cabinet de conseil. Des responsables de santé publique basés à Seattle et Cape Town, soutenant des communautés historiquement exclues à travers le monde.',
      es: 'Un colectivo global, no una consultora. Líderes de salud pública con base en Seattle y Ciudad del Cabo que apoyan a comunidades históricamente excluidas en todo el mundo.',
      pt: 'Um coletivo global, não uma consultoria. Líderes de saúde pública baseados em Seattle e Cidade do Cabo apoiando comunidades historicamente excluídas em todo o mundo.'
    },
    ogImage: 'about-us'
  },
  main
};
