import React from 'react';
import { STATS } from '../data/mockData';

export interface StatsMatrixProps {
  readonly className?: string;
}

export const StatsMatrix: React.FC<StatsMatrixProps> = ({ className = '' }) => {
  return (
    <section className={`py-14 sm:py-20 bg-surface-container-low border-b border-outline-variant ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-4 sm:pl-6 space-y-1 sm:space-y-1.5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-outline uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-tertiary">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
