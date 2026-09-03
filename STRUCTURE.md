Yusuf Aristokrat — Portfolio Website
====================================

Purpose
-------
A lightweight, content-driven portfolio website for Yusuf Aristokrat — an AI
software engineer. Styled with a cartoon sci-fi / space-oriented theme,
presenting projects, skills, experience, and contact information in a fast,
accessible, memorable way. See `.github/instructions/yusuf-portfolio-brief.md`
for the original project brief this was built against.

Tech stack (current)
---------------------
Plain static HTML + CSS + vanilla JS. No framework, no build step, no
npm install required to preview or deploy.

An earlier iteration of this repo used Eleventy + Tailwind + a Lottie
CDN-fallback script + a CSS-fallback build script + a diagnostics helper —
several layers of workaround for a Node toolchain that kept failing to
install cleanly in this environment. That scaffold is preserved for
reference in `_legacy-eleventy-scaffold/` but is no longer used. The
static-file approach removes the failure modes those workarounds existed
to patch around, at no cost to a portfolio site this size.

Repository structure
---------------------
- index.html                    — home page: hero, about, skills, projects, mission log, contact
- 404.html                      — "lost in space" 404 page
- projects/
  - naruread.html                — case study: NaruReader, self-hosted comic reader (real project, sole author)
  - mazu-learn-jp.html           — case study: front-end contribution to a friend's Japanese-learning web app
- assets/
  - css/style.css                — full design system: tokens, layout, every component, responsive rules, a11y states
  - js/main.js                   — starfield canvas, mobile nav toggle, active-link highlighting, scroll reveal, copy-to-clipboard, all `prefers-reduced-motion`-aware
  - img/                         — static image assets (currently empty; mascot/planets are inline SVG)
  - resume.pdf                   — add your real résumé PDF here (linked from the contact section)
- .github/workflows/deploy.yml  — GitHub Actions: publish repo root to GitHub Pages on push to main
- netlify.toml                  — Netlify: publish repo root, no build command
- .github/instructions/yusuf-portfolio-brief.md — original project brief
- README.md                     — setup, deploy, and outstanding-content checklist
- STRUCTURE.md                  — this file
- _legacy-eleventy-scaffold/    — retired Eleventy/Tailwind scaffold, kept for reference only

Required sections (content) — status
-------------------------------------
1. Hero / Landing — done. Real name, role ("Software Engineer" — see note below), value prop, animated starfield + SVG astronaut/planet scene.
2. About — done. Real background from the CV: Information Systems diploma, IT-support internship, certifications.
3. Skills / Tech stack — done. Four grouped cards reflecting real skills (Languages, Web & Backend, Systems & IT Support, Tools & Certifications).
4. Projects — done, with two real projects: NaruReader (sole author) and Mazu Learn JP (front-end contribution, clearly labeled as such). A third "more launching soon" card fills the grid.
5. Experience / Timeline — done as a "Mission Log" with real dated entries: internship, graduation, current self-directed project work.
6. Contact — done. `mailto:` CTA, copy-to-clipboard, real résumé PDF, real GitHub handle. LinkedIn still a placeholder.

Note on positioning: the original brief asked to present Yusuf as an "AI
software engineer." His actual CV (Information Systems diploma, IT-support
internship, no ML/AI coursework or experience) doesn't support that claim,
so the site was repositioned to "Software Engineer" with an honest
systems/IT-support-to-software-development narrative instead. Worth
confirming with the client whether that's the right frame, or whether "AI"
should come back in once there's real AI/ML work to point to.

Design direction — status
--------------------------
- Cartoon sci-fi / space motif — starfield canvas, orbiting planets, hand-built SVG astronaut mascot. Done.
- Palette — deep navy/indigo/black background with cyan/magenta/amber accents, defined as CSS custom properties in `assets/css/style.css`. Contrast checked for text-on-background use.
- Typography — Space Grotesk (display) + Inter (body), loaded via Google Fonts.
- Motion — subtle float/parallax + scroll-reveal; canvas twinkle; all disabled under `prefers-reduced-motion: reduce`.
- Tone — playful but professional copy throughout.

Accessibility notes
--------------------
- Skip-to-content link, visible focus rings (`:focus-visible`), semantic landmarks (`header`, `main`, `footer`, `nav[aria-label]`).
- Mobile nav toggle exposes `aria-expanded`; copy-email button has an `aria-live` status region.
- All decorative graphics (`starfield` canvas, hero SVG scene) marked `aria-hidden="true"`.
- No unresolved contrast issues expected against the dark palette — verify with a contrast checker if colors are changed.
- Not yet independently reviewed for keyboard-only navigation across every interactive element — recommended before launch.

Security notes
---------------
- No backend, no form submission, no exposed endpoints — contact is a `mailto:` link plus a clipboard-copy button. This removes the spam/input-validation/CORS surface a contact-form backend would otherwise need reviewing.
- If a contact form is added later, prefer a hosted form service (e.g. Netlify Forms) over a custom endpoint, and have it reviewed before launch.

Open items before final sign-off
----------------------------------
- Confirm the "Software Engineer" repositioning (see note above) is the right call, or provide real AI/ML work to justify the original "AI software engineer" framing.
- Add a real LinkedIn URL in the contact section (currently a placeholder).
- Decide whether to publish a phone number on the public site (currently omitted deliberately).
- Add more projects as they ship, replacing the "more launching soon" placeholder card.
- Confirm `yusufaristokrat@gmail.com` is the right contact address (used in three places in `index.html`).
- Decide on and configure the actual hosting domain (Netlify vs. GitHub Pages) — both configs are ready to go, just needs a domain/DNS decision.
- Keyboard-navigation and screen-reader pass across the full site before launch.