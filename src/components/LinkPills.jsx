import { useEffect, useState } from 'react';
import { GitHubIcon, HuggingFaceIcon } from './icons.jsx';

// Video links and links to image files open in an in-page lightbox instead of a new tab.
const popupKind = (label, href) =>
  label === 'Video' ? 'video' : /\.(jpe?g|png|webp|gif)$/i.test(href) ? 'image' : null;

// Labels rendered as an icon-only pill instead of text.
const brandIcons = { GitHub: GitHubIcon, 'Hugging Face': HuggingFaceIcon };

const youTubeId = (url) => url.match(/[?&]v=([\w-]+)/)?.[1] ?? url.split('/').pop();

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button className="lightbox-close" type="button" aria-label="Close" onClick={onClose}>
        ✕
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {item.kind === 'video' ? (
          <iframe
            className="lightbox-video"
            src={`https://www.youtube-nocookie.com/embed/${youTubeId(item.src)}?autoplay=1&playsinline=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <img className="lightbox-img" src={item.src} alt={item.title} />
        )}
      </div>
    </div>
  );
}

export default function LinkPills({ links, title }) {
  const [item, setItem] = useState(null);

  return (
    <div className="pub-links">
      {Object.entries(links).map(([label, href]) => {
        const kind = popupKind(label, href);
        const Icon = brandIcons[label];
        return kind ? (
          <button
            key={label}
            type="button"
            onClick={() => setItem({ kind, src: href, title: `${title} — ${label}` })}
          >
            {label}
          </button>
        ) : Icon ? (
          <a
            key={label}
            className="pub-link-icon"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <Icon width="15" height="15" />
          </a>
        ) : (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      })}
      {item && <Lightbox item={item} onClose={() => setItem(null)} />}
    </div>
  );
}
