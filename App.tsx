import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import ServicesPage from './views/ServicesPage';
import ContactPage from './views/ContactPage';
import AboutPage from './views/AboutPage';
import MediaPage from './views/MediaPage';
import GalleryPage from './views/GalleryPage';
import ChairmanProfile from './views/ChairmanProfile';
import Portfolio from './views/Portfolio';
import ServiceDetail from './views/ServiceDetail';

import LoadingScreen from './components/LoadingScreen';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chairman" element={<ChairmanProfile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Keep other pages as placeholders or remove if not needed */}
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* Fallback for other pages to Home for this demo */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;