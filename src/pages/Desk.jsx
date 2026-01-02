import { Link } from 'react-router-dom';

function Desk() {
  return (
    <section id="desk" className="py-12 sm:px-6 max-w-6xl mx-auto px-4 relative">
      <div className="text-center mb-12 border-b-1 border-foreground/20 pb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Investigation Bureau • Est. 2019 • Volume IV
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
          The Detective's Desk
        </h3>
        <div className="text-xs text-muted-foreground mt-2 italic font-serif">
          "An inner-office apparatus for focused inquiry: a pocket‑watch Pomodoro, gramophone‑grade ambience, and a clerk's log to record cases solved."
        </div>
      </div>
      
      <div className="hidden sm:block">
        <div className="relative w-full h-full">
          <img
            alt="radio"
            width="1400"
            height="1400"
            decoding="async"
            className="w-full h-full object-cover"
            srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_1920/gh-pages/public/images/radio-min.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/radio-min.png 2x"
            src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_3840/gh-pages/public/images/radio-min.png"
          />
        </div>
      </div>
      
      <div className="mt-8 block sm:hidden">
        <div className="relative rounded-lg overflow-hidden border border-foreground/20 bg-background">
          <div className="p-5">
            <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/50 font-semibold mb-1">
              Notice to Readers
            </p>
            <h3 className="font-serif text-lg leading-snug text-foreground">
              Wireless Set Under Maintenance
            </h3>
            <p className="mt-2 text-sm text-muted-foreground font-serif">
              Our desk radio—experimental Beta apparatus—is presently available to desktop inspectors only. The mobile edition is being tuned by the night engineer. Kindly revisit from a desktop machine.
            </p>
            <p className="mt-3 text-[11px] tracking-wide text-muted-foreground/80 italic font-serif">
              — Editorial Desk, The Developer Times
            </p>
          </div>
          <div className="border-t border-border px-5 py-2 text-[10px] tracking-widest uppercase text-muted-foreground/80 bg-background">
            Vol. IV • Technical Bulletin • Circulation: Limited
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <div className="relative rounded-lg overflow-hidden border border-foreground/20 bg-background">
          <div className="p-4 sm:p-5">
            <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/50 font-semibold mb-1">
              Available Apparatus
            </p>
            <div className="mt-3 border-t pt-3 space-y-2">
              <Link
                to="/desk/casefile-invoices"
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-3 group"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Bureau Tool No. 001
                </span>
                <span className="font-serif text-sm text-foreground group-hover:underline decoration-dotted underline-offset-2">
                  Invoice Issuance Apparatus
                </span>
                <span className="text-[11px] text-muted-foreground/80 font-serif sm:text-right">
                  Generate client-ready invoices in bureau livery.
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="uppercase absolute top-10 sm:top-0 right-0 text-[86px] xs:text-[100px] sm:text-[150px] md:text-[200px] leading-none font-bold font-serif text-foreground/10 md:text-foreground/5 -z-10 select-none pointer-events-none">
        <span>DESK</span>
      </div>
    </section>
  );
}

export default Desk;
