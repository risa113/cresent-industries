import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsMatrix } from './components/StatsMatrix';
import { CompanyEditorial } from './components/CompanyEditorial';
import { Capabilities } from './components/Capabilities';
import { BlueprintBoard } from './components/BlueprintBoard';
import { PrecisionMatrix } from './components/PrecisionMatrix';
import { SectorsServed } from './components/SectorsServed';
import { Portfolio } from './components/Portfolio';
import { Leadership } from './components/Leadership';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { CADModal } from './components/CADModal';
import { ProjectModal } from './components/ProjectModal';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';
import { CapabilityItem, PortfolioProject, CAPABILITIES } from './data/mockData';

export const App: React.FC = () => {
  const [ambientLightOn, setAmbientLightOn] = useState(false);
  const [cadModalOpen, setCadModalOpen] = useState(false);
  const [selectedCadItem, setSelectedCadItem] = useState<CapabilityItem | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string | undefined>(undefined);

  // Global scroll reveal observer for animated sections
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-pop, .reveal-bump'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleOpenCadPortal = () => {
    setSelectedCadItem(CAPABILITIES[0]);
    setCadModalOpen(true);
  };

  const handleSelectCadItem = (item: CapabilityItem) => {
    setSelectedCadItem(item);
    setCadModalOpen(true);
  };

  const handleSelectProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleOpenQuote = (category?: string) => {
    setQuoteCategory(category);
    setQuoteModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col font-sans transition-all duration-700 selection:bg-amber-400 selection:text-black ${
        ambientLightOn ? 'ambient-glow-active' : ''
      }`}
    >
      {/* Proper Enterprise Header & Navigation with Smooth Scrolling */}
      <Navbar
        onRequestQuote={handleOpenQuote}
        onOpenCad={handleOpenCadPortal}
        onSelectCad={handleSelectCadItem}
      />

      {/* Main Single Page Content with Smooth Scrolling Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden scroll-smooth">
        {/* Section 1: Hero */}
        <Hero
          onRequestQuote={handleOpenQuote}
          onOpenCad={handleOpenCadPortal}
          ambientLightOn={ambientLightOn}
          onToggleAmbientLight={() => setAmbientLightOn((prev) => !prev)}
        />

        {/* Section 2: Stats Counter */}
        <StatsMatrix />

        {/* Section 3: 01 / The Company Editorial */}
        <CompanyEditorial />

        {/* Section 4: 02 / Engineering Capabilities */}
        <Capabilities onSelectCad={handleSelectCadItem} />

        {/* Section 5: 09 / Featured PEB Blueprint Experience */}
        <BlueprintBoard />

        {/* Section 6: 03 / Precision Matrix & Standards */}
        <PrecisionMatrix />

        {/* Section 7: 04 / Sectors & Domains */}
        <SectorsServed onSelectSector={(sectorTitle) => handleOpenQuote(sectorTitle)} />

        {/* Section 8: 05 / Selected Case Archives (Portfolio) */}
        <Portfolio
          onSelectProject={handleSelectProject}
          onRequestDossier={() => handleOpenQuote('Pre-Engineered Buildings (PEB)')}
        />

        {/* Section 9: 06 / Leadership Credentials */}
        <Leadership onConsultClick={() => handleOpenQuote('Pre-Engineered Buildings (PEB)')} />

        {/* Section 10: 07 / Client Testimonials */}
        <Testimonials />

        {/* Section 11: Consultation & Contact Form */}
        <ContactCTA onOpenQuoteModal={() => handleOpenQuote()} />
      </main>

      {/* Enterprise Structural Engineering Footer */}
      <Footer onRequestQuote={() => handleOpenQuote()} />

      {/* Sticky Bottom Actions & Scroll-to-Top */}
      <FloatingActions onRequestQuote={() => handleOpenQuote()} />

      {/* Pure React Modals - 100% Zero Page Refresh */}
      <CADModal
        isOpen={cadModalOpen}
        onClose={() => setCadModalOpen(false)}
        item={selectedCadItem}
        onRequestQuote={() => handleOpenQuote(selectedCadItem?.title)}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        project={selectedProject}
        onRequestQuote={() => handleOpenQuote(selectedProject?.title)}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialCategory={quoteCategory}
      />
    </div>
  );
};

export default App;
