import React, { useState } from 'react';
import { COMPANY_CONTACT, getWhatsAppUrl, createQuoteInquiryLinks } from '../data/mockData';

export interface ContactCTAProps {
  readonly onOpenQuoteModal?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Pre-Engineered Buildings (PEB)',
    estimatedArea: '',
    location: '',
    notes: '',
  });

  const [dispatchedLinks, setDispatchedLinks] = useState<{
    whatsappUrl1: string;
    whatsappUrl2: string;
    mailtoUrl: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const links = createQuoteInquiryLinks({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      category: formData.projectType,
      area: formData.estimatedArea,
      location: formData.location,
      notes: formData.notes,
    });

    setDispatchedLinks(links);
    setFormSubmitted(true);

    // 1. Direct to WhatsApp in a new tab/window
    window.open(links.whatsappUrl1, '_blank', 'noopener,noreferrer');

    // 2. Direct to Email client via mailto:
    setTimeout(() => {
      window.location.href = links.mailtoUrl;
    }, 350);
  };

  return (
    <section
      className="py-16 sm:py-24 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden structural-grid"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Numbers */}
          <div className="lg:col-span-6 space-y-6 reveal-left">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-amber-500 shrink-0" />
              <span className="font-mono text-amber-700 tracking-wider uppercase text-[10px] sm:text-xs font-bold">
                INITIATE STRUCTURAL CONSULTATION // TURNKEY CONTRACTING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
              Let’s Build Your Next Landmark.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-light leading-relaxed">
              Talk to our senior structural engineering team about custom steel fabrication, PEB construction schedules, high-performance roofing profiles, or industrial infrastructure project feasibility.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 sm:px-8 py-3.5 sm:py-4 transition-colors font-bold text-xs sm:text-sm font-label-caps uppercase tracking-wider shadow-sm rounded"
              >
                <span>REQUEST A QUOTE</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.mobile1}`}
                className="flex items-center justify-center gap-3 border border-slate-300 hover:border-slate-400 hover:bg-slate-100 text-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 transition-colors text-xs sm:text-sm font-bold font-label-caps uppercase tracking-wider bg-white shadow-xs rounded"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>CALL {COMPANY_CONTACT.mobile1}</span>
              </a>
            </div>

            {/* Direct WhatsApp Action Row for Both Numbers */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to request technical specifications for our PEB project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-3 transition-colors font-semibold text-[11px] sm:text-xs font-mono uppercase tracking-wider rounded shadow-xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
                </svg>
                <span>WhatsApp: {COMPANY_CONTACT.mobile1}</span>
              </a>
              <a
                href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp2Clean, 'Hello Crescent Engineering, I would like to request technical specifications for our PEB project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-3 transition-colors font-semibold text-[11px] sm:text-xs font-mono uppercase tracking-wider rounded shadow-xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
                </svg>
                <span>WhatsApp: {COMPANY_CONTACT.mobile2}</span>
              </a>
            </div>

            {/* Direct Contact Phone & Email Grid */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-600">
              <div className="space-y-1">
                <span className="text-[10px] uppercase text-slate-500 font-semibold block">DIRECT CELLULAR:</span>
                <a href={`tel:${COMPANY_CONTACT.mobile1}`} className="text-slate-900 font-bold text-sm block hover:text-amber-600">
                  {COMPANY_CONTACT.mobile1}
                </a>
                <a href={`tel:${COMPANY_CONTACT.mobile2}`} className="text-slate-900 font-bold text-sm block hover:text-amber-600">
                  {COMPANY_CONTACT.mobile2}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase text-slate-500 font-semibold block">CENTRAL DESK LANDLINE:</span>
                <span className="text-slate-900 font-bold text-sm block">
                  {COMPANY_CONTACT.landlines}
                </span>
                <span className="text-[10px] uppercase text-slate-500 font-semibold block pt-1">DIRECT CORRESPONDENCE:</span>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-amber-700 font-bold text-xs sm:text-sm hover:underline block break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFP Specification Form */}
          <div className="lg:col-span-6 w-full reveal-right hover-bump">
            <div className="border border-slate-200 bg-white p-4 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                <span className="text-xs font-mono text-amber-700 font-bold tracking-wider uppercase">
                  RFP ENGINEERING FORM // IS 800:2007 COMPLIANT
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">CONFIDENTIAL</span>
              </div>

              {formSubmitted ? (
                <div className="py-6 space-y-5">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-300 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">check_circle</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Specification Dispatched!
                      </h3>
                      <p className="text-xs text-emerald-700 font-mono font-medium">
                        Directly directed to WhatsApp &amp; Email
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-mono leading-relaxed">
                    Your project details for <strong className="text-slate-900">{formData.name}</strong> ({formData.projectType}) have been pre-filled and sent to our executive structural desk.
                  </p>

                  {/* Immediate Direct Action Triggers */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                      DIRECT DESK CHANNELS (CLICK TO RE-OPEN ANYTIME):
                    </span>

                    {dispatchedLinks && (
                      <div className="flex flex-col gap-2">
                        <a
                          href={dispatchedLinks.whatsappUrl1}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-semibold rounded transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
                            <span>Open WhatsApp Desk 1 ({COMPANY_CONTACT.mobile1})</span>
                          </span>
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>

                        <a
                          href={dispatchedLinks.whatsappUrl2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-semibold rounded transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-300" />
                            <span>Open WhatsApp Desk 2 ({COMPANY_CONTACT.mobile2})</span>
                          </span>
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>

                        <a
                          href={dispatchedLinks.mailtoUrl}
                          className="flex items-center justify-between px-3.5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono text-xs font-bold rounded transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">mail</span>
                            <span>Open in Email ({COMPANY_CONTACT.email})</span>
                          </span>
                          <span className="material-symbols-outlined text-sm">send</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 bg-slate-50 rounded-lg p-3 text-[11px] font-mono space-y-1 text-slate-700">
                    <div><span className="text-slate-500 font-semibold">CLIENT:</span> {formData.name} ({formData.phone})</div>
                    <div><span className="text-slate-500 font-semibold">CATEGORY:</span> {formData.projectType}</div>
                    {formData.estimatedArea && <div><span className="text-slate-500 font-semibold">AREA:</span> {formData.estimatedArea}</div>}
                    {formData.location && <div><span className="text-slate-500 font-semibold">LOCATION:</span> {formData.location}</div>}
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="w-full py-2.5 border border-slate-300 rounded text-xs font-mono uppercase text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    Submit Another Specification
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Er. Rajesh Kumar"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98400 00000"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@enterprise.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Structural Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm sm:text-xs font-mono text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      >
                        <option>Pre-Engineered Buildings (PEB)</option>
                        <option>Conversion Buildings</option>
                        <option>PUF Panel Sheeting Systems</option>
                        <option>Colour-Coated Roofing Sheets</option>
                        <option>Tensile Roofing Systems</option>
                        <option>Steel Bridges</option>
                        <option>Cold Storage Systems</option>
                        <option>Mezzanine Floors</option>
                        <option>Stone-Coated Roofing Systems</option>
                        <option>Polycarbonate Roofing Systems</option>
                        <option>UPVC Roofing Systems</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Estimated Area (Sq. Ft.)
                      </label>
                      <input
                        type="text"
                        value={formData.estimatedArea}
                        onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                        placeholder="e.g. 50,000 Sq. Ft."
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Project Site Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Coimbatore, TN"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                      Project Notes / Specific Tolerances / Crane Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Clear span 36m, 15 MT EOT crane gantry required, cyclonic coastal terrain category."
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded shadow-sm"
                  >
                    <span>TRANSMIT STRUCTURAL SPECIFICATION</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
