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
      className={`relative py-20 sm:py-28 bg-[#090b10] text-white overflow-hidden border-b border-white/10 ${className}`}
    >
      {/* Background Golden Fiber-Optic Light Beams & Glow */}
      <div className="absolute inset-0 counter-light-beam pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Decorative vertical light lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-10">
        <div className="w-px h-full bg-gradient-to-b from-amber-400/0 via-amber-400 to-amber-400/0" />
        <div className="w-px h-full bg-gradient-to-b from-amber-400/0 via-amber-400 to-amber-400/0" />
        <div className="w-px h-full bg-gradient-to-b from-amber-400/0 via-amber-400 to-amber-400/0" />
        <div className="w-px h-full bg-gradient-to-b from-amber-400/0 via-amber-400 to-amber-400/0" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-400 uppercase">
            08 / ENGINEERING METRICS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Structural Performance Numbers
          </h2>
          <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight group-hover:text-amber-400 transition-colors drop-shadow-md">
                {stat.value}
              </div>
              <div className="mt-3 text-[11px] sm:text-xs font-mono text-white/70 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-white/40">
                {stat.sub}
              </div>
              <div className="mt-3 w-8 h-0.5 bg-amber-400/30 group-hover:w-14 group-hover:bg-amber-400 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
