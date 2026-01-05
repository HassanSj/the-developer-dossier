import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function FlashDownload({ 
  children, 
  messages, 
  toastDurationMs = 5000, 
  interceptLinkNavigation = false,
  navigateDelayMs = 600 
}) {
  const [showFlash, setShowFlash] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Headquarters notified 🚨');
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const audioRef = useRef(null);

  const defaultMessages = [
    "Headquarters notified 🚨",
    "Intruder detected — securing dossier 🚨",
    "Unauthorized extraction attempt logged 🔒",
    "HQ alert: file pull flagged as suspicious 🛡️",
    "Perimeter breached — dispatch notified 📞",
    "Classified document access recorded 📄️"
  ];

  const messageList = messages && messages.length > 0 ? messages : defaultMessages;

  useEffect(() => {
    setIsMounted(true);
    audioRef.current = new Audio('/music/flash.mp3');
    
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => {
      observer.disconnect();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const triggerFlash = () => {
    // Play sound
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0.2;
        audioRef.current.volume = 0.7;
        audioRef.current.play().catch((error) => {
          console.error('Error playing flash sound', error);
        });
      }
    } catch (error) {
      console.error('Error playing flash sound', error);
    }

    // Set random message
    setToastMessage(messageList[Math.floor(Math.random() * messageList.length)]);
    
    // Show flash
    setShowFlash(true);
    setShowToast(true);
    
    setTimeout(() => {
      setShowFlash(false);
      setShowAfter(true);
    }, 300);
    
    setTimeout(() => {
      setShowAfter(false);
    }, 1800);
    
    setTimeout(() => {
      setShowToast(false);
    }, toastDurationMs);
  };

  const handleClick = (e) => {
    if (interceptLinkNavigation) {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href) {
        e.preventDefault();
        triggerFlash();
        
        const href = anchor.href;
        const target = anchor.target;
        const hasDownload = anchor.hasAttribute('download');
        const downloadName = anchor.download;
        
        window.setTimeout(() => {
          try {
            if (hasDownload) {
              const link = document.createElement('a');
              link.href = href;
              if (downloadName) {
                link.download = downloadName;
              }
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else {
              if (target === '_blank') {
                window.open(href, '_blank');
              } else {
                window.location.assign(href);
              }
            }
          } catch (error) {
            if (hasDownload) {
              const link = document.createElement('a');
              link.href = href;
              if (downloadName) {
                link.download = downloadName;
              }
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else {
              window.location.href = href;
            }
          }
        }, navigateDelayMs);
        return;
      }
    }
    triggerFlash();
  };

  return (
    <>
      <div onClick={handleClick} className="inline-flex">
        {children}
      </div>
      {isMounted && createPortal(
        <>
          {showFlash && (
            <div className="fixed inset-0 bg-white opacity-100 animate-flash z-[9999]" />
          )}
          {showAfter && (
            <div className={`fixed inset-0 z-[9998] opacity-100 animate-after ${
              isDark
                ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(0,0,0,0.85)_100%)]'
                : 'bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_45%,rgba(0,0,0,0.35)_100%)]'
            }`} />
          )}
          {showToast && (
            <div className="fixed top-20 right-2 bg-foreground text-background px-4 py-2 rounded shadow-lg font-mono text-sm animate-fade-in z-[10000]">
              {toastMessage}
            </div>
          )}
        </>,
        document.body
      )}
    </>
  );
}

export default FlashDownload;

