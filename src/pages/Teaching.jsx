import { teachingNotes } from '../data/teaching.js';
import { me } from '../data/publications.js';
import LinkPills from '../components/LinkPills.jsx';

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

function NoteEntry({ note }) {
  return (
    <li className="note">
      <div className="note-body">
        <div className="note-meta">
          <span className="badge badge-note">{note.type}</span>
          <span className="badge-type">{note.version}</span>
          <span className="note-date">{note.date}</span>
        </div>
        <h3 className="note-title">{note.title}</h3>
        <Authors authors={note.authors} />
        <div className="pub-venue-full">{note.affiliations}</div>
        <p className="pub-desc">{note.description}</p>
        <LinkPills links={note.links} title={note.title} />
      </div>
      <a
        className="note-fig"
        href={note.links.PDF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${note.title} (PDF)`}
      >
        <img src={note.thumbnail.src} alt={note.thumbnail.alt} loading="lazy" />
        <span className="note-fig-caption">{note.thumbnail.caption}</span>
      </a>
    </li>
  );
}

export default function Teaching() {
  return (
    <article className="page teaching">
      <h1>Teaching</h1>
      <section className="pub-year-group">
        <ul className="note-list">
          {teachingNotes.map((note) => (
            <NoteEntry key={note.id} note={note} />
          ))}
        </ul>
      </section>
    </article>
  );
}
