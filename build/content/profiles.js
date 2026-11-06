// Per-person profile data for the pages at about-us/<slug>.html. The slug, name,
// role and short bio come from About Us (build/content/pages/about-us.js and
// build/content/people.js); this file holds only what a profile adds. Every
// field is optional and its section is hidden until it is filled in.
//
//   fullBio:      { en, fr, es, pt }  full-length bio. Falls back to the short bio.
//   homeLanguage: { code, name }      BCP-47 code for the lang attribute, and the
//                                     language's own name, e.g. { code: 'sn', name: 'chiShona' }
//   homeBio:      string              full bio written in the home language.
//                                     Adds the language toggle.
//   email, phone: strings
//   social:       { linkedin, twitter, instagram, facebook, website }  full URLs
module.exports = {
  'tinashe-stephen-muchenje': {
    fullBio: {
      en: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, is a seasoned finance professional and Virtual CFO with over 12 years of experience in financial planning, analysis, and strategic budgeting. He is known for driving operational efficiency, strengthening controls, and delivering data-driven insights that support sustainable business growth.',
      fr: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, est un professionnel de la finance chevronné et un directeur financier virtuel (Virtual CFO) comptant plus de 12 ans d’expérience en planification financière, en analyse et en budgétisation stratégique. Il est reconnu pour sa capacité à améliorer l’efficacité opérationnelle, à renforcer les contrôles et à fournir des analyses fondées sur les données qui soutiennent une croissance durable des entreprises.',
      es: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, es un profesional de las finanzas con amplia trayectoria y Virtual CFO, con más de 12 años de experiencia en planificación financiera, análisis y presupuestación estratégica. Es conocido por impulsar la eficiencia operativa, fortalecer los controles y aportar análisis basados en datos que apoyan un crecimiento empresarial sostenible.',
      pt: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, é um profissional de finanças experiente e Virtual CFO, com mais de 12 anos de experiência em planejamento financeiro, análise e orçamento estratégico. É conhecido por impulsionar a eficiência operacional, fortalecer controles e entregar análises baseadas em dados que sustentam o crescimento sustentável dos negócios.'
    },
    homeLanguage: { code: 'sn', name: 'chiShona' },
    homeBio: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, inyanzvi yezvemari uye Virtual CFO ane makore anopfuura gumi nemaviri eruzivo muhurongwa hwezvemari, kuongorora, uye kuronga bhajeti. Anozivikanwa nekusimudzira kushanda zvakanaka kwemari, kusimbisa mitemo yekudzora, uye kupa ongororo dzinobva padata dzinotsigira kukura kwebhizimisi kunogara kwenguva refu.'
  },
  'brian-kanyemba': {
    homeLanguage: { code: 'sn', name: 'chiShona' },
    homeBio: 'Brian Kanyemba inyanzvi yezvehutano hweveruzhinji uye mumiririri anogara kuCape Town, ane ruzivo rwemakore anodarika gumi nemashanu mukudzivirira HIV, zvirongwa zvemapoka anokosha, kushandiswa zvisizvo kwezvinodhaka, uye kodzero dzevanhu muSouthern neEastern Africa. Ari mudzidzi wePhD paStellenbosch University, ari kudzidza hurongwa hwekupindira hwedhijitari hwePrEP inobayiwa inogara kwenguva refu pakati pemapoka anokosha. Basa rake rinosimudzira mhinduro dzeHIV dzinotungamirwa nenharaunda, U=U, kurwisa mitemo inoita vanhu mhosva, uye mukana wakaenzana weLGBTI+ nemamwe mapoka anokosha muAfrica yose.'
  }
};
