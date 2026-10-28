import { useState } from 'react';
import { teachingNotes } from '../data/teaching.js';
import { me } from '../data/publications.js';
import LinkPills, { Lightbox } from '../components/LinkPills.jsx';
import { PlayIcon } from '../components/icons.jsx';

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

// Recorded talks for a series: a compact scrollable list; each row opens the
// YouTube video in the lightbox.
function Recordings({ note }) {
  const [item, setItem] = useState(null);
  return (
    <div className="note-recordings">
      <h4 className="note-recordings-title">Recordings</h4>
      <ol className="note-recordings-list">
        {note.recordings.map((r) => (
          <li key={r.youtube}>
            <button
              type="button"
              className="note-recording"
              onClick={() => setItem({ kind: 'video', src: r.youtube, title: `${note.title} — ${r.title}` })}
            >
              <span className="note-recording-play" aria-hidden="true">
                <PlayIcon />
              </span>
              <span className="note-recording-text">
                <span className="note-recording-title">{r.title}</span>
                <span className="note-recording-speaker">
                  {me.includes(r.speaker) ? <strong>{r.speaker}</strong> : r.speaker}, {r.affiliation}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
      {item && <Lightbox item={item} onClose={() => setItem(null)} />}
    </div>
  );
}

function NoteEntry({ note }) {
  const figHref = note.links.PDF || Object.values(note.links)[0];
  return (
    <li className="note">
      <div className="note-body">
        <div className="note-meta">
          <span className="badge badge-note">{note.type}</span>
          <span className="badge-type">{note.version || note.role}</span>
          <span className="note-date">{note.date}</span>
        </div>
        <h3 className="note-title">{note.title}</h3>
        <Authors authors={note.authors} />
        <div className="pub-venue-full">{note.affiliations}</div>
        <p className="pub-desc">{note.description}</p>
        {note.recordings && <Recordings note={note} />}
        <LinkPills links={note.links} title={note.title} />
      </div>
      <a
        className="note-fig"
        href={figHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${note.title}${note.links.PDF ? ' (PDF)' : ''}`}
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
