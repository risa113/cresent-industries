import React from 'react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';

export interface FooterProps {
  readonly onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant transition-colors duration-150">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12 sm:py-16 max-w-[1440px] mx-auto">
        {/* Top Grid: Brand, Links, SEO Directory & Complete Business Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-outline-variant">
          {/* Column 1: Brand & Identity (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-outline-variant p-1 flex items-center justify-center bg-surface-container-lowest shrink-0">
                <img
                  alt="Crescent Engineering Industries Master Logo"
                  className="w-full h-full object-contain"
                  src={COMPANY_CONTACT.logoUrl}
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-wider text-on-surface uppercase block font-headline-md">
                  CRESCENT
                </span>
                <span className="text-[9px] font-mono text-outline tracking-wider uppercase block">
                  ENGINEERING INDUSTRIES // {COMPANY_CONTACT.division}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-tertiary max-w-sm leading-relaxed">
              Leading industrial infrastructure enterprise providing high-tolerance steel structural fabrication, certified pre-engineered buildings (PEB), and advanced industrial roofing matrices across India.
            </p>

            {/* Complete Business Details Spec Box */}
            <div className="border border-outline-variant bg-surface-container-lowest p-4 text-xs font-mono space-y-2 text-on-surface-variant">
              <div>
                <span className="text-outline uppercase text-[10px] block font-semibold mb-0.5">
                  HEAD OFFICE &amp; WORKS:
                </span>
                {COMPANY_CONTACT.address}
              </div>
              <div className="pt-2 border-t border-outline-variant flex justify-between">
                <span>GSTN:</span>
                <span className="text-on-surface font-semibold">{COMPANY_CONTACT.gstn}</span>
              </div>
              <div className="flex justify-between">
                <span>COMPLIANCE:</span>
                <span className="text-primary font-semibold">{COMPANY_CONTACT.compliance}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Repository Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-semibold text-on-surface tracking-wider uppercase block font-label-caps">
              ENGINEERING REPOSITORY
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors block" href="#capabilities">
                  Structural PEB Systems
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors block" href="#capabilities">
                  Industrial Roofing Matrix
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors block" href="#blueprint">
                  ASTM Load Compliance
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors block" href="#blueprint">
                  CAD / BIM Repository
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors block" href="#company">
                  Quality Diagnostics
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors block" href="#capabilities">
                  Sustainability &amp; LEED
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors block" href="#contact">
                  Enterprise Procurement
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication & Inquiries (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold text-on-surface tracking-wider uppercase block font-label-caps">
              DIRECT ENGINEERING DESK
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-tertiary">
              <div>
                <span className="text-outline text-[11px] block font-mono">MOBILE CONSULTANCY:</span>
                <a className="text-on-surface font-mono font-semibold hover:text-primary" href={`tel:${COMPANY_CONTACT.mobile1}`}>
                  {COMPANY_CONTACT.mobile1}
                </a>{' '}
                /{' '}
                <a className="text-on-surface font-mono font-semibold hover:text-primary" href={`tel:${COMPANY_CONTACT.mobile2}`}>
                  {COMPANY_CONTACT.mobile2}
                </a>
              </div>

              <div>
                <span className="text-outline text-[11px] block font-mono">CENTRAL DESK LANDLINE:</span>
                <span className="text-on-surface font-mono font-semibold">
                  {COMPANY_CONTACT.landlines}
                </span>
              </div>

              <div>
                <span className="text-outline text-[11px] block font-mono">OFFICIAL CORRESPONDENCE:</span>
                <a className="text-primary font-mono font-semibold hover:underline break-all" href={`mailto:${COMPANY_CONTACT.email}`}>
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="pt-1">
                <span className="text-outline text-[11px] block font-mono mb-1.5">INSTANT WHATSAPP DESKS:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to inquire about PEB structures.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[11px] font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>WhatsApp: {COMPANY_CONTACT.mobile1}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp2Clean, 'Hello Crescent Engineering, I would like to inquire about PEB structures.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[11px] font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>WhatsApp: {COMPANY_CONTACT.mobile2}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant">
              <span className="text-[10px] font-mono text-outline block mb-2 uppercase">
                ENGINEERING SPECIFICATION PORTAL
              </span>
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 bg-on-background hover:bg-primary text-on-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider font-label-caps transition-colors"
              >
                <span>SUBMIT RFP SPECIFICATION</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Technical Metadata */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs font-mono text-tertiary">
          <p className="text-center md:text-left">
            © 2025 CRESCENT ENGINEERING INDUSTRIES // DIVISION: CRESCENT ROOFING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-3 text-outline">
            <span>{COMPANY_CONTACT.coords}</span>
            <span>•</span>
            <span>{COMPANY_CONTACT.systemTime}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
