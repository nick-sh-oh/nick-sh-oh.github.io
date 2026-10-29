// Lecture notes, series and teaching materials. Newest first.
// version (notes) or role (series) fills the second badge; the thumbnail opens links.PDF, else the first link.
// recordings (optional) lists talk videos shown under the description.
export const teachingNotes = [
  {
    id: 'hai101',
    type: 'Lecture series',
    title: 'HAI101 · Human x Artificial Intelligence',
    authors: ['Nick Oh'],
    role: 'Organiser',
    affiliations: 'Centre for Philosophy of Natural and Social Science (CPNSS), London School of Economics',
    date: 'October – November 2026',
    dateISO: '2026-10-23',
    description:
      'A lecture series spanning the social, behavioural, cognitive sciences, philosophy, and AI, asking what machines can teach us about minds. Twelve speakers over three Fridays at LSE (23 October, 6 and 13 November 2026), from Stanford, MIT, Penn, UCL, Utrecht, Oxford, Groningen, Princeton, Yale and LSE, followed by an Industry Day.',
    thumbnail: {
      src: '/img/hai101_poster.jpg',
      alt: 'HAI101 poster: a painted portrait in profile with numbers scattered through the hair, the title Human x Artificial Intelligence, the tagline, and the LSE mark.',
      caption: 'socialscience.ai',
    },
    // Talks are listed in playlist order; each opens in the in-page lightbox.
    recordings: [
      { title: 'Introduction', speaker: 'Nick Oh', affiliation: 'LSE', youtube: 'https://www.youtube.com/watch?v=4U_yFlk5geQ' },
      { title: 'The Developing Language Model', speaker: 'Steven Feng', affiliation: 'Stanford', youtube: 'https://www.youtube.com/watch?v=LXTPT4RUmGQ' },
      { title: 'Neural Networks as Behavioural and Cognitive Proxy', speaker: 'Nick Oh', affiliation: 'LSE', youtube: 'https://www.youtube.com/watch?v=M7qRWlmQDww' },
      { title: 'Impact of AI on Human Expertise', speaker: 'Fernand Gobet', affiliation: 'LSE', youtube: 'https://www.youtube.com/watch?v=YMdvng7ingY' },
    ],
    links: {
      Website: 'https://socialscience.ai/',
      Playlist: 'https://www.youtube.com/playlist?list=PLWM0TBrF7f4c',
      Poster: '/pdf/hai101_poster.pdf',
    },
  },
  {
    id: 'transformers-llms',
    type: 'Lecture note',
    title: 'Introduction to Transformers and LLMs',
    authors: ['Nick Oh', 'Steven Feng'],
    affiliations: 'London School of Economics · Stanford University',
    version: 'Draft v1.2',
    date: 'October 2026',
    dateISO: '2026-10-17',
    description:
      'A self-contained mathematical account of attention and the decoder-only transformer, the architecture at the heart of modern large language models. The note follows one forward pass of a trained model — from token embeddings to next-token prediction — guided by a single observation about matrix multiplication, and presumes little beyond elementary linear algebra and a first acquaintance with neural networks.',
    thumbnail: {
      src: '/img/transformers_fig2b.svg',
      alt: 'Figure 2b from the note: the single-head attention transformer block, tracing a token representation down the residual stream through LayerNorm, Q/K/V projections, attention scores, causal masking, softmax, value retrieval, output projection, and the feedforward network.',
      caption: 'Single-Head Attention Transformer',
    },
    links: { PDF: '/pdf/transformers_llms.pdf' },
  },
];
