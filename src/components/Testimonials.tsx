import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export interface TestimonialsProps {
  readonly className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-surface-container-lowest border-b border-outline-variant ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-6 mb-10 sm:mb-16 gap-4">
          <div>
            <span className="font-mono text-primary font-bold text-xs sm:text-sm block mb-1">
              07 / VERIFIED ENDORSEMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface font-display tracking-tight">
              Trusted by Clients Who Build for the Future.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tertiary max-w-sm">
            Third-party audit evaluations from enterprise project directors, civil architects, and factory managers.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="border border-outline-variant bg-surface p-6 sm:p-8 flex flex-col justify-between hover:border-primary-container transition-all hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="text-primary text-3xl font-serif leading-none">“</div>
                <p className="text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-outline-variant text-xs font-mono">
                <div className="font-bold text-on-surface text-sm sm:text-base">
                  {t.author}
                </div>
                <div className="text-outline text-xs mt-0.5">{t.title}</div>
                <div className="text-primary font-semibold text-[11px] mt-2 tracking-wide">
                  {t.projectBadge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
