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
                <div className="flex justify-between items-start border-b border-outline-variant pb-4 sm:pb-6 gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline-md">
                      {leader.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-primary tracking-wider uppercase font-semibold mt-1">
                      {leader.role}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-outline text-2xl sm:text-3xl shrink-0">
                    {leader.icon}
                  </span>
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
