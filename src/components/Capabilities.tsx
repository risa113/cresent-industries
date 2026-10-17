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
    if (filter === 'PEB') return item.id === 'peb' || item.id === 'steel-fab' || item.id === 'steel-bridges' || item.id === 'conversion';
    if (filter === 'ROOFING') return item.id === 'colour-coated' || item.id === 'upvc' || item.id === 'polycarbonate' || item.id === 'stone-coated';
    if (filter === 'SPECIALTY') return item.id === 'tensile' || item.id === 'puff-panel' || item.id === 'cold-storage';
    return true;
  });

  return (
    <section className="relative py-24 sm:py-32 bg-slate-50/70 text-slate-900 border-b border-slate-200 overflow-hidden" id="capabilities">
      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          CAPABILITIES
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header matching istlight style */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-600 uppercase">
            WHAT CAN WE OFFER // 02 CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Engineering Capabilities
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-3" />
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto pt-2 leading-relaxed">
            Eleven specialized structural fabrication categories delivering turn-key civil integrity from computer-aided structural design to on-site robotic crane erection.
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
            All Categories (11)
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
            PEB &amp; Steel Structures (4)
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
            Industrial Roofing (4)
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
            Tensile &amp; Cold Storage (3)
          </button>
        </div>

        {/* 11 Services Grid with Hover Invert Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectCad(item)}
              className={`group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-amber-400 hover:shadow-xl shadow-xs transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden reveal-bump hover-bump stagger-${(idx % 6) + 1}`}
            >
              {/* Top Row: Number & Icon */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-amber-600 font-bold text-lg">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:text-white group-hover:bg-amber-500 transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors font-display">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center text-xs font-mono">
                <span className="text-slate-500 truncate pr-2 font-semibold">
                  {item.metric}
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
          ))}
        </div>
      </div>
    </section>
  );
};
