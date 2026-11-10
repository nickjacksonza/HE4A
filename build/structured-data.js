// schema.org structured data (JSON-LD), built as one @graph per page.
//
// Every page carries the same core nodes: Organization, WebSite, Ace Robinson
// (Person, the founder) and the page's own WebPage with its breadcrumb.
// Pages that show people add a Person node for each of them; service pages add
// a Service and, where they have FAQs, a FAQPage. Nodes refer to each other by
// @id, and the ids use the English URLs so the same entity has the same id in
// every language. Only facts that already appear on the site go in here.

const site = require('./content/site');
const locales = require('./content/locales');
const people = require('./content/people');
const profiles = require('./content/profiles');
const peoplePhotos = require('./content/peoplePhotos');
const shared = require('./content/shared');
const { NAV_STRUCTURE, NAV_LABELS } = require('./content/nav');
const aboutUs = require('./content/pages/about-us');
const { slugify, cleanPath } = require('./helpers');
const { testimonials } = require('./content/testimonials');

const ACE_SLUG = 'ace-robinson';
const ACE_SUFFIX = 'M.P.H., M.H.L';

const BASE = site.baseUrl;
const ORG_ID = `${BASE}/#organization`;
const SITE_ID = `${BASE}/#website`;

const LANGUAGE_NAMES = ['English', 'French', 'Spanish', 'Portuguese'];
const PHOTO_WIDTH = 700;

const builtOn = new Date().toISOString().slice(0, 10);

function localeOf(code) {
  return locales.find((l) => l.code === code);
}

function pageUrl(locale, outputFile) {
  const prefix = localeOf(locale).isDefault ? '' : `/${locale}`;
  return `${BASE}${prefix}/${cleanPath(outputFile)}`;
}

// Everyone shown on the site, keyed by display name. Jas has no profile page,
// so has no slug and gets an id based on the name.
function registry() {
  const out = {};
  for (const p of aboutUs.roster('en')) out[p.name] = { slug: p.slug, name: p.name };
  for (const p of Object.values(people)) if (!out[p.name]) out[p.name] = { slug: p.slug || null, name: p.name };
  return out;
}
const REGISTRY = registry();

function personId(name) {
  const entry = REGISTRY[name];
  return entry.slug ? `${BASE}/about-us/${entry.slug}.html#person` : `${BASE}/#person-${slugify(name)}`;
}

// Role and place as shown on About Us: "Role · City, Country".
function roleAndPlace(locale, name) {
  const entry = REGISTRY[name];
  const fromRoster = aboutUs.roster(locale).find((p) => p.name === name);
  const raw = fromRoster
    ? fromRoster.role
    : Object.values(people).find((p) => p.name === name).aboutRole[locale];
  const [role, place] = raw.split(' · ');
  return { role, place, entry };
}

function shortBio(locale, name) {
  const fromRoster = aboutUs.roster(locale).find((p) => p.name === name);
  if (fromRoster) return fromRoster.bio;
  return Object.values(people).find((p) => p.name === name).bio[locale];
}

function personNode(locale, name) {
  const { role, place, entry } = roleAndPlace(locale, name);
  const profile = (entry.slug && profiles[entry.slug]) || {};
  const prefix = name.startsWith('Dr. ') ? 'Dr.' : null;
  const plainName = prefix ? name.slice(4) : name;
  const photoKey = peoplePhotos[name];
  const social = Object.values(profile.social || {}).filter(Boolean);
  const languages = ['en', ...(profile.homeBios || []).map((b) => b.code)];
  const bio = shortBio(locale, name);

  return {
    '@type': 'Person',
    '@id': personId(name),
    name: plainName,
    ...(prefix ? { honorificPrefix: prefix } : {}),
    ...(entry.slug === ACE_SLUG ? { honorificSuffix: ACE_SUFFIX } : {}),
    ...(role ? { jobTitle: role } : {}),
    description: bio,
    ...(entry.slug ? { url: pageUrl(locale, `about-us/${entry.slug}.html`) } : {}),
    ...(photoKey ? { image: `${BASE}/assets/photos-optimized/people/${photoKey}/${photoKey}-${PHOTO_WIDTH}.jpg` } : {}),
    worksFor: { '@id': ORG_ID },
    memberOf: { '@id': ORG_ID },
    ...(place ? { workLocation: { '@type': 'Place', name: place } } : {}),
    knowsLanguage: languages,
    ...(social.length ? { sameAs: social } : {})
  };
}

