// Canonical facts for collective members added beyond the original 5
// (Ace Robinson, Lauren Miller, Diego Calixto, Lucy Wanjiku Njenga, Eduardo
// Culbeaux), whose existing per-page bios/roles are left untouched in each
// page module. Sourced from the person's own bio document (Google Drive,
// "HE4A bios" folder, Jul 2024) and condensed to the site's existing
// short-bio length; role/location strings follow the two formats already
// used on the site: About Us wants "Role · City, Country", service-page
// team cards want the shorter "Role · City".
//
// Names/credentials/locations are proper nouns and stay fixed across
// locales; only `bio` is translated. `aboutRole`/`teamRole` are also
// translated since they contain the (translatable) role title.
module.exports = {
  johnHanna: {
    name: 'John Hanna',
    slug: 'john-hanna',
    homeShort: { code: 'ar', name: 'العربية', dir: 'rtl', text: 'شارك جون كشريك مؤسس في مبادرة دنتاليا في مصر منذ عام 2017 حتى 2022، حيث قاد جهودًا لتعزيز الوعي بصحة الأسنان والتعليم المجتمعي، مما استفادت منه الشرائح السكانية غير المحظية.' },
    aboutRole: { en: 'Global Health Advocate · Rome, Italy', fr: 'Défenseur de la Santé Mondiale · Rome, Italie', es: 'Defensor de la Salud Global · Roma, Italia', pt: 'Defensor da Saúde Global · Roma, Itália' },
    teamRole: { en: 'Global Health Advocate · Rome', fr: 'Défenseur de la Santé Mondiale · Rome', es: 'Defensor de la Salud Global · Roma', pt: 'Defensor da Saúde Global · Roma' },
    bio: {
      en: 'DDS. Co-founded Egypt’s Dentalia Initiative, promoting dental awareness and community health education for underserved populations.',
      fr: 'Chirurgien-dentiste. Cofondateur de la Dentalia Initiative en Égypte, promouvant la sensibilisation dentaire et l’éducation communautaire à la santé pour les populations mal desservies.',
      es: 'DDS. Cofundador de la Iniciativa Dentalia en Egipto, promoviendo la concienciación dental y la educación comunitaria en salud para poblaciones desatendidas.',
      pt: 'DDS. Cofundador da Dentalia Initiative no Egito, promovendo a conscientização odontológica e a educação comunitária em saúde para populações carentes.'
    }
  },
  victoriaOwoyele: {
    name: 'Dr. Victoria Owoyele',
    slug: 'victoria-owoyele',
    homeShort: { code: 'yo', name: 'Yorùbá', text: 'Victoria Oluwatosin Owoyele ni oye dokita (PhD) ni ilera gbogbo eniyan. Victoria ṣe ifọwọsowọpọ pẹlu ilera ati awọn apa ilera ti gbogbo eniyan, ni idojukọ lori itupalẹ data, iwoye data iwọntunwọnsi, ati awọn ilowosi ifisi fun awọn eniyan ti a ya sọtọ, pataki ni awọn agbegbe BIPOC.' },
    aboutRole: { en: 'Public Health Researcher · Nigeria', fr: 'Chercheuse en Santé Publique · Nigéria', es: 'Investigadora en Salud Pública · Nigeria', pt: 'Pesquisadora em Saúde Pública · Nigéria' },
    teamRole: { en: 'Public Health Researcher · Nigeria', fr: 'Chercheuse en Santé Publique · Nigéria', es: 'Investigadora en Salud Pública · Nigeria', pt: 'Pesquisadora em Saúde Pública · Nigéria' },
    bio: {
      en: 'PhD in public health, focused on data analysis and equitable surveillance. Led vaccination and HIV testing programs reaching over 25,000 people.',
      fr: 'Docteure en santé publique, spécialisée dans l’analyse de données et la surveillance équitable. A dirigé des programmes de vaccination et de dépistage du VIH touchant plus de 25 000 personnes.',
      es: 'Doctora en salud pública, especializada en análisis de datos y vigilancia equitativa. Dirigió programas de vacunación y pruebas de VIH que alcanzaron a más de 25,000 personas.',
      pt: 'Doutora em saúde pública, especializada em análise de dados e vigilância equitativa. Liderou programas de vacinação e testagem de HIV que alcançaram mais de 25.000 pessoas.'
    }
  },
  leandroMaldonado: {
    name: 'Leandro Maldonado',
    slug: 'leandro-maldonado',
    homeShort: [
      { code: 'pt', name: 'Português', text: 'MBA. Gerente de projetos STEM com mais de uma década de experiência liderando grandes equipes e programas multimilionários, incluindo a logística das Olimpíadas do Rio 2016.' },
      { code: 'it', name: 'Italiano', text: 'MBA. Project manager STEM con oltre dieci anni di esperienza nella guida di grandi team e programmi da milioni di dollari, inclusa la logistica delle Olimpiadi di Rio 2016.' }
    ],
    aboutRole: { en: 'Program Management · Rio de Janeiro, Brazil', fr: 'Gestion de Programmes · Rio de Janeiro, Brésil', es: 'Gestión de Programas · Río de Janeiro, Brasil', pt: 'Gestão de Programas · Rio de Janeiro, Brasil' },
    teamRole: { en: 'Program Management · Rio de Janeiro', fr: 'Gestion de Programmes · Rio de Janeiro', es: 'Gestión de Programas · Río de Janeiro', pt: 'Gestão de Programas · Rio de Janeiro' },
    bio: {
      en: 'MBA. STEM project manager with over a decade of experience leading large teams and multi-million-dollar programs, including logistics for the 2016 Rio Olympics.',
      fr: 'MBA. Chef de projet STEM avec plus de dix ans d’expérience à la tête de grandes équipes et de programmes multimillionnaires, y compris la logistique des Jeux olympiques de Rio 2016.',
      es: 'MBA. Gerente de proyectos STEM con más de una década de experiencia liderando grandes equipos y programas multimillonarios, incluida la logística de los Juegos Olímpicos de Río 2016.',
      pt: 'MBA. Gerente de projetos STEM com mais de uma década de experiência liderando grandes equipes e programas multimilionários, incluindo a logística das Olimpíadas do Rio 2016.'
    }
  },
  robertMiller: {
    name: 'Dr. Robert Miller',
    slug: 'robert-miller',
    aboutRole: { en: 'Research & Faculty · New York, USA', fr: 'Recherche et Enseignement · New York, États-Unis', es: 'Investigación y Docencia · Nueva York, EE. UU.', pt: 'Pesquisa e Docência · Nova York, EUA' },
    teamRole: { en: 'Research & Faculty · New York', fr: 'Recherche et Enseignement · New York', es: 'Investigación y Docencia · Nueva York', pt: 'Pesquisa e Docência · Nova York' },
    bio: {
      en: 'Associate Professor at the University at Albany. Researches the intersection of HIV prevention, social justice and spirituality, teaching across the US and Southern Africa.',
      fr: 'Professeur associé à l’Université d’Albany. Étudie l’intersection entre la prévention du VIH, la justice sociale et la spiritualité, enseignant aux États-Unis et en Afrique australe.',
      es: 'Profesor asociado en la Universidad de Albany. Investiga la intersección entre la prevención del VIH, la justicia social y la espiritualidad, enseñando en Estados Unidos y el sur de África.',
      pt: 'Professor associado na Universidade de Albany. Pesquisa a interseção entre prevenção do HIV, justiça social e espiritualidade, ensinando nos Estados Unidos e na África Austral.'
    }
  },
  nickJackson: {
    name: 'Nick Jackson',
    slug: 'nick-jackson',
    homeShort: { code: 'af', name: 'Afrikaans', text: 'Digitale bemarkingsvervaardiger en projekbestuurder met byna 20 jaar ervaring in samewerking met Afrika-handelsmerke en NRO’s oor kommunikasie vir gesondheidsgelykheid.' },
    aboutRole: { en: 'Communications & Marketing · Johannesburg, South Africa', fr: 'Communication et Marketing · Johannesburg, Afrique du Sud', es: 'Comunicación y Marketing · Johannesburgo, Sudáfrica', pt: 'Comunicação e Marketing · Joanesburgo, África do Sul' },
    teamRole: { en: 'Communications & Marketing · Johannesburg', fr: 'Communication et Marketing · Johannesburg', es: 'Comunicación y Marketing · Johannesburgo', pt: 'Comunicação e Marketing · Joanesburgo' },
    bio: {
      en: 'Digital marketing producer and project manager with almost 20 years of experience working with African brands and NGOs on health equity communications.',
      fr: 'Producteur en marketing numérique et chef de projet, fort de près de 20 ans d’expérience auprès de marques et d’ONG africaines sur les communications liées à l’équité en santé.',
      es: 'Productor de marketing digital y gerente de proyectos, con casi 20 años de experiencia trabajando con marcas y ONG africanas en comunicaciones sobre equidad en salud.',
      pt: 'Produtor de marketing digital e gerente de projetos, com quase 20 anos de experiência trabalhando com marcas e ONGs africanas em comunicações sobre equidade em saúde.'
    }
  },
  brianKanyemba: {
    name: 'Brian Kanyemba',
    slug: 'brian-kanyemba',
    homeShort: { code: 'sn', name: 'chiShona', text: 'Brian Kanyemba inyanzvi yezvehutano hweveruzhinji anogara kuCape Town, ane ruzivo rwemakore anodarika gumi nemashanu mukudzivirira HIV, zvirongwa zvemapoka anokosha(KPs), kushandiswa nezvisizvo kwezvinodhaka, uye kodzero dzevanhu kumaMawodzanyemba, Mabavazuva nekuMadokero kweAfrica.' },
    aboutRole: { en: 'Public Health & Advocacy · Cape Town, South Africa', fr: 'Santé Publique et Plaidoyer · Le Cap, Afrique du Sud', es: 'Salud Pública e Incidencia · Ciudad del Cabo, Sudáfrica', pt: 'Saúde Pública e Advocacia · Cidade do Cabo, África do Sul' },
    teamRole: { en: 'Public Health & Advocacy · Cape Town', fr: 'Santé Publique et Plaidoyer · Le Cap', es: 'Salud Pública e Incidencia · Ciudad del Cabo', pt: 'Saúde Pública e Advocacia · Cidade do Cabo' },
    bio: {
      en: 'Public health consultant and advocate based in Cape Town, with over 15 years of experience in HIV prevention, key populations programming, substance abuse and human rights across Western, Southern and Eastern Africa.',
      fr: 'Consultant en santé publique et défenseur basé au Cap, avec plus de 15 ans d’expérience en prévention du VIH, programmes pour les populations clés, consommation abusive de substances et droits humains en Afrique de l’Ouest, australe et orientale.',
      es: 'Consultor en salud pública y defensor radicado en Ciudad del Cabo, con más de 15 años de experiencia en prevención del VIH, programas para poblaciones clave, abuso de sustancias y derechos humanos en África occidental, meridional y oriental.',
      pt: 'Consultor em saúde pública e defensor radicado na Cidade do Cabo, com mais de 15 anos de experiência em prevenção do HIV, programas para populações-chave, abuso de substâncias e direitos humanos na África Ocidental, Austral e Oriental.'
    }
  },
  tinasheMuchenje: {
    name: 'Tinashe Stephen Muchenje',
    slug: 'tinashe-stephen-muchenje',
    homeShort: { code: 'sn', name: 'chiShona', text: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, inyanzvi yezvemari uye Virtual CFO ane makore anopfuura gumi nemaviri eruzivo muhurongwa hwezvemari, kuongorora, uye kuronga bhajeti. Anozivikanwa nekusimudzira kushanda zvakanaka kwemari, kusimbisa mitemo yekudzora, uye kupa ongororo dzinobva padata dzinotsigira kukura kwebhizimisi kunogara kwenguva refu.' },
    aboutRole: { en: 'Finance & Virtual CFO · Cape Town, South Africa', fr: 'Finance et Directeur Financier Virtuel · Cape Town, Afrique du Sud', es: 'Finanzas y Director Financiero Virtual · Ciudad del Cabo, Sudáfrica', pt: 'Finanças e Diretor Financeiro Virtual · Cidade do Cabo, África do Sul' },
    teamRole: { en: 'Finance & Virtual CFO · Cape Town', fr: 'Finance et Directeur Financier Virtuel · Cape Town', es: 'Finanzas y Director Financiero Virtual · Ciudad del Cabo', pt: 'Finanças e Diretor Financeiro Virtual · Cidade do Cabo' },
    bio: {
      en: 'MBA, ACMA, CGMA, AICPA. Virtual CFO with over 12 years of experience in financial planning, analysis and strategic budgeting, strengthening controls and delivering data-driven insights for sustainable business growth.',
      fr: 'MBA, ACMA, CGMA, AICPA. Directeur financier virtuel avec plus de 12 ans d’expérience en planification financière, analyse et budgétisation stratégique, renforçant les contrôles et apportant des analyses fondées sur les données pour une croissance durable des entreprises.',
      es: 'MBA, ACMA, CGMA, AICPA. Director financiero virtual con más de 12 años de experiencia en planificación financiera, análisis y presupuestación estratégica, que fortalece los controles y aporta análisis basados en datos para un crecimiento empresarial sostenible.',
      pt: 'MBA, ACMA, CGMA, AICPA. Diretor financeiro virtual com mais de 12 anos de experiência em planejamento financeiro, análise e orçamento estratégico, fortalecendo controles e entregando análises baseadas em dados para o crescimento sustentável dos negócios.'
    }
  },
  // Placeholder: Juan Michael Porter II was removed from the site at the
  // user's request; this slot holds
  // his position for an incoming member, Jas Florentino, whose role,
  // location and bio are pending.
  jasPlaceholder: {
    name: 'Jas Florentino',
    aboutRole: { en: 'New Team Member · Washington, DC, USA', fr: 'Nouveau Membre de l’Équipe · Washington, D.C., États-Unis', es: 'Nuevo Miembro del Equipo · Washington, D. C., EE. UU.', pt: 'Novo Membro da Equipe · Washington, D.C., EUA' },
    teamRole: { en: 'New Team Member · Washington, DC', fr: 'Nouveau Membre · Washington, D.C.', es: 'Nuevo Miembro · Washington, D. C.', pt: 'Novo Membro · Washington, D.C.' },
    bio: {
      en: 'We’re excited to welcome Jas to the collective — full bio coming soon.',
      fr: 'Nous sommes heureux d’accueillir Jas au sein du collectif — biographie complète à venir.',
      es: 'Estamos encantados de dar la bienvenida a Jas al colectivo — biografía completa próximamente.',
      pt: 'Estamos muito felizes em receber Jas no coletivo — biografia completa em breve.'
    }
  }
};
