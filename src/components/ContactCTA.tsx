import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/mockData';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
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
                  RFP ENGINEERING FORM // ISO 9001:2015
                </span>
                <span className="text-[10px] font-mono text-outline-variant">CONFIDENTIAL</span>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary-container/20 border border-primary-container text-primary-container flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-primary">
                    Specification Transmitted
                  </h3>
                  <p className="text-sm text-outline-variant max-w-sm mx-auto leading-relaxed">
                    Thank you. Our Chief Structural Engineer will review your requirements and provide CAD calculation estimates within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 border border-outline text-xs font-mono uppercase text-on-primary hover:bg-tertiary/40"
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
