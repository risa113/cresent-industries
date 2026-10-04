import React from 'react';
import { COMPANY_DATA } from '../data/mockData';

export interface CompanyEditorialProps {
  readonly onLearnMore?: () => void;
}

export const CompanyEditorial: React.FC<CompanyEditorialProps> = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-surface-container-lowest border-b border-outline-variant structural-grid"
      id="company"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-outline-variant pb-4 mb-10 sm:mb-16 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span className="font-mono text-primary font-bold text-xs sm:text-sm">
              {COMPANY_DATA.sectionTag}
            </span>
            <span className="text-outline-variant hidden sm:inline">|</span>
            <span className="text-[10px] sm:text-xs font-semibold text-on-surface-variant uppercase font-label-caps tracking-wider">
              {COMPANY_DATA.subtitle}
            </span>
          </div>
          <span className="font-mono text-outline text-[11px] sm:text-xs">
            {COMPANY_DATA.founded}
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold text-primary tracking-widest uppercase block mb-1.5 font-label-caps">
                {COMPANY_DATA.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface font-display tracking-tight">
                {COMPANY_DATA.headline}
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed font-normal">
              {COMPANY_DATA.p1}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-tertiary leading-relaxed">
              {COMPANY_DATA.p2}
            </p>

            {/* Specification Datum Box */}
            <div className="border border-outline-variant bg-surface-container-low p-4 sm:p-6 space-y-3 sm:space-y-4">
              {COMPANY_DATA.specBox.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-2 ${
                    idx < COMPANY_DATA.specBox.length - 1 ? 'pb-3 border-b border-outline-variant' : ''
                  }`}
                >
                  <span className="text-[10px] sm:text-xs text-outline uppercase font-mono font-medium">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-on-surface break-words">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#credentials"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-container transition-colors text-xs font-semibold uppercase tracking-widest border-b border-primary pb-1 group"
              >
                <span>KNOW OUR STORY &amp; FOUNDATIONAL PHILOSOPHY</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Right Presentation Photograph */}
          <div className="lg:col-span-5 relative w-full">
            <div className="border border-outline-variant bg-surface-container-lowest p-2 relative group shadow-[0px_4px_16px_rgba(23,27,34,0.04)]">
              <div className="relative overflow-hidden aspect-[4/5] bg-surface-dim">
                <img
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  alt="Authentic structural PEB truss framework and column grid fabricated by Crescent Engineering"
                  src={COMPANY_DATA.image}
                  loading="lazy"
                  decoding="async"
                />

                {/* Blueprint Coordinate Tag Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-on-background/90 text-on-primary p-3 sm:p-4 backdrop-blur-sm border-t border-outline">
                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-outline-variant mb-1">
                    <span>GPS COORD</span>
                    <span>DATUM SPEC</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] sm:text-xs font-mono">
                    <span className="text-surface-bright font-semibold truncate mr-2">
                      {COMPANY_DATA.gps}
                    </span>
                    <span className="text-secondary-fixed shrink-0">
                      {COMPANY_DATA.datum}
                    </span>
                  </div>
                </div>
              </div>

              {/* Engineering Coordinate Callouts */}
              <div className="pt-2.5 px-2 flex justify-between items-center text-[10px] sm:text-xs font-mono text-outline">
                <span>{COMPANY_DATA.facilityCode}</span>
                <span>{COMPANY_DATA.qcTolerance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
