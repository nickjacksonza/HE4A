const { picture, accordion, teamCard, testimonialsSection, href } = require('../../helpers');
const shared = require('../shared');
const people = require('../people');

const CURRICULUM_META = [
  { anchor: 'racial-equity', image: 'whiteboard-session', imageWidths: [400, 640, 960, 1200] },
  { anchor: 'lgbtq-equity', image: 'team-outdoors', imageWidths: [640, 960, 1280, 1920] },
  { anchor: 'social-determinants', image: 'lab-research', imageWidths: [400, 600, 900, 1200] }
];

const TEAM_META = [{ name: 'Lauren Miller' }, { name: 'Diego Calixto' }, { name: 'Lucy Wanjiku Njenga' }];

const COPY = {
  en: {
    hero: {
      title: 'Equity Trainings',
      text: 'Sessions built for teams who’ll be back at work on Monday. Every training ends with commitments the group has agreed to make, written down, owned by name, and followed up on.',
      tags: ['Racial Equity', 'LGBTQ+ Equity', 'Social Determinants of Health'],
      button: 'Book a Session'
    },
    curriculum: {
      heading: 'The curriculum',
      subtext: 'Each module runs as a half day, a full day, or a series across a quarter. Content is adapted to your sector before delivery.',
      tabs: [
        { label: 'Racial Equity', alt: 'Colleagues working through ideas on a whiteboard', title: 'Racial Equity', desc: 'How racism shows up in intake, referral, hiring and data collection, and what your team can change this month without waiting for permission.', topics: ['Structural racism in healthcare access', 'Bias in intake and referral processes', 'Data collection that reflects community reality', 'Building accountability into daily practice'] },
        { label: 'LGBTQ+ Equity', alt: 'Members of the collective together outdoors', title: 'LGBTQ+ Equity', desc: 'Affirming care and employment practice for LGBTQ+ people, with particular attention to trans and gender diverse clients and staff.', topics: ['Creating affirming clinical environments', 'Inclusive employment policies and practices', 'Working with trans and gender diverse communities', 'Addressing intersecting identities in care'] },
        { label: 'Social Determinants', alt: 'A researcher at work in a laboratory', title: 'Social Determinants of Health', desc: 'Housing, income, migration status and criminalization are clinical facts. We’ll show you how to design services that account for them.', topics: ['Housing instability as a health determinant', 'Immigration status and access to care', 'Economic barriers to health outcomes', 'Designing services around real circumstances'] }
      ]
    },
    info: {
      formats: { title: 'Formats', body: 'Half day, full day, or a multi-part series across a quarter. In person for groups up to 30, online up to 60.' },
      preparation: { title: 'Preparation', body: 'We ask for a short pre-session survey and one conversation with a frontline staff member. That way the examples in the room are yours.' },
      languages: { title: 'Languages', body: 'Sessions run in English, French, Spanish and Portuguese, delivered by facilitators who teach in the language they live in.' },
      followUp: { title: 'Follow-up', body: 'You receive the commitments made in the room, written up by name and date, plus a 60-day check-in call included in the fee.' }
    },
    team: {
      subtext: 'Facilitators who’ve done the work they teach.',
      role1: 'Racial Equity Faculty · Atlanta',
      bio1: 'Advocate for DEI and health equity, guided by friendship, leadership and service to humanity. Leads the racial equity curriculum.',
      role2: 'LGBTQ+ Equity Faculty · Brasília',
      bio2: 'Activist living with HIV and researcher at Fiocruz Brasília. Delivers LGBTQ+ equity sessions in Portuguese and Spanish.',
      role3: 'Determinants of Health Faculty · Nairobi',
      bio3: 'HIV response leader for over a decade, teaching the social and structural determinants that shape service uptake.'
    },
    faqs: [
      { q: 'Are sessions delivered online or in person?', a: 'Both. In person for groups up to 30, online up to 60. Multi-part series often mix the two. Opening in person and continuing online works well for many teams.' },
      { q: 'Do you offer continuing education credit?', a: 'Not directly, but we provide a syllabus, attendance record and learning objectives that most accrediting bodies accept for self-submission.' },
      { q: 'Can a training be adapted for clinical staff specifically?', a: 'Absolutely. Clinical, frontline, administrative and board audiences each receive different case material. We recommend not mixing board members with staff in the same room.' },
      { q: 'What happens after the session?', a: 'You get the commitments made in the room, written up by name and date, plus a 60-day check-in call included in the fee.' }
    ],
    cta: {
      heading: 'Ready to move your team from awareness to practice?',
      text: 'Tell us who’s in the room: team, size, language, and what’s been tried before. We’ll propose a format that fits.'
    },
    heroAlt: 'A team in discussion around a table'
  },
  fr: {
    hero: {
      title: 'Formations Équité',
      text: "Des séances conçues pour des équipes qui reprendront le travail le lundi. Chaque formation se termine par des engagements que le groupe accepte de prendre, consignés par écrit, attribués nommément, et suivis.",
      tags: ['Équité Raciale', 'Équité LGBTQ+', 'Déterminants Sociaux de la Santé'],
      button: 'Réserver une Session'
    },
    curriculum: {
      heading: 'Le programme',
      subtext: "Chaque module se déroule sur une demi-journée, une journée complète, ou en série sur un trimestre. Le contenu est adapté à votre secteur avant la prestation.",
      tabs: [
        { label: 'Équité Raciale', alt: 'Collègues réfléchissant devant un tableau blanc', title: 'Équité Raciale', desc: "Comment le racisme se manifeste dans l'accueil, l'orientation, le recrutement et la collecte de données, et ce que votre équipe peut changer ce mois-ci sans attendre de permission.", topics: ["Racisme structurel dans l'accès aux soins de santé", "Biais dans les processus d'accueil et d'orientation", 'Collecte de données reflétant la réalité communautaire', 'Intégrer la redevabilité dans la pratique quotidienne'] },
        { label: 'Équité LGBTQ+', alt: 'Membres du collectif réunis à l’extérieur', title: 'Équité LGBTQ+', desc: "Pratiques de soins et d'emploi valorisantes pour les personnes LGBTQ+, avec une attention particulière aux clientèles et au personnel trans et de genre divers.", topics: ['Créer des environnements cliniques valorisants', "Politiques et pratiques d'emploi inclusives", 'Travailler avec les communautés trans et de genre divers', "Aborder les identités intersectionnelles dans les soins"] },
        { label: 'Déterminants Sociaux', alt: 'Un chercheur au travail dans un laboratoire', title: 'Déterminants Sociaux de la Santé', desc: "Le logement, le revenu, le statut migratoire et la criminalisation sont des faits cliniques. Nous vous montrons comment concevoir des services qui en tiennent compte.", topics: ["L'instabilité du logement comme déterminant de santé", "Statut migratoire et accès aux soins", "Obstacles économiques aux résultats de santé", "Concevoir des services autour des réalités vécues"] }
      ]
    },
    info: {
      formats: { title: 'Formats', body: 'Demi-journée, journée complète ou série en plusieurs parties sur un trimestre. En présentiel pour des groupes jusqu’à 30 personnes, en ligne jusqu’à 60.' },
      preparation: { title: 'Préparation', body: 'Nous demandons un court sondage préalable et un entretien avec un membre du personnel de terrain. Ainsi, les exemples abordés dans la salle sont les vôtres.' },
      languages: { title: 'Langues', body: 'Les séances se déroulent en anglais, français, espagnol et portugais, animées par des formateurs qui enseignent dans la langue qu’ils vivent.' },
      followUp: { title: 'Suivi', body: 'Vous recevez les engagements pris dans la salle, consignés par nom et par date, ainsi qu’un appel de suivi à 60 jours inclus dans le tarif.' }
    },
    team: {
      subtext: 'Des animateurs qui ont mené eux-mêmes le travail qu’ils enseignent.',
      role1: 'Équité Raciale · Atlanta',
      bio1: "Défenseure de la diversité, de l'équité et de l'inclusion ainsi que de l'équité en santé, guidée par l'amitié, le leadership et le service à l'humanité. Dirige le programme d'équité raciale.",
      role2: 'Équité LGBTQ+ · Brasília',
      bio2: 'Militant séropositif et chercheur à la Fiocruz Brasília. Anime les séances d’équité LGBTQ+ en portugais et en espagnol.',
      role3: 'Déterminants de la Santé · Nairobi',
      bio3: "Leader de la réponse au VIH depuis plus de dix ans, enseignant les déterminants sociaux et structurels qui influencent le recours aux services."
    },
    faqs: [
      { q: 'Les séances sont-elles en ligne ou en présentiel ?', a: 'Les deux. En présentiel pour des groupes jusqu’à 30 personnes, en ligne jusqu’à 60. Les séries en plusieurs parties mélangent souvent les deux. Commencer en présentiel puis continuer en ligne fonctionne bien pour de nombreuses équipes.' },
      { q: 'Offrez-vous des crédits de formation continue ?', a: 'Pas directement, mais nous fournissons un programme, une feuille de présence et des objectifs d’apprentissage que la plupart des organismes accréditeurs acceptent en auto-soumission.' },
      { q: 'Une formation peut-elle être adaptée spécifiquement au personnel clinique ?', a: 'Absolument. Les publics clinique, de terrain, administratif et de conseil reçoivent chacun des études de cas différentes. Nous recommandons de ne pas mélanger les membres du conseil avec le personnel dans la même salle.' },
      { q: 'Que se passe-t-il après la séance ?', a: 'Vous recevez les engagements pris dans la salle, consignés par nom et par date, ainsi qu’un appel de suivi à 60 jours inclus dans le tarif.' }
    ],
    cta: {
      heading: 'Prêt à faire passer votre équipe de la sensibilisation à la pratique ?',
      text: 'Dites-nous qui sera dans la salle : équipe, taille, langue, et ce qui a déjà été essayé. Nous proposerons un format adapté.'
    },
    heroAlt: 'Équipe en discussion autour d’une table'
  },
  es: {
    hero: {
      title: 'Capacitaciones en Equidad',
      text: 'Sesiones hechas para equipos que volverán al trabajo el lunes. Cada capacitación termina con compromisos que el grupo acuerda asumir, por escrito, atribuidos por nombre y con seguimiento posterior.',
      tags: ['Equidad Racial', 'Equidad LGBTQ+', 'Determinantes Sociales de la Salud'],
      button: 'Reservar una Sesión'
    },
    curriculum: {
      heading: 'El programa',
      subtext: 'Cada módulo se desarrolla en medio día, un día completo o una serie a lo largo de un trimestre. El contenido se adapta a tu sector antes de la entrega.',
      tabs: [
        { label: 'Equidad Racial', alt: 'Colegas planteando ideas en una pizarra', title: 'Equidad Racial', desc: 'Cómo se manifiesta el racismo en la admisión, la derivación, la contratación y la recolección de datos, y qué puede cambiar tu equipo este mes sin esperar permiso.', topics: ['Racismo estructural en el acceso a la salud', 'Sesgo en los procesos de admisión y derivación', 'Recolección de datos que refleje la realidad comunitaria', 'Integrar la rendición de cuentas en la práctica diaria'] },
        { label: 'Equidad LGBTQ+', alt: 'Miembros del colectivo reunidos al aire libre', title: 'Equidad LGBTQ+', desc: 'Prácticas afirmativas de atención y empleo para personas LGBTQ+, con especial atención a clientes y personal trans y de género diverso.', topics: ['Creación de entornos clínicos afirmativos', 'Políticas y prácticas de empleo inclusivas', 'Trabajo con comunidades trans y de género diverso', 'Abordar identidades interseccionales en la atención'] },
        { label: 'Determinantes Sociales', alt: 'Un investigador trabajando en un laboratorio', title: 'Determinantes Sociales de la Salud', desc: 'Vivienda, ingresos, estatus migratorio y criminalización son hechos clínicos. Te mostramos cómo diseñar servicios que los tomen en cuenta.', topics: ['Inestabilidad de vivienda como determinante de salud', 'Estatus migratorio y acceso a la atención', 'Barreras económicas a los resultados de salud', 'Diseñar servicios en torno a circunstancias reales'] }
      ]
    },
    info: {
      formats: { title: 'Formatos', body: 'Medio día, día completo, o una serie en varias partes a lo largo de un trimestre. Presencial para grupos de hasta 30, en línea hasta 60.' },
      preparation: { title: 'Preparación', body: 'Solicitamos una breve encuesta previa y una conversación con un miembro del personal de primera línea. Así los ejemplos en la sala son los tuyos.' },
      languages: { title: 'Idiomas', body: 'Las sesiones se realizan en inglés, francés, español y portugués, impartidas por facilitadores que enseñan en el idioma que viven.' },
      followUp: { title: 'Seguimiento', body: 'Recibes los compromisos asumidos en la sala, redactados por nombre y fecha, además de una llamada de seguimiento a los 60 días incluida en la tarifa.' }
    },
    team: {
      subtext: 'Facilitadores que han hecho el trabajo que enseñan.',
      role1: 'Equidad Racial · Atlanta',
      bio1: 'Defensora de la diversidad, equidad e inclusión y de la equidad en salud, guiada por la amistad, el liderazgo y el servicio a la humanidad. Dirige el programa de equidad racial.',
      role2: 'Equidad LGBTQ+ · Brasília',
      bio2: 'Activista que vive con VIH e investigador en Fiocruz Brasília. Imparte sesiones de equidad LGBTQ+ en portugués y español.',
      role3: 'Determinantes de la Salud · Nairobi',
      bio3: 'Líder de la respuesta al VIH durante más de una década, enseñando los determinantes sociales y estructurales que moldean el uso de los servicios.'
    },
    faqs: [
      { q: '¿Las sesiones son en línea o presenciales?', a: 'Ambas. Presencial para grupos de hasta 30, en línea hasta 60. Las series en varias partes suelen combinar ambas. Comenzar presencial y continuar en línea funciona bien para muchos equipos.' },
      { q: '¿Ofrecen créditos de educación continua?', a: 'No directamente, pero proporcionamos un programa, registro de asistencia y objetivos de aprendizaje que la mayoría de los organismos acreditadores aceptan por autopresentación.' },
      { q: '¿Se puede adaptar una capacitación específicamente para personal clínico?', a: 'Por supuesto. Las audiencias clínicas, de primera línea, administrativas y de junta reciben cada una material de caso diferente. Recomendamos no mezclar miembros de la junta con personal en la misma sala.' },
      { q: '¿Qué sucede después de la sesión?', a: 'Recibes los compromisos asumidos en la sala, redactados por nombre y fecha, además de una llamada de seguimiento a los 60 días incluida en la tarifa.' }
    ],
    cta: {
      heading: '¿Listo para llevar a tu equipo de la sensibilización a la práctica?',
      text: 'Cuéntanos quién estará en la sala: equipo, tamaño, idioma, y qué se ha intentado antes. Te propondremos un formato adecuado.'
    },
    heroAlt: 'Un equipo en discusión alrededor de una mesa'
  },
  pt: {
    hero: {
      title: 'Capacitações em Equidade',
      text: 'Sessões feitas para equipes que voltarão ao trabalho na segunda-feira. Cada capacitação termina com compromissos que o grupo concorda em assumir, registrados por escrito, atribuídos por nome e com acompanhamento posterior.',
      tags: ['Equidade Racial', 'Equidade LGBTQ+', 'Determinantes Sociais da Saúde'],
      button: 'Reservar uma Sessão'
    },
    curriculum: {
      heading: 'O currículo',
      subtext: 'Cada módulo ocorre em meio período, um dia completo ou uma série ao longo de um trimestre. O conteúdo é adaptado ao seu setor antes da entrega.',
      tabs: [
        { label: 'Equidade Racial', alt: 'Colegas mapeando ideias em um quadro branco', title: 'Equidade Racial', desc: 'Como o racismo se manifesta na triagem, no encaminhamento, na contratação e na coleta de dados, e o que sua equipe pode mudar ainda este mês sem esperar permissão.', topics: ['Racismo estrutural no acesso à saúde', 'Viés nos processos de triagem e encaminhamento', 'Coleta de dados que reflete a realidade da comunidade', 'Construindo responsabilização na prática diária'] },
        { label: 'Equidade LGBTQ+', alt: 'Membros do coletivo reunidos ao ar livre', title: 'Equidade LGBTQ+', desc: 'Práticas de cuidado e emprego acolhedoras para pessoas LGBTQ+, com atenção especial a clientes e equipe trans e de gênero diverso.', topics: ['Criando ambientes clínicos acolhedores', 'Políticas e práticas de emprego inclusivas', 'Trabalhando com comunidades trans e de gênero diverso', 'Abordando identidades interseccionais no cuidado'] },
        { label: 'Determinantes Sociais', alt: 'Um pesquisador trabalhando em um laboratório', title: 'Determinantes Sociais da Saúde', desc: 'Moradia, renda, status migratório e criminalização são fatos clínicos. Mostramos como projetar serviços que os levem em conta.', topics: ['Instabilidade habitacional como determinante de saúde', 'Status migratório e acesso ao cuidado', 'Barreiras econômicas aos resultados de saúde', 'Projetando serviços em torno de circunstâncias reais'] }
      ]
    },
    info: {
      formats: { title: 'Formatos', body: 'Meio período, dia completo, ou uma série em várias partes ao longo de um trimestre. Presencial para grupos de até 30, online até 60.' },
      preparation: { title: 'Preparação', body: 'Pedimos uma breve pesquisa prévia e uma conversa com um membro da equipe de linha de frente. Assim os exemplos na sala são os seus.' },
      languages: { title: 'Idiomas', body: 'As sessões ocorrem em inglês, francês, espanhol e português, conduzidas por facilitadores que ensinam no idioma que vivem.' },
      followUp: { title: 'Acompanhamento', body: 'Você recebe os compromissos assumidos na sala, registrados por nome e data, além de uma chamada de acompanhamento em 60 dias incluída na taxa.' }
    },
    team: {
      subtext: 'Facilitadores que já fizeram o trabalho que ensinam.',
      role1: 'Equidade Racial · Atlanta',
      bio1: 'Defensora da diversidade, equidade e inclusão e da equidade em saúde, guiada pela amizade, liderança e serviço à humanidade. Lidera o currículo de equidade racial.',
      role2: 'Equidade LGBTQ+ · Brasília',
      bio2: 'Ativista vivendo com HIV e pesquisador na Fiocruz Brasília. Conduz sessões de equidade LGBTQ+ em português e espanhol.',
      role3: 'Determinantes da Saúde · Nairobi',
      bio3: 'Líder da resposta ao HIV por mais de uma década, ensinando os determinantes sociais e estruturais que moldam a busca por serviços.'
    },
    faqs: [
      { q: 'As sessões são online ou presenciais?', a: 'Ambas. Presencial para grupos de até 30, online até 60. Séries em várias partes costumam combinar as duas. Começar presencial e continuar online funciona bem para muitas equipes.' },
      { q: 'Vocês oferecem créditos de educação continuada?', a: 'Não diretamente, mas fornecemos um programa, registro de presença e objetivos de aprendizagem que a maioria dos órgãos credenciadores aceita por autossubmissão.' },
      { q: 'Uma capacitação pode ser adaptada especificamente para a equipe clínica?', a: 'Sem dúvida. Públicos clínicos, de linha de frente, administrativos e do conselho recebem, cada um, material de caso diferente. Recomendamos não misturar membros do conselho com a equipe na mesma sala.' },
      { q: 'O que acontece depois da sessão?', a: 'Você recebe os compromissos assumidos na sala, registrados por nome e data, além de uma chamada de acompanhamento em 60 dias incluída na taxa.' }
    ],
    cta: {
      heading: 'Pronto para levar sua equipe da conscientização à prática?',
      text: 'Conte-nos quem estará na sala: equipe, tamanho, idioma, e o que já foi tentado antes. Vamos propor um formato adequado.'
    },
    heroAlt: 'Uma equipe em discussão em torno de uma mesa'
  }
};

