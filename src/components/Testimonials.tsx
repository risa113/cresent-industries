import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export interface TestimonialsProps {
  readonly className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  return (
    <section className={`relative py-24 sm:py-32 bg-[#07090e] text-white border-b border-white/10 overflow-hidden ${className}`} id="testimonials">
      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          REVIEWS
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-mono text-amber-400 font-bold text-xs sm:text-sm">
                07 / VERIFIED TIRUNELVELI CLIENT REVIEWS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase font-bold flex items-center gap-1 rounded-full">
                <span>★ 4.8 / 5.0 JUSTDIAL RATED</span>
                <span>(34+ RATINGS)</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 uppercase font-bold rounded-full">
                26+ YEARS IN TIRUNELVELI
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Trusted Across Tirunelveli &amp; South Tamil Nadu.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/50 max-w-sm font-mono leading-relaxed">
            Direct feedback and audit evaluations from industrial plant owners, warehouse operators, and commercial workshop clients across Tirunelveli district.
          </p>
        </div>

        {/* Testimonials 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#10141d] p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400/50 hover:bg-[#141a26] transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Star Rating in Golden Amber */}
                  <div className="flex items-center gap-0.5 text-amber-400 text-sm">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  {t.verifiedSource && (
                    <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold uppercase">
                      VERIFIED
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic font-light pt-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono">
                <div className="font-bold text-white text-sm sm:text-base font-display">
                  {t.author}
                </div>
                <div className="text-white/50 text-xs mt-0.5 leading-snug">{t.title}</div>
                {t.location && (
                  <div className="text-amber-400 font-semibold text-[11px] mt-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">location_on</span>
                    <span>{t.location}</span>
                  </div>
                )}
                <div className="text-white/40 text-[10px] mt-2 pt-2 border-t border-white/5 tracking-wider">
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
