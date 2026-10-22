import React from 'react';
import { COMPANY_CONTACT, AGENCY_CREDIT, getWhatsAppUrl } from '../data/mockData';
import { VERIFIED_BUSINESS_DATA } from '../data/seoData';
import { useRouter } from '../context/RouterContext';
import { ArrowUp, Sparkles, ArrowUpRight, Phone, Navigation } from 'lucide-react';

export interface FooterProps {
  readonly onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    } else if (href.startsWith('#')) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <footer className="bg-slate-50 text-slate-900 border-t border-slate-200 transition-colors duration-150 select-none">
      <div className="w-full px-4 sm:px-6 lg:px-16 pt-16 pb-24 sm:py-20 max-w-[1440px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-14 border-b border-slate-200">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs p-1 flex items-center justify-center shrink-0 cursor-pointer"
              >
                <img
                  alt="Crescent Engineering Industries Master Logo"
                  className="w-full h-full object-contain"
                  src={COMPANY_CONTACT.logoUrl}
                />
              </a>
              <div>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="text-base sm:text-lg font-bold tracking-wider text-slate-950 uppercase block font-display hover:text-amber-600 transition-colors"
                >
                  CRESCENT
                </a>
                <span className="text-[9px] font-mono text-amber-700 font-semibold tracking-wider uppercase block">
                  {VERIFIED_BUSINESS_DATA.name} // {VERIFIED_BUSINESS_DATA.division}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-light">
              Crescent Engineering Industries provides heavy structural steel fabrication, pre-engineered building structures, steel erection and industrial roofing solutions from Melapalayam, Tirunelveli, Tamil Nadu. With more than 30 years of stated industry experience, the company serves industrial and commercial requirements across its relevant service areas.
            </p>

            {/* Complete Business Details Spec Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs font-mono space-y-2 text-slate-800 shadow-sm">
              <div>
                <span className="text-amber-700 uppercase text-[10px] block font-bold mb-0.5">
                  REGISTERED WORKS &amp; OFFICE:
                </span>
                {VERIFIED_BUSINESS_DATA.formattedAddress}
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between">
                <span className="text-slate-500">GSTIN:</span>
                <span className="text-slate-900 font-semibold">{COMPANY_CONTACT.gstn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">STATED EXPERIENCE:</span>
                <span className="text-amber-700 font-semibold">{COMPANY_CONTACT.experience}</span>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={COMPANY_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-800 font-bold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions (Google Maps)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Service Pages & Internal Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold text-amber-700 tracking-widest uppercase block font-mono">
              ENGINEERING DISCIPLINES
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  className="text-slate-600 hover:text-slate-950 hover:font-medium transition-colors block cursor-pointer"
                  href="/services/steel-fabrication"
                  onClick={(e) => handleLinkClick(e, '/services/steel-fabrication')}
                >
                  Heavy Structural Steel Fabrication
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-950 hover:font-medium transition-colors block cursor-pointer"
                  href="/services/peb-structures"
                  onClick={(e) => handleLinkClick(e, '/services/peb-structures')}
                >
                  Explore Our PEB Structures
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-950 hover:font-medium transition-colors block cursor-pointer"
                  href="/services/industrial-roofing"
                  onClick={(e) => handleLinkClick(e, '/services/industrial-roofing')}
                >
                  Discuss Industrial Roofing Requirements
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-950 hover:font-medium transition-colors block cursor-pointer"
                  href="/services/steel-bridges"
                  onClick={(e) => handleLinkClick(e, '/services/steel-bridges')}
                >
                  Steel Bridge Fabrication
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-950 hover:font-medium transition-colors block cursor-pointer"
                  href="/services/steel-chimneys"
                  onClick={(e) => handleLinkClick(e, '/services/steel-chimneys')}
                >
                  Industrial Steel Chimneys
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-950 hover:font-medium transition-colors block cursor-pointer"
                  href="/services/mezzanine-floors"
                  onClick={(e) => handleLinkClick(e, '/services/mezzanine-floors')}
                >
                  Steel Mezzanine Floors
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-950 hover:font-medium transition-colors block cursor-pointer"
                  href="/services/insulated-roofing"
                  onClick={(e) => handleLinkClick(e, '/services/insulated-roofing')}
                >
                  Insulated PUF Roofing Panels
                </a>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <a
                  className="text-slate-700 font-bold hover:text-amber-600 transition-colors block cursor-pointer"
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                >
                  About Crescent Engineering (30+ Years)
                </a>
              </li>
              <li>
                <a
                  className="text-slate-700 font-bold hover:text-amber-600 transition-colors block cursor-pointer"
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                >
                  Contact Melapalayam Works
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication Desks & Google Business Support */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold text-amber-700 tracking-widest uppercase block font-mono">
              DIRECT ENGINEERING DESKS
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase font-semibold">
                  PRIMARY PHONE LINE
                </span>
                <a
                  href={`tel:${COMPANY_CONTACT.primaryPhone}`}
                  className="text-slate-900 font-bold hover:text-amber-600 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{COMPANY_CONTACT.primaryPhone}</span>
                </a>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase font-semibold">
                  ADDITIONAL MOBILE &amp; LANDLINES
                </span>
                <div className="space-y-0.5">
                  <a href={`tel:${COMPANY_CONTACT.mobile2}`} className="text-slate-900 font-medium hover:text-amber-600 block">
                    {COMPANY_CONTACT.mobile2}
                  </a>
                  <span className="text-slate-600 font-mono text-xs">{COMPANY_CONTACT.landlines}</span>
                </div>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase font-semibold">
                  EXECUTIVE WHATSAPP
                </span>
                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline"
                >
                  {COMPANY_CONTACT.primaryPhone} (Direct Desk)
                </a>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase font-semibold">
                  ENGINEERING INQUIRY EMAIL
                </span>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-slate-800 hover:text-amber-600 font-medium transition-colors"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-all shadow-sm"
                >
                  <span>REQUEST STRUCTURAL ESTIMATE</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between text-xs text-slate-500 gap-5">
          {/* Copyright & Location */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left order-2 lg:order-1">
            <p>© 2026 {VERIFIED_BUSINESS_DATA.name}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="font-mono text-[11px] text-slate-500">
              Melapalayam, Tirunelveli, Tamil Nadu, India
            </span>
          </div>

          {/* Luxury Attribution Badge with Backlink */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <a
              href={AGENCY_CREDIT.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${AGENCY_CREDIT.label} ${AGENCY_CREDIT.name} (Opens in new window)`}
              className="luxury-agency-badge group inline-flex items-center gap-2 sm:gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/95 hover:bg-white text-slate-700 transition-all select-text"
              title={`${AGENCY_CREDIT.label} ${AGENCY_CREDIT.name}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 group-hover:text-slate-600 uppercase transition-colors font-medium">
                {AGENCY_CREDIT.label}
              </span>
              <span className="luxury-gold-brand font-extrabold text-xs sm:text-sm tracking-wider inline-flex items-center gap-1">
                {AGENCY_CREDIT.name}
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:text-amber-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </span>
            </a>
          </div>

          {/* Back to Top */}
          <div className="order-3 flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-amber-600 transition-colors text-slate-600 font-medium cursor-pointer"
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
