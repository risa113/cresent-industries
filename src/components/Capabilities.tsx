import React, { useState } from 'react';
import { CAPABILITIES, CapabilityItem } from '../data/mockData';

export interface CapabilitiesProps {
  readonly onSelectCad: (item: CapabilityItem) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCad }) => {
  const [filter, setFilter] = useState<'ALL' | 'PEB' | 'ROOFING' | 'SPECIALTY'>('ALL');

  const filteredItems = CAPABILITIES.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'PEB') return item.id === 'peb' || item.id === 'steel-fab' || item.id === 'steel-bridges' || item.id === 'conversion';
    if (filter === 'ROOFING') return item.id === 'colour-coated' || item.id === 'upvc' || item.id === 'polycarbonate' || item.id === 'stone-coated';
    if (filter === 'SPECIALTY') return item.id === 'tensile' || item.id === 'puff-panel' || item.id === 'cold-storage';
    return true;
  });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant" id="capabilities">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-6 mb-8 sm:mb-12 gap-4">
          <div>
            <span className="font-mono text-primary font-bold text-xs sm:text-sm block mb-1">
              02 / ENGINEERING CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface font-display tracking-tight">
              Complete Structural &amp; Roofing Solutions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tertiary max-w-md">
            Eleven specialized structural fabrication categories delivering turn-key civil integrity from computer-aided structural design to on-site robotic crane erection.
          </p>
        </div>

        {/* Responsive Quick Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono cad-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            type="button"
            onClick={() => setFilter('ALL')}
            className={`px-3.5 py-1.5 whitespace-nowrap transition-colors uppercase ${
              filter === 'ALL'
                ? 'bg-on-background text-on-primary font-bold'
                : 'border border-outline-variant hover:border-on-background text-tertiary'
            }`}
          >
            All Categories (11)
          </button>
          <button
            type="button"
            onClick={() => setFilter('PEB')}
            className={`px-3.5 py-1.5 whitespace-nowrap transition-colors uppercase ${
              filter === 'PEB'
                ? 'bg-on-background text-on-primary font-bold'
                : 'border border-outline-variant hover:border-on-background text-tertiary'
            }`}
          >
            PEB &amp; Steel Structures (4)
          </button>
          <button
            type="button"
            onClick={() => setFilter('ROOFING')}
            className={`px-3.5 py-1.5 whitespace-nowrap transition-colors uppercase ${
              filter === 'ROOFING'
                ? 'bg-on-background text-on-primary font-bold'
                : 'border border-outline-variant hover:border-on-background text-tertiary'
            }`}
          >
            Industrial Roofing (4)
          </button>
          <button
            type="button"
            onClick={() => setFilter('SPECIALTY')}
            className={`px-3.5 py-1.5 whitespace-nowrap transition-colors uppercase ${
              filter === 'SPECIALTY'
                ? 'bg-on-background text-on-primary font-bold'
                : 'border border-outline-variant hover:border-on-background text-tertiary'
            }`}
          >
            Tensile &amp; Cold Storage (3)
          </button>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 relative flex flex-col justify-between hover:border-primary-container hover:shadow-lg transition-all group"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-primary font-bold text-lg">
                    {item.number}
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-2xl">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors font-headline-sm">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-outline-variant flex justify-between items-center text-xs font-mono text-tertiary">
                <span className="truncate pr-2">{item.metric}</span>
                <button
                  type="button"
                  onClick={() => onSelectCad(item)}
                  className="text-primary font-semibold hover:text-primary-container shrink-0 flex items-center gap-1 focus:outline-none"
                >
                  <span>VIEW CAD</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
