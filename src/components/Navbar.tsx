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
      setIsScrolled(window.scrollY > 20);
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/10 ${
          mobileMenuOpen
            ? 'bg-[#07090e]'
            : isScrolled
            ? 'bg-[#07090e]/95 backdrop-blur-md shadow-2xl py-1'
            : 'bg-[#07090e]/85 backdrop-blur-sm py-2'
        }`}
      >
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-16 h-20 max-w-[1440px] mx-auto text-white">
          {/* Brand Logo Cluster */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-1 min-w-0 mr-2"
          >
            <div className="w-10 h-10 border border-white/20 p-1 flex items-center justify-center bg-white/5 rounded-xl group-hover:border-amber-400 transition-colors shrink-0">
              <img
                alt="Crescent Engineering Industries Master Logo"
                className="w-full h-full object-contain"
                src={COMPANY_CONTACT.logoUrl}
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs sm:text-base lg:text-lg font-bold tracking-wider text-white uppercase truncate font-display">
                CRESCENT // INFRASTRUCTURE
              </span>
              <span className="text-[9px] sm:text-[10px] text-amber-400 tracking-wider font-mono uppercase truncate">
                <span className="sm:hidden">ROOFING &amp; PEB DIVISION</span>
                <span className="hidden sm:inline">DIVISION: CRESCENT ROOFING // PEB &amp; STRUCTURAL STEEL</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`py-1.5 px-3 rounded-full text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                  item.label === 'Contact'
                    ? 'text-amber-400 hover:text-white border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Trailing Action Cluster */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 ml-4">
            <a
              href={getWhatsAppUrl(
                COMPANY_CONTACT.whatsapp1Clean,
                'Hello Crescent Engineering, I would like to inquire about PEB & Steel Structure services.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition-colors text-xs font-mono font-medium"
              title="Chat directly on WhatsApp (+91 98430 60976)"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp</span>
            </a>

            {/* All CADs Dropdown Menu */}
            <div className="relative" ref={cadDropdownRef}>
              <button
                type="button"
                onClick={() => setCadDropdownOpen((prev) => !prev)}
                aria-expanded={cadDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium transition-all ${
                  cadDropdownOpen
                    ? 'border-amber-400 bg-amber-400/10 text-amber-300 ring-1 ring-amber-400'
                    : 'border-white/20 hover:border-amber-400 text-white/80 hover:text-white bg-white/5'
                }`}
                title="Browse all 11 CAD Blueprints & Specifications"
              >
                <span className="material-symbols-outlined text-[16px] text-amber-400">
                  architecture
                </span>
                <span>All CADs</span>
                <span className="px-1.5 py-0.2 bg-amber-400 text-black text-[10px] font-bold rounded-full">
                  {CAPABILITIES.length}
                </span>
                <span
                  className="material-symbols-outlined text-[16px] transition-transform duration-200"
                  style={{ transform: cadDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown Panel showing all CADs fully */}
              {cadDropdownOpen && (
                <div className="absolute right-0 mt-2 w-[420px] max-w-[90vw] bg-[#11141c] text-white border border-amber-400/50 shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="p-3.5 bg-black/50 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <div>
                        <span className="text-[11px] font-mono text-amber-400 font-bold tracking-wider uppercase block">
                          CAD SPECIFICATIONS REPOSITORY
                        </span>
                        <span className="text-[10px] font-mono text-white/50">
                          SELECT ANY DRAWING TO VIEW DETAILED SPECIFICATION
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 uppercase font-bold rounded">
                      11 CADS
                    </span>
                  </div>

                  {/* Scrollable CADs List */}
                  <div className="overflow-y-auto max-h-[380px] p-2 space-y-1.5 cad-scrollbar">
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
                        className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/40 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-7 h-7 shrink-0 mt-0.5 flex items-center justify-center rounded-lg bg-white/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                          <span className="material-symbols-outlined text-[16px]">{cap.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="text-[10px] font-mono text-amber-400 font-bold">
                              CAT {cap.number}
                            </span>
                            <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30 truncate max-w-[150px]">
                              {cap.metric}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors truncate font-display">
                            {cap.title}
                          </div>
                          <div className="text-[10px] font-mono text-white/50 truncate mt-0.5">
                            {cap.cadSpec}
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-sm text-white/30 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all mt-1.5">
                          arrow_forward
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Footer Bar */}
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

            <button
              type="button"
              onClick={onRequestQuote}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <span>Request Specification</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              type="button"
              onClick={onRequestQuote}
              className="sm:hidden px-3 py-1.5 bg-amber-400 text-black rounded-full text-[11px] font-mono uppercase font-bold shrink-0 shadow-sm"
            >
              RFP
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 border border-white/20 rounded-xl hover:border-amber-400 hover:text-amber-400 transition-colors text-white"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full Dark Luxury Mode) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07090e] text-white pt-20 px-6 pb-10 overflow-y-auto lg:hidden animate-in fade-in duration-200">
          <div className="max-w-md mx-auto space-y-6 pt-4">
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="py-3 px-4 rounded-xl text-sm font-semibold tracking-wider font-mono text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-between border border-white/5"
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-sm text-white/40">arrow_forward</span>
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCad();
                }}
                className="w-full py-3 rounded-full border border-white/20 hover:border-amber-400 text-white font-mono text-xs uppercase flex items-center justify-center gap-2 bg-white/5"
              >
                <span className="material-symbols-outlined text-base text-amber-400">architecture</span>
                <span>OPEN MASTER CAD PORTAL</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3.5 rounded-full bg-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>REQUEST ENGINEERING SPECIFICATION</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>

              <div className="pt-4 grid grid-cols-2 gap-2">
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>WhatsApp 1</span>
                </a>
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp2Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>WhatsApp 2</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
