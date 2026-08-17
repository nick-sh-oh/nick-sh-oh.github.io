import { useEffect, useRef } from 'react';

// The looping "self-writing glyph" hero from socius-org/glyphs, ported from the
// app's inline identicon engine so the animation runs natively on this site:
// a name hashes (FNV-1a → mulberry32) to a mark in the socius 5×5 stroke
// vocabulary, and each stroke draws itself in via stroke-dashoffset.
const N = 5;
const CELL = 111.141;
const PAD = 30.8725;
const SW = 61.745;
const K = 0.5523;
const VB = (N - 1) * CELL + SW;
const PLATE = '#00002E';
const OUT = 880;
const CEN = OUT / 2;
const DISC_R = 410;
const OFS = (OUT - VB) / 2;
const X = (c) => PAD + c * CELL;
const Y = (r) => PAD + r * CELL;
const F = (v) => Math.round(v * 1000) / 1000;

function hash32(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function prng(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Quarter-circle rounding a corner between horizontal arm node A and vertical
// arm node C.
function arcPath(A, C) {
  const ax = X(A.c);
  const ay = Y(A.r);
  const cx = X(C.c);
  const cy = Y(C.r);
  const dx = cx - ax;
  const dy = cy - ay;
  return `M${F(ax)} ${F(ay)}C${F(ax + dx * K)} ${F(ay)} ${F(cx)} ${F(cy - dy * K)} ${F(cx)} ${F(cy)}`;
}
const hbar = (r, c) => `M${F(X(c))} ${F(Y(r))}H${F(X(c + 1))}`;
const vbar = (r, c) => `M${F(X(c))} ${F(Y(r))}V${F(Y(r + 1))}`;

function armsFor(r, c, corner) {
  // corner 0..3 → TL,TR,BL,BR
  const br = r + (corner >> 1);
  const bc = c + (corner & 1);
  return {
    A: { r: br, c: bc === c ? c + 1 : c },
    C: { r: br === r ? r + 1 : r, c: bc },
  };
}

function buildPaths(name) {
  const rnd = prng(hash32(name.toUpperCase().replace(/\s+/g, ' ').trim()));
  const H = new Set();
  const V = new Set();
  const arcs = [];
  let count = 0;
  for (let r = 0; r < N - 1; r++)
    for (let c = 0; c < N - 1; c++) {
      if (rnd() < 0.25) continue; // ~75% filled → bold, dense socius-like
      count++;
      const t = rnd();
      if (t < 0.4) H.add(`${r},${c}`);
      else if (t < 0.7) V.add(`${r},${c}`);
      else {
        const a = armsFor(r, c, (rnd() * 4) | 0);
        arcs.push(arcPath(a.A, a.C));
      }
    }
  let guard = 0; // guarantee a non-trivial mark
  while (count < 5 && guard++ < 60) {
    const r = Math.floor(rnd() * (N - 1));
    const c = Math.floor(rnd() * (N - 1));
    const a = armsFor(r, c, Math.floor(rnd() * 4));
    arcs.push(arcPath(a.A, a.C));
    count++;
  }
  const paths = [];
  H.forEach((k) => {
    const [r, c] = k.split(',').map(Number);
    paths.push(hbar(r, c));
  });
  V.forEach((k) => {
    const [r, c] = k.split(',').map(Number);
    paths.push(vbar(r, c));
  });
  return paths.concat(arcs);
}

// The socius logo in the same stroke vocabulary — always drawn first.
const LOGO_PATHS = [
  hbar(0, 3),
  vbar(0, 0),
  vbar(3, 4),
  hbar(4, 0),
  hbar(1, 0),
  vbar(1, 3),
  hbar(3, 3),
  vbar(2, 1),
  arcPath({ r: 2, c: 3 }, { r: 1, c: 4 }),
  arcPath({ r: 0, c: 1 }, { r: 1, c: 2 }),
  arcPath({ r: 4, c: 3 }, { r: 3, c: 2 }),
  arcPath({ r: 2, c: 1 }, { r: 3, c: 0 }),
];

const FEED = [
  'SOCIUS',
  'GLYPHS',
  'LENET',
  'SIGNAL',
  'ARTEFACT',
  'TRANSMIT',
  'CIPHER',
  'RECEIVER',
  'UNKNOWN',
  'PATTERN',
];

function svgMarkup(paths) {
  return [
    `<svg viewBox="0 0 ${OUT} ${OUT}" fill="none" xmlns="http://www.w3.org/2000/svg">`,
    `<circle cx="${CEN}" cy="${CEN}" r="${DISC_R}" fill="${PLATE}"/>`,
    `<g transform="translate(${F(OFS)} ${F(OFS)})">`,
    ...paths.map(
      (d) =>
        `<path d="${d}" stroke="white" stroke-width="${SW}" stroke-linecap="round" stroke-linejoin="round"/>`
    ),
    `</g>`,
    `</svg>`,
  ].join('');
}

export default function GlyphLoop() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let i = 0;
    let first = true;
    function writeGlyph() {
      el.innerHTML = svgMarkup(first ? LOGO_PATHS : buildPaths(FEED[i++ % FEED.length]));
      first = false;
      el.querySelectorAll('path').forEach((p, j) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
        p.style.transition = 'none';
        p.getBoundingClientRect(); // commit hidden state before animating
        p.style.transition = 'stroke-dashoffset 0.55s ease';
        p.style.transitionDelay = j * 0.1 + 's';
        p.style.strokeDashoffset = '0';
      });
    }
    writeGlyph();
    const id = setInterval(writeGlyph, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={ref}
      className="glyph-loop"
      role="img"
      aria-label="Looping animation of socius-style glyph marks writing themselves stroke by stroke"
    />
  );
}
