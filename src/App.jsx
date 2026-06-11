import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Publications from './pages/Publications.jsx';
import Exhibitions from './pages/Exhibitions.jsx';
import CV from './pages/CV.jsx';
import { ROUTES } from './seo.js';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Keep the tab title and description in sync during client-side navigation;
// crawlers get the same values from the per-route static HTML.
function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const norm = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
    const route = ROUTES.find((r) => r.path === norm) ?? ROUTES[0];
    document.title = route.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Layout>
  );
}
