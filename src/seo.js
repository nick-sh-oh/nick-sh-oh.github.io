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
      'Nick (Seungheon) Oh is a researcher at socius labs, borrowing from the sciences that explain humans to build better machines, and using machines to test human theories at impossible scales.',
  },
  {
    path: '/publications',
    title: 'Publications — Nick (Seungheon) Oh',
    description:
      'Papers by Nick Oh at NeurIPS, ICML, COLM, AIES, and ICWSM — on metacognition in AI systems, post-hoc explainability, small foundation models of human cognition, privacy-by-design pipelines, and sentiment resources.',
  },
  {
    path: '/exhibitions',
    title: 'Exhibitions — Nick (Seungheon) Oh',
    description:
      'artefact(s): LeNet-1 — LeCun’s original CNN rebuilt in circuit boards, LEDs, and glass. Spotlighted at the CVPR 2026 Art Gallery and awarded the IEEE TCPAMI Art Award.',
    image: '/img/artefacts-lenet1.jpg',
    imageAlt: 'artefact(s): LeNet-1 — violet LED installation in a transparent case at CVPR 2026',
  },
  {
    path: '/cv',
    title: 'CV — Nick (Seungheon) Oh',
    description:
      'Curriculum vitae of Nick (Seungheon) Oh — researcher at socius labs bridging cognitive science and machine intelligence.',
  },
];
