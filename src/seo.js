// Single source of truth for per-route SEO metadata.
// Consumed by the app (RouteMeta updates document.title on navigation) and by
// scripts/generate-seo.mjs (per-route static HTML, sitemap.xml) at build time.
// Pure data only — this module is imported by both the browser bundle and Node.

export const SITE = {
  origin: 'https://nick-sh-oh.github.io',
  name: 'Nick (Seungheon) Oh',
  twitter: '@nickshoh',
  image: '/profile.jpg',
};

export const ROUTES = [
  {
    path: '/',
    title: 'Nick (Seungheon) Oh — Researcher @ socius labs',
    description:
      'Researcher at socius labs bridging cognitive science and machine intelligence — metacognition in AI, explainability (XAI), and neural networks as cognitive models.',
  },
  {
    path: '/publications',
    title: 'Publications — Nick (Seungheon) Oh',
    description:
      'Papers by Nick Oh at NeurIPS, COLM, AIES, and ICWSM — on metacognition in AI systems, post-hoc explainability, privacy-by-design pipelines, and sentiment resources.',
  },
  {
    path: '/cv',
    title: 'CV — Nick (Seungheon) Oh',
    description:
      'Curriculum vitae of Nick (Seungheon) Oh — researcher at socius labs bridging cognitive science and machine intelligence.',
  },
];
