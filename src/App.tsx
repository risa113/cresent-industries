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

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [ambientLightOn, setAmbientLightOn] = useState(false);
  const [cadModalOpen, setCadModalOpen] = useState(false);
  const [selectedCadItem, setSelectedCadItem] = useState<CapabilityItem | null>(null);

  // Global scroll reveal observer for up/down/left/right/pop/bump animations
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

  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

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

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen bg-[#07090e] text-white flex flex-col font-sans transition-all duration-700 selection:bg-amber-400 selection:text-black ${
        ambientLightOn ? 'ambient-glow-active' : ''
      }`}
    >
      {/* Top Floating Luxury Nav */}
      <Navbar
        onRequestQuote={handleOpenQuote}
        onOpenCad={handleOpenCadPortal}
        onSelectCad={handleSelectCadItem}
      />

      {/* Main Single Page Content without Refresh */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Section 1: Cinematic Hero Experience with istlight project slider */}
        <Hero
          onRequestQuote={handleOpenQuote}
          onOpenCad={handleOpenCadPortal}
          ambientLightOn={ambientLightOn}
          onToggleAmbientLight={() => setAmbientLightOn((prev) => !prev)}
        />

        {/* Section 2: Atmospheric Stats Counter with Golden Light Beams */}
        <StatsMatrix />

        {/* Section 3: 01 / The Company - Architectural Editorial */}
        <CompanyEditorial />

        {/* Section 4: 02 / Engineering Capabilities (11 Categories with hover glow) */}
        <Capabilities onSelectCad={handleSelectCadItem} />

        {/* Section 5: 09 / Featured PEB Experience (Interactive Blueprint Board) */}
        <BlueprintBoard />

        {/* Section 6: 03 / Why Crescent - with 4 Circular SVG Progress Gauges */}
        <PrecisionMatrix />

        {/* Section 7: 04 / Sectors & Domains */}
        <SectorsServed />

        {/* Section 8: 05 / Selected Case Archives - Filterable Portfolio */}
        <Portfolio
          onSelectProject={handleSelectProject}
          onRequestDossier={handleOpenQuote}
        />

        {/* Section 9: 06 / Leadership Credentials (Er. K. Mohamed & Er. Mohamed Asseesul Islam) */}
        <Leadership onConsultClick={handleOpenQuote} />

        {/* Section 10: 07 / Client Testimonials (Tirunelveli Verified Reviews) */}
        <Testimonials />

        {/* Section 11: Final Call To Action & Consultation Form */}
        <ContactCTA onOpenQuoteModal={handleOpenQuote} />
      </main>

      {/* Section 12: Enterprise Structural Engineering Footer */}
      <Footer onRequestQuote={handleOpenQuote} />

      {/* Sticky Bottom Actions & Scroll-to-Top */}
      <FloatingActions onRequestQuote={handleOpenQuote} />

      {/* Pure React Modals - 100% Zero Page Refresh */}
      <CADModal
        isOpen={cadModalOpen}
        onClose={() => setCadModalOpen(false)}
        item={selectedCadItem}
        onRequestQuote={handleOpenQuote}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        project={selectedProject}
        onRequestQuote={handleOpenQuote}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
};

export default App;
