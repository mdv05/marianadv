# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Mariana Duong-Vázquez, an Actuarial Science student. The project is a static HTML website showcasing her professional experience, education, skills, and projects.

## Repository Structure

```
marianadv/
├── html/
│   ├── index.html          # Main portfolio website (single-page application)
│   ├── translations.js     # EN/ES translation strings (must stay in sync with index.html)
│   ├── MarianaWebsitePhoto.png   # Profile photo asset
│   └── *.png / *.jpg       # Favicons, logos, and project images
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── README.md              # Basic project information
└── LICENSE                # MIT License
```

## Development Commands

This is a static HTML website with no build process or dependencies. For development:

### Local Development
- Open `html/index.html` directly in a web browser for local viewing
- Use a local HTTP server for better development experience:
  ```bash
  cd html
  python -m http.server 8000
  # or
  npx serve .
  ```

### Deployment
The site automatically deploys via GitHub Actions when changes are pushed to the `main` branch and affect files in the `html/` directory. The workflow (`deploy.yml`) uses rsync to deploy to a Linux server.

## Architecture

Single static page, hand-written HTML/CSS with a small inline script. No frameworks, no build step.

- **Design:** ocean-blue palette (navy #03045e headings, blue #0069a3 links/buttons, cyan #00b4d8 accents, gold #ffb700 for the ribbon and home marker) on a cream background, alternating cream/white section bands. Playfair Display (headings, numbers) and Inter (everything else). Light and dark themes via `prefers-color-scheme`. Cards with company/school logos on white chips; skills and tags render as pills. No scroll animations or count-up stats.
- **Sections (in order):** hero (stats + buttons), About (with travel map), Experience, Projects, Leadership, Education, Skills, Achievements band (navy), Contact. Each section has an eyebrow label + Playfair title from `<section>.label` / `<section>.title`.
- **Projects:** a full-width featured card for the newest project, then a 2-column grid. Each card has a screenshot (`shot-*.jpg`, captured from the live apps) linking to the live demo. The Goldenson poster opens in a native `<dialog>`.
- **Travel map (About):** inline SVG dot map generated from a land mask (one `<path>` of dots plus markers). Places list and caption live in `about.travel` in translations.js; update both if a trip is added. Only list places she has confirmed.
- **Ribbon:** `.ribbon` inside `.shot.has-ribbon` on the `.project.featured` card marks the newest project (`projects.latest`). Move the card to the front and both classes when a newer project is added.
- **Type scale:** body 16px, lede 18px, meta 14px, eyebrow labels 12.5px uppercase, pills 13px, card titles (h3) 20px Playfair. Keep new elements on this scale.
- **Script:** language toggle, nav highlighting via IntersectionObserver, and the case-study dialog.

## Content Management

Content lives in TWO places that must be kept in sync:

1. **`html/index.html`**: the default English text, with each translatable element tagged `data-i18n="path.in.translations"`.
2. **`html/translations.js`**: the `translations` object with `en` and `es` trees.

`updateContent(lang)` sets every `[data-i18n]` element's text from the matching path. Arrays on a `<ul>` render as one `<li>` pill per item; other arrays are joined with ` · ` or the element's `data-join` value. Adding content means adding the element with a `data-i18n` key AND the key in both language trees. The English markup must match the `en` tree exactly.

## Deployment Notes

- The GitHub Actions workflow deploys only files from the `html/` directory
- Deployment triggers on pushes to `main` branch that modify `html/**` files
- Uses SSH and rsync for deployment to a Linux server
- Server credentials are stored as GitHub secrets