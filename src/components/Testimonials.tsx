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
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-mono text-primary font-bold text-xs sm:text-sm">
                07 / VERIFIED TIRUNELVELI CLIENT REVIEWS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-600 border border-amber-500/30 uppercase font-bold flex items-center gap-1">
                <span>★ 4.8 / 5.0 JUSTDIAL RATED</span>
                <span>(34+ RATINGS)</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 uppercase font-bold">
                26+ YEARS IN TIRUNELVELI
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface font-display tracking-tight">
              Trusted Across Tirunelveli &amp; South Tamil Nadu.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tertiary max-w-sm font-mono">
            Direct feedback and audit evaluations from industrial plant owners, warehouse operators, and commercial workshop clients across Tirunelveli district.
          </p>
        </div>

        {/* Testimonials 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="border border-outline-variant bg-surface p-5 sm:p-6 flex flex-col justify-between hover:border-primary-container transition-all hover:shadow-lg group relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 text-amber-500 text-sm">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  {t.verifiedSource && (
                    <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-300 px-1.5 py-0.5 font-semibold">
                      VERIFIED
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed italic pt-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-outline-variant text-xs font-mono">
                <div className="font-bold text-on-surface text-sm sm:text-base flex items-center justify-between">
                  <span>{t.author}</span>
                </div>
                <div className="text-outline text-xs mt-0.5 leading-snug">{t.title}</div>
                {t.location && (
                  <div className="text-primary font-semibold text-[11px] mt-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">location_on</span>
                    <span>{t.location}</span>
                  </div>
                )}
                <div className="text-outline-variant text-[10px] mt-2 pt-2 border-t border-outline-variant/60 tracking-wider">
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
