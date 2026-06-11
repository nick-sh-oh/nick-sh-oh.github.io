import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon } from './icons.jsx';

function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
  }
  return 'light';
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

// Hide the header when scrolling down, reveal on scroll up (socius.org pattern).
function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 100);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return hidden;
}

export default function Layout({ children }) {
  const headerHidden = useHideOnScroll();

  return (
    <div className="site">
      <header className={`site-header${headerHidden ? ' header-hidden' : ''}`}>
        <nav className="nav">
          <div className="nav-brand">
            <NavLink to="/">Nick (Seungheon) Oh</NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/" end>
              About
            </NavLink>
            <NavLink to="/publications">Publications</NavLink>
            <NavLink to="/exhibitions">Exhibitions</NavLink>
            <NavLink to="/cv">CV</NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="content">{children}</main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Nick (Seungheon) Oh</span>
        <span className="footer-sep">·</span>
        <span>
          Built with <a href="https://react.dev/">React</a> &amp;{' '}
          <a href="https://vitejs.dev/">Vite</a>, hosted on{' '}
          <a href="https://pages.github.com/">GitHub Pages</a>
        </span>
      </footer>
    </div>
  );
}
