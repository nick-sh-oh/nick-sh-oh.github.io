import { Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Publications from './pages/Publications.jsx';
import Teaching from './pages/Teaching.jsx';
import Projects from './pages/Projects.jsx';
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

// Report client-side navigations to GoatCounter. The initial page load is
// counted by count.js itself (see index.html), so the first render is skipped.
function TrackPageviews() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.goatcounter?.count?.({
      path: location.pathname + location.search + location.hash,
    });
  }, [location]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <RouteMeta />
      <TrackPageviews />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/projects" element={<Projects />} />
        {/* Old URL, kept so inbound links keep working */}
        <Route path="/exhibitions" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Layout>
  );
}
