import React, { useState } from 'react';
import { CAPABILITIES, CapabilityItem } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export interface CapabilitiesProps {
  readonly onSelectCad: (item: CapabilityItem) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCad }) => {
  const [filter, setFilter] = useState<'ALL' | 'PEB' | 'ROOFING' | 'SPECIALTY'>('ALL');

  const filteredItems = CAPABILITIES.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'PEB') return item.id === 'peb' || item.id === 'conversion' || item.id === 'steel-bridges' || item.id === 'mezzanine';
    if (filter === 'ROOFING') return item.id === 'colour-coated' || item.id === 'upvc' || item.id === 'polycarbonate' || item.id === 'stone-coated';
    if (filter === 'SPECIALTY') return item.id === 'tensile' || item.id === 'puf-panel' || item.id === 'cold-storage';
    return true;
  });

  return (
    <section className="relative py-24 sm:py-32 bg-slate-50/70 text-slate-900 border-b border-slate-200 overflow-hidden" id="services">
      {/* Anchor for backward compatibility with #capabilities links */}
      <div id="capabilities" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          SERVICES
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-600 uppercase">
            WHAT WE DO // 02 SERVICES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Our Services
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-3" />
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto pt-2 leading-relaxed">
            Eleven certified structural steel engineering and specialized roofing services engineered to IS 800:2007 standards from computational CAD design to on-site erection.
          </p>
        </div>

        {/* Filter Tabs Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 text-xs font-mono cad-scrollbar">
          <button
            type="button"
            onClick={() => setFilter('ALL')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all uppercase font-semibold ${
              filter === 'ALL'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-2xs'
            }`}
          >
            All Services (11)
          </button>
          <button
            type="button"
            onClick={() => setFilter('PEB')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all uppercase font-semibold ${
              filter === 'PEB'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-2xs'
            }`}
          >
            PEB &amp; Structures (4)
          </button>
          <button
            type="button"
            onClick={() => setFilter('ROOFING')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all uppercase font-semibold ${
              filter === 'ROOFING'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-2xs'
            }`}
          >
            Roofing Systems (4)
          </button>
          <button
            type="button"
            onClick={() => setFilter('SPECIALTY')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all uppercase font-semibold ${
              filter === 'SPECIALTY'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-2xs'
            }`}
          >
            Insulation &amp; Specialty (3)
          </button>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectCad(item)}
              className={`group relative bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-xl shadow-xs transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden reveal-bump hover-bump stagger-${(idx % 6) + 1}`}
            >
              {/* Authentic Photograph Preview */}
              {item.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 shadow-xs">
                      {item.number}
                    </span>
                    <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-mono px-2 py-0.5 font-bold rounded border border-slate-200 shadow-2xs truncate max-w-[170px]">
                      {item.metric}
                    </span>
                  </div>
                </div>
              )}

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-amber-600 transition-colors font-display">
                      {item.title}
                    </h3>
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:text-white group-hover:bg-amber-500 transition-colors shrink-0">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500 truncate pr-2 font-medium text-[11px]">
                    {item.cadSpec}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCad(item);
                    }}
                    className="inline-flex items-center gap-1.5 text-amber-700 font-bold hover:text-amber-800 shrink-0 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>VIEW CAD</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
