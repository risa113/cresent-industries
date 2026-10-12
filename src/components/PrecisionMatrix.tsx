import React, { useEffect, useState, useRef } from 'react';
import { PRECISION_BLOCKS } from '../data/mockData';

export interface PrecisionMatrixProps {
  readonly onActionClick?: () => void;
}

export const PrecisionMatrix: React.FC<PrecisionMatrixProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreGauges = [
    { percent: 99.8, display: '±1.5mm', title: 'Fabrication Tolerance', subtitle: 'CNC Cutting & Drilling Precision' },
    { percent: 100, display: '100%', title: 'Code Compliance', subtitle: 'IS 800:2007 & MBMA 2012' },
    { percent: 95, display: '95%', title: 'On-Time Turnkey Erection', subtitle: 'Zero Downtime Scheduling' },
    { percent: 100, display: '100%', title: 'Weld Test Integrity', subtitle: 'AWS D1.1 Ultrasonic & NDT' }
  ];

  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#07090e] text-white border-b border-white/10 overflow-hidden"
      id="precision"
    >
      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          PRECISION
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-bold font-mono tracking-[0.25em] text-amber-400 uppercase">
            OUR SKILLS // 03 WHY CRESCENT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Precision Is Not Optional.
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full mt-3" />
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto pt-2 leading-relaxed">
            Industrial structures endure cyclical thermal expansion, extreme monsoon turbulence, and massive dead loads. We construct every building component to pass non-destructive testing and decades of high-stress service.
          </p>
        </div>

        {/* 4 Circular Animated SVG Percentage Gauges (istlight skill values) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-20">
          {coreGauges.map((g) => {
            const strokeDashoffset = isVisible
              ? circumference - (circumference * g.percent) / 100
              : circumference;

            return (
              <div
                key={g.title}
                className="flex flex-col items-center justify-center space-y-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-400/40 transition-all duration-300 group"
              >
                {/* SVG Circle */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 128 128">
                    <circle
                      cx="64"
                      cy="64"
                      r={radius}
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="5"
                      fill="transparent"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r={radius}
                      stroke="#f59e0b"
                      strokeWidth="5"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors font-display">
                      {g.display}
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white font-display">
                    {g.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-white/50 tracking-wider font-mono">
                    {g.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Large Numerical Value Blocks (Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRECISION_BLOCKS.map((block) => (
            <div
              key={block.number}
              className="bg-[#10141d] rounded-2xl p-7 border border-white/10 hover:border-amber-400/50 hover:bg-[#141a26] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
                  {block.number}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                  {block.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {block.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono text-amber-400/90 font-semibold tracking-wider">
                {block.tolerance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
