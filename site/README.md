# Ready-to-upload static site

Everything in this folder is the finished, built website. No build step,
no npm, no Python, no server-side code of any kind — just plain HTML,
CSS, JS, images and fonts.

## How to deploy

Upload the **contents** of this folder (not the folder itself) to the web
root of your server, exactly as they are:

- `index.html`, `contact.html`, `about-us.html`, etc. — the English pages
- `fr/`, `es/`, `pt/` — the French, Spanish and Portuguese translations
- `styles.css`, `scripts.js` — the site's stylesheet and behavior
- `assets/` — images, fonts, icons
- `robots.txt`, `sitemap.xml` — for search engines

On a plain host (e.g. Hetzner), that's typically your `public_html/` or
`/var/www/<yoursite>/` directory. Once uploaded, `index.html` is the
homepage and everything else just works via ordinary relative URLs — no
web server configuration, rewrite rules, or `.htaccess` needed.

## Where this comes from

This folder is a snapshot of the site as built from source. The actual
source code — page content, styles, translations — lives outside this
folder (`build/`, `src/`, `assets/` at the repo root) and is assembled by
a small Node build script (`npm run build`). If you (or an AI assistant)
change the source later, this folder needs to be rebuilt and re-committed
to stay in sync — it does not update itself.
