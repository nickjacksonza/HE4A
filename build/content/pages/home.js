const { picture, href, personCard } = require('../../helpers');
const site = require('../site');

// META: locale-independent structural data (proper nouns + layout constants).
const QUOTE_AUTHOR = 'Ace Robinson, M.P.H., M.H.L';

const PEOPLE_META = [
  { name: 'Ace Robinson', place: 'Seattle, USA', stagger: 0 },
  { name: 'Lauren Miller', place: 'Atlanta, USA', stagger: 24 },
  { name: 'Diego Calixto', place: 'Brasília, Brazil', stagger: 8 },
  { name: 'Lucy Wanjiku Njenga', place: 'Nairobi, Kenya', stagger: 32 },
  { name: 'Eduardo Culbeaux', place: 'Southeast Asia', stagger: 12 }
];

// COPY: locale-keyed translatable text, zipped to the META arrays by index.
const COPY = {
  en: {
    hero: {
      eyebrow: 'Onward. Together.',
      title: 'Equitable healthcare, built with communities',
      text: 'We’re a global collective of public health leaders. You already know what your communities need. We help you build the leadership, systems and teams to deliver it.',
      ctaPrimary: 'Start a Conversation',
      ctaSecondary: 'See Our Services'
    },
    missionStrip: 'We transform healthcare systems into agents of change for historically excluded communities — BIPOC, LGBTQ+, differently abled, immigrant and refugee populations worldwide.',
    stats: {
      eyebrow: 'Our Reach',
      items: [
        { number: '12', label: 'countries where collective members lead health equity work' },
        { number: '40+', label: 'organizations supported with governance, policy and programs' },
        { number: '20 yrs', label: 'of frontline experience in HIV, LGBTQ+ and community health' }
      ]
    },
    services: {
      eyebrow: 'What We Do',
      heading: 'Three ways we can support your work',
      subtext: 'Every engagement is built around what your team needs most, and built so you can keep it running once we’re gone.',
      cta: 'Work with us',
      cards: [
        { heading: 'Non-Profit Leadership', desc: 'Board governance and executive coaching for the people holding equity work together.', tags: ['Board Governance', 'Executive Coaching'] },
        { heading: 'Organizational Development', desc: 'Program oversight, communications, policy, grant writing and financial leadership that keep your mission funded.', link: 'Explore →' },
        { heading: 'Equity Trainings', desc: 'Racial equity, LGBTQ+ equity and social determinants of health, taught so your team can use it on Monday.', link: 'Explore →' }
      ]
    },
    quoteBand: {
      eyebrow: 'What We Say To People',
      chooseLabel: 'Choose a quote',
      quoteLabelPrefix: 'Quote',
      quotes: [
        'We must move beyond words into actionable steps. Show me your receipts.',
        'The major difference between public health and thermodynamics is that thermodynamics is easier.',
        'Achieving health equity is hard. Sometimes it means we have to go over, under, around or through challenges.'
      ]
    },
    collective: {
      eyebrow: 'Who We Are',
      heading: 'The Collective',
      subtext: 'Public health leaders across twelve countries, each working where they live.',
      cta: 'Meet everyone',
      bios: [
        'Founder and Principal. Administrative and policy advocate in communicable disease; Acting Director of the Duke University Sexual & Gender Minority Wellness program.',
        'Advocate for DEI and health equity, guided by friendship, leadership and service to humanity.',
        'Activist living with HIV and researcher at Fiocruz Brasília, focused on health and social justice.',
        'HIV response leader for over a decade, building feminist movements from grassroots to global level.',
        'Educator for over a decade, empowering youth through journalism and media programs.'
      ]
    },
    cta: {
      heading: "Let's talk about what comes next",
      text: 'Tell us what you’re working through. We’ll listen, and we’ll tell you straight if we’re not the right fit.',
      button: 'Get in Touch'
    },
    alts: {
      outdoors: 'Members of the collective standing together outdoors',
      whiteboard: 'Two colleagues mapping ideas on a whiteboard',
      laptop: 'Two colleagues working at a laptop',
      meeting: 'A team in discussion around a table'
    }
  },
  fr: {
    hero: {
      eyebrow: 'En Avant. Ensemble.',
      title: 'Équité en santé, construite avec les communautés',
      text: "Nous sommes un collectif mondial de responsables de santé publique. Vous savez déjà ce dont vos communautés ont besoin. Nous vous aidons à bâtir la direction, les systèmes et les équipes pour y répondre.",
      ctaPrimary: 'Démarrer une Conversation',
      ctaSecondary: 'Découvrir nos Services'
    },
    missionStrip: "Nous transformons les systèmes de santé en moteurs de changement pour les communautés historiquement exclues — personnes BIPOC, LGBTQ+, en situation de handicap, immigrantes et réfugiées à travers le monde.",
    stats: {
      eyebrow: 'Notre Portée',
      items: [
        { number: '12', label: 'pays où des membres du collectif dirigent des actions pour l’équité en santé' },
        { number: '40+', label: 'organisations accompagnées en gouvernance, politiques et programmes' },
        { number: '20 ans', label: "d'expérience de terrain en VIH, équité LGBTQ+ et santé communautaire" }
      ]
    },
    services: {
      eyebrow: 'Ce que Nous Faisons',
      heading: 'Trois façons de soutenir votre travail',
      subtext: "Chaque intervention est bâtie selon les besoins prioritaires de votre équipe, et bâtie pour que vous puissiez la poursuivre une fois que nous sommes partis.",
      cta: 'Travailler avec nous',
      cards: [
        { heading: 'Direction Associative', desc: 'Gouvernance du conseil et coaching de direction pour celles et ceux qui portent le travail sur l’équité.', tags: ['Gouvernance du Conseil', 'Coaching de Direction'] },
        { heading: 'Développement Organisationnel', desc: 'Supervision de programmes, communication, politiques publiques, rédaction de subventions et direction financière qui maintiennent le financement de votre mission.', link: 'Découvrir →' },
        { heading: 'Formations Équité', desc: 'Équité raciale, équité LGBTQ+ et déterminants sociaux de la santé, enseignés pour que votre équipe s’en serve dès lundi.', link: 'Découvrir →' }
      ]
    },
    quoteBand: {
      eyebrow: 'Ce que Nous Disons aux Gens',
      chooseLabel: 'Choisir une citation',
      quoteLabelPrefix: 'Citation',
      quotes: [
        'Nous devons aller au-delà des mots pour poser des actes concrets. Montrez-moi vos preuves.',
        "La principale différence entre la santé publique et la thermodynamique, c'est que la thermodynamique est plus simple.",
        "Atteindre l'équité en santé est difficile. Parfois, il faut passer par-dessus, par-dessous, autour ou à travers les obstacles."
      ]
    },
    collective: {
      eyebrow: 'Qui Nous Sommes',
      heading: 'Le Collectif',
      subtext: 'Des responsables de santé publique dans douze pays, chacun travaillant là où il vit.',
      cta: 'Rencontrer tout le monde',
      bios: [
        'Fondateur et Principal. Défenseur des politiques administratives en maladies transmissibles ; Directeur par intérim du programme de bien-être des minorités sexuelles et de genre de l’Université Duke.',
        "Défenseure de la diversité, de l'équité et de l'inclusion ainsi que de l'équité en santé, guidée par l'amitié, le leadership et le service à l'humanité.",
        "Militant séropositif et chercheur à la Fiocruz Brasília, engagé pour la santé et la justice sociale.",
        "Leader de la réponse au VIH depuis plus de dix ans, bâtissant des mouvements féministes de la base jusqu'à l'échelle mondiale.",
        "Éducateur depuis plus de dix ans, donnant aux jeunes les moyens d'agir par le journalisme et les programmes médiatiques."
      ]
    },
    cta: {
      heading: 'Parlons de la suite',
      text: 'Dites-nous ce que vous traversez. Nous écouterons, et nous vous dirons franchement si nous ne sommes pas les bonnes personnes.',
      button: 'Contactez-Nous'
    },
    alts: {
      outdoors: 'Des membres du collectif réunis à l’extérieur',
      whiteboard: 'Deux collègues réfléchissant devant un tableau blanc',
      laptop: 'Deux collègues travaillant sur un ordinateur portable',
      meeting: 'Équipe en discussion autour d’une table'
    }
  },
  es: {
    hero: {
      eyebrow: 'Adelante. Juntos.',
      title: 'Salud equitativa, construida con las comunidades',
      text: 'Somos un colectivo global de líderes de salud pública. Ya sabes lo que tus comunidades necesitan. Te ayudamos a construir el liderazgo, los sistemas y los equipos para lograrlo.',
      ctaPrimary: 'Iniciar una Conversación',
      ctaSecondary: 'Ver Nuestros Servicios'
    },
    missionStrip: 'Transformamos los sistemas de salud en agentes de cambio para las comunidades históricamente excluidas — poblaciones BIPOC, LGBTQ+, con discapacidad, inmigrantes y refugiadas de todo el mundo.',
    stats: {
      eyebrow: 'Nuestro Alcance',
      items: [
        { number: '12', label: 'países donde miembros del colectivo lideran trabajo de equidad en salud' },
        { number: '40+', label: 'organizaciones acompañadas en gobernanza, políticas y programas' },
        { number: '20 años', label: 'de experiencia de primera línea en VIH, equidad LGBTQ+ y salud comunitaria' }
      ]
    },
    services: {
      eyebrow: 'Lo Que Hacemos',
      heading: 'Tres formas de apoyar tu trabajo',
      subtext: 'Cada intervención se construye según lo que tu equipo más necesita, y se construye para que siga funcionando cuando ya no estemos.',
      cta: 'Trabaja con nosotros',
      cards: [
        { heading: 'Liderazgo sin Fines de Lucro', desc: 'Gobernanza de la junta y coaching ejecutivo para quienes sostienen el trabajo de equidad.', tags: ['Gobernanza de la Junta', 'Coaching Ejecutivo'] },
        { heading: 'Desarrollo Organizacional', desc: 'Supervisión de programas, comunicaciones, política pública, redacción de propuestas y liderazgo financiero que mantienen financiada tu misión.', link: 'Explorar →' },
        { heading: 'Capacitaciones en Equidad', desc: 'Equidad racial, equidad LGBTQ+ y determinantes sociales de la salud, enseñados para que tu equipo los use el lunes.', link: 'Explorar →' }
      ]
    },
    quoteBand: {
      eyebrow: 'Lo Que le Decimos a la Gente',
      chooseLabel: 'Elegir una cita',
      quoteLabelPrefix: 'Cita',
      quotes: [
        'Debemos ir más allá de las palabras hacia pasos concretos. Muéstrame tus comprobantes.',
        'La principal diferencia entre la salud pública y la termodinámica es que la termodinámica es más fácil.',
        'Lograr la equidad en salud es difícil. A veces significa que debemos pasar por encima, por debajo, alrededor o a través de los obstáculos.'
      ]
    },
    collective: {
      eyebrow: 'Quiénes Somos',
      heading: 'El Colectivo',
      subtext: 'Líderes de salud pública en doce países, cada uno trabajando donde vive.',
      cta: 'Conocer a todos',
      bios: [
        'Fundador y Principal. Defensor de políticas administrativas en enfermedades transmisibles; Director interino del programa de bienestar de minorías sexuales y de género de la Universidad Duke.',
        'Defensora de la diversidad, equidad e inclusión y de la equidad en salud, guiada por la amistad, el liderazgo y el servicio a la humanidad.',
        'Activista que vive con VIH e investigador en Fiocruz Brasília, enfocado en la salud y la justicia social.',
        'Líder de la respuesta al VIH durante más de una década, construyendo movimientos feministas desde las bases hasta el nivel global.',
        'Educador durante más de una década, empoderando a los jóvenes a través del periodismo y programas de medios.'
      ]
    },
    cta: {
      heading: 'Hablemos de lo que sigue',
      text: 'Cuéntanos lo que estás enfrentando. Te escucharemos y te diremos con franqueza si no somos las personas indicadas.',
      button: 'Contáctanos'
    },
    alts: {
      outdoors: 'Miembros del colectivo reunidos al aire libre',
      whiteboard: 'Dos colegas planteando ideas en una pizarra',
      laptop: 'Dos colegas trabajando en una laptop',
      meeting: 'Un equipo en discusión alrededor de una mesa'
    }
  },
  pt: {
    hero: {
      eyebrow: 'Em Frente. Juntos.',
      title: 'Saúde equitativa, construída com as comunidades',
      text: 'Somos um coletivo global de líderes de saúde pública. Você já sabe do que suas comunidades precisam. Ajudamos você a construir a liderança, os sistemas e as equipes para entregar isso.',
      ctaPrimary: 'Iniciar uma Conversa',
      ctaSecondary: 'Ver Nossos Serviços'
    },
    missionStrip: 'Transformamos sistemas de saúde em agentes de mudança para comunidades historicamente excluídas — populações BIPOC, LGBTQ+, com deficiência, imigrantes e refugiadas em todo o mundo.',
    stats: {
      eyebrow: 'Nosso Alcance',
      items: [
        { number: '12', label: 'países onde membros do coletivo lideram trabalho de equidade em saúde' },
        { number: '40+', label: 'organizações apoiadas em governança, políticas e programas' },
        { number: '20 anos', label: 'de experiência de linha de frente em HIV, equidade LGBTQ+ e saúde comunitária' }
      ]
    },
    services: {
      eyebrow: 'O Que Fazemos',
      heading: 'Três formas de apoiar seu trabalho',
      subtext: 'Cada atuação é construída em torno do que sua equipe mais precisa, e construída para continuar funcionando depois que sairmos.',
      cta: 'Trabalhe conosco',
      cards: [
        { heading: 'Liderança Sem Fins Lucrativos', desc: 'Governança do conselho e coaching executivo para quem sustenta o trabalho de equidade.', tags: ['Governança do Conselho', 'Coaching Executivo'] },
        { heading: 'Desenvolvimento Organizacional', desc: 'Supervisão de programas, comunicação, política pública, redação de propostas e liderança financeira que mantêm sua missão financiada.', link: 'Explorar →' },
        { heading: 'Capacitações em Equidade', desc: 'Equidade racial, equidade LGBTQ+ e determinantes sociais da saúde, ensinados para sua equipe usar na segunda-feira.', link: 'Explorar →' }
      ]
    },
    quoteBand: {
      eyebrow: 'O Que Dizemos às Pessoas',
      chooseLabel: 'Escolher uma citação',
      quoteLabelPrefix: 'Citação',
      quotes: [
        'Precisamos ir além das palavras para chegar a passos concretos. Mostre-me seus comprovantes.',
        'A principal diferença entre saúde pública e termodinâmica é que a termodinâmica é mais fácil.',
        'Alcançar a equidade em saúde é difícil. Por vezes, significa que precisamos passar por cima, por baixo, ao redor ou através dos obstáculos.'
      ]
    },
    collective: {
      eyebrow: 'Quem Somos',
      heading: 'O Coletivo',
      subtext: 'Líderes de saúde pública em doze países, cada um atuando onde vive.',
      cta: 'Conhecer todos',
      bios: [
        'Fundador e Diretor Principal. Defensor de políticas administrativas em doenças transmissíveis; Diretor interino do programa de bem-estar de minorias sexuais e de gênero da Universidade Duke.',
        'Defensora da diversidade, equidade e inclusão e da equidade em saúde, guiada pela amizade, liderança e serviço à humanidade.',
        'Ativista vivendo com HIV e pesquisador na Fiocruz Brasília, focado em saúde e justiça social.',
        'Líder da resposta ao HIV por mais de uma década, construindo movimentos feministas das bases até o nível global.',
        'Educador por mais de uma década, capacitando jovens por meio do jornalismo e de programas de mídia.'
      ]
    },
    cta: {
      heading: 'Vamos falar sobre os próximos passos',
      text: 'Conte o que você está enfrentando. Vamos ouvir e dizer com franqueza se não somos as pessoas certas.',
      button: 'Fale Conosco'
    },
    alts: {
      outdoors: 'Membros do coletivo reunidos ao ar livre',
      whiteboard: 'Dois colegas mapeando ideias em um quadro branco',
      laptop: 'Dois colegas trabalhando em um laptop',
      meeting: 'Uma equipe em discussão em torno de uma mesa'
    }
  }
};

