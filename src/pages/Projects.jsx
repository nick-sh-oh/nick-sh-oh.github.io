import { projects } from '../data/projects.js';
import { me } from '../data/publications.js';
import LinkPills from '../components/LinkPills.jsx';
import GlyphLoop from '../components/GlyphLoop.jsx';

function Creators({ creators }) {
  return (
    <span className="authors">
      {creators.map((c, i) => (
        <span key={c}>
          {me.includes(c) ? <strong>{c}</strong> : c}
          {i < creators.length - 1 ? ', ' : ''}
        </span>
      ))}
    </span>
  );
}

function Exhibition({ ex }) {
  return (
    <section className="exhibit">
      <div className="exhibit-meta">
        <span className="badge badge-exhibition">{ex.venue}</span>
      </div>
      <h2 className="exhibit-title">{ex.title}</h2>
      <Creators creators={ex.creators} />
      <div className="pub-venue-full">{ex.venueFull}</div>
      {ex.awards?.length > 0 && (
        <ul className="awards">
          {ex.awards.map((award) => (
            <li key={award}>★ {award}</li>
          ))}
        </ul>
      )}
      {ex.image && (
        <figure className="exhibit-figure">
          <a href={ex.imageFull ?? ex.image} target="_blank" rel="noopener noreferrer">
            <img src={ex.image} alt={ex.imageAlt ?? ex.title} loading="lazy" />
          </a>
        </figure>
      )}
      <p className="exhibit-desc">{ex.description}</p>
      <LinkPills links={ex.links} title={ex.title} />
    </section>
  );
}

function SoftwareCard({ proj }) {
  return (
    <section className="proj-card">
      <div className="proj-media">
        {proj.id === 'glyphs' ? (
          <GlyphLoop />
        ) : proj.media.type === 'video' ? (
          <video
            src={proj.media.src}
            poster={proj.media.poster}
            aria-label={proj.media.alt}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img src={proj.media.src} alt={proj.media.alt} loading="lazy" />
        )}
      </div>
      <div className="proj-body">
        <div className="proj-meta">
          <span className="badge-type">{proj.label}</span>
        </div>
        <h3 className="proj-title">{proj.title}</h3>
        <p className="proj-desc">{proj.description}</p>
        <LinkPills links={proj.links} title={proj.title} />
      </div>
    </section>
  );
}

export default function Projects() {
  const exhibitions = projects.filter((p) => p.kind === 'exhibition');
  const software = projects.filter((p) => p.kind === 'software');

  return (
    <article className="page projects">
      <h1>Projects</h1>
      {exhibitions.map((ex) => (
        <Exhibition key={ex.id} ex={ex} />
      ))}
      <div className="proj-grid">
        {software.map((proj) => (
          <SoftwareCard key={proj.id} proj={proj} />
        ))}
      </div>
    </article>
  );
}
