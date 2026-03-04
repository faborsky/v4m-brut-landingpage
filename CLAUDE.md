# BRUT. Ginger — Landing Page

## Project Overview

Static product landing page for BRUT. Ginger, a fictional Belgian craft cider brand. Built as a study material for the Vibe Coding for Marketers course (Lesson 02).

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- No frameworks, no build tools, no dependencies
- Google Fonts (Space Grotesk)

## Architecture

Single-page static site. Three files:

- `index.html` — Semantic HTML, sections: nav, hero, statement, lifestyle, differentiation, details, CTA, footer
- `style.css` — CSS custom properties for design tokens, BEM naming convention, mobile-first with breakpoints at 768px and 1024px
- `script.js` — IIFE with scroll-based nav styling and Intersection Observer fade-in animations

## Design System

Brand tokens defined in `:root`:

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1e1e1a` | Text, headers |
| `--color-bg` | `#f6f7f0` | Page background |
| `--color-accent` | `#c8fd02` | CTAs, hover states |
| `--color-secondary` | `#B0ADA8` | Muted text, dividers |
| `--color-ginger` | `#e56741` | Product accent, CTA section |

## Conventions

- BEM naming: `.block__element` (no modifiers used)
- Mobile-first CSS with `min-width` media queries
- Scroll animations: `.fade-in` class + `.visible` added via JS
- No rounded corners, no shadows, no decorative elements — flat editorial style
- All images use explicit `width` and `height` attributes for layout stability

## File Structure

```
├── index.html
├── style.css
├── script.js
├── brut-brand-brief.md          # Brand context (AI input, not runtime)
├── images/
│   ├── logo/                    # Brand logos (black/white, transparent)
│   └── product_images/          # Product photography
```

## Context

`brut-brand-brief.md` contains the full brand brief — colors, voice, typography, photography direction. Use it as the primary reference when making changes to maintain brand consistency.
