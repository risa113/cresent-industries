import React from 'react';
import { LEADERS } from '../data/mockData';

export interface LeadershipProps {
  readonly onConsultClick?: () => void;
}

export const Leadership: React.FC<LeadershipProps> = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#07090e] text-white border-b border-white/10 overflow-hidden" id="credentials">
      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          LEADERSHIP
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-14 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-amber-400 font-bold text-xs sm:text-sm">
              06 / LEADERSHIP CREDENTIALS
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-[10px] sm:text-xs font-semibold text-white/60 uppercase font-mono tracking-wider">
              GOVERNANCE &amp; DIRECTORS
            </span>
          </div>
          <span className="font-mono text-amber-400 text-xs font-semibold">
            STRUCTURAL MASTERY
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-3">
            Engineering Expertise Behind Every Structure.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Guided by seasoned civil engineers with decades of hands-on structural design, finite element calculations, and fabrication shop superintendency.
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl border border-white/10 bg-[#10141d] p-6 sm:p-10 space-y-6 flex flex-col justify-between hover:border-amber-400/50 hover:bg-[#141a26] transition-all duration-300 shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-4 sm:gap-6 border-b border-white/10 pb-6">
                  {leader.photo ? (
                    <div className="relative shrink-0">
                      <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-neutral-900">
                        <img
                          src={leader.photo}
                          alt={leader.imageAlt || leader.name}
                          className="w-full h-full object-cover object-top brightness-95"
                          loading="lazy"
                        />
                      </div>
                      <span className="absolute -bottom-2 -right-2 bg-amber-400 text-black rounded-full p-1 shadow-md">
                        <span className="material-symbols-outlined text-[16px] block">
                          verified
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center text-white/50 shrink-0">
                      <span className="material-symbols-outlined text-3xl mb-1 text-amber-400">
                        {leader.icon}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider uppercase">
                        LEADER
                      </span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-amber-400 tracking-wider uppercase font-semibold mt-1">
                      {leader.role}
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>ACTIVE BOARD EXECUTIVE</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed font-light">
                  {leader.bio}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-white/40 uppercase">EXPERTISE:</span>
                  <span className="text-white font-semibold sm:text-right">
                    {leader.expertise}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-2 border-t border-white/5">
                  <span className="text-white/40 uppercase">STANDARDS:</span>
                  <span className="text-amber-400 font-semibold sm:text-right">
                    {leader.credentials}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
