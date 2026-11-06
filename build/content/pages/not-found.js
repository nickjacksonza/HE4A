const { href } = require('../../helpers');
const shared = require('../shared');

const COPY = {
  en: { heading: 'We couldn’t find that page', text: 'The link may be out of date, or the address may have a typo. Try the home page, or tell us what you were looking for.', home: 'Go to the Home Page', contact: 'Contact Us' },
  fr: { heading: 'Nous n’avons pas trouvé cette page', text: 'Le lien est peut-être périmé, ou l’adresse contient une faute de frappe. Essayez la page d’accueil, ou dites-nous ce que vous cherchiez.', home: 'Aller à la Page d’Accueil', contact: 'Contactez-Nous' },
  es: { heading: 'No encontramos esa página', text: 'Puede que el enlace esté desactualizado o que la dirección tenga un error. Prueba la página de inicio o cuéntanos qué buscabas.', home: 'Ir a la Página de Inicio', contact: 'Contáctanos' },
  pt: { heading: 'Não encontramos essa página', text: 'O link pode estar desatualizado ou o endereço pode ter um erro de digitação. Tente a página inicial ou conte-nos o que você procurava.', home: 'Ir para a Página Inicial', contact: 'Fale Conosco' }
};

function main(locale) {
  const t = COPY[locale];
  return `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">${shared.breadcrumbHome[locale]}</a> / 404</p>
    <h1 class="section-heading" style="font-size:clamp(34px,4vw,52px);max-width:18ch;margin-bottom:var(--space-5)">${t.heading}</h1>
    <p class="section-subtext" style="font-size:var(--text-md);max-width:52ch;margin-bottom:var(--space-6)">${t.text}</p>
    <p><a href="${href(locale, 'index.html')}" class="btn btn-primary">${t.home}</a> <a href="${href(locale, 'contact.html')}" class="btn btn-outline-dark">${t.contact}</a></p>
  </div>
</section>`;
}

module.exports = {
  slug: '404',
  outputFile: '404.html',
  activeNavId: null,
  noindex: true,
  meta: {
    title: { en: 'Page Not Found', fr: 'Page Introuvable', es: 'Página No Encontrada', pt: 'Página Não Encontrada' },
    description: {
      en: 'The page you were looking for could not be found.',
      fr: 'La page que vous cherchiez est introuvable.',
      es: 'No se encontró la página que buscabas.',
      pt: 'A página que você procurava não foi encontrada.'
    },
    ogImage: 'about-us'
  },
  main
};
