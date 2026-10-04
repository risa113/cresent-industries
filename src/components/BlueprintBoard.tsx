import React, { useState } from 'react';
import { BLUEPRINT_DATA, BlueprintCallout } from '../data/mockData';

export interface BlueprintBoardProps {
  readonly onOpenCadModal?: () => void;
}

export const BlueprintBoard: React.FC<BlueprintBoardProps> = () => {
  const [activeCalloutId, setActiveCalloutId] = useState<string>(BLUEPRINT_DATA.callouts[0].id);

  const activeCallout =
    BLUEPRINT_DATA.callouts.find((c) => c.id === activeCalloutId) || BLUEPRINT_DATA.callouts[0];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-inverse-surface text-on-primary border-b border-outline-variant relative overflow-hidden"
      id="blueprint"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Board Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-tertiary pb-6 mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-primary-container shrink-0" />
              <span className="font-mono text-secondary-fixed tracking-wider sm:tracking-widest text-[10px] sm:text-xs uppercase font-semibold">
                {BLUEPRINT_DATA.subtitle}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-primary font-display tracking-tight">
              {BLUEPRINT_DATA.headline}
            </h2>
          </div>

          <div className="font-mono text-xs text-outline-variant space-y-1">
            <div className="text-[11px] sm:text-xs">{BLUEPRINT_DATA.scale}</div>
            <div className="text-primary-fixed font-semibold text-xs sm:text-sm">
              {BLUEPRINT_DATA.tag}
            </div>
          </div>
        </div>

        {/* Blueprint Visual Board */}
        <div className="border border-tertiary bg-on-background p-3 sm:p-4 lg:p-8 relative">
          {/* Framing CAD Crosshairs */}
          <div className="absolute top-2 left-2 text-outline-variant font-mono text-[9px] sm:text-xs">
            + GRID: A-01
          </div>
          <div className="absolute top-2 right-2 text-outline-variant font-mono text-[9px] sm:text-xs">
            + GRID: H-99
          </div>
          <div className="absolute bottom-2 left-2 text-outline-variant font-mono text-[9px] sm:text-xs hidden sm:block">
            + DATUM: 0.000
          </div>
          <div className="absolute bottom-2 right-2 text-outline-variant font-mono text-[9px] sm:text-xs hidden sm:block">
            + LOAD: 180 KM/H
          </div>

          {/* Central Structural Image */}
          <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full border border-tertiary/60 bg-black">
            <img
              className="w-full h-full object-cover opacity-75"
              alt="Authentic structural factory warehouse steel trusses and shed framing by Crescent Engineering"
              src={BLUEPRINT_DATA.image}
              loading="lazy"
              decoding="async"
            />

            {/* Desktop / Tablet Interactive Callout Pins */}
            {BLUEPRINT_DATA.callouts.map((callout: BlueprintCallout) => {
              const isActive = callout.id === activeCalloutId;
              return (
                <div
                  key={callout.id}
                  style={{
                    top: `${callout.yPercent}%`,
                    left: `${callout.xPercent}%`,
                  }}
                  onClick={() => setActiveCalloutId(callout.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-primary-container ring-4 ring-primary-container/50 scale-125'
                          : 'bg-primary ring-2 ring-primary/40 hover:scale-110'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>

                    {/* Desktop Hover Tooltip */}
                    <div
                      className={`hidden lg:block bg-inverse-surface/95 border ${
                        isActive ? 'border-primary-container ring-2 ring-primary-container/30' : 'border-outline/80'
                      } p-2.5 backdrop-blur-md shadow-xl text-left min-w-[200px] pointer-events-none transition-all`}
                    >
                      <span className="text-[10px] font-mono text-secondary-fixed block font-bold">
                        {callout.code}
                      </span>
                      <span className="text-xs font-mono text-on-primary font-semibold block">
                        {callout.title}
                      </span>
                      <span className="text-[10px] block text-outline-variant mt-0.5">
                        {callout.spec}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile / Responsive Callout Selector & Active Spec Card */}
          <div className="mt-4 pt-4 border-t border-tertiary">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-outline-variant">
              <span>SELECT ANNOTATION POINT:</span>
              <span className="text-secondary-fixed font-bold">TOUCH INTERACTIVE</span>
            </div>

            {/* Point Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {BLUEPRINT_DATA.callouts.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCalloutId(c.id)}
                  className={`px-2.5 py-2 text-left font-mono text-xs border transition-all ${
                    c.id === activeCalloutId
                      ? 'border-primary-container bg-primary-container/20 text-on-primary font-bold'
                      : 'border-tertiary bg-inverse-surface/50 text-outline-variant hover:text-on-primary hover:border-outline'
                  }`}
                >
                  <div className="text-[10px] text-secondary-fixed">{c.code.split(' // ')[0]}</div>
                  <div className="truncate font-semibold text-[11px] sm:text-xs">{c.title}</div>
                </button>
              ))}
            </div>

            {/* Active Point Detail Plate */}
            <div className="p-4 bg-inverse-surface border border-primary-container/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-mono text-secondary-fixed font-bold mb-0.5">
                  {activeCallout.code}
                </div>
                <div className="text-sm font-bold text-on-primary mb-1">
                  {activeCallout.title}
                </div>
                <div className="text-xs text-outline-variant leading-relaxed">
                  {activeCallout.description}
                </div>
              </div>
              <div className="sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-tertiary pt-2 sm:pt-0 sm:pl-4">
                <span className="text-[10px] font-mono text-outline-variant block">SPECIFICATION</span>
                <span className="text-xs font-mono text-primary-fixed font-bold">
                  {activeCallout.spec}
                </span>
              </div>
            </div>
          </div>

          {/* Technical Specs Sub-Panel */}
          <div className="mt-6 pt-6 border-t border-tertiary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono text-outline-variant">
            {BLUEPRINT_DATA.specs.map((s, idx) => (
              <div key={idx} className="border-l border-primary-container/40 pl-3">
                <span className="text-primary-fixed block mb-1 font-bold text-[11px]">
                  {s.label}:
                </span>
                <span className="text-on-primary text-xs">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