function servicePages(pages) {
  return pages.filter((p) => p.service);
}

function organizationNode(locale, pages, members) {
  const labels = NAV_LABELS[locale];
  const services = servicePages(pages);
  const catalog = services.map((p) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: p.meta.title[locale], url: pageUrl(locale, p.outputFile) }
  }));

  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.siteName,
    alternateName: [site.alternateName, 'HE4A'],
    legalName: site.legalName,
    url: site.baseUrl,
    logo: { '@type': 'ImageObject', url: `${BASE}/assets/logo/mark-transparent-76.webp`, width: 76, height: 76 },
    image: `${BASE}/assets/og/home.jpg`,
    slogan: site.tagline[locale],
    description: pages.find((p) => p.slug === 'home').meta.description[locale],
    email: site.email,
    telephone: site.phone,
    sameAs: Object.values(site.social),
    founder: { '@id': personId('Ace Robinson') },
    ...(members && members.length ? { member: members.map((n) => ({ '@id': personId(n) })) } : {}),
    address: site.offices.map((o) => ({ '@type': 'PostalAddress', addressLocality: o.city, addressCountry: o.country })),
    areaServed: 'Worldwide',
    knowsLanguage: ['en', 'fr', 'es', 'pt'],
    knowsAbout: services.map((p) => p.meta.title.en),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: labels.workWithUs,
        email: site.email,
        telephone: site.phone,
        availableLanguage: LANGUAGE_NAMES,
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00'
        },
        url: pageUrl(locale, 'contact.html')
      }
    ],
    hasOfferCatalog: { '@type': 'OfferCatalog', name: labels.workWithUs, itemListElement: catalog }
  };
}

function websiteNode(locale) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: site.baseUrl,
    name: site.siteName,
    alternateName: [site.alternateName, 'HE4A'],
    inLanguage: locales.map((l) => l.hreflang),
    publisher: { '@id': ORG_ID }
  };
}

function breadcrumbNode(locale, page, webPageId, title) {
  if (page.slug === 'home') return null;
  const home = { '@type': 'ListItem', position: 1, name: shared.breadcrumbHome[locale], item: pageUrl(locale, 'index.html') };
  const items = [home];
  if (page.outputFile.startsWith('about-us/')) {
    items.push({ '@type': 'ListItem', position: 2, name: aboutUs.meta.title[locale], item: pageUrl(locale, 'about-us.html') });
  }
  if (page.outputFile.startsWith('insights/')) {
    items.push({ '@type': 'ListItem', position: 2, name: 'Insights', item: pageUrl(locale, 'insights.html') });
  }
  items.push({ '@type': 'ListItem', position: items.length + 1, name: title, item: pageUrl(locale, page.outputFile) });
  return { '@type': 'BreadcrumbList', '@id': `${webPageId}-breadcrumb`.replace('#webpage', '#breadcrumb'), itemListElement: items };
}

// pageType: the schema.org type for the page itself.
function pageType(page) {
  if (page.slug === 'about-us') return 'AboutPage';
  if (page.slug === 'contact') return 'ContactPage';
  if (page.slug === 'insights') return 'CollectionPage';
  if (page.outputFile.startsWith('about-us/')) return 'ProfilePage';
  return 'WebPage';
}

// Names of the people a page features. Ace is always in the graph; the About
// Us page lists the whole roster.
function peopleOn(page, pages) {
  if (page.post) return [page.post.author];
  if (page.slug === 'about-us') return [...new Set([...aboutUs.roster('en').map((p) => p.name), people.jasPlaceholder.name])];
  if (page.outputFile.startsWith('about-us/')) {
    const self = Object.values(REGISTRY).find((e) => e.slug === page.slug);
    return self ? [self.name] : [];
  }
  return page.people || [];
}

