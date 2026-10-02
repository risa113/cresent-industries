import React from 'react';
import { HERO_DATA } from '../data/mockData';

export interface HeroProps {
  readonly onRequestQuote: () => void;
  readonly onOpenCad: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onOpenCad }) => {
  return (
    <section
      className="relative bg-inverse-surface text-on-primary overflow-hidden border-b border-tertiary"
      id="hero"
    >
      {/* Background CAD grid and architectural imagery */}
      <div className="absolute inset-0 dark-structural-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/90 to-on-background/40 z-10 pointer-events-none" />
      
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-40 mix-blend-luminosity overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          alt="Heavy structural steel framework with PEB columns and rafters"
          src={HERO_DATA.bgImage}
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 flex flex-col justify-between min-h-[85vh]">
        {/* Top Eyebrow Metadata */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <div className="w-2.5 h-2.5 bg-primary-container animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono text-secondary-fixed tracking-wider sm:tracking-widest uppercase font-semibold">
            {HERO_DATA.eyebrow}
          </span>
        </div>

        {/* Main Headline Block */}
        <div className="my-8 sm:my-10 max-w-4xl space-y-4 sm:space-y-6">
          <div className="inline-block border-l-2 border-primary-container pl-3 sm:pl-4">
            <p className="font-mono text-outline-variant tracking-wider uppercase text-[11px] sm:text-xs">
              {HERO_DATA.division}
            </p>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-on-primary font-display">
            {HERO_DATA.headline} <br />
            <span className="text-primary-container">{HERO_DATA.headlineHighlight}</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-outline-variant max-w-2xl font-light leading-relaxed">
            {HERO_DATA.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="flex items-center justify-center gap-2.5 bg-primary-container hover:bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 transition-colors font-semibold text-xs sm:text-sm font-label-caps uppercase tracking-wider shadow-lg"
            >
              <span>Request Engineering Specification</span>
              <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
            </button>

            <button
              type="button"
              onClick={onOpenCad}
              className="flex items-center justify-center gap-2 border border-outline hover:border-surface-container-lowest text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 transition-colors text-xs sm:text-sm font-label-caps uppercase tracking-wider bg-inverse-surface/60 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-sm sm:text-base">architecture</span>
              <span>Explore CAD Repository</span>
            </button>
          </div>
        </div>

        {/* Responsive Structural Metrics Grid */}
        <div className="pt-6 sm:pt-8 border-t border-tertiary/70 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {HERO_DATA.metrics.map((m, idx) => (
            <div key={idx} className="border-l border-primary-container/60 pl-3 sm:pl-4 space-y-0.5">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono text-on-primary">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-outline-variant uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
