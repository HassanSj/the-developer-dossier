import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const cases = [
  {
    id: 5,
    title: 'Developer Dossier',
    caseNumber: '205',
    year: '2025',
    image: 'https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767301372/developer-dossier/images/dossier_alyl7k.png',
  },
  {
    id: 1,
    title: 'ChatPulse',
    caseNumber: '201',
    year: '2024',
    image: 'https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767301727/developer-dossier/images/chat-pulse_x3x.png',
  },
  {
    id: 2,
    title: 'ProtoGenix',
    caseNumber: '202',
    year: '2025',
    image: 'https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767302010/developer-dossier/images/protogenix_zlgsbe.png',
  },
  {
    id: 3,
    title: 'PowerForge — Fitness Web Suite',
    caseNumber: '203',
    year: '2025',
    image: 'https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767300775/developer-dossier/images/powerforge_pm52iw.png',
  },
  {
    id: 4,
    title: 'SiteScoop — Omni-Site Data Aggregator',
    caseNumber: '204',
    year: '2025',
    image: 'https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/case-placeholder.jpg',
  },
];

const tags = ['All Cases', 'AWS EC2', 'Django', 'Jenkins', 'NestJS', 'Next.js', 'PWA', 'React', 'SonarQube', 'Stripe', 'Tailwind CSS', 'Turborepo', 'TypeScript', 'WebGL/Shaders'];

function Cases() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All Cases');

  const filteredCases = cases.filter(caseItem =>
    caseItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="case-files" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
      <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Case Files Archive • Volume IV
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
          THE ARCHIVE OF CASES
        </h3>
        <div className="text-xs text-muted-foreground mt-2 italic font-serif">
          "A dossier of solved mysteries, coded conspiracies, and digital breakthroughs meticulously investigated across my developer journey."
        </div>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <div className="relative group">
            <div className="absolute -bottom-1 -right-1 w-full h-full border-r border-b border-foreground/20 group-hover:border-foreground/40 transition-all duration-300 -z-10"></div>
            <input
              type="text"
              className="block px-3 py-2 text-sm font-serif border border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/50 transition-all duration-200 placeholder:text-foreground/50 w-full pl-9 bg-background/80 backdrop-blur-sm"
              placeholder="Search cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 font-serif">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`cursor-pointer text-xs px-3 py-1.5 border transition-colors ${selectedTag === tag
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'border-border text-muted-foreground hover:text-foreground'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((caseItem, index) => (
          <article
            key={caseItem.id}
            className="group/card relative border border-foreground/10 bg-gradient-to-br from-background/80 to-background/60 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer"
          >
            <div className="relative h-52">
              <div className="relative overflow-hidden">
                <div className="w-full h-52 overflow-hidden">
                  <div
                    className="relative overflow-hidden w-full h-full"
                    style={{ transform: `rotate(${index === 0 ? 2 : index === 1 ? -2 : index === 2 ? 0 : -1}deg)` }}
                  >
                    <img
                      alt={caseItem.title}
                      loading="lazy"
                      decoding="async"
                      className="object-cover transition-all duration-700 ease-in-out grayscale-[70%] sepia-[15%] md:blur-[2px] md:scale-110 md:group-hover/card:blur-[0] md:group-hover/card:scale-100 md:group-hover/card:grayscale-0 md:group-hover/card:sepia-0"
                      style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                      src={caseItem.image}
                    />
                    <img
                      alt="noise"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0"
                      style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                      src="/images/texture.png"
                    />
                    {(index === 0 || index === 2) && (
                      <div className="absolute inset-0 flex items-center justify-center p-4">
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
                            {caseItem.title}
                          </span>
                          <span
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute inset-0 uppercase text-center block text-4xl tracking-[0.10em]"
                            style={{
                              backgroundImage: 'url(/images/texture.png)',
                              backgroundRepeat: 'repeat',
                              backgroundSize: '200px 200px',
                              backgroundPosition: 'center',
                              opacity: 0.12,
                              mixBlendMode: 'multiply',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              color: 'transparent',
                              filter: 'blur(0.15px)'
                            }}
                          >
                            {caseItem.title}
                          </span>
                          <span
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute inset-0 uppercase text-center block text-xl tracking-[0.10em]"
                            style={{
                              color: 'transparent',
                              textShadow: '-0.6px -0.6px 0 rgba(255,255,255,0.08)',
                              mixBlendMode: 'screen',
                              filter: 'blur(0.1px)'
                            }}
                          >
                            {caseItem.title}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <img
                        alt="classified stamp"
                        loading="lazy"
                        width="240"
                        height="240"
                        decoding="async"
                        className={`${index === 1 || index === 3 ? 'opacity-90' : 'opacity-20'} brightness-95 select-none grayscale-75 dark:grayscale-50 mix-blend-multiply transition-all duration-700 ease-in-out group-hover/card:opacity-20 group-hover/card:rotate-[-8deg]`}
                        style={{ color: 'transparent', transform: 'rotate(-12deg)' }}
                        srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_256/gh-pages/public/images/classified-2.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png 2x"
                        src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/classified-2.png"
                      />
                    </div>
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
                  {caseItem.title}
                </h3>
                <p className="text-xs font-mono text-foreground/70 mt-1">
                  Case #{caseItem.caseNumber} • <span className="inline-block">File Ref: ███████████</span> • {caseItem.year}
                </p>
              </div>
              <div className="mt-2">
                <Link to={`/cases/${caseItem.id}`}>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer group relative w-full bg-background/95 px-6 py-4 border-foreground/30 group-hover/card:bg-foreground/5 transition-all duration-300 group/button"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="relative z-10 inline-flex items-center text-sm uppercase tracking-wider group-hover/button:translate-x-1 transition-transform">
                        Inspect Case
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2 transform">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
        <span>Cases</span>
      </div>

      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Cases;

