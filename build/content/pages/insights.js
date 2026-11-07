// Insights (the blog): an index page and one page per post. English only, and
// only built when build/content/posts/ has at least one post (see posts.js).
const { href, escapeHtml } = require('../../helpers');
const { mdToHtml } = require('../../md');
const site = require('../site');
const posts = require('../posts');

const TITLE = 'Insights';
const INDEX_DESCRIPTION = 'Articles on health equity, nonprofit leadership, organizational development and equity training from the Equity Is the Word collective.';

const formatDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const allLocales = (value) => ({ en: value, fr: value, es: value, pt: value });

function indexMain(locale) {
  return `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">Home</a> / ${TITLE}</p>
    <span class="eyebrow">From the collective</span>
    <h1 class="section-heading" style="font-size:clamp(34px,4vw,52px);max-width:18ch;margin-bottom:var(--space-5)">${TITLE}</h1>
    <p class="section-subtext" style="font-size:var(--text-md);max-width:60ch">Plain-language writing on health equity, leadership and the work of building systems that serve every community.</p>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <div class="auto-grid" style="--min:300px">
      ${posts
        .map(
          (p) => `<article class="post-card">
        <time class="post-card-date" datetime="${p.date}">${formatDate(p.date)}</time>
        <h2 class="post-card-title"><a href="${href(locale, `insights/${p.slug}.html`)}">${escapeHtml(p.title)}</a></h2>
        <p class="post-card-text">${escapeHtml(p.description)}</p>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>`;
}

function postMain(post) {
  return (locale) => `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">Home</a> / <a href="${href(locale, 'insights.html')}">All ${TITLE}</a> / ${escapeHtml(post.title)}</p>
    <h1 class="section-heading" style="font-size:clamp(32px,4vw,48px);max-width:22ch;margin-bottom:var(--space-4)">${escapeHtml(post.title)}</h1>
    <p class="post-byline">By ${escapeHtml(post.author)} · <time datetime="${post.date}">${formatDate(post.date)}</time></p>
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <div class="prose">
${mdToHtml(post.body)}
    </div>
    <p style="margin-top:var(--space-8)"><a href="${href(locale, 'contact.html')}" class="btn btn-primary">Talk to us about your work</a></p>
  </div>
</section>`;
}

const indexPage = {
  slug: 'insights',
  outputFile: 'insights.html',
  activeNavId: null,
  englishOnly: true,
  meta: {
    title: allLocales(TITLE),
    seoTitle: { en: 'Insights on Health Equity and Nonprofit Leadership' },
    description: allLocales(INDEX_DESCRIPTION),
    ogImage: 'home'
  },
  main: indexMain
};

const postPages = posts.map((post) => ({
  slug: `insights-${post.slug}`,
  outputFile: `insights/${post.slug}.html`,
  activeNavId: null,
  englishOnly: true,
  post,
  meta: {
    title: allLocales(escapeHtml(post.title)),
    // A long title would be cut off in search results, so a post can give a shorter one.
    seoTitle: post.seoTitle ? { en: escapeHtml(post.seoTitle) } : undefined,
    description: allLocales(escapeHtml(post.description)),
    ogImage: 'home'
  },
  main: postMain(post)
}));

module.exports = posts.length ? [indexPage, ...postPages] : [];
