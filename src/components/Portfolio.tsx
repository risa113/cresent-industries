import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/mockData';

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
            <span className="font-mono text-primary font-bold text-xs sm:text-sm block mb-1">
              05 / SELECTED CASE ARCHIVES
            </span>
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
              className="border border-outline-variant bg-surface p-4 sm:p-5 flex flex-col justify-between group hover:border-primary-container hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-dim">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={project.alt}
                    src={project.image}
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-on-background/90 text-on-primary text-[10px] font-mono px-2 py-0.5 tracking-wider backdrop-blur-sm">
                    {project.location}
                  </span>
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

              <div className="pt-4 mt-4 border-t border-outline-variant grid grid-cols-2 text-xs font-mono text-tertiary">
                <div>
                  AREA: <span className="text-on-surface font-semibold">{project.area}</span>
                </div>
                <div className="text-right">
                  STEEL: <span className="text-primary font-semibold">{project.steel}</span>
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
