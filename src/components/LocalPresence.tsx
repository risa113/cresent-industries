import React from 'react';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';
import { VERIFIED_BUSINESS_DATA } from '../data/seoData';
import { MapPin, Phone, MessageSquare, ArrowRight, Navigation, CheckCircle2, Building2 } from 'lucide-react';

export interface LocalPresenceProps {
  readonly onRequestQuote: (category?: string) => void;
}

export const LocalPresence: React.FC<LocalPresenceProps> = ({ onRequestQuote }) => {
  return (
    <section
      id="local-presence"
      className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-12 gap-3 reveal-down">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-amber-600 font-bold text-xs sm:text-sm">
              LOCAL PRESENCE // TIRUNELVELI &amp; MELAPALAYAM
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase font-mono tracking-wider">
              VERIFIED WORKSHOP &amp; REGISTERED WORKS
            </span>
          </div>
          <span className="font-mono text-slate-600 text-xs font-semibold">
            GSTIN: {COMPANY_CONTACT.gstn}
          </span>
        </div>

        {/* Top 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          <div className="lg:col-span-7 space-y-6 reveal-left">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase block">
              SERVING SOUTHERN TAMIL NADU SINCE THE 1990s
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
              Heavy Structural Steel &amp; Industrial Roofing from Melapalayam, Tirunelveli
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Crescent Engineering Industries provides heavy structural steel fabrication, pre-engineered building structures, steel erection and industrial roofing solutions from Melapalayam, Tirunelveli, Tamil Nadu. With more than 30 years of stated industry experience, the company serves industrial and commercial requirements across its relevant service areas.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operating our dedicated workshop and administrative office from <strong className="text-slate-900">Vaalan Complex on Ambai Road, Veeramanikapuram</strong>, we serve clients requiring precision-engineered steel buildings, clear-span warehouse envelopes, heavy crane gantries, and weather-tight Galvalume and insulated PUF roofing systems.
            </p>

            {/* Quick Action Buttons reinforcing Google Business Profile */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_CONTACT.primaryPhone}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-colors text-xs font-bold font-mono tracking-wider uppercase shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_CONTACT.primaryPhone}</span>
              </a>

              <a
                href={COMPANY_CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-slate-100 border border-slate-300 text-slate-900 hover:bg-slate-200 transition-colors text-xs font-bold font-mono tracking-wider uppercase shadow-xs"
              >
                <Navigation className="w-4 h-4 text-sky-600" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to consult about our steel fabrication project in Tirunelveli.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-xs font-bold font-mono tracking-wider uppercase shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-100" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                type="button"
                onClick={() => onRequestQuote('Heavy Structural Steel Fabrication')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors text-xs font-bold font-mono tracking-wider uppercase shadow-sm"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Local Verified Info Card */}
          <div className="lg:col-span-5 reveal-right">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 space-y-6 shadow-lg">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-display">
                    Facility &amp; Works Location
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    LAT 8.7139° N, LONG 77.7567° E
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs font-mono text-slate-700">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                    REGISTERED ADDRESS
                  </span>
                  <p className="text-slate-900 font-medium text-xs leading-relaxed">
                    {COMPANY_CONTACT.address}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200/80">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      PRIMARY PHONE
                    </span>
                    <a
                      href={`tel:${COMPANY_CONTACT.primaryPhone}`}
                      className="text-slate-900 font-bold hover:text-amber-600"
                    >
                      {COMPANY_CONTACT.primaryPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      ADDITIONAL MOBILE
                    </span>
                    <a
                      href={`tel:${COMPANY_CONTACT.mobile2}`}
                      className="text-slate-900 font-bold hover:text-amber-600"
                    >
                      {COMPANY_CONTACT.mobile2}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200/80">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      OFFICE LANDLINES
                    </span>
                    <span className="text-slate-900 font-semibold">{COMPANY_CONTACT.landlines}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      EMAIL DESK
                    </span>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="text-slate-900 font-bold hover:text-amber-600 truncate block"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      INDUSTRY EXPERIENCE
                    </span>
                    <span className="text-amber-700 font-bold">{COMPANY_CONTACT.experience}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      DIVISION
                    </span>
                    <span className="text-slate-900 font-bold">Crescent Roofing</span>
                  </div>
                </div>
              </div>

              {/* Map embed / Directions Link Box */}
              <div className="pt-2">
                <a
                  href={COMPANY_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-amber-400 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Navigation className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono font-bold text-slate-900">
                      Open in Google Maps / Navigation
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Information Cards: Location, Services Handled, How to Quote */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
          {/* Card 1: Genuine Service Areas */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-700 font-mono text-xs font-bold uppercase">
              <MapPin className="w-4 h-4" />
              <span>Genuine Service Coverage</span>
            </div>
            <h3 className="text-lg font-bold text-slate-950 font-display">
              Where We Fabricate &amp; Erect
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We operate fabrication works in Melapalayam and actively execute industrial and commercial projects across:
            </p>
            <ul className="space-y-1.5 text-xs font-mono text-slate-700">
              {VERIFIED_BUSINESS_DATA.genuineServiceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    <strong className="text-slate-900">{area.name}</strong> ({area.type})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Requirements Handled */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-700 font-mono text-xs font-bold uppercase">
              <Building2 className="w-4 h-4" />
              <span>Requirements Handled</span>
            </div>
            <h3 className="text-lg font-bold text-slate-950 font-display">
              Industrial &amp; Commercial Scope
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering team handles end-to-end design, fabrication, and on-site erection for:
            </p>
            <ul className="space-y-1.5 text-xs font-mono text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>Heavy structural steel fabrication &amp; crane gantries</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>Pre-engineered building (PEB) warehouse structures</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>Industrial steel roofing &amp; insulated PUF envelopes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>Industrial steel mezzanine floors &amp; multi-tier platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>Steel bridge superstructures &amp; industrial chimneys</span>
              </li>
            </ul>
          </div>

          {/* Card 3: How to Request a Quote */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-700 font-mono text-xs font-bold uppercase">
              <Navigation className="w-4 h-4" />
              <span>How To Engage Us</span>
            </div>
            <h3 className="text-lg font-bold text-slate-950 font-display">
              Requesting a Quotation or Site Visit
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide transparent structural engineering estimates and technical consultations through a simple process:
            </p>
            <ol className="space-y-2 text-xs font-mono text-slate-700 list-decimal list-inside">
              <li>
                <strong className="text-slate-900">Share Project Scope:</strong> Provide site dimensions, intended usage, and bay span requirements.
              </li>
              <li>
                <strong className="text-slate-900">CAD / Engineering Review:</strong> Our consultants evaluate load criteria (IS 800:2007) and bill of quantities.
              </li>
              <li>
                <strong className="text-slate-900">Technical Proposal:</strong> We provide detailed steel tonnage, timeline, and fabrication schedules.
              </li>
              <li>
                <strong className="text-slate-900">Visit or Call:</strong> Connect directly with our team at Vaalan Complex or via phone.
              </li>
            </ol>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onRequestQuote('Pre-Engineered Buildings (PEB)')}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors text-center"
              >
                Start Quotation Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