function forPage(page, locale, pages) {
  const url = pageUrl(locale, page.outputFile);
  const webPageId = `${url}#webpage`;
  const isProfile = page.outputFile.startsWith('about-us/');
  const featured = peopleOn(page, pages);
  const names = [...new Set(['Ace Robinson', ...featured])];
  const title = isProfile ? (REGISTRY[Object.keys(REGISTRY).find((n) => REGISTRY[n].slug === page.slug)] || {}).name || page.meta.title[locale] : page.meta.title[locale];
  const members = page.slug === 'about-us' ? featured : null;

  const graph = [organizationNode(locale, pages, members), websiteNode(locale), ...names.map((n) => personNode(locale, n))];

  const crumb = breadcrumbNode(locale, page, webPageId, title);
  const webPage = {
    '@type': pageType(page),
    '@id': webPageId,
    url,
    name: page.meta.title[locale],
    description: page.meta.description[locale],
    inLanguage: localeOf(locale).hreflang,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    dateModified: builtOn,
    ...(crumb ? { breadcrumb: { '@id': crumb['@id'] } } : {}),
    ...(isProfile && featured.length ? { mainEntity: { '@id': personId(featured[0]) } } : {}),
    ...(!isProfile && page.slug !== 'about-us' && featured.length ? { mentions: featured.map((n) => ({ '@id': personId(n) })) } : {})
  };
  graph.push(webPage);
  if (crumb) graph.push(crumb);

  if (page.post) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: page.post.title,
      description: page.post.description,
      url,
      datePublished: page.post.date,
      dateModified: page.post.updated || page.post.date,
      inLanguage: localeOf(locale).hreflang,
      author: { '@id': personId(page.post.author) },
      publisher: { '@id': ORG_ID },
      isPartOf: { '@id': SITE_ID },
      mainEntityOfPage: { '@id': webPageId },
      ...(page.post.sourceUrl ? { isBasedOn: page.post.sourceUrl } : {})
    });
  }

  if (page.service) {
    const labels = NAV_LABELS[locale];
    const navItem = NAV_STRUCTURE.find((i) => i.href === page.outputFile);
    const seen = new Set();
    const parts = (navItem ? navItem.items : []).filter((s) => {
      const key = labels[s.id];
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.meta.title[locale],
      description: page.meta.description[locale],
      url,
      serviceType: page.meta.title.en,
      provider: { '@id': ORG_ID },
      areaServed: 'Worldwide',
      availableLanguage: LANGUAGE_NAMES,
      mainEntityOfPage: { '@id': webPageId },
      ...(parts.length
        ? {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: page.meta.title[locale],
              itemListElement: parts.map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: labels[s.id], url: `${url}#${s.anchor}` }
              }))
            }
          }
        : {})
    });
  }

  // The "What Clients Say" quotes, as Reviews of the service. There is no star rating,
  // because none was given, and none is made up.
  if (page.service) {
    testimonials(locale).forEach((t, i) => {
      const prefix = t.name.startsWith('Dr. ') ? 'Dr.' : null;
      graph.push({
        '@type': 'Review',
        '@id': `${url}#review-${i + 1}`,
        reviewBody: t.quote,
        inLanguage: localeOf(locale).hreflang,
        author: { '@type': 'Person', name: prefix ? t.name.slice(4) : t.name, ...(prefix ? { honorificPrefix: prefix } : {}), ...(t.title ? { jobTitle: t.title } : {}) },
        itemReviewed: { '@type': 'Service', '@id': `${url}#service`, name: page.meta.title[locale] }
      });
    });
  }

  if (typeof page.faqs === 'function') {
    const faqs = page.faqs(locale);
    if (faqs.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        inLanguage: localeOf(locale).hreflang,
        isPartOf: { '@id': webPageId },
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
      });
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

module.exports = { forPage };
