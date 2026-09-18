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
      title: 'Healthcare Recruitment',
      text: 'Medical mistrust is at an all-time high. Your staff’s responsiveness to patients has to be at an all-time high too. Finding people your clients can trust takes expertise.',
      tags: ['Executive Search', 'Frontline Hiring'],
      button: 'Start a Search'
    },
    formats: {
      heading: 'Every seat you need to fill',
      subtext: 'Chief Medical Officer, Comptroller, Nurse Practitioner, Outreach Specialist, Front Desk Clerk. You can’t afford to hire someone who doesn’t understand and welcome your client base.',
      executiveSearch: { label: 'Executive Search', title: 'Leadership and Executive Roles', body: 'Chief Medical Officers, Comptrollers, executive directors and senior clinical leaders. We vet for the mission as hard as we vet for the resume.' },
      staffing: { label: 'Clinical & Frontline', title: 'Clinical and Frontline Teams', body: 'Nurse practitioners, case managers, outreach specialists, community health workers and front desk staff. The people your clients actually meet.' },
      equityHiring: { label: 'Equity-Centered Hiring', title: 'Hiring Practices That Hold Up', body: 'Job descriptions, interview panels and scoring rubrics rebuilt so the pool widens and the bias narrows.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.en,
      heading: 'Meet Who Leads Your Search',
      bio: 'Ace Robinson, M.P.H., M.H.L., has spent two decades building the teams behind HIV, mpox and public health programs. He serves as Acting Director of Duke University’s Sexual & Gender Minority Wellness program, co-chairs the Federal AIDS Policy Partnership, sits on the UCLA CHIPTS steering committee, and chairs the Brown University Advisory Council to Eliminate Anti-Black Racism. His commentary on HIV policy and leadership appears regularly in TheBody and TheBodyPro.',
      quoteText: 'Building an exceptional team requires strategy, consistency, and dedication to find the best candidates, get them through the door, and ensure they stay.',
      linkedin: 'LinkedIn',
      writing: 'His Writing on TheBody',
      listen: 'Hear Him Speak'
    },
    prepare: {
      heading1: 'How we handle the heavy lifting',
      text1: 'We handle the heavy lifting so you can select from a pool of well-qualified, vocationally focused candidates who’ve bought into your mission and vision. Equity Is the Word takes this most vital component off your hands and puts the best candidates in your palms.',
      heading2: 'Where we recruit',
      text2: 'We recruit across the US, Latin America, Sub-Saharan Africa and Southeast Asia, in English, French, Spanish or Portuguese, for on-site, remote and hybrid roles alike.'
    },
    team: {
      heading: 'Who else supports your search',
      subtext: 'Collective members who’ve built and kept the teams they’re advising on.'
    },
    faqs: [
      { q: 'How long does a search usually take?', a: 'Six to twelve weeks for most leadership roles, depending on how narrow the candidate pool is and how many rounds your process runs.' },
      { q: 'Do you only recruit for clinical roles?', a: 'No. We fill the whole org chart, from Chief Medical Officer to front desk. Clinical, administrative, finance and outreach roles all come through us.' },
      { q: 'Can you help us fix a hiring process that keeps producing the same kind of candidate?', a: 'Yes, and it’s often the fastest fix. We audit job postings, panels and scoring criteria before we ever open a search.' },
      { q: 'Do you charge a retainer or a placement fee?', a: 'Either, depending on the role and the timeline. We’ll tell you which one actually costs you less.' }
    ],
    cta: {
      heading: 'Hiring for a critical role?',
      text: 'Send us the role, the timeline and what this hire needs to deliver. You’ll hear back within a week.'
    },
    heroAlt: 'Two colleagues reviewing a candidate profile together'
  },
  fr: {
    hero: {
      title: 'Recrutement en Santé',
      text: 'La méfiance envers le système de santé n’a jamais été aussi forte. La réactivité de votre personnel envers les patients doit l’être tout autant. Trouver des personnes en qui vos patients peuvent avoir confiance demande de l’expertise.',
      tags: ['Recherche de Cadres', 'Recrutement de Terrain'],
      button: 'Lancer une Recherche'
    },
    formats: {
      heading: 'Chaque poste que vous devez pourvoir',
      subtext: 'Directeur médical, contrôleur de gestion, infirmier praticien, agent de proximité, réceptionniste. Vous ne pouvez pas vous permettre d’embaucher quelqu’un qui ne comprend pas et n’accueille pas votre patientèle.',
      executiveSearch: { label: 'Recherche de Cadres', title: 'Postes de Direction et d’Encadrement', body: 'Directeurs médicaux, contrôleurs de gestion, directeurs généraux et cadres cliniques supérieurs. Nous évaluons l’adhésion à la mission aussi rigoureusement que le CV.' },
      staffing: { label: 'Clinique et Terrain', title: 'Équipes Cliniques et de Terrain', body: 'Infirmiers praticiens, gestionnaires de cas, agents de proximité, agents de santé communautaire et personnel d’accueil. Les personnes que vos patients rencontrent vraiment.' },
      equityHiring: { label: 'Recrutement Équitable', title: 'Des Pratiques de Recrutement Solides', body: 'Descriptions de poste, comités d’entretien et grilles de notation refondus pour élargir le vivier et réduire les biais.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.fr,
      heading: 'Découvrez Qui Dirige Votre Recherche',
      bio: 'Ace Robinson, M.P.H., M.H.L., constitue depuis vingt ans les équipes derrière les programmes de lutte contre le VIH, le mpox et la santé publique. Il est directeur par intérim du programme de bien-être des minorités sexuelles et de genre de l’Université Duke, co-préside le Federal AIDS Policy Partnership, siège au comité directeur de l’UCLA CHIPTS et préside le Brown University Advisory Council to Eliminate Anti-Black Racism. Ses analyses sur les politiques et le leadership en matière de VIH paraissent régulièrement dans TheBody et TheBodyPro.',
      quoteText: 'Bâtir une équipe exceptionnelle exige de la stratégie, de la constance et de la détermination : trouver les meilleurs candidats, les faire entrer, et faire en sorte qu’ils restent.',
      linkedin: 'LinkedIn',
      writing: 'Ses Écrits sur TheBody',
      listen: 'Écoutez-le'
    },
    prepare: {
      heading1: 'Nous nous chargeons du gros du travail',
      text1: 'Nous nous chargeons du gros du travail pour que vous puissiez choisir parmi un vivier de candidats qualifiés et véritablement engagés, qui adhèrent à votre mission et à votre vision. Equity Is the Word vous décharge de cette étape essentielle et vous présente directement les meilleurs candidats.',
      heading2: 'Où nous recrutons',
      text2: 'Nous recrutons aux États-Unis, en Amérique latine, en Afrique subsaharienne et en Asie du Sud-Est, en anglais, français, espagnol ou portugais, pour des postes sur site, à distance ou hybrides.'
    },
    team: {
      heading: 'Qui d’autre soutient votre recherche',
      subtext: 'Des membres du collectif qui ont constitué et fidélisé les équipes dont ils parlent.'
    },
    faqs: [
      { q: 'Combien de temps dure généralement une recherche ?', a: 'Six à douze semaines pour la plupart des postes de direction, selon l’étroitesse du vivier de candidats et le nombre d’étapes de votre processus.' },
      { q: 'Recrutez-vous uniquement pour des postes cliniques ?', a: 'Non. Nous pourvoyons tout l’organigramme, du directeur médical à l’accueil. Les postes cliniques, administratifs, financiers et de proximité passent tous par nous.' },
      { q: 'Pouvez-vous nous aider à corriger un processus de recrutement qui produit toujours le même type de candidat ?', a: 'Oui, et c’est souvent la correction la plus rapide. Nous auditons les offres d’emploi, les comités et les critères de notation avant même d’ouvrir une recherche.' },
      { q: 'Facturez-vous un forfait ou des honoraires au placement ?', a: 'L’un ou l’autre, selon le poste et le calendrier. Nous vous dirons lequel vous coûtera réellement le moins cher.' }
    ],
    cta: {
      heading: 'Vous recrutez pour un poste clé ?',
      text: 'Envoyez-nous le poste, le calendrier et ce que cette embauche doit apporter. Vous aurez une réponse sous une semaine.'
    },
    heroAlt: 'Deux collègues examinant ensemble le profil d’un candidat'
  },
  es: {
    hero: {
      title: 'Reclutamiento en Salud',
      text: 'La desconfianza médica está en su punto más alto. La capacidad de respuesta de tu personal ante los pacientes tiene que estarlo también. Encontrar personas en quienes tu clientela pueda confiar requiere experiencia.',
      tags: ['Búsqueda de Ejecutivos', 'Contratación de Primera Línea'],
      button: 'Iniciar una Búsqueda'
    },
    formats: {
      heading: 'Cada puesto que necesitas cubrir',
      subtext: 'Director médico, contralor, enfermero practicante, especialista en alcance comunitario, recepcionista. No puedes permitirte contratar a alguien que no entienda ni reciba bien a tu clientela.',
      executiveSearch: { label: 'Búsqueda de Ejecutivos', title: 'Puestos de Dirección y Liderazgo', body: 'Directores médicos, contralores, directores ejecutivos y líderes clínicos senior. Evaluamos el compromiso con la misión con el mismo rigor que el currículum.' },
      staffing: { label: 'Clínico y Primera Línea', title: 'Equipos Clínicos y de Primera Línea', body: 'Enfermeros practicantes, gestores de casos, especialistas en alcance comunitario, promotores de salud y personal de recepción. Las personas que tu clientela realmente conoce.' },
      equityHiring: { label: 'Contratación Equitativa', title: 'Prácticas de Contratación Que Resisten', body: 'Descripciones de puesto, paneles de entrevista y rúbricas de evaluación reconstruidos para ampliar el grupo de candidatos y reducir el sesgo.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.es,
      heading: 'Conoce Quién Lidera tu Búsqueda',
      bio: 'Ace Robinson, M.P.H., M.H.L., lleva dos décadas formando los equipos detrás de programas de VIH, mpox y salud pública. Es Director Interino del programa de bienestar de minorías sexuales y de género de la Universidad Duke, copreside la Federal AIDS Policy Partnership, integra el comité directivo de UCLA CHIPTS y preside el Brown University Advisory Council to Eliminate Anti-Black Racism. Sus análisis sobre política de VIH y liderazgo aparecen regularmente en TheBody y TheBodyPro.',
      quoteText: 'Construir un equipo excepcional exige estrategia, constancia y dedicación: encontrar a los mejores candidatos, lograr que entren por la puerta y asegurar que se queden.',
      linkedin: 'LinkedIn',
      writing: 'Sus Artículos en TheBody',
      listen: 'Escúchalo'
    },
    prepare: {
      heading1: 'Nosotros hacemos el trabajo pesado',
      text1: 'Hacemos el trabajo pesado para que puedas elegir entre un grupo de candidatos bien calificados y verdaderamente comprometidos, que han hecho suya tu misión y tu visión. Equity Is the Word se encarga de esta pieza vital y te pone a los mejores candidatos en las manos.',
      heading2: 'Dónde reclutamos',
      text2: 'Reclutamos en Estados Unidos, América Latina, África subsahariana y el Sudeste Asiático, en inglés, francés, español o portugués, para puestos presenciales, remotos e híbridos por igual.'
    },
    team: {
      heading: 'Quién más apoya tu búsqueda',
      subtext: 'Miembros del colectivo que han formado y retenido los equipos sobre los que asesoran.'
    },
    faqs: [
      { q: '¿Cuánto dura normalmente una búsqueda?', a: 'Entre seis y doce semanas para la mayoría de los puestos de liderazgo, según lo reducido del grupo de candidatos y cuántas rondas tenga tu proceso.' },
      { q: '¿Solo reclutan para puestos clínicos?', a: 'No. Cubrimos todo el organigrama, desde el director médico hasta la recepción. Puestos clínicos, administrativos, financieros y de alcance comunitario pasan todos por nosotros.' },
      { q: '¿Pueden ayudarnos a corregir un proceso de contratación que siempre produce el mismo tipo de candidato?', a: 'Sí, y suele ser la corrección más rápida. Auditamos las publicaciones de empleo, los paneles y los criterios de evaluación antes incluso de abrir una búsqueda.' },
      { q: '¿Cobran un retainer o una tarifa por colocación?', a: 'Cualquiera de los dos, según el puesto y el cronograma. Te diremos cuál te sale más barato en realidad.' }
    ],
    cta: {
      heading: '¿Están contratando para un puesto clave?',
      text: 'Envíanos el puesto, el cronograma y lo que esta contratación debe lograr. Tendrás respuesta en una semana.'
    },
    heroAlt: 'Dos colegas revisando juntos el perfil de un candidato'
  },
  pt: {
    hero: {
      title: 'Recrutamento em Saúde',
      text: 'A desconfiança médica está no nível mais alto de todos os tempos. A capacidade de resposta da sua equipe aos pacientes precisa estar também. Encontrar pessoas em quem sua clientela confie exige experiência.',
      tags: ['Busca de Executivos', 'Contratação de Linha de Frente'],
      button: 'Iniciar uma Busca'
    },
    formats: {
      heading: 'Cada cargo que você precisa preencher',
      subtext: 'Diretor médico, controller, enfermeiro, especialista em alcance comunitário, recepcionista. Você não pode se dar ao luxo de contratar alguém que não entenda e não acolha sua clientela.',
      executiveSearch: { label: 'Busca de Executivos', title: 'Cargos de Direção e Liderança', body: 'Diretores médicos, controllers, diretores executivos e líderes clínicos sênior. Avaliamos o compromisso com a missão com o mesmo rigor que o currículo.' },
      staffing: { label: 'Clínico e Linha de Frente', title: 'Equipes Clínicas e de Linha de Frente', body: 'Enfermeiros, gestores de caso, especialistas em alcance comunitário, agentes comunitários de saúde e equipe de recepção. As pessoas que sua clientela realmente encontra.' },
      equityHiring: { label: 'Contratação Equitativa', title: 'Práticas de Contratação Que Se Sustentam', body: 'Descrições de vaga, painéis de entrevista e critérios de avaliação reconstruídos para ampliar o grupo de candidatos e reduzir o viés.' }
    },
    lead: {
      eyebrow: shared.whoLeadsThisWork.pt,
      heading: 'Conheça Quem Lidera Sua Busca',
      bio: 'Ace Robinson, M.P.H., M.H.L., passou duas décadas formando as equipes por trás de programas de HIV, mpox e saúde pública. É Diretor Interino do programa de bem-estar de minorias sexuais e de gênero da Universidade Duke, copreside a Federal AIDS Policy Partnership, integra o comitê diretor da UCLA CHIPTS e preside o Brown University Advisory Council to Eliminate Anti-Black Racism. Seus textos sobre política de HIV e liderança são publicados regularmente na TheBody e na TheBodyPro.',
      quoteText: 'Construir uma equipe excepcional exige estratégia, consistência e dedicação: encontrar os melhores candidatos, fazê-los entrar pela porta e garantir que fiquem.',
      linkedin: 'LinkedIn',
      writing: 'Seus Textos na TheBody',
      listen: 'Ouça-o'
    },
    prepare: {
      heading1: 'Nós fazemos o trabalho pesado',
      text1: 'Fazemos o trabalho pesado para que você possa escolher entre um grupo de candidatos bem qualificados e verdadeiramente comprometidos, que compraram a sua missão e a sua visão. A Equity Is the Word tira essa peça vital das suas mãos e coloca os melhores candidatos na sua frente.',
      heading2: 'Onde recrutamos',
      text2: 'Recrutamos nos Estados Unidos, América Latina, África Subsaariana e Sudeste Asiático, em inglês, francês, espanhol ou português, para vagas presenciais, remotas e híbridas.'
    },
    team: {
      heading: 'Quem mais apoia sua busca',
      subtext: 'Membros do coletivo que construíram e mantiveram as equipes sobre as quais orientam.'
    },
    faqs: [
      { q: 'Quanto tempo costuma durar uma busca?', a: 'De seis a doze semanas para a maioria dos cargos de liderança, dependendo de quão restrito é o grupo de candidatos e de quantas etapas seu processo tem.' },
      { q: 'Vocês recrutam apenas para cargos clínicos?', a: 'Não. Preenchemos todo o organograma, do diretor médico à recepção. Cargos clínicos, administrativos, financeiros e de alcance comunitário passam todos por nós.' },
      { q: 'Vocês podem nos ajudar a corrigir um processo de contratação que sempre produz o mesmo tipo de candidato?', a: 'Sim, e geralmente é a correção mais rápida. Auditamos vagas publicadas, painéis e critérios de avaliação antes mesmo de abrir uma busca.' },
      { q: 'Vocês cobram um retainer ou uma taxa por colocação?', a: 'Qualquer um dos dois, dependendo do cargo e do cronograma. Diremos qual realmente sai mais barato para você.' }
    ],
    cta: {
      heading: 'Está contratando para um cargo crítico?',
      text: 'Envie-nos o cargo, o cronograma e o que essa contratação precisa entregar. Você terá retorno em uma semana.'
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
    <h1 class="hero-title" style="max-width:14ch">${t.hero.title}</h1>
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
        <h3 class="format-title" id="clinical-frontline">${t.formats.staffing.title}</h3>
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
      en: 'Healthcare Recruitment',
      fr: 'Recrutement en Santé',
      es: 'Reclutamiento en Salud',
      pt: 'Recrutamento em Saúde'
    },
    description: {
      en: 'Executive search and frontline hiring for healthcare organizations, from Chief Medical Officer to front desk. We handle the heavy lifting so you choose from candidates who have bought into your mission.',
      fr: 'Recherche de cadres et recrutement de terrain pour les organisations de santé, du directeur médical à l’accueil. Nous nous chargeons du gros du travail pour que vous choisissiez parmi des candidats acquis à votre mission.',
      es: 'Búsqueda de ejecutivos y contratación de primera línea para organizaciones de salud, del director médico a la recepción. Hacemos el trabajo pesado para que elijas entre candidatos comprometidos con tu misión.',
      pt: 'Busca de executivos e contratação de linha de frente para organizações de saúde, do diretor médico à recepção. Fazemos o trabalho pesado para que você escolha entre candidatos comprometidos com sua missão.'
    },
    ogImage: 'recruitment'
  },
  main
};
