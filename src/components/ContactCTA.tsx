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
    projectType: 'Pre-Engineered Building (PEB)',
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
      className="py-16 sm:py-24 lg:py-28 bg-on-background text-on-primary border-b border-tertiary relative overflow-hidden dark-structural-grid"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Numbers */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-primary-container shrink-0" />
              <span className="font-mono text-secondary-fixed tracking-wider uppercase text-[10px] sm:text-xs font-semibold">
                INITIATE STRUCTURAL CONSULTATION // TURNKEY CONTRACTING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-primary font-display tracking-tight leading-tight">
              Let’s Build Your Next Landmark.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-outline-variant font-light leading-relaxed">
              Talk to our senior structural engineering team about custom steel fabrication, PEB construction schedules, high-performance roofing profiles, or industrial infrastructure project feasibility.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center justify-center gap-3 bg-primary-container hover:bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 transition-colors font-semibold text-xs sm:text-sm font-label-caps uppercase tracking-wider shadow-md"
              >
                <span>REQUEST A QUOTE</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.mobile1}`}
                className="flex items-center justify-center gap-3 border border-outline hover:border-surface-container-lowest text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 transition-colors text-xs sm:text-sm font-label-caps uppercase tracking-wider bg-inverse-surface/60"
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
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white py-3 px-3 transition-colors font-semibold text-[11px] sm:text-xs font-mono uppercase tracking-wider"
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
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white py-3 px-3 transition-colors font-semibold text-[11px] sm:text-xs font-mono uppercase tracking-wider"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
                </svg>
                <span>WhatsApp: {COMPANY_CONTACT.mobile2}</span>
              </a>
            </div>

            {/* Direct Contact Phone & Email Grid */}
            <div className="pt-6 sm:pt-8 border-t border-tertiary grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-outline-variant">
              <div className="space-y-1">
                <span className="text-[10px] uppercase text-outline block">DIRECT CELLULAR:</span>
                <a href={`tel:${COMPANY_CONTACT.mobile1}`} className="text-on-primary font-bold text-sm block hover:text-primary-container">
                  {COMPANY_CONTACT.mobile1}
                </a>
                <a href={`tel:${COMPANY_CONTACT.mobile2}`} className="text-on-primary font-bold text-sm block hover:text-primary-container">
                  {COMPANY_CONTACT.mobile2}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase text-outline block">CENTRAL DESK LANDLINE:</span>
                <span className="text-on-primary font-bold text-sm block">
                  {COMPANY_CONTACT.landlines}
                </span>
                <span className="text-[10px] uppercase text-outline block pt-1">DIRECT CORRESPONDENCE:</span>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-primary-container font-bold text-xs sm:text-sm hover:underline block break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFP Specification Form */}
          <div className="lg:col-span-6 w-full">
            <div className="border border-tertiary bg-inverse-surface/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between border-b border-tertiary pb-3 mb-6">
                <span className="text-xs font-mono text-secondary-fixed font-bold tracking-wider uppercase">
                  RFP ENGINEERING FORM // IS 800:2007 COMPLIANT
                </span>
                <span className="text-[10px] font-mono text-outline-variant">CONFIDENTIAL</span>
              </div>

              {formSubmitted ? (
                <div className="py-6 space-y-5">
                  <div className="flex items-center gap-3 border-b border-tertiary pb-4">
                    <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">check_circle</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-on-primary">
                        Specification Dispatched!
                      </h3>
                      <p className="text-xs text-emerald-400 font-mono">
                        Directly directed to WhatsApp &amp; Email
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-outline-variant font-mono leading-relaxed">
                    Your project details for <strong className="text-on-primary">{formData.name}</strong> ({formData.projectType}) have been pre-filled and sent to our executive structural desk.
                  </p>

                  {/* Immediate Direct Action Triggers */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono text-outline uppercase tracking-wider block">
                      DIRECT DESK CHANNELS (CLICK TO RE-OPEN ANYTIME):
                    </span>

                    {dispatchedLinks && (
                      <div className="flex flex-col gap-2">
                        <a
                          href={dispatchedLinks.whatsappUrl1}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs font-semibold transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                            <span>Open WhatsApp Desk 1 ({COMPANY_CONTACT.mobile1})</span>
                          </span>
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>

                        <a
                          href={dispatchedLinks.whatsappUrl2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3.5 py-2.5 bg-emerald-800/90 hover:bg-emerald-700 text-white font-mono text-xs font-semibold transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Open WhatsApp Desk 2 ({COMPANY_CONTACT.mobile2})</span>
                          </span>
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>

                        <a
                          href={dispatchedLinks.mailtoUrl}
                          className="flex items-center justify-between px-3.5 py-2.5 bg-primary-container hover:bg-primary text-on-primary font-mono text-xs font-semibold transition-colors"
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

                  <div className="border border-tertiary bg-on-background/60 p-3 text-[11px] font-mono space-y-1 text-outline-variant">
                    <div><span className="text-outline">CLIENT:</span> {formData.name} ({formData.phone})</div>
                    <div><span className="text-outline">CATEGORY:</span> {formData.projectType}</div>
                    {formData.estimatedArea && <div><span className="text-outline">AREA:</span> {formData.estimatedArea}</div>}
                    {formData.location && <div><span className="text-outline">LOCATION:</span> {formData.location}</div>}
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="w-full py-2.5 border border-outline text-xs font-mono uppercase text-on-primary hover:bg-tertiary/40 transition-colors"
                  >
                    Submit Another Specification
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-outline-variant uppercase mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Er. Rajesh Kumar"
                        className="w-full bg-on-background border border-tertiary px-3.5 py-2.5 text-xs font-mono text-on-primary placeholder:text-outline/60 focus:outline-none focus:border-primary-container transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-outline-variant uppercase mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98400 00000"
                        className="w-full bg-on-background border border-tertiary px-3.5 py-2.5 text-xs font-mono text-on-primary placeholder:text-outline/60 focus:outline-none focus:border-primary-container transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-outline-variant uppercase mb-1">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@enterprise.com"
                        className="w-full bg-on-background border border-tertiary px-3.5 py-2.5 text-xs font-mono text-on-primary placeholder:text-outline/60 focus:outline-none focus:border-primary-container transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-outline-variant uppercase mb-1">
                        Structural Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-on-background border border-tertiary px-3.5 py-2.5 text-xs font-mono text-on-primary focus:outline-none focus:border-primary-container transition-colors"
                      >
                        <option>Pre-Engineered Building (PEB)</option>
                        <option>Heavy Industrial Steel Framing</option>
                        <option>Architectural Tensile Roof</option>
                        <option>PUFF Panel Sandwich Sheeting</option>
                        <option>Cold Storage Facility</option>
                        <option>Factory Height Extension / Mezzanine</option>
                        <option>Colour-Coated Galvalume Roofing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-outline-variant uppercase mb-1">
                        Estimated Area (Sq. Ft.)
                      </label>
                      <input
                        type="text"
                        value={formData.estimatedArea}
                        onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                        placeholder="e.g. 50,000 Sq. Ft."
                        className="w-full bg-on-background border border-tertiary px-3.5 py-2.5 text-xs font-mono text-on-primary placeholder:text-outline/60 focus:outline-none focus:border-primary-container transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-outline-variant uppercase mb-1">
                        Project Site Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Coimbatore, TN"
                        className="w-full bg-on-background border border-tertiary px-3.5 py-2.5 text-xs font-mono text-on-primary placeholder:text-outline/60 focus:outline-none focus:border-primary-container transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-outline-variant uppercase mb-1">
                      Project Notes / Specific Tolerances / Crane Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Clear span 36m, 15 MT EOT crane gantry required, cyclonic coastal terrain category."
                      className="w-full bg-on-background border border-tertiary px-3.5 py-2.5 text-xs font-mono text-on-primary placeholder:text-outline/60 focus:outline-none focus:border-primary-container transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary-container hover:bg-primary text-on-primary font-semibold text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
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
