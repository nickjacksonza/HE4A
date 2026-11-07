// A small Markdown-to-HTML converter for blog posts (build/content/posts/*.md).
// It handles what a short article needs: ## and ### headings, paragraphs,
// "- " lists, **bold**, *italic* and [links](url). Everything else is plain text.

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function inline(text) {
  let out = escapeHtml(text);
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*|mailto:[^)\s]+)\)/g, (m, label, url) => {
    const external = /^https?:/.test(url) ? ' rel="noopener"' : '';
    return `<a href="${url}"${external}>${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  return out;
}

// A heading's address, for the table of contents: "Who Decides What" -> "who-decides-what".
function slugify(text) {
  return text.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// The "## Key Takeaways" list at the top of a post, taken out of the body so the
// page can show it in its own box. Returns the items and the rest of the text.
function splitTakeaways(source) {
  const match = source.replace(/\r\n/g, '\n').match(/^## Key Takeaways\n\n((?:- .*\n?)+)\n*/m);
  if (!match) return { takeaways: [], rest: source };
  const takeaways = match[1].trim().split('\n').map((l) => l.replace(/^-\s+/, ''));
  return { takeaways, rest: source.replace(match[0], '') };
}

// The "##" headings of a post, for the table of contents.
function outline(source) {
  return source
    .replace(/\r\n/g, '\n')
    .split('\n')
    .filter((l) => /^##\s/.test(l))
    .map((l) => l.replace(/^##\s+/, '').trim())
    .map((text) => ({ text, id: slugify(text) }));
}

function mdToHtml(source) {
  const blocks = source.replace(/\r\n/g, '\n').trim().split(/\n\s*\n/);
  return blocks
    .map((block) => {
      const lines = block.split('\n');
      if (/^###\s/.test(block)) { const text = block.replace(/^###\s+/, ''); return `<h3 class="prose-heading prose-heading--small" id="${slugify(text)}">${inline(text)}</h3>`; }
      if (/^##\s/.test(block)) { const text = block.replace(/^##\s+/, ''); return `<h2 class="prose-heading" id="${slugify(text)}">${inline(text)}</h2>`; }
      if (lines.every((l) => /^-\s/.test(l))) {
        return `<ul class="prose-list">\n${lines.map((l) => `  <li>${inline(l.replace(/^-\s+/, ''))}</li>`).join('\n')}\n</ul>`;
      }
      return `<p>${inline(lines.join(' '))}</p>`;
    })
    .join('\n');
}

module.exports = { mdToHtml, escapeHtml, splitTakeaways, outline };
