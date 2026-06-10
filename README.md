# nick-sh-oh.github.io

Personal site for Nick (Seungheon) Oh — about, publications, and CV.
Built with [React](https://react.dev/) + [Vite](https://vitejs.dev/), with light/dark mode.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build locally
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to the `gh-pages` branch (served by GitHub Pages).

## Content

- **About** — `src/pages/About.jsx`
- **Publications** — edit `src/data/publications.js`
- **CV** — replace `public/pdf/cv.pdf`
- **Profile photo** — replace `public/profile.jpg`
- **Theme colors** — CSS variables at the top of `src/styles.css`
