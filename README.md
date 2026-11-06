# Health Equity 4 All

This is the source code for [healthequity4all.org](https://healthequity4all.org), the website of Health Equity 4 All, the public name of Equity Is the Word, LLC.

We are a global collective of public health leaders. We work with organizations that serve historically excluded communities, on non-profit leadership, organizational development, equity trainings, healthcare recruitment and public speaking.

## Found something wrong?

Email [info@healthequity4all.org](mailto:info@healthequity4all.org) or use the [contact form](https://healthequity4all.org/contact.html). You can also [open an issue](https://github.com/nickjacksonza/HE4A/issues) on this repository.

If a page is hard to use with a keyboard, a screen reader or a translation tool, read our [accessibility statement](https://healthequity4all.org/accessibility.html) and tell us about the barrier.

## Languages

The site is in English, French, Spanish and Portuguese. The French, Spanish and Portuguese text was drafted with AI and has not yet been reviewed by native speakers. Corrections are welcome.

Every English page also has a plain Markdown copy at the same address, with `.md` in place of `.html` (for example [`/about-us.md`](https://healthequity4all.org/about-us.md)). [`/llms.txt`](https://healthequity4all.org/llms.txt) lists the pages for AI tools.

## How the site is built

The site is plain HTML, CSS and JavaScript. A small Node script assembles the pages. There is no framework and no server-side code.

```
build/        the build script, page templates and all page text
  content/    pages, people, translations, navigation, site-wide facts
src/          the stylesheet and browser script
assets/       images, fonts, icons and social-sharing images
scripts/      one-off tools for resizing images and making favicons
design/       the original design files, kept for reference and not published
```

To run it on your own computer you need [Node.js](https://nodejs.org) 20 or later.

```
npm ci --omit=dev
npm run build     # writes the finished site to dist/
npm run serve     # opens it at http://localhost:5000
```

The build writes readable, indented HTML, a minified stylesheet and script, `index.html` and the other pages, the `fr/`, `es/` and `pt/` translations, the Markdown copies, `sitemap.xml`, `robots.txt`, `llms.txt` and `.well-known/security.txt`.

## Changing the content

- Page text lives in `build/content/pages/`, one file per page. Each file holds the text for all four languages.
- Each person in the collective is described in `build/content/people.js`. Their profile page details (full biography, home-language biography, email, phone and social links) are in `build/content/profiles.js`.
- Site-wide facts, such as the address, phone number and social links, are in `build/content/site.js`.
- Colors, type and spacing are set at the top of `src/styles.css`.

## Publishing

The live site is hosted on GitHub Pages. When a change is merged into the `main` branch, a GitHub Actions workflow builds the site and publishes it. Pull requests run the same build first, so a broken build shows up before anything goes live.

## Rights

The text, photographs, logo and biographies on this site belong to Equity Is the Word, LLC and the people they describe. All rights reserved. Please ask before reusing them.
