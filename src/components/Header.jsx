import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import VinylPlayer from './VinylPlayer';
import Torch from './Torch';
import { useTorch } from '../context/TorchContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const paperRustleRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const themeBtnRef = useRef(null);
  const { theme, setTheme } = useTorch();

  // Initialize paper rustle sound
  useEffect(() => {
    paperRustleRef.current = new Audio('/music/paper-rustle.mp3');
    paperRustleRef.current.volume = 0.5; // Set volume to 50%

    return () => {
      if (paperRustleRef.current) {
        paperRustleRef.current = null;
      }
    };
  }, []);

  // Play paper rustle sound
  const playPaperRustle = () => {
    if (paperRustleRef.current) {
      // Reset audio to start and play
      paperRustleRef.current.currentTime = 0;
      paperRustleRef.current.play().catch((error) => {
        // Silently handle autoplay restrictions
        console.log('Paper rustle sound play failed:', error);
      });
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle smooth scroll to section
  const handleScrollToSection = (sectionId, e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    playPaperRustle();

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 300);
    } else {
      // We're already on home page, just scroll
      scrollToElement(sectionId);
    }
  };

  // Handle navigation link clicks
  const handleNavLinkClick = () => {
    playPaperRustle();
    setIsMenuOpen(false);
  };

  const scrollToElement = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('button[aria-label="Toggle menu"]')
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const toggleThemeWithTransition = async () => {
    const next = theme === 'dark' ? 'light' : 'dark';

    const btn = themeBtnRef.current;
    const canTransition = typeof document !== 'undefined' && typeof document.startViewTransition === 'function' && btn;

    if (!canTransition) {
      setTheme(next);
      return;
    }

    await document
      .startViewTransition(() => {
        flushSync(() => setTheme(next));
      })
      .ready;

    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const maxR = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );

    document.documentElement.animate(
      { clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${maxR}px at ${cx}px ${cy}px)`] },
      { duration: 700, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 px-8 bg-transparent backdrop-blur-sm">
        <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
          <Link to="/" className="text-xl sm:text-2xl font-semibold text-foreground font-serif">
            Hassan Sajjad.
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <a
              href="#front-page"
              onClick={(e) => handleScrollToSection('front-page', e)}
              className="text-xs sm:text-sm md:text-base font-serif transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Front Page
            </a>
            <a
              href="#career-ledger"
              onClick={(e) => handleScrollToSection('career-ledger', e)}
              className="text-xs sm:text-sm md:text-base font-serif transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Career
            </a>
            <Link
              to="/cases"
              onClick={handleNavLinkClick}
              className="text-xs sm:text-sm md:text-base font-serif transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Cases
            </Link>
            <a
              href="#endorsements"
              onClick={(e) => handleScrollToSection('endorsements', e)}
              className="text-xs sm:text-sm md:text-base font-serif transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Endorsements
            </a>
            <a
              href="#correspondence"
              onClick={(e) => handleScrollToSection('correspondence', e)}
              className="text-xs sm:text-sm md:text-base font-serif transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Correspondence
            </a>
            <Link
              to="/press"
              onClick={handleNavLinkClick}
              className="text-xs sm:text-sm md:text-base font-serif transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Press
            </Link>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="z-50 flex items-center">
              <VinylPlayer />
            </div>

            <Torch />

            <button
              ref={themeBtnRef}
              onClick={() => {
                void toggleThemeWithTransition();
              }}
              className="cursor-pointer p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground/80" />
              ) : (
                <Moon className="h-5 w-5 text-foreground/80" />
              )}
            </button>

            <button
              className="lg:hidden cursor-pointer p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] overflow-hidden mobile-menu-overlay">
          <div
            ref={mobileMenuRef}
            className="h-screen w-screen flex flex-col items-center justify-center space-y-6 relative"
            aria-label="Mobile menu"
          >
            <button
              type="button"
              className="cursor-pointer absolute top-4 right-10 p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <a
              href="#front-page"
              onClick={(e) => handleScrollToSection('front-page', e)}
              className="cursor-pointer text-2xl font-serif py-2 transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Front Page
            </a>
            <a
              href="#career-ledger"
              onClick={(e) => handleScrollToSection('career-ledger', e)}
              className="cursor-pointer text-2xl font-serif py-2 transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Career
            </a>
            <Link
              to="/cases"
              onClick={handleNavLinkClick}
              className="cursor-pointer text-2xl font-serif py-2 transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Cases
            </Link>
            <a
              href="#endorsements"
              onClick={(e) => handleScrollToSection('endorsements', e)}
              className="cursor-pointer text-2xl font-serif py-2 transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Endorsements
            </a>
            <a
              href="#correspondence"
              onClick={(e) => handleScrollToSection('correspondence', e)}
              className="cursor-pointer text-2xl font-serif py-2 transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Correspondence
            </a>
            <Link
              to="/press"
              onClick={handleNavLinkClick}
              className="cursor-pointer text-2xl font-serif py-2 transition-colors text-foreground/70 hover:text-foreground hover:underline"
            >
              Press
            </Link>

            <div className="flex items-center gap-6 mt-4">
              <div className="scale-125">
                <Torch />
              </div>
              <button
                onClick={() => {
                  void toggleThemeWithTransition();
                }}
                className="scale-125 cursor-pointer p-2 text-foreground/80 hover:text-foreground flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-foreground/80" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground/80" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

