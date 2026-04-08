import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { useOnboardingTour } from './OnboardingTourContext';
import OnboardingTourCard from './OnboardingTourCard';

export default function OnboardingTour() {
  const location = useLocation();
  const { steps, isOpen, currentStep, start, close, next, prev } = useOnboardingTour();

  const step = useMemo(() => steps[currentStep], [steps, currentStep]);
  const [spotlight, setSpotlight] = useState(null);
  const [cardPos, setCardPos] = useState({ top: 80, left: null, right: 32 });

  useEffect(() => {
    // Show only once per browser (first visit).
    try {
      if (!localStorage.getItem('onboard_seen')) start();
    } catch {
      // if storage blocked, still show once per session
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Close the tour if route changes (keeps experience predictable).
    if (isOpen) close({ withConfetti: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen || !step?.targetId) return;

    const update = () => {
      const el = document.getElementById(step.targetId);
      if (!el) {
        setSpotlight(null);
        setCardPos({ top: 80, left: null, right: 32 });
        return;
      }

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      setSpotlight({ cx, cy, rect });

      // Prefer to place the card just below the target, aligned right-ish.
      const top = Math.min(Math.max(rect.bottom + 14, 70), window.innerHeight - 260);
      const desiredLeft = Math.min(
        Math.max(cx - 250, 16),
        Math.max(16, window.innerWidth - 16 - 260),
      );

      setCardPos({ top, left: desiredLeft, right: null });
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
    };
  }, [isOpen, step]);

  if (!isOpen || !step) return null;
  if (typeof document === 'undefined') return null;

  const spotlightRadius = Math.max(
    42,
    spotlight ? Math.max(spotlight.rect.width, spotlight.rect.height) * 0.85 : 60,
  );

  return createPortal(
    <div className="fixed inset-0 z-[1000]">
      <button
        type="button"
        aria-label="Close onboarding tour"
        onClick={() => close({ withConfetti: false })}
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
          ...(spotlight
            ? {
                WebkitMaskImage: `radial-gradient(circle ${spotlightRadius}px at ${spotlight.cx}px ${spotlight.cy}px, transparent 0, transparent 65%, black 72%)`,
                maskImage: `radial-gradient(circle ${spotlightRadius}px at ${spotlight.cx}px ${spotlight.cy}px, transparent 0, transparent 65%, black 72%)`,
              }
            : {}),
        }}
      />

      {spotlight && (
        <div
          className="absolute pointer-events-none z-[1001]"
          style={{
            left: spotlight.rect.left - 8,
            top: spotlight.rect.top - 8,
            width: spotlight.rect.width + 16,
            height: spotlight.rect.height + 16,
            borderRadius: 9999,
            boxShadow:
              '0 0 0 2px rgba(245,241,232,0.65), 0 0 18px rgba(245,241,232,0.25)',
          }}
        />
      )}

      <div
        className="absolute z-[1002]"
        style={{
          top: cardPos.top,
          left: cardPos.left ?? undefined,
          right: cardPos.right ?? undefined,
        }}
      >
        <OnboardingTourCard
          step={step}
          currentStep={currentStep}
          totalSteps={steps.length}
          onNext={next}
          onPrev={prev}
          onClose={close}
        />
      </div>
    </div>,
    document.body,
  );
}

