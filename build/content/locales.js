// Locale registry -- single source of truth for which locales the site ships.
// code: used for the URL prefix (dist/<code>/...) and as the object key everywhere
// content is locale-keyed (COPY = { en: {...}, fr: {...}, ... }).
// hreflang: BCP-47 tag emitted in <html lang> and <link rel="alternate" hreflang>.
module.exports = [
  { code: 'en', hreflang: 'en', endonym: 'English', isDefault: true },
  { code: 'fr', hreflang: 'fr', endonym: 'Français', isDefault: false },
  { code: 'es', hreflang: 'es', endonym: 'Español', isDefault: false },
  { code: 'pt', hreflang: 'pt-BR', endonym: 'Português', isDefault: false }
];
