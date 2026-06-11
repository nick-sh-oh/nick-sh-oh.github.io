// Migrated from _bibliography/papers.bib. Newest first.
// `me` marks the author name(s) to emphasise in the author list.
export const me = ['Nick Oh', 'Seungheon Oh'];

export const publications = [
  {
    id: 'mgv',
    venue: "NeurIPS'25",
    title:
      'Monitor-Generate-Verify (MGV): Formalising Metacognitive Theory for Language Model Reasoning',
    authors: ['Nick Oh', 'Fernand Gobet'],
    venueFull:
      'Foundations of Reasoning in Language Models Workshop at the 39th Conference on Neural Information Processing Systems (NeurIPS)',
    year: 2025,
    selected: true,
    links: {
      'arXiv': 'https://arxiv.org/abs/2511.04341',
      PDF: '/pdf/mgv.pdf',
      Poster: '/pdf/mgv_poster.pdf',
    },
  },
  {
    id: 'petlp',
    venue: "AIES'25",
    title: 'PETLP: A Privacy-by-Design Pipeline for Social Media Data in AI Research',
    authors: ['Nick Oh', 'Giorgos D. Vrakas', 'Siân J. M. Brooke', 'Sasha Morinière', 'Toju Duke'],
    venueFull: 'Proceedings of the 8th AAAI/ACM Conference on AI, Ethics, and Society (AIES)',
    year: 2025,
    selected: false,
    links: {
      Page: 'https://ojs.aaai.org/index.php/AIES/article/view/36685',
      'arXiv': 'https://www.arxiv.org/abs/2508.09232',
      Poster: '/pdf/PETLP_poster.pdf',
    },
  },
  {
    id: 'before',
    venue: "COLM'25",
    title: 'Before you ⟨think⟩, monitor: Implementing Flavell’s Metacognitive Framework in LLMs',
    authors: ['Nick Oh'],
    venueFull:
      'The First Workshop on the Application of LLM Explainability to Reasoning and Planning at the 2nd Conference on Language Modeling (COLM)',
    year: 2025,
    selected: false,
    links: {
      'arXiv': 'https://www.arxiv.org/abs/2510.16374',
      PDF: '/pdf/beforeyouthink.pdf',
      Poster: '/pdf/beforeyouthink_poster.pdf',
    },
  },
  {
    id: 'system',
    venue: "NeurIPS'24",
    title: 'System 1.5: Designing Meta-cognition in Artificial Intelligence',
    authors: ['Nick Oh', 'Fernand Gobet'],
    venueFull:
      'System-2 Reasoning at Scale Workshop at the 38th Conference on Neural Information Processing Systems (NeurIPS)',
    year: 2024,
    selected: true,
    award: 'Spotlight',
    awardNote: 'Selected as one of four presentations for the lightning talk session.',
    links: {
      Page: 'https://neurips.cc/virtual/2024/104306',
      PDF: '/pdf/sys1point5.pdf',
      Poster: '/pdf/sys1point5_poster.pdf',
      Video: 'https://www.youtube-nocookie.com/embed/BedeAoplLVk',
    },
  },
  {
    id: 'position',
    venue: "NeurIPS'24",
    title: 'In Defence of Post-hoc Explainability',
    authors: ['Nick Oh'],
    venueFull:
      'Interpretable AI: Past, Present and Future Workshop at the 38th Conference on Neural Information Processing Systems (NeurIPS)',
    year: 2024,
    selected: true,
    links: {
      'arXiv': 'https://arxiv.org/abs/2412.17883',
      PDF: '/pdf/indefenceofxai.pdf',
      Poster: '/pdf/indefenceofxai_poster.pdf',
    },
  },
  {
    id: 'sentibank',
    venue: "ICWSM'24",
    title: 'sentibank: A Unified Resource of Sentiment Lexicons and Dictionaries',
    authors: ['Nick Oh'],
    venueFull:
      'Proceedings of the 18th International AAAI Conference on Web and Social Media (ICWSM)',
    year: 2024,
    selected: false,
    links: {
      Page: 'https://ojs.aaai.org/index.php/ICWSM/article/view/31443',
      PDF: '/pdf/sentibank.pdf',
      Poster: '/pdf/sentibank_poster.pdf',
      GitHub: 'https://github.com/socius-org/sentibank',
    },
  },
];
