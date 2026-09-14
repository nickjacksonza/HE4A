const { picture, accordion, teamCard, href } = require('../../helpers');
const shared = require('../shared');

const TEAM_META = [
  { name: 'Ace Robinson', roleKey: 'role1' },
  { name: 'Lauren Miller', roleKey: 'role2' }
];

const COPY = {
  en: {
    hero: {
      title: 'Non-Profit Leadership',
      text: 'You already know what equity asks of your organization. We help with the governance and coaching that make it possible to deliver — sustainably, and without burning out the people who care most.',
      tags: ['Board Governance', 'Executive Coaching']
    },
    cards: {
      heading: 'What this work looks like',
      subtext: 'Three engagements that can run separately or together across a fiscal year, depending on where you are.',
      items: [
        { title: 'Board Governance Review', body: 'We review bylaws, sit in on meetings and interview trustees. You receive a clear picture of where authority sits and a practical plan for the next two board cycles.' },
        { title: 'Executive Coaching', body: "Confidential monthly sessions for executive directors and senior staff — especially those who are the first to hold their role in the organization's history." },
        { title: 'Leadership Transition', body: 'Succession planning and interim support through a founder exit or a first outside hire, so the mission carries through the change.' }
      ]
    },
    quote: { eyebrow: 'In Their Words', text: 'We must move beyond words into actionable steps. Show me your receipts.' },
    approach: {
      heading: 'Our approach',
      p1: 'Governance work starts with a direct question: who is this board accountable to, and who is missing? We help you answer that honestly — and then build the structures that keep equity at the centre of decision-making.',
      p2: 'Most engagements run three to nine months. Everything we produce belongs to your team and is documented so it outlasts our involvement.'
    },
    team: {
      subtext: 'You work directly with the person, not an account team.',
      role1: 'Founder & Principal · Seattle',
      bio1: 'M.P.H., M.H.L. Leads board governance reviews and executive coaching. Acting Director of the Duke University Sexual & Gender Minority Wellness program.',
      role2: 'Leadership Faculty · Atlanta',
      bio2: 'Advocate for DEI and health equity. Works with executives and boards on culture, accountability and succession planning.'
    },
    faqs: [
      { q: 'How long is a typical governance engagement?', a: 'Three to nine months. A standalone review usually runs about eight weeks; adding implementation support through two board cycles extends to the longer end. We scope it together after our first conversation.' },
      { q: 'Do you work with boards outside the United States?', a: 'Yes. Collective members lead work across twelve countries, and engagements run in English, French, Spanish and Portuguese.' },
      { q: 'Can coaching be arranged for someone other than the executive director?', a: 'Absolutely — and often it should be. We coach deputy directors, program leads and first-time managers. All sessions are confidential, including from the board.' },
      { q: 'What does an engagement cost?', a: 'We scope after a first conversation and quote a fixed fee with no surprises. We hold a reduced rate for community-based organizations with budgets under one million dollars.' }
    ],
    cta: {
      heading: 'Ready to strengthen your board or support your leadership team?',
      text: 'Share what you are working through and we will let you know how we can help.'
    },
    heroAlt: 'Two colleagues mapping ideas on a whiteboard'
  },
  fr: {
    hero: {
      title: 'Direction Associative',
      text: "Vous savez déjà ce que l'équité demande à votre organisation. Nous vous aidons avec la gouvernance et le coaching qui rendent cela possible — durablement, et sans épuiser les personnes qui s'en soucient le plus.",
      tags: ['Gouvernance du Conseil', 'Coaching de Direction']
    },
    cards: {
      heading: 'À quoi ressemble ce travail',
      subtext: 'Trois interventions qui peuvent se dérouler séparément ou ensemble au cours d’un exercice, selon où vous en êtes.',
      items: [
        { title: 'Revue de la Gouvernance du Conseil', body: 'Nous examinons les statuts, assistons aux réunions et interrogeons les administrateurs. Vous recevez une vision claire de la répartition de l’autorité et un plan concret pour les deux prochains cycles du conseil.' },
        { title: 'Coaching de Direction', body: "Des séances mensuelles confidentielles pour les directeurs généraux et cadres supérieurs — en particulier ceux qui sont les premiers à occuper leur poste dans l'histoire de l'organisation." },
        { title: 'Transition de Direction', body: 'Planification de la succession et accompagnement intérimaire lors du départ d’un fondateur ou d’une première embauche externe, pour que la mission traverse le changement.' }
      ]
    },
    quote: { eyebrow: 'Dans Leurs Mots', text: 'Nous devons aller au-delà des mots pour poser des actes concrets. Montrez-moi vos preuves.' },
    approach: {
      heading: 'Notre approche',
      p1: "Le travail de gouvernance commence par une question directe : envers qui ce conseil est-il responsable, et qui manque à la table ? Nous vous aidons à répondre honnêtement — puis à construire les structures qui placent l'équité au cœur des décisions.",
      p2: 'La plupart des interventions durent de trois à neuf mois. Tout ce que nous produisons appartient à votre équipe et est documenté pour perdurer au-delà de notre implication.'
    },
    team: {
      subtext: 'Vous travaillez directement avec la personne, pas avec une équipe de comptes.',
      role1: 'Fondateur et Principal · Seattle',
      bio1: 'M.P.H., M.H.L. Dirige les revues de gouvernance du conseil et le coaching de direction. Directeur par intérim du programme de bien-être des minorités sexuelles et de genre de l’Université Duke.',
      role2: 'Faculté de Leadership · Atlanta',
      bio2: "Défenseure de la diversité, de l'équité et de l'inclusion ainsi que de l'équité en santé. Travaille avec les cadres et les conseils sur la culture, la redevabilité et la planification de succession."
    },
    faqs: [
      { q: "Quelle est la durée typique d'une intervention en gouvernance ?", a: 'De trois à neuf mois. Une revue autonome dure généralement environ huit semaines ; ajouter un accompagnement de mise en œuvre sur deux cycles du conseil prolonge vers la durée maximale. Nous définissons le périmètre ensemble après notre premier échange.' },
        { q: 'Travaillez-vous avec des conseils hors des États-Unis ?', a: 'Oui. Les membres du collectif dirigent des actions dans douze pays, et les interventions se déroulent en anglais, français, espagnol et portugais.' },
        { q: "Le coaching peut-il être organisé pour quelqu'un d'autre que le directeur général ?", a: "Absolument — et c'est souvent souhaitable. Nous coachons les directeurs adjoints, responsables de programmes et gestionnaires novices. Toutes les séances sont confidentielles, y compris envers le conseil." },
        { q: 'Quel est le coût d’une intervention ?', a: "Nous définissons le périmètre après un premier échange et proposons un forfait fixe, sans surprise. Nous offrons un tarif réduit aux organisations communautaires dont le budget est inférieur à un million de dollars." }
    ],
    cta: {
      heading: 'Prêt à renforcer votre conseil ou à soutenir votre équipe de direction ?',
      text: 'Partagez ce que vous traversez et nous vous dirons comment nous pouvons vous aider.'
    },
    heroAlt: 'Deux collègues réfléchissant devant un tableau blanc'
  },
  es: {
    hero: {
      title: 'Liderazgo sin Fines de Lucro',
      text: 'Ya sabes lo que la equidad le exige a tu organización. Te ayudamos con la gobernanza y el coaching que hacen posible cumplirlo — de forma sostenible, y sin agotar a las personas que más se preocupan.',
      tags: ['Gobernanza de la Junta', 'Coaching Ejecutivo']
    },
    cards: {
      heading: 'Cómo se ve este trabajo',
      subtext: 'Tres intervenciones que pueden realizarse por separado o juntas durante un año fiscal, según en qué etapa te encuentres.',
      items: [
        { title: 'Revisión de Gobernanza de la Junta', body: 'Revisamos los estatutos, participamos en reuniones y entrevistamos a los miembros de la junta. Recibes una visión clara de dónde reside la autoridad y un plan práctico para los próximos dos ciclos de la junta.' },
        { title: 'Coaching Ejecutivo', body: 'Sesiones mensuales confidenciales para directores ejecutivos y personal senior — especialmente para quienes son los primeros en ocupar su cargo en la historia de la organización.' },
        { title: 'Transición de Liderazgo', body: 'Planificación de sucesión y apoyo interino durante la salida de un fundador o la primera contratación externa, para que la misión continúe durante el cambio.' }
      ]
    },
    quote: { eyebrow: 'En sus Palabras', text: 'Debemos ir más allá de las palabras hacia pasos concretos. Muéstrame tus comprobantes.' },
    approach: {
      heading: 'Nuestro enfoque',
      p1: 'El trabajo de gobernanza comienza con una pregunta directa: ¿ante quién responde esta junta, y quién falta en la mesa? Te ayudamos a responder con honestidad — y luego a construir las estructuras que mantienen la equidad en el centro de la toma de decisiones.',
      p2: 'La mayoría de las intervenciones duran de tres a nueve meses. Todo lo que producimos pertenece a tu equipo y queda documentado para que perdure más allá de nuestra participación.'
    },
    team: {
      subtext: 'Trabajas directamente con la persona, no con un equipo de cuentas.',
      role1: 'Fundador y Principal · Seattle',
      bio1: 'M.P.H., M.H.L. Dirige revisiones de gobernanza de la junta y coaching ejecutivo. Director interino del programa de bienestar de minorías sexuales y de género de la Universidad Duke.',
      role2: 'Facultad de Liderazgo · Atlanta',
      bio2: 'Defensora de la diversidad, equidad e inclusión y de la equidad en salud. Trabaja con ejecutivos y juntas en cultura, rendición de cuentas y planificación de sucesión.'
    },
    faqs: [
      { q: '¿Cuánto dura una intervención típica de gobernanza?', a: 'De tres a nueve meses. Una revisión independiente suele durar unas ocho semanas; agregar apoyo de implementación durante dos ciclos de la junta extiende el plazo hacia el máximo. Definimos el alcance juntos después de nuestra primera conversación.' },
      { q: '¿Trabajan con juntas fuera de Estados Unidos?', a: 'Sí. Los miembros del colectivo lideran trabajo en doce países, y las intervenciones se realizan en inglés, francés, español y portugués.' },
      { q: '¿Se puede organizar coaching para alguien que no sea el director ejecutivo?', a: 'Por supuesto — y a menudo debería ser así. Damos coaching a subdirectores, líderes de programas y gerentes primerizos. Todas las sesiones son confidenciales, incluso frente a la junta.' },
      { q: '¿Cuánto cuesta una intervención?', a: 'Definimos el alcance después de una primera conversación y cotizamos una tarifa fija sin sorpresas. Ofrecemos una tarifa reducida para organizaciones comunitarias con presupuestos menores a un millón de dólares.' }
    ],
    cta: {
      heading: '¿Listo para fortalecer tu junta o apoyar a tu equipo de liderazgo?',
      text: 'Comparte en qué estás trabajando y te diremos cómo podemos ayudar.'
    },
    heroAlt: 'Dos colegas planteando ideas en una pizarra'
  },
  pt: {
    hero: {
      title: 'Liderança Sem Fins Lucrativos',
      text: 'Você já sabe o que a equidade exige da sua organização. Ajudamos com a governança e o coaching que tornam isso possível — de forma sustentável, e sem esgotar as pessoas que mais se importam.',
      tags: ['Governança do Conselho', 'Coaching Executivo']
    },
    cards: {
      heading: 'Como esse trabalho se desenvolve',
      subtext: 'Três atuações que podem ocorrer separadamente ou juntas ao longo de um ano fiscal, dependendo do momento em que você está.',
      items: [
        { title: 'Revisão de Governança do Conselho', body: 'Revisamos os estatutos, participamos de reuniões e entrevistamos membros do conselho. Você recebe uma visão clara de onde está a autoridade e um plano prático para os próximos dois ciclos do conselho.' },
        { title: 'Coaching Executivo', body: 'Sessões mensais confidenciais para diretores executivos e equipe sênior — especialmente aqueles que são os primeiros a ocupar seu cargo na história da organização.' },
        { title: 'Transição de Liderança', body: 'Planejamento de sucessão e apoio interino durante a saída de um fundador ou a primeira contratação externa, para que a missão continue durante a mudança.' }
      ]
    },
    quote: { eyebrow: 'Em Suas Palavras', text: 'Precisamos ir além das palavras para chegar a passos concretos. Mostre-me seus comprovantes.' },
    approach: {
      heading: 'Nossa abordagem',
      p1: 'O trabalho de governança começa com uma pergunta direta: a quem esse conselho presta contas, e quem está faltando? Ajudamos você a responder com honestidade — e depois a construir as estruturas que mantêm a equidade no centro das decisões.',
      p2: 'A maioria das atuações dura de três a nove meses. Tudo o que produzimos pertence à sua equipe e é documentado para durar além do nosso envolvimento.'
    },
    team: {
      subtext: 'Você trabalha diretamente com a pessoa, não com uma equipe de contas.',
      role1: 'Fundador e Diretor Principal · Seattle',
      bio1: 'M.P.H., M.H.L. Lidera revisões de governança do conselho e coaching executivo. Diretor interino do programa de bem-estar de minorias sexuais e de gênero da Universidade Duke.',
      role2: 'Corpo Docente de Liderança · Atlanta',
      bio2: 'Defensora da diversidade, equidade e inclusão e da equidade em saúde. Trabalha com executivos e conselhos em cultura, prestação de contas e planejamento de sucessão.'
    },
    faqs: [
      { q: 'Quanto tempo dura uma atuação típica de governança?', a: 'De três a nove meses. Uma revisão isolada geralmente dura cerca de oito semanas; adicionar apoio de implementação ao longo de dois ciclos do conselho estende para o prazo mais longo. Definimos o escopo juntos depois da nossa primeira conversa.' },
      { q: 'Vocês trabalham com conselhos fora dos Estados Unidos?', a: 'Sim. Membros do coletivo lideram trabalho em doze países, e as atuações ocorrem em inglês, francês, espanhol e português.' },
      { q: 'O coaching pode ser organizado para alguém além do diretor executivo?', a: 'Sem dúvida — e muitas vezes deveria ser. Fazemos coaching com diretores adjuntos, líderes de programas e gestores de primeira vez. Todas as sessões são confidenciais, inclusive perante o conselho.' },
      { q: 'Quanto custa uma atuação?', a: 'Definimos o escopo depois de uma primeira conversa e cotamos uma taxa fixa sem surpresas. Mantemos uma tarifa reduzida para organizações comunitárias com orçamentos abaixo de um milhão de dólares.' }
    ],
    cta: {
      heading: 'Pronto para fortalecer seu conselho ou apoiar sua equipe de liderança?',
      text: 'Compartilhe o que você está enfrentando e diremos como podemos ajudar.'
    },
    heroAlt: 'Dois colegas mapeando ideias em um quadro branco'
  }
};

