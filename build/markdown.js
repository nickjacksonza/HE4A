// Converts a rendered page's <main> HTML into clean Markdown for the English
// .md copies (about-us.md, about-us/<slug>.md, ...). Small and tailored to this
// site's markup rather than a general HTML-to-Markdown library.

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'", '&nbsp;': ' ', '&middot;': '·', '&rsquo;': '’', '&lsquo;': '‘', '&mdash;': '—', '&ndash;': '–' };

function decode(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(Number(d)))
    .replace(/&[a-z]+;|&#39;/gi, (e) => ENTITIES[e] || e);
}

// `toAbsolute` turns an href from the page into an absolute URL.
function htmlToMarkdown(html, toAbsolute) {
  let s = html;

  // Remove what has no place in a text copy: scripts, pictures, the contact form,
  // the bio language toggle and the hover-only translation of short bios.
  // The form becomes a link; non-English profile bios are left out of the English copy.
  s = s.replace(/<form\b[\s\S]*?<\/form>/gi, '<p><a href="/contact.html">Contact form</a></p>');
  s = s.replace(/<div class="profile-bio-panel" id="bio-[1-9]"[\s\S]*?<\/div>/g, '');
  s = s.replace(/<(script|style|svg|picture|select|textarea)\b[\s\S]*?<\/\1>/gi, '');
  s = s.replace(/<div class="bio-toggle"[\s\S]*?<\/div>/g, '');
  s = s.replace(/<span class="bio-alt"[\s\S]*?<\/span><\/span>/g, '');
  s = s.replace(/<span class="accordion-icon"[\s\S]*?<\/span>/g, '');
  s = s.replace(/<img\b[^>]*>/gi, '');
  s = s.replace(/<!--[\s\S]*?-->/g, '');

  // HTML whitespace is insignificant; block tags below add the real line breaks.
  s = s.replace(/\s+/g, ' ');

  s = s.replace(/<a\b[^>]*?href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, inner) => {
    // A link wrapping block content (a card) links its first line and keeps the rest as text.
    if (/<(div|p|h[1-6])\b/i.test(inner)) {
      const parts = inner
        .replace(/<\/(div|p|h[1-6])>/gi, '\u0001')
        .split('\u0001')
        .map((part) => part.replace(/<[^>]+>/g, '').trim())
        .filter(Boolean);
      if (!parts.length) return '';
      return `\n\n[${parts[0]}](${toAbsolute(href)})${parts.length > 1 ? '\n\n' + parts.slice(1).join('\n\n') : ''}\n\n`;
    }
    const text = inner.replace(/<[^>]+>/g, '').trim();
    return text ? `[${text}](${toAbsolute(href)})` : '';
  });
  s = s.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, '**$2**');
  s = s.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, '_$2_');
  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (m, n, inner) => `\n\n${'#'.repeat(Number(n))} ${inner.replace(/<[^>]+>/g, '').trim()}\n\n`);
  s = s.replace(/<li\b[^>]*>/gi, '\n- ');
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/?(p|div|section|article|header|footer|ul|ol|blockquote|figure|figcaption|table|tr|dl|dt|dd|button|label)\b[^>]*>/gi, '\n\n');
  s = s.replace(/<[^>]+>/g, '');
  s = decode(s);

  return s
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n';
}

module.exports = { htmlToMarkdown, decode };
