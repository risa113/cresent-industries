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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-lg bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider block">
              QUICK SPECIFICATION DESK
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-display">
              Request Project Estimate
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 p-1 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-4 space-y-4 text-center">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Estimate Request Dispatched!</h4>
              <p className="text-xs text-emerald-700 font-mono font-medium mt-0.5">
                Directly routed to WhatsApp &amp; Email
              </p>
            </div>
            <p className="text-xs text-slate-600">
              Your inquiry for <strong className="text-slate-900">{form.name}</strong> has been transmitted. If your browser blocked the automatic redirect, use the instant buttons below:
            </p>

            {dispatchedLinks && (
              <div className="flex flex-col gap-2 pt-2 text-left">
                <a
                  href={dispatchedLinks.whatsappUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-semibold rounded transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
                    <span>WhatsApp Desk 1 ({COMPANY_CONTACT.mobile1})</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>

                <a
                  href={dispatchedLinks.whatsappUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-semibold rounded transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-300" />
                    <span>WhatsApp Desk 2 ({COMPANY_CONTACT.mobile2})</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>

                <a
                  href={dispatchedLinks.mailtoUrl}
                  className="flex items-center justify-between px-3 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono text-xs font-bold rounded transition-colors"
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
              className="w-full mt-3 px-5 py-2.5 border border-slate-300 rounded hover:bg-slate-100 text-slate-800 text-xs font-mono uppercase transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-slate-700 uppercase mb-1 text-[10px] font-semibold">
                Your Name / Company *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Anand Structural Works"
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-700 uppercase mb-1 text-[10px] font-semibold">
                Mobile Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98400 00000"
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-700 uppercase mb-1 text-[10px] font-semibold">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="procurement@company.com"
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-700 uppercase mb-1 text-[10px] font-semibold">
                Structural Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm sm:text-xs font-mono text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              >
                <option>Pre-Engineered Building (PEB)</option>
                <option>Heavy Structural Steel</option>
                <option>Tensile Roof Membrane</option>
                <option>Cold Storage Shell</option>
                <option>Industrial Roofing &amp; Cladding</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 uppercase mb-1 text-[10px] font-semibold">
                Project Scope / Dimensions
              </label>
              <textarea
                rows={2}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="e.g. 80m x 30m warehouse in Tirunelveli, 10 MT crane"
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm sm:text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded text-xs uppercase tracking-wider font-label-caps transition-colors shadow-sm"
            >
              Submit Specification
            </button>

            <div className="pt-2 text-center text-[10px] text-slate-500">
              Direct Phone: <a href={`tel:${COMPANY_CONTACT.mobile1}`} className="text-amber-700 font-bold hover:underline">{COMPANY_CONTACT.mobile1}</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
