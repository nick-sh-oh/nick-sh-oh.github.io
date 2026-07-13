// Exhibited works, rendered on the Exhibitions page. Newest first.
export const exhibitions = [
  {
    id: 'lenet1',
    venue: "CVPR'26",
    title: 'artefact(s): LeNet-1 (2026)',
    creators: ['Nick Oh', 'Alex Park'],
    venueFull:
      'Art Gallery at the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), Denver',
    year: 2026,
    image: '/img/artefacts-lenet1.jpg',
    imageFull: '/img/artefacts-lenet1.png',
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
      Video: 'https://www.youtube.com/watch?v=QGxGXySgqCI',
      Ceremony: '/img/tcpami_award_cvpr2026.jpg',
    },
  },
];
