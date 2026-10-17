import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject, COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export interface PortfolioProps {
  readonly onSelectProject: (project: PortfolioProject) => void;
  readonly onRequestDossier: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onRequestDossier }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'PEB') return p.category.includes('PEB');
    if (activeFilter === 'STEEL') return p.category.includes('STEEL');
    if (activeFilter === 'COLD') return p.category.includes('COLD');
    if (activeFilter === 'INFRA') return p.category.includes('INFRASTRUCTURE') || p.category.includes('PORT');
    return p.category === activeFilter;
  });

  const categories = [
    { label: 'ALL (500+)', value: 'ALL' },
    { label: 'PEB & WAREHOUSING', value: 'PEB' },
    { label: 'STRUCTURAL STEEL', value: 'STEEL' },
    { label: 'COLD STORAGE & PUFF', value: 'COLD' },
    { label: 'INFRASTRUCTURE', value: 'INFRA' },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200 overflow-hidden" id="portfolio">
      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-600 uppercase">
            Recent Work // 05 SELECTED CASE ARCHIVES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Work That Speaks in Steel.
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-3" />
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto pt-2 leading-relaxed">
            Over 500+ industrial clear-span facilities engineered and erected across South India with 100% verified structural performance.
          </p>
        </div>

        {/* Filter Tabs Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 text-xs font-mono cad-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveFilter(cat.value)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap transition-all uppercase font-semibold text-xs ${
                activeFilter === cat.value
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, pIdx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  alt={project.alt}
                  src={project.image}
                  loading={pIdx < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-mono px-2.5 py-1 font-bold tracking-wider rounded border border-slate-200 shadow-xs">
                    {project.location}
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-300 text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-md font-bold">
                    ● VERIFIED SITE
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                    <span className="font-bold text-amber-600">{project.code}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-amber-600 transition-colors font-display">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-2 text-xs font-mono">
                    <div className="text-slate-500">
                      AREA: <span className="text-slate-900 font-semibold">{project.area}</span>
                    </div>
                    <div className="text-right text-slate-500">
                      STEEL: <span className="text-amber-700 font-semibold">{project.steel}</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Action */}
                  <div
                    className="pt-1 flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={getWhatsAppUrl(
                        COMPANY_CONTACT.whatsapp1Clean,
                        `Hello Crescent Engineering, I am inquiring about project ${project.title} (${project.code}). Please share structural details & estimates.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-xs font-bold transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current shrink-0 text-emerald-600" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
                      </svg>
                      <span>WhatsApp Specification Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dossier Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group hover:border-amber-400 transition-all shadow-xl">
            <div className="space-y-4">
              <span className="font-mono text-amber-400 font-bold text-xs uppercase tracking-wider block">
                HISTORIC TRACK RECORD
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                500+ Structural Deliveries Across India
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Explore our comprehensive project technical register containing verified structural calculation sheets, third-party weld test reports, and drone inspection photography.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={onRequestDossier}
                className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider hover:text-amber-300 transition-colors"
              >
                <span>REQUEST TECHNICAL PROJECT DOSSIER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
