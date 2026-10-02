import React from 'react';
import { PRECISION_BLOCKS } from '../data/mockData';

export interface PrecisionMatrixProps {
  readonly onActionClick?: () => void;
}

export const PrecisionMatrix: React.FC<PrecisionMatrixProps> = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-on-background text-on-primary border-b border-tertiary relative dark-structural-grid">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-tertiary pb-4 mb-10 sm:mb-16 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-primary-container font-bold text-xs sm:text-sm">
              03 / WHY CRESCENT
            </span>
            <span className="text-tertiary hidden sm:inline">|</span>
            <span className="text-[10px] sm:text-xs font-semibold text-outline-variant uppercase font-label-caps tracking-wider">
              ENGINEERING DIFFERENTIATORS
            </span>
          </div>
          <span className="font-mono text-secondary-fixed text-[11px] sm:text-xs">
            ZERO COMPROMISE PHILOSOPHY
          </span>
        </div>

        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-primary font-display tracking-tight mb-3 sm:mb-4">
            Precision Is Not Optional.
          </h2>
          <p className="text-sm sm:text-base text-outline-variant leading-relaxed">
            Industrial structures endure cyclical thermal expansion, extreme monsoon turbulence, and massive dead loads. We construct every building component to pass non-destructive testing and decades of high-stress service.
          </p>
        </div>

        {/* 6 Large Numerical Value Blocks (Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-tertiary border border-tertiary">
          {PRECISION_BLOCKS.map((block) => (
            <div
              key={block.number}
              className="bg-on-background p-6 sm:p-8 lg:p-10 space-y-3 sm:space-y-4 hover:bg-inverse-surface transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="text-3xl sm:text-4xl font-bold text-primary-container font-display">
                  {block.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-primary font-headline-sm">
                  {block.title}
                </h3>
                <p className="text-xs sm:text-sm text-outline-variant leading-relaxed">
                  {block.description}
                </p>
              </div>

              <div className="pt-4 border-t border-tertiary/60 text-xs font-mono text-secondary-fixed font-semibold tracking-wider">
                {block.tolerance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
