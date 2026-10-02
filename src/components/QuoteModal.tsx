import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/mockData';

export interface QuoteModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
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
          <div className="py-6 text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-primary">
              check_circle
            </span>
            <h4 className="text-lg font-bold text-on-surface">Request Dispatched</h4>
            <p className="text-xs text-tertiary">
              Our engineering office at Melapalayam will review your requirements and reach out via phone or email shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 px-5 py-2 bg-on-background text-on-primary text-xs font-mono uppercase"
            >
              Done
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
