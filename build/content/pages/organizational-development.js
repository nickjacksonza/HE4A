const { picture, accordion, teamCard, testimonialsSection, href } = require('../../helpers');
const shared = require('../shared');
const people = require('../people');

const TEAM_META = [{ name: 'Lucy Wanjiku Njenga' }, { name: 'Diego Calixto' }];

const COPY = {
  en: {
    hero: {
      title: 'Organizational Development',
      text: 'Good programs need good infrastructure behind them. We build the oversight, messaging, policy work, proposals and financial reporting that keep your mission moving and funded well past the first grant cycle.',
      tags: ['Program Oversight', 'Communications', 'Public Policy', 'Grant Writing', 'Financial Leadership']
    },
    rows: {
      heading: 'Where organizations need support most',
      subtext: 'Four areas we get asked about most, and what you’re left holding when the work is done.',
      items: [
        { title: 'Program Oversight', body: 'Logic models, indicators and reporting rhythms that give funders what they need without turning your frontline staff into data clerks. We build systems your team can actually maintain.' },
        { title: 'Communications and Public Policy', body: 'Message architecture, spokesperson preparation and written policy positions, including testimony and consultation responses. When the room matters, you’ll know what to say and who should say it.' },
        { title: 'Grant Writing', body: 'Full proposals and a reusable narrative library, so the next application starts from your own language instead of a blank page. We’ll also review drafts in progress when a second set of eyes is all you need.' },
        { title: 'Financial Leadership', body: 'Your donors and funders have to know the fiscal health of your agency, which means you have to know it first. We get your record keeping in line, your fiscal reports submitted on time, and your cash flow strategy clear enough to pivot, reduce, or grow. It starts with a deep dive into your past, current and projected fiscal landscape.' }
      ]
    },
    howWeWork: {
      eyebrow: 'How We Work',
      quote: "We don't run parallel to your team. We work inside the systems they already use, and everything we produce is written to be maintained by the people who'll still be there next year.",
      text: "A first engagement usually opens with two weeks of listening: staff interviews, a review of current reporting, and a look at your last few funder submissions."
    },
    team: {
      subtext: 'Practitioners who’ve run the programs they’re advising on.',
      role1: 'Programs & Policy · Nairobi',
      bio1: 'HIV response leader for over a decade. Builds feminist movement infrastructure from grassroots organizations to global funding bodies.',
      role2: 'Research & Advocacy · Brasília',
      bio2: 'Activist living with HIV and researcher at Fiocruz Brasília. Leads policy analysis and evidence work across Latin America.'
    },
    faqs: [
      { q: 'Do you write grants on contingency?', a: 'No. We charge a flat fee whether or not the application gets funded. We’ll also tell you upfront if we don’t think a proposal is competitive, and help you decide whether to submit or redirect.' },
      { q: 'Can you support an organization with no communications staff?', a: 'Yes, and many of our clients are in that position. We build a message architecture and a small set of templates a program lead can maintain in a few hours a month.' },
      { q: 'What languages can deliverables be produced in?', a: 'English, French, Spanish and Portuguese. Policy submissions are drafted in the language of the receiving body.' },
      { q: 'How quickly can you start?', a: 'A scoping call within two weeks, and most engagements begin within a month. Grant deadlines are the usual exception. We hold capacity for those.' }
    ],
    cta: {
      heading: 'Have a proposal deadline coming up, or a program that needs stronger foundations?',
      text: 'Tell us what you’re working on. We’ll scope what it takes and give you a clear timeline.'
    },
    alts: {
      hero: 'Two colleagues working through a problem at a laptop',
      lab: 'A researcher at work in a laboratory',
      meeting: 'A team in discussion around a table',
      whiteboard: 'Two colleagues working through ideas on a whiteboard',
      financial: 'Two colleagues reviewing financial reports together'
    }
  },
  fr: {
    hero: {
      title: 'Développement Organisationnel',
      text: "De bons programmes exigent une bonne infrastructure. Nous construisons la supervision, la communication, les politiques, les propositions et le suivi financier qui font avancer votre mission et la maintiennent financée bien au-delà du premier cycle de subvention.",
      tags: ['Supervision de Programmes', 'Communication', 'Politiques Publiques', 'Rédaction de Subventions', 'Direction Financière']
    },
    rows: {
      heading: "Où les organisations ont le plus besoin de soutien",
      subtext: "Quatre domaines sur lesquels on nous questionne le plus, et ce qu’il vous reste en main une fois le travail terminé.",
      items: [
        { title: 'Supervision de Programmes', body: 'Modèles logiques, indicateurs et rythmes de reporting qui donnent aux bailleurs ce dont ils ont besoin sans transformer votre personnel de terrain en agents de saisie. Nous construisons des systèmes que votre équipe peut réellement maintenir.' },
        { title: 'Communication et Politiques Publiques', body: 'Architecture de message, préparation des porte-parole et prises de position politiques écrites, y compris témoignages et réponses aux consultations. Quand la salle compte, vous saurez quoi dire et qui doit le dire.' },
        { title: 'Rédaction de Demandes de Subvention', body: "Propositions complètes et bibliothèque narrative réutilisable, pour que la prochaine demande parte de vos propres mots au lieu d'une page blanche. Nous relisons aussi les brouillons en cours quand un second regard suffit." },
        { title: 'Direction Financière', body: "Vos donateurs et bailleurs doivent connaître la santé financière de votre organisation, ce qui suppose que vous la connaissiez d'abord. Nous remettons votre comptabilité en ordre, vos rapports financiers dans les délais, et votre stratégie de trésorerie assez claire pour pivoter, réduire ou croître. Cela commence par une analyse approfondie de votre paysage financier passé, actuel et projeté." }
      ]
    },
    howWeWork: {
      eyebrow: 'Notre Façon de Travailler',
      quote: "Nous ne travaillons pas en parallèle de votre équipe. Nous nous intégrons dans les systèmes qu'elle utilise déjà, et tout ce que nous produisons est écrit pour être maintenu par les personnes qui seront encore là l'année prochaine.",
      text: "Une première intervention commence généralement par deux semaines d'écoute : entretiens avec le personnel, revue des rapports actuels, et examen de vos dernières soumissions aux bailleurs."
    },
    team: {
      subtext: 'Des praticiens qui ont dirigé les programmes sur lesquels ils conseillent désormais.',
      role1: 'Programmes et Politiques · Nairobi',
      bio1: "Leader de la réponse au VIH depuis plus de dix ans. Bâtit une infrastructure de mouvement féministe, des organisations de base jusqu'aux bailleurs mondiaux.",
      role2: 'Recherche et Plaidoyer · Brasília',
      bio2: "Militant séropositif et chercheur à la Fiocruz Brasília. Dirige l'analyse des politiques et le travail de preuves à travers l'Amérique latine."
    },
    faqs: [
      { q: 'Rédigez-vous des demandes de subvention à la commission ?', a: "Non. Nous facturons un forfait fixe, que la demande soit financée ou non. Nous vous dirons aussi d'emblée si nous jugeons qu'une proposition n'est pas compétitive, et nous vous aiderons à décider de la soumettre ou de la réorienter." },
      { q: 'Pouvez-vous accompagner une organisation sans équipe communication ?', a: 'Oui, et beaucoup de nos clients sont dans cette situation. Nous construisons une architecture de message et un petit ensemble de modèles qu’un responsable de programme peut entretenir en quelques heures par mois.' },
      { q: 'Dans quelles langues les livrables peuvent-ils être produits ?', a: "Anglais, français, espagnol et portugais. Les soumissions politiques sont rédigées dans la langue de l'organisme destinataire." },
      { q: 'Combien de temps avant de commencer ?', a: 'Un appel de cadrage dans les deux semaines, et la plupart des interventions démarrent dans le mois. Les échéances de subvention sont l’exception habituelle. Nous réservons de la capacité pour celles-ci.' }
    ],
    cta: {
      heading: 'Une échéance de proposition approche, ou un programme a besoin de fondations plus solides ?',
      text: 'Dites-nous sur quoi vous travaillez. Nous évaluerons ce qu’il faut et vous donnerons un calendrier clair.'
    },
    alts: {
      hero: 'Deux collègues résolvant un problème sur un ordinateur portable',
      lab: 'Un chercheur au travail dans un laboratoire',
      meeting: 'Équipe en discussion autour d’une table',
      whiteboard: 'Deux collègues travaillant sur des idées devant un tableau blanc',
      financial: 'Deux collègues examinant ensemble des rapports financiers'
    }
  },
  es: {
    hero: {
      title: 'Desarrollo Organizacional',
      text: 'Los buenos programas necesitan una buena infraestructura detrás. Construimos la supervisión, la comunicación, el trabajo de políticas, las propuestas y el reporte financiero que mantienen tu misión en marcha y financiada mucho más allá del primer ciclo de subvención.',
      tags: ['Supervisión de Programas', 'Comunicaciones', 'Política Pública', 'Redacción de Subvenciones', 'Liderazgo Financiero']
    },
    rows: {
      heading: 'Dónde las organizaciones necesitan más apoyo',
      subtext: 'Cuatro áreas sobre las que más nos preguntan, y lo que te queda en las manos cuando el trabajo está hecho.',
      items: [
        { title: 'Supervisión de Programas', body: 'Modelos lógicos, indicadores y ritmos de informes que le dan a los financiadores lo que necesitan sin convertir a tu personal de campo en oficinistas de datos. Construimos sistemas que tu equipo realmente puede mantener.' },
        { title: 'Comunicación y Política Pública', body: 'Arquitectura de mensajes, preparación de voceros y posiciones de política escritas, incluyendo testimonios y respuestas a consultas. Cuando la sala importa, sabrás qué decir y quién debe decirlo.' },
        { title: 'Redacción de Propuestas de Subvención', body: 'Propuestas completas y una biblioteca narrativa reutilizable, para que la siguiente solicitud parta de tu propio lenguaje en vez de una hoja en blanco. También revisamos borradores en curso cuando una segunda mirada es todo lo que hace falta.' },
        { title: 'Liderazgo Financiero', body: 'Tus donantes y financiadores tienen que conocer la salud fiscal de tu organización, lo que significa que tú tienes que conocerla primero. Ponemos en orden tu contabilidad, tus informes fiscales al día y tu estrategia de flujo de caja lo bastante clara para pivotar, reducir o crecer. Empieza con un análisis profundo de tu panorama fiscal pasado, actual y proyectado.' }
      ]
    },
    howWeWork: {
      eyebrow: 'Cómo Trabajamos',
      quote: 'No trabajamos en paralelo a tu equipo. Trabajamos dentro de los sistemas que ya usan, y todo lo que producimos está escrito para que lo mantengan las personas que seguirán ahí el año próximo.',
      text: 'Una primera intervención suele comenzar con dos semanas de escucha: entrevistas al personal, revisión de los informes actuales y análisis de tus últimas presentaciones a financiadores.'
    },
    team: {
      subtext: 'Profesionales que han dirigido los programas sobre los que hoy asesoran.',
      role1: 'Programas y Políticas · Nairobi',
      bio1: 'Líder de la respuesta al VIH durante más de una década. Construye infraestructura de movimiento feminista desde organizaciones de base hasta entidades financiadoras globales.',
      role2: 'Investigación y Defensoría · Brasília',
      bio2: 'Activista que vive con VIH e investigador en Fiocruz Brasília. Dirige análisis de políticas y trabajo de evidencia en toda América Latina.'
    },
    faqs: [
      { q: '¿Escriben propuestas de subvención a comisión?', a: 'No. Cobramos una tarifa fija, sea o no financiada la solicitud. También te diremos de entrada si creemos que una propuesta no es competitiva, y te ayudaremos a decidir si presentarla o redirigirla.' },
      { q: '¿Pueden apoyar a una organización sin personal de comunicaciones?', a: 'Sí, y muchos de nuestros clientes están en esa situación. Construimos una arquitectura de mensajes y un pequeño conjunto de plantillas que un líder de programa puede mantener en pocas horas al mes.' },
      { q: '¿En qué idiomas pueden producirse los entregables?', a: 'Inglés, francés, español y portugués. Las presentaciones de políticas se redactan en el idioma del organismo receptor.' },
      { q: '¿Con qué rapidez pueden empezar?', a: 'Una llamada de alcance dentro de dos semanas, y la mayoría de las intervenciones comienzan dentro de un mes. Los plazos de subvención son la excepción habitual. Reservamos capacidad para ellos.' }
    ],
    cta: {
      heading: '¿Se acerca un plazo de propuesta, o un programa necesita bases más sólidas?',
      text: 'Cuéntanos en qué estás trabajando. Evaluaremos lo que se necesita y te daremos un cronograma claro.'
    },
    alts: {
      hero: 'Dos colegas resolviendo un problema en una laptop',
      lab: 'Un investigador trabajando en un laboratorio',
      meeting: 'Un equipo en discusión alrededor de una mesa',
      whiteboard: 'Dos colegas trabajando en ideas frente a una pizarra',
      financial: 'Dos colegas revisando juntos informes financieros'
    }
  },
  pt: {
    hero: {
      title: 'Desenvolvimento Organizacional',
      text: 'Bons programas precisam de boa infraestrutura por trás. Construímos a supervisão, a comunicação, o trabalho de políticas, as propostas e o reporte financeiro que mantêm sua missão avançando e financiada muito além do primeiro ciclo de financiamento.',
      tags: ['Supervisão de Programas', 'Comunicação', 'Política Pública', 'Redação de Financiamentos', 'Liderança Financeira']
    },
    rows: {
      heading: 'Onde as organizações mais precisam de apoio',
      subtext: 'Quatro áreas sobre as quais mais nos perguntam, e o que fica nas suas mãos quando o trabalho termina.',
      items: [
        { title: 'Supervisão de Programas', body: 'Modelos lógicos, indicadores e ritmos de relatórios que dão aos financiadores o que precisam sem transformar sua equipe de linha de frente em digitadores de dados. Construímos sistemas que sua equipe consegue realmente manter.' },
        { title: 'Comunicação e Política Pública', body: 'Arquitetura de mensagens, preparação de porta-vozes e posicionamentos políticos por escrito, incluindo depoimentos e respostas a consultas. Quando a sala importa, você saberá o que dizer e quem deve dizer.' },
        { title: 'Redação de Propostas de Financiamento', body: 'Propostas completas e uma biblioteca narrativa reutilizável, para que a próxima solicitação parta da sua própria linguagem em vez de uma página em branco. Também revisamos rascunhos em andamento quando um segundo olhar é tudo o que falta.' },
        { title: 'Liderança Financeira', body: 'Seus doadores e financiadores precisam conhecer a saúde fiscal da sua organização, o que significa que você precisa conhecê-la primeiro. Colocamos sua contabilidade em ordem, seus relatórios fiscais em dia e sua estratégia de fluxo de caixa clara o suficiente para pivotar, reduzir ou crescer. Começa com um mergulho profundo no seu cenário fiscal passado, atual e projetado.' }
      ]
    },
    howWeWork: {
      eyebrow: 'Como Trabalhamos',
      quote: 'Não trabalhamos em paralelo à sua equipe. Trabalhamos dentro dos sistemas que ela já usa, e tudo o que produzimos é escrito para ser mantido pelas pessoas que ainda estarão lá no próximo ano.',
      text: 'Uma primeira atuação geralmente começa com duas semanas de escuta: entrevistas com a equipe, revisão dos relatórios atuais e análise das últimas submissões a financiadores.'
    },
    team: {
      subtext: 'Profissionais que já conduziram os programas sobre os quais agora assessoram.',
      role1: 'Programas e Políticas · Nairobi',
      bio1: 'Líder da resposta ao HIV por mais de uma década. Constrói infraestrutura de movimento feminista desde organizações de base até órgãos de financiamento globais.',
      role2: 'Pesquisa e Advocacy · Brasília',
      bio2: 'Ativista vivendo com HIV e pesquisador na Fiocruz Brasília. Lidera análise de políticas e trabalho de evidências em toda a América Latina.'
    },
    faqs: [
      { q: 'Vocês escrevem propostas de financiamento por comissão?', a: 'Não. Cobramos uma taxa fixa, seja a solicitação financiada ou não. Também diremos de cara se acharmos que uma proposta não é competitiva, e ajudaremos você a decidir se deve enviá-la ou redirecioná-la.' },
      { q: 'Podem apoiar uma organização sem equipe de comunicação?', a: 'Sim, e muitos dos nossos clientes estão nessa posição. Construímos uma arquitetura de mensagens e um pequeno conjunto de modelos que um líder de programa pode manter em poucas horas por mês.' },
      { q: 'Em quais idiomas os entregáveis podem ser produzidos?', a: 'Inglês, francês, espanhol e português. As submissões de políticas são redigidas no idioma do órgão receptor.' },
      { q: 'Com que rapidez podem começar?', a: 'Uma chamada de escopo em até duas semanas, e a maioria das atuações começa dentro de um mês. Prazos de financiamento são a exceção habitual. Mantemos capacidade reservada para eles.' }
    ],
    cta: {
      heading: 'Tem um prazo de proposta chegando, ou um programa que precisa de bases mais fortes?',
      text: 'Conte-nos o que você está fazendo. Vamos avaliar o que é necessário e dar um cronograma claro.'
    },
    alts: {
      hero: 'Dois colegas resolvendo um problema em um laptop',
      lab: 'Um pesquisador trabalhando em um laboratório',
      meeting: 'Uma equipe em discussão em torno de uma mesa',
      whiteboard: 'Dois colegas trabalhando em ideias diante de um quadro branco',
      financial: 'Dois colegas revisando juntos relatórios financeiros'
    }
  }
};

