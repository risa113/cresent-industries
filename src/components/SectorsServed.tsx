import React from 'react';
import { SECTORS } from '../data/mockData';

export interface SectorsServedProps {
  readonly onSelectSector?: (sectorName: string) => void;
}

export const SectorsServed: React.FC<SectorsServedProps> = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant" id="sectors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-6 mb-10 sm:mb-16 gap-4">
          <div>
            <span className="font-mono text-primary font-bold text-xs sm:text-sm block mb-1">
              04 / SECTORS &amp; DOMAINS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface font-display tracking-tight">
              Built for Industries That Move the World.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tertiary max-w-sm">
            Engineering solutions adapted to the specialized thermodynamic, chemical, and spatial requirements of diverse enterprises.
          </p>
        </div>

        {/* Sectors Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SECTORS.map((sector) => (
            <div
              key={sector.title}
              className="border border-outline-variant bg-surface-container-lowest p-5 sm:p-6 hover:border-primary-container hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block group-hover:scale-110 transition-transform">
                  {sector.icon}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-on-surface mb-2 font-headline-sm group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {sector.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-outline-variant/60 flex items-center justify-between text-[11px] font-mono text-tertiary">
                <span>INDUSTRY GRADE</span>
                <span className="text-primary font-bold">100% SPEC</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
