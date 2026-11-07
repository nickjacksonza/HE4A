// Insights (the blog): an index page and one page per post. English only, and
// only built when build/content/posts/ has at least one post (see posts.js).
const { href, escapeHtml } = require('../../helpers');
const { mdToHtml, splitTakeaways, outline } = require('../../md');
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
        <p class="post-card-date"><time datetime="${p.date}">${formatDate(p.date)}</time>${p.source ? ` · First published on ${escapeHtml(p.source)}` : ''}</p>
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
  const { takeaways, rest } = splitTakeaways(post.body);
  const headings = outline(rest);
  // Takeaways and a contents list sit above the article, in the same column.
  const takeawaysBox = takeaways.length
    ? `<aside class="takeaways" aria-labelledby="takeaways-title">
        <h2 class="takeaways-title" id="takeaways-title">Key Takeaways</h2>
        <ul>
          ${takeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join('\n          ')}
        </ul>
      </aside>`
    : '';
  const toc = headings.length >= 3
    ? `<nav class="toc" aria-labelledby="toc-title">
        <h2 class="toc-title" id="toc-title">In This Article</h2>
        <ol>
          ${headings.map((h) => `<li><a href="#${h.id}">${escapeHtml(h.text)}</a></li>`).join('\n          ')}
        </ol>
      </nav>`
    : '';
  return (locale) => `<section class="section--first band-paper">
  <div class="container">
    <p class="breadcrumb breadcrumb--light"><a href="${href(locale, 'index.html')}">Home</a> / <a href="${href(locale, 'insights.html')}">All ${TITLE}</a> / ${escapeHtml(post.title)}</p>
    <h1 class="section-heading" style="font-size:clamp(32px,4vw,48px);max-width:22ch;margin-bottom:var(--space-4)">${escapeHtml(post.title)}</h1>
    <p class="post-byline">By ${escapeHtml(post.author)} · <time datetime="${post.date}">${formatDate(post.date)}</time>${post.updated ? ` · Last updated <time datetime="${post.updated}">${formatDate(post.updated)}</time>` : ''}</p>${post.source ? `
    <p class="post-source">First published on <a href="${escapeHtml(post.sourceUrl)}" rel="noopener">${escapeHtml(post.source)}</a>. ${post.canonical ? 'Republished here with a link to the original.' : 'This page is a summary with the key points.'}</p>` : ''}
  </div>
</section>

<section class="section band-paper-subtle">
  <div class="container">
    <div class="prose">
      ${takeawaysBox}
      ${toc}
${mdToHtml(rest)}
    </div>
    <p style="margin-top:var(--space-8);display:flex;flex-wrap:wrap;gap:var(--space-3)">${post.source ? `<a href="${escapeHtml(post.sourceUrl)}" class="btn btn-outline-dark" rel="noopener">${post.canonical ? 'Read the original on' : 'Read the full article on'} ${escapeHtml(post.source)}</a>` : ''}<a href="${href(locale, 'contact.html')}" class="btn btn-primary">Talk to us about your work</a></p>
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
  canonicalUrl: post.canonical || undefined,
  main: postMain(post)
}));

module.exports = posts.length ? [indexPage, ...postPages] : [];
