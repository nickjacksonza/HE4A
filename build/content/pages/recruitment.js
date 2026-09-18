const { picture, personPhoto, accordion, teamCard, testimonialsSection, href } = require('../../helpers');
const shared = require('../shared');
const people = require('../people');

const RECRUITER_LINKS = {
  linkedin: 'https://www.linkedin.com/in/akeliah/',
  writing: 'https://www.thebody.com/author/ace-robinson',
  listen: 'https://soundcloud.com/user-499494424/ace-robinson-administrative-and-policy-communicable-disease-advocate'
};

const COPY = {
  en: {
    hero: {
      title: 'Recruitment',
      text: 'Hiring for mission-driven healthcare and public health work is different. We recruit leaders, clinicians and program staff who bring both the expertise and the lived experience your communities need.',
      tags: ['Executive Search', 'Equity-Centered Hiring'],
      button: 'Start a Search'
    },
    formats: {
      heading: 'How we help you build your team',
      subtext: 'Each engagement is scoped to the role, the timeline and the team you are building around it.',
      executiveSearch: { label: 'Executive Search', title: 'Leadership and Executive Placements', body: 'Retained search for executive directors, chief programme officers and senior clinical leaders — candidates vetted against the mission, not just the resume.' },
      staffing: { label: 'Program Staffing', title: 'Clinical and Program Teams', body: 'Building out the frontline: case managers, community health workers, clinicians and program staff who reflect the communities they serve.' },
      equityHiring: { label: 'Equity-Centered Hiring', title: 'Inclusive Hiring Practices', body: 'Job descriptions, interview panels and evaluation rubrics redesigned to widen the pipeline and reduce bias at every stage.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.en,
      heading: 'Meet Who Leads Your Search',
      bio: 'Ace Robinson, M.P.H., M.H.L., has spent two decades building the teams behind HIV, mpox and public health programmes — from serving as Acting Director of Duke University’s Sexual & Gender Minority Wellness programme to assembling the coalition behind the Federal AIDS Policy Partnership, which he co-chairs. He also sits on the UCLA CHIPTS steering committee and chairs the Brown University Advisory Council to Eliminate Anti-Black Racism — work that depends on finding the right people for the room.',
      quoteText: 'You do not build equitable systems with the wrong people in the room. Who you hire is the strategy.',
      linkedin: 'LinkedIn',
      writing: 'His Writing on TheBody',
      listen: 'Hear Him Speak'
    },
    prepare: {
      heading1: 'How a search works',
      text1: 'We start with a role brief: the outcomes the position needs to deliver, the team it sits inside, and the constraints — budget, timeline, location — that are non-negotiable. From there we source, screen and present a shortlist, then stay involved through offer and onboarding.',
      heading2: 'Where we recruit',
      text2: 'We recruit across the US, Latin America, Sub-Saharan Africa and Southeast Asia, in English, French, Spanish or Portuguese, for on-site, remote and hybrid roles alike.'
    },
    team: {
      heading: 'Who else supports your search',
      subtext: 'More collective members who bring hiring and team-building experience to the table.'
    },
    faqs: [
      { q: 'How long does a search usually take?', a: 'Six to twelve weeks for most leadership roles, depending on how narrow the candidate pool is and how many rounds your process requires.' },
      { q: 'Do you only recruit for HIV and public health roles?', a: 'That is where we have the deepest network, but we take on broader health equity and non-profit roles too — ask us and we will tell you honestly if it is outside our reach.' },
      { q: 'Can you help us fix a hiring process that keeps producing the same kind of candidate?', a: 'Yes — often the fastest fix. We audit job postings, panels and criteria before we ever open a search.' },
      { q: 'Do you charge a retainer or a placement fee?', a: 'Both models are available depending on the role and timeline; we will recommend whichever fits your budget honestly, not whichever pays us more.' }
    ],
    cta: {
      heading: 'Hiring for a critical role?',
      text: 'Send us the role, the timeline and the outcome you need from this hire. We will tell you honestly what it will take.'
    },
    heroAlt: 'Two colleagues reviewing a candidate profile together'
  },
  fr: {
    hero: {
      title: 'Recrutement',
      text: 'Recruter pour un travail de santé publique porté par une mission, c’est différent. Nous recrutons des dirigeants, des cliniciens et du personnel de programme qui apportent à la fois l’expertise et l’expérience vécue dont vos communautés ont besoin.',
      tags: ['Recherche de Cadres', 'Recrutement Équitable'],
      button: 'Lancer une Recherche'
    },
    formats: {
      heading: 'Comment nous vous aidons à bâtir votre équipe',
      subtext: 'Chaque mission est cadrée selon le poste, le calendrier et l’équipe que vous constituez autour.',
      executiveSearch: { label: 'Recherche de Cadres', title: 'Placements de Direction et de Cadres', body: 'Recherche en exclusivité pour directeurs exécutifs, directeurs de programmes et cadres cliniques supérieurs — candidats évalués selon la mission, pas seulement le CV.' },
      staffing: { label: 'Personnel de Programme', title: 'Équipes Cliniques et de Programme', body: 'Constituer le personnel de terrain : gestionnaires de cas, agents de santé communautaire, cliniciens et personnel de programme qui reflètent les communautés qu’ils servent.' },
      equityHiring: { label: 'Recrutement Équitable', title: 'Pratiques de Recrutement Inclusives', body: 'Descriptions de poste, comités d’entretien et grilles d’évaluation repensés pour élargir le vivier de candidats et réduire les biais à chaque étape.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.fr,
      heading: 'Découvrez Qui Dirige Votre Recherche',
      bio: 'Ace Robinson, M.P.H., M.H.L., constitue depuis vingt ans les équipes derrière les programmes de lutte contre le VIH, le mpox et la santé publique — du poste de directeur par intérim du programme de bien-être des minorités sexuelles et de genre de l’Université Duke à la coalition réunie derrière le Federal AIDS Policy Partnership, qu’il co-préside. Il siège également au comité directeur de l’UCLA CHIPTS et préside le Brown University Advisory Council to Eliminate Anti-Black Racism — un travail qui dépend de trouver les bonnes personnes pour la salle.',
      quoteText: 'On ne construit pas des systèmes équitables avec les mauvaises personnes dans la salle. Qui vous recrutez, c’est la stratégie.',
      linkedin: 'LinkedIn',
      writing: 'Ses Écrits sur TheBody',
      listen: 'Écoutez-le'
    },
    prepare: {
      heading1: 'Comment se déroule une recherche',
      text1: 'Nous commençons par un brief de poste : les résultats attendus, l’équipe dans laquelle il s’insère, et les contraintes — budget, calendrier, lieu — non négociables. Nous sourçons, présélectionnons et présentons une liste restreinte, puis restons impliqués jusqu’à l’offre et l’intégration.',
      heading2: 'Où nous recrutons',
      text2: 'Nous recrutons aux États-Unis, en Amérique latine, en Afrique subsaharienne et en Asie du Sud-Est, en anglais, français, espagnol ou portugais, pour des postes sur site, à distance ou hybrides.'
    },
    team: {
      heading: 'Qui d’autre soutient votre recherche',
      subtext: 'D’autres membres du collectif apportant une expérience du recrutement et de la constitution d’équipes.'
    },
    faqs: [
      { q: 'Combien de temps dure généralement une recherche ?', a: 'Six à douze semaines pour la plupart des postes de direction, selon l’étroitesse du vivier de candidats et le nombre d’étapes de votre processus.' },
      { q: 'Recrutez-vous uniquement pour des postes liés au VIH et à la santé publique ?', a: 'C’est là que notre réseau est le plus profond, mais nous prenons aussi en charge des postes plus larges en équité de santé et à but non lucratif — demandez-nous, nous vous dirons honnêtement si c’est hors de notre portée.' },
      { q: 'Pouvez-vous nous aider à corriger un processus de recrutement qui produit toujours le même type de candidat ?', a: 'Oui — c’est souvent la correction la plus rapide. Nous auditons les offres d’emploi, les comités et les critères avant même d’ouvrir une recherche.' },
      { q: 'Facturez-vous un forfait ou des honoraires au placement ?', a: 'Les deux modèles sont disponibles selon le poste et le calendrier ; nous recommandons honnêtement celui qui convient à votre budget, pas celui qui nous rapporte le plus.' }
    ],
    cta: {
      heading: 'Vous recrutez pour un poste clé ?',
      text: 'Envoyez-nous le poste, le calendrier et le résultat attendu de cette embauche. Nous vous dirons honnêtement ce qu’il faudra.'
    },
    heroAlt: 'Deux collègues examinant ensemble le profil d’un candidat'
  },
  es: {
    hero: {
      title: 'Reclutamiento',
      text: 'Contratar para un trabajo de salud pública impulsado por una misión es diferente. Reclutamos líderes, clínicos y personal de programa que aportan tanto la experiencia técnica como la experiencia vivida que tus comunidades necesitan.',
      tags: ['Búsqueda de Ejecutivos', 'Contratación Equitativa'],
      button: 'Iniciar una Búsqueda'
    },
    formats: {
      heading: 'Cómo te ayudamos a construir tu equipo',
      subtext: 'Cada proyecto se define según el puesto, el cronograma y el equipo que estás formando.',
      executiveSearch: { label: 'Búsqueda de Ejecutivos', title: 'Colocaciones de Liderazgo y Dirección', body: 'Búsqueda exclusiva de directores ejecutivos, directores de programa y líderes clínicos senior — candidatos evaluados según la misión, no solo el currículum.' },
      staffing: { label: 'Personal de Programa', title: 'Equipos Clínicos y de Programa', body: 'Construimos el personal de primera línea: gestores de casos, promotores de salud comunitaria, clínicos y personal de programa que reflejan a las comunidades a las que sirven.' },
      equityHiring: { label: 'Contratación Equitativa', title: 'Prácticas de Contratación Inclusivas', body: 'Descripciones de puesto, paneles de entrevista y rúbricas de evaluación rediseñados para ampliar el grupo de candidatos y reducir el sesgo en cada etapa.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.es,
      heading: 'Conoce Quién Lidera tu Búsqueda',
      bio: 'Ace Robinson, M.P.H., M.H.L., lleva dos décadas formando los equipos detrás de programas de VIH, mpox y salud pública — desde su rol como Director Interino del programa de bienestar de minorías sexuales y de género de la Universidad Duke hasta la coalición detrás de la Federal AIDS Policy Partnership, que copreside. También integra el comité directivo de UCLA CHIPTS y preside el Brown University Advisory Council to Eliminate Anti-Black Racism, un trabajo que depende de encontrar a las personas adecuadas para la sala.',
      quoteText: 'No se construyen sistemas equitativos con las personas equivocadas en la sala. A quién contratas es la estrategia.',
      linkedin: 'LinkedIn',
      writing: 'Sus Artículos en TheBody',
      listen: 'Escúchalo'
    },
    prepare: {
      heading1: 'Cómo funciona una búsqueda',
      text1: 'Comenzamos con un resumen del puesto: los resultados que debe entregar, el equipo en el que se inserta, y las restricciones — presupuesto, cronograma, ubicación — no negociables. A partir de ahí buscamos, filtramos y presentamos una lista corta, y seguimos involucrados hasta la oferta y la incorporación.',
      heading2: 'Dónde reclutamos',
      text2: 'Reclutamos en Estados Unidos, América Latina, África subsahariana y el Sudeste Asiático, en inglés, francés, español o portugués, para puestos presenciales, remotos e híbridos por igual.'
    },
    team: {
      heading: 'Quién más apoya tu búsqueda',
      subtext: 'Más miembros del colectivo que aportan experiencia en contratación y formación de equipos.'
    },
    faqs: [
      { q: '¿Cuánto dura normalmente una búsqueda?', a: 'Entre seis y doce semanas para la mayoría de los puestos de liderazgo, según lo reducido del grupo de candidatos y cuántas rondas requiera tu proceso.' },
      { q: '¿Solo reclutan para puestos de VIH y salud pública?', a: 'Ahí es donde tenemos la red más profunda, pero también asumimos puestos más amplios de equidad en salud y sin fines de lucro — pregúntanos y te diremos honestamente si está fuera de nuestro alcance.' },
      { q: '¿Pueden ayudarnos a corregir un proceso de contratación que siempre produce el mismo tipo de candidato?', a: 'Sí — suele ser la corrección más rápida. Auditamos las publicaciones de empleo, los paneles y los criterios antes incluso de abrir una búsqueda.' },
      { q: '¿Cobran un retainer o una tarifa por colocación?', a: 'Ambos modelos están disponibles según el puesto y el cronograma; te recomendaremos honestamente el que se ajuste a tu presupuesto, no el que más nos convenga a nosotros.' }
    ],
    cta: {
      heading: '¿Están contratando para un puesto clave?',
      text: 'Envíanos el puesto, el cronograma y el resultado que necesitas de esta contratación. Te diremos honestamente lo que hará falta.'
    },
    heroAlt: 'Dos colegas revisando juntos el perfil de un candidato'
  },
  pt: {
    hero: {
      title: 'Recrutamento',
      text: 'Contratar para um trabalho de saúde pública guiado por missão é diferente. Recrutamos líderes, clínicos e equipes de programa que trazem tanto a experiência técnica quanto a vivência que suas comunidades precisam.',
      tags: ['Busca de Executivos', 'Contratação Equitativa'],
      button: 'Iniciar uma Busca'
    },
    formats: {
      heading: 'Como ajudamos você a construir sua equipe',
      subtext: 'Cada projeto é definido de acordo com o cargo, o cronograma e a equipe que você está formando.',
      executiveSearch: { label: 'Busca de Executivos', title: 'Contratações de Liderança e Diretoria', body: 'Busca exclusiva para diretores executivos, diretores de programa e líderes clínicos sênior — candidatos avaliados de acordo com a missão, não apenas o currículo.' },
      staffing: { label: 'Equipe de Programa', title: 'Equipes Clínicas e de Programa', body: 'Construímos a linha de frente: gestores de caso, agentes comunitários de saúde, clínicos e equipe de programa que refletem as comunidades atendidas.' },
      equityHiring: { label: 'Contratação Equitativa', title: 'Práticas de Contratação Inclusivas', body: 'Descrições de vaga, painéis de entrevista e critérios de avaliação redesenhados para ampliar o grupo de candidatos e reduzir vieses em cada etapa.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.pt,
      heading: 'Conheça Quem Lidera Sua Busca',
      bio: 'Ace Robinson, M.P.H., M.H.L., passou duas décadas formando as equipes por trás de programas de HIV, mpox e saúde pública — desde atuar como Diretor Interino do programa de bem-estar de minorias sexuais e de gênero da Universidade Duke até reunir a coalizão por trás da Federal AIDS Policy Partnership, que copreside. Também integra o comitê diretor da UCLA CHIPTS e preside o Brown University Advisory Council to Eliminate Anti-Black Racism, um trabalho que depende de encontrar as pessoas certas para a sala.',
      quoteText: 'Não se constroem sistemas equitativos com as pessoas erradas na sala. Quem você contrata é a estratégia.',
      linkedin: 'LinkedIn',
      writing: 'Seus Textos na TheBody',
      listen: 'Ouça-o'
    },
    prepare: {
      heading1: 'Como funciona uma busca',
      text1: 'Começamos com um briefing da vaga: os resultados que ela precisa entregar, a equipe em que se insere, e as restrições — orçamento, cronograma, localização — não negociáveis. A partir daí buscamos, avaliamos e apresentamos uma lista curta, permanecendo envolvidos até a proposta e a integração.',
      heading2: 'Onde recrutamos',
      text2: 'Recrutamos nos Estados Unidos, América Latina, África Subsaariana e Sudeste Asiático, em inglês, francês, espanhol ou português, para vagas presenciais, remotas e híbridas.'
    },
    team: {
      heading: 'Quem mais apoia sua busca',
      subtext: 'Mais membros do coletivo que trazem experiência em contratação e formação de equipes.'
    },
    faqs: [
      { q: 'Quanto tempo costuma durar uma busca?', a: 'De seis a doze semanas para a maioria dos cargos de liderança, dependendo de quão restrito é o grupo de candidatos e de quantas etapas seu processo exige.' },
      { q: 'Vocês recrutam apenas para vagas de HIV e saúde pública?', a: 'É onde temos a rede mais profunda, mas também assumimos vagas mais amplas de equidade em saúde e sem fins lucrativos — pergunte e diremos honestamente se está fora do nosso alcance.' },
      { q: 'Vocês podem nos ajudar a corrigir um processo de contratação que sempre produz o mesmo tipo de candidato?', a: 'Sim — geralmente é a correção mais rápida. Auditamos vagas publicadas, painéis e critérios antes mesmo de abrir uma busca.' },
      { q: 'Vocês cobram um retainer ou uma taxa por colocação?', a: 'Ambos os modelos estão disponíveis dependendo do cargo e do cronograma; recomendaremos honestamente o que couber no seu orçamento, não o que nos favorece mais.' }
    ],
    cta: {
      heading: 'Está contratando para um cargo crítico?',
      text: 'Envie-nos o cargo, o cronograma e o resultado que você precisa dessa contratação. Diremos honestamente o que será necessário.'
    },
    heroAlt: 'Dois colegas revisando juntos o perfil de um candidato'
  }
};

function main(locale) {
  const t = COPY[locale];
  const shared_ = { home: shared.breadcrumbHome[locale], services: shared.servicesEyebrow[locale] };

  return `<section class="hero">
  ${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '100vw', alt: t.heroAlt, imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="${href(locale, 'index.html')}">${shared_.home}</a> / ${t.hero.title}</p>
    <span class="eyebrow eyebrow--on-dark">${shared_.services}</span>
    <h1 class="hero-title" style="max-width:12ch">${t.hero.title}</h1>
    <p class="hero-text">${t.hero.text}</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--indigo">${t.hero.tags[0]}</span>
      <span class="tag-pill tag-pill--indigo">${t.hero.tags[1]}</span>
    </div>
    <div class="hero-actions"><a href="${href(locale, 'contact.html')}" class="btn btn-on-sky">${t.hero.button}</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">${t.formats.heading}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.formats.subtext}</p>
    <div class="auto-grid" style="--min:300px">
      <div class="format-card format-card--sky">
        <div class="format-label">${t.formats.executiveSearch.label}</div>
        <h3 class="format-title" id="executive-search">${t.formats.executiveSearch.title}</h3>
        <p class="format-text">${t.formats.executiveSearch.body}</p>
      </div>
      <div class="format-card format-card--blossom">
        <div class="format-label">${t.formats.staffing.label}</div>
        <h3 class="format-title" id="program-staffing">${t.formats.staffing.title}</h3>
        <p class="format-text">${t.formats.staffing.body}</p>
      </div>
      <div class="format-card format-card--paper">
        <div class="format-label">${t.formats.equityHiring.label}</div>
        <h3 class="format-title" id="equity-hiring">${t.formats.equityHiring.title}</h3>
        <p class="format-text">${t.formats.equityHiring.body}</p>
      </div>
    </div>
  </div>
</section>

<section class="speaker-feature band-blossom">
  <div class="container speaker-feature-inner">
    <div class="speaker-feature-photo">
      ${personPhoto('Ace Robinson', 'speaker-feature-img', '(max-width: 640px) 100vw, 320px')}
    </div>
    <div class="speaker-feature-content">
      <span class="eyebrow eyebrow--on-blossom">${t.lead.eyebrow}</span>
      <h2 class="section-heading">${t.lead.heading}</h2>
      <p class="speaker-feature-name">Ace Robinson, M.P.H., M.H.L.</p>
      <p class="speaker-feature-bio">${t.lead.bio}</p>
      <p class="quote-text quote-text--feature">“${t.lead.quoteText}”</p>
      <div class="social-links">
        <a href="${RECRUITER_LINKS.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer">${t.lead.linkedin}</a>
        <a href="${RECRUITER_LINKS.writing}" class="social-link" target="_blank" rel="noopener noreferrer">${t.lead.writing}</a>
        <a href="${RECRUITER_LINKS.listen}" class="social-link" target="_blank" rel="noopener noreferrer">${t.lead.listen}</a>
      </div>
    </div>
  </div>
</section>

<section class="section band-sky">
  <div class="container">
    <div class="split-block">
      <div class="split-col">
        <h2 class="split-col-heading">${t.prepare.heading1}</h2>
        <p class="split-col-text">${t.prepare.text1}</p>
      </div>
      <div class="split-col">
        <h2 class="split-col-heading">${t.prepare.heading2}</h2>
        <p class="split-col-text">${t.prepare.text2}</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <h2 class="section-heading">${t.team.heading}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.team.subtext}</p>
    <div class="auto-grid" style="--min:280px">
      ${teamCard({ name: people.leandroMaldonado.name, role: people.leandroMaldonado.teamRole[locale], bio: people.leandroMaldonado.bio[locale] }, locale)}
      ${teamCard({ name: people.stephenPlaceholder.name, role: people.stephenPlaceholder.teamRole[locale], bio: people.stephenPlaceholder.bio[locale] }, locale)}
    </div>
  </div>
</section>

${testimonialsSection(locale)}

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">${shared.commonQuestions[locale]}</h2>
    ${accordion(t.faqs, 'rec-faq')}
  </div>
</section>

<section class="cta-band band-ink">
  <div class="cta-band-inner">
    <h2 class="cta-heading cta-heading--on-dark">${t.cta.heading}</h2>
    <p class="cta-text cta-text--on-dark">${t.cta.text}</p>
    <a href="${href(locale, 'contact.html')}" class="btn btn-on-sky">${shared.getInTouch[locale]}</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'recruitment',
  outputFile: 'recruitment.html',
  activeNavId: 'recruitment',
  meta: {
    title: {
      en: 'Recruitment',
      fr: 'Recrutement',
      es: 'Reclutamiento',
      pt: 'Recrutamento'
    },
    description: {
      en: 'Executive search, program staffing and equity-centered hiring for healthcare and public health organizations — built around the role, the team and the outcome you need.',
      fr: 'Recherche de cadres, personnel de programme et recrutement équitable pour les organisations de santé et de santé publique — pensés autour du poste, de l’équipe et du résultat dont vous avez besoin.',
      es: 'Búsqueda de ejecutivos, personal de programa y contratación equitativa para organizaciones de salud y salud pública — diseñados en torno al puesto, el equipo y el resultado que necesitas.',
      pt: 'Busca de executivos, equipe de programa e contratação equitativa para organizações de saúde e saúde pública — construídas em torno do cargo, da equipe e do resultado que você precisa.'
    },
    ogImage: 'recruitment'
  },
  main
};
