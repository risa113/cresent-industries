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
        className={`sticky top-0 z-50 transition-all duration-300 border-b w-full max-w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/90 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-slate-200/80'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3.5 flex items-center justify-between w-full">
          {/* ========================================= */}
          {/* 1. BRAND LOGO & TITLE CLUSTER             */}
          {/* ========================================= */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0 mr-2"
          >
            {/* Ultra-sharp 3D Golden Crescent Logo */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-50 border border-amber-400/40 p-1 flex items-center justify-center group-hover:border-amber-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all shrink-0">
              <img
                src={COMPANY_CONTACT.logoUrl}
                alt="Crescent Engineering Industries Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-display font-extrabold text-sm sm:text-base lg:text-lg tracking-wider text-slate-900 uppercase group-hover:text-amber-600 transition-colors">
                  CRESCENT
                </span>
                <span className="text-slate-300 font-light text-xs sm:text-sm hidden sm:inline">//</span>
                <span className="font-mono text-[10px] sm:text-xs text-amber-600 font-semibold tracking-wider uppercase hidden sm:inline">
                  INFRASTRUCTURE
                </span>
              </div>
              <span className="text-[8px] sm:text-[10px] text-slate-500 tracking-wider font-mono uppercase truncate max-w-[125px] sm:max-w-none">
                PEB &amp; STRUCTURAL STEEL FABRICATION
              </span>
            </div>
          </a>

          {/* ========================================= */}
          {/* 2. DESKTOP NAVIGATION LINKS (xl / lg)     */}
          {/* ========================================= */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/90 border border-slate-200 px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isContact = item.label === 'Contact';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-1.5 px-3 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-200 ${
                    isContact
                      ? 'text-amber-700 hover:text-white hover:bg-amber-500 font-bold ml-1 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-xs'
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
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-all text-xs font-mono font-medium hover:border-emerald-500 shadow-xs"
              title="Chat directly on WhatsApp (+91 98430 60976)"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
                    ? 'border-amber-500 bg-amber-50 text-amber-800 ring-1 ring-amber-400'
                    : 'border-slate-300 hover:border-amber-500 text-slate-700 hover:text-slate-900 bg-white shadow-xs'
                }`}
                title="Browse all 11 CAD Blueprints & Specifications"
              >
                <span className="material-symbols-outlined text-[15px] text-amber-600">architecture</span>
                <span>CADs</span>
                <span className="px-1.5 py-0.5 bg-amber-500 text-slate-950 text-[9px] font-bold rounded-full">
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
                <div className="absolute right-0 mt-2 w-[420px] max-w-[90vw] bg-white text-slate-900 border border-slate-200 shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95">
                  <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[11px] font-mono text-amber-700 font-bold tracking-wider uppercase">
                        MASTER CAD MATRIX // 11 BLUEPRINTS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">IS 800:2007</span>
                  </div>

                  <div className="max-h-[360px] overflow-y-auto divide-y divide-slate-100 cad-scrollbar">
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
                        className="w-full p-3 text-left hover:bg-amber-50/50 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[15px]">{cap.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="text-[10px] font-mono text-amber-700 font-bold">
                              CAT {cap.number}
                            </span>
                            <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-300 truncate max-w-[140px]">
                              {cap.metric}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                            {cap.title}
                          </div>
                          <div className="text-[10px] font-mono text-slate-500 truncate mt-0.5">
                            {cap.cadSpec}
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all mt-1">
                          arrow_forward
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => {
                        setCadDropdownOpen(false);
                        onOpenCad();
                      }}
                      className="text-amber-700 hover:text-amber-800 flex items-center gap-1 font-bold text-[11px]"
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      <span>Launch Master CAD Portal</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCadDropdownOpen(false)}
                      className="text-[10px] text-slate-500 hover:text-slate-800 uppercase"
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
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              <span>Request Quote</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          {/* ========================================= */}
          {/* 4. MOBILE / TABLET RIGHT ACTIONS & TOGGLE */}
          {/* ========================================= */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            {/* Quick Quote trigger on tablet (hidden on mobile to protect header space; mobile already has fixed bottom quote bar) */}
            <button
              type="button"
              onClick={onRequestQuote}
              className="hidden sm:inline-flex px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-xs"
            >
              Quote
            </button>

            {/* Hamburger / Menu Toggle Button - 100% Guaranteed Visible on all Mobile Screens */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1.5 h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 border border-slate-800 transition-all focus:outline-none active:scale-95 shadow-sm shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                {mobileMenuOpen ? 'CLOSE' : 'MENU'}
              </span>
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* MOBILE DIRECT QUICK-NAV BAR (xl:hidden)   */}
        {/* 100% visible navigation bar on mobile     */}
        {/* ========================================= */}
        <div className="xl:hidden w-full border-t border-slate-200/90 bg-slate-50/95 backdrop-blur-md px-2.5 py-1.5 overflow-x-auto cad-scrollbar">
          <div className="flex items-center gap-1.5 min-w-max mx-auto justify-start sm:justify-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-amber-500 hover:text-slate-950 border border-slate-200/90 shadow-2xs whitespace-nowrap active:scale-95 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ========================================= */}
      {/* 5. 100% RESPONSIVE MOBILE DRAWER OVERLAY   */}
      {/* ========================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-xl text-slate-900 overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200">
          {/* Mobile Drawer Header */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-400/50 p-1 flex items-center justify-center">
                <img
                  src={COMPANY_CONTACT.logoUrl}
                  alt="Crescent Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-sm tracking-wider uppercase text-slate-900 block">
                  CRESCENT ENGINEERING
                </span>
                <span className="text-[9px] font-mono text-amber-600 tracking-wider uppercase">
                  PEB &amp; STEEL INFRASTRUCTURE
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-amber-600 transition-colors"
              aria-label="Close Mobile Menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Navigation Links with Section Numbers */}
          <div className="px-6 py-6 flex-1 max-w-lg mx-auto w-full">
            <div className="text-[10px] font-mono tracking-widest text-amber-600 uppercase mb-3 font-bold">
              // SITE DIRECTORY
            </div>
            <nav className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-3 px-4 rounded-xl text-sm font-mono font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 border border-slate-200 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-amber-600/70 group-hover:text-amber-600 font-bold">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              ))}
            </nav>

            {/* Quick Actions in Mobile Drawer */}
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCad();
                }}
                className="w-full py-3 px-4 rounded-xl border border-amber-500/40 text-amber-800 font-mono text-xs uppercase flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 transition-colors font-bold"
              >
                <span className="material-symbols-outlined text-base text-amber-600">architecture</span>
                <span>OPEN MASTER CAD PORTAL ({CAPABILITIES.length} BLUEPRINTS)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
              >
                <span>REQUEST SPECIFICATION / RFP</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-emerald-100"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>WhatsApp 1</span>
                </a>
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp2Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-emerald-100"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>WhatsApp 2</span>
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Footer Credentials */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-center text-[10px] font-mono text-slate-500">
            CRESCENT ENGINEERING INDUSTRIES // IS 800:2007 COMPLIANT
          </div>
        </div>
      )}
    </>
  );
};
