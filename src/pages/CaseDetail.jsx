import { useParams } from 'react-router-dom';
import { Feather, Linkedin, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import TestimonialLetter from '../components/TestimonialLetter';

function CaseDetail() {
  const { id } = useParams();
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedTestimonial) {
        setSelectedTestimonial(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedTestimonial]);

  const caseData = {
    1: {
      title: 'Pulsewave — Real-Time Chat Intelligence',
      caseNumber: '201',
      year: '2024',
      summary: 'A real-time chat application built to handle dynamic user interactions with fluid responsiveness and robust state synchronization. The goal was to investigate latency challenges and deliver synchronous chat experiences across devices with minimal friction.',
      description: 'A real-time chat application built to handle dynamic user interactions with fluid responsiveness and robust state synchronization. The goal was to investigate latency challenges and deliver synchronous chat experiences across devices with minimal friction.',
      image: 'https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/case-placeholder.jpg',
      clues: [
        'Clue #1: Truth hides in the dark — shine a torch to reveal it.',
        'Print this for the records',
        'Inspect the commit ledger',
        'Lead noted: summary recorded'
      ],
      challenges: [
        'Real-time synchronization across multiple devices proved challenging',
        'Latency issues affecting user experience',
        'State management complexity in dynamic interactions'
      ],
      solutions: [
        'Implemented WebSocket connections for real-time updates',
        'Optimized data transfer protocols to reduce latency',
        'Developed robust state synchronization mechanisms'
      ],
      results: [
        'Achieved real-time messaging with minimal delay',
        'Improved user experience across all devices',
        'Stable state synchronization in dynamic environments'
      ],
      timeline: [
        { date: 'Jan 2024', note: 'Project initiated and requirements gathered' },
        { date: 'Mar 2024', note: 'WebSocket implementation completed' },
        { date: 'May 2024', note: 'State synchronization optimized' },
        { date: 'Jun 2024', note: 'Case completed and deployed' }
      ],
      evidence: ['████████', 'WebSocket', '████████', 'Real-time'],
      caseReferences: [
        { label: 'Documentation', url: '/' },
        { label: 'Case Link', url: '/' }
      ],
      testimonies: [
        {
          name: 'Testimonial Provider',
          role: 'Role at Company',
          linkedin: 'https://www.linkedin.com'
        }
      ],
      link: '/',
      linkLabel: 'Visit Case'
    },
    2: {
      title: 'ProtoGenix — Adaptive Web Interface Nexus',
      caseNumber: '202',
      year: '2025',
      summary: 'An innovative next-gen web app focused on modular user interface patterns and adaptive rendering strategies. The investigation centered on creating flexible UI blocks that scale across varied content types while preserving performance and accessibility.',
      description: 'An innovative next-gen web app focused on modular user interface patterns and adaptive rendering strategies. The investigation centered on creating flexible UI blocks that scale across varied content types while preserving performance and accessibility.',
      image: 'https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767302010/developer-dossier/images/protogenix_zlgsbe.png',
      clues: [
        'Clue #1: Truth hides in the dark — shine a torch to reveal it.',
        'Print this for the records',
        'Follow the stack trace',
        'Lead noted: summary recorded'
      ],
      challenges: [
        'Creating modular UI components that scale effectively',
        'Balancing performance with flexible rendering strategies',
        'Ensuring accessibility across all interface patterns'
      ],
      solutions: [
        'Developed reusable component library with adaptive patterns',
        'Implemented lazy loading and code splitting for performance',
        'Integrated comprehensive accessibility standards'
      ],
      results: [
        'Scalable UI system with consistent patterns',
        'Improved performance metrics across all interfaces',
        'Full accessibility compliance achieved'
      ],
      timeline: [
        { date: 'Feb 2025', note: 'Component architecture designed' },
        { date: 'Apr 2025', note: 'Adaptive rendering patterns implemented' },
        { date: 'Jun 2025', note: 'Performance optimizations completed' },
        { date: 'Jul 2025', note: 'Case finalized and documented' }
      ],
      evidence: ['████████', 'React', '████████', 'Tailwind CSS'],
      caseReferences: [
        { label: 'Press', url: '/press/first-edition/' },
        { label: 'Case Link', url: '/' }
      ],
      testimonies: [
        {
          name: 'Areeb Ali',
          role: 'Project Partner at CSV',
          linkedin: 'https://www.linkedin.com/in/areeblogic',
          date: 'January 10, 2023',
          fullQuote: 'Salaar and I spent countless nights debugging by the glow of our monitors, turning coffee into code. His ability to see patterns in chaos turned our most challenging projects into success stories. The way he approaches problems is like watching a master clockmaker at work - precise, patient, and always with an elegant solution.'
        },
        {
          name: 'Usama Jawaid',
          role: 'Team Member at CSV',
          linkedin: 'https://www.linkedin.com/in/usama-jawaid-551101220',
          date: 'January 10, 2023',
          fullQuote: 'Working with Salaar has been an incredible experience. His attention to detail and problem-solving skills are unmatched.'
        }
      ],
      link: '/',
      linkLabel: 'Visit Case'
    },
    3: {
      title: 'ForgeCode — PowerForge Fitness Web Suite',
      caseNumber: '203',
      year: '2025',
      summary: 'A high-impact fitness web platform crafted to motivate users through intuitive design and dynamic content delivery. The mission entailed rethinking engagement pathways and ensuring seamless performance for users in pursuit of fitness goals.',
      description: 'A high-impact fitness web platform crafted to motivate users through intuitive design and dynamic content delivery. The mission entailed rethinking engagement pathways and ensuring seamless performance for users in pursuit of fitness goals.',
      image: 'https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/press/from-the-future/banner.jpg',
      clues: [
        'Clue #1: Truth hides in the dark — shine a torch to reveal it.',
        'Print this for the records',
        'Track the user journey',
        'Lead noted: summary recorded'
      ],
      challenges: [
        'Creating engaging user interfaces for fitness tracking',
        'Dynamic content delivery maintaining performance',
        'User engagement optimization across all touchpoints'
      ],
      solutions: [
        'Designed intuitive fitness tracking interfaces',
        'Implemented efficient content management system',
        'Developed personalized user engagement features'
      ],
      results: [
        'Enhanced user engagement metrics',
        'Improved platform performance',
        'Successful user retention strategies implemented'
      ],
      timeline: [
        { date: 'Mar 2025', note: 'Platform architecture established' },
        { date: 'May 2025', note: 'Fitness tracking features implemented' },
        { date: 'Jul 2025', note: 'Performance optimizations completed' },
        { date: 'Aug 2025', note: 'Case delivered and launched' }
      ],
      evidence: ['████████', 'Fitness', '████████', 'Web Platform'],
      caseReferences: [
        { label: 'Documentation', url: '/' },
        { label: 'Case Link', url: '/' }
      ],
      testimonies: [
        {
          name: 'Testimonial Provider',
          role: 'Role at Company',
          linkedin: 'https://www.linkedin.com'
        }
      ],
      link: '/',
      linkLabel: 'Visit Case'
    },
    4: {
      title: 'SiteScoop — Omni-Site Data Aggregator',
      caseNumber: '204',
      year: '2025',
      summary: 'An aggregation initiative designed to collect, parse, and present data from multiple online sources in a structured dashboard. The task investigated scalable data pipelines, efficient API integrations, and insight visualization for enhanced decision-making.',
      description: 'An aggregation initiative designed to collect, parse, and present data from multiple online sources in a structured dashboard. The task investigated scalable data pipelines, efficient API integrations, and insight visualization for enhanced decision-making.',
      image: 'https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/case-placeholder.jpg',
      clues: [
        'Clue #1: Truth hides in the dark — shine a torch to reveal it.',
        'Print this for the records',
        'Analyze the data pipeline',
        'Lead noted: summary recorded'
      ],
      challenges: [
        'Integrating data from multiple diverse sources',
        'Creating scalable data processing pipelines',
        'Designing effective data visualization dashboards'
      ],
      solutions: [
        'Built robust API integration layer',
        'Implemented efficient ETL processes',
        'Developed interactive data visualization components'
      ],
      results: [
        'Successful multi-source data aggregation',
        'Efficient data processing pipeline established',
        'Comprehensive dashboard for data insights'
      ],
      timeline: [
        { date: 'Apr 2025', note: 'Data sources identified and analyzed' },
        { date: 'Jun 2025', note: 'API integrations implemented' },
        { date: 'Aug 2025', note: 'Dashboard development completed' },
        { date: 'Sep 2025', note: 'Case finalized and deployed' }
      ],
      evidence: ['████████', 'Data', '████████', 'Dashboard'],
      caseReferences: [
        { label: 'Documentation', url: '/' },
        { label: 'Case Link', url: '/' }
      ],
      testimonies: [
        {
          name: 'Testimonial Provider',
          role: 'Role at Company',
          linkedin: 'https://www.linkedin.com'
        }
      ],
      link: '/',
      linkLabel: 'Visit Case'
    },
    5: {
      title: 'The Developer Times',
      caseNumber: '205',
      year: '2025',
      summary: 'A modern portfolio engineered on Next.js, wrapped in a meticulously crafted vintage newspaper aesthetic — balancing performance, accessibility, and theatrical interactions without sacrificing clarity.',
      description: 'A modern portfolio engineered on Next.js, wrapped in a meticulously crafted vintage newspaper aesthetic — balancing performance, accessibility, and theatrical interactions without sacrificing clarity.',
      image: 'https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767301372/developer-dossier/images/dossier_alyl7k.png',
      clues: [
        'Clue #1: Truth hides in the dark — shine a torch to reveal it.',
        'Print this for the records',
        'Follow the stack trace',
        'Lead noted: summary recorded'
      ],
      challenges: [
        'Reconcile rich, print-like visuals with Core Web Vitals and responsive behavior',
        'Create an immersive torch/spotlight effect that performs well and respects user/device context',
        'Ensure testimonial image exports wait for textures, stamps, and background images before capture',
        'Avoid iOS autoplay friction while providing ambient background audio'
      ],
      solutions: [
        'Optimized Tailwind utilities, lazy-loaded media, and GPU-accelerated transforms; reduced layout shifts with careful sizing',
        'Introduced TorchProvider with user toggle, device gating (desktop only), and multi-layer gradient spotlight with warm glow',
        'Wrapped html-to-image with Promise.all for <img> and CSS background assets to guarantee ready state before toJpeg()',
        'Switched to native HTML5 Audio served via Cloudinary with explicit user gesture; visual play state via animated disc'
      ],
      results: [
        'Smooth 60fps interactions on desktop with torch enabled; no flicker, reduced jank',
        'Consistent testimonial exports with textures/stamps rendered on first try',
        'Marquee sections for cases and praise deliver continuous motion with low CPU',
        'Accessible color contrast and keyboard focus across interactive components'
      ],
      timeline: [
        { date: 'Aug 2025', note: 'Initial launch with vintage newspaper theme and case archive' },
        { date: 'Aug 2025', note: 'Integrated torch effect with desktop gating and user toggle' },
        { date: 'Aug 2025', note: 'Added testimonials export reliability and background audio via HTML5' }
      ],
      evidence: ['████████', 'React', '████████', 'Tailwind CSS'],
      caseReferences: [
        { label: 'Press', url: '/press/first-edition/' },
        { label: 'Case Link', url: '/' }
      ],
      testimonies: [
        { name: 'Ahsan Abbasi', role: 'Project Manager at CSV', linkedin: '#', date: 'January 10, 2023', fullQuote: 'To the Esteemed Gentlemen of the Editorial Board,' , quote:'Salaar and I spent countless nights debugging by the glow of our monitors, turning coffee into code. His ability to see patterns in chaos turned our most challenging projects into success stories. The way he approaches problems is like watching a master clockmaker at work - precise, patient, and always with an elegant solution.'},
      ],
      link: '/',
      linkLabel: 'Visit Case'
    },
  };
  
  const caseItem = caseData[id] || caseData[1];

  return (
    <section id={`case-${id}`} className="py-12 mx-auto max-w-5xl px-4 sm:px-6 relative">
      <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Investigation Bureau • Est. 2019 • Volume IV
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground">
          {caseItem.title}
        </h2>
        <div className="text-xs text-muted-foreground mt-2 italic font-serif">
          "{caseItem.summary}"
        </div>
      </div>

      <div className="relative grid md:grid-cols-3 gap-8 z-10">
        {/* Left Column */}
        <div className="relative md:col-span-1 space-y-6">
          {/* Image Figure */}
          <figure className="border border-foreground/20 p-2 bg-background/90 shadow-sm">
            <div className="relative aspect-square w-full border border-foreground/20 overflow-hidden">
              <div className="overflow-hidden absolute inset-0" style={{ transform: 'rotate(0deg)' }}>
                <img
                  alt={`Evidence for ${caseItem.title}`}
                  decoding="async"
                  className="object-cover grayscale-[65%] sepia-[25%] contrast-110 brightness-90"
                  style={{ color: 'transparent', position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
                  srcSet={`${caseItem.image} 640w, ${caseItem.image} 750w, ${caseItem.image} 828w, ${caseItem.image} 1080w, ${caseItem.image} 1200w, ${caseItem.image} 1920w, ${caseItem.image} 2048w, ${caseItem.image} 3840w`}
                  src={caseItem.image}
                />
                <img
                  alt="noise"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0"
                  style={{ color: 'transparent', position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
                  srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/texture.png 640w, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_750/gh-pages/public/images/texture.png 750w, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_828/gh-pages/public/images/texture.png 828w, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_1080/gh-pages/public/images/texture.png 1080w, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_1200/gh-pages/public/images/texture.png 1200w, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_1920/gh-pages/public/images/texture.png 1920w, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_2048/gh-pages/public/images/texture.png 2048w, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png 3840w"
                  src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                  <img
                    alt="classified stamp"
                    loading="lazy"
                    width="240"
                    height="240"
                    decoding="async"
                    className="opacity-20 brightness-95 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out"
                    style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                    srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                    src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                  />
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 via-transparent to-background/10"></div>
              <div className="absolute inset-0 pointer-events-none border border-foreground/10"></div>
              <div className="absolute left-2 top-2 h-6 w-6 border-t border-l border-foreground/30"></div>
              <div className="absolute right-2 top-2 h-6 w-6 border-t border-r border-foreground/30"></div>
              <div className="absolute left-2 bottom-2 h-6 w-6 border-b border-l border-foreground/30"></div>
              <div className="absolute right-2 bottom-2 h-6 w-6 border-b border-r border-foreground/30"></div>
            </div>
            <figcaption className="text-[11px] text-center mt-2 font-serif italic text-foreground/80 tracking-wide">
              Exhibit A — Photographic Evidence
            </figcaption>
          </figure>

          {/* Investigation Dossier */}
          <div className="border border-foreground/20 p-5 bg-background/95 shadow-sm">
            <div className="text-[11px] uppercase tracking-widest font-serif text-center border-b border-foreground/20 pb-3 mb-5 relative">
              <span className="relative px-3 py-1 inline-block bg-background border border-foreground/20">
                Investigation Dossier
              </span>
            </div>
            <div className="space-y-3 text-sm font-serif">
              <div className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span className="font-bold">Case No.</span>
                <span className="font-mono text-[13px] tracking-wider">{caseItem.caseNumber}</span>
              </div>
              <div className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span className="font-bold">Filed</span>
                <span className="font-mono text-[13px]">{caseItem.year}</span>
              </div>
              <div className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span className="font-bold">Disposition</span>
                <span className="uppercase font-mono text-[12px] tracking-widest px-2 py-0.5">Classified</span>
              </div>
              <div className="pt-3 mt-4 border-t border-foreground/20 text-center">
                <div className="text-xs text-muted-foreground mb-1">File Reference</div>
                <div className="font-mono text-sm tracking-wider">████████████</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Title Section */}
          <div className="relative border-b border-foreground/20 pb-6 overflow-hidden">
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground leading-tight">
                  {caseItem.title}
                </h2>
                <div className="text-sm text-muted-foreground font-serif italic">
                  Technical Analysis Report • Digital Forensics
                </div>
              </div>
              <a
                className="uppercase inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-3 sm:py-1 bg-foreground/5 border border-foreground/20 text-[11px] sm:text-xs font-mono rounded shadow-sm hover:bg-foreground/10 hover:underline underline-offset-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 max-w-full sm:max-w-none"
                href={caseItem.link}
                target={caseItem.link.startsWith('http') ? '_blank' : undefined}
                rel={caseItem.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="truncate">{caseItem.linkLabel}</span>
              </a>
            </div>
          </div>

          {/* Statement for the Record */}
          <div className="space-y-8 text-sm leading-relaxed font-serif">
            <div className="relative border border-foreground/20 bg-background/90 shadow-sm p-4 sm:p-6 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[url('https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/texture.png')] opacity-10"></div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20"></div>
              <div className="relative z-10 mb-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-foreground/80">
                    Statement for the Record
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] px-2 py-0.5 border border-foreground/30 bg-background rotate-[-1deg]">
                    Summary
                  </span>
                </div>
                <div className="mt-3 h-px bg-foreground/20"></div>
              </div>
              {/* Clues */}
              <div className="relative z-10 mb-4 -mx-1 flex flex-wrap items-center gap-2">
                {caseItem.clues.map((clue, idx) => {
                  const rotations = [-0.4, 1.1, -0.4, 1.1];
                  return (
                    <span
                      key={idx}
                      className="mx-1 inline-flex items-center gap-2 border border-foreground/25 bg-background/90 px-2 py-1 text-[11px] tracking-wider font-mono text-foreground/90 shadow-sm"
                      style={{ '--r': rotations[idx % rotations.length], transform: `rotate(calc(var(--r) * 1deg))` }}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/60"></span>
                      {clue}
                    </span>
                  );
                })}
              </div>
              <div className="relative z-10 space-y-4 max-w-none sm:max-w-prose pl-5 sm:pl-6 border-l-2 border-foreground/20">
                <div className="pointer-events-none absolute left-0 top-2 bottom-2 flex flex-col justify-between">
                  <span className="w-2 h-px bg-foreground/30"></span>
                  <span className="w-2 h-px bg-foreground/30"></span>
                  <span className="w-2 h-px bg-foreground/30"></span>
                </div>
                <p className="text-foreground/90 font-serif text-justify leading-relaxed selection:bg-foreground/10 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:mt-1">
                  {caseItem.description}
                </p>
              </div>
              <div className="relative z-10 mt-6">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-foreground/20"></div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    — Lead Investigator • Filed Under: Digital Investigations
                  </span>
                  <div className="flex-1 h-px bg-foreground/20"></div>
                </div>
              </div>
            </div>

            {/* Recorded Difficulties and Remedial Actions */}
            <div className="relative overflow-hidden border border-foreground/20 bg-background/95 p-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 28px)',
                  color: 'hsl(var(--foreground))'
                }}
              ></div>
              <div className="relative px-4 py-5 sm:px-6 sm:py-6 leading-[26px] md:leading-[28px] overflow-x-hidden">
                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 w-full">
                  <div className="min-w-0 w-full">
                    <h4 className="font-serif text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-foreground/85 mb-2">
                      Recorded Difficulties
                    </h4>
                    <ul className="space-y-1 pl-3 min-w-0 w-full">
                      {caseItem.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start text-foreground/85 min-w-0">
                          <span className="mt-[9px] mr-2 inline-block w-2.5 h-2.5 border border-foreground/50 rounded-[2px] bg-background/60 flex-shrink-0"></span>
                          <span className="font-serif text-[15px] md:text-base leading-[26px] md:leading-[28px] break-words whitespace-normal">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="min-w-0 w-full">
                    <h4 className="font-serif text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-foreground/85 mb-2">
                      Remedial Actions
                    </h4>
                    <ul className="space-y-1 pl-3 min-w-0 w-full">
                      {caseItem.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-foreground/85 min-w-0">
                          <span className="mt-[9px] mr-2 inline-block w-2.5 h-2.5 border border-foreground/50 rounded-[2px] bg-background/60 flex-shrink-0"></span>
                          <span className="font-serif text-[15px] md:text-base leading-[26px] md:leading-[28px] break-words whitespace-normal">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence Docket */}
            <div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wider flex items-center font-serif">
                <span className="w-4 h-0.5 bg-foreground/30 mr-2"></span>
                  EVIDENCE DOCKET
              </h3>
              <div className="mb-6">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2 font-serif">
                  Catalogued Exhibits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseItem.evidence.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[12px] uppercase tracking-wider font-mono border text-foreground/80 bg-foreground/5 border-foreground/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-sm uppercase tracking-wider font-serif">
                  Findings & Determinations
                </h4>
                <ul className="space-y-3">
                  {caseItem.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-foreground/40 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-foreground/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative border-t-2 border-foreground/10 pt-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 28px)',
                  color: 'hsl(var(--foreground))'
                }}
              ></div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider flex items-center font-serif">
                <span className="w-4 h-0.5 bg-foreground/30 mr-2"></span>
                CASEFILE CHRONOLOGY
              </h3>
              <div className="space-y-5">
                {caseItem.timeline.map((item, idx) => (
                  <div key={idx} className="md:grid md:grid-cols-[minmax(7rem,auto)_1px_1fr] md:gap-x-4 md:items-stretch">
                    <div className="font-mono text-[12px] tracking-[0.15em] text-foreground/70 leading-[22px] whitespace-normal break-words">
                      {item.date}
                    </div>
                    <div className="hidden md:block w-px bg-foreground/20" aria-hidden="true"></div>
                    <div className="mt-2 md:mt-0 min-w-0">
                      <span className="font-serif text-foreground/85 leading-[28px] block">
                        {item.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supplementary Materials */}
            <div className="border-t-2 border-foreground/10 pt-8 overflow-hidden">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider flex items-center font-serif">
                <span className="w-4 h-0.5 bg-foreground/30 mr-2"></span>
                SUPPLEMENTARY MATERIALS
              </h3>
              <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
                <section className="col-span-1 md:col-span-1 min-w-0">
                  <h4 className="text-xs uppercase tracking-widest font-serif text-muted-foreground mb-3">
                    Case References
                  </h4>
                  <ul className="space-y-2 text-sm font-serif font-medium">
                    {caseItem.caseReferences.map((ref, idx) => (
                      <li key={idx}>
                        <a
                          href={ref.url}
                          target={ref.url.startsWith('http') ? '_blank' : undefined}
                          rel={ref.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="cursor-pointer underline decoration-dotted underline-offset-2 text-foreground/85 hover:text-foreground"
                        >
                          {ref.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="col-span-1 md:col-span-2 md:col-start-2 min-w-0">
                  <h4 className="text-xs uppercase tracking-widest font-serif text-muted-foreground mb-3">
                    Testimonies
                  </h4>
                  <div className="grid gap-2 justify-items-start [grid-template-columns:repeat(1,minmax(0,1fr))] md:[grid-template-columns:repeat(auto-fit,minmax(18rem,1fr))] min-w-0">
                    {caseItem.testimonies.map((testimony, idx) => (
                      <div key={idx} className="h-full w-full max-w-md min-w-0">
                        <div
                          className="group cursor-pointer inline-flex flex-col items-start text-left select-none font-serif space-y-0.5 text-foreground/90 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background h-full"
                          role="button"
                          tabIndex={0}
                          onClick={() => {
                            if (testimony.fullQuote) {
                              setSelectedTestimonial(testimony);
                            } else if (testimony.linkedin && testimony.linkedin !== '#') {
                              window.open(testimony.linkedin, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          onKeyDown={(e) => {
                            if ((e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault();
                              if (testimony.fullQuote) {
                                setSelectedTestimonial(testimony);
                              } else if (testimony.linkedin && testimony.linkedin !== '#') {
                                window.open(testimony.linkedin, '_blank', 'noopener,noreferrer');
                              }
                            }
                          }}
                          aria-label={`Read testimonial letter from ${testimony.name}`}
                          title={`Read letter from ${testimony.name}`}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <span className="text-sm md:text-[13px] font-medium underline decoration-dotted decoration-foreground/40 group-hover:decoration-foreground underline-offset-4 leading-snug transition-[text-decoration-color] duration-200 font-serif">
                              {testimony.name}
                            </span>
                            <Feather className="w-3.5 h-3.5 text-foreground/70 group-hover:text-foreground/90 transition-colors" aria-hidden="true" />
                          </span>
                          <span className="mt-0.5 text-[10px] md:text-[11px] tracking-normal text-muted-foreground/90 group-hover:text-foreground/80 transition-colors font-serif">
                            {testimony.role}
                          </span>
                          {testimony.linkedin && testimony.linkedin !== '#' && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-0.5 inline-flex items-center gap-1 text-[10px] md:text-[11px] text-muted-foreground/80 hover:text-foreground underline decoration-dotted underline-offset-4 transition-colors font-serif"
                              title="View professional reference"
                              href={testimony.linkedin}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin className="w-3 h-3" aria-hidden="true" />
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
        <span>CASE</span>
      </div>

      {/* Testimonial Letter Modal */}
      {selectedTestimonial && (
        <TestimonialLetter
          testimony={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </section>
  );
}

export default CaseDetail;
