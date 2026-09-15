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
    name: 'Victoria Owoyele',
    aboutRole: { en: 'Public Health Researcher · Nigeria', fr: 'Chercheuse en Santé Publique · Nigéria', es: 'Investigadora en Salud Pública · Nigeria', pt: 'Pesquisadora em Saúde Pública · Nigéria' },
    teamRole: { en: 'Public Health Researcher · Nigeria', fr: 'Chercheuse en Santé Publique · Nigéria', es: 'Investigadora en Salud Pública · Nigeria', pt: 'Pesquisadora em Saúde Pública · Nigéria' },
    bio: {
      en: 'Doctoral candidate in public health, focused on data analysis and equitable surveillance. Led vaccination and HIV testing programs reaching over 25,000 people.',
      fr: 'Doctorante en santé publique, spécialisée dans l’analyse de données et la surveillance équitable. A dirigé des programmes de vaccination et de dépistage du VIH touchant plus de 25 000 personnes.',
      es: 'Candidata a doctorado en salud pública, especializada en análisis de datos y vigilancia equitativa. Dirigió programas de vacunación y pruebas de VIH que alcanzaron a más de 25,000 personas.',
      pt: 'Doutoranda em saúde pública, especializada em análise de dados e vigilância equitativa. Liderou programas de vacinação e testagem de HIV que alcançaram mais de 25.000 pessoas.'
    }
  },
  leandroMaldonado: {
    name: 'Leandro Maldonado',
    aboutRole: { en: 'Program Management · Dubai, UAE', fr: 'Gestion de Programmes · Dubaï, EAU', es: 'Gestión de Programas · Dubái, EAU', pt: 'Gestão de Programas · Dubai, EAU' },
    teamRole: { en: 'Program Management · Dubai', fr: 'Gestion de Programmes · Dubaï', es: 'Gestión de Programas · Dubái', pt: 'Gestão de Programas · Dubai' },
    bio: {
      en: 'MBA. STEM project manager with over a decade of experience leading large teams and multi-million-dollar programs, including logistics for the 2016 Rio Olympics.',
      fr: 'MBA. Chef de projet STEM avec plus de dix ans d’expérience à la tête de grandes équipes et de programmes multimillionnaires, y compris la logistique des Jeux olympiques de Rio 2016.',
      es: 'MBA. Gerente de proyectos STEM con más de una década de experiencia liderando grandes equipos y programas multimillonarios, incluida la logística de los Juegos Olímpicos de Río 2016.',
      pt: 'MBA. Gerente de projetos STEM com mais de uma década de experiência liderando grandes equipes e programas multimilionários, incluindo a logística das Olimpíadas do Rio 2016.'
    }
  },
  robertMiller: {
    name: 'Dr. Robert Miller',
    aboutRole: { en: 'Research & Faculty · Albany, USA', fr: 'Recherche et Enseignement · Albany, États-Unis', es: 'Investigación y Docencia · Albany, EE. UU.', pt: 'Pesquisa e Docência · Albany, EUA' },
    teamRole: { en: 'Research & Faculty · Albany', fr: 'Recherche et Enseignement · Albany', es: 'Investigación y Docencia · Albany', pt: 'Pesquisa e Docência · Albany' },
    bio: {
      en: 'Associate Professor at the University at Albany. Researches the intersection of HIV prevention, social justice and spirituality, teaching across the US and Southern Africa.',
      fr: 'Professeur associé à l’Université d’Albany. Étudie l’intersection entre la prévention du VIH, la justice sociale et la spiritualité, enseignant aux États-Unis et en Afrique australe.',
      es: 'Profesor asociado en la Universidad de Albany. Investiga la intersección entre la prevención del VIH, la justicia social y la espiritualidad, enseñando en Estados Unidos y el sur de África.',
      pt: 'Professor associado na Universidade de Albany. Pesquisa a interseção entre prevenção do HIV, justiça social e espiritualidade, ensinando nos Estados Unidos e na África Austral.'
    }
  },
  nickJackson: {
    name: 'Nick Jackson',
    aboutRole: { en: 'Communications & Marketing · Johannesburg, South Africa', fr: 'Communication et Marketing · Johannesburg, Afrique du Sud', es: 'Comunicación y Marketing · Johannesburgo, Sudáfrica', pt: 'Comunicação e Marketing · Joanesburgo, África do Sul' },
    teamRole: { en: 'Communications & Marketing · Johannesburg', fr: 'Communication et Marketing · Johannesburg', es: 'Comunicación y Marketing · Johannesburgo', pt: 'Comunicação e Marketing · Joanesburgo' },
    bio: {
      en: 'Digital marketing producer and project manager with 16 years of experience working with African brands and NGOs on health equity communications.',
      fr: 'Producteur en marketing numérique et chef de projet, fort de 16 ans d’expérience auprès de marques et d’ONG africaines sur les communications liées à l’équité en santé.',
      es: 'Productor de marketing digital y gerente de proyectos, con 16 años de experiencia trabajando con marcas y ONG africanas en comunicaciones sobre equidad en salud.',
      pt: 'Produtor de marketing digital e gerente de projetos, com 16 anos de experiência trabalhando com marcas e ONGs africanas em comunicações sobre equidade em saúde.'
    }
  },
  keletsoMakofane: {
    name: 'Dr. Keletso Makofane',
    aboutRole: { en: 'Research & Governance · Philadelphia, USA', fr: 'Recherche et Gouvernance · Philadelphie, États-Unis', es: 'Investigación y Gobernanza · Filadelfia, EE. UU.', pt: 'Pesquisa e Governança · Filadélfia, EUA' },
    teamRole: { en: 'Research & Governance · Philadelphia', fr: 'Recherche et Gouvernance · Philadelphie', es: 'Investigación y Gobernanza · Filadelfia', pt: 'Pesquisa e Governança · Filadélfia' },
    bio: {
      en: 'MPH, PhD. Postdoctoral Fellow in causal inference, leading community-led research on HIV and mpox. Has served on WHO and UNAIDS global advisory boards.',
      fr: 'MPH, PhD. Chercheur postdoctoral en inférence causale, dirigeant des recherches communautaires sur le VIH et le mpox. A siégé dans des comités consultatifs mondiaux de l’OMS et de l’ONUSIDA.',
      es: 'MPH, PhD. Investigador postdoctoral en inferencia causal, liderando investigación comunitaria sobre VIH y mpox. Ha formado parte de comités asesores globales de la OMS y ONUSIDA.',
      pt: 'MPH, PhD. Pesquisador de pós-doutorado em inferência causal, liderando pesquisas comunitárias sobre HIV e mpox. Já atuou em comitês consultivos globais da OMS e da UNAIDS.'
    }
  },
  // Placeholder: Juan Michael Porter II was removed from the site at the
  // user's request; this slot (Public Speaking team) holds his position
  // for an incoming member, Stephen, whose surname and bio are pending.
  stephenPlaceholder: {
    name: 'Stephen',
    aboutRole: { en: 'New Team Member · Bio Coming Soon', fr: 'Nouveau Membre de l’Équipe · Biographie à Venir', es: 'Nuevo Miembro del Equipo · Biografía Próximamente', pt: 'Novo Membro da Equipe · Biografia em Breve' },
    teamRole: { en: 'New Team Member · Bio Coming Soon', fr: 'Nouveau Membre · Biographie à Venir', es: 'Nuevo Miembro · Biografía Próximamente', pt: 'Novo Membro · Biografia em Breve' },
    bio: {
      en: 'We’re excited to welcome Stephen to the collective — full bio coming soon.',
      fr: 'Nous sommes heureux d’accueillir Stephen au sein du collectif — biographie complète à venir.',
      es: 'Estamos encantados de dar la bienvenida a Stephen al colectivo — biografía completa próximamente.',
      pt: 'Estamos muito felizes em receber Stephen no coletivo — biografia completa em breve.'
    }
  }
};
