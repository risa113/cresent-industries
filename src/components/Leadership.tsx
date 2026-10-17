import React from 'react';
import { LEADERS } from '../data/mockData';

export interface LeadershipProps {
  readonly onConsultClick?: () => void;
}

export const Leadership: React.FC<LeadershipProps> = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-50/70 text-slate-900 border-b border-slate-200 overflow-hidden" id="credentials">
      {/* Ghost Background Outline Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
        <span className="text-6xl sm:text-9xl font-black text-transparent tracking-widest stroke-ghost-text uppercase font-display">
          LEADERSHIP
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-14 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-amber-600 font-bold text-xs sm:text-sm">
              06 / LEADERSHIP CREDENTIALS
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase font-mono tracking-wider">
              GOVERNANCE &amp; DIRECTORS
            </span>
          </div>
          <span className="font-mono text-amber-600 text-xs font-semibold">
            STRUCTURAL MASTERY
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight mb-3">
            Engineering Expertise Behind Every Structure.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Guided by seasoned civil engineers with decades of hands-on structural design, finite element calculations, and fabrication shop superintendency.
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 space-y-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl shadow-xs transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-4 sm:gap-6 border-b border-slate-100 pb-6">
                  {leader.photo ? (
                    <div className="relative shrink-0">
                      <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-md bg-neutral-900">
                        <img
                          src={leader.photo}
                          alt={leader.imageAlt || leader.name}
                          className="w-full h-full object-cover object-top brightness-95"
                          loading="lazy"
                        />
                      </div>
                      <span className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 rounded-full p-1 shadow-md">
                        <span className="material-symbols-outlined text-[16px] block font-bold">
                          verified
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-500 shrink-0">
                      <span className="material-symbols-outlined text-3xl mb-1 text-amber-600">
                        {leader.icon}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                        LEADER
                      </span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-amber-700 tracking-wider uppercase font-bold mt-1">
                      {leader.role}
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-[10px] font-mono text-emerald-800 border border-emerald-300 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>ACTIVE BOARD EXECUTIVE</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                  {leader.bio}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-mono">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500 uppercase">EXPERTISE:</span>
                  <span className="text-slate-900 font-semibold sm:text-right">
                    {leader.expertise}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-2 border-t border-slate-100">
                  <span className="text-slate-500 uppercase">STANDARDS:</span>
                  <span className="text-amber-700 font-semibold sm:text-right">
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
