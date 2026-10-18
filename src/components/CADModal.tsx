import React from 'react';
import { CapabilityItem } from '../data/mockData';

export interface CADModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly item: CapabilityItem | null;
  readonly onRequestQuote: () => void;
}

export const CADModal: React.FC<CADModalProps> = ({
  isOpen,
  onClose,
  item,
  onRequestQuote,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-2xl bg-white border border-slate-200 p-6 sm:p-8 text-slate-900 rounded-2xl shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* CAD Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider">
              CAD SPECIFICATION VIEWER // CEI-REV-2026
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 focus:outline-none transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-600 font-bold block">
                CATEGORY {item?.number || '01'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-headline-md text-slate-950 font-display">
                {item?.title || 'Pre-Engineered Building (PEB) Structural Design'}
              </h3>
            </div>
            <span className="material-symbols-outlined text-3xl text-amber-500 shrink-0">
              {item?.icon || 'architecture'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {item?.description ||
              'High-precision structural CAD/BIM drawing package conforming to IS 800:2007 and MBMA specifications. Ready for fabrication spool drafting.'}
          </p>

          {/* Authentic Photograph Preview */}
          {item?.image && (
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
              <img
                src={item.image}
                alt={item.imageAlt || item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>AUTHENTIC PROJECT REFERENCE // {item.title}</span>
              </div>
            </div>
          )}

          {/* Technical Specs Plate */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">PRIMARY SPEC:</span>
              <span className="text-amber-700 font-bold text-right">
                {item?.cadSpec || 'IS 2062 Grade E350 Welded I-Sections'}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">CLEAR METRIC:</span>
              <span className="text-slate-900 font-bold">
                {item?.metric || 'SPAN: 12M - 65M'}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">ANALYSIS PLATFORM:</span>
              <span className="text-slate-900 font-semibold">STAAD.Pro Connect Edition v22</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">SHOP FABRICATION TOLERANCE:</span>
              <span className="text-amber-600 font-bold">± 1.5 MM</span>
            </div>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 rounded text-xs font-mono uppercase text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          >
            Close Sheet
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded shadow-sm"
          >
            <span>Request Custom CAD Quote</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
