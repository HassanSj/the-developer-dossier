import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Feather, Linkedin, Map, ChevronRight, Download } from 'lucide-react';
import FlashDownload from '../components/FlashDownload';

function Home() {
  const testimonials = [
    {
      name: "Areeb Ali",
      role: "Project Partner at CSV",
      date: "Jan 10, 2023",
      linkedin: "https://www.linkedin.com/in/areeblogic",
      quote: "Hassan and I spent countless nights debugging by the glow of our monitors, turning coffee into code. His ability to see patterns in chaos turned our most challenging projects into success stories. The way he approaches problems is like watching a master clockmaker at work - precise, patient, and always with an elegant..."
    },
    {
      name: "Ahsan Abbasi",
      role: "Project Manager at CSV",
      date: "Sep 4, 2025",
      linkedin: "",
      quote: "Hassan worked at SecurePoint 360 from April 23 thru September 25. During his tenure: (a) he was dedicated to his role, with a good work ethic, (b) used the opportunity to learn from his peers and mature his skillset, (c) he has strong people skills and got along well with all team members, and (d) he was exposed to all..."
    },
    {
      name: "Zain Raza Shah",
      role: "Project Partner at CSV",
      date: "Aug 28, 2022",
      quote: "In my years of leading engineering teams, I've met few developers with Hassan's blend of technical depth and creative problem-solving. He doesn't just write code; he crafts digital experiences. His work on our core systems was like finding the perfect gear in a complex mechanism - suddenly everything ran smoother."
    },
    {
      name: "Ahmed Hammad",
      role: "Project Partner at CSV",
      date: "Oct 15, 2022",
      linkedin: "",
      quote: "Working under Hassan's leadership was like having a front-row seat to a masterclass in software craftsmanship. He taught me that good code isn't just about making computers understand - it's about creating something that outlasts trends. His code reviews were legendary, always leaving us better developers than we were..."
    },
    {
      name: "Qaiser Shammim Ali",
      role: "Cheif Operating Officer",
      date: "Aug 27, 2025",
      linkedin: "",
      quote: "I have had the distinct privilege of working alongside Hassan Sajjad, and I can state with utmost conviction that he stands among the finest professionals and craftsmen of code in our modern age. Each engagement with him was not merely a task at hand but a true collaboration—spirited, engaging, and often delightfully ins..."
    },
  ];

  // Button animation states
  const buttonOptions = [
    { label: "Schedule an Interview", hover: "Your story, my column — let's put the facts on record." },
    { label: "Book a Front-Page Meeting", hover: "Hot off the press: 20 minutes to headline your idea." },
    { label: "Reserve a Column in My Time", hover: "Ink your slot before the presses roll." }
  ];
  
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonFading, setIsButtonFading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || isButtonHovered) return;
    
    const interval = setInterval(() => {
      setIsButtonFading(true);
      setTimeout(() => {
        setCurrentButtonIndex((prev) => (prev + 1) % buttonOptions.length);
        setTimeout(() => {
          setIsButtonFading(false);
        }, 150);
      }, 150);
    }, 7000);

    return () => clearInterval(interval);
  }, [isButtonHovered, buttonOptions.length]);

  const currentButton = buttonOptions[currentButtonIndex];

  return (
    <div className='space-y-20'>
      {/* Hero Section - THE DEVELOPER TIMES */}
      <section id="front-page" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Portfolio Chronicle • Est. 2000 • Volume V
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-4">
            DEVELOPER DOSSIER
          </h1>
          <div className="text-xs text-muted-foreground mt-2 italic font-serif">
            "MVPs to SaaS • Full‑Stack Product Engineering"
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Image & Buttons */}
          <div className="md:col-span-1">
            <div className="border-1 border-foreground p-2 bg-background">
              <div className="w-full aspect-square flex items-center justify-center">
                <div className="text-4xl text-muted-foreground">
                  <div style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                    <img
                      alt="Hassan Sajjad"
                      width="500"
                      height="500"
                      decoding="async"
                      className="object-cover grayscale-[60%] sepia-[20%] contrast-110 brightness-90"
                      style={{ color: 'transparent' }}
                      srcSet="/images/profile.jpg"
                      src="/images/profile.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="text-xs text-center mt-2 font-serif italic">
                Hassan Sajjad, Senior Software Engineer
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex justify-center mt-3">
              <div 
                className="group text-center"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <div className="mb-3">
                  <a aria-label="Hire Me — Start Today" href="#correspondence">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center py-3 font-serif text-sm tracking-wider uppercase transition-all duration-200 relative bg-foreground text-background hover:bg-foreground/90 cursor-pointer group px-5"
                    >
                      <span className="inline-flex items-center gap-2">Hire Me — Start Today</span>
                    </button>
                  </a>
                  <div className="mt-1 text-[10px] sm:text-xs text-muted-foreground font-sans">
                    Prefer a marketplace?{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Upwork Profile"
                      className="underline underline-offset-2 hover:no-underline"
                      href="https://www.upwork.com/freelancers/~01251776e4f919ef9b"
                    >
                      Upwork profile
                    </a>.
                  </div>
                </div>
                <a
                  aria-label={currentButton.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://calendly.com/sajjadhassa389/quick-case-check-in"
                >
                  <button
                    type="button"
                    className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase relative cursor-pointer group px-4 py-2 border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className={`transition-opacity duration-300 ${isButtonFading ? 'opacity-0' : 'opacity-100'}`}>
                        {currentButton.label}
                      </span>
                    </span>
                  </button>
                </a>
                <div className="mt-2 text-[10px] sm:text-xs text-muted-foreground font-sans italic opacity-100 transition-opacity duration-200">
                  {currentButton.hover}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-serif text-foreground leading-tight mb-2">
                Elevating Web Experiences: 5 Years of Innovation and Optimization
              </h1>
              <div className="text-sm text-muted-foreground font-serif italic mb-4">
                Full-Stack Engineering | Performance Optimization | Scalable Architecture
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed font-serif">
              <p className="text-foreground font-serif text-sm leading-relaxed relative text-justify">
                <span className="float-left mr-2 text-7xl font-bold text-foreground font-serif leading-none" style={{ lineHeight: '0.75' }}>H</span>
                <span className="relative">assan Sajjad, a seasoned full‑stack engineer and product builder, delivers end‑to‑end outcomes: from idea to MVP to scalable SaaS. Over five years, he has modernized legacy systems, boosted application speeds by up to 30%, and shipped production‑grade features that move the business needle.</span>
              </p>
              <p className="text-muted-foreground font-sans text-justify">
                With expertise in modern web technologies including React, Next.js, Nest.js, and Django, to architect and deliver high‑performance products — from discovery and scoping, to sprinted MVPs, to hardening for production SaaS. The approach blends clean code, performance tuning, and product thinking.
              </p>
            </div>

            {/* Mobile Buttons */}
            <div className="flex md:hidden justify-center mt-4">
              <div 
                className="group text-center"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <div className="mb-3">
                  <a aria-label="Hire Me — Start Today" href="#correspondence">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center py-3 font-serif text-sm tracking-wider uppercase transition-all duration-200 relative bg-foreground text-background hover:bg-foreground/90 cursor-pointer group px-5"
                    >
                      <span className="inline-flex items-center gap-2">Hire Me — Start Today</span>
                    </button>
                  </a>
                  <div className="mt-1 text-[10px] sm:text-xs text-muted-foreground font-sans">
                    Prefer a marketplace?{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Upwork Profile"
                      className="underline underline-offset-2 hover:no-underline"
                      href="https://www.upwork.com/freelancers/~01f6970c21dd6784e1?mp_source=share"
                    >
                      Upwork profile
                    </a>.
                  </div>
                </div>
                <a
                  aria-label={currentButton.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://calendly.com/sajjadhassa389/quick-case-check-in"
                >
                  <button
                    type="button"
                    className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase relative cursor-pointer group px-4 py-2 border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className={`transition-opacity duration-300 ${isButtonFading ? 'opacity-0' : 'opacity-100'}`}>
                        {currentButton.label}
                      </span>
                    </span>
                  </button>
                </a>
                <div className="mt-2 text-[10px] sm:text-xs text-muted-foreground font-sans italic opacity-100 transition-opacity duration-200">
                  {currentButton.hover}
                </div>
              </div>
            </div>

            {/* Career Highlights */}
            <div className="border border-foreground p-4 bg-muted/20">
              <div className="text-xs uppercase tracking-wider font-bold mb-3 text-center font-serif">
                Career Highlights
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold font-serif">5+</div>
                  <div className="text-[0.65rem] sm:text-xs md:text-sm uppercase font-sans tracking-wide mt-1">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold font-serif">30%</div>
                  <div className="text-[0.65rem] sm:text-xs md:text-sm uppercase font-sans tracking-wide mt-1">
                    Performance Boost
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold font-serif">25%</div>
                  <div className="text-[0.65rem] sm:text-xs md:text-sm uppercase font-sans tracking-wide mt-1">
                    Faster Load Times
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Dossier */}
            <div className="mt-10 relative">
              <div className="absolute inset-0 border-2 border-foreground/10 -z-10 pointer-events-none"></div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 sm:px-4 bg-background text-xs uppercase tracking-widest font-serif whitespace-nowrap">
                Professional Dossier
              </div>
              <div className="p-6 md:p-8 text-center">
                <h2 className="text-lg font-serif font-bold mb-3">OFFICIAL CURRICULUM VITAE</h2>
                <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
                  For your perusal, I present my professional credentials and accomplishments in an official capacity.
                </p>
                <div className="relative">
                  <FlashDownload interceptLinkNavigation={true} navigateDelayMs={3000}>
                    <div className="relative inline-block group">
                      <div className="absolute -bottom-1 -right-1 w-full h-full border-r border-b border-foreground/20 group-hover:border-foreground/40 transition-all duration-300 -z-10"></div>
                      <a
                        href="/resume/HassanResume.pdf"
                        download="Hassan Sajjad - FullStack Engineer - Resume.pdf"
                        className="relative z-10 inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group bg-background/95 px-8 py-3 border-foreground/30 group-hover:bg-foreground/5 transition-all duration-300"
                      >
                        <span className="inline-flex items-center gap-2">
                          <span className="mr-2">REQUEST ACCESS</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </FlashDownload>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic font-serif">
                  <span className="inline-block border-t border-foreground/10 pt-2">
                    Archive Ref. No. 2025-08 • Classification: Public Release
                  </span>
                </p>
              </div>
            </div>

            {/* Technical Arsenal */}
            <section className="mt-6 sm:mt-8 font-serif text-sm sm:text-[0.85rem] text-foreground tracking-wide leading-relaxed relative overflow-hidden px-4 sm:px-0">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center">
                <hr className="flex-grow border-t border-foreground max-w-[40px] sm:max-w-none" />
                <h3 className="uppercase text-[0.65rem] sm:text-xs font-sans tracking-widest px-2 whitespace-nowrap">
                  Technical Arsenal
                </h3>
                <hr className="flex-grow border-t border-foreground max-w-[40px] sm:max-w-none" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 relative z-0">
                <div className="pr-2 sm:pr-6 border-r border-foreground/30 mb-4 sm:mb-0">
                  <h4 className="uppercase text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest mb-1 sm:mb-2 border-b border-foreground/60 pb-1 border-dashed">
                    Frontend
                  </h4>
                  <ul className="list-none space-y-1 sm:space-y-1.5 tracking-[0.02em]">
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">React</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Next.js</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">TypeScript</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
                <div className="pr-2 sm:pr-6 mb-4 sm:mb-0">
                  <h4 className="uppercase text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest mb-1 sm:mb-2 border-b border-foreground/60 pb-1 border-dashed">
                    Backend
                  </h4>
                  <ul className="list-none space-y-1 sm:space-y-1.5 tracking-[0.02em]">
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Node.js</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">NestJS</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Payload CMS</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Django</span>
                    </li>
                  </ul>
                </div>
                <div className="pr-2 sm:pr-6 border-r border-foreground/30">
                  <h4 className="uppercase text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest mb-1 sm:mb-2 border-b border-foreground/60 pb-1 border-dashed">
                    Database
                  </h4>
                  <ul className="list-none space-y-1 sm:space-y-1.5 tracking-[0.02em]">
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">PostgreSQL</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">NeonDB</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">MongoDB</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Redis</span>
                    </li>
                  </ul>
                </div>
                <div className="pr-2 sm:pr-6">
                  <h4 className="uppercase text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest mb-1 sm:mb-2 border-b border-foreground/60 pb-1 border-dashed">
                    DevOps
                  </h4>
                  <ul className="list-none space-y-1 sm:space-y-1.5 tracking-[0.02em]">
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Vercel</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">Docker</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">AWS</span>
                    </li>
                    <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.15rem] before:text-foreground before:text-[0.7rem] sm:before:text-[0.8rem] before:content-['◊']">
                      <span className="text-[0.8rem] sm:text-[0.85rem]">GitHub Actions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
          <span>CODE</span>
        </div>
      </section>

      {/* Career Chronicle Section */}
      <section id="career-ledger" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Professional Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground tracking-tight">
            CAREER CHRONICLE
          </h2>
          <div className="text-xs text-muted-foreground mt-2 italic font-serif">
            "From Code to Craft: A Timeline of Technical Excellence"
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 h-full border-l border-foreground border-dotted opacity-50" style={{ borderWidth: '1px' }}></div>

          <div className="space-y-8">

            {/* Cybersoft Vantage */}
            <div className="relative pl-12 md:pl-0 md:pr-8">
              <div className="md:hidden absolute left-3.5 md:left-[calc(50%-6px)] w-3 h-3 bg-foreground rotate-45 opacity-70 border border-background -mt-1.5 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute left-0 md:left-1/2 -ml-10 -mt-2 w-24 text-center font-serif tracking-widest text-[0.7rem] text-foreground border border-foreground/30 bg-background/90 px-2 py-1">
                Jan 2023 - Dec 2023
              </div>
              <div className="bg-background/90 border border-foreground/20 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 font-serif">
                  Associate Software Engineer
                </h4>
                <p className="text-xs sm:text-sm italic text-muted-foreground mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-foreground/20 font-serif">
                  <a
                    href="https://www.cybersoftvantage.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 text-muted-foreground hover:decoration-solid"
                  >
                    Cybersoft Vantage, Islamabad, Pakistan
                  </a>
                </p>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed font-sans text-foreground/75">
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Created website layouts and user interfaces using HTML, CSS, SCSS, Bootstrap, Tailwind, Styled Components, Material UI, Semantic UI, and Ant Design.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Utilized Git for version control, ensuring that changes were tracked and reviewed using Bitbucket and other platforms such as GitHub and GitLab.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Managed project tasks and timelines using Asana and ClickUp, collaborating with cross-functional teams to deliver features and enhancements in an agile environment.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Implemented MERN stack solutions (MongoDB, Express.js, React/Next.js, Node.js/Next.js) and used PostgreSQL with TypeORM and Prisma to build scalable, maintainable backends.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Developed single-page applications (SPAs) using the React framework and utilized Redux, React Hooks, and Context API for robust state management and improved user experience.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Conducted unit tests for the application using Jest and worked with CI/CD pipelines using CircleCI and Jenkins to ensure reliable releases.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Integrated data from various back-end services and databases and designed REST calls to improve user interface performance.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Introduced agile methodologies and development best practices to the division to enhance product development.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Developed web platform backends using Node.js and Django frameworks and authored Python and JavaScript code within the Django framework.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Built APIs and data clients to consume APIs and worked with back-end developers to design and refine API contracts.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Utilized Node.js, ORMs, and SQL/NoSQL databases to develop and manage scalable data layers.
                  </li>
                </ul>
              </div>
            </div>

            {/* Triomatic Solutions */}
            <div className="relative pl-12 md:pl-0 md:ml-1/2 md:pl-8">
              <div className="md:hidden absolute left-3.5 md:left-[calc(50%-6px)] w-3 h-3 bg-foreground rotate-45 opacity-70 border border-background -mt-1.5 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute left-0 md:left-1/2 -ml-10 -mt-2 w-24 text-center font-serif tracking-widest text-[0.7rem] text-foreground border border-foreground/30 bg-background/90 px-2 py-1">
                Apr 2021 - Mar 2023
              </div>
              <div className="bg-background/90 border border-foreground/20 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 font-serif">
                  Full Stack Engineer
                </h4>
                <p className="text-xs sm:text-sm italic text-muted-foreground mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-foreground/20 font-serif">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 text-muted-foreground hover:decoration-solid"
                  >
                    Triomatic Solutions • Remote
                  </a>
                </p>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed font-sans text-foreground/75">
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Developed a fully functional admin dashboard using Next.js and React.js, improving data visualization and reporting capabilities.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Integrated OCR functionalities into the platform using Flask APIs, allowing users to extract text from images and PDFs.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Hosted the platform on AWS, leveraging EC2 instances, S3 buckets, and RDS to ensure high availability, scalability, and security.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Utilized PostgreSQL to store and manage data, ensuring data consistency and integrity throughout the platform.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Implemented containerization using Docker, simplifying deployment and ensuring consistency across environments.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Conducted load testing and performance optimization to ensure the platform met response time requirements and handled concurrent users.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Collaborated with cross-functional teams of developers, designers, and project managers to deliver features and enhancements in an agile development environment.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Implemented version control using Git, enabling easy tracking of changes and collaboration with team members.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Provided technical guidance and mentorship to junior team members, sharing best practices and promoting knowledge sharing.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Maintained up-to-date knowledge of industry trends and emerging technologies, continually improving the platform and development process.
                  </li>
                </ul>
              </div>
            </div>

            {/* Synergy-IT */}
            <div className="relative pl-12 md:pl-0 md:pr-8">
              <div className="md:hidden absolute left-3.5 md:left-[calc(50%-6px)] w-3 h-3 bg-foreground rotate-45 opacity-70 border border-background -mt-1.5 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute left-0 md:left-1/2 -ml-10 -mt-2 w-24 text-center font-serif tracking-widest text-[0.7rem] text-foreground border border-foreground/30 bg-background/90 px-2 py-1">
                Oct 2022 - Feb 2023
              </div>
              <div className="bg-background/90 border border-foreground/20 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 font-serif">
                  Trainee (.NET)
                </h4>
                <p className="text-xs sm:text-sm italic text-muted-foreground mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-foreground/20 font-serif">
                  <a
                    href="https://www.synergy-it.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 text-muted-foreground hover:decoration-solid"
                  >
                    Synergy-IT
                  </a>
                </p>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed font-sans text-foreground/75">
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Completed a rigorous 6-month bootcamp specializing in C#, .NET, Entity Framework, and LINQ, gaining a comprehensive understanding of the .NET ecosystem.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Mastered C# programming language fundamentals and advanced concepts, building a solid foundation for .NET application development.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Developed robust and efficient applications utilizing the .NET framework, demonstrating proficiency in building scalable solutions.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Acquired in-depth knowledge of Entity Framework for data access and manipulation, enabling streamlined database interactions within applications.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Gained expertise in LINQ (Language Integrated Query), crafting powerful and expressive queries for efficient data retrieval and management.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Enhanced problem-solving and software development skills through intensive practical exercises and real-world project simulations, preparing for professional software development roles.
                  </li>
                </ul>
              </div>
            </div>

            {/* Luqon IT Solutions and Marketing */}
            <div className="relative pl-12 md:pl-0 md:ml-1/2 md:pl-8">
              <div className="md:hidden absolute left-3.5 md:left-[calc(50%-6px)] w-3 h-3 bg-foreground rotate-45 opacity-70 border border-background -mt-1.5 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute left-0 md:left-1/2 -ml-10 -mt-2 w-24 text-center font-serif tracking-widest text-[0.7rem] text-foreground border border-foreground/30 bg-background/90 px-2 py-1">
                May 2022 - Dec 2022
              </div>
              <div className="bg-background/90 border border-foreground/20 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 font-serif">
                  Development Intern
                </h4>
                <p className="text-xs sm:text-sm italic text-muted-foreground mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-foreground/20 font-serif">
                  <span>Luqon IT Solutions and Marketing</span>
                </p>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed font-sans text-foreground/75">
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Developed and redesigned application frontends in Bootstrap with Material Design.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Built responsive UIs for desktop, tablet, and mobile devices.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Ensured high-performance user interfaces on both mobile and desktop.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Coordinated with back-end developers in the process of building RESTful APIs.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Wrote code to communicate with external web services (Web APIs).
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Coded tested, idiomatic, and documented JavaScript, HTML, and CSS, ensuring cross-browser compatibility.
                  </li>
                </ul>
              </div>
            </div>

            {/* British Council */}
            <div className="relative pl-12 md:pl-0 md:pr-8">
              <div className="md:hidden absolute left-3.5 md:left-[calc(50%-6px)] w-3 h-3 bg-foreground rotate-45 opacity-70 border border-background -mt-1.5 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute left-0 md:left-1/2 -ml-10 -mt-2 w-24 text-center font-serif tracking-widest text-[0.7rem] text-foreground border border-foreground/30 bg-background/90 px-2 py-1">
                May 2019 - Sep 2019
              </div>
              <div className="bg-background/90 border border-foreground/20 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 font-serif">
                  Engineering Intern
                </h4>
                <p className="text-xs sm:text-sm italic text-muted-foreground mb-1 font-serif">
                  <span>British Council</span>
                </p>
              </div>
            </div>

            {/* Upwork */}
            <div className="relative pl-12 md:pl-0 md:ml-1/2 md:pl-8">
              <div className="md:hidden absolute left-3.5 md:left-[calc(50%-6px)] w-3 h-3 bg-foreground rotate-45 opacity-70 border border-background -mt-1.5 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute left-0 md:left-1/2 -ml-10 -mt-2 w-24 text-center font-serif tracking-widest text-[0.7rem] text-foreground border border-foreground/30 bg-background/90 px-2 py-1">
                Sep 2022 - Present
              </div>
              <div className="bg-background/90 border border-foreground/20 p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 font-serif">
                  Full Stack Developer
                </h4>
                <p className="text-xs sm:text-sm italic text-muted-foreground mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-foreground/20 font-serif">
                  <span>Upwork • Remote</span>
                </p>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed font-sans text-foreground/75">
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Successfully completed multiple projects with five-star ratings, demonstrating proficiency in React.js, Next.js, and AWS.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Developed fully functional admin dashboards using React.js and Next.js, enabling users to browse and manage team members and subscriptions.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Delivered an education-based project integrating multiple APIs and databases, leveraging React.js to provide a seamless user experience and improved data visualization and reporting.
                  </li>
                  <li className="relative pl-4 sm:pl-5 before:absolute before:left-0 before:top-[0.25rem] sm:before:top-[0.3rem] before:text-foreground before:text-[0.6rem] sm:before:text-[0.7rem] before:content-['❖']">
                    Collaborated with cross-functional teams of designers, developers, and project managers to deliver projects in an agile development environment.
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center transition-all duration-200 relative border border-foreground/30 bg-background/90 hover:bg-foreground/5 cursor-pointer group text-xs sm:text-sm font-serif tracking-widest uppercase px-6 py-2"
            >
              <span className="inline-flex items-center gap-2">Show more</span>
            </button>
          </div>
        </div>

        <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
          <span>LEDGR</span>
        </div>
      </section>

      {/* CASE FILES Section */}
      <section id="case-files" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6 max-w-3xl mx-auto px-4 sm:px-6 relative">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Investigation Bureau • Est. 2019 • Volume IV
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
            CASE FILES & DIGITAL INVESTIGATIONS
          </h3>
          <div className="text-xs text-muted-foreground mt-2 italic font-serif">
            "Select dossiers from my archive of solved mysteries, coded conspiracies, and digital breakthroughs."
          </div>
          <div className="uppercase absolute -top-10 -right-2 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
            <span>CASES</span>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:50s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused] animate-marquee flex-row">
              {/* The SP360 Case */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(2deg)' }}>
                          <img
                            alt="The SP360 Case"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/case-placeholder.jpg"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                          />
                          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                            <div className="relative">
                              <span
                                className="relative text-black font-serif uppercase text-center block font-medium text-4xl tracking-[0.10em]"
                                style={{
                                  opacity: 0.88,
                                  mixBlendMode: 'multiply',
                                  filter: 'blur(0.35px) contrast(1)',
                                  textShadow: '1px 1px 0 rgba(0,0,0,0.3), 0 0 2px rgba(0,0,0,0.18), 0 1.5px 2px rgba(0,0,0,0.15), -0.6px -0.6px 0 rgba(255,255,255,0.12)',
                                  letterSpacing: '0.10em'
                                }}
                              >
                                The SP360 Case
                              </span>
                            </div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-20 brightness-95 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        The SP360 Case
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #001 • <span className="inline-block">File Ref: ███████████</span> • 2023
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/1">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              {/* The Developer Times */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(-2deg)' }}>
                          <img
                            alt="The Developer Times"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/cases/2/hero.jpg"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-90 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        The Developer Times
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #002 • <span className="inline-block">File Ref: ███████████</span> • 2025
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/2">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              {/* The Feyra Case */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(-1deg)' }}>
                          <img
                            alt="The Feyra Case"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/press/from-the-future/banner.jpg"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-90 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        The Feyra Case
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #003 • <span className="inline-block">File Ref: ███████████</span> • 2025
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/3">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              {/* The TapQ Case */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(0deg)' }}>
                          <img
                            alt="The TapQ Case"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/case-placeholder.jpg"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                          />
                          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                            <div className="relative">
                              <span
                                className="relative text-black font-serif uppercase text-center block font-medium text-4xl tracking-[0.10em]"
                                style={{
                                  opacity: 0.88,
                                  mixBlendMode: 'multiply',
                                  filter: 'blur(0.35px) contrast(1)',
                                  textShadow: '1px 1px 0 rgba(0,0,0,0.3), 0 0 2px rgba(0,0,0,0.18), 0 1.5px 2px rgba(0,0,0,0.15), -0.6px -0.6px 0 rgba(255,255,255,0.12)',
                                  letterSpacing: '0.10em'
                                }}
                              >
                                The TapQ Case
                              </span>
                            </div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-20 brightness-95 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        The TapQ Case
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #004 • <span className="inline-block">File Ref: ███████████</span> • 2025
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/4">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused] animate-marquee flex-row">
              {/* The SP360 Case - Duplicate */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(2deg)' }}>
                          <img
                            alt="The SP360 Case"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/case-placeholder.jpg"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767300775/developer-dossier/images/powerforge_pm52iw.png"
                          />
                          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                            <div className="relative">
                              <span
                                className="relative text-black font-serif uppercase text-center block font-medium text-4xl tracking-[0.10em]"
                                style={{
                                  opacity: 0.88,
                                  mixBlendMode: 'multiply',
                                  filter: 'blur(0.35px) contrast(1)',
                                  textShadow: '1px 1px 0 rgba(0,0,0,0.3), 0 0 2px rgba(0,0,0,0.18), 0 1.5px 2px rgba(0,0,0,0.15), -0.6px -0.6px 0 rgba(255,255,255,0.12)',
                                  letterSpacing: '0.10em'
                                }}
                              >
                               PowerForge
                              </span>
                            </div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-20 brightness-95 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        PowerForge
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #001 • <span className="inline-block">File Ref: ███████████</span> • 2023
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/3">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              {/* The Developer Times - Duplicate */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(-2deg)' }}>
                          <img
                            alt="Developer Dossier"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767301372/developer-dossier/images/dossier_alyl7k.png"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-90 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        Developer Dossier
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #002 • <span className="inline-block">File Ref: ███████████</span> • 2025
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/2">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              {/* The Feyra Case - Duplicate */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(-1deg)' }}>
                          <img
                            alt="ProtoGenix"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767302010/developer-dossier/images/protogenix_zlgsbe.png"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-90 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        ProtoGenix
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #003 • <span className="inline-block">File Ref: ███████████</span> • 2025
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/3">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              {/* The TapQ Case - Duplicate */}
              <div className="mx-2 w-[320px] max-w-[85vw]">
                <article className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="relative h-52">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-52 overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full" style={{ transform: 'rotate(0deg)' }}>
                          <img
                            alt="ChatPulse"
                            loading="lazy"
                            className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0 w-full h-full"
                            src="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767301727/developer-dossier/images/chat-pulse_x3x.png"
                          />
                          <img
                            alt="noise"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                          />
                          
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                              alt="classified stamp"
                              loading="lazy"
                              width="240"
                              height="240"
                              className="opacity-20 brightness-95 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]"
                              style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                              srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                              src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                            />
                          </div>
                          {/* Corner borders */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-100 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-200 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600 opacity-70 scale-90 transition-all duration-500 ease-out delay-300 group-hover/card:opacity-100 group-hover/card:scale-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg tracking-wide uppercase text-foreground">
                        ChatPulse
                      </h3>
                      <p className="text-xs font-mono text-foreground/70 mt-1">
                        Case #004 • <span className="inline-block">File Ref: ███████████</span> • 2025
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link to="/cases/4">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                              Inspect Case
                              <ChevronRight className="w-4 h-4 ml-2 transform" />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-3 md:w-16 lg:w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent transition-all duration-300"></div>
          <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-3 md:w-16 lg:w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent transition-all duration-300"></div>
        </div>

        <div className="mt-12 text-center">
          <div className="relative inline-block group">
            <div className="absolute -bottom-1 -right-1 w-full h-full border-r border-b border-foreground/20 group-hover:border-foreground/40 transition-all duration-300 -z-10"></div>
            <Link to="/cases">
              <button
                type="button"
                className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative bg-background/95 px-8 py-6 border-foreground/30 group-hover:bg-foreground/5 transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider">
                    <span>View All Cases</span>
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>
              </button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">Click any case card to inspect the dossier</p>
        </div>
      </section>

      {/* ENDORSEMENTS Section */}
      <section id="endorsements" className="py-12 relative mx-auto">
        <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6 max-w-3xl mx-auto px-4 sm:px-6 relative">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Dispatches of Praise • Volume III
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
            ENDORSEMENTS & ACCOLADES
          </h3>
          <div className="text-xs text-muted-foreground mt-2 italic font-serif">
            "In the Words of Those Who've Borne Witness to my Craft"
          </div>
          <div className="uppercase absolute -top-10 -right-2 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
            <span>PRAISE</span>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            {/* First marquee - First 3 testimonials */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused] animate-marquee flex-row">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <article
                  key={index}
                  className="bg-background border border-foreground/30 shadow-sm max-w-xs md:max-w-sm p-6 font-serif flex flex-col hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <header className="mb-4 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold leading-tight">{testimonial.name}</h4>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                      <button
                        className="cursor-pointer group flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-serif bg-foreground/5 hover:bg-foreground/10 rounded-full transition-all border border-foreground/20 hover:border-foreground/30 whitespace-nowrap text-foreground/80 hover:text-foreground"
                        title="Read testimonial letter"
                      >
                        <Feather className="w-3 h-3 flex-shrink-0" />
                        <span>Read Letter</span>
                      </button>
                    </div>
                    <time className="block mt-1 text-[11px] text-muted-foreground italic">{testimonial.date}</time>
                    {testimonial.linkedin && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-foreground/80 hover:text-foreground underline decoration-dotted underline-offset-4 transition-colors font-serif"
                        title="View professional reference"
                        href={testimonial.linkedin}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn Directory
                      </a>
                    )}
                  </header>
                  <blockquote className="relative border-l-2 border-foreground/20 pl-4 italic text-sm leading-relaxed text-foreground/90 overflow-hidden">
                    <div className="relative">
                      "{testimonial.quote}"
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                    </div>
                  </blockquote>
                </article>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused] animate-marquee flex-row">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <article
                  key={`dup-${index}`}
                  className="bg-background border border-foreground/30 shadow-sm max-w-xs md:max-w-sm p-6 font-serif flex flex-col hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <header className="mb-4 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold leading-tight">{testimonial.name}</h4>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                      <button
                        className="cursor-pointer group flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-serif bg-foreground/5 hover:bg-foreground/10 rounded-full transition-all border border-foreground/20 hover:border-foreground/30 whitespace-nowrap text-foreground/80 hover:text-foreground"
                        title="Read testimonial letter"
                      >
                        <Feather className="w-3 h-3 flex-shrink-0" />
                        <span>Read Letter</span>
                      </button>
                    </div>
                    <time className="block mt-1 text-[11px] text-muted-foreground italic">{testimonial.date}</time>
                    {testimonial.linkedin && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-foreground/80 hover:text-foreground underline decoration-dotted underline-offset-4 transition-colors font-serif"
                        title="View professional reference"
                        href={testimonial.linkedin}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn Directory
                      </a>
                    )}
                  </header>
                  <blockquote className="relative border-l-2 border-foreground/20 pl-4 italic text-sm leading-relaxed text-foreground/90 overflow-hidden">
                    <div className="relative">
                      "{testimonial.quote}"
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                    </div>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
          {/* Second marquee - Last 3 testimonials, reverse direction, hidden on mobile */}
          <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s] hidden sm:flex">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused] animate-marquee flex-row [animation-direction:reverse]">
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <article
                  key={index + 3}
                  className="bg-background border border-foreground/30 shadow-sm max-w-xs md:max-w-sm p-6 font-serif flex flex-col hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <header className="mb-4 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold leading-tight">{testimonial.name}</h4>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                      <button
                        className="cursor-pointer group flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-serif bg-foreground/5 hover:bg-foreground/10 rounded-full transition-all border border-foreground/20 hover:border-foreground/30 whitespace-nowrap text-foreground/80 hover:text-foreground"
                        title="Read testimonial letter"
                      >
                        <Feather className="w-3 h-3 flex-shrink-0" />
                        <span>Read Letter</span>
                      </button>
                    </div>
                    <time className="block mt-1 text-[11px] text-muted-foreground italic">{testimonial.date}</time>
                    {testimonial.linkedin && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-foreground/80 hover:text-foreground underline decoration-dotted underline-offset-4 transition-colors font-serif"
                        title="View professional reference"
                        href={testimonial.linkedin}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn Directory
                      </a>
                    )}
                  </header>
                  <blockquote className="relative border-l-2 border-foreground/20 pl-4 italic text-sm leading-relaxed text-foreground/90 overflow-hidden">
                    <div className="relative">
                      "{testimonial.quote}"
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                    </div>
                  </blockquote>
                </article>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused] animate-marquee flex-row [animation-direction:reverse]">
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <article
                  key={`dup-rev-${index + 3}`}
                  className="bg-background border border-foreground/30 shadow-sm max-w-xs md:max-w-sm p-6 font-serif flex flex-col hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <header className="mb-4 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold leading-tight">{testimonial.name}</h4>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                      <button
                        className="cursor-pointer group flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-serif bg-foreground/5 hover:bg-foreground/10 rounded-full transition-all border border-foreground/20 hover:border-foreground/30 whitespace-nowrap text-foreground/80 hover:text-foreground"
                        title="Read testimonial letter"
                      >
                        <Feather className="w-3 h-3 flex-shrink-0" />
                        <span>Read Letter</span>
                      </button>
                    </div>
                    <time className="block mt-1 text-[11px] text-muted-foreground italic">{testimonial.date}</time>
                    {testimonial.linkedin && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-foreground/80 hover:text-foreground underline decoration-dotted underline-offset-4 transition-colors font-serif"
                        title="View professional reference"
                        href={testimonial.linkedin}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn Directory
                      </a>
                    )}
                  </header>
                  <blockquote className="relative border-l-2 border-foreground/20 pl-4 italic text-sm leading-relaxed text-foreground/90 overflow-hidden">
                    <div className="relative">
                      "{testimonial.quote}"
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                    </div>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>

          <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-3 md:w-16 lg:w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent transition-all duration-300"></div>
          <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-3 md:w-16 lg:w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent transition-all duration-300"></div>
        </div>

        <div className="mt-12 text-center">
          <div className="relative inline-block group">
            <div className="absolute -bottom-1 -right-1 w-full h-full border-r border-b border-foreground/20 group-hover:border-foreground/40 transition-all duration-300 -z-10"></div>
            <button
              type="button"
              className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative bg-background/95 px-8 py-6 border-foreground/30 group-hover:bg-foreground/5 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider">
                  <span>Share Your Experience</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">Your feedback helps me improve and grow</p>
        </div>
      </section>

      {/* CORRESPONDENCE Section */}
      <section id="correspondence" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Letters & Dispatches
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
            CORRESPONDENCE
          </h2>
          <div className="text-xs text-muted-foreground mt-2 italic font-serif">
            "Send your words by post, wire, or raven - they shall reach me."
          </div>
        </div>

        <div className="bg-background/90 border border-foreground/20 p-6 sm:p-8 rounded-sm shadow-sm">
          <div className="flex flex-col h-full">
            <p className="text-sm leading-relaxed text-foreground/80 font-serif mb-6 text-justify">
              Whether you carry tidings of great opportunity, seek counsel, or simply wish to exchange pleasantries, do not hesitate to make contact. Replies are often dispatched within one or two days of receipt.
            </p>

            <div className="mt-auto pt-4 border-t border-foreground/10">
              <div className="block md:hidden absolute right-8 -mt-12 w-14 h-auto rotate-[-15deg] opacity-80">
                <img
                  alt="Postal Stamp"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  className="w-full h-auto"
                  style={{ color: 'transparent' }}
                  srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_128/gh-pages/public/images/postal-red-stamp.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/postal-red-stamp.png 2x"
                  src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/postal-red-stamp.png"
                />
              </div>

              <div className="flex justify-between items-end">
                <div className="relative ml-auto text-right">
                  <div className="relative z-10">
                    <img
                      alt="signature"
                      loading="lazy"
                      width={100}
                      height={100}
                      decoding="async"
                      data-nimg="1"
                      className="relative z-10 w-28 sm:w-32 h-auto opacity-80 hover:opacity-100 transition-all duration-300 transform"
                      src="/images/signature2.png"
                      style={{ color: "transparent" }}
                    />

                  </div>
                  <div className="relative mt-2">
                    <div className="relative ml-auto w-4/5 h-[1px] bg-foreground/20">
                      <div className="absolute -right-1 top-1/2 w-1 h-1 -translate-y-1/2 bg-foreground/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-xs text-foreground/60 italic mt-1 font-mono tracking-wider">Dec 11, 2025</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm font-serif">
            <div className="flex items-start gap-3">
              <Map className="w-4 h-4" />
              <span className="leading-snug">
                Islamabad, Pakistan <br />
                <span className="text-[0.7rem] text-muted-foreground font-sans">
                  Available for remote engagements worldwide
                </span>
              </span>
            </div>
            <div className="flex items-start gap-3 cursor-pointer">
              <Feather className="w-4 h-4" />
              <a
                href="mailto:sajjadhassa389gmail.com"
                className="hover:underline underline-offset-2"
              >
                <span>sajjadhassa389gmail.com</span>
              </a>
            </div>
            <div className="flex items-start gap-3 cursor-pointer">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://www.linkedin.com/in/hassan-sajjad-881607224"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2"
              >
                <span>linkedin.com/in/hassan-sajjad</span>
              </a>
            </div>
          </div>

          <div className="mt-2 border-t border-dotted border-foreground/30 pt-6 text-center">
            <p className="text-xs italic text-muted-foreground font-serif">
              "No unwanted missives - only messages of worth."
            </p>
          </div>
        </div>

        <div className="absolute bottom-24 right-16 hidden md:block">
          <img
            alt="Postal Stamp"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            className="w-24 h-auto rotate-[-15deg] opacity-70 hover:opacity-100 hover:rotate-0 transition-all duration-300"
            style={{ color: 'transparent' }}
            srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_128/gh-pages/public/images/postal-red-stamp.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/postal-red-stamp.png 2x"
            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/postal-red-stamp.png"
          />
        </div>

        <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
          <span>POST</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
