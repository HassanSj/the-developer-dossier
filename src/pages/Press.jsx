import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const pressArticles = [
  // {
  //   slug: 'from-the-future',
  //   title: 'From the Future: Case Notes on a Found Timepiece',
  //   dek: 'A detective report on a numberless dial, shader-lit reminders, and a corridor between hours.',
  //   date: '2025-08-29',
  //   displayDate: '29/08/2025',
  //   category: 'Portfolio',
  //   readTime: '1 min read',
  //   featured: true,
  // },
  {
    slug: 'first-edition',
    title: 'First Edition: On Building This Vintage Portfolio',
    dek: 'A portfolio that smells like newsprint, runs like a press, and cuts glitter for ink.',
    date: '2025-08-24',
    displayDate: '24/08/2025',
    category: 'Portfolio',
    readTime: '2 min read',
    featured: false,
  },
];

function Press() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Handle Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchExpanded(true);
      }
      if (e.key === 'Escape' && isSearchExpanded) {
        setIsSearchExpanded(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchExpanded]);

  // Focus search input when expanded
  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchExpanded]);

  const featuredArticle = pressArticles.find(article => article.featured);
  const otherArticles = pressArticles.filter(article => !article.featured);

  const filteredArticles = searchQuery
    ? [...(featuredArticle ? [featuredArticle] : []), ...otherArticles].filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.dek.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <section id="dispatch" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
      <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          The Developer Times • Est. 2000 • Volume V
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
          THE MORNING EDITION
        </h3>
        <div className="text-xs text-muted-foreground mt-2 italic font-serif">
          "Filed reports from the engineering desk"
        </div>
      </div>

      <div className="h-9 flex items-center justify-end mb-4">
        <div className="flex items-center gap-2">
          {isSearchExpanded && (
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="text-[10px] uppercase tracking-widest border px-2 py-1 border-foreground/60 text-foreground bg-background focus:outline-none focus:ring-1 focus:ring-foreground/50 transition-all w-48"
            />
          )}
          <button
            type="button"
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            aria-expanded={isSearchExpanded}
            className="cursor-pointer text-[10px] uppercase tracking-widest border px-2 py-1 transition-colors border-foreground/60 text-foreground hover:bg-foreground hover:text-background inline-flex items-center gap-2"
          >
            <span>Search</span>
            <span className="border border-foreground/40 px-1 py-0.5 text-[9px] leading-none text-foreground/40">
              Ctrl K
            </span>
          </button>
        </div>
      </div>

      {searchQuery && filteredArticles.length > 0 ? (
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className={article.featured ? 'mb-8 sm:mb-10 p-4 sm:p-5 border border-foreground/20 bg-background/90' : 'p-3 sm:p-4 border border-foreground/20 bg-background/90'}
            >
              {article.featured ? (
                <>
                  <Link to={`/press/${article.slug}/`}>
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold underline-offset-4 hover:underline">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground italic font-serif leading-relaxed">
                    {article.dek}
                  </p>
                  <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>{article.displayDate}</span>
                    <span className="select-none">•</span>
                    <span>{article.category}</span>
                    <span className="select-none">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    {article.category}
                  </div>
                  <Link to={`/press/${article.slug}/`}>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold underline-offset-4 hover:underline">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground italic font-serif leading-relaxed">
                    {article.dek}
                  </p>
                  <div className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>{article.displayDate}</span>
                    <span className="select-none">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      ) : searchQuery && filteredArticles.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-8">
          No articles found matching "{searchQuery}"
        </p>
      ) : (
        <>
          {featuredArticle && (
            <article className="mb-8 sm:mb-10 p-4 sm:p-5 border border-foreground/20 bg-background/90">
              <Link to={`/press/${featuredArticle.slug}/`}>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold underline-offset-4 hover:underline">
                  {featuredArticle.title}
                </h2>
              </Link>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground italic font-serif leading-relaxed">
                {featuredArticle.dek}
              </p>
              <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{featuredArticle.displayDate}</span>
                <span className="select-none">•</span>
                <span>{featuredArticle.category}</span>
                <span className="select-none">•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
            </article>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {otherArticles.map((article) => (
              <article key={article.slug} className="p-3 sm:p-4 border border-foreground/20 bg-background/90">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  {article.category}
                </div>
                <Link to={`/press/${article.slug}/`}>
                  <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold underline-offset-4 hover:underline">
                    {article.title}
                  </h3>
                </Link>
                <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground italic font-serif leading-relaxed">
                  {article.dek}
                </p>
                <div className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>{article.displayDate}</span>
                  <span className="select-none">•</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      <div className="h-10"></div>

      <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
        <span>PRESS</span>
      </div>
    </section>
  );
}

export default Press;
