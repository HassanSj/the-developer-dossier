import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { onboardingSteps } from './onboardingSteps';

const OnboardingTourContext = createContext(null);

export function OnboardingTourProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = onboardingSteps;

  const start = useCallback(() => {
    setCurrentStep(0);
    setIsOpen(true);
  }, []);

  const close = useCallback((options = {}) => {
    const { withConfetti = false } = options;
    try {
      localStorage.setItem('onboard_seen', '1');
      sessionStorage.setItem('onboard_just_closed', '1');
    } catch {
      // ignore storage failures (private mode / blocked)
    }
    setIsOpen(false);

    if (withConfetti) {
      // Match original: big centered burst.
      confetti({
        particleCount: 180,
        spread: 120,
        startVelocity: 45,
        ticks: 280,
        scalar: 1,
        origin: { x: 0.5, y: 0.5 },
        zIndex: 2147483647,
      });
    }
  }, []);

  const next = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  }, [steps.length]);

  const prev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  const value = useMemo(
    () => ({
      steps,
      isOpen,
      currentStep,
      start,
      close,
      next,
      prev,
    }),
    [steps, isOpen, currentStep, start, close, next, prev],
  );

  return (
    <OnboardingTourContext.Provider value={value}>
      {children}
    </OnboardingTourContext.Provider>
  );
}

export function useOnboardingTour() {
  const ctx = useContext(OnboardingTourContext);
  if (!ctx) throw new Error('useOnboardingTour must be used within OnboardingTourProvider');
  return ctx;
}

