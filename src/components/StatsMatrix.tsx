import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '../data/mockData';

export interface StatsMatrixProps {
  readonly className?: string;
}

export const StatsMatrix: React.FC<StatsMatrixProps> = ({ className = '' }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 sm:py-28 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200 ${className}`}
    >
      {/* Background Golden Fiber-Optic Light Beams & Glow */}
      <div className="absolute inset-0 counter-light-beam pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Decorative vertical light lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-10">
        <div className="w-px h-full bg-gradient-to-b from-amber-500/0 via-amber-500 to-amber-500/0" />
        <div className="w-px h-full bg-gradient-to-b from-amber-500/0 via-amber-500 to-amber-500/0" />
        <div className="w-px h-full bg-gradient-to-b from-amber-500/0 via-amber-500 to-amber-500/0" />
        <div className="w-px h-full bg-gradient-to-b from-amber-500/0 via-amber-500 to-amber-500/0" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2 reveal-down">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-600 uppercase">
            08 / ENGINEERING METRICS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
            Structural Performance Numbers
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 group text-center reveal-bump hover-bump stagger-${idx + 1}`}
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight group-hover:text-amber-600 transition-colors drop-shadow-xs">
                {stat.value}
              </div>
              <div className="mt-3 text-[11px] sm:text-xs font-mono text-slate-700 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                {stat.sub}
              </div>
              <div className="mt-3 w-8 h-0.5 bg-amber-500/30 group-hover:w-14 group-hover:bg-amber-500 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
