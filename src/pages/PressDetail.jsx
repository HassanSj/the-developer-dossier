import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const pressArticles = {
  'first-edition': {
    slug: 'first-edition',
    title: 'First Edition: On Building This Vintage Portfolio',
    dek: 'A portfolio that smells like newsprint, runs like a press, and cuts glitter for ink.',
    date: '2025-08-24',
    displayDate: '24/08/2025',
    category: 'Portfolio',
    readTime: '2 min read',
    tags: ['Next.js', 'Design Systems', 'Performance'],
    toc: [
      { id: 'filed-report', title: 'Filed Report' },
      { id: 'evidence-the-pressroom', title: 'Evidence: The Pressroom' },
      { id: 'evidence-noir-ink', title: 'Evidence: Noir Ink' },
      { id: 'findings', title: 'Findings' },
      { id: 'closing-note', title: 'Closing Note' },
    ],
    related: [
      // {
      //   slug: 'from-the-future',
      //   title: 'From the Future: Case Notes on a Found Timepiece',
      //   category: 'Portfolio',
      // },
    ],
  },
  'from-the-future': {
    slug: 'from-the-future',
    title: 'From the Future: Case Notes on a Found Timepiece',
    dek: 'A detective report on a numberless dial, shader-lit reminders, and a corridor between hours.',
    date: '2025-08-29',
    displayDate: '29/08/2025',
    category: 'Portfolio',
    readTime: '1 min read',
    tags: ['Next.js', 'Design', 'Shaders', 'PWA', 'Story'],
    toc: [],
    related: [],
  },
};

