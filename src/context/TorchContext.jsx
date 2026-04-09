import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const TorchContext = createContext(undefined);

export function useTorch() {
  const ctx = useContext(TorchContext);
  if (!ctx) {
    throw new Error('useTorch must be used within a TorchProvider');
  }
  return ctx;
}

/**
 * Matches salaarkhan-dev.github.io: persists torch, clears when leaving dark mode,
 * tracks coarse "desktop" for optional UI hints.
 */
function readTorchStored() {
  try {
    return localStorage.getItem('torch-enabled') === 'true';
  } catch {
    return false;
  }
}

export function TorchProvider({ children, theme, setTheme }) {
  const [torchEnabled, setTorchEnabledState] = useState(readTorchStored);
  const [isDesktop, setIsDesktop] = useState(false);

  const setTorchEnabled = useCallback((enabled) => {
    setTorchEnabledState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('torch-enabled', String(enabled));
    }
  }, []);

  useEffect(() => {
    const updateDesktop = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const w = window.screen.width;
      setIsDesktop(!hasTouch || w >= 1024);
    };
    updateDesktop();
    window.addEventListener('resize', updateDesktop);
    return () => window.removeEventListener('resize', updateDesktop);
  }, []);

  useEffect(() => {
    if (theme !== 'dark' && torchEnabled) {
      setTorchEnabled(false);
    }
  }, [theme, torchEnabled, setTorchEnabled]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      torchEnabled,
      setTorchEnabled,
      isDesktop,
    }),
    [theme, setTheme, torchEnabled, setTorchEnabled, isDesktop]
  );

  return <TorchContext.Provider value={value}>{children}</TorchContext.Provider>;
}
