import React from 'react';
import { LEADERS } from '../data/mockData';

export interface LeadershipProps {
  readonly onConsultClick?: () => void;
}

export const Leadership: React.FC<LeadershipProps> = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant" id="credentials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-outline-variant pb-4 mb-10 sm:mb-16 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-primary font-bold text-xs sm:text-sm">
              06 / LEADERSHIP CREDENTIALS
            </span>
            <span className="text-outline-variant hidden sm:inline">|</span>
            <span className="text-[10px] sm:text-xs font-semibold text-on-surface-variant uppercase font-label-caps tracking-wider">
              GOVERNANCE &amp; DIRECTORS
            </span>
          </div>
          <span className="font-mono text-outline text-[11px] sm:text-xs">
            STRUCTURAL MASTERY
          </span>
        </div>

        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface font-display tracking-tight mb-3 sm:mb-4">
            Engineering Expertise Behind Every Structure.
          </h2>
          <p className="text-sm sm:text-base text-tertiary leading-relaxed">
            Guided by seasoned civil engineers with decades of hands-on structural design, finite element calculations, and fabrication shop superintendency.
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 flex flex-col justify-between hover:border-primary-container transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4 sm:gap-5 border-b border-outline-variant pb-5 sm:pb-6">
                  {leader.photo ? (
                    <div className="relative shrink-0">
                      <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border-2 border-primary-container shadow-md bg-surface-container">
                        <img
                          src={leader.photo}
                          alt={leader.imageAlt || leader.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <span className="absolute -bottom-2 -right-2 bg-primary text-on-primary rounded-full p-1 shadow">
                        <span className="material-symbols-outlined text-[16px] block">
                          verified
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg border border-dashed border-outline-variant/80 bg-surface-container-high/40 flex flex-col items-center justify-center text-outline shrink-0">
                      <span className="material-symbols-outlined text-3xl mb-1 text-primary">
                        {leader.icon}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-outline">
                        LEADERSHIP
                      </span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline-md tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-primary tracking-wider uppercase font-semibold mt-1">
                      {leader.role}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-mono text-on-surface-variant border border-outline-variant/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>ACTIVE BOARD EXECUTIVE</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-outline-variant text-xs font-mono text-tertiary">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-outline uppercase text-[10px] sm:text-xs">EXPERTISE:</span>
                  <span className="text-on-surface font-semibold sm:text-right">
                    {leader.expertise}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-1 border-t border-outline-variant/40">
                  <span className="text-outline uppercase text-[10px] sm:text-xs">STANDARDS:</span>
                  <span className="text-on-surface font-semibold sm:text-right">
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
