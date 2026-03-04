# BRUT. Ginger — Landing Page

A product landing page for a fictional craft cider brand, built entirely with AI using [Claude Code](https://claude.ai/code).

This is a study material from **Lesson 02** of the [Vibe Coding for Marketers](https://www.yourvibecoding.com/) course by Jindra Faborsky — a hands-on course teaching non-technical marketers how to build websites and tools using AI-powered development.

## What This Is

A single-page product landing for **BRUT. Ginger** — a fictional Belgian craft cider. The page was built from scratch by prompting Claude Code with a brand brief and context files. No manual coding involved.

It demonstrates what you can build in Lesson 02 of the course: your first complete website, generated from a single prompt after proper context preparation.

## Tech Stack

- **HTML** — Semantic markup with accessibility attributes
- **CSS** — Custom properties, BEM naming, mobile-first responsive design
- **JavaScript** — Vanilla JS, scroll animations via Intersection Observer
- **Font** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via Google Fonts

No frameworks. No build tools. No dependencies. Just open `index.html` in a browser.

## Project Structure

```
.
├── index.html                  # Landing page
├── style.css                   # All styles
├── script.js                   # Scroll animations
├── brut-brand-brief.md         # Brand context file (input for AI)
├── CLAUDE.md                   # AI coding instructions
└── images/
    ├── logo/
    │   ├── brut_black_no_background.png
    │   └── brut_white_no_background.png
    └── product_images/
        ├── ginger_transparent.png
        └── ginger_with_background.webp
```

## How to Run

Open `index.html` in any browser. That's it.

For local development with live reload, you can use any static server:

```bash
# Python
python3 -m http.server 8000

# Node.js (npx, no install needed)
npx serve .
```

## About the Course

**Vibe Coding for Marketers** teaches marketers how to turn ideas into working products using AI — no coding experience required. The course covers building landing pages, full websites, SEO, multilingual sites, and interactive prototypes.

Learn more: [yourvibecoding.com](https://www.yourvibecoding.com/)

## License

This project is provided as educational material. The BRUT. brand is fictional. Images are AI-generated.