function main(locale) {
  const t = COPY[locale];
  const shared_ = { home: shared.breadcrumbHome[locale], services: shared.servicesEyebrow[locale], getInTouch: shared.getInTouch[locale] };

  const tabs = t.curriculum.tabs.map((tab, i) => `      <button type="button" class="tab" role="tab" id="${CURRICULUM_META[i].anchor}" aria-selected="${i === 0}" aria-controls="panel-${CURRICULUM_META[i].anchor}" tabindex="${i === 0 ? '0' : '-1'}">${tab.label}</button>`).join('\n');

  const panels = t.curriculum.tabs.map((tab, i) => `    <div class="tabpanel" id="panel-${CURRICULUM_META[i].anchor}" role="tabpanel" aria-labelledby="${CURRICULUM_META[i].anchor}" tabindex="0"${i === 0 ? '' : ' hidden'}>
      <div class="tabpanel-grid">
        <div class="tabpanel-media">${picture({ name: CURRICULUM_META[i].image, widths: CURRICULUM_META[i].imageWidths, sizes: '(max-width: 720px) 100vw, 50vw', alt: tab.alt })}</div>
        <div class="tabpanel-body">
          <h3 class="tabpanel-title">${tab.title}</h3>
          <p class="tabpanel-desc">${tab.desc}</p>
          <div class="topic-list">
            ${tab.topics.map((topic) => `<div class="topic-item"><span class="topic-dot" aria-hidden="true"></span><span class="topic-text">${topic}</span></div>`).join('\n            ')}
          </div>
        </div>
      </div>
    </div>`).join('\n');

  return `<section class="hero">
  ${picture({ name: 'team-meeting', widths: [400, 640, 960, 1280, 1920], sizes: '100vw', alt: t.heroAlt, imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="${href(locale, 'index.html')}">${shared_.home}</a> / ${t.hero.title}</p>
    <span class="eyebrow eyebrow--on-dark">${shared_.services}</span>
    <h1 class="hero-title">${t.hero.title}</h1>
    <p class="hero-text">${t.hero.text}</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--gold">${t.hero.tags[0]}</span>
      <span class="tag-pill tag-pill--gold">${t.hero.tags[1]}</span>
      <span class="tag-pill tag-pill--gold">${t.hero.tags[2]}</span>
    </div>
    <div class="hero-actions"><a href="${href(locale, 'contact.html')}" class="btn btn-on-sky">${t.hero.button}</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">${t.curriculum.heading}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-6)">${t.curriculum.subtext}</p>
    <div class="tablist" role="tablist" aria-label="${t.curriculum.heading}">
${tabs}
    </div>
${panels}
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="auto-grid" style="--min:240px">
      <div class="info-card">
        <div class="info-card-title">${t.info.formats.title}</div>
        <p class="card-body">${t.info.formats.body}</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">${t.info.preparation.title}</div>
        <p class="card-body">${t.info.preparation.body}</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">${t.info.languages.title}</div>
        <p class="card-body">${t.info.languages.body}</p>
      </div>
      <div class="info-card">
        <div class="info-card-title">${t.info.followUp.title}</div>
        <p class="card-body">${t.info.followUp.body}</p>
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
      ${teamCard({ name: TEAM_META[2].name, role: t.team.role3, bio: t.team.bio3 }, locale)}
      ${teamCard({ name: people.johnHanna.name, role: people.johnHanna.teamRole[locale], bio: people.johnHanna.bio[locale] }, locale)}
      ${teamCard({ name: people.robertMiller.name, role: people.robertMiller.teamRole[locale], bio: people.robertMiller.bio[locale] }, locale)}
    </div>
  </div>
</section>

${testimonialsSection(locale)}

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">${shared.commonQuestions[locale]}</h2>
    ${accordion(t.faqs, 'trainings-faq')}
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
  slug: 'trainings',
  outputFile: 'trainings.html',
  activeNavId: 'trainings',
  meta: {
    title: {
      en: 'Equity Trainings',
      fr: 'Formations Équité',
      es: 'Capacitaciones en Equidad',
      pt: 'Capacitações em Equidade'
    },
    description: {
      en: 'Racial equity, LGBTQ+ equity and social determinants of health, taught so your team can use it on Monday. Every session ends with commitments the team follows up on.',
      fr: 'Équité raciale, équité LGBTQ+ et déterminants sociaux de la santé, enseignés pour que votre équipe s’en serve dès lundi. Chaque séance se termine par des engagements suivis.',
      es: 'Equidad racial, equidad LGBTQ+ y determinantes sociales de la salud, enseñados para que tu equipo los use el lunes. Cada sesión termina con compromisos que el equipo da seguimiento.',
      pt: 'Equidade racial, equidade LGBTQ+ e determinantes sociais da saúde, ensinados para sua equipe usar na segunda-feira. Cada sessão termina com compromissos acompanhados pela equipe.'
    },
    ogImage: 'trainings'
  },
  main
};
