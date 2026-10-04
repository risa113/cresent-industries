import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';

export interface NavbarProps {
  readonly onRequestQuote: () => void;
  readonly onOpenCad: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, onOpenCad }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-primary">
          <div className="w-10 h-10 border border-outline-variant p-1 flex items-center justify-center bg-surface-container-lowest group-hover:border-primary-container transition-colors shrink-0">
            <img
              alt="Crescent Engineering Industries Master Logo"
              className="w-full h-full object-contain"
              src={COMPANY_CONTACT.logoUrl}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-on-surface uppercase truncate font-headline-sm">
              CRESCENT // INFRASTRUCTURE
            </span>
            <span className="text-[9px] sm:text-[10px] text-outline tracking-wider sm:tracking-widest font-mono uppercase truncate">
              DIVISION: CRESCENT ROOFING // PEB & STRUCTURAL STEEL
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
          <button
            type="button"
            onClick={onOpenCad}
            className="flex items-center gap-1.5 px-3 py-2 border border-outline-variant hover:border-primary-container text-tertiary hover:text-primary transition-colors text-xs font-mono font-medium"
          >
            <span className="material-symbols-outlined text-[16px]">architecture</span>
            <span>CAD Portal</span>
          </button>
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
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onRequestQuote}
            className="sm:hidden px-2.5 py-1.5 bg-primary-container text-on-primary text-[11px] font-mono uppercase font-bold"
          >
            RFP
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-on-surface hover:text-primary border border-outline-variant rounded-none bg-surface-container-lowest focus:outline-none"
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
