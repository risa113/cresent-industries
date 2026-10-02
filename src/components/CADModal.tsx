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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-2xl bg-on-background border border-primary-container p-6 sm:p-8 text-on-primary shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* CAD Header */}
        <div className="flex items-center justify-between border-b border-tertiary pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-primary-container" />
            <span className="text-xs font-mono text-secondary-fixed font-bold uppercase tracking-wider">
              CAD SPECIFICATION VIEWER // CEI-REV-2026
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-outline-variant hover:text-on-primary p-1 focus:outline-none"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-primary-fixed block">
                CATEGORY {item?.number || '01'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-headline-md text-on-primary">
                {item?.title || 'Pre-Engineered Building (PEB) Structural Design'}
              </h3>
            </div>
            <span className="material-symbols-outlined text-3xl text-primary-container shrink-0">
              {item?.icon || 'architecture'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-outline-variant leading-relaxed">
            {item?.description ||
              'High-precision structural CAD/BIM drawing package conforming to IS 800:2007 and MBMA specifications. Ready for fabrication spool drafting.'}
          </p>

          {/* Technical Specs Plate */}
          <div className="p-4 bg-inverse-surface border border-tertiary space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-tertiary/60 pb-2">
              <span className="text-outline-variant">PRIMARY SPEC:</span>
              <span className="text-secondary-fixed font-bold text-right">
                {item?.cadSpec || 'IS 2062 Grade E350 Welded I-Sections'}
              </span>
            </div>
            <div className="flex justify-between border-b border-tertiary/60 pb-2">
              <span className="text-outline-variant">CLEAR METRIC:</span>
              <span className="text-on-primary font-bold">
                {item?.metric || 'SPAN: 12M - 65M'}
              </span>
            </div>
            <div className="flex justify-between border-b border-tertiary/60 pb-2">
              <span className="text-outline-variant">ANALYSIS PLATFORM:</span>
              <span className="text-on-primary">STAAD.Pro Connect Edition v22</span>
            </div>
            <div className="flex justify-between">
              <span className="text-outline-variant">SHOP FABRICATION TOLERANCE:</span>
              <span className="text-primary-container font-bold">± 1.5 MM</span>
            </div>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-tertiary">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-tertiary text-xs font-mono uppercase text-outline-variant hover:text-on-primary hover:border-outline"
          >
            Close Sheet
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-primary-container hover:bg-primary text-on-primary font-semibold text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <span>Request Custom CAD Quote</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