function main(locale) {
  const t = COPY[locale];
  const shared_ = { home: shared.breadcrumbHome[locale], services: shared.servicesEyebrow[locale], start: shared.startConversation[locale], getInTouch: shared.getInTouch[locale] };

  return `<section class="hero">
  ${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '100vw', alt: t.alts.hero, imgClass: 'hero-media', priority: true })}
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="breadcrumb"><a href="${href(locale, 'index.html')}">${shared_.home}</a> / ${t.hero.title}</p>
    <span class="eyebrow eyebrow--on-dark">${shared_.services}</span>
    <h1 class="hero-title" style="max-width:16ch">${t.hero.title}</h1>
    <p class="hero-text">${t.hero.text}</p>
    <div class="hero-tags">
      <span class="tag-pill tag-pill--teal">${t.hero.tags[0]}</span>
      <span class="tag-pill tag-pill--teal">${t.hero.tags[1]}</span>
      <span class="tag-pill tag-pill--teal">${t.hero.tags[2]}</span>
      <span class="tag-pill tag-pill--teal">${t.hero.tags[3]}</span>
      <span class="tag-pill tag-pill--teal">${t.hero.tags[4]}</span>
    </div>
    <div class="hero-actions"><a href="${href(locale, 'contact.html')}" class="btn btn-on-sky">${shared_.start}</a></div>
  </div>
</section>

<section class="section band-paper">
  <div class="container">
    <h2 class="section-heading">${t.rows.heading}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.rows.subtext}</p>

    <div class="media-row">
      <div class="media-row-media">${picture({ name: 'lab-research', widths: [400, 600, 900, 1200], sizes: '(max-width: 720px) 100vw, 50vw', alt: t.alts.lab })}</div>
      <div class="media-row-body">
        <div class="card-number-badge card-number-badge--blossom">1</div>
        <h3 class="card-title" id="program-oversight">${t.rows.items[0].title}</h3>
        <p class="card-body" style="max-width:44ch">${t.rows.items[0].body}</p>
      </div>
    </div>

    <div class="media-row media-row--reverse">
      <div class="media-row-body">
        <div class="card-number-badge card-number-badge--blossom">2</div>
        <h3 class="card-title" id="communications-and-public-policy">${t.rows.items[1].title}</h3>
        <p class="card-body" style="max-width:44ch">${t.rows.items[1].body}</p>
      </div>
      <div class="media-row-media">${picture({ name: 'team-meeting', widths: [400, 640, 960, 1280, 1920], sizes: '(max-width: 720px) 100vw, 50vw', alt: t.alts.meeting })}</div>
    </div>

    <div class="media-row">
      <div class="media-row-media">${picture({ name: 'whiteboard-session', widths: [400, 640, 960, 1200], sizes: '(max-width: 720px) 100vw, 50vw', alt: t.alts.whiteboard })}</div>
      <div class="media-row-body">
        <div class="card-number-badge card-number-badge--blossom">3</div>
        <h3 class="card-title" id="grant-writing">${t.rows.items[2].title}</h3>
        <p class="card-body" style="max-width:44ch">${t.rows.items[2].body}</p>
      </div>
    </div>

    <div class="media-row media-row--reverse" style="margin-bottom:0">
      <div class="media-row-body">
        <div class="card-number-badge card-number-badge--blossom">4</div>
        <h3 class="card-title" id="financial-leadership">${t.rows.items[3].title}</h3>
        <p class="card-body" style="max-width:44ch">${t.rows.items[3].body}</p>
      </div>
      <div class="media-row-media">${picture({ name: 'pair-working', widths: [400, 640, 960, 1280, 1920], sizes: '(max-width: 720px) 100vw, 50vw', alt: t.alts.financial })}</div>
    </div>
  </div>
</section>

<section class="cta-band band-blossom">
  <div class="cta-band-inner" style="max-width:720px">
    <span class="eyebrow eyebrow--on-blossom" style="text-align:center">${t.howWeWork.eyebrow}</span>
    <p class="quote-text" style="font-size:clamp(22px,2.4vw,30px);line-height:1.32">${t.howWeWork.quote}</p>
    <p class="cta-text" style="color:var(--color-ink-700)">${t.howWeWork.text}</p>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <h2 class="section-heading">${shared.whoLeadsThisWork[locale]}</h2>
    <p class="section-subtext" style="margin-bottom:var(--space-7)">${t.team.subtext}</p>
    <div class="auto-grid" style="--min:280px">
      ${teamCard({ name: TEAM_META[0].name, role: t.team.role1, bio: t.team.bio1 }, locale)}
      ${teamCard({ name: TEAM_META[1].name, role: t.team.role2, bio: t.team.bio2 }, locale)}
      ${teamCard({ name: people.victoriaOwoyele.name, role: people.victoriaOwoyele.teamRole[locale], bio: people.victoriaOwoyele.bio[locale] }, locale)}
      ${teamCard({ name: people.nickJackson.name, role: people.nickJackson.teamRole[locale], bio: people.nickJackson.bio[locale] }, locale)}
      ${teamCard({ name: people.leandroMaldonado.name, role: people.leandroMaldonado.teamRole[locale], bio: people.leandroMaldonado.bio[locale] }, locale)}
    </div>
  </div>
</section>

${testimonialsSection(locale)}

<section class="section band-paper">
  <div class="container" style="max-width:820px">
    <h2 class="section-heading" style="max-width:none;margin-bottom:var(--space-6)">${shared.commonQuestions[locale]}</h2>
    ${accordion(t.faqs, 'od-faq')}
  </div>
</section>

<section class="cta-band band-sky">
  <div class="cta-band-inner">
    <h2 class="cta-heading">${t.cta.heading}</h2>
    <p class="cta-text">${t.cta.text}</p>
    <a href="${href(locale, 'contact.html')}" class="btn btn-primary">${shared_.getInTouch}</a>
  </div>
</section>`;
}

module.exports = {
  slug: 'organizational-development',
  outputFile: 'organizational-development.html',
  activeNavId: 'organizationalDevelopment',
  meta: {
    title: {
      en: 'Organizational Development',
      fr: 'Développement Organisationnel',
      es: 'Desarrollo Organizacional',
      pt: 'Desenvolvimento Organizacional'
    },
    description: {
      en: 'Program oversight, communications, public policy, grant writing and financial leadership that keep your mission funded well past the first grant cycle.',
      fr: 'Supervision de programmes, communication, politiques publiques, rédaction de subventions et direction financière pour maintenir votre mission financée bien au-delà du premier cycle.',
      es: 'Supervisión de programas, comunicaciones, política pública, redacción de propuestas y liderazgo financiero que mantienen financiada tu misión mucho más allá del primer ciclo.',
      pt: 'Supervisão de programas, comunicação, política pública, redação de propostas e liderança financeira que mantêm sua missão financiada muito além do primeiro ciclo.'
    },
    ogImage: 'organizational-development'
  },
  main
};
