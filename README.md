# Koh Yu Bin — Portfolio

Personal portfolio website: a single-page site presenting my background, skills, projects, work experience, certifications and a working contact form.

- **Live site:** https://profolio-popo.netlify.app
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion
- **Hosting:** Netlify (static prerender + Netlify Forms)

## Overview

The site is one statically prerendered page made of stacked sections:

| Section | What it shows |
| --- | --- |
| Hero | Introduction, current role, primary calls to action |
| About | Short bio and four focus areas |
| Skills | Scrolling ticker plus skills grouped by domain |
| Projects | Filterable summary cards; each opens a dialog with problem, goal, key features, tech stack and links |
| Experience | Work timeline and academic background |
| Certifications | Credential cards linking to the issuer's verification page |
| Contact | Email, WhatsApp, GitHub and a contact form |

There is no database, CMS or API. All content lives in one typed file, so updating the site means editing data, not components.

## Quick start

Requires Node.js 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (also type-checks) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run resume:build` | Re-render the CV images from `private/Resume.pdf` |

## Project layout

```
public/                       Static assets served from /
  __forms.html                Netlify Forms definition (see "Contact form")
  *.png / *.jpg               Project screenshots and the hero mascot
scripts/render-resume.mjs     Renders private/Resume.pdf into page images
private/                      Git-ignored source documents (Resume.pdf)
src/
  app/
    layout.tsx                Root layout, fonts, SEO metadata
    page.tsx                  Composes the sections in order
    globals.css               Tailwind import, theme tokens, base styles
    opengraph-image.tsx       Link-preview image, generated at build time
  components/
    layout/                   Navbar, Footer
    sections/                 One component per page section
    projects/                 Project card, details dialog and their parts
    ui/                       Shared building blocks (SectionHeader, Modal,
                              ResumeViewer, BackToTop)
  data/portfolio.ts           All site content
  data/resume.json            Generated list of CV page images
  types/portfolio.ts          Types for the content
```

The `@/` import alias maps to `src/`.

## Architecture

**Content is separate from presentation.** `src/data/portfolio.ts` exports a single `portfolioData` object typed by `src/types/portfolio.ts`. Sections read from it and never hardcode personal details, so a typo in the data shape fails the build instead of breaking the page.

**Server components by default.** `page.tsx`, the hero and the footer render on the server. A component is marked `"use client"` only when it needs browser state or animation (navbar scroll tracking, project filter, skills ticker, contact form, scroll-reveal effects).

**Styling through theme tokens.** Colours are defined once in the `@theme` block of `globals.css` (`background`, `surface`, `primary`, `secondary`, `textMain`, `textMuted`) and used as Tailwind utilities such as `bg-surface` or `text-primary`. Change a token there to re-theme the whole site.

**Consistent section headers.** Every section title is rendered by `components/ui/SectionHeader.tsx` (eyebrow label, title, optional description and right-aligned slot).

**Dialogs.** The CV viewer and the project details share `components/ui/Modal.tsx`, a wrapper around the native `<dialog>` element (focus trap, Escape and backdrop come from the browser).

**Navigation.** The navbar links to section ids (`#about`, `#projects`, ...) and highlights the active one from scroll position. Adding a section means adding the component to `page.tsx` and an entry to `navItems` in `Navbar.tsx`.

## Updating content

| To change | Edit |
| --- | --- |
| Name, title, bio, email, WhatsApp, GitHub, LinkedIn | `intro` in `src/data/portfolio.ts` |
| Hero profile card (focus areas, core stack) | `intro.focusAreas`, `intro.coreStack` |
| Jobs and education | `experience`, `education` |
| Projects | `projects` (put the screenshot in `public/` and reference it as `/file.jpg`) |
| Certificates | `certificates` |
| Skills lists | `clusters` in `src/components/sections/SkillsSection.tsx` |
| Page title and description for search engines | `metadata` in `src/app/layout.tsx` |

## Important details

### Contact form

The form uses **Netlify Forms**, so it only delivers when the site runs on Netlify. Locally the submit shows the error fallback; that is expected.

- `public/__forms.html` is a hidden static copy of the form. Netlify scans it at deploy time to register a form named `contact`.
- `ContactSection.tsx` posts the fields to `/__forms.html` with `fetch`.
- The field names in both files (`name`, `email`, `subject`, `message`, `bot-field`) **must stay identical**, otherwise Netlify drops the unknown fields.
- `bot-field` is a honeypot: real visitors never see it, and submissions that fill it are discarded as spam.
- **Email delivery is configured in the Netlify dashboard, not in code:** Project configuration → Notifications → Form submission notifications → Add notification → Email notification, then pick the `contact` form and the destination address. Without it, submissions are only stored under Forms in the dashboard.

### CV viewer

The hero's **View CV** button opens the CV in a view-only dialog (`components/ui/ResumeViewer.tsx`). The PDF is never published: the site ships page images only, so there is no file to download and no text to copy or edit.

- Keep the source at `private/Resume.pdf`. The `private/` folder is git-ignored; **do not put the PDF in `public/` or commit it**, because this repository is public.
- After changing the CV, regenerate the images and commit the result:

  ```bash
  npm run resume:build
  ```

  This writes `public/resume/page-N.webp` and `src/data/resume.json` (the page list the dialog reads).
- This deters casual copying; it cannot stop screenshots. Anyone who wants the actual file is pointed to **Request CV**, which opens an email to me.

### Link previews

`src/app/opengraph-image.tsx` generates the 1200×630 image used when the site is shared on LinkedIn, WhatsApp and similar. It is built from `portfolioData`, so it updates with the content.

Absolute preview URLs come from `metadataBase` in `layout.tsx`, which reads the `URL` environment variable that Netlify sets during builds. On another host, set `URL` to the public address of the site.

### LinkedIn

`intro.linkedin` is currently an empty string, which hides the LinkedIn icon. Set it to the profile URL to show it.

### Images

Project screenshots are served through `next/image`, which resizes and converts them per device. Keep source files reasonable anyway: about 1400px wide and under 300 KB is plenty for the project cards.

### Accessibility

The site includes a skip-to-content link, visible keyboard focus rings, labelled form fields, and a `prefers-reduced-motion` rule in `globals.css` that disables CSS animations and transitions.

### Framework version

This project uses Next.js 16, which differs from older versions in places. Check the bundled docs in `node_modules/next/dist/docs/` before changing framework-level code (see `AGENTS.md`).

## Deployment

Pushing to `main` triggers a Netlify build (`npm run build`) and deploy. No environment variables are required on Netlify.
