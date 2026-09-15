# Health Equity 4 All — Website Redesign

## Project Overview
The production static site for healthequity4all.org. Built (not a framework — a small hand-rolled Node script) from `build/` into two outputs: `dist/` (gitignored, `npm run build`) and `site/` (committed, ready-to-upload snapshot for manual server deploys, auto-kept in sync by `.github/workflows/sync-site-folder.yml` on every push to main). The original `*.dc.html` files, `_ds/`, and `support.js` are Claude Design authoring-tool artifacts — design reference only, never shipped; `build/build.js` asserts none of that markup leaks into output.

## Pages
Implemented as `build/content/pages/*.js` (one module per page below), assembled by `build/build.js`. Each module's `main(locale)` renders from a per-locale `COPY` object zipped against locale-independent `META` (images, anchors, layout) — keep that split when editing content instead of inlining new locale-specific strings into the template.

| File | Purpose |
|------|---------|
| `Home.dc.html` | Homepage — hero, impact stats, services grid, quotes, collective grid, CTA |
| `Non-Profit-Leadership.dc.html` | Service page — board governance, executive coaching |
| `Organizational-Development.dc.html` | Service page — program oversight, comms, policy, grants |
| `Trainings.dc.html` | Service page — racial equity, LGBTQ+ equity, SDOH (tabbed) |
| `Public-Speaking.dc.html` | Service page — keynotes, moderation, briefings |
| `About-Us.dc.html` | About page — vision/mission, values, full collective grid |
| `Contact.dc.html` | Contact form + office info + social links |
| `SiteHeader.dc.html` | Shared header — nav with dropdowns, language switcher (EN/FR/ES/PT) |
| `SiteFooter.dc.html` | Shared footer — links, hours, locations |

## Design System
The `_ds/` folder contains the bound design system bundle with tokens and components. Key tokens:

### Colors (from tokens/colors.css)
- **Sky (primary blue)**: `--color-sky-50` through `--color-sky-900` — oklch blues from Trans Pride flag
- **Blossom (secondary pink)**: `--color-blossom-50` through `--color-blossom-900`
- **Paper (warm ground)**: `--color-paper-0` through `--color-paper-300` — cream/sand, NOT white
- **Ink (neutrals)**: `--color-ink-0` through `--color-ink-900` — warm-tinted greys
- **Spectrum (accents)**: coral, gold, leaf, teal, steel, indigo — from brand mark rainbow
- **Blocks**: `--block-sky` (sky-300), `--block-blossom` (blossom-300), `--block-paper`, `--block-ink`
- **Brand**: `--brand-primary` (sky-700), `--brand-primary-hover` (sky-800)

### Typography
- **Display/headings**: Newsreader (serif), weight 500-600, tight tracking at large sizes
- **Body/UI**: Public Sans (sans-serif)
- Scale: `--text-xs` (0.75rem) through `--text-4xl` (4rem)

### Spacing
8px base scale: 4/8/12/16/24/32/48/64/96/128

### Radius
6/10/16/24px + full pill (999px) for buttons

## Design Patterns
- **Heroes**: Full-bleed images with left-aligned dark gradient overlay, light text
- **Color bands**: Alternate paper → sky → paper → blossom → paper; never two saturated bands in a row; ink-900 for footer only
- **Cards**: paper-0 fill, 1px border, 16px radius, generous padding
- **Buttons**: Pill-shaped (999px radius), sky-700 primary, sky-300 on dark backgrounds
- **FAQs**: Accordion with +/× toggle, display font for questions
- **Team cards**: Horizontal layout with portrait placeholder + info
- **Staggered grids**: Collective portraits use varied top padding for visual rhythm
- **Tabs**: Pill-shaped toggle buttons (Trainings page)

## Translation
Implemented for EN/FR/ES/PT (`build/content/locales.js`, `build/content/nav.js`, `build/content/shared.js`, per-page `COPY`). FR/ES/PT text is AI-drafted — recommend native-speaker review before treating it as final for public launch. Every internal link/asset path MUST go through `build/helpers.js`'s `href(locale, path)` or `asset(path)` — never hardcode a leading `/` — or translated/subpath-deployed pages silently link back to the English root.

## Assets
- `assets/logo/` — brand mark (transparent webp + rainbow square jpg)
- `assets/photos/` — 6 stock photos used across the site
- `assets/photos-optimized/` — generated (AVIF/WebP/JPG, responsive widths) by `scripts/optimize-images.js`; that script logs the *actual* widths it generates after clamping to native size — page modules' `widths` arrays must match those exact numbers.
- `assets/fonts/`, `assets/icons/`, `assets/og/` — self-hosted font subsets and generated favicons/OG images; regenerate via `scripts/generate-favicons.js` (needs `sharp` + `png-to-ico`, dev-only deps not required by the main build).

## Voice & Tone
Confident and informative but warm and supportive. The audience is under-represented organization leaders who have the passion and knowledge — they need guidance, not convincing. No emoji. Title Case for headings. Credentials (M.P.H., M.H.L) always shown.
