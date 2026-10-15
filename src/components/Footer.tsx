import React from 'react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';
import { ArrowUp } from 'lucide-react';

export interface FooterProps {
  readonly onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] text-white border-t border-white/10 transition-colors duration-150 select-none">
      <div className="w-full px-4 sm:px-6 lg:px-16 pt-16 pb-24 sm:py-20 max-w-[1440px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 p-1 flex items-center justify-center shrink-0">
                <img
                  alt="Crescent Engineering Industries Master Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  src={COMPANY_CONTACT.logoUrl}
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-wider text-white uppercase block font-display">
                  CRESCENT
                </span>
                <span className="text-[9px] font-mono text-amber-400 tracking-wider uppercase block">
                  ENGINEERING INDUSTRIES // {COMPANY_CONTACT.division}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed font-light">
              Leading industrial infrastructure enterprise providing high-tolerance steel structural fabrication, certified pre-engineered buildings (PEB), and advanced industrial roofing matrices across India.
            </p>

            {/* Complete Business Details Spec Box */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-mono space-y-2 text-white/80">
              <div>
                <span className="text-amber-400 uppercase text-[10px] block font-semibold mb-0.5">
                  HEAD OFFICE &amp; WORKS:
                </span>
                {COMPANY_CONTACT.address}
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between">
                <span className="text-white/50">GSTN:</span>
                <span className="text-white font-semibold">{COMPANY_CONTACT.gstn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">COMPLIANCE:</span>
                <span className="text-amber-400 font-semibold">{COMPANY_CONTACT.compliance}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Repository Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block font-mono">
              ENGINEERING REPOSITORY
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a className="text-white/60 hover:text-white transition-colors block" href="#capabilities">
                  Structural PEB Systems
                </a>
              </li>
              <li>
                <a className="text-white/60 hover:text-white transition-colors block" href="#capabilities">
                  Industrial Roofing Matrix
                </a>
              </li>
              <li>
                <a className="text-white/60 hover:text-white transition-colors block" href="#blueprint">
                  ASTM Load Compliance
                </a>
              </li>
              <li>
                <a className="text-white/60 hover:text-white transition-colors block" href="#blueprint">
                  CAD / BIM Repository
                </a>
              </li>
              <li>
                <a className="text-white/60 hover:text-white transition-colors block" href="#editorial">
                  Quality Diagnostics
                </a>
              </li>
              <li>
                <a className="text-white/60 hover:text-white transition-colors block" href="#credentials">
                  Leadership Credentials
                </a>
              </li>
              <li>
                <a className="text-white/60 hover:text-white transition-colors block" href="#contact">
                  Enterprise Procurement
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication Desks */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block font-mono">
              DIRECT ENGINEERING DESKS
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-white/70">
              <div>
                <span className="text-white/40 block font-mono text-[10px] uppercase">DIRECT PHONE LINE</span>
                <a href={`tel:${COMPANY_CONTACT.mobile1}`} className="text-white font-bold hover:text-amber-400 transition-colors">
                  {COMPANY_CONTACT.mobile1}
                </a>
              </div>
              <div>
                <span className="text-white/40 block font-mono text-[10px] uppercase">EXECUTIVE WHATSAPP</span>
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  {COMPANY_CONTACT.mobile1} (Direct)
                </a>
              </div>
              <div>
                <span className="text-white/40 block font-mono text-[10px] uppercase">ENGINEERING INQUIRY EMAIL</span>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-white hover:text-amber-400 transition-colors">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-lg"
                >
                  <span>REQUEST STRUCTURAL ESTIMATE</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 Crescent Engineering Industries. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">Tirunelveli, Tamil Nadu, India</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-white/60"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
