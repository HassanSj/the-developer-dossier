import { Link } from 'react-router-dom';
import { Github, Linkedin, Feather } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 bg-background/90">
      <div className="max-w-4xl mx-auto px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm font-serif text-foreground/80">
              © 2025 The Chronicles of Hassan Sajjad
            </p>
            <p className="text-xs font-mono text-foreground/60 mt-1">
              Est. MMXIX • Volume V • All articles and investigations reserved
            </p>
            <p className="text-xs font-mono text-foreground/50 mt-1">
              <Link to="/legal/terms" className="hover:text-foreground/70 transition-colors underline">
                Publication Terms
              </Link>
              {' • '}Unauthorized reproduction strictly prohibited
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/salaarkhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
              title="Peruse my collection of digital artifices"
            >
              <span className="relative z-10">
                <Github className="h-5 w-5" />
              </span>
              <span className="sr-only">GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/salaarkhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
              title="Establish professional correspondence"
            >
              <span className="relative z-10">
                <Linkedin className="h-5 w-5" />
              </span>
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a
              href="mailto:salaarkhan.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Pigeon Post"
              title="Dispatch a missive via electronic post"
            >
              <span className="relative z-10">
                <Feather className="h-5 w-5" />
              </span>
              <span className="sr-only">Pigeon Post</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 text-center border-t border-foreground/10">
          <p className="text-xs font-serif italic text-foreground/70">
            "Where the quill meets the pixel, and tradition embraces innovation"
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

