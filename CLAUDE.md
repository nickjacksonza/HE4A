# Health Equity 4 All — Website Redesign

## Project Overview
The production static site for healthequity4all.org, served by GitHub Pages. Built (not a framework — a small hand-rolled Node script) from `build/` into `dist/` (gitignored, `npm run build`); `.github/workflows/deploy-pages.yml` builds and publishes it on every push to main. The original `*.dc.html` files, `_ds/`, and `support.js` are Claude Design authoring-tool artifacts, kept in `design/` as design reference only and never shipped; `build/build.js` asserts none of that markup leaks into output. The build also writes `robots.txt`, `sitemap.xml`, `llms.txt`, `.well-known/security.txt`, `CNAME` and an English `.md` copy of each page.

## Pages
Implemented as `build/content/pages/*.js` (one module per page below), assembled by `build/build.js`. Each module's `main(locale)` renders from a per-locale `COPY` object zipped against locale-independent `META` (images, anchors, layout) — keep that split when editing content instead of inlining new locale-specific strings into the template.

| File | Purpose |
|------|---------|
| `design/Home.dc.html` | Homepage — hero, impact stats, services grid, quotes, collective grid, CTA |
| `design/Non-Profit-Leadership.dc.html` | Service page — board governance, executive coaching |
| `design/Organizational-Development.dc.html` | Service page — program oversight, comms, policy, grants |
| `design/Trainings.dc.html` | Service page, now titled Equity Trainings — racial equity, LGBTQ+ equity, SDOH (tabbed) |
| `design/Public-Speaking.dc.html` | Service page — keynotes, moderation, briefings |
| `build/content/pages/recruitment.js` (no `design/*.dc.html` source — added post-redesign, modeled on Public Speaking) | Service page, titled Healthcare Recruitment — executive search, clinical & frontline hiring, equity-centered hiring |
| `design/About-Us.dc.html` | About page — vision/mission, values, full collective grid |
| `design/Contact.dc.html` | Contact form + office info + social links |
| `design/SiteHeader.dc.html` | Shared header — nav with dropdowns, language switcher (EN/FR/ES/PT) |
| `design/SiteFooter.dc.html` | Shared footer — links, hours, locations |

## Design System
`design/_ds/` holds the bound design-system bundle. The live token values — colors, type scale, spacing, radius — are declared in `src/styles.css`; read them there rather than from a copy here, which drifts.

## Design Patterns
- **Heroes**: Full-bleed images with left-aligned dark gradient overlay, light text
- **Color bands**: Alternate paper → sky → paper → blossom → paper; never two saturated bands in a row; ink-900 for footer only
- **Cards**: paper-0 fill, 1px border, 16px radius, generous padding
- **Buttons**: Pill-shaped (999px radius), sky-700 primary, sky-300 on dark backgrounds
- **FAQs**: Accordion with +/× toggle, display font for questions
- **Team cards**: Horizontal layout with portrait placeholder + info
- **Staggered grids**: Collective portraits use varied top padding for visual rhythm
- **Tabs**: Pill-shaped toggle buttons (Trainings page)
- **Nav width**: six top-level items is the ceiling — the header wraps to double height below ~1327px (en) and ~1521px (pt). Renaming a nav label or adding an item means re-measuring the drawer breakpoint in `src/styles.css`.

## Translation
Implemented for EN/FR/ES/PT (`build/content/locales.js`, `build/content/nav.js`, `build/content/shared.js`, per-page `COPY`). FR/ES/PT text is AI-drafted — recommend native-speaker review before treating it as final for public launch. Every internal link/asset path MUST go through `build/helpers.js`'s `href(locale, path)` or `asset(path)` — never hardcode a leading `/` — or translated/subpath-deployed pages silently link back to the English root.

## Assets
- `assets/logo/` — brand mark (transparent webp + rainbow square jpg)
- `assets/photos/` — 6 stock photos used across the site
- `assets/photos-optimized/` — generated (AVIF/WebP/JPG, responsive widths) by `scripts/optimize-images.js`; that script logs the *actual* widths it generates after clamping to native size — page modules' `widths` arrays must match those exact numbers.
- `assets/fonts/`, `assets/icons/`, `assets/og/` — self-hosted font subsets and generated favicons/OG images; regenerate via `scripts/generate-favicons.js` (needs `sharp` + `png-to-ico`, dev-only deps not required by the main build).

## Deployment
- Production (healthequity4all.org) is **GitHub Pages**, deployed by `.github/workflows/deploy-pages.yml` when a change merges to main. It builds for the **root** path: plain `npm run build`, no env var. The build writes `CNAME` so the custom domain survives each deploy. Only Nick merges to main; that merge is the live deploy.
- Pull requests run `.github/workflows/build-check.yml`, which only builds, so a broken build shows up before merging.
- The dev preview at `https://projects.slash301.com/HE4A/` is a **subpath deploy** — build with `SITE_BASE_PATH=/HE4A npm run build` first, or every root-absolute `href`/`asset` link (styles.css, images, internal pages) 404s one level too high. Manual deploys there go over SFTP — re-upload the whole `dist/`, not a diff, since every page's links change with the base path.

## Voice & Tone
Confident and informative but warm and supportive. The audience is under-represented organization leaders who have the passion and knowledge — they need guidance, not convincing. No emoji. Title Case for headings. Credentials (M.P.H., M.H.L) always shown.

Write like Ace: contractions, concrete nouns (name the actual job titles), plain idiom. Avoid the AI tells — "X, not Y" antithesis, em-dash connectors, "honest/honestly", "real" as an intensifier, portentous one-line closers. US spelling (program, center).

Ace's quotes are his own words — reuse verbatim, never reword. Never invent biographical or credential claims about collective members; if it isn't already in a bio or `build/content/people.js`, leave it out.
