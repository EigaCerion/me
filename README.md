# Yusuf Aristokrat — Portfolio

Hello! I created this project to challenge myself in styling, and I hope it also inspires you to create a project in your own style.

## Why this exists

Beyond the styling challenge, this is also my working portfolio — a place to show
real projects (not templates) while I look for a software engineering role. The
cartoon sci-fi / space theme was a deliberate way to stand out from generic
portfolio templates without burying the actual content (skills, projects,
experience) under the theme.

## Tech stack

Plain HTML, CSS, and vanilla JavaScript. No framework, no build step, no
`npm install` required — open `index.html` and it works.

- **Markup:** semantic HTML, one page per view (`index.html`, `404.html`, `projects/*.html`)
- **Styling:** a single stylesheet (`assets/css/style.css`) using CSS custom
  properties for the whole design system — palette, type scale, spacing,
  every component. No utility-class framework.
- **JavaScript:** one file (`assets/js/main.js`) — a starfield `<canvas>`
  animation, mobile nav toggle, scroll-reveal via `IntersectionObserver`,
  active-nav-link highlighting, and a copy-to-clipboard button. All of it
  respects `prefers-reduced-motion`.
- **Fonts:** Space Grotesk (display) + Inter (body) via Google Fonts.
- **Paths:** all internal links/assets are relative, so the site works
  correctly whether it's served from a domain root, a GitHub Pages project
  subpath (`/me/`), or anywhere else.

## Structure

```
index.html                     Home page — hero, about, skills, projects, mission log, contact
404.html                       "Lost in space" 404 page
projects/
  naruread.html                 Case study: NaruReader, a self-hosted comic reader
  mazu-learn-jp.html            Case study: bug-fixing contribution to a friend's Japanese-learning app
assets/
  css/style.css                 Design system: tokens, layout, every component, responsive rules
  js/main.js                    Starfield canvas, nav, scroll reveal, copy-to-clipboard
  resume.pdf                    Downloadable résumé
```

## Local preview

No install required — serve the folder with any static server, e.g.:

```bash
npx serve .
```

or

```bash
python -m http.server 8080
```

## Deploy

- **GitHub Pages** — `.github/workflows/deploy.yml` publishes the repo root
  on every push to `main` (enable Pages in repo Settings → Pages → Source:
  "GitHub Actions").
- **Netlify** — `netlify.toml` publishes the repo root, no build command.
