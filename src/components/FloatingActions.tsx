import React, { useState, useEffect } from 'react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';

export interface FloatingActionsProps {
  readonly onRequestQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onRequestQuote }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [whatsappMenuOpen, setWhatsappMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant px-2 py-1.5 grid grid-cols-3 gap-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.15)] pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        <a
          href={`tel:${COMPANY_CONTACT.mobile1}`}
          className="flex flex-col items-center justify-center py-2 bg-inverse-surface text-on-primary font-mono text-[10px] uppercase font-bold tracking-wider active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[16px]">call</span>
          <span>CALL</span>
        </a>
        <a
          href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to consult about a PEB structure.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 bg-emerald-700 text-white font-mono text-[10px] uppercase font-bold tracking-wider active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4 fill-current mb-0.5" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
          </svg>
          <span>WHATSAPP</span>
        </a>
        <button
          type="button"
          onClick={onRequestQuote}
          className="flex flex-col items-center justify-center py-2 bg-primary-container text-on-primary font-mono text-[10px] uppercase font-bold tracking-wider active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[16px]">send</span>
          <span>QUOTE</span>
        </button>
      </div>

      {/* Floating WhatsApp Dual-Desk Interactive Panel (Desktop & Tablet only - prevents mobile screen blocking) */}
      <div className="hidden sm:block fixed sm:bottom-6 sm:left-6 z-40">
        {whatsappMenuOpen && (
          <div className="mb-3 w-72 sm:w-80 bg-surface-container-lowest border border-outline-variant shadow-2xl p-4 space-y-3 animate-fade-in">
            <div className="flex items-center justify-between border-b border-outline-variant pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-on-surface uppercase">
                  DIRECT WHATSAPP CHANNELS
                </span>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappMenuOpen(false)}
                className="text-outline hover:text-on-surface p-1"
                aria-label="Close WhatsApp options"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            <p className="text-[11px] text-on-surface-variant font-sans">
              Connect directly with our Chief Structural Engineers for instant estimation and drawings:
            </p>

            <div className="space-y-2">
              {/* WhatsApp Contact 1 */}
              <a
                href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to consult Er. Mohamed regarding structural steel design.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 transition-colors group"
              >
                <div>
                  <div className="text-xs font-bold font-mono">DESK 1 (CHIEF CONSULTANT)</div>
                  <div className="text-[11px] font-mono text-emerald-700">{COMPANY_CONTACT.mobile1}</div>
                </div>
                <span className="material-symbols-outlined text-sm text-emerald-600 group-hover:translate-x-0.5 transition-transform">
                  chat
                </span>
              </a>

              {/* WhatsApp Contact 2 */}
              <a
                href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp2Clean, 'Hello Crescent Engineering, I would like to inquire about PEB fabrication quote and schedule.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 transition-colors group"
              >
                <div>
                  <div className="text-xs font-bold font-mono">DESK 2 (OPERATIONS &amp; QUOTES)</div>
                  <div className="text-[11px] font-mono text-emerald-700">{COMPANY_CONTACT.mobile2}</div>
                </div>
                <span className="material-symbols-outlined text-sm text-emerald-600 group-hover:translate-x-0.5 transition-transform">
                  chat
                </span>
              </a>
            </div>

            <div className="text-[10px] font-mono text-outline pt-1 text-center">
              Available Mon - Sat (08:30 - 20:00 IST)
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setWhatsappMenuOpen(!whatsappMenuOpen)}
          aria-label="Open WhatsApp Chat Channels"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-3 shadow-xl transition-all border border-emerald-400 group"
        >
          <svg className="w-5 h-5 fill-current shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
          </svg>
          <span className="text-xs font-mono font-bold uppercase tracking-wider hidden sm:inline">
            WhatsApp Desk
          </span>
        </button>
      </div>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-40 w-9 h-9 sm:w-11 sm:h-11 bg-on-background/90 hover:bg-primary-container text-on-primary border border-outline-variant shadow-xl flex items-center justify-center transition-all backdrop-blur-sm group focus:outline-none"
        >
          <span className="material-symbols-outlined text-xl group-hover:-translate-y-0.5 transition-transform">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
};
