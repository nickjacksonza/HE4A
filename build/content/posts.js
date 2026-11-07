// Blog posts. Each post is a Markdown file in build/content/posts/ with a short
// header block, for example:
//
//   ---
//   title: Five Questions to Ask Before a Board Governance Review
//   date: 2026-12-01
//   description: One sentence, about 150 characters, shown in search results.
//   author: Ace Robinson
//   ---
//   Body text in Markdown...
//
// The file name becomes the address: board-governance-questions.md is published
// at /insights/board-governance-questions.html. Files whose names start with an
// underscore (like _example.md) are ignored. With no posts, the Insights page
// and its footer link are not built at all.

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'posts');

function parse(file) {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8').replace(/\r\n/g, '\n');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing the --- header block`);
  const meta = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) meta[m[1]] = m[2].trim();
  }
  for (const key of ['title', 'date', 'description']) {
    if (!meta[key]) throw new Error(`${file}: missing "${key}" in the header block`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) throw new Error(`${file}: date must look like 2026-12-01`);
  return {
    slug: file.replace(/\.md$/, ''),
    title: meta.title,
    date: meta.date,
    description: meta.description,
    author: meta.author || 'Ace Robinson',
    body: match[2].trim()
  };
}

const posts = fs.existsSync(DIR)
  ? fs
      .readdirSync(DIR)
      .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
      .map(parse)
      .sort((a, b) => b.date.localeCompare(a.date))
  : [];

module.exports = posts;
