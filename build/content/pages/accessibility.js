const { href } = require('../../helpers');
const site = require('../site');
const shared = require('../shared');

// Only claim what the site does and what has been checked. The list under
// "built in" matches build/partials/header.js, src/scripts.js and src/styles.css;
// the testing note matches the Lighthouse accessibility audits run on the
// pages (all scored 100). Update both if either changes.
const COPY = {
  en: {
    eyebrow: 'Website Accessibility',
    heading: 'Accessibility Statement',
    intro: 'We want everyone to be able to use this site, including people who browse with a keyboard, a screen reader, magnification or a translation tool. We work toward the WCAG 2.2 Level AA standard.',
    builtHeading: 'What we have built in',
    built: [
      'A skip link at the start of every page, so keyboard users can jump past the navigation to the main content.',
      'A menu, including the full-screen mobile menu and its sub-page lists, that works by keyboard alone. Esc closes the mobile menu.',
      'Reduced-motion support. If your device is set to reduce motion, the menu animations, hover transitions and the quotes carousel on the home page do not animate or auto-advance.',
      'Frequently asked questions built as buttons that report whether they are open or closed, so they work the same way with a keyboard, a screen reader or a mouse.',
      'A visible focus outline on every link, button and form field.',
      'Form fields with labels, and error messages that are announced to screen readers.',
      'Four languages (English, French, Spanish and Portuguese). Each page declares its language, and text in another language, such as a member’s home-language biography, is marked with its own language and reading direction.',
      'Short biographies that show a home-language translation on hover, and also when you move to them with the keyboard or tap them.',
      'Text alternatives for images.'
    ],
    testingHeading: 'How we check',
    testing: 'We run automated accessibility audits (Lighthouse) on our pages, and all the pages we audited scored 100 when we last checked in November 2026. Automated tools find only some problems, so manual testing still matters. We have not yet had the site tested by people who use assistive technology every day, and we would welcome that feedback.',
    barrierHeading: 'Tell us about a barrier',
    barrier: (email, phone, contactHref, contactLabel) => `If any part of this site is hard to use, we want to know. Email <a href="mailto:${email}">${email}</a>, call <a href="tel:${phone.replace(/\s+/g, '')}">${phone}</a>, or use the <a href="${contactHref}">${contactLabel}</a>. Tell us which page you were on and what happened. We reply within three business days, and we will help you get the information you need in the meantime.`,
    reviewHeading: 'Ongoing review',
    review: 'Accessibility is not a one-time fix. We review this statement and the site as we add pages and content, and we fix problems as we find them.'
  },
  fr: {
    eyebrow: 'Accessibilité du Site',
    heading: 'Déclaration d’Accessibilité',
    intro: 'Nous voulons que chacun puisse utiliser ce site, y compris les personnes qui naviguent au clavier, avec un lecteur d’écran, avec un agrandissement ou avec un outil de traduction. Nous visons la norme WCAG 2.2 niveau AA.',
    builtHeading: 'Ce que nous avons intégré',
    built: [
      'Un lien d’évitement au début de chaque page, pour que les personnes qui naviguent au clavier puissent passer la navigation et accéder au contenu principal.',
      'Un menu, y compris le menu mobile plein écran et ses listes de sous-pages, entièrement utilisable au clavier. La touche Échap ferme le menu mobile.',
      'La prise en charge de la réduction des animations. Si votre appareil est réglé pour réduire les animations, les animations du menu, les transitions au survol et le carrousel de citations de la page d’accueil ne s’animent pas et ne défilent pas automatiquement.',
      'Des questions fréquentes conçues comme des boutons qui indiquent s’ils sont ouverts ou fermés, afin qu’elles fonctionnent de la même façon au clavier, avec un lecteur d’écran ou à la souris.',
      'Un contour de focus visible sur chaque lien, bouton et champ de formulaire.',
      'Des champs de formulaire avec étiquettes, et des messages d’erreur annoncés aux lecteurs d’écran.',
      'Quatre langues (anglais, français, espagnol et portugais). Chaque page déclare sa langue, et le texte dans une autre langue, comme la biographie d’un membre dans sa langue d’origine, est balisé avec sa propre langue et son sens de lecture.',
      'Des biographies courtes qui affichent une traduction dans la langue d’origine au survol, ainsi qu’au passage au clavier ou au toucher.',
      'Des alternatives textuelles pour les images.'
    ],
    testingHeading: 'Comment nous vérifions',
    testing: 'Nous exécutons des audits d’accessibilité automatisés (Lighthouse) sur nos pages, et toutes les pages auditées ont obtenu 100 lors de notre dernière vérification, en novembre 2026. Les outils automatisés ne détectent qu’une partie des problèmes ; les tests manuels restent donc nécessaires. Le site n’a pas encore été testé par des personnes qui utilisent chaque jour des technologies d’assistance, et nous serions heureux de recevoir ce retour.',
    barrierHeading: 'Signalez-nous un obstacle',
    barrier: (email, phone, contactHref, contactLabel) => `Si une partie de ce site est difficile à utiliser, nous voulons le savoir. Écrivez à <a href="mailto:${email}">${email}</a>, appelez le <a href="tel:${phone.replace(/\s+/g, '')}">${phone}</a>, ou utilisez la <a href="${contactHref}">${contactLabel}</a>. Indiquez-nous la page concernée et ce qui s’est passé. Nous répondons dans un délai de trois jours ouvrables, et nous vous aiderons à obtenir l’information dont vous avez besoin entre-temps.`,
    reviewHeading: 'Révision continue',
    review: 'L’accessibilité n’est pas un correctif ponctuel. Nous révisons cette déclaration et le site à mesure que nous ajoutons des pages et du contenu, et nous corrigeons les problèmes dès que nous les trouvons.'
  },
  es: {
    eyebrow: 'Accesibilidad del Sitio',
    heading: 'Declaración de Accesibilidad',
    intro: 'Queremos que todas las personas puedan usar este sitio, incluidas quienes navegan con teclado, con lector de pantalla, con ampliación o con una herramienta de traducción. Trabajamos para cumplir el estándar WCAG 2.2 nivel AA.',
    builtHeading: 'Lo que hemos incorporado',
    built: [
      'Un enlace para saltar al contenido al inicio de cada página, para que quienes usan el teclado puedan omitir la navegación e ir al contenido principal.',
      'Un menú, incluido el menú móvil de pantalla completa y sus listas de subpáginas, que se puede usar solo con el teclado. La tecla Esc cierra el menú móvil.',
      'Compatibilidad con la reducción de movimiento. Si tu dispositivo está configurado para reducir el movimiento, las animaciones del menú, las transiciones al pasar el cursor y el carrusel de citas de la página de inicio no se animan ni avanzan solos.',
      'Preguntas frecuentes creadas como botones que indican si están abiertos o cerrados, de modo que funcionan igual con teclado, lector de pantalla o ratón.',
      'Un contorno de foco visible en cada enlace, botón y campo de formulario.',
      'Campos de formulario con etiquetas y mensajes de error que se anuncian a los lectores de pantalla.',
      'Cuatro idiomas (inglés, francés, español y portugués). Cada página declara su idioma, y el texto en otro idioma, como la biografía de un miembro en su idioma de origen, se marca con su propio idioma y dirección de lectura.',
      'Biografías cortas que muestran una traducción al idioma de origen al pasar el cursor, y también al llegar con el teclado o al tocarlas.',
      'Alternativas de texto para las imágenes.'
    ],
    testingHeading: 'Cómo lo comprobamos',
    testing: 'Ejecutamos auditorías de accesibilidad automatizadas (Lighthouse) en nuestras páginas, y todas las páginas auditadas obtuvieron 100 en nuestra última revisión, en noviembre de 2026. Las herramientas automáticas solo detectan una parte de los problemas, por lo que las pruebas manuales siguen siendo necesarias. Todavía no hemos hecho que personas que usan tecnologías de apoyo a diario prueben el sitio, y agradeceríamos ese comentario.',
    barrierHeading: 'Cuéntanos sobre una barrera',
    barrier: (email, phone, contactHref, contactLabel) => `Si alguna parte de este sitio es difícil de usar, queremos saberlo. Escribe a <a href="mailto:${email}">${email}</a>, llama al <a href="tel:${phone.replace(/\s+/g, '')}">${phone}</a> o usa el <a href="${contactHref}">${contactLabel}</a>. Dinos en qué página estabas y qué pasó. Respondemos dentro de tres días hábiles y te ayudaremos a obtener la información que necesitas mientras tanto.`,
    reviewHeading: 'Revisión continua',
    review: 'La accesibilidad no se arregla una sola vez. Revisamos esta declaración y el sitio a medida que añadimos páginas y contenido, y corregimos los problemas cuando los encontramos.'
  },
  pt: {
    eyebrow: 'Acessibilidade do Site',
    heading: 'Declaração de Acessibilidade',
    intro: 'Queremos que todas as pessoas possam usar este site, incluindo quem navega com teclado, leitor de tela, ampliação ou uma ferramenta de tradução. Trabalhamos para atender ao padrão WCAG 2.2 nível AA.',
    builtHeading: 'O que já incluímos',
    built: [
      'Um link para pular ao conteúdo no início de cada página, para que quem usa o teclado possa ignorar a navegação e ir direto ao conteúdo principal.',
      'Um menu, incluindo o menu móvel em tela cheia e suas listas de subpáginas, que funciona apenas com o teclado. A tecla Esc fecha o menu móvel.',
      'Suporte à redução de movimento. Se o seu dispositivo estiver configurado para reduzir o movimento, as animações do menu, as transições ao passar o cursor e o carrossel de citações da página inicial não se animam nem avançam sozinhos.',
      'Perguntas frequentes criadas como botões que informam se estão abertos ou fechados, para que funcionem da mesma forma com teclado, leitor de tela ou mouse.',
      'Um contorno de foco visível em cada link, botão e campo de formulário.',
      'Campos de formulário com rótulos e mensagens de erro anunciadas aos leitores de tela.',
      'Quatro idiomas (inglês, francês, espanhol e português). Cada página declara seu idioma, e o texto em outro idioma, como a biografia de um membro em seu idioma de origem, é marcado com seu próprio idioma e direção de leitura.',
      'Biografias curtas que mostram uma tradução no idioma de origem ao passar o cursor, e também ao chegar com o teclado ou ao tocar.',
      'Alternativas em texto para as imagens.'
    ],
    testingHeading: 'Como verificamos',
    testing: 'Executamos auditorias de acessibilidade automatizadas (Lighthouse) em nossas páginas, e todas as páginas auditadas tiveram nota 100 na nossa última verificação, em novembro de 2026. Ferramentas automáticas encontram apenas parte dos problemas, por isso os testes manuais continuam necessários. Ainda não pedimos que pessoas que usam tecnologia assistiva todos os dias testassem o site, e agradeceríamos esse retorno.',
    barrierHeading: 'Conte-nos sobre uma barreira',
    barrier: (email, phone, contactHref, contactLabel) => `Se alguma parte deste site for difícil de usar, queremos saber. Escreva para <a href="mailto:${email}">${email}</a>, ligue para <a href="tel:${phone.replace(/\s+/g, '')}">${phone}</a> ou use o <a href="${contactHref}">${contactLabel}</a>. Diga em qual página você estava e o que aconteceu. Respondemos em até três dias úteis e ajudaremos você a obter a informação de que precisa enquanto isso.`,
    reviewHeading: 'Revisão contínua',
    review: 'Acessibilidade não se resolve de uma vez. Revisamos esta declaração e o site à medida que adicionamos páginas e conteúdo, e corrigimos os problemas quando os encontramos.'
  }
};

