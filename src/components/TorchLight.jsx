import { useEffect, useState } from 'react';
import { useTorch } from '../context/TorchContext';

/**
 * Full-screen radial "flashlight" in dark mode when torch is on (same idea as original site).
 */
function TorchLight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hydrated, setHydrated] = useState(false);
  const { theme, torchEnabled } = useTorch();

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || theme !== 'dark' || !torchEnabled) return undefined;

    const onMove = (clientX, clientY) => {
      setPos({ x: clientX, y: clientY });
    };

    const onMouseMove = (e) => onMove(e.clientX, e.clientY);

    const onTouch = (e) => {
      if (e.touches?.length > 0) {
        const t = e.touches[0];
        onMove(t.clientX, t.clientY);
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('touchstart', onTouch, { passive: true });
    document.addEventListener('touchmove', onTouch, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchstart', onTouch);
      document.removeEventListener('touchmove', onTouch);
    };
  }, [hydrated, theme, torchEnabled]);

  if (!hydrated || theme !== 'dark' || !torchEnabled) {
    return null;
  }

  const { x, y } = pos;

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-[55] transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 400px at ${x}px ${y}px,
            transparent 0%,
            transparent 20%,
            rgba(0, 0, 0, 0.2) 35%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0.8) 70%,
            rgba(0, 0, 0, 0.95) 85%,
            rgba(0, 0, 0, 0.98) 100%)`,
        }}
        aria-hidden
      />
      <div
        className="fixed inset-0 pointer-events-none z-[54] transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 300px at ${x}px ${y}px,
            rgba(255, 220, 150, 0.06) 0%,
            rgba(255, 200, 120, 0.03) 60%,
            transparent 85%)`,
          mixBlendMode: 'screen',
        }}
        aria-hidden
      />
      <div
        className="fixed inset-0 pointer-events-none z-[53] transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 200px at ${x}px ${y}px,
            rgba(255, 235, 190, 0.1) 0%,
            rgba(255, 220, 160, 0.06) 50%,
            rgba(255, 200, 130, 0.02) 80%,
            transparent 90%)`,
          mixBlendMode: 'screen',
        }}
        aria-hidden
      />
      <div
        className="fixed inset-0 pointer-events-none z-[52] transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 100px at ${x}px ${y}px,
            rgba(255, 250, 220, 0.15) 0%,
            rgba(255, 245, 200, 0.1) 30%,
            rgba(255, 235, 180, 0.05) 60%,
            transparent 80%)`,
          mixBlendMode: 'screen',
        }}
        aria-hidden
      />
      <div
        className="fixed inset-0 pointer-events-none z-[51] transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 360px at ${x}px ${y}px,
            transparent 0%,
            transparent 80%,
            rgba(0, 0, 0, 0.1) 90%,
            rgba(0, 0, 0, 0.3) 100%)`,
        }}
        aria-hidden
      />
    </>
  );
}

export default TorchLight;
