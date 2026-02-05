import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import AboutPage from './views/AboutPage';
import ServicesPage from './views/ServicesPage';
import ContactPage from './views/ContactPage';
import MediaPage from './views/MediaPage';
import BlogPage from './views/BlogPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Fallback for other pages to Home for this demo */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;