const FORM_LABEL = { en: 'contact form', fr: 'formulaire de contact', es: 'formulario de contacto', pt: 'formulário de contato' };

function main(locale) {
  const t = COPY[locale];
  return `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">${shared.breadcrumbHome[locale]}</a> / ${t.heading}</p>
    <span class="eyebrow">${t.eyebrow}</span>
    <h1 class="section-heading" style="font-size:clamp(34px,4vw,52px);max-width:18ch;margin-bottom:var(--space-5)">${t.heading}</h1>
    <p class="section-subtext" style="font-size:var(--text-md);max-width:60ch">${t.intro}</p>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <div class="prose">
      <h2 class="prose-heading">${t.builtHeading}</h2>
      <ul class="prose-list">
        ${t.built.map((item) => `<li>${item}</li>`).join('\n        ')}
      </ul>
      <h2 class="prose-heading">${t.testingHeading}</h2>
      <p>${t.testing}</p>
      <h2 class="prose-heading">${t.barrierHeading}</h2>
      <p>${t.barrier(site.email, site.phone, href(locale, 'contact.html'), FORM_LABEL[locale])}</p>
      <h2 class="prose-heading">${t.reviewHeading}</h2>
      <p>${t.review}</p>
    </div>
  </div>
</section>`;
}

module.exports = {
  slug: 'accessibility',
  outputFile: 'accessibility.html',
  activeNavId: null,
  meta: {
    seoTitle: { en: 'Accessibility Statement for Health Equity 4 All | WCAG 2.2 AA' },
    title: {
      en: 'Accessibility Statement',
      fr: 'Déclaration d’Accessibilité',
      es: 'Declaración de Accesibilidad',
      pt: 'Declaração de Acessibilidade'
    },
    description: {
      en: 'How Health Equity 4 All works to keep this website usable with a keyboard, a screen reader and reduced motion, and how to tell us about a barrier.',
      fr: 'Comment Health Equity 4 All s’efforce de garder ce site utilisable au clavier, avec un lecteur d’écran et avec les animations réduites, et comment nous signaler un obstacle.',
      es: 'Cómo Health Equity 4 All trabaja para que este sitio se pueda usar con teclado, lector de pantalla y movimiento reducido, y cómo contarnos sobre una barrera.',
      pt: 'Como a Health Equity 4 All trabalha para manter este site utilizável com teclado, leitor de tela e movimento reduzido, e como nos contar sobre uma barreira.'
    },
    ogImage: 'about-us'
  },
  main
};
