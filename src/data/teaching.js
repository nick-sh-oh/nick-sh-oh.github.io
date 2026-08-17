// Lecture notes and teaching materials. Newest first.
export const teachingNotes = [
  {
    id: 'transformers-llms',
    type: 'Lecture note',
    title: 'Introduction to Transformers and LLMs',
    authors: ['Nick Oh', 'Steven Feng'],
    affiliations: 'socius labs · Stanford University',
    version: 'Draft v1.0',
    date: 'August 2026',
    dateISO: '2026-08-17',
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
