# manfrednesti.com

Personal site of Manfred Nesti. Static — plain HTML, CSS and a minimal JavaScript
file. No build step, no dependencies, no framework.

**Live:** https://www.manfrednesti.com

## Structure

```
manfrednesti/
├── index.html        # Home (hero, about, skills, experience, projects, contact)
├── projects.html     # Projects (professional + academic)
├── cv.html           # Full résumé
├── css/style.css     # All styling — theme in the "DESIGN TOKENS" block at the top
├── js/main.js        # Mobile menu + footer year
├── assets/           # monogram.svg (MN logo), favicon.svg
├── robots.txt
├── sitemap.xml
├── CNAME             # Custom domain for GitHub Pages
└── .nojekyll         # Serve files as-is (no Jekyll processing)
```

## Editing

- **Copy:** directly in the `.html` files.
- **Theme:** `DESIGN TOKENS` block at the top of `css/style.css`
  (`--c-primary` main navy, `--c-primary-light` accent).
- **Skills:** the chips in the Skills section of `index.html`.

## Hosting

GitHub Pages, served from `main` (root). Primary domain `www.manfrednesti.com`;
`manfrednesti.it` redirects to it. DNS is managed at TopHost.
