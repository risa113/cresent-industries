import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject, COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';

export interface PortfolioProps {
  readonly onSelectProject: (project: PortfolioProject) => void;
  readonly onRequestDossier: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onRequestDossier }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category === activeFilter;
  });

  const categories = [
    { label: 'ALL (500+)', value: 'ALL' },
    { label: 'PEB BUILDINGS', value: 'PEB BUILDINGS' },
    { label: 'STRUCTURAL STEEL', value: 'STRUCTURAL STEEL' },
    { label: 'TENSILE', value: 'TENSILE' },
    { label: 'COLD STORAGE', value: 'COLD STORAGE' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-lowest border-b border-outline-variant" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-6 mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-primary font-bold text-xs sm:text-sm">
                05 / SELECTED CASE ARCHIVES
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold uppercase">
                ● 100% REAL CLIENT SITES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface font-display tracking-tight">
              Work That Speaks in Steel.
            </h2>
          </div>

          {/* Filterable Aesthetic Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 cad-scrollbar text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                className={`px-3 py-1.5 whitespace-nowrap transition-colors uppercase ${
                  activeFilter === cat.value
                    ? 'bg-on-background text-on-primary font-bold'
                    : 'border border-outline-variant hover:border-on-background text-tertiary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="border border-outline-variant bg-surface p-4 sm:p-5 flex flex-col justify-between group hover:border-primary-container hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-dim">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={project.alt}
                    src={project.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="bg-on-background/90 text-on-primary text-[10px] font-mono px-2 py-0.5 tracking-wider backdrop-blur-sm">
                      {project.location}
                    </span>
                    <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[9px] font-mono px-1.5 py-0.5 backdrop-blur-sm">
                      VERIFIED WORK
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-mono text-tertiary">
                  <span className="font-semibold text-primary">{project.code}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors font-headline-sm">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 mt-4 border-t border-outline-variant">
                <div className="grid grid-cols-2 text-xs font-mono text-tertiary">
                  <div>
                    AREA: <span className="text-on-surface font-semibold">{project.area}</span>
                  </div>
                  <div className="text-right">
                    STEEL: <span className="text-primary font-semibold">{project.steel}</span>
                  </div>
                </div>

                {/* Direct WhatsApp Quick Chat Options on Card */}
                <div
                  className="pt-2 flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={getWhatsAppUrl(
                      COMPANY_CONTACT.whatsapp1Clean,
                      `Hello Crescent Engineering, I am inquiring about project ${project.title} (${project.code}). Please share structural details & estimates.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-[11px] font-semibold transition-colors"
                    title={`WhatsApp Enquiry: ${project.title}`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0 text-emerald-600" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
                    </svg>
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Dossier Track Record Card */}
          <div className="border border-outline-variant bg-surface-container-low p-6 sm:p-8 flex flex-col justify-between group hover:border-primary hover:shadow-md transition-all">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-mono text-primary font-bold text-xs uppercase tracking-wider block">
                HISTORIC TRACK RECORD
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline-md">
                500+ Structural Deliveries Across India
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Explore our comprehensive project technical register containing verified structural calculation sheets, third-party weld test reports, and drone inspection photography.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-outline-variant/60">
              <button
                type="button"
                onClick={onRequestDossier}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider font-label-caps group-hover:text-primary-container focus:outline-none"
              >
                <span>REQUEST TECHNICAL PROJECT DOSSIER</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
