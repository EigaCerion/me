# Yusuf Aristokrat — Portfolio

A cartoon sci-fi / space-themed portfolio site for an AI software engineer.
Plain HTML, CSS, and vanilla JS — **no build step, no framework, no
dependencies to install.** Open `index.html` in a browser and it works.

## Why no build step

An earlier pass at this repo used Eleventy + Tailwind with a fallback CSS
generator and a diagnostics script to work around a fragile Node toolchain
(see `_legacy-eleventy-scaffold/` if you want to look at it). That
complexity wasn't buying anything a content-driven portfolio needs, so this
version is a handful of static files instead. Fewer moving parts, nothing
that can fail to install, works the same on every machine.

## Structure

```
index.html                     Home page — hero, about, skills, projects, mission log, contact
404.html                       "Lost in space" 404 page
projects/
  mission-relay.html           Case study: support ticket triage copilot
  mission-beacon.html          Case study: realtime anomaly radar
  mission-cartograph.html      Case study: codebase Q&A assistant
assets/
  css/style.css                Entire design system (tokens, layout, components, responsive)
  js/main.js                   Starfield canvas, mobile nav, scroll reveal, copy-to-clipboard
  img/, resume.pdf             Static assets (add your resume PDF here)
```

## Local preview

No install required — just serve the folder. Any static server works, e.g.:

```bash
npx serve .
```

or with Python:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

Both configs are already set up for a zero-build static deploy:

- **Netlify** — `netlify.toml` publishes the repo root directly, no build command.
- **GitHub Pages** — `.github/workflows/deploy.yml` uploads the repo root on every push to `main`.

## Content status

Real content is now in place, sourced from an actual CV and two real GitHub
repos:

- **About, Skills, Mission Log** — reflect the real CV: an Information
  Systems diploma (GPA 3.71/4.00), an IT & Facility Building internship at
  PT. Angkasa Pura II, and PCAP (Cisco) / BNSP certifications. The original
  brief's "AI software engineer" framing was dropped since nothing in the
  CV supports an AI/ML claim — the site now positions Yusuf honestly as a
  software engineer with a systems/IT-support background.
- **Projects** (`projects/naruread.html`, `projects/mazu-learn-jp.html`) —
  two real projects: NaruReader (a self-hosted comic reader, sole author)
  and Mazu Learn JP (a front-end contribution to a friend's Japanese-learning
  app, clearly labeled as a contribution rather than solo work).
- **Résumé** — `assets/resume.pdf` is the real CV.
- **GitHub** — contact section links to the real handle, `EigaCerion`.

Still open:

- **LinkedIn** — the contact section still has a placeholder
  (`href="https://www.linkedin.com/"`, labeled "[add handle]") — add the
  real profile URL when available.
- **Phone number** — the CV includes a phone number; it was deliberately
  left off the public site to avoid exposing it to spam/scraping. Add it to
  the contact section if that tradeoff is wanted.
- **More projects** — the projects grid has a "more launching soon" card as
  the third slot; replace or remove it as new projects ship.

## Design notes

- Palette, type scale, spacing, and every component live as CSS custom
  properties and classes in `assets/css/style.css` — no utility-class soup,
  easy to retheme from the `:root` block at the top.
- Contact intentionally has **no backend form** — just a `mailto:` link and a
  copy-to-clipboard button. That sidesteps spam handling, input validation,
  and exposed endpoints entirely (the brief's security review would otherwise
  need to cover a form backend). If a form is wanted later, use a hosted
  form service (e.g. Netlify Forms) rather than rolling a custom endpoint.
- All animation respects `prefers-reduced-motion` (starfield renders static,
  scroll-reveal and float animations are disabled).
- Contrast on the accent colors against the dark background was chosen to
  stay comfortably above WCAG AA for text use.
