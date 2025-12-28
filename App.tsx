import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import { ProjectDetail } from './pages/ProjectDetail';
import { ContactProvider } from './context/ContactContext';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  return (
    <ContactProvider>
      <HashRouter>
        <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
          <ContactModal />
        </div>
      </HashRouter>
    </ContactProvider>
  );
};

export default App;