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

function mdToHtml(source) {
  const blocks = source.replace(/\r\n/g, '\n').trim().split(/\n\s*\n/);
  return blocks
    .map((block) => {
      const lines = block.split('\n');
      if (/^###\s/.test(block)) return `<h3 class="prose-heading prose-heading--small">${inline(block.replace(/^###\s+/, ''))}</h3>`;
      if (/^##\s/.test(block)) return `<h2 class="prose-heading">${inline(block.replace(/^##\s+/, ''))}</h2>`;
      if (lines.every((l) => /^-\s/.test(l))) {
        return `<ul class="prose-list">\n${lines.map((l) => `  <li>${inline(l.replace(/^-\s+/, ''))}</li>`).join('\n')}\n</ul>`;
      }
      return `<p>${inline(lines.join(' '))}</p>`;
    })
    .join('\n');
}

module.exports = { mdToHtml, escapeHtml };
