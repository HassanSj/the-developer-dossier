import { X } from 'lucide-react';

export default function OnboardingTourCard({
  step,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onClose,
}) {
  const isLast = currentStep + 1 === totalSteps;

  return (
    <div
      className="
        relative w-[280px] sm:w-[300px]
        bg-[#140f0c] text-[#f3eee3]
        border border-[#f3eee3]/20
        rounded-[3px]
        shadow-[0_10px_28px_rgba(0,0,0,0.55)]
        font-serif tracking-wide
        transition-all duration-300 ease-in-out
      "
      role="dialog"
      aria-modal="true"
      aria-label="Onboarding tour"
    >
      <div className="flex items-start gap-3 px-4 pt-4 pb-2">
        <div className="h-8 w-8 flex items-center justify-center rounded-full border border-[#f3eee3]/25 bg-white/5 shadow-inner font-bold">
          <span className="text-sm">{step.icon}</span>
        </div>

        <div className="flex-1">
          <p className="text-[13px] leading-tight font-semibold uppercase">
            {step.title}
          </p>
          <p className="mt-0.5 text-[11px] font-mono tracking-wide text-[#f3eee3]/70">
            Step {currentStep + 1} / {totalSteps}
          </p>
        </div>

        <button
          onClick={() => onClose({ withConfetti: false })}
          aria-label="Close tour"
          className="cursor-pointer h-7 w-7 -mt-1 -mr-1 grid place-items-center opacity-60 hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="px-4 pb-4">
        <p className="text-[13px] leading-snug">{step.content}</p>
      </div>

      <div className="h-px w-full border-t border-dashed border-[#f3eee3]/25" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {currentStep !== 0 && (
            <button
              onClick={onPrev}
              className="
                w-full sm:w-auto h-9 px-4
                border border-[#f3eee3]/30 bg-transparent
                font-mono text-[11px] tracking-[0.16em] uppercase cursor-pointer
                hover:bg-white/5 hover:border-[#f3eee3]/55
                transition-colors
              "
            >
              ← BACK
            </button>
          )}
        </div>

        {!isLast ? (
          <button
            onClick={onNext}
            className="
              w-full sm:w-auto h-9 px-4
              border border-[#f3eee3]/30 bg-transparent
              font-mono text-[11px] tracking-[0.16em] uppercase cursor-pointer
              hover:bg-white/5 hover:border-[#f3eee3]/55
              transition-colors
            "
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => onClose({ withConfetti: true })}
            className="
              w-full sm:w-auto h-9 px-4
              border-2 border-[#f3eee3]/85 bg-transparent
              font-mono text-[11px] tracking-[0.16em] uppercase cursor-pointer
              hover:bg-white/10
              transition-colors
            "
          >
            <span className="inline-flex items-center justify-center gap-2">
              <span aria-hidden className="text-[12px]">
                🎉
              </span>
              FINISH
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

