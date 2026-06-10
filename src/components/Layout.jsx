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

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <nav className="nav">
          <div className="nav-brand">
            <NavLink to="/">Nick (Seungheon) Oh</NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/" end>
              about
            </NavLink>
            <NavLink to="/publications">publications</NavLink>
            <NavLink to="/cv">cv</NavLink>
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
