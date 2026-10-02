import React from 'react';
import { PortfolioProject } from '../data/mockData';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl bg-surface-container-lowest border border-outline-variant shadow-2xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-primary">
              {project.code}
            </span>
            <span className="text-outline-variant">|</span>
            <span className="text-[10px] font-mono text-outline uppercase">
              {project.location} • {project.year}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-outline hover:text-on-surface p-1"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden aspect-[16/9] w-full bg-surface-dim border border-outline-variant">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline-md">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-surface-container-low border border-outline-variant text-xs font-mono">
            <div>
              <span className="text-outline uppercase text-[10px] block">CONSTRUCTED AREA</span>
              <span className="text-on-surface font-bold text-sm">{project.area}</span>
            </div>
            <div>
              <span className="text-outline uppercase text-[10px] block">STRUCTURAL STEEL</span>
              <span className="text-primary font-bold text-sm">{project.steel}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-outline uppercase text-[10px] block">STANDARD</span>
              <span className="text-on-surface font-bold text-sm">ISO 9001:2015</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3 border-t border-outline-variant">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 border border-outline-variant text-xs font-mono uppercase text-tertiary hover:border-on-surface"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-6 py-2.5 bg-on-background hover:bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider font-label-caps transition-colors"
          >
            Inquire About Similar Project
          </button>
        </div>
      </div>
    </div>
  );
};
