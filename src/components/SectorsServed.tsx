import React from 'react';
import { SECTORS } from '../data/mockData';

export interface SectorsServedProps {
  readonly onSelectSector?: (sectorName: string) => void;
}

export const SectorsServed: React.FC<SectorsServedProps> = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-50/70 text-slate-900 border-b border-slate-200 overflow-hidden" id="applicable-for">
      {/* Anchor for backward compatibility with #sectors links */}
      <div id="sectors" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          APPLICATIONS
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-600 uppercase">
            APPLICATION DOMAINS // 04 APPLICABLE FOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Applicable For
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-3" />
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto pt-2 leading-relaxed">
            Specialized structural steel frameworks and high-performance roofing systems tailored for 5 core industrial, commercial, and institutional sectors.
          </p>
        </div>

        {/* 5 Categories Responsive Grid (3 on Top, 2 Centered on Desktop) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {SECTORS.map((sector, idx) => (
            <div
              key={sector.id || sector.title}
              className={`group bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-xl shadow-xs transition-all duration-300 flex flex-col justify-between overflow-hidden reveal-bump hover-bump stagger-${(idx % 6) + 1} w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md`}
            >
              {/* Category Image Banner */}
              {sector.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={sector.image}
                    alt={sector.imageAlt || sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 shadow-xs">
                      CAT {sector.number}
                    </span>
                    {sector.metric && (
                      <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-mono px-2 py-0.5 font-bold rounded border border-slate-200 shadow-2xs">
                        {sector.metric}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Category Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-amber-600 transition-colors font-display">
                      {sector.title}
                    </h3>
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                      <span className="material-symbols-outlined text-xl">
                        {sector.icon}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed font-normal">
                    {sector.description}
                  </p>
                </div>

                {/* Footer Specification Tag */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>SECTOR GRADE</span>
                  <span className="text-amber-700 font-bold">100% IS 800 COMPLIANT</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
