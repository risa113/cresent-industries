import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  basePath: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Determine Vite base path (e.g. '/cresent-industries/' or '/')
  const rawBase = import.meta.env.BASE_URL || '/';
  const basePath = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  const normalizePath = (pathname: string): string => {
    let p = pathname;
    if (basePath && p.startsWith(basePath)) {
      p = p.slice(basePath.length);
    }
    if (!p.startsWith('/')) {
      p = '/' + p;
    }
    // Remove trailing slash if not root
    if (p.length > 1 && p.endsWith('/')) {
      p = p.slice(0, -1);
    }
    return p;
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    // If it's an external link or anchor on current page
    if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.location.href = to;
      return;
    }

    if (to.startsWith('#')) {
      // If we are not on the homepage and an anchor is clicked, navigate home with hash
      if (currentPath !== '/') {
        const fullTarget = (basePath || '') + '/' + to;
        window.history.pushState({}, '', fullTarget);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(to);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(to);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const normalized = normalizePath(to);
    const destination = (basePath || '') + normalized;
    window.history.pushState({}, '', destination);
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, basePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