function main(locale) {
  const t = COPY[locale];
  const shared_ = { home: shared.breadcrumbHome[locale], services: shared.servicesEyebrow[locale], start: shared.startConversation[locale], getInTouch: shared.getInTouch[locale] };

  return `<section class="hero">
  ${picture({ name: 'whiteboard-session', widths: [400, 640, 960, 1200], sizes: '100vw', alt: t.heroAlt, imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="${href(locale, 'index.html')}">${shared_.home}</a> / ${t.hero.title}</p>
    <span class="eyebrow eyebrow--on-dark">${shared_.services}</span>
    <h1 class="hero-title">${t.hero.title}</h1>
    <p class="hero-text">${t.hero.text}</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--coral">${t.hero.tags[0]}</span>
      <span class="tag-pill tag-pill--coral">${t.hero.tags[1]}</span>
    </div>
    <div class="hero-actions"><a href="${href(locale, 'contact.html')}" class="btn btn-on-sky">${shared_.start}</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">${t.cards.heading}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.cards.subtext}</p>
    <div class="auto-grid" style="--min:260px">
      <div class="card card-numbered">
        <div class="card-number-badge card-number-badge--sky">1</div>
        <h3 class="card-title" id="board-governance-review">${t.cards.items[0].title}</h3>
        <p class="card-body">${t.cards.items[0].body}</p>
      </div>
      <div class="card card-numbered">
        <div class="card-number-badge card-number-badge--sky">2</div>
        <h3 class="card-title" id="executive-coaching">${t.cards.items[1].title}</h3>
        <p class="card-body">${t.cards.items[1].body}</p>
      </div>
      <div class="card card-numbered">
        <div class="card-number-badge card-number-badge--sky">3</div>
        <h3 class="card-title" id="leadership-transition">${t.cards.items[2].title}</h3>
        <p class="card-body">${t.cards.items[2].body}</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="split-block">
      <div class="quote-card">
        <span class="eyebrow eyebrow--on-blossom">${t.quote.eyebrow}</span>
        <p class="quote-text">“${t.quote.text}”</p>
        <span class="quote-author">Ace Robinson, M.P.H., M.H.L</span>
      </div>
      <div class="split-col" style="padding-top:12px">
        <h2 class="split-col-heading">${t.approach.heading}</h2>
        <div class="split-col-text">${t.approach.p1}</div>
        <div class="split-col-text">${t.approach.p2}</div>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <h2 class="section-heading">${shared.whoLeadsThisWork[locale]}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.team.subtext}</p>
    <div class="auto-grid" style="--min:280px">
      ${teamCard({ name: TEAM_META[0].name, role: t.team.role1, bio: t.team.bio1 }, locale)}
      ${teamCard({ name: TEAM_META[1].name, role: t.team.role2, bio: t.team.bio2 }, locale)}
    </div>
  </div>
</section>

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">${shared.commonQuestions[locale]}</h2>
    ${accordion(t.faqs, 'npl-faq')}
  </div>
</section>

<section class="cta-band band-blossom">
  <div class="cta-band-inner">
    <h2 class="cta-heading">${t.cta.heading}</h2>
    <p class="cta-text">${t.cta.text}</p>
    <a href="${href(locale, 'contact.html')}" class="btn btn-primary">${shared_.getInTouch}</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'non-profit-leadership',
  outputFile: 'non-profit-leadership.html',
  activeNavId: 'nonProfitLeadership',
  meta: {
    title: {
      en: 'Non-Profit Leadership',
      fr: 'Direction Associative',
      es: 'Liderazgo sin Fines de Lucro',
      pt: 'Liderança Sem Fins Lucrativos'
    },
    description: {
      en: 'Board governance reviews and confidential executive coaching for non-profit leaders navigating equity-centered work sustainably.',
      fr: 'Revues de gouvernance du conseil et coaching de direction confidentiel pour les leaders associatifs qui mènent durablement un travail centré sur l’équité.',
      es: 'Revisiones de gobernanza de la junta y coaching ejecutivo confidencial para líderes sin fines de lucro que sostienen un trabajo centrado en la equidad.',
      pt: 'Revisões de governança do conselho e coaching executivo confidencial para líderes do terceiro setor que sustentam um trabalho centrado em equidade.'
    },
    ogImage: 'non-profit-leadership'
  },
  main
};
