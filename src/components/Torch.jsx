import { useState, useEffect, useRef } from 'react';
import { FlashlightOff, Flashlight } from 'lucide-react';

function Torch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const overlayRef = useRef(null);
  const switchSoundRef = useRef(null);

  // Initialize switch sound
  useEffect(() => {
    switchSoundRef.current = new Audio('/music/switch.mp3');
    switchSoundRef.current.volume = 0.5; // Set volume to 50%
    
    return () => {
      if (switchSoundRef.current) {
        switchSoundRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.body.classList.remove('torch-cursor');
      if (overlayRef.current) {
        overlayRef.current.remove();
      }
      return;
    }

    // Add torch cursor class
    document.body.classList.add('torch-cursor');

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'torch-overlay';
    overlay.ref = overlayRef;
    overlayRef.current = overlay;
    document.body.appendChild(overlay);

    const updateTorchPosition = (e) => {
      if (overlay) {
        overlay.style.setProperty('--torch-x', `${e.clientX}px`);
        overlay.style.setProperty('--torch-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', updateTorchPosition);
    window.addEventListener('touchmove', (e) => {
      if (e.touches[0]) {
        updateTorchPosition(e.touches[0]);
      }
    });

    return () => {
      window.removeEventListener('mousemove', updateTorchPosition);
      window.removeEventListener('touchmove', updateTorchPosition);
      document.body.classList.remove('torch-cursor');
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    };
  }, [isEnabled]);

  // Play switch sound
  const playSwitchSound = () => {
    if (switchSoundRef.current) {
      // Reset audio to start and play
      switchSoundRef.current.currentTime = 0;
      switchSoundRef.current.play().catch((error) => {
        // Silently handle autoplay restrictions
        console.log('Switch sound play failed:', error);
      });
    }
  };

  const toggleTorch = () => {
    playSwitchSound();
    setIsEnabled(!isEnabled);
  };

  return (
    <button
      id="torch"
      onClick={toggleTorch}
      className="cursor-pointer p-2 text-foreground/80 hover:text-foreground transition-colors"
      aria-label="Use torch to uncover hidden secrets."
      title="Use torch to uncover hidden secrets."
    >
      <span className="block will-change-transform">
        {isEnabled ? (
          <Flashlight className="h-5 w-5" />
        ) : (
          <FlashlightOff className="h-5 w-5" />
        )}
      </span>
    </button>
  );
}

export default Torch;

