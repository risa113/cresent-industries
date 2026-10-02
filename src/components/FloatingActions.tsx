import React, { useState, useEffect } from 'react';
import { COMPANY_CONTACT } from '../data/mockData';

export interface FloatingActionsProps {
  readonly onRequestQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onRequestQuote }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant p-2 flex items-center gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
        <a
          href={`tel:${COMPANY_CONTACT.mobile1}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-inverse-surface text-on-primary font-mono text-xs uppercase font-bold"
        >
          <span className="material-symbols-outlined text-sm">call</span>
          <span>CALL DESK</span>
        </a>
        <button
          type="button"
          onClick={onRequestQuote}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-container text-on-primary font-mono text-xs uppercase font-bold"
        >
          <span className="material-symbols-outlined text-sm">send</span>
          <span>GET QUOTE</span>
        </button>
      </div>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 w-11 h-11 bg-on-background/90 hover:bg-primary-container text-on-primary border border-outline-variant shadow-xl flex items-center justify-center transition-all backdrop-blur-sm group focus:outline-none"
        >
          <span className="material-symbols-outlined text-xl group-hover:-translate-y-0.5 transition-transform">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
};
