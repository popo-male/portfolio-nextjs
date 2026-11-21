# Portfolio

Personal portfolio site built with Next.js (App Router), Tailwind CSS v4 and Framer Motion. Deployed on Netlify.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Structure

```
public/                 Static assets (+ __forms.html, the Netlify Forms definition)
src/
  app/                  Root layout, page, global styles
  components/
    layout/             Navbar, Footer
    sections/           One component per page section (Hero, About, Skills, ...)
    ui/                 Small shared widgets (BackToTop)
  data/portfolio.ts     All site content: intro, experience, projects, certificates
  types/portfolio.ts    Types for the content above
```

To update content, edit `src/data/portfolio.ts`.

## Contact form

The form posts to Netlify Forms (`public/__forms.html` registers the form at deploy time), so it only delivers when the site is running on Netlify. The field names in `__forms.html` and `ContactSection.tsx` must stay in sync.

Email delivery is configured in the Netlify dashboard, not in code: **Project configuration → Notifications → Form submission notifications → Add notification → Email notification**, then choose the `contact` form and the address to deliver to.
