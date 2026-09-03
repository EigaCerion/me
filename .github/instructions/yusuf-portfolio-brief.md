# Project Brief: Yusuf Aristokrat — Portfolio Website

**Client:** Yusuf Aristokrat
**Project type:** Personal portfolio website
**Owned by:** robert (coordinates jimmy, devops, uiux, admiral)
**Status:** Kickoff

---

## Concept

A portfolio site for an AI software engineer, styled as **cartoon sci-fi / space-oriented**. Think: a friendly astronaut-engineer floating through a stylized galaxy of projects — playful and visually distinct, but still credible enough that a recruiter or client trusts the engineering skill behind it. The theme should support the content, not bury it.

## Goals

- Present Yusuf as a skilled AI software engineer in a way that's memorable and stands out from generic portfolio templates.
- Make projects and skills easy to find and scan — the fun theme can't come at the cost of clarity.
- Fast, responsive, and accessible on both desktop and mobile.

## Target audience

Recruiters, hiring managers, and potential clients/collaborators evaluating Yusuf for AI/software engineering work.

## Required sections

1. **Hero / landing** — strong intro, name, role, one-line value proposition, space-themed visual centerpiece.
2. **About** — background, focus areas (AI engineering), personality/voice.
3. **Skills / tech stack** — visually presented, not just a text list.
4. **Projects** — case-study style: problem, approach, outcome, links/demos, not just titles.
5. **Experience / timeline** — could be styled as a "mission log" or "flight path" to fit the theme.
6. **Contact** — clear call to action (email, resume download, socials).

## Design direction (for uiux)

- **Style:** flat/vector cartoon illustration, sci-fi space motifs (starfields, planets, a spacecraft or astronaut mascot representing Yusuf), retro-futuristic UI accents.
- **Palette:** deep space tones (navy/indigo/black) with bright accent colors (neon cyan, magenta, amber) for interactive elements — check contrast carefully, dark themes are an easy place to fail accessibility.
- **Typography:** a distinctive display/heading font (rounded or futuristic) paired with a clean, highly readable body font — don't let theme fonts hurt legibility.
- **Motion:** subtle — parallax stars, gentle float/hover animations. Should feel alive, not distracting or slow to load.
- **Tone:** playful but professional — this still needs to land Yusuf work.

## Assignments

- **robert** — finalize open questions with the client (below), break this into tracked tasks, sequence the work (design → build → security/QA → deploy), and run the final done-check before anything ships.
- **uiux** — design the visual system and page-by-page wireframes/specs per the direction above; define all UI states (loading, empty projects list, mobile breakpoints); accessibility pass on the palette and type choices.
- **jimmy** — propose a tech stack suited to a content-driven portfolio site (flag options to robert/client for approval), build the site to uiux's specs, wire up content sections and the contact method.
- **admiral** — review the contact form/any backend for basic security issues (spam/input handling, exposed endpoints), test the site across edge cases (slow connections, small screens, broken/missing project data), verify accessibility (keyboard nav, contrast, alt text) before launch.
- **devops** — set up hosting, domain, SSL, and a simple CI/deploy pipeline; confirm the site performs well (load time) given the animation/illustration-heavy design.

## Open questions (robert to resolve before/while work starts)

- Tech stack preference, if any, from the client — otherwise jimmy proposes.
- Does Yusuf have existing content ready (bio, resume, project write-ups, images), or does that need to be drafted/collected first?
- How many projects to feature, and is there a preferred contact method (form vs. email vs. both)?
- Hosting/domain preference, or is devops choosing?

## Definition of done

- All required sections built, populated with real content (not placeholder/lorem ipsum), and matching the approved design.
- Responsive on mobile, tablet, and desktop.
- Passes admiral's accessibility and basic security review.
- Deployed and reachable on a live domain with SSL, via devops.
- Robert has signed off against this brief — not just "looks done," but checked against every section and requirement above.
