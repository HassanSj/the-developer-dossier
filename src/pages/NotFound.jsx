import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="py-12 relative mx-auto max-w-5xl px-4 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-4">
          404
        </h1>
        <p className="text-lg font-serif text-foreground/70 mb-6">
          Page not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center font-serif text-sm tracking-wider uppercase border hover:bg-foreground/5 cursor-pointer bg-background/95 px-6 py-4 border-foreground/30 hover:bg-foreground/5 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