function main(locale) {
  const t = COPY[locale];
  const alts = t.alts;

  return `<section class="hero hero--tall">
  ${picture({ name: 'team-outdoors', widths: [640, 960, 1280, 1920], sizes: '100vw', alt: alts.outdoors, imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="eyebrow eyebrow--on-dark">${t.hero.eyebrow}</span>
    <h1 class="hero-title hero-title--wide">${t.hero.title}</h1>
    <p class="hero-text">${t.hero.text}</p>
    <div class="hero-actions">
      <a href="${href(locale, 'contact.html')}" class="btn btn-on-sky">${t.hero.ctaPrimary}</a>
      <a href="#services" class="btn btn-outline">${t.hero.ctaSecondary}</a>
    </div>
  </div>
</section>

<section class="section-tight band-paper">
  <div class="text-strip">
    <p class="text-strip-quote">${t.missionStrip}</p>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <span class="eyebrow" style="text-align:center;color:var(--color-ink-800)">${t.stats.eyebrow}</span>
    <div class="auto-grid" style="--min:200px;text-align:center">
      ${t.stats.items.map((s) => `<div class="stat">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<section id="services" class="section band-paper">
  <div class="container">
    <span class="eyebrow">${t.services.eyebrow}</span>
    <div class="section-header">
      <div>
        <h2 class="section-heading">${t.services.heading}</h2>
        <p class="section-subtext">${t.services.subtext}</p>
      </div>
      <a href="${href(locale, 'contact.html')}" class="btn btn-outline-dark">${t.services.cta}</a>
    </div>
    <div class="services-grid">
      <a href="${href(locale, 'non-profit-leadership.html')}" class="service-card service-card--featured">
        ${picture({ name: 'whiteboard-session', widths: [400, 640, 960, 1200], sizes: '(max-width: 720px) 100vw, 50vw', alt: alts.whiteboard, imgClass: 'service-media' })}
        <div class="service-body">
          <div class="service-heading">${t.services.cards[0].heading}</div>
          <p class="service-desc">${t.services.cards[0].desc}</p>
          <div class="service-tags">
            <span class="tag-soft">${t.services.cards[0].tags[0]}</span>
            <span class="tag-soft">${t.services.cards[0].tags[1]}</span>
          </div>
        </div>
      </a>
      <a href="${href(locale, 'organizational-development.html')}" class="service-card service-card--compact">
        ${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '180px', alt: alts.laptop, imgClass: 'service-media' })}
        <div class="service-body">
          <div class="service-heading">${t.services.cards[1].heading}</div>
          <p class="service-desc">${t.services.cards[1].desc}</p>
          <div class="service-link">${t.services.cards[1].link}</div>
        </div>
      </a>
      <a href="${href(locale, 'trainings.html')}" class="service-card service-card--compact">
        ${picture({ name: 'team-meeting', widths: [400, 640, 960, 1280, 1920], sizes: '180px', alt: alts.meeting, imgClass: 'service-media' })}
        <div class="service-body">
          <div class="service-heading">${t.services.cards[2].heading}</div>
          <p class="service-desc">${t.services.cards[2].desc}</p>
          <div class="service-link">${t.services.cards[2].link}</div>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="quote-band band-blossom">
  <div class="quote-band-inner" data-carousel>
    <span class="eyebrow eyebrow--on-blossom">${t.quoteBand.eyebrow}</span>
    <div aria-live="polite">
      <blockquote class="quote-text" data-quote-text>“${t.quoteBand.quotes[0]}”</blockquote>
      <p class="quote-author" data-quote-author>${QUOTE_AUTHOR}</p>
    </div>
    <div class="quote-dots" role="group" aria-label="${t.quoteBand.chooseLabel}">
      ${t.quoteBand.quotes.map((_, i) => `<button type="button" class="quote-dot" data-quote-index="${i}" aria-current="${i === 0}" aria-label="${t.quoteBand.quoteLabelPrefix} ${i + 1}"></button>`).join('\n      ')}
    </div>
    <script type="application/json" id="home-quotes-data">${JSON.stringify(t.quoteBand.quotes.map((q) => ({ quote: q, author: QUOTE_AUTHOR })))}</script>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <div class="section-header">
      <div>
        <span class="eyebrow">${t.collective.eyebrow}</span>
        <h2 class="section-heading" style="margin-bottom:10px">${t.collective.heading}</h2>
        <p class="section-subtext" style="max-width:50ch">${t.collective.subtext}</p>
      </div>
      <a href="${href(locale, 'about-us.html')}" class="btn btn-outline-dark">${t.collective.cta}</a>
    </div>
    <div class="auto-grid" style="--min:190px">
      ${PEOPLE_META.map((p, i) => personCard({ name: p.name, role: p.place, bio: t.collective.bios[i], stagger: p.stagger })).join('\n      ')}
    </div>
  </div>
</section>

<section class="cta-band band-sky">
  <div class="cta-band-inner">
    <h2 class="cta-heading">${t.cta.heading}</h2>
    <p class="cta-text">${t.cta.text}</p>
    <a href="${href(locale, 'contact.html')}" class="btn btn-primary">${t.cta.button}</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'home',
  outputFile: 'index.html',
  activeNavId: null,
  meta: {
    title: {
      en: 'Health Equity 4 All',
      fr: 'Health Equity 4 All',
      es: 'Health Equity 4 All',
      pt: 'Health Equity 4 All'
    },
    description: {
      en: 'A global collective of public health leaders helping organizations build the leadership, systems and teams their communities need.',
      fr: 'Un collectif mondial de responsables de santé publique qui aide les organisations à bâtir la direction, les systèmes et les équipes dont leurs communautés ont besoin.',
      es: 'Un colectivo global de líderes de salud pública que ayuda a las organizaciones a construir el liderazgo, los sistemas y los equipos que sus comunidades necesitan.',
      pt: 'Um coletivo global de líderes de saúde pública que ajuda organizações a construir a liderança, os sistemas e as equipes que suas comunidades precisam.'
    },
    ogImage: 'home'
  },
  main
};
