function Lifestyle() {
  return (
    <section id="lifestyle" className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
      <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Personal Chronicles
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
          THE GAZETTE OF MOMENTS
        </h3>
        <div className="text-xs text-muted-foreground mt-2 italic font-serif">
          "A curated collection of captured instants, culinary adventures, and creative endeavors from my personal chronicle"
        </div>
      </div>
      
      <div className="min-h-[50vh] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-loader-circle w-8 h-8 animate-spin text-gray-400"
          aria-hidden="true"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
      </div>
      
      <div className="mt-16 text-center text-xs text-muted-foreground/70">
        <p className="mb-2">All images © 2025</p>
        <p className="text-[10px] uppercase tracking-widest">Developed with Kodak Portra 400</p>
      </div>
      
      <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
        <span>LIFE</span>
      </div>
    </section>
  );
}

export default Lifestyle;
