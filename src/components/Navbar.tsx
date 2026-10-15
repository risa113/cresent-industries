import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS, COMPANY_CONTACT, CAPABILITIES, CapabilityItem, getWhatsAppUrl } from '../data/mockData';

export interface NavbarProps {
  readonly onRequestQuote: () => void;
  readonly onOpenCad: () => void;
  readonly onSelectCad?: (item: CapabilityItem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, onOpenCad, onSelectCad }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cadDropdownOpen, setCadDropdownOpen] = useState(false);
  const cadDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cadDropdownRef.current && !cadDropdownRef.current.contains(event.target as Node)) {
        setCadDropdownOpen(false);
      }
    };
    if (cadDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cadDropdownOpen]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler for both desktop and mobile
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#07090e]/95 backdrop-blur-md border-white/10 shadow-2xl py-2'
            : 'bg-[#07090e]/85 backdrop-blur-sm border-white/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          {/* ========================================= */}
          {/* 1. BRAND LOGO & TITLE CLUSTER             */}
          {/* ========================================= */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
          >
            {/* Ultra-sharp 3D Golden Crescent Logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 p-1 flex items-center justify-center group-hover:border-amber-400/80 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all shrink-0">
              <img
                src={COMPANY_CONTACT.logoUrl}
                alt="Crescent Engineering Industries Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-sm sm:text-base lg:text-lg tracking-wider text-white uppercase group-hover:text-amber-300 transition-colors">
                  CRESCENT
                </span>
                <span className="text-white/40 font-light text-xs sm:text-sm">//</span>
                <span className="font-mono text-[11px] sm:text-xs text-amber-400 font-semibold tracking-wider uppercase">
                  INFRASTRUCTURE
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-white/50 tracking-widest font-mono uppercase">
                PEB &amp; STRUCTURAL STEEL FABRICATION
              </span>
            </div>
          </a>

          {/* ========================================= */}
          {/* 2. DESKTOP NAVIGATION LINKS (xl / lg)     */}
          {/* ========================================= */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isContact = item.label === 'Contact';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-1.5 px-3 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-200 ${
                    isContact
                      ? 'text-amber-400 hover:text-black hover:bg-amber-400 font-bold ml-1'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* ========================================= */}
          {/* 3. DESKTOP ACTION BUTTONS                 */}
          {/* ========================================= */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {/* WhatsApp Direct */}
            <a
              href={getWhatsAppUrl(
                COMPANY_CONTACT.whatsapp1Clean,
                'Hello Crescent Engineering, I would like to inquire about PEB & Steel Structure services.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/15 transition-all text-xs font-mono font-medium hover:border-emerald-400 shadow-sm"
              title="Chat directly on WhatsApp (+91 98430 60976)"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp</span>
            </a>

            {/* All CADs Dropdown */}
            <div className="relative" ref={cadDropdownRef}>
              <button
                type="button"
                onClick={() => setCadDropdownOpen((prev) => !prev)}
                aria-expanded={cadDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium transition-all ${
                  cadDropdownOpen
                    ? 'border-amber-400 bg-amber-400/15 text-amber-300 ring-1 ring-amber-400'
                    : 'border-white/15 hover:border-amber-400/60 text-white/80 hover:text-white bg-white/5'
                }`}
                title="Browse all 11 CAD Blueprints & Specifications"
              >
                <span className="material-symbols-outlined text-[15px] text-amber-400">architecture</span>
                <span>CADs</span>
                <span className="px-1.5 py-0.5 bg-amber-400 text-black text-[9px] font-bold rounded-full">
                  {CAPABILITIES.length}
                </span>
                <span
                  className="material-symbols-outlined text-[14px] transition-transform duration-200"
                  style={{ transform: cadDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown Panel showing all CADs */}
              {cadDropdownOpen && (
                <div className="absolute right-0 mt-2 w-[420px] max-w-[90vw] bg-[#0c1017] text-white border border-amber-400/40 shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95">
                  <div className="p-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[11px] font-mono text-amber-400 font-bold tracking-wider uppercase">
                        MASTER CAD MATRIX // 11 BLUEPRINTS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40">IS 800:2007</span>
                  </div>

                  <div className="max-h-[360px] overflow-y-auto divide-y divide-white/5 cad-scrollbar">
                    {CAPABILITIES.map((cap) => (
                      <button
                        key={cap.id}
                        type="button"
                        onClick={() => {
                          setCadDropdownOpen(false);
                          if (onSelectCad) {
                            onSelectCad(cap);
                          } else {
                            onOpenCad();
                          }
                        }}
                        className="w-full p-3 text-left hover:bg-white/[0.04] transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[15px]">{cap.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="text-[10px] font-mono text-amber-400 font-bold">
                              CAT {cap.number}
                            </span>
                            <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.2 rounded border border-emerald-500/30 truncate max-w-[140px]">
                              {cap.metric}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                            {cap.title}
                          </div>
                          <div className="text-[10px] font-mono text-white/50 truncate mt-0.5">
                            {cap.cadSpec}
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-sm text-white/30 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all mt-1">
                          arrow_forward
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="p-3 bg-black/60 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => {
                        setCadDropdownOpen(false);
                        onOpenCad();
                      }}
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold text-[11px]"
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      <span>Launch Master CAD Portal</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCadDropdownOpen(false)}
                      className="text-[10px] text-white/40 hover:text-white uppercase"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Request Specification Primary CTA */}
            <button
              type="button"
              onClick={onRequestQuote}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 active:scale-95"
            >
              <span>Request Quote</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          {/* ========================================= */}
          {/* 4. MOBILE / TABLET RIGHT ACTIONS & TOGGLE */}
          {/* ========================================= */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            {/* Quick Quote trigger on mobile */}
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-black rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-sm"
            >
              Quote
            </button>

            {/* Hamburger / Close Icon */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 flex items-center justify-center text-white hover:text-amber-400 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================= */}
      {/* 5. 100% RESPONSIVE MOBILE DRAWER OVERLAY   */}
      {/* ========================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#07090e]/98 backdrop-blur-xl text-white overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200">
          {/* Mobile Drawer Header */}
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-amber-400/50 p-1 flex items-center justify-center">
                <img
                  src={COMPANY_CONTACT.logoUrl}
                  alt="Crescent Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-sm tracking-wider uppercase text-white block">
                  CRESCENT ENGINEERING
                </span>
                <span className="text-[9px] font-mono text-amber-400 tracking-wider uppercase">
                  PEB &amp; STEEL INFRASTRUCTURE
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:text-amber-400 transition-colors"
              aria-label="Close Mobile Menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Navigation Links with Section Numbers */}
          <div className="px-6 py-6 flex-1 max-w-lg mx-auto w-full">
            <div className="text-[10px] font-mono tracking-widest text-amber-400/80 uppercase mb-3">
              // SITE DIRECTORY
            </div>
            <nav className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-3 px-4 rounded-xl text-sm font-mono font-semibold text-white/90 hover:text-amber-400 hover:bg-white/5 border border-white/5 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-amber-400/60 group-hover:text-amber-400">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-sm text-white/30 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              ))}
            </nav>

            {/* Quick Actions in Mobile Drawer */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCad();
                }}
                className="w-full py-3 px-4 rounded-xl border border-amber-400/40 text-amber-300 font-mono text-xs uppercase flex items-center justify-center gap-2 bg-amber-400/10 hover:bg-amber-400/20 transition-colors font-bold"
              >
                <span className="material-symbols-outlined text-base text-amber-400">architecture</span>
                <span>OPEN MASTER CAD PORTAL ({CAPABILITIES.length} BLUEPRINTS)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-95 transition-transform"
              >
                <span>REQUEST SPECIFICATION / RFP</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp 1</span>
                </a>
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp2Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp 2</span>
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Footer Credentials */}
          <div className="px-6 py-4 bg-black/40 border-t border-white/5 text-center text-[10px] font-mono text-white/40">
            CRESCENT ENGINEERING INDUSTRIES // IS 800:2007 COMPLIANT
          </div>
        </div>
      )}
    </>
  );
};
