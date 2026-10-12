import React from 'react';
import { SECTORS } from '../data/mockData';

export interface SectorsServedProps {
  readonly onSelectSector?: (sectorName: string) => void;
}

export const SectorsServed: React.FC<SectorsServedProps> = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#090c12] text-white border-b border-white/10 overflow-hidden" id="sectors">
      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          DOMAINS
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-400 uppercase">
            OUR REACH // 04 SECTORS &amp; DOMAINS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Built for Industries That Move the World.
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full mt-3" />
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto pt-2 leading-relaxed">
            Engineering solutions adapted to the specialized thermodynamic, chemical, and spatial requirements of diverse enterprises.
          </p>
        </div>

        {/* Sectors Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sector) => (
            <div
              key={sector.title}
              className="bg-[#11151f] rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 hover:bg-[#151b27] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 group-hover:bg-amber-400/10 transition-all">
                  <span className="material-symbols-outlined text-3xl">
                    {sector.icon}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display group-hover:text-amber-400 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                  {sector.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>INDUSTRY GRADE</span>
                <span className="text-amber-400 font-bold">100% SPEC</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