function PressDetail() {
  const { slug } = useParams();
  const article = pressArticles[slug];
  const [copySuccess, setCopySuccess] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    setCopySuccess(false);
    setTocOpen(false);
  }, [slug]);

  if (!article) {
    return (
      <section className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
          Article not found
        </h1>
      </section>
    );
  }

  const currentUrl = `${window.location.origin}/press/${slug}/`;
  const shareText = `${article.title} — ${article.tags.map(tag => `#${tag}`).join(' ')}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(article.title)}`;

  return (
    <section id="dispatch-article" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
      <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          The Developer Times • Est. 2000 • Volume V
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
          {article.title}
        </h3>
        <div className="text-xs text-muted-foreground mt-2 italic font-serif">
          "{article.dek}"
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-2 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-widest text-muted-foreground">
        <div className="flex items-center gap-1.5 md:gap-2 whitespace-nowrap overflow-x-auto">
          <span>{article.displayDate}</span>
          <span>•</span>
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="text-[10px] uppercase tracking-widest border border-foreground/50 text-foreground px-2 py-1 hover:bg-foreground hover:text-background transition"
          >
            LinkedIn
          </a>
          <button
            onClick={handleCopyLink}
            aria-label="Copy link to clipboard"
            className="cursor-pointer text-[10px] uppercase tracking-widest border px-2 py-1 transition-colors border-foreground/60 text-foreground hover:bg-foreground hover:text-background"
          >
            Copy Link
          </button>
          <span className="sr-only" aria-live="polite" role="status">
            {copySuccess ? 'Link copied to clipboard' : ''}
          </span>
        </div>
      </div>

      {article.toc.length > 0 && (
        <div className="lg:hidden mb-6">
          <div className="border border-foreground/20">
            <button
              type="button"
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs uppercase tracking-widest bg-background/60 hover:bg-background/80"
              aria-expanded={tocOpen}
              aria-controls="toc-mobile-panel"
            >
              <span>Contents</span>
              <span className="ml-2 text-[10px]">{tocOpen ? '−' : '+'}</span>
            </button>
            <div
              id="toc-mobile-panel"
              className="px-3 bg-background/40"
              style={{
                maxHeight: tocOpen ? '500px' : '0px',
                opacity: tocOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 250ms, opacity 200ms',
              }}
            >
              <div className="py-3">
                <nav aria-label="Table of contents" className="border-l pl-4 text-sm">
                  <div className="mb-2 text-xs uppercase tracking-widest text-foreground">
                    Contents
                  </div>
                  <ul className="space-y-2">
                    {article.toc.map((item) => (
                      <li key={item.id} className="ml-3">
                        <a
                          href={`#${item.id}`}
                          className="hover:underline text-foreground/70"
                          onClick={() => setTocOpen(false)}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        <article className="prose prose-invert max-w-none">
          {slug === 'first-edition' ? (
            <>
              <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-mono">
                <p className="leading-relaxed my-4">Case Note #001</p>
              </div>
              <h1 id="ink-over-glitter" className="font-serif text-3xl md:text-4xl font-bold mt-6">
                Ink Over Glitter
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#ink-over-glitter"
                  className="underline underline-offset-2"
                >
                  <span className="icon icon-link"></span>
                </a>
              </h1>
              <div className="uppercase tracking-widest text-[10px] font-serif text-muted-foreground mt-1">
                <p className="leading-relaxed my-4">By Salaar Khan</p>
              </div>
              <p className="leading-relaxed my-4">
                <em>
                  A modest paper, folded and stapled with code. A little vintage on the outside, a
                  little modern under the hood.
                </em>
              </p>
              <figure className="my-6">
                <img
                  alt="First Edition"
                  loading="lazy"
                  width="1200"
                  height="675"
                  decoding="async"
                  className="w-full h-auto border border-foreground/20"
                  sizes="(min-width: 768px) 768px, 100vw"
                  srcSet="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767362297/developer-dossier/images/devil_cnahcd.webp"
                  src="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767362297/developer-dossier/images/devil_cnahcd.webp"
                  style={{ color: 'transparent' }}
                />
                <figcaption className="text-xs text-muted-foreground mt-2 font-serif italic text-center">
                  Figure I
                </figcaption>
              </figure>
              <h3
                id="filed-report"
                className="font-serif text-xl md:text-2xl font-semibold mt-4"
              >
                Filed Report
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#filed-report"
                  className="underline underline-offset-2"
                >
                  <span className="icon icon-link"></span>
                </a>
              </h3>
              <div className="leading-relaxed my-4 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-5xl md:first-letter:text-6xl first-letter:leading-[0.8] first-letter:pt-1 text-justify">
                <p className="leading-relaxed my-4">
                  The scene opens on a crowded boulevard of websites; flashing neon, spinning
                  widgets, endless billboards. Everyone shouting, no one listening. I wasn't
                  interested in being another voice in the noise. I wanted something quieter.
                  Something that felt like the folded corner paper waiting at the newsstand. Calm
                  typography. Pages that trust words and structure. Ink instead of glitter.
                </p>
              </div>
              <blockquote className="border-l-2 border-foreground/40 pl-4 italic font-serif text-lg my-6">
                Keep the page quiet.
              </blockquote>
              <hr />
              <h3
                id="evidence-the-pressroom"
                className="font-serif text-xl md:text-2xl font-semibold mt-4"
              >
                Evidence: The Pressroom
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#evidence-the-pressroom"
                  className="underline underline-offset-2"
                >
                  <span className="icon icon-link"></span>
                </a>
              </h3>
              <p className="leading-relaxed my-4">
                The inspiration came out of fatigue. Scroll long enough and everything starts to
                look like the same startup brochure. I wanted a page that could grow like a column
                in a newspaper: clear type, simple hierarchy, no decoration that doesn't earn its
                ink.
              </p>
              <figure className="my-6">
                <img
                  alt="Homepage layout"
                  loading="lazy"
                  width="1200"
                  height="675"
                  decoding="async"
                  className="w-full h-auto border border-foreground/20"
                  sizes="(min-width: 768px) 768px, 100vw"
                  srcSet="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767301372/developer-dossier/images/dossier_alyl7k.png"
                  src="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767301372/developer-dossier/images/dossier_alyl7k.png"
                  style={{ color: 'transparent' }}
                />
                <figcaption className="text-xs text-muted-foreground mt-2 font-serif italic text-center">
                  Figure II — Exhibit A: Front Page
                </figcaption>
              </figure>
              <p className="leading-relaxed my-4">
                I built in the browser, no ceremony. The trick was to keep cutting. Every shiny
                piece I tried; gone. What stayed are the bones: speed, clarity, repeatable parts.
              </p>
              <hr />
              <h3 id="evidence-noir-ink" className="font-serif text-xl md:text-2xl font-semibold mt-4">
                Evidence: Noir Ink
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#evidence-noir-ink"
                  className="underline underline-offset-2"
                >
                  <span className="icon icon-link"></span>
                </a>
              </h3>
              <p className="leading-relaxed my-4">
                Light mode carried the print-paper vibe. Dark mode was trickier—so I staged
                something else: a <span className="relative inline-block bg-transparent">torch</span>
                . Switch it on and it follows the cursor, sometimes uncovering secrets in the
                margins 🤫.
              </p>
              <figure className="my-6">
                <img
                  alt="Torch mode"
                  loading="lazy"
                  width="1200"
                  height="675"
                  decoding="async"
                  className="w-full h-auto border border-foreground/20"
                  sizes="(min-width: 768px) 768px, 100vw"
                  srcSet="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767362711/developer-dossier/images/dark_crvmbl.png"
                  src="https://res.cloudinary.com/dx6ro5dgg/image/upload/v1767362711/developer-dossier/images/dark_crvmbl.png"
                  style={{ color: 'transparent' }}
                />
                <figcaption className="text-xs text-muted-foreground mt-2 font-serif italic text-center">
                  Figure III — Exhibit B: Torch Mode
                </figcaption>
              </figure>
              <p className="leading-relaxed my-4">
                Paired with a low <span className="relative inline-block bg-transparent">vinyl jazz</span>{' '}
                hum, the page shifts into night press mode. News by day. Noir by night.
              </p>
              <hr />
              <h3 id="findings" className="font-serif text-xl md:text-2xl font-semibold mt-4">
                Findings
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#findings"
                  className="underline underline-offset-2"
                >
                  <span className="icon icon-link"></span>
                </a>
              </h3>
              <p className="leading-relaxed my-4">
                I'm no designer of record. I'm a developer who happens to like old paper,
                typewriters, and the way ink smudges on cheap newsprint. Those scraps of mood became
                raw material for code. The result? Simple, fast, a little rough by design. Better a
                page that breathes than one smothered in ornaments.
              </p>
              <hr />
              <h3 id="closing-note" className="font-serif text-xl md:text-2xl font-semibold mt-4">
                Closing Note
                <a
                  aria-hidden="true"
                  tabIndex={-1}
                  href="#closing-note"
                  className="underline underline-offset-2"
                >
                  <span className="icon icon-link"></span>
                </a>
              </h3>
              <p className="leading-relaxed my-4">
                This is the <strong>first case in the file</strong>. Rough edges? Certainly. But
                every press needs its First Edition.
              </p>
              <p className="leading-relaxed my-4">
                If you've read this far, I'd love your testimony leave a note in the{' '}
                <Link
                  to="/#endorsements"
                  className="underline decoration-dotted underline-offset-4 transition-colors"
                >
                  endorsements
                </Link>{' '}
                section. Consider it evidence added to the case.
              </p>
            </>
          ) : (
            <p>Article content for {slug} coming soon...</p>
          )}
        </article>

        {article.toc.length > 0 && (
          <aside className="hidden lg:block lg:sticky lg:top-24 self-start">
            <nav aria-label="Table of contents" className="border-l pl-4 text-sm">
              <div className="mb-2 text-xs uppercase tracking-widest text-foreground">Contents</div>
              <ul className="space-y-2">
                {article.toc.map((item) => (
                  <li key={item.id} className="ml-3">
                    <a href={`#${item.id}`} className="hover:underline text-foreground/70">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>

      <div className="mt-10 border-t border-foreground/20 pt-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link
              key={tag}
              to={`/press/?tag=${encodeURIComponent(tag)}`}
              className="text-[10px] font-serif uppercase border border-foreground/60 text-foreground px-2 py-1 hover:bg-foreground hover:text-background transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
        {article.related.length > 0 && (
          <div className="mt-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Related Dispatches
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {article.related.map((related) => (
                <Link
                  key={related.slug}
                  to={`/press/${related.slug}/`}
                  className="block p-3 border border-foreground/20 hover:bg-background/80"
                >
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {related.category}
                  </div>
                  <div className="font-serif font-semibold text-sm leading-snug">
                    {related.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="mt-10 p-5 border border-foreground/30 bg-background/80 text-center">
          <div className="font-serif text-lg">Need a seasoned engineer for your next investigation?</div>
          <div className="text-sm text-muted-foreground">
            Performance, product engineering, and dev experience — book a consultation.
          </div>
          <div className="mt-4">
            <a
              href="https://calendly.com/sajjadhassa389/quick-case-check-in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule an Interview"
            >
              <button
                type="button"
                className="inline-flex items-center justify-center py-3 font-serif text-sm tracking-wider uppercase transition-all duration-200 relative bg-foreground text-background hover:bg-foreground/90 cursor-pointer group px-5"
              >
                <span className="inline-flex items-center gap-2">Schedule an Interview</span>
              </button>
            </a>
          </div>
          <div className="mt-2 text-[10px] sm:text-xs text-muted-foreground font-sans italic">
            Hot off the press: 20 minutes to headline your idea.
          </div>
        </div>
      </div>

      <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
        <span>PRESS</span>
      </div>
    </section>
  );
}

export default PressDetail;
