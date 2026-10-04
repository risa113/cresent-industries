import React from 'react';
import { HERO_DATA, COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';

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
      
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-45 mix-blend-luminosity overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          alt="Authentic structural steel building framework by Crescent Engineering"
          src={HERO_DATA.bgImage}
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 flex flex-col justify-between min-h-[85vh]">
        {/* Top Eyebrow Metadata */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <div className="w-2.5 h-2.5 bg-primary-container animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono text-secondary-fixed tracking-wider sm:tracking-widest uppercase font-semibold">
            {HERO_DATA.eyebrow}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 uppercase tracking-wider font-semibold">
            ● 100% AUTHENTIC WORK
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
          <div className="pt-4 sm:pt-6 flex flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="flex items-center justify-center gap-2.5 bg-primary-container hover:bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 transition-colors font-semibold text-xs sm:text-sm font-label-caps uppercase tracking-wider shadow-lg"
            >
              <span>Request Engineering Specification</span>
              <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
            </button>

            <a
              href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to consult with an engineer regarding our structural PEB project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-5 sm:px-7 py-3.5 sm:py-4 transition-colors font-semibold text-xs sm:text-sm font-label-caps uppercase tracking-wider shadow-md"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
              </svg>
              <span>Instant WhatsApp Desk</span>
            </a>

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
