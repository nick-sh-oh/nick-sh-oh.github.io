// Projects — exhibited works and open-source software. Newest/hero first.
export const projects = [
  {
    id: 'lenet1',
    kind: 'exhibition',
    venue: "CVPR'26",
    title: 'artefact(s): LeNet-1 (2026)',
    creators: ['Nick Oh', 'Alex Park'],
    venueFull:
      'Art Gallery at the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), Denver',
    year: 2026,
    image: '/img/artefacts-lenet1.jpg',
    imageAlt:
      'artefact(s): LeNet-1 — a transparent case of stacked circuit boards lit by a lattice of violet LEDs, on a white plinth in the CVPR 2026 Art Gallery, with a visitor walking past.',
    awards: [
      'IEEE Computer Society Technical Community on Pattern Analysis and Machine Intelligence (TCPAMI) Art Award',
      'Spotlight — one of 12 spotlighted works',
    ],
    description:
      'Yann LeCun’s LeNet-1, rebuilt in a physical substrate of transparent circuit boards, LEDs, and glass. The installation runs live computation, exploring how an early convolutional network “thinks”.',
    links: {
      Gallery: 'https://thecvf-art.com/project.php?year=2026&artist=nick-oh&id=992',
      'Video 1': 'https://www.youtube.com/watch?v=QGxGXySgqCI',
      'Video 2':
        'https://www.reddit.com/r/computervision/comments/1uhr1g1/a_physical_working_lenet1_1989_built_from/',
      'TCPAMI Award': '/img/tcpami_award_cvpr2026.jpg',
    },
  },
  {
    id: 'glyphs',
    kind: 'software',
    label: 'Web app',
    title: 'Glyphs',
    description:
      'Language is the repetition of finite symbols within a game of rules. Glyphs plays that game in the rounded strokes and arcs of the socius design pattern. Mint your name into a single glyph, a mark that stands for you; or fold a sentence into an encrypted message, scattered across three pieces that mean nothing apart and everything together.',
    links: {
      'Open app': 'https://socius-org.github.io/glyphs/',
      GitHub: 'https://github.com/socius-org/glyphs',
    },
  },
  {
    id: 'redditharbor',
    kind: 'software',
    label: 'Python library',
    title: 'RedditHarbor',
    media: {
      type: 'video',
      src: '/video/redditharbor_demo.mp4',
      poster: '/img/redditharbor_poster.jpg',
      alt: 'Animated terminal demo of RedditHarbor collecting Reddit submissions and comments into a database.',
    },
    description:
      'Ethical, legal, and effortless extraction of Reddit data. RedditHarbor collects submissions, comments, and user profiles from the official Reddit API, anonymises personal information to meet ethical and IRB standards, and stores everything analysis-ready in your own database.',
    links: {
      Docs: 'https://socius-org.github.io/RedditHarbor/',
      PyPI: 'https://pypi.org/project/redditharbor/',
      GitHub: 'https://github.com/socius-org/RedditHarbor',
    },
  },
];
