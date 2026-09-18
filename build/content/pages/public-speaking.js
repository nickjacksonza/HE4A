const { picture, personPhoto, accordion, teamCard, testimonialsSection, href } = require('../../helpers');
const shared = require('../shared');
const people = require('../people');

const TEAM_META = [{ name: 'Eduardo Culbeaux' }];

const SPEAKER_LINKS = {
  linkedin: 'https://www.linkedin.com/in/akeliah/',
  writing: 'https://www.thebody.com/author/ace-robinson',
  listen: 'https://soundcloud.com/user-499494424/ace-robinson-administrative-and-policy-communicable-disease-advocate'
};

const COPY = {
  en: {
    hero: {
      title: 'Public Speaking',
      text: 'Conferences, convenings and closed-door briefings. Every talk is written for the room it’ll be delivered in, for the audience you’ve actually gathered.',
      tags: ['Keynote', 'Moderating'],
      button: 'Check Availability'
    },
    formats: {
      heading: 'What we can bring to your event',
      subtext: 'Book any format on its own, or all three across a full program.',
      keynote: { label: 'Keynote', title: 'Opening or Closing Address', body: 'Thirty to forty-five minutes on health equity, HIV policy, or leading through political hostility, written against the theme you’ve set.' },
      moderating: { label: 'Moderating', title: 'Panels and Plenaries', body: 'Preparation calls with every panelist, a running order that holds up, and a moderator who keeps the conversation moving and truthful.' },
      briefing: { label: 'Briefing', title: 'Board and Funder Sessions', body: 'Closed-room briefings for trustees, funders and government teams who need the evidence and the case for action in one sitting.' }
    },
    speaker: {
      eyebrow: 'On Stage',
      heading: 'Meet Your Speaker',
      bio: 'Ace Robinson, M.P.H., M.H.L., is a leading administrative and policy communicable disease advocate and population health expert, working across HIV, mpox, COVID-19, tuberculosis and malaria. He co-chairs the Federal AIDS Policy Partnership, sits on the UCLA CHIPTS steering committee, and chairs the Brown University Advisory Council to Eliminate Anti-Black Racism. His commentary on HIV policy and leadership appears regularly in TheBody and TheBodyPro.',
      quoteText: 'Achieving health equity is hard. Sometimes it means we have to go over, under, around or through challenges.',
      linkedin: 'LinkedIn',
      writing: 'His Writing on TheBody',
      listen: 'Hear Him Speak'
    },
    prepare: {
      heading1: 'How we prepare',
      text1: 'We ask for the audience list, the decision the convening is meant to produce, and whatever the organizers would rather not have said out loud. That last one usually matters most. It tells us where the conversation actually needs to go.',
      heading2: 'Languages and logistics',
      text2: "Talks are delivered in English, French, Spanish or Portuguese. We work with interpreters where the audience needs it. Three months' lead time is comfortable; we hold short-notice capacity for policy moments and community convenings."
    },
    team: {
      heading: 'Who else takes the stage',
      subtext: 'More speakers with a record in the rooms you’re convening.',
      role2: 'Moderation & Media · Southeast Asia',
      bio2: 'Educator for over a decade, empowering youth through journalism programs. Moderates youth and media-facing sessions.'
    },
    faqs: [
      { q: 'How far ahead should we book?', a: 'Three months is comfortable. We hold a small amount of short-notice capacity for community convenings and policy moments that cannot wait.' },
      { q: 'Do you speak at events without a fee?', a: 'Yes, selectively. Community-led convenings and youth programs in particular. Travel and accommodation still need to be covered.' },
      { q: 'Can you tailor a talk to our theme?', a: 'That’s the default. We ask for the program, the audience list and the outcome the convening needs to produce, then write against all three.' },
      { q: 'Will you appear on a panel you are not moderating?', a: 'Yes, provided equity runs through the program instead of being parked on one panel. If that panel is the only place it shows up, we’ll say so, and we can help you fix it.' }
    ],
    cta: {
      heading: 'Have an event coming up?',
      text: 'Send us the dates, the audience and the outcome you need. We’ll confirm availability within a week.'
    },
    heroAlt: 'A collective member speaking on a panel'
  },
  fr: {
    hero: {
      title: 'Prise de Parole Publique',
      text: 'Conférences, rassemblements et briefings à huis clos. Chaque intervention est écrite pour la salle où elle sera livrée, pour le public que vous avez réellement réuni.',
      tags: ['Conférence Principale', 'Modération'],
      button: 'Vérifier la Disponibilité'
    },
    formats: {
      heading: 'Ce que nous pouvons apporter à votre événement',
      subtext: 'Réservez un format seul, ou les trois sur un programme complet.',
      keynote: { label: 'Conférence', title: "Discours d'Ouverture ou de Clôture", body: "Trente à quarante-cinq minutes sur l'équité en santé, les politiques sur le VIH, ou diriger face à l'hostilité politique, écrit selon le thème que vous avez fixé." },
      moderating: { label: 'Modération', title: 'Panels et Plénières', body: "Appels de préparation avec chaque panelliste, un déroulé qui tient la route, et un modérateur qui garde la conversation vivante et franche." },
      briefing: { label: 'Briefing', title: 'Séances pour Conseils et Bailleurs', body: "Briefings à huis clos pour administrateurs, bailleurs et équipes gouvernementales qui ont besoin des preuves et de l'argumentaire d'action en une seule séance." }
    },
    speaker: {
      eyebrow: 'Sur Scène',
      heading: 'Découvrez Votre Intervenant',
      bio: "Ace Robinson, M.P.H., M.H.L., est un défenseur reconnu des politiques en matière de maladies transmissibles et un expert en santé des populations, intervenant sur le VIH, le mpox, la COVID-19, la tuberculose et le paludisme. Il est co-président du Federal AIDS Policy Partnership, membre du comité directeur de l'UCLA CHIPTS, et préside le Brown University Advisory Council to Eliminate Anti-Black Racism. Ses analyses sur les politiques et le leadership en matière de VIH paraissent régulièrement dans TheBody et TheBodyPro.",
      quoteText: "Atteindre l'équité en santé est difficile. Parfois, il faut passer par-dessus, par-dessous, autour ou à travers les obstacles.",
      linkedin: 'LinkedIn',
      writing: 'Ses Écrits sur TheBody',
      listen: 'Écoutez-le'
    },
    prepare: {
      heading1: 'Comment nous nous préparons',
      text1: "Nous demandons la liste du public, la décision que le rassemblement doit produire, et ce que les organisateurs préféreraient ne pas dire tout haut. Ce dernier point est généralement le plus important. Il nous indique où la conversation doit réellement aller.",
      heading2: 'Langues et logistique',
      text2: "Les interventions se font en anglais, français, espagnol ou portugais. Nous travaillons avec des interprètes si le public en a besoin. Un délai de trois mois est confortable ; nous réservons une capacité de dernière minute pour les moments politiques et les rassemblements communautaires."
    },
    team: {
      heading: 'Qui Monte Aussi sur Scène',
      subtext: 'D’autres intervenants ayant fait leurs preuves dans les salles que vous réunissez.',
      role2: 'Modération et Médias · Asie du Sud-Est',
      bio2: "Éducateur depuis plus de dix ans, donnant aux jeunes les moyens d'agir par des programmes de journalisme. Anime des séances destinées aux jeunes et aux médias."
    },
    faqs: [
      { q: 'Combien de temps à l’avance devons-nous réserver ?', a: "Trois mois, c'est confortable. Nous réservons une petite capacité de dernière minute pour les rassemblements communautaires et les moments politiques qui ne peuvent attendre." },
      { q: 'Intervenez-vous sans frais lors d’événements ?', a: "Oui, de manière sélective. Notamment les rassemblements menés par la communauté et les programmes jeunesse. Les frais de voyage et d'hébergement restent à couvrir." },
      { q: 'Pouvez-vous adapter une intervention à notre thème ?', a: "C'est la norme. Nous demandons le programme, la liste du public et le résultat attendu du rassemblement, puis nous écrivons en fonction des trois." },
      { q: 'Participerez-vous à un panel que vous ne modérez pas ?', a: "Oui, à condition que l'équité traverse tout le programme au lieu d'être reléguée à un seul panel. Si c'est le seul endroit où elle apparaît, nous le dirons, et nous pouvons vous aider à y remédier." }
    ],
    cta: {
      heading: 'Un événement approche ?',
      text: 'Envoyez-nous les dates, le public et le résultat souhaité. Nous confirmerons la disponibilité dans la semaine.'
    },
    heroAlt: 'Un membre du collectif s’exprimant lors d’un panel'
  },
  es: {
    hero: {
      title: 'Oratoria Pública',
      text: 'Conferencias, encuentros y sesiones a puerta cerrada. Cada charla se escribe para la sala en la que se presentará, para la audiencia que realmente reuniste.',
      tags: ['Conferencia Magistral', 'Moderación'],
      button: 'Consultar Disponibilidad'
    },
    formats: {
      heading: 'Lo que podemos aportar a tu evento',
      subtext: 'Reserva un formato solo, o los tres en un programa completo.',
      keynote: { label: 'Conferencia', title: 'Discurso de Apertura o Cierre', body: 'De treinta a cuarenta y cinco minutos sobre equidad en salud, política de VIH, o liderazgo frente a la hostilidad política, escrito según el tema que hayas fijado.' },
      moderating: { label: 'Moderación', title: 'Paneles y Plenarias', body: 'Llamadas de preparación con cada panelista, un orden del día que se sostiene, y un moderador que mantiene la conversación viva y franca.' },
      briefing: { label: 'Sesión Informativa', title: 'Sesiones para Juntas y Financiadores', body: 'Sesiones a puerta cerrada para fiduciarios, financiadores y equipos gubernamentales que necesitan la evidencia y los argumentos de acción en una sola sesión.' }
    },
    speaker: {
      eyebrow: 'En Escena',
      heading: 'Conoce a Tu Orador',
      bio: 'Ace Robinson, M.P.H., M.H.L., es un destacado defensor de políticas en enfermedades transmisibles y experto en salud poblacional, con trabajo en VIH, mpox, COVID-19, tuberculosis y malaria. Es copresidente de la Federal AIDS Policy Partnership, integra el comité directivo de UCLA CHIPTS y preside el Brown University Advisory Council to Eliminate Anti-Black Racism. Sus análisis sobre política de VIH y liderazgo aparecen regularmente en TheBody y TheBodyPro.',
      quoteText: 'Lograr la equidad en salud es difícil. A veces significa que debemos pasar por encima, por debajo, alrededor o a través de los obstáculos.',
      linkedin: 'LinkedIn',
      writing: 'Sus Artículos en TheBody',
      listen: 'Escúchalo'
    },
    prepare: {
      heading1: 'Cómo nos preparamos',
      text1: 'Solicitamos la lista de audiencia, la decisión que el encuentro debe producir, y lo que los organizadores prefieren no decir en voz alta. Este último punto suele ser el más importante. Nos indica hacia dónde tiene que ir realmente la conversación.',
      heading2: 'Idiomas y logística',
      text2: 'Las charlas se ofrecen en inglés, francés, español o portugués. Trabajamos con intérpretes cuando la audiencia lo necesita. Tres meses de antelación es cómodo; reservamos capacidad de último momento para momentos políticos y encuentros comunitarios.'
    },
    team: {
      heading: 'Quién Más Sube al Escenario',
      subtext: 'Más oradores con trayectoria en las salas que estás convocando.',
      role2: 'Moderación y Medios · Sudeste Asiático',
      bio2: 'Educador durante más de una década, empoderando a jóvenes a través de programas de periodismo. Modera sesiones dirigidas a jóvenes y medios.'
    },
    faqs: [
      { q: '¿Con cuánta anticipación debemos reservar?', a: 'Tres meses es cómodo. Reservamos una pequeña capacidad de último momento para encuentros comunitarios y momentos políticos que no pueden esperar.' },
      { q: '¿Hablan en eventos sin cobrar honorarios?', a: 'Sí, de forma selectiva. Especialmente encuentros liderados por la comunidad y programas juveniles. Los gastos de viaje y alojamiento aún deben cubrirse.' },
      { q: '¿Pueden adaptar una charla a nuestro tema?', a: 'Eso es lo habitual. Pedimos el programa, la lista de audiencia y el resultado que el encuentro necesita producir, y luego escribimos en función de los tres.' },
      { q: '¿Participarán en un panel que no están moderando?', a: 'Sí, siempre que la equidad atraviese todo el programa en lugar de quedar confinada a un solo panel. Si es el único lugar donde aparece, lo diremos, y podemos ayudarte a solucionarlo.' }
    ],
    cta: {
      heading: '¿Tienes un evento próximo?',
      text: 'Envíanos las fechas, la audiencia y el resultado que necesitas. Confirmaremos disponibilidad en una semana.'
    },
    heroAlt: 'Un miembro del colectivo hablando en un panel'
  },
  pt: {
    hero: {
      title: 'Oratória Pública',
      text: 'Conferências, encontros e reuniões a portas fechadas. Cada palestra é escrita para a sala em que será apresentada, para o público que você realmente reuniu.',
      tags: ['Palestra Principal', 'Moderação'],
      button: 'Verificar Disponibilidade'
    },
    formats: {
      heading: 'O que podemos trazer para o seu evento',
      subtext: 'Reserve um formato sozinho, ou os três em um programa completo.',
      keynote: { label: 'Palestra', title: 'Discurso de Abertura ou Encerramento', body: 'De trinta a quarenta e cinco minutos sobre equidade em saúde, política de HIV, ou liderança diante da hostilidade política, escrito conforme o tema que você definiu.' },
      moderating: { label: 'Moderação', title: 'Painéis e Plenárias', body: 'Chamadas de preparação com cada painelista, uma ordem de trabalhos que se sustenta, e um moderador que mantém a conversa viva e franca.' },
      briefing: { label: 'Briefing', title: 'Sessões para Conselhos e Financiadores', body: 'Reuniões a portas fechadas para conselheiros, financiadores e equipes governamentais que precisam das evidências e do argumento de ação em uma única sessão.' }
    },
    speaker: {
      eyebrow: 'No Palco',
      heading: 'Conheça Seu Palestrante',
      bio: 'Ace Robinson, M.P.H., M.H.L., é um renomado defensor de políticas em doenças transmissíveis e especialista em saúde populacional, atuando em HIV, mpox, COVID-19, tuberculose e malária. É copresidente da Federal AIDS Policy Partnership, integra o comitê diretor da UCLA CHIPTS e preside o Brown University Advisory Council to Eliminate Anti-Black Racism. Seus textos sobre política de HIV e liderança são publicados regularmente na TheBody e na TheBodyPro.',
      quoteText: 'Alcançar a equidade em saúde é difícil. Por vezes, significa que precisamos passar por cima, por baixo, ao redor ou através dos obstáculos.',
      linkedin: 'LinkedIn',
      writing: 'Seus Textos na TheBody',
      listen: 'Ouça-o'
    },
    prepare: {
      heading1: 'Como nos preparamos',
      text1: 'Pedimos a lista de público, a decisão que o encontro deve produzir, e aquilo que os organizadores prefeririam não dizer em voz alta. Esse último ponto costuma ser o mais importante. Ele nos diz para onde a conversa realmente precisa ir.',
      heading2: 'Idiomas e logística',
      text2: 'As palestras são proferidas em inglês, francês, espanhol ou português. Trabalhamos com intérpretes quando o público precisa. Três meses de antecedência é confortável; mantemos capacidade de última hora para momentos políticos e encontros comunitários.'
    },
    team: {
      heading: 'Quem Mais Sobe ao Palco',
      subtext: 'Mais palestrantes com histórico nas salas que você está reunindo.',
      role2: 'Moderação e Mídia · Sudeste Asiático',
      bio2: 'Educador por mais de uma década, capacitando jovens por meio de programas de jornalismo. Modera sessões voltadas a jovens e mídia.'
    },
    faqs: [
      { q: 'Com quanta antecedência devemos reservar?', a: 'Três meses é confortável. Mantemos uma pequena capacidade de última hora para encontros comunitários e momentos políticos que não podem esperar.' },
      { q: 'Vocês falam em eventos sem cobrar honorários?', a: 'Sim, de forma seletiva. Especialmente encontros liderados pela comunidade e programas para jovens. Despesas de viagem e hospedagem ainda precisam ser cobertas.' },
      { q: 'Podem adaptar uma palestra ao nosso tema?', a: 'Esse é o padrão. Pedimos o programa, a lista de público e o resultado que o encontro precisa produzir, e escrevemos com base nos três.' },
      { q: 'Vocês participam de um painel que não estão moderando?', a: 'Sim, desde que a equidade atravesse todo o programa em vez de ficar restrita a um único painel. Se for o único lugar onde ela aparece, diremos isso, e podemos ajudar a corrigir.' }
    ],
    cta: {
      heading: 'Tem um evento chegando?',
      text: 'Envie-nos as datas, o público e o resultado que você precisa. Confirmaremos a disponibilidade em uma semana.'
    },
    heroAlt: 'Um membro do coletivo falando em um painel'
  }
};

