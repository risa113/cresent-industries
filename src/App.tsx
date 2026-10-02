import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyEditorial } from './components/CompanyEditorial';
import { Capabilities } from './components/Capabilities';
import { BlueprintBoard } from './components/BlueprintBoard';
import { PrecisionMatrix } from './components/PrecisionMatrix';
import { SectorsServed } from './components/SectorsServed';
import { Portfolio } from './components/Portfolio';
import { StatsMatrix } from './components/StatsMatrix';
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
  const [cadModalOpen, setCadModalOpen] = useState(false);
  const [selectedCadItem, setSelectedCadItem] = useState<CapabilityItem | null>(null);

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
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans selection:bg-primary-container selection:text-on-primary">
      {/* Top Floating Nav */}
      <Navbar onRequestQuote={handleOpenQuote} onOpenCad={handleOpenCadPortal} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Section 2: Cinematic Hero Experience */}
        <Hero onRequestQuote={handleOpenQuote} onOpenCad={handleOpenCadPortal} />

        {/* Section 3: 01 / The Company - Architectural Editorial */}
        <CompanyEditorial />

        {/* Section 4: 02 / Engineering Capabilities (11 Categories) */}
        <Capabilities onSelectCad={handleSelectCadItem} />

        {/* Section 5: 09 / Featured PEB Experience (Architectural Blueprint Board) */}
        <BlueprintBoard />

        {/* Section 6: 03 / Why Crescent - Graphite Ink Precision Matrix */}
        <PrecisionMatrix />

        {/* Section 7: 04 / Sectors & Domains */}
        <SectorsServed />

        {/* Section 8: 05 / Selected Case Archives - Architectural Portfolio */}
        <Portfolio
          onSelectProject={handleSelectProject}
          onRequestDossier={handleOpenQuote}
        />

        {/* Section 9: Engineering Data / Stats Matrix */}
        <StatsMatrix />

        {/* Section 10: 06 / Leadership Credentials */}
        <Leadership onConsultClick={handleOpenQuote} />

        {/* Section 11: 07 / Client Testimonials */}
        <Testimonials />

        {/* Section 12: Final Call To Action & RFP Form */}
        <ContactCTA onOpenQuoteModal={handleOpenQuote} />
      </main>

      {/* Section 13: Enterprise Structural Engineering Footer */}
      <Footer onRequestQuote={handleOpenQuote} />

      {/* Sticky Bottom Actions & Scroll-to-Top */}
      <FloatingActions onRequestQuote={handleOpenQuote} />

      {/* Modals */}
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
