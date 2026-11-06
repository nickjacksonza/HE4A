# Health Equity 4 All — Design System

## About

**Equity Is the Word, LLC** (public brand: **Health Equity 4 All**) is a global health equity collective centered on improving awareness, health literacy, and access to care for historically excluded communities — BIPOC, LGBTQ+ populations, people who are differently abled, asylees, immigrants, and people in the trade sex industry. The collective supports NGOs/CBOs with non-profit leadership, organizational development, trainings, and public speaking. Based in Seattle, USA and Cape Town, South Africa.

- Vision: *Liberating people and communities from systemic and structural barriers that lessen health outcomes.*
- Mission: *To transform healthcare systems into agents of change for historically excluded communities.*

**Sources used to build this system** (store for reference — no guarantee of continued access):
- Website: https://www.healthequity4all.org/ (copy, services, tagline, quotes, team bios, footer info)
- Facebook: https://www.facebook.com/EquityIsTheWord
- Instagram: https://instagram.com/healthequity_4_all · LinkedIn: https://linkedin.com/company/healthequity-4-all
- Uploaded brand mark files: `uploads/Equity+6+PNG+Rainbow+300-1920w.webp`, `uploads/451107631_122108406986394025_796871667463242092_n.jpg`
- Color direction: [Transgender Pride flag](https://en.wikipedia.org/wiki/Transgender_flag) (Monica Helms, 1999) — per explicit instruction from the user.

No codebase or Figma file was provided. Components and the UI kit below were authored from the live website's structure and copy plus the brand mark; there is no existing component library to match against.

## Content fundamentals

- **Tagline**: "Onward. Together." — two short declaratives, momentum + collectivity.
- **Voice**: direct, credentialed, unapologetic. <cite index="1-1">Ace Robinson, M.P.H., M.H.L is quoted saying "We must move beyond words into actionable steps. Show me your receipts."</cite> The tone favors concrete accountability over soft advocacy language.
- **Person**: third person for bios and services ("Equity Is the Word supports..."); first-person-plural ("we", "our") in mission/vision and About Us.
- **Casing**: Title Case for headings and nav labels ("Non-Profit Leadership", "Public Speaking"); sentence case in body paragraphs.
- **Credentials matter**: names are consistently given with full post-nominals (MHL, MPH, DDS, MBA) — expertise is a trust signal, always surface it.
- **Global framing**: bios foreground country/region (Brazil, Kenya, Egypt, Nigeria, South Africa, Mexico) — the copy actively signals the collective is not US-centric.
- **No emoji.** No exclamation-heavy marketing language. No slogans stacked on slogans — one tagline, used sparingly.
- **Pull-quotes as a device**: the site has a dedicated "What We Say To People" section carrying founder quotes — treat quotes as first-class content, not decoration (see `components/content/QuoteCard`).

## Visual foundations

- **Color**: primary palette is the Transgender Pride flag's light blue and pink (`--color-sky-*`, `--color-blossom-*`), sitting on a **warm paper ground** (`--color-paper-*`, a cream-to-sand scale) rather than cool white. The neutral "ink" scale is warm-tinted, so greys, borders and body text read soft rather than clinical. A **Collective Spectrum** of six colors (coral, gold, leaf, teal, steel, indigo) was sampled from the brand mark's rainbow gradient for sparing accent use — tags, data categorization — never as a primary UI surface. Solid buttons use Sky-700 (not the pastel Sky-400) to hold 4.5:1 text contrast.
- **Color blocks**: the primary palette carries the page. Full-bleed bands (`--block-sky`, `--block-blossom` at the 300 step, `--block-paper`, `--block-ink`) alternate down a page — paper → sky → paper → blossom → paper — always with dark ink text on them. Mid-pastel, not deep: friendly, high-contrast, readable. Never two saturated bands in a row; `--block-ink` is reserved for the footer.
- **Type**: **Newsreader** (serif) for headings, section titles and pull-quotes — a newspaper serif, warm and editorial, set at weight 500–600 with tight tracking on large sizes. **Public Sans** for body copy, UI labels, buttons and eyebrows. Serif headings over a plain sans body is the load-bearing decision: it reads as a publication with a point of view rather than a health provider. Both cover the full Latin-1 range needed for French, Spanish and Portuguese. Neither font ships with the source material; both are Google Fonts. *If the collective has brand-specified fonts, share them and we'll swap the tokens.*
- **Translation**: the site ships in English, French, Spanish and Portuguese. A language switcher sits in the dark utility bar above the header. Headline and button copy needs ~30% expansion headroom — never set a fixed width or `nowrap` on a text container, and check that two-line English headlines still fit at three lines.
- **Spacing**: 8px base scale (4/8/12/16/24/32/48/64/96/128).
- **Backgrounds**: warm paper (`--color-paper-50`) is the default ground; section breaks are solid pastel bands, not gradients. `--gradient-pastel` remains for the rare case that needs a wash.
- **Animation**: minimal — 120–340ms ease-standard transitions on hover/press only (button lift, color shifts, switch slide). No page-load animation, no bounce/spring easing.
- **Hover states**: buttons darken one step and lift 1px; ghost/ariaicon buttons gain a neutral tint fill; links/tabs shift to Sky-700.
- **Press/active**: darken one step further (`--brand-primary-active`), no scale/shrink effect.
- **Borders**: 1px, `--color-border` (near-white) for quiet dividers, `--color-border-strong` for form fields.
- **Shadows**: soft and warm-neutral (`oklch` black at 6–14% alpha), three steps — sm for inputs/chips, md for cards, lg for dialogs/dropdowns. No hard drop shadows, no colored shadows.
- **Corner radius**: soft, consistently rounded — 6/10/16/24px plus a full-pill radius for buttons-as-pills, badges, avatars, switches.
- **Transparency/blur**: only on the dialog scrim (45% dark oklch, no blur).
- **Imagery tone**: photographs of real people doing real work — working sessions, panels, clinics, community rooms. Candid mid-action scenes carry section headers; warm portraits with eye contact carry testimony and collective bios. Photos crop **full-bleed** to the edge of their block or card: no circles, no bubbles, no drop shadows. Never tint, duotone or filter a photo — colour comes from the band behind it, and skin tones are left alone. See the Photography card in `guidelines/`.
- **Cards**: paper-0 fill with a 1px `--color-border` hairline, `--radius-lg` corners, generous internal padding (`--space-5`). Cards that carry a photo run it edge-to-edge across the top with no inset.

## Iconography

No icon system, icon font, or SVG set was found in the source material. The site uses **no icons** in its visible navigation or service list — it relies on text labels and photography. This system therefore ships **no icon library**. `IconButton` and `Tooltip` accept arbitrary children (glyphs, a future icon set, or short text like "×"/"→") rather than baking in a specific icon set. If the collective adopts an icon system, add it under `assets/icons/` and document it here.

## Components

- **Core** — `Button`, `IconButton`, `Card`, `Badge`, `Tag`
- **Forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **Navigation** — `Tabs`
- **Feedback** — `Tooltip`, `Dialog`
- **Content** — `QuoteCard` *(intentional addition — no source component library existed; added because pull-quotes are a recurring, named content block on the real site)*

No source library defined a component inventory, so this is the standard set sized to the brand's needs. `Toast` was intentionally omitted — the site is a marketing/consultancy site with no transactional UI that would trigger toasts.

## Index

- `styles.css` — root stylesheet, imports everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`
- `assets/logo/` — brand mark, transparent + rainbow-square versions
- `assets/photos/` — reference photography for the website kit
- `guidelines/` — 22 foundation specimen cards (Colors, Type, Spacing, Brand groups), including Paper & Blocks and Photography
- `components/core/`, `components/forms/`, `components/navigation/`, `components/feedback/`, `components/content/` — reusable primitives, each with `.jsx` + `.d.ts` + `.prompt.md` + a demo `.card.html`
- `ui_kits/website/` — click-through marketing homepage (utility bar with language switcher, Header, split Hero, Impact band, Services, Quote block, Collective grid, closing CTA, Footer + contact dialog)
- `SKILL.md` — portable skill file for use in Claude Code
- `thumbnail.html` — project tile
