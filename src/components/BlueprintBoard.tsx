import React, { useState } from 'react';
import { BLUEPRINT_DATA, BlueprintCallout, COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';

export interface BlueprintBoardProps {
  readonly onOpenCadModal?: () => void;
}

export const BlueprintBoard: React.FC<BlueprintBoardProps> = () => {
  const [activeCalloutId, setActiveCalloutId] = useState<string>(BLUEPRINT_DATA.callouts[0].id);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [fullscreenModalOpen, setFullscreenModalOpen] = useState<boolean>(false);
  const [modalZoom, setModalZoom] = useState<number>(1);

  const activeCallout =
    BLUEPRINT_DATA.callouts.find((c) => c.id === activeCalloutId) || BLUEPRINT_DATA.callouts[0];

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(2, Number((prev + 0.25).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(1, Number((prev - 0.25).toFixed(2))));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

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
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 uppercase tracking-wider font-semibold">
                ● ULTRA HD CLARITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-primary font-display tracking-tight">
              {BLUEPRINT_DATA.headline}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="font-mono text-xs text-outline-variant space-y-1">
              <div className="text-[11px] sm:text-xs">{BLUEPRINT_DATA.scale}</div>
              <div className="text-primary-fixed font-semibold text-xs sm:text-sm">
                {BLUEPRINT_DATA.tag}
              </div>
            </div>

            {/* Interactive Scalable Zoom Toolbar */}
            <div className="flex items-center gap-1.5 bg-on-background/80 border border-tertiary p-1 font-mono text-xs">
              <span className="text-[10px] text-outline px-1 hidden sm:inline">SCALE:</span>
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="w-7 h-7 flex items-center justify-center bg-inverse-surface border border-tertiary text-on-primary hover:border-primary-container disabled:opacity-40 disabled:hover:border-tertiary transition-colors"
                title="Zoom Out"
              >
                -
              </button>
              <span className="px-2 font-bold text-secondary-fixed min-w-[48px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2}
                className="w-7 h-7 flex items-center justify-center bg-inverse-surface border border-tertiary text-on-primary hover:border-primary-container disabled:opacity-40 disabled:hover:border-tertiary transition-colors"
                title="Zoom In"
              >
                +
              </button>
              {zoomLevel > 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="px-2 py-1 text-[10px] bg-tertiary/40 hover:bg-tertiary text-on-primary transition-colors"
                  title="Reset Scale"
                >
                  RESET
                </button>
              )}
              <button
                type="button"
                onClick={() => setFullscreenModalOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1 bg-primary-container hover:bg-primary text-on-primary text-[11px] font-semibold transition-colors ml-1"
                title="Fullscreen Ultra HD Inspector"
              >
                <span className="material-symbols-outlined text-[14px]">fullscreen</span>
                <span>INSPECT HD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Blueprint Visual Board */}
        <div className="border border-tertiary bg-on-background p-3 sm:p-4 lg:p-8 relative">
          {/* Framing CAD Crosshairs */}
          <div className="absolute top-2 left-2 text-outline-variant font-mono text-[9px] sm:text-xs">
            + GRID: A-01 // ULTRA HD 1920x1080
          </div>
          <div className="absolute top-2 right-2 text-outline-variant font-mono text-[9px] sm:text-xs">
            + GRID: H-99 // SHARPENED STEEL
          </div>
          <div className="absolute bottom-2 left-2 text-outline-variant font-mono text-[9px] sm:text-xs hidden sm:block">
            + DATUM: 0.000 // STRUCTURAL SPEC
          </div>
          <div className="absolute bottom-2 right-2 text-outline-variant font-mono text-[9px] sm:text-xs hidden sm:block">
            + LOAD: 180 KM/H GUST RESISTANT
          </div>

          {/* Central Structural Image Viewport */}
          <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full border border-tertiary/80 bg-neutral-950 group">
            <div
              className="w-full h-full transition-transform duration-300 ease-out origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                className="w-full h-full object-cover sm:object-contain md:object-cover"
                alt="Ultra clear high-resolution structural steel truss and PEB clear-span architecture by Crescent Engineering"
                src={BLUEPRINT_DATA.image}
                loading="lazy"
                decoding="async"
              />
            </div>

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
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-primary-container ring-4 ring-primary-container/60 scale-125'
                          : 'bg-primary ring-2 ring-primary/40 hover:scale-110 shadow-lg'
                      }`}
                    >
                      <span className="w-2 h-2 bg-white rounded-full" />
                    </span>

                    {/* Desktop Hover Tooltip */}
                    <div
                      className={`hidden lg:block bg-inverse-surface/95 border ${
                        isActive ? 'border-primary-container ring-2 ring-primary-container/30' : 'border-outline/80'
                      } p-2.5 backdrop-blur-md shadow-2xl text-left min-w-[210px] pointer-events-none transition-all`}
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

      {/* Fullscreen Ultra HD Scalable Architectural Inspector Modal */}
      {fullscreenModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md">
          <div
            className="fixed inset-0"
            onClick={() => setFullscreenModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-6xl max-h-[96vh] bg-surface-container-lowest border border-primary-container shadow-2xl flex flex-col overflow-hidden text-on-surface">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-outline-variant bg-surface">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase text-on-surface">
                  ARCHITECTURAL BLUEPRINT // ULTRA HD 100% SCALE INSPECTOR
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold uppercase">
                  SHARPENED REAL SITE WORK
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Modal Scale Controls */}
                <div className="flex items-center gap-1 font-mono text-xs bg-surface-container-low border border-outline-variant p-0.5">
                  <button
                    type="button"
                    onClick={() => setModalZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                    disabled={modalZoom <= 1}
                    className="w-6 h-6 flex items-center justify-center border border-outline-variant disabled:opacity-30"
                  >
                    -
                  </button>
                  <span className="px-2 font-bold text-primary min-w-[42px] text-center">
                    {Math.round(modalZoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setModalZoom((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))))}
                    disabled={modalZoom >= 2.5}
                    className="w-6 h-6 flex items-center justify-center border border-outline-variant disabled:opacity-30"
                  >
                    +
                  </button>
                  {modalZoom > 1 && (
                    <button
                      type="button"
                      onClick={() => setModalZoom(1)}
                      className="px-2 py-0.5 text-[10px] bg-outline-variant text-on-surface"
                    >
                      RESET
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setFullscreenModalOpen(false)}
                  className="p-1.5 text-outline hover:text-on-surface transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* Scrollable / Zoomable High-Res Canvas */}
            <div className="flex-1 overflow-auto bg-neutral-950 p-4 sm:p-6 flex items-center justify-center relative min-h-[50vh]">
              <div
                className="transition-transform duration-200 ease-out origin-center max-w-full"
                style={{ transform: `scale(${modalZoom})` }}
              >
                <img
                  src={BLUEPRINT_DATA.image}
                  alt="High definition steel rafter and roof truss structural framing"
                  className="max-h-[75vh] w-auto mx-auto object-contain border border-tertiary shadow-2xl"
                />
              </div>
            </div>

            {/* Modal Bottom Metadata & Action Bar */}
            <div className="px-4 sm:px-6 py-3 border-t border-outline-variant bg-surface flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono">
              <div className="text-tertiary">
                SPEC: <span className="text-on-surface font-semibold">TAPERED I-BEAM &amp; RIGID PURLIN MATRIX</span> • IS 800:2007 COMPLIANT
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(
                    COMPANY_CONTACT.whatsapp1Clean,
                    'Hello Crescent Engineering, I inspected your Ultra HD architectural blueprint warehouse structure and would like technical quotes.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold uppercase text-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 01-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24h-.02zm-3.55 4.39c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.15 1.49.09.45-.07 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.39-.69-1.61-.77c-.22-.08-.37-.12-.53.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.28-.73-1.75c-.19-.46-.39-.4-.53-.41l-.45-.01z"/>
                  </svg>
                  <span>Inquire via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setFullscreenModalOpen(false)}
                  className="px-4 py-2 border border-outline-variant hover:border-on-surface text-tertiary"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
