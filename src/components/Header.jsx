import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Moon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import VinylPlayer from './VinylPlayer';
import Torch from './Torch';

function Header({ toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const paperRustleRef = useRef(null);

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
      if (isMenuOpen && !e.target.closest('nav') && !e.target.closest('button[aria-label="Toggle menu"]')) {
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

  return (
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
          {/* <Link
            to="/lifestyle"
            onClick={handleNavLinkClick}
            className="text-xs sm:text-sm md:text-base font-serif transition-colors text-foreground/70 hover:text-foreground hover:underline"
          >
           LifeStyle
          </Link> */}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="z-50 flex items-center">
            <VinylPlayer />
          </div>

          <Torch />

          <button
            onClick={toggleTheme}
            className="cursor-pointer p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            <Moon className="h-5 w-5 text-foreground" />
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

      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/95 border-t border-foreground/10 shadow-lg">
          <div className="max-w-5xl mx-auto px-8 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#front-page"
                onClick={(e) => handleScrollToSection('front-page', e)}
                className="text-sm font-serif text-foreground/70 hover:text-foreground transition-colors"
              >
                Front Page
              </a>
              <a
                href="#career-ledger"
                onClick={(e) => handleScrollToSection('career-ledger', e)}
                className="text-sm font-serif text-foreground/70 hover:text-foreground transition-colors"
              >
                Career
              </a>
              <Link
                to="/cases"
                onClick={handleNavLinkClick}
                className="text-sm font-serif text-foreground/70 hover:text-foreground transition-colors"
              >
                Cases
              </Link>
              <a
                href="#endorsements"
                onClick={(e) => handleScrollToSection('endorsements', e)}
                className="text-sm font-serif text-foreground/70 hover:text-foreground transition-colors"
              >
                Endorsements
              </a>
              <a
                href="#correspondence"
                onClick={(e) => handleScrollToSection('correspondence', e)}
                className="text-sm font-serif text-foreground/70 hover:text-foreground transition-colors"
              >
                Correspondence
              </a>
              <Link
                to="/press"
                onClick={handleNavLinkClick}
                className="text-sm font-serif text-foreground/70 hover:text-foreground transition-colors"
              >
                Press
              </Link>
              {/* <Link
                to="/lifestyle"
                onClick={handleNavLinkClick}
                className="text-sm font-serif text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="font-serif">Lifestyle</span>
              </Link> */}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;

