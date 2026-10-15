import React, { useState } from 'react';

export interface PillNavItem {
  readonly id: string;
  readonly label: string;
  readonly href?: string;
  readonly onClick?: () => void;
  /** If true, renders as the black brand capsule from the screenshot */
  readonly isBrand?: boolean;
  /** Optional badge or counter */
  readonly badge?: string | number;
}

export interface PillHeaderProps {
  /** Optional custom navigation items. If not provided, defaults to the exact items from the screenshot */
  readonly items?: readonly PillNavItem[];
  /** Optional currently active item ID */
  readonly activeId?: string;
  /** Optional callback when an item is clicked */
  readonly onItemClick?: (item: PillNavItem) => void;
  /** Optional extra Tailwind CSS classes for the outer wrapper */
  readonly className?: string;
  /** Visual variant: 'standalone' (individual floating pills like the screenshot) or 'dock' (grouped in a subtle frosted capsule dock) */
  readonly variant?: 'standalone' | 'dock';
}

export const SCREENSHOT_SAMPLE_ITEMS: readonly PillNavItem[] = [
  { id: 'brand', label: 'sprlcl', isBrand: true },
  { id: 'lineup', label: 'Lineup', href: '#lineup' },
  { id: 'cronograma', label: 'Cronograma', href: '#cronograma' },
  { id: 'packs', label: 'Packs', href: '#packs' },
];

export const PillHeader: React.FC<PillHeaderProps> = ({
  items = SCREENSHOT_SAMPLE_ITEMS,
  activeId: controlledActiveId,
  onItemClick,
  className = '',
  variant = 'standalone',
}) => {
  const [internalActiveId, setInternalActiveId] = useState<string>('lineup');
  const activeId = controlledActiveId !== undefined ? controlledActiveId : internalActiveId;

  const handleClick = (e: React.MouseEvent, item: PillNavItem) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
    } else if (item.href && item.href.startsWith('#')) {
      const target = document.querySelector(item.href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setInternalActiveId(item.id);
    onItemClick?.(item);
  };

  return (
    <header
      className={`fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-auto select-none transition-all duration-300 ${className}`}
      role="banner"
      aria-label="Pill Header Navigation"
    >
      <nav
        className={`flex items-center gap-1.5 sm:gap-2 px-1.5 py-1 overflow-x-auto no-scrollbar scroll-smooth ${
          variant === 'dock'
            ? 'bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl'
            : ''
        }`}
        role="navigation"
        aria-label="Header Navigation"
      >
        {items.map((item) => {
          const isBrand = item.isBrand;
          const isActive = activeId === item.id && !isBrand;

          const baseClasses =
            'group relative inline-flex items-center justify-center shrink-0 rounded-full font-sans transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 select-none';

          if (isBrand) {
            return (
              <a
                key={item.id}
                href={item.href || '#'}
                onClick={(e) => handleClick(e, item)}
                className={`${baseClasses} bg-black hover:bg-neutral-900 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 border border-white/20`}
                title={item.label}
              >
                <span className="font-semibold tracking-tight text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse sm:hidden" />
                  {item.label}
                </span>
                {item.badge !== undefined && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-white/20 rounded-full font-mono">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href || '#'}
              onClick={(e) => handleClick(e, item)}
              className={`${baseClasses} ${
                isActive
                  ? 'bg-white text-black shadow-[0_4px_16px_rgba(0,0,0,0.2)] ring-2 ring-black/80 font-semibold'
                  : 'bg-white hover:bg-neutral-50 text-neutral-900 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-md'
              } text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 hover:scale-105 active:scale-95 border border-black/5 hover:border-black/10`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span className="ml-1.5 px-1.5 py-0.2 bg-black/10 text-black text-[10px] font-bold rounded-full">
                  {item.badge}
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default PillHeader;
