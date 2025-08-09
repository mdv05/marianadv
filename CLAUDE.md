# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Mariana Duong-Vázquez, an Actuarial Science student. The project is a static HTML website showcasing her professional experience, education, skills, and projects.

## Repository Structure

```
marianadv/
├── html/
│   ├── index.html          # Main portfolio website (single-page application)
│   └── MarianaWebsitePhoto.jpeg  # Profile photo asset
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
- **Smooth Animations**: CSS transitions and intersection observer for scroll animations
- **Interactive Elements**: Hover effects, smooth scrolling navigation, and dynamic content
- **Professional Styling**: Gradient backgrounds, glassmorphism effects, and modern UI

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

All content is hardcoded in the HTML file. To update:

- **Personal Information**: Update hero section (lines 498-503)
- **About Stats**: Modify stat items in about section (lines 509-528)
- **Education**: Update education cards (lines 544-571)
- **Experience**: Modify timeline items in experience section (lines 577-605)
- **Skills**: Update skill categories and items (lines 611-642)
- **Projects**: Modify project cards (lines 648-667)
- **Contact**: Update contact information (lines 673-695)

## Deployment Notes

- The GitHub Actions workflow deploys only files from the `html/` directory
- Deployment triggers on pushes to `main` branch that modify `html/**` files
- Uses SSH and rsync for deployment to a Linux server
- Server credentials are stored as GitHub secrets