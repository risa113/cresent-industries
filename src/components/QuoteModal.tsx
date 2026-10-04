import React, { useState } from 'react';
import { COMPANY_CONTACT, createQuoteInquiryLinks } from '../data/mockData';

export interface QuoteModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [dispatchedLinks, setDispatchedLinks] = useState<{
    whatsappUrl1: string;
    whatsappUrl2: string;
    mailtoUrl: string;
  } | null>(null);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Pre-Engineered Building (PEB)',
    details: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const links = createQuoteInquiryLinks({
      name: form.name,
      phone: form.phone,
      email: form.email,
      category: form.category,
      notes: form.details,
    });

    setDispatchedLinks(links);
    setSubmitted(true);

    // 1. Direct to WhatsApp in a new tab/window
    window.open(links.whatsappUrl1, '_blank', 'noopener,noreferrer');

    // 2. Direct to Email client via mailto:
    setTimeout(() => {
      window.location.href = links.mailtoUrl;
    }, 350);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-lg bg-surface-container-lowest border border-primary-container p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div>
            <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block">
              QUICK SPECIFICATION DESK
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-on-surface font-headline-sm">
              Request Project Estimate
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-outline hover:text-on-surface p-1"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-4 space-y-4 text-center">
            <div className="w-12 h-12 bg-emerald-100 border border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-on-surface">Estimate Request Dispatched!</h4>
              <p className="text-xs text-emerald-700 font-mono font-medium mt-0.5">
                Directly routed to WhatsApp &amp; Email
              </p>
            </div>
            <p className="text-xs text-tertiary">
              Your inquiry for <strong className="text-on-surface">{form.name}</strong> has been transmitted. If your browser blocked the automatic redirect, use the instant buttons below:
            </p>

            {dispatchedLinks && (
              <div className="flex flex-col gap-2 pt-2 text-left">
                <a
                  href={dispatchedLinks.whatsappUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                    <span>WhatsApp Desk 1 ({COMPANY_CONTACT.mobile1})</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>

                <a
                  href={dispatchedLinks.whatsappUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-mono text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>WhatsApp Desk 2 ({COMPANY_CONTACT.mobile2})</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>

                <a
                  href={dispatchedLinks.mailtoUrl}
                  className="flex items-center justify-between px-3 py-2.5 bg-primary-container hover:bg-primary text-on-primary font-mono text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                    <span>Open Email ({COMPANY_CONTACT.email})</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-full mt-3 px-5 py-2.5 border border-outline-variant hover:bg-surface-container-low text-on-surface text-xs font-mono uppercase"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-outline uppercase mb-1 text-[10px]">
                Your Name / Company *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Anand Structural Works"
                className="w-full bg-surface-container-low border border-outline-variant px-3 py-2.5 text-on-surface focus:outline-none focus:border-primary-container"
              />
            </div>

            <div>
              <label className="block text-outline uppercase mb-1 text-[10px]">
                Mobile Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98400 00000"
                className="w-full bg-surface-container-low border border-outline-variant px-3 py-2.5 text-on-surface focus:outline-none focus:border-primary-container"
              />
            </div>

            <div>
              <label className="block text-outline uppercase mb-1 text-[10px]">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="procurement@company.com"
                className="w-full bg-surface-container-low border border-outline-variant px-3 py-2.5 text-on-surface focus:outline-none focus:border-primary-container"
              />
            </div>

            <div>
              <label className="block text-outline uppercase mb-1 text-[10px]">
                Structural Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-surface-container-low border border-outline-variant px-3 py-2.5 text-on-surface focus:outline-none focus:border-primary-container"
              >
                <option>Pre-Engineered Building (PEB)</option>
                <option>Heavy Structural Steel</option>
                <option>Tensile Roof Membrane</option>
                <option>Cold Storage Shell</option>
                <option>Industrial Roofing &amp; Cladding</option>
              </select>
            </div>

            <div>
              <label className="block text-outline uppercase mb-1 text-[10px]">
                Project Scope / Dimensions
              </label>
              <textarea
                rows={2}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="e.g. 80m x 30m warehouse in Tirunelveli, 10 MT crane"
                className="w-full bg-surface-container-low border border-outline-variant px-3 py-2.5 text-on-surface focus:outline-none focus:border-primary-container"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary-container hover:bg-primary text-on-primary font-bold text-xs uppercase tracking-wider font-label-caps transition-colors"
            >
              Submit Specification
            </button>

            <div className="pt-2 text-center text-[10px] text-outline">
              Direct Phone: <a href={`tel:${COMPANY_CONTACT.mobile1}`} className="text-primary font-bold">{COMPANY_CONTACT.mobile1}</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
