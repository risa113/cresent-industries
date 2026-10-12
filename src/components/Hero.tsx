import React, { useState, useEffect } from 'react';
import { HERO_DATA, COMPANY_CONTACT, getWhatsAppUrl, PORTFOLIO_PROJECTS } from '../data/mockData';
import { ArrowRight, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';

export interface HeroProps {
  readonly onRequestQuote: () => void;
  readonly onOpenCad: () => void;
  readonly ambientLightOn?: boolean;
  readonly onToggleAmbientLight?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onOpenCad,
  ambientLightOn = false,
  onToggleAmbientLight
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4 curated hero slides from Crescent's landmark works
  const slides = [
    {
      id: 'slide-1',
      number: '01',
      title: 'PEB Industrial Manufacturing Plants',
      tag: 'HEAVY STRUCTURAL STEEL // IS 800:2007',
      image: HERO_DATA.bgImage,
      description: 'Heavy structural steel framing, tapered submerged-arc welded I-beams, and 65-meter unobstructed clear spans.'
    },
    {
      id: 'slide-2',
      number: '02',
      title: 'High-Bay Automated Logistics Hubs',
      tag: 'LOGISTICS & DISTRIBUTION // 220,000 SQ. FT.',
      image: PORTFOLIO_PROJECTS[1]?.image || HERO_DATA.bgImage,
      description: 'Rigid portal trusses, high-clearance vertical purlin matrices, and crane-lift structural erection.'
    },
    {
      id: 'slide-3',
      number: '03',
      title: 'Curved Industrial Roofing & PEB Truss Facilities',
      tag: 'ARCHITECTURAL ROOFING // 180 KM/H CYCLONIC',
      image: PORTFOLIO_PROJECTS[2]?.image || HERO_DATA.bgImage,
      description: 'High-rib curved Galvalume profile panels engineered for extreme monsoon storms and zero-maintenance longevity.'
    },
    {
      id: 'slide-4',
      number: '04',
      title: 'Clear-Span Industrial Manufacturing Infrastructure',
      tag: '145,000 SQ. FT. // 680 METRIC TONS STEEL',
      image: PORTFOLIO_PROJECTS[0]?.image || HERO_DATA.bgImage,
      description: 'Turnkey manufacturing bays engineered with heavy crane rails, seismic compliance, and ±1.5mm tolerances.'
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const activeSlideData = slides[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about') || document.getElementById('editorial');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#07090e] text-white overflow-hidden flex flex-col justify-between select-none border-b border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Crossfade Animation */}
      {slides.map((s, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              transitionProperty: 'opacity, transform',
              transitionDuration: '1200ms'
            }}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.1]"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Dark & Gold Gradient Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-[#07090e]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/90 via-[#07090e]/50 to-transparent" />
            <div className="absolute inset-0 dark-structural-grid opacity-20 pointer-events-none" />

            {ambientLightOn && (
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-screen pointer-events-none transition-opacity duration-700" />
            )}
          </div>
        );
      })}

      {/* Main Center Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 w-full pt-24 sm:pt-28 pb-12">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          {/* Eyebrow & Badges */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{activeSlideData.tag}</span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase font-semibold rounded-full">
              ● 100% AUTHENTIC WORK
            </span>
          </div>

          {/* Division Indicator */}
          <div className="inline-block border-l-2 border-amber-400 pl-3">
            <p className="font-mono text-white/60 tracking-wider uppercase text-[10px] sm:text-xs">
              {HERO_DATA.division}
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
            {HERO_DATA.headline} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-sky-400">
              {HERO_DATA.headlineHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl font-light leading-relaxed">
            {HERO_DATA.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-amber-400 text-black hover:bg-amber-300 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-[0.98]"
            >
              <span>Request Engineering Specification</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to consult with an engineer regarding our structural PEB project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg active:scale-[0.98]"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
              </svg>
              <span>Instant WhatsApp Desk</span>
            </a>

            <button
              type="button"
              onClick={onOpenCad}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-amber-400 text-white hover:text-amber-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-white/5 backdrop-blur-sm transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-sm sm:text-base">architecture</span>
              <span>Explore CAD Repository</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Center "Scroll" Mouse Indicator */}
      <div
        className="hidden md:flex flex-col items-center gap-2 cursor-pointer absolute bottom-28 left-1/2 -translate-x-1/2 z-30 group"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-semibold group-hover:text-amber-400 transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-amber-400 transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-scroll-wheel" />
        </div>
      </div>

      {/* Floating Right Quick Dock */}
      <aside className="hidden lg:flex flex-col items-center gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-40 bg-black/60 backdrop-blur-md p-2.5 rounded-full border border-white/10 text-white/70 shadow-2xl">
        <a
          href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering!')}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Desk"
          className="hover:text-emerald-400 hover:scale-110 transition-all p-2 text-xs font-semibold"
        >
          WA
        </a>
        <button
          onClick={onOpenCad}
          title="Open CAD Portal"
          className="hover:text-amber-400 hover:scale-110 transition-all p-2 text-xs font-semibold"
        >
          CAD
        </button>
        <a
          href={`tel:${COMPANY_CONTACT.mobile1}`}
          title="Call Us"
          className="hover:text-sky-400 hover:scale-110 transition-all p-2 text-xs font-semibold"
        >
          TEL
        </a>
        <button
          onClick={onRequestQuote}
          title="Request Quote"
          className="hover:text-amber-400 hover:scale-110 transition-all p-2 text-xs font-semibold"
        >
          RFP
        </button>
      </aside>

      {/* Floating Bottom-Right Lightbulb Theme Widget */}
      {onToggleAmbientLight && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={onToggleAmbientLight}
            title={ambientLightOn ? 'Turn off ambient glow' : 'Turn on ambient glow'}
            className={`relative p-3.5 rounded-full shadow-2xl transition-all duration-300 group ${
              ambientLightOn
                ? 'bg-amber-400 text-black shadow-[0_0_30px_#f59e0b] scale-110'
                : 'bg-[#141822] text-white/80 border border-white/20 hover:border-amber-400 hover:text-amber-400'
            }`}
          >
            <Lightbulb
              className={`w-6 h-6 transition-transform ${
                ambientLightOn ? 'rotate-12 fill-black stroke-black' : 'group-hover:scale-110'
              }`}
            />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          </button>
        </div>
      )}

      {/* Bottom Slider Navigation Tabs (01, 02, 03, 04) & Arrow Controls */}
      <div className="relative z-20 w-full bg-gradient-to-t from-[#07090e] via-[#07090e]/95 to-transparent pt-6 pb-6 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Arrow Buttons for Mobile */}
          <div className="flex md:hidden items-center justify-between pb-3">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-white/70">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Tab Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`text-left p-3 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? 'bg-white/15 border-b-2 border-amber-400 shadow-md'
                      : 'hover:bg-white/5 border-b-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? 'text-amber-400' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {s.number}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold truncate transition-colors ${
                        isActive ? 'text-white font-bold' : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>

                  {/* Progress Line */}
                  {isActive && !isPaused && (
                    <div className="absolute bottom-0 left-0 h-0.5 bg-amber-400 w-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
