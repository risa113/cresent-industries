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
              FOUNDER &amp; LEADERSHIP
            </span>
          </div>
          <span className="font-mono text-amber-600 text-xs font-semibold">
            STRUCTURAL MASTERY
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight mb-3">
            Engineering Expertise Behind Every Structure.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Guided by Er. K. Mohamed with over 35 years of hands-on structural design, civil engineering execution, and fabrication superintendency.
          </p>
        </div>

        {/* Leadership Profile */}
        <div className="max-w-4xl mx-auto w-full">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 md:p-12 space-y-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl shadow-xs transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 border-b border-slate-100 pb-6 sm:pb-8">
                  {leader.photo ? (
                    <div className="relative shrink-0 mx-auto sm:mx-0">
                      <div className="w-24 h-28 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-md bg-neutral-900">
                        <img
                          src={leader.photo}
                          alt={leader.imageAlt || leader.name}
                          className="w-full h-full object-cover object-top brightness-95"
                          loading="eager"
                        />
                      </div>
                      <span className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 rounded-full p-1.5 shadow-md">
                        <span className="material-symbols-outlined text-[18px] block font-bold">
                          verified
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className="w-24 h-28 sm:w-32 sm:h-36 rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-500 shrink-0 mx-auto sm:mx-0">
                      <span className="material-symbols-outlined text-3xl mb-1 text-amber-600">
                        {leader.icon}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                        LEADER
                      </span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0 text-center sm:text-left space-y-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-amber-700 tracking-wider uppercase font-bold">
                      {leader.role}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[10px] sm:text-[11px] font-mono text-emerald-800 border border-emerald-300 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>ACTIVE FOUNDER &amp; CHIEF CONSULTANT</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
                  {leader.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100 text-xs sm:text-sm font-mono">
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 space-y-1">
                  <span className="text-slate-500 uppercase text-[11px] font-semibold block">EXPERTISE:</span>
                  <span className="text-slate-950 font-bold block">
                    {leader.expertise}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-1">
                  <span className="text-amber-800 uppercase text-[11px] font-semibold block">STANDARDS:</span>
                  <span className="text-amber-950 font-bold block">
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
