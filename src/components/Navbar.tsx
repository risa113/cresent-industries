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
  const [mobileCadAccordionOpen, setMobileCadAccordionOpen] = useState(false);
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
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-outline-variant ${
        isScrolled
          ? 'bg-surface-container-lowest/95 backdrop-blur-md shadow-[0px_4px_16px_rgba(23,27,34,0.06)]'
          : 'bg-surface-container-lowest/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-16 h-20 max-w-[1440px] mx-auto">
        {/* Brand Logo Cluster */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-primary flex-1 min-w-0 mr-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 border border-outline-variant p-1 flex items-center justify-center bg-surface-container-lowest group-hover:border-primary-container transition-colors shrink-0">
            <img
              alt="Crescent Engineering Industries Master Logo"
              className="w-full h-full object-contain"
              src={COMPANY_CONTACT.logoUrl}
            />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-xs sm:text-base lg:text-lg font-bold tracking-tight text-on-surface uppercase truncate font-headline-sm">
              CRESCENT // INFRASTRUCTURE
            </span>
            <span className="text-[9px] sm:text-[10px] text-outline tracking-wider font-mono uppercase truncate">
              <span className="sm:hidden">ROOFING &amp; PEB DIVISION</span>
              <span className="hidden sm:inline">DIVISION: CRESCENT ROOFING // PEB &amp; STRUCTURAL STEEL</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors pb-1 text-xs font-semibold uppercase tracking-wider font-label-caps ${
                item.label === 'Contact'
                  ? 'text-primary font-bold px-2 py-0.5 border border-primary/30 bg-primary/5 hover:bg-primary/15'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="hidden md:flex items-center gap-2 xl:gap-2.5">
          <a
            href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to inquire about PEB & Steel Structure services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 border border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 transition-colors text-xs font-mono font-medium"
            title="Chat directly on WhatsApp (+91 98430 60976)"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp</span>
          </a>

          {/* All CADs Dropdown Menu */}
          <div className="relative" ref={cadDropdownRef}>
            <button
              type="button"
              onClick={() => setCadDropdownOpen((prev) => !prev)}
              aria-expanded={cadDropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 px-3 py-2 border text-xs font-mono font-medium transition-all ${
                cadDropdownOpen
                  ? 'border-primary-container bg-primary-container/10 text-primary ring-1 ring-primary-container'
                  : 'border-outline-variant hover:border-primary-container text-tertiary hover:text-primary bg-surface-container-lowest'
              }`}
              title="Browse all 11 CAD Blueprints & Specifications"
            >
              <span className="material-symbols-outlined text-[16px]">architecture</span>
              <span>All CADs</span>
              <span className="px-1.5 py-0.2 bg-primary-container text-on-primary text-[10px] font-bold">
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
              <div className="absolute right-0 mt-2 w-[420px] max-w-[90vw] bg-on-background text-on-primary border border-primary-container shadow-2xl z-50 overflow-hidden flex flex-col animate-fade-in">
                {/* Header */}
                <div className="p-3 bg-inverse-surface border-b border-tertiary flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-primary-container shrink-0" />
                    <div>
                      <span className="text-[11px] font-mono text-secondary-fixed font-bold tracking-wider uppercase block">
                        CAD SPECIFICATIONS REPOSITORY
                      </span>
                      <span className="text-[10px] font-mono text-outline-variant">
                        SELECT ANY DRAWING TO VIEW DETAILED SPECIFICATION
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950 border border-emerald-500/40 text-emerald-300 uppercase font-bold shrink-0">
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
                      className="w-full text-left p-2.5 bg-surface/5 hover:bg-primary-container/20 border border-tertiary/40 hover:border-primary-container/60 transition-all flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 shrink-0 mt-0.5 flex items-center justify-center bg-inverse-surface border border-tertiary text-primary-fixed group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[16px]">{cap.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[10px] font-mono text-secondary-fixed font-bold">
                            CAT {cap.number}
                          </span>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-1 py-0.2 border border-emerald-500/30 truncate max-w-[150px]">
                            {cap.metric}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-on-primary group-hover:text-primary-fixed transition-colors truncate">
                          {cap.title}
                        </div>
                        <div className="text-[10px] font-mono text-outline-variant truncate mt-0.5">
                          {cap.cadSpec}
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-sm text-tertiary group-hover:text-primary-fixed group-hover:translate-x-0.5 transition-all mt-1.5">
                        arrow_forward
                      </span>
                    </button>
                  ))}
                </div>

                {/* Footer Bar */}
                <div className="p-2.5 bg-inverse-surface border-t border-tertiary flex items-center justify-between text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => {
                      setCadDropdownOpen(false);
                      onOpenCad();
                    }}
                    className="text-secondary-fixed hover:text-on-primary flex items-center gap-1 font-bold text-[11px]"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    <span>Launch Master CAD Portal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCadDropdownOpen(false)}
                    className="text-[10px] text-outline-variant hover:text-on-primary uppercase"
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
            className="flex items-center gap-2 bg-on-background hover:bg-primary-container text-on-primary px-3.5 xl:px-4 py-2.5 transition-colors duration-150 text-xs font-semibold uppercase tracking-wider font-label-caps"
          >
            <span>Request Specification</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <button
            type="button"
            onClick={onRequestQuote}
            className="sm:hidden px-2.5 py-1.5 bg-primary-container text-on-primary text-[11px] font-mono uppercase font-bold shrink-0 shadow-sm"
          >
            RFP
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 text-on-surface hover:text-primary border border-outline-variant rounded-none bg-surface-container-lowest focus:outline-none shrink-0"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-50 flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-20 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div className="relative z-10 border-t border-outline-variant bg-surface-container-lowest px-6 py-6 space-y-5 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant text-xs font-mono text-outline">
              <span>EXPLORE SPECIFICATIONS</span>
              <span className="text-primary font-bold">100% RESPONSIVE</span>
            </div>

            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between py-2.5 px-3 font-medium text-base border-b border-outline-variant/40 transition-colors ${
                    item.label === 'Contact'
                      ? 'bg-primary/10 text-primary font-bold border-primary/30'
                      : 'text-on-surface hover:text-primary'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {item.label === 'Contact' && (
                      <span className="material-symbols-outlined text-base text-primary">contacts</span>
                    )}
                    <span>{item.label}</span>
                  </span>
                  <span className="material-symbols-outlined text-sm text-outline">arrow_forward_ios</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCad();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 border border-outline-variant bg-surface-container-low text-on-surface font-mono text-xs uppercase"
              >
                <span className="material-symbols-outlined text-[16px]">architecture</span>
                <span>OPEN CAD REPOSITORY</span>
              </button>

              {/* Mobile All CADs Dropdown / Accordion */}
              <div className="border border-outline-variant bg-surface-container-lowest">
                <button
                  type="button"
                  onClick={() => setMobileCadAccordionOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3 py-2.5 font-mono text-xs font-semibold text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-container" />
                    <span>BROWSE ALL CADS ({CAPABILITIES.length})</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-sm transition-transform duration-200"
                    style={{ transform: mobileCadAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>

                {mobileCadAccordionOpen && (
                  <div className="p-2 border-t border-outline-variant space-y-1 max-h-[280px] overflow-y-auto">
                    {CAPABILITIES.map((cap) => (
                      <button
                        key={cap.id}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onSelectCad) {
                            onSelectCad(cap);
                          } else {
                            onOpenCad();
                          }
                        }}
                        className="w-full text-left p-2 hover:bg-surface-container-low text-xs border border-transparent hover:border-outline-variant flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0 flex-1">
                          <span className="font-mono text-[10px] text-primary block">
                            CAT {cap.number} // {cap.metric}
                          </span>
                          <span className="font-medium text-on-surface block truncate">
                            {cap.title}
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-sm text-outline">
                          arrow_forward
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-on-background hover:bg-primary-container text-on-primary py-3.5 text-xs font-semibold font-label-caps uppercase tracking-wider"
              >
                <span>REQUEST ENGINEERING SPECIFICATION</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <div className="pt-3 border-t border-outline-variant flex flex-col gap-2">
                <span className="text-[10px] font-mono text-outline uppercase tracking-wider">DIRECT WHATSAPP DESKS</span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[11px] font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>WhatsApp 1</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp2Clean, 'Hi, I need assistance with a PEB / Steel Structure project.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[11px] font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>WhatsApp 2</span>
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-outline-variant flex flex-col gap-2 text-xs font-mono text-tertiary">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">call</span>
                  <a href={`tel:${COMPANY_CONTACT.mobile1}`} className="hover:text-primary">{COMPANY_CONTACT.mobile1}</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">mail</span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-primary">{COMPANY_CONTACT.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
