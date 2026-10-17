import React from 'react';
import { PortfolioProject, COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';

export interface ProjectModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly project: PortfolioProject | null;
  readonly onRequestQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
  onRequestQuote,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto text-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold text-amber-600">
              {project.code}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-[10px] font-mono text-slate-500 uppercase font-medium">
              {project.location} • {project.year}
            </span>
            <span className="text-[9px] font-mono px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold uppercase rounded">
              AUTHENTIC CLIENT WORK
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 p-1 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden aspect-[16/9] w-full bg-slate-100 border border-slate-200 rounded-xl">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {project.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono">
            <div>
              <span className="text-slate-500 uppercase text-[10px] block font-semibold">CONSTRUCTED AREA</span>
              <span className="text-slate-900 font-bold text-sm">{project.area}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase text-[10px] block font-semibold">STRUCTURAL STEEL</span>
              <span className="text-amber-700 font-bold text-sm">{project.steel}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 uppercase text-[10px] block font-semibold">STANDARD</span>
              <span className="text-slate-900 font-bold text-sm">IS 800:2007 / ASTM</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Fast Enquiry Block */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
            </svg>
            <span className="text-xs font-mono font-bold text-emerald-950 uppercase">
              Direct WhatsApp Inquiries For This Project
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <a
              href={getWhatsAppUrl(
                COMPANY_CONTACT.whatsapp1Clean,
                `Hello Crescent Engineering, I saw ${project.title} (${project.code}) on your website. I want consultation with Er. Mohamed / Chief Consultant.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 rounded font-semibold transition-colors shadow-xs"
            >
              <span>Desk 1: {COMPANY_CONTACT.mobile1}</span>
            </a>
            <a
              href={getWhatsAppUrl(
                COMPANY_CONTACT.whatsapp2Clean,
                `Hello Crescent Engineering, I saw ${project.title} (${project.code}) on your website. Please provide fabrication quotes & structural drawings.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 rounded font-semibold transition-colors shadow-xs"
            >
              <span>Desk 2: {COMPANY_CONTACT.mobile2}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 border border-slate-300 rounded text-xs font-mono uppercase text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded text-xs uppercase tracking-wider font-label-caps transition-colors shadow-sm"
          >
            Inquire About Similar Project
          </button>
        </div>
      </div>
    </div>
  );
};