function main(locale) {
  const t = COPY[locale];
  const shared_ = { home: shared.breadcrumbHome[locale], services: shared.servicesEyebrow[locale] };

  return `<section class="hero">
  ${picture({ name: 'panel-speaking', widths: [640, 960, 1200], sizes: '100vw', alt: t.heroAlt, imgClass: 'hero-media', priority: true })}
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
        <div class="format-label">${t.formats.keynote.label}</div>
        <h3 class="format-title" id="keynote">${t.formats.keynote.title}</h3>
        <p class="format-text">${t.formats.keynote.body}</p>
      </div>
      <div class="format-card format-card--blossom">
        <div class="format-label">${t.formats.moderating.label}</div>
        <h3 class="format-title" id="moderating">${t.formats.moderating.title}</h3>
        <p class="format-text">${t.formats.moderating.body}</p>
      </div>
      <div class="format-card format-card--paper">
        <div class="format-label">${t.formats.briefing.label}</div>
        <h3 class="format-title">${t.formats.briefing.title}</h3>
        <p class="format-text">${t.formats.briefing.body}</p>
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
      <span class="eyebrow eyebrow--on-blossom">${t.speaker.eyebrow}</span>
      <h2 class="section-heading">${t.speaker.heading}</h2>
      <p class="speaker-feature-name">Ace Robinson, M.P.H., M.H.L.</p>
      <p class="speaker-feature-bio">${t.speaker.bio}</p>
      <p class="quote-text quote-text--feature">“${t.speaker.quoteText}”</p>
      <div class="social-links">
        <a href="${SPEAKER_LINKS.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer">${t.speaker.linkedin}</a>
        <a href="${SPEAKER_LINKS.writing}" class="social-link" target="_blank" rel="noopener noreferrer">${t.speaker.writing}</a>
        <a href="${SPEAKER_LINKS.listen}" class="social-link" target="_blank" rel="noopener noreferrer">${t.speaker.listen}</a>
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
      ${teamCard({ name: TEAM_META[0].name, role: t.team.role2, bio: t.team.bio2 }, locale)}
      ${teamCard({ name: people.stephenPlaceholder.name, role: people.stephenPlaceholder.teamRole[locale], bio: people.stephenPlaceholder.bio[locale] }, locale)}
    </div>
  </div>
</section>

${testimonialsSection(locale)}

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">${shared.commonQuestions[locale]}</h2>
    ${accordion(t.faqs, 'ps-faq')}
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
  slug: 'public-speaking',
  outputFile: 'public-speaking.html',
  activeNavId: 'publicSpeaking',
  meta: {
    title: {
      en: 'Public Speaking',
      fr: 'Prise de Parole Publique',
      es: 'Oratoria Pública',
      pt: 'Oratória Pública'
    },
    description: {
      en: 'Keynotes, panel moderation and closed-door briefings on health equity, written for the audience and the outcome each room actually needs.',
      fr: 'Conférences, modération de panels et briefings à huis clos sur l’équité en santé, écrits pour le public et le résultat que chaque salle exige réellement.',
      es: 'Conferencias magistrales, moderación de paneles y sesiones a puerta cerrada sobre equidad en salud, escritas para la audiencia y el resultado que cada sala realmente necesita.',
      pt: 'Palestras, moderação de painéis e reuniões a portas fechadas sobre equidade em saúde, escritas para o público e o resultado que cada sala realmente precisa.'
    },
    ogImage: 'public-speaking'
  },
  main
};
