// The handful of strings src/scripts.js needs at runtime (contact-form
// validation + submission status). Emitted per-page as a small inline
// window.__I18N__ object since scripts.js is one shared file across locales.
module.exports = {
  en: {
    requiredField: 'Please complete this field.',
    invalidEmail: 'Enter a valid email address.',
    successHeading: 'Thank you for reaching out',
    successBody: 'We have received your message and will get back to you within three business days.',
    errorBody: 'Something went wrong sending your message. Please try again, or email us directly.'
  },
  fr: {
    requiredField: 'Veuillez remplir ce champ.',
    invalidEmail: 'Entrez une adresse e-mail valide.',
    successHeading: 'Merci de nous avoir contactés',
    successBody: 'Nous avons reçu votre message et vous répondrons dans un délai de trois jours ouvrables.',
    errorBody: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer, ou nous écrire directement par e-mail."
  },
  es: {
    requiredField: 'Por favor completa este campo.',
    invalidEmail: 'Ingresa una dirección de correo válida.',
    successHeading: 'Gracias por contactarnos',
    successBody: 'Hemos recibido tu mensaje y te responderemos dentro de tres días hábiles.',
    errorBody: 'Algo salió mal al enviar tu mensaje. Inténtalo de nuevo, o escríbenos directamente por correo.'
  },
  pt: {
    requiredField: 'Por favor, preencha este campo.',
    invalidEmail: 'Digite um endereço de e-mail válido.',
    successHeading: 'Obrigado por entrar em contato',
    successBody: 'Recebemos sua mensagem e responderemos em até três dias úteis.',
    errorBody: 'Algo deu errado ao enviar sua mensagem. Tente novamente, ou envie um e-mail diretamente.'
  }
};
