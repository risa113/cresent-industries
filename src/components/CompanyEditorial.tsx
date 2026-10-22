import React from 'react';
import { COMPANY_DATA } from '../data/mockData';
import { useRouter } from '../context/RouterContext';
import { ArrowRight } from 'lucide-react';

export interface CompanyEditorialProps {
  readonly onLearnMore?: () => void;
}

export const CompanyEditorial: React.FC<CompanyEditorialProps> = () => {
  const { navigate } = useRouter();
  return (
    <section
      className="relative py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200 overflow-hidden"
      id="editorial"
    >
      {/* Ghost Background Outline Text */}
      <div className="hidden sm:block absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          THE COMPANY
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-14 gap-2 reveal-down">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-amber-600 font-bold text-xs sm:text-sm">
              {COMPANY_DATA.sectionTag}
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase font-mono tracking-wider">
              {COMPANY_DATA.subtitle}
            </span>
          </div>
          <span className="font-mono text-amber-600 text-xs font-semibold">
            {COMPANY_DATA.founded}
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center">
          {/* Left Text Block - Slides in from Left */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 reveal-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase block">
                {COMPANY_DATA.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
                {COMPANY_DATA.headline}
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
              {COMPANY_DATA.p1}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              {COMPANY_DATA.p2}
            </p>

            {/* Specification Datum Box */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-3.5 shadow-sm reveal-up stagger-2 hover-bump">
              {COMPANY_DATA.specBox.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-2 ${
                    idx < COMPANY_DATA.specBox.length - 1 ? 'pb-3 border-b border-slate-200' : ''
                  }`}
                >
                  <span className="text-[11px] text-slate-500 uppercase font-mono font-medium">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 break-words">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                }}
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors text-xs font-bold uppercase tracking-widest group btn-luxury-bump cursor-pointer"
              >
                <span>EXPLORE OUR 30+ YEARS HERITAGE &amp; CREDENTIALS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Presentation Photograph - Slides in from Right */}
          <div className="lg:col-span-5 relative w-full reveal-right stagger-1">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 relative group shadow-xl overflow-hidden hover-bump">
              <div className="relative overflow-hidden aspect-[16/11] sm:aspect-[4/5] rounded-2xl bg-neutral-900 shadow-inner">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  alt="Authentic structural PEB truss framework and column grid fabricated by Crescent Engineering"
                  src={COMPANY_DATA.image}
                  loading="eager"
                  decoding="async"
                />

                {/* Blueprint Coordinate Tag Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 text-white p-4 backdrop-blur-md border-t border-slate-800">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                    <span>GPS COORD</span>
                    <span>DATUM SPEC</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white font-semibold truncate mr-2">
                      {COMPANY_DATA.gps}
                    </span>
                    <span className="text-amber-400 shrink-0 font-bold">
                      {COMPANY_DATA.datum}
                    </span>
                  </div>
                </div>
              </div>

              {/* Engineering Coordinate Callouts */}
              <div className="pt-3 px-2 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>{COMPANY_DATA.facilityCode}</span>
                <span className="text-emerald-700 font-semibold">{COMPANY_DATA.qcTolerance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
