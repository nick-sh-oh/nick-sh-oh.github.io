import { exhibitions } from '../data/exhibitions.js';
import { me } from '../data/publications.js';

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

export default function Exhibitions() {
  return (
    <article className="page exhibitions">
      <h1>Exhibitions</h1>
      {exhibitions.map((ex) => (
        <section key={ex.id} className="exhibit">
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
          <div className="pub-links">
            {Object.entries(ex.links).map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
