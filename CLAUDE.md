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

### Single-Page Application Structure
The entire website is contained in `html/index.html` with:

- **Embedded CSS**: All styles are in a `<style>` tag in the HTML head (lines 7-480)
- **Embedded JavaScript**: All interactivity is in a `<script>` tag at the end of the body (lines 700-784)
- **Sections**: 
  - Hero section with animated title
  - About section with stats grid
  - Education section with cards
  - Experience section with timeline layout
  - Skills section with categorized skill tags
  - Projects section showcasing key project
  - Contact section with clickable contact methods

### Key Features
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Smooth Animations**: CSS transitions and intersection observer for scroll animations; stat count-up honors `prefers-reduced-motion`
- **Interactive Elements**: Hover effects, smooth scrolling navigation, scrollspy nav highlighting, reading progress bar, back-to-top button
- **Professional Styling**: Gradient backgrounds, glassmorphism header, layered card shadows, inline SVG line icons (no emoji icons)
- **Linked Logos**: Experience cards (MassMutual/Segal/TK) and education cards (UConn/NUS) show official logos wrapped in links to each organization's site

### CSS Organization
- Global styles and resets (lines 8-20)
- Header and navigation (lines 28-85)
- Hero section with animations (lines 86-158)
- Section layouts and typography (lines 159-187)
- Component-specific styles for cards, timeline, skills grid (lines 188-409)
- Animations and responsive design (lines 410-456)
- Utility classes and interactive elements (lines 457-480)

### JavaScript Functionality
- Smooth scrolling navigation
- Intersection observer for fade-in animations
- Dynamic header background on scroll
- Typewriter effect for hero title
- Interactive skill hover effects
- Contact item click handlers for mailto/tel/web links

## Content Management

Content lives in TWO places that must be kept in sync:

1. **`html/index.html`** — the default (English) markup for every section: hero, about, education, experience, skills, projects, leadership, achievements, contact.
2. **`html/translations.js`** — the `translations` object with `en` and `es` trees. The inline `updateContent(lang)` function in index.html overwrites section text from this object on page load and on language toggle.

When editing content, always update the HTML **and** both language trees in translations.js, or the language toggle will show stale text. `updateContent` indexes elements positionally (nav links, timeline entries, experience cards, badges, skill/tech tags), so adding or removing elements requires matching updates to that function and to both translation trees.

## Deployment Notes

- The GitHub Actions workflow deploys only files from the `html/` directory
- Deployment triggers on pushes to `main` branch that modify `html/**` files
- Uses SSH and rsync for deployment to a Linux server
- Server credentials are stored as GitHub secrets