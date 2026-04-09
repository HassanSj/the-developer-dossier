import { useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { FlashlightOff, Flashlight } from 'lucide-react';
import { useTorch } from '../context/TorchContext';

const SWITCH_ON =
  'https://res.cloudinary.com/dnpxalm5i/video/upload/gh-pages/public/sounds/switch-on.mp3';
const SWITCH_OFF =
  'https://res.cloudinary.com/dnpxalm5i/video/upload/gh-pages/public/sounds/switch-off.mp3';

function Torch({ className = '' }) {
  const buttonRef = useRef(null);
  const iconWrapRef = useRef(null);
  const audioRef = useRef(null);
  const { theme, setTheme, torchEnabled, setTorchEnabled, isDesktop } = useTorch();

  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  // Idle “tease” wobble on the icon when torch is off (original site behavior, desktop-ish)
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (torchEnabled) return undefined;

    let timeoutId;
    const schedule = () => {
      const delay = 3000 + Math.floor(Math.random() * 2000);
      timeoutId = window.setTimeout(() => {
        const el = iconWrapRef.current;
        if (el && !torchEnabled) {
          el.animate(
            [
              { transform: 'rotate(0deg) scale(1)', filter: 'drop-shadow(0 0 0 rgba(255,240,200,0))' },
              {
                transform: 'rotate(-14deg) scale(1.06)',
                offset: 0.2,
                filter: 'drop-shadow(0 0 6px rgba(255,240,200,0.65))',
              },
              { transform: 'rotate(10deg) scale(1.03)', offset: 0.4 },
              { transform: 'rotate(-6deg) scale(1.015)', offset: 0.6 },
              { transform: 'rotate(3deg) scale(1.005)', offset: 0.8 },
              {
                transform: 'rotate(0deg) scale(1)',
                offset: 1,
                filter: 'drop-shadow(0 0 0 rgba(255,240,200,0))',
              },
            ],
            { duration: 1200, easing: 'cubic-bezier(0.19, 1, 0.22, 1)' }
          );
        }
        schedule();
      }, delay);
    };

    if (isDesktop) schedule();
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [torchEnabled, isDesktop]);

  const playSwitchSound = (on) => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.pause();
      a.src = on ? SWITCH_ON : SWITCH_OFF;
      a.volume = 0.3;
      a.play().catch(() => {});
    } catch {
      /* ignore */
    }
  };

  const goDarkWithViewTransition = async () => {
    const el = buttonRef.current;
    if (!el) {
      setTheme('dark');
      return;
    }

    if (typeof document.startViewTransition !== 'function') {
      setTheme('dark');
      return;
    }

    await document
      .startViewTransition(() => {
        flushSync(() => setTheme('dark'));
      })
      .ready;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const maxR = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${maxR}px at ${cx}px ${cy}px)`],
      },
      { duration: 700, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
    );
  };

  const handleClick = async () => {
    if (theme !== 'dark') {
      await goDarkWithViewTransition();
    }

    const next = !torchEnabled;
    setTorchEnabled(next);
    playSwitchSound(next);
  };

  return (
    <button
      id="torch"
      ref={buttonRef}
      type="button"
      onClick={() => {
        void handleClick();
      }}
      className={`cursor-pointer p-2 text-foreground/80 hover:text-foreground transition-colors ${className}`}
      aria-label={torchEnabled ? 'Disable torch light' : 'Use torch to uncover hidden secrets.'}
      title={torchEnabled ? 'Disable torch light' : 'Use torch to uncover hidden secrets.'}
    >
      {torchEnabled ? (
        <Flashlight className="h-5 w-5" />
      ) : (
        <span ref={iconWrapRef} className="block will-change-transform">
          <FlashlightOff className="h-5 w-5" />
        </span>
      )}
    </button>
  );
}

export default Torch;
