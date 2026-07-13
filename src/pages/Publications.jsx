import { publications, me } from '../data/publications.js';

function Authors({ authors }) {
  return (
    <span className="authors">
      {authors.map((a, i) => (
        <span key={a}>
          {me.includes(a) ? <strong>{a}</strong> : a}
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </span>
  );
}

function PubEntry({ pub }) {
  const isWorkshop = /workshop/i.test(pub.venueFull);
  return (
    <li className="pub">
      <div className="pub-venue">
        <span className={`badge ${isWorkshop ? 'badge-workshop' : 'badge-conference'}`}>
          {pub.venue}
        </span>
        <span className="badge-type">{isWorkshop ? 'Workshop' : 'Main track'}</span>
      </div>
      <div className="pub-body">
        <h3 className="pub-title">{pub.title}</h3>
        <Authors authors={pub.authors} />
        <div className="pub-venue-full">{pub.venueFull}</div>
        {pub.description && <p className="pub-desc">{pub.description}</p>}
        {pub.award && (
          <div className="pub-award" title={pub.awardNote}>
            ★ {pub.award}
            {pub.awardNote ? ` — ${pub.awardNote}` : ''}
          </div>
        )}
        <div className="pub-links">
          {Object.entries(pub.links).map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <article className="page publications">
      <h1>Publications</h1>
      <p className="muted">
        Also on <a href="https://scholar.google.com/citations?user=L0tpB4EAAAAJ">Google Scholar</a>.
      </p>
      {years.map((year) => (
        <section key={year} className="pub-year-group">
          <h2 className="pub-year">{year}</h2>
          <ul className="pub-list">
            {publications
              .filter((p) => p.year === year)
              .map((pub) => (
                <PubEntry key={pub.id} pub={pub} />
              ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
