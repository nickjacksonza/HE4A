// Per-person profile data for the pages at about-us/<slug>.html. The slug, name,
// role and short bio come from About Us (build/content/pages/about-us.js and
// build/content/people.js); this file holds only what a profile adds. Every
// field is optional and its section is hidden until it is filled in.
//
//   fullBio:   { en, fr?, es?, pt? }  full-length bio. A locale with no entry
//                                     falls back to English (labeled English).
//                                     With no fullBio the short bio is used.
//   homeBios:  [{ code, name, text, dir? }]  the bio in the person's own
//                                     language(s). code is the lang attribute,
//                                     name is the language's own name, dir is
//                                     'rtl' for Arabic. Adds the language toggle.
//   email, phone: strings
//   social:    { linkedin, twitter, instagram, facebook, website }  full URLs
module.exports = {
  'ace-robinson': {
    fullBio: {
      en: `Equity Is the Word Founder & Principal, Ace Robinson, is a leading administrative and policy communicable disease advocate and population health expert. He serves as the Acting Director of Duke University’s Sexual & Gender Minority Wellness program while supporting communities disproportionately impacted by HIV, STI’s, mpox, COVID-19, tuberculosis, malaria, and associated illnesses. Robinson is also the Founder & Principal of Equity Is the Word, a global health equity consulting firm focused on bringing systemic changes to historically excluded key population who experience poorer health outcomes. He sits on the UCLA Center for HIV, Identification, Prevention & Treatment (CHIPTS) steering committee; UCSF’s Regional Advisory Board for their Health Equity Collaborative; and on the Coalition for TB Free California steering committee.

Ace has previously served in senior leadership roles at the National Minority AIDS Council (NMAC) in Washington, DC, Gay Men’s Health Crisis (GMHC) in New York City, David Geffen School of Medicine at UCLA (Los Angeles), Partners in Health in Haiti, the Desmond Tutu Health (formerly HIV) Foundation in Cape Town, South Africa, and PCAF (Seattle, WA). Ace has also served as Chair of the Federal AIDS Policy Partnership (FAPP) and Chair of the Council to Eliminate Anti-Black Racism at Brown University. Robinson holds a master’s degree in healthcare leadership from Brown University, a master’s degree in public health from the University of Cape Town, and a bachelor’s in chemistry from Duke University.`
    }
  },
  'diego-calixto': {
    fullBio: {
      en: `Diego Calixto is a Brazilian activist and a person living with HIV. He holds a Master’s degree in Public Policy & Health from Fiocruz Brasília. He has solid experience working with adolescents and young people living with HIV. He was a mentor in the first cohort of the IAS Mentorship Programme and, currently, he is a researcher at Fiocruz Brasília, focusing on health and social justice.`,
      pt: `Diego Calixto é um ativista brasileiro e pessoa vivendo com HIV. Possui mestrado em Políticas Públicas e Saúde pela Fiocruz Brasília. Possui sólida experiência de trabalho com adolescentes e jovens que vivem com HIV. Foi mentor da primeira coorte do Programa de Mentoria da IAS e, atualmente, é pesquisador da Fiocruz Brasília, com foco em saúde e justiça social.`
    },
    homeBios: [
      {
        code: 'pt',
        name: 'Português',
        text: `Diego Calixto é um ativista brasileiro e pessoa vivendo com HIV. Possui mestrado em Políticas Públicas e Saúde pela Fiocruz Brasília. Possui sólida experiência de trabalho com adolescentes e jovens que vivem com HIV. Foi mentor da primeira coorte do Programa de Mentoria da IAS e, atualmente, é pesquisador da Fiocruz Brasília, com foco em saúde e justiça social.`
      }
    ]
  },
  'eduardo-culbeaux': {
    fullBio: {
      en: `Eduardo Culbeaux, originally from Mexico, has served as an educator in Southeast Asia for more than a decade focusing on addressing the educational needs and challenges facing youth in the region. He empowers young people through journalism programs in both Asia and the Americas with the goal of empowering the next generation.

Drawing on his diverse teaching experience across multiple continents, Culbeaux brings a unique global mindset to our equity work. With his thorough understanding of tailoring educational approaches to local contexts, he draws inspiration from successful initiatives worldwide.`,
      es: `Eduardo Culbeaux, originario de México, se ha desempeñado como educador en el Sudeste Asiático durante más de una década, enfocándose en atender las necesidades y los desafíos educativos que enfrentan los jóvenes de la región. Empodera a los jóvenes a través de programas de periodismo tanto en Asia como en las Américas, con el objetivo de empoderar a la próxima generación.

Gracias a su diversa experiencia docente en varios continentes, Culbeaux aporta una mentalidad global única a nuestro trabajo en favor de la equidad. Con su profundo conocimiento de cómo adaptar los enfoques educativos a los contextos locales, se inspira en iniciativas exitosas de todo el mundo.`
    },
    homeBios: [
      {
        code: 'es',
        name: 'Español',
        text: `Eduardo Culbeaux, originario de México, se ha desempeñado como educador en el Sudeste Asiático durante más de una década, enfocándose en atender las necesidades y los desafíos educativos que enfrentan los jóvenes de la región. Empodera a los jóvenes a través de programas de periodismo tanto en Asia como en las Américas, con el objetivo de empoderar a la próxima generación.

Gracias a su diversa experiencia docente en varios continentes, Culbeaux aporta una mentalidad global única a nuestro trabajo en favor de la equidad. Con su profundo conocimiento de cómo adaptar los enfoques educativos a los contextos locales, se inspira en iniciativas exitosas de todo el mundo.`
      }
    ]
  },
  'john-hanna': {
    fullBio: {
      en: `John Hanna, DDS, is a dedicated dental professional and global health advocate based in Rome, Italy. He holds a Bachelor’s Degree in Oral and Dental Medicine from Cairo University and is pursuing a Master’s Degree in Healthcare Management at Università Cattolica del Sacro Cuore. Co-founding Egypt's Dentalia Initiative from 2017 to 2022, John led efforts promoting dental awareness and community education, benefiting underserved populations. His social commitment includes volunteering with the European Solidarity Corps in Romania and Poland, focusing on youth development and community engagement. Previously, John served as a Community Organizer at IWPR, establishing Etihad's code of conduct and advocating inclusivity within the LGBTIQ community. His contributions in healthcare management and advocacy have been recognized in various publications. Fluent in Arabic and English, proficient in Italian, and familiar with Romanian and French, he brings multicultural experiences from Egypt, Romania, Poland, and currently Italy.`
    },
    homeBios: [
      {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        text: `جون حنا، طبيب أسنان متفانٍ وداعم متحمس للصحة العامة مقيم بروما، إيطاليا. حاصل على درجة البكالوريوس في طب وجراحة الأسنان من جامعة القاهرة، ويتابع دراسة الماجستير في إدارة الرعاية الصحية في جامعة القلب المقدس. شارك جون كشريك مؤسس في مبادرة دنتاليا في مصر منذ عام 2017 حتى 2022، حيث قاد جهودًا لتعزيز الوعي بصحة الأسنان والتعليم المجتمعي، مما استفادت منه الشرائح السكانية غير المحظية. يشمل التزامه الاجتماعي عمله التطوعي مع هيئة التضامن الأوروبية في رومانيا وبولندا، مع التركيز على تنمية الشباب والمشاركة المجتمعية. عمل جون سابقًا كمنظم مجتمعي في IWPR، حيث أسس لوائح سلوكية لشركة "اتحاد" ودعم التضمين داخل مجتمع LGBTIQ. تم التعرف على مساهماته في إدارة الرعاية الصحية والدفاع عنها في مختلف النشرات. يجيد العربية والإنجليزية بطلاقة، ولديه مهارات جيدة في الإيطالية، ويمتلك معرفة بالرومانية والفرنسية، ويجلب تجارب ثقافية متعددة من مصر ورومانيا وبولندا وإيطاليا حاليًا.`
      }
    ]
  },
  'lauren-miller': {
    fullBio: {
      en: `In society's ever-evolving landscape, Lauren Miller stands out as a trailblazer, dedicated to creating positive change for marginalized communities through her advocacy for diversity, inclusion, and health equity. Her journey began with a commitment to empower those often overlooked, guided by values of "Friendship, Leadership, and Service to humanity" instilled by Alpha Phi Omega.

Her key roles include having served as Health Equity Coordinator at NMAC; Program Manager at Solutions Not Punishment Co. (SNAPCO); and Program Manager at LaGender Inc. Miller has been responsible for leading community-centered initiatives to support activists focused on improving health outcomes through racial equity and social justice reforms through leadership development.

Lauren's unwavering dedication continues to shape positive change, exemplifying the impact of commitment to a more equitable society.`
    }
  },
  'leandro-maldonado': {
    fullBio: {
      en: `Leandro Maldonado, MBA, is a seasoned STEM project manager with over a decade of experience in the management field. A native Brazilian based in Rio de Janeiro, he holds a Bachelor’s in Civil Engineering from Universidade Federal de Uberlândia and an MBA from Fundação Getúlio Vargas. Leandro’s career trajectory began with oversight of major country-funded projects and later he improved outcome standards at local state-funded entities. He has led large teams of over 50 individuals with annual budgets over $1M dollars. For the 2016 Rio Olympics, he was entrusted with enhancing sales channels and managing transport operations. Proficient in AutoCAD, MS Project, Excel, SAP, and Oracle, Leandro is fluent in English, Portuguese, and Italian, with intermediate Spanish.`
    }
  },
  'lucy-wanjiku-njenga': {
    fullBio: {
      en: `Lucy Wanjiku Njenga is a dynamic young leader who prides herself in creating an enabling environment for other young leaders to thrive. She has worked in the HIV responses for more than ten years with experience in establishing feminist movements as well as agitating for gender equality from the grassroots level to global level.

Wanjiku is the Founding Coordinator of Sauti Skika, the first network of adolescents living with HIV in Kenya and the Founder and Executive Director of Positive Young Women Voices, a grassroots community-based organization that works to empower adolescent girls and young women living with or affected by HIV. She serves as the member of the ICASO Board of Directors; Board Member in the Country Coordinating Mechanism to the Global Fund and a former African Delegate to the UNAIDS Programme Coordinating Board.

Wanjiku has authored Hope Made A Way - a memoir of her journey of triumph against adversities and inequalities.`
    },
    homeBios: [
      {
        code: 'sw',
        name: 'Kiswahili',
        text: `Lucy Wanjiku Njenga ni kiongozi machachari anaona fahari katika kuunda mazingira yanayowezesha viongozi wengine vijana kufanikiwa. Amefanya kazi katika kukabiliana na HIV kwa zaidi ya miaka kumi akijenga harakati za kifeministi na kupigania usawa wa kijinsia kuanzia ngazi ya chini kabisa hadi ngazi ya kimataifa.

Wanjiku ni Mwanzilishi na Mratibu wa kwanza wa Sauti Skika, mtandao wa kwanza wa vijana wanaoishi na HIV nchini Kenya na Mwanzilishi na Mkurugenzi Mtendaji wa Positive Young Women Voices, shirika la msingi la jamii linalofanya kazi ya kuwawezesha wasichana na wanawake wanaoishi na au walioathiriwa na HIV. Anatumikia kama mwanachama wa Bodi ya ICASO; Mjumbe wa Bodi katika Mfumo wa Uratibu wa Nchi kwa Global Fund na alikuwa Mwakilishi wa Afrika kwenye Bodi ya Uratibu ya Programu ya UNAIDS.

Wanjiku ameandika kitabu Hope Made A Way - kumbukumbu ya safari yake ya ushindi dhidi ya vikwazo maishani.`
      }
    ]
  },
  'robert-miller': {
    fullBio: {
      en: `Dr. Robert L. Miller, Jr. is a cross-cultural social work researcher and Associate Professor at The State University of New York at Albany, joining the Social Welfare faculty in 2000. He examines the intersection of HIV prevention, social justice and spirituality in the lives of Black gay men and transgender women, as well as Black clergy who are publicly and theologically supportive of Black sexual and gender minorities. He is the Inaugural Research Fellow for the Desmond Tutu Center for Spirituality and The Civil Society at the University of The Western Cape in South Africa where he taught “The US Africa Partnerships to Build Stronger Communities” examining the social and health policies undergirding social work services in gender rights and child welfare coupled with HIV prevention. As a visiting professor at the Center for AIDS Prevention Studies at The University of California, San Francisco Medical School, he has supported social work doctoral students in Ghana, Namibia, South Africa and Ethiopia.`
    }
  },
  'victoria-owoyele': {
    fullBio: {
      en: `Victoria Oluwatosin Owoyele holds a PhD in public health. She is native to Nigeria and has a diverse academic background. Victoria actively collaborates with healthcare and public health sectors, focusing on data analysis, equitable data surveillance, and inclusive interventions for marginalized populations, particularly in BIPOC communities. Her impactful achievements include successfully securing grants, orchestrating the administration of over 10,000 COVID-19 vaccines within the community in 90 days, and overseeing 15,000 HIV tests among residents. Her expertise lies in utilizing data to guide interventions, formulate recommendations, and drive policy reforms for improved health outcomes. Beyond her professional endeavors, Victoria is an avid traveler, driven by a curiosity to gain insights into diverse cultures and healthcare systems globally. She is fluent in several languages: English, Yoruba, Hausa, and Arabic.`
    },
    homeBios: [
      {
        code: 'yo',
        name: 'Yorùbá',
        text: `Victoria Oluwatosin Owoyele ni oye dokita (PhD) ni ilera gbogbo eniyan. O jẹ abinibi si Nigeria ati pe o ni ipilẹ ẹkọ ti o yatọ. Victoria ṣe ifọwọsowọpọ pẹlu ilera ati awọn apa ilera ti gbogbo eniyan, ni idojukọ lori itupalẹ data, iwoye data iwọntunwọnsi, ati awọn ilowosi ifisi fun awọn eniyan ti a ya sọtọ, pataki ni awọn agbegbe BIPOC. Awọn aṣeyọri ipa rẹ pẹlu ni ifipamo awọn ifunni ni aṣeyọri, ṣiṣe akoso iṣakoso ti o ju 10,000 COVID-19 awọn ajesara laarin agbegbe ni awọn ọjọ 90, ati abojuto awọn idanwo HIV 15,000 laarin awọn olugbe. Imọye rẹ wa ni lilo data lati ṣe itọsọna awọn ilowosi, ṣe agbekalẹ awọn iṣeduro, ati awọn atunṣe eto imulo fun ilọsiwaju awọn abajade ilera. Ni ikọja awọn igbiyanju alamọdaju rẹ, Victoria jẹ aririn ajo ti o ni itara, ti o ni itara lati ni oye si awọn aṣa oniruuru ati awọn eto ilera ni agbaye. O ni awọn ede pupọ: English, Yoruba, Hausa, ati Arabic.`
      },
      {
        code: 'ha',
        name: 'Hausa',
        text: `Victoria Oluwatosin Owoyele tana da digirin digirgir (PhD) a fannin lafiyar jama'a. 'Yar asalin Najeriya ce kuma tana da ilimin ilimi daban-daban. Victoria tana haɗa hannu sosai tare da kiwon lafiya da sassan kiwon lafiyar jama'a, suna mai da hankali kan nazarin bayanai, daidaita daidaiton bayanai, da kuma shiga tsakani ga al'ummomin da aka ware, musamman a cikin al'ummomin BIPOC. Nasarorin da ta yi tasiri sun hada da samun nasarar samun tallafi, shirya gudanar da alluran rigakafin COVID-19 sama da 10,000 a cikin al'umma a cikin kwanaki 90, da kuma kula da gwajin cutar kanjamau 15,000 tsakanin mazauna. Kwarewarta ta ta'allaka ne wajen yin amfani da bayanai don jagorantar shiga tsakani, tsara shawarwari, da fitar da sauye-sauyen manufofi don ingantattun sakamakon lafiya. Bayan ayyukanta na ƙwararru, Victoria mai son tafiye-tafiye ce, wadda sha'awar ta ke motsa ta don samun fahimtar al'adu daban-daban da tsarin kiwon lafiya a duniya. Tana iya magana da yaruka da yawa: Turanci, Yarbanci, Hausa, da Larabci.`
      },
      {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        text: `فيكتوريا أولواتوسين أوويلي حاصلة على درجة الدكتوراه في الصحة العامة. هي مواطنة في نيجيريا ولها خلفية أكاديمية متنوعة. تتعاون فيكتوريا بنشاط مع قطاعي الرعاية الصحية والصحة العامة، مع التركيز على تحليل البيانات ومراقبة البيانات العادلة والتدخلات الشاملة للسكان المهمشين، لا سيما في مجتمعات BIPOC. تشمل إنجازاتها المؤثرة النجاح في تأمين المنح، وتنظيم إدارة أكثر من 10,000 لقاح لكوفيد-19 داخل المجتمع في 90 يومًا، والإشراف على 15,000 اختبار لفيروس نقص المناعة البشرية بين السكان. تكمن خبرتها في استخدام البيانات لتوجيه التدخلات وصياغة التوصيات ودفع إصلاحات السياسات لتحسين النتائج الصحية. بالإضافة إلى مساعيها المهنية، تعتبر فيكتوريا شغوفة بالسفر، ويدفعها الفضول لاكتساب نظرة ثاقبة حول الثقافات المتنوعة وأنظمة الرعاية الصحية على مستوى العالم. تتقن عدة لغات: الإنجليزية، واليوروبا، والهاوسا، والعربية.`
      }
    ]
  },
  'tinashe-stephen-muchenje': {
    fullBio: {
      en: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, is a seasoned finance professional and Virtual CFO with over 12 years of experience in financial planning, analysis, and strategic budgeting. He is known for driving operational efficiency, strengthening controls, and delivering data-driven insights that support sustainable business growth.',
      fr: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, est un professionnel de la finance chevronné et un directeur financier virtuel (Virtual CFO) comptant plus de 12 ans d’expérience en planification financière, en analyse et en budgétisation stratégique. Il est reconnu pour sa capacité à améliorer l’efficacité opérationnelle, à renforcer les contrôles et à fournir des analyses fondées sur les données qui soutiennent une croissance durable des entreprises.',
      es: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, es un profesional de las finanzas con amplia trayectoria y Virtual CFO, con más de 12 años de experiencia en planificación financiera, análisis y presupuestación estratégica. Es conocido por impulsar la eficiencia operativa, fortalecer los controles y aportar análisis basados en datos que apoyan un crecimiento empresarial sostenible.',
      pt: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, é um profissional de finanças experiente e Virtual CFO, com mais de 12 anos de experiência em planejamento financeiro, análise e orçamento estratégico. É conhecido por impulsionar a eficiência operacional, fortalecer controles e entregar análises baseadas em dados que sustentam o crescimento sustentável dos negócios.'
    },
    homeBios: [
      {
        code: 'sn',
        name: 'chiShona',
        text: 'Tinashe Stephen Muchenje, MBA, ACMA, CGMA, AICPA, inyanzvi yezvemari uye Virtual CFO ane makore anopfuura gumi nemaviri eruzivo muhurongwa hwezvemari, kuongorora, uye kuronga bhajeti. Anozivikanwa nekusimudzira kushanda zvakanaka kwemari, kusimbisa mitemo yekudzora, uye kupa ongororo dzinobva padata dzinotsigira kukura kwebhizimisi kunogara kwenguva refu.'
      }
    ]
  },
  'brian-kanyemba': {
    fullBio: {
      en: `Brian Kanyemba is a Cape Town-based public health consultant and advocate with over 15 years of experience in HIV prevention, key populations programming, substance abuse, and human rights across Western, Southern and Eastern Africa. A PhD candidate at Stellenbosch University, studying a digital intervention framework for long-acting injectable PrEP among key populations. His work advances community-led HIV responses, U=U, anti-criminalization advocacy, and equitable access for LGBTI+ and other key populations across the African continent.`
    },
    homeBios: [
      {
        code: 'sn',
        name: 'chiShona',
        text: `Brian Kanyemba inyanzvi yezvehutano hweveruzhinji anogara kuCape Town, ane ruzivo rwemakore anodarika gumi nemashanu mukudzivirira HIV, zvirongwa zvemapoka anokosha(KPs), kushandiswa nezvisizvo kwezvinodhaka, uye kodzero dzevanhu kumaMawodzanyemba, Mabavazuva nekuMadokero kweAfrica. Ari mudzidzi wePhD paStellenbosch University, ari kudzidza hurongwa hwekupindira hwedhijitari hwePrEP inobayiwa inogara kwenguva refu pakati pemapoka anokosha. Basa rake rinosimudzira mhinduro dzeHIV dzinotungamirwa nenharaunda, U=U, kurwisa mitemo inodzvanyirira kedzero dzevanhu, uye mukana wakaenzana weLGBTI+ nemamwe mapoka anokosha muAfrica yose.`
      }
    ]
  }
};
