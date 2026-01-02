import { X, Download } from 'lucide-react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

function TestimonialLetter({ testimony, onClose }) {
  const letterRef = useRef(null);

  if (!testimony) return null;

  const fullQuote = testimony.quote || '';
  const date = testimony.date || '';
  const signatureName = testimony.name || '';
  const signatureRole = testimony.role || '';

  const handleDownload = async () => {
    const element = letterRef.current;
    
    // Validate element exists and is in the DOM
    if (!element) {
      console.error('Element ref is null');
      alert('Failed to download letter. Please try again.');
      return;
    }

    if (!element.parentNode) {
      console.error('Element is not in the DOM');
      alert('Failed to download letter. Please try again.');
      return;
    }

    if (typeof element.getBoundingClientRect !== 'function') {
      console.error('Element is not a valid DOM element');
      alert('Failed to download letter. Please try again.');
      return;
    }

    // Check if element has dimensions
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      console.error('Element has no dimensions', rect);
      alert('Failed to download letter. Element not visible.');
      return;
    }

    try {
      // Wait a bit for the DOM to be fully ready
      await new Promise(resolve => setTimeout(resolve, 200));

      // Wait for all images to load (both img tags and background images)
      const images = element.querySelectorAll('img');
      if (images.length > 0) {
        await Promise.all(
          Array.from(images).map((img) => {
            if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
            return new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve; // Continue even if image fails to load
              setTimeout(resolve, 3000); // Timeout after 3 seconds
            });
          })
        );
      }

      // Try with useCORS first, fallback to allowTaint if it fails
      let canvas;
      const html2canvasOptions = {
        backgroundColor: '#fef3c7', // amber-50
        scale: 2,
        logging: false
      };

      try {
        canvas = await html2canvas(element, {
          ...html2canvasOptions,
          useCORS: true,
          allowTaint: false
        });
      } catch (corsError) {
        console.warn('CORS capture failed, trying with allowTaint:', corsError);
        // Fallback: allow tainted canvas (may result in some images not rendering)
        try {
          canvas = await html2canvas(element, {
            ...html2canvasOptions,
            useCORS: false,
            allowTaint: true
          });
        } catch (fallbackError) {
          console.error('Both capture methods failed:', fallbackError);
          throw fallbackError;
        }
      }

      // Sanitize filename
      const sanitizeFilename = (str) => {
        return str
          .replace(/[^a-z0-9-]/gi, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
          .toLowerCase();
      };

      const filename = `testimonial-letter-${sanitizeFilename(signatureName)}-${sanitizeFilename(date)}.png`;

      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading letter:', error);
      alert('Failed to download letter. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Testimonial letter from ${testimony.name}`}
    >
      <div className="relative w-full max-w-lg">
        <div className="relative">
          <div
            ref={letterRef}
            className="relative w-full max-w-2xl mx-auto h-auto rounded-sm shadow-2xl bg-amber-50 overflow-hidden border border-black/10 min-h-[80vh] sm:min-h-[90vh] md:aspect-[3/4] md:min-h-0"
            onClick={(e) => e.stopPropagation()}
            style={{
              WebkitFontSmoothing: 'antialiased',
              textRendering: 'optimizeLegibility'
            }}
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 bg-cover bg-center -z-0 pointer-events-none"
              style={{
                backgroundImage: 'url(/images/letter-texture-2.avif)',
                mixBlendMode: 'multiply',
                opacity: 1
              }}
            />

            {/* Ink splash - top left */}
            <div
              className="absolute top-8 left-8 w-24 h-24 bg-contain bg-no-repeat opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'url(https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_200,q_90/gh-pages/public/images/ink-splash.png)'
              }}
            />

            {/* Ink blot - top right */}
            <div
              className="absolute top-32 right-8 w-24 h-24 bg-contain bg-no-repeat opacity-30 pointer-events-none"
              style={{
                backgroundImage: 'url(https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_200,q_90/gh-pages/public/images/ink-blot.png)'
              }}
            />

            {/* Ink blot - bottom left */}
            <div
              className="absolute bottom-24 left-10 w-24 h-24 bg-contain bg-no-repeat opacity-30 pointer-events-none"
              style={{
                backgroundImage: 'url(https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_200,q_90/gh-pages/public/images/ink-blot.png)'
              }}
            />

            {/* Content */}
            <div 
              className="relative z-10 p-4 sm:p-6 md:p-10 text-black leading-relaxed tracking-wide text-sm sm:text-base md:text-lg"
              style={{ fontFamily: 'var(--font-cursive)' }}
            >
              {/* Date and URL Header */}
              <div className="flex justify-between items-start mb-8 sm:mb-10">
                <p className="font-serif text-[10px] sm:text-xs opacity-70">{date}</p>
                <a
                  href="https://github.com/hassansj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-[10px] sm:text-xs opacity-70 hover:opacity-80 transition-opacity"
                >
                  github.com/hassansj
                </a>
              </div>

              {/* Salutation */}
              <p className="mb-4 sm:mb-6 md:mb-8">
                To the Esteemed Gentlemen of the Editorial Board,
              </p>

              {/* Letter Body */}
              <p className="whitespace-pre-line mb-8 sm:mb-10 md:mb-12">
                {fullQuote || 'No testimonial content available.'}
              </p>

              {/* Closing */}
              <p className="mb-4 sm:mb-6 md:mb-8 italic">
                Yours in utmost respect,
              </p>

              {/* Signature */}
              <p className="text-sm sm:text-base">{signatureName}</p>
              <p className="text-sm sm:text-base italic">{signatureRole}</p>
            </div>

            {/* Wax Seal - Bottom Right */}
            <div className="absolute bottom-6 right-6 w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 md:w-24 md:h-24 rotate-[-35deg]">
              <div className="relative">
                <img
                  alt="Wax Seal"
                  width="400"
                  height="400"
                  decoding="async"
                  className="relative z-10 object-contain opacity-95 drop-shadow-xl drop-shadow-amber-900/50 pointer-events-none"
                  srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/seal.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_828/gh-pages/public/images/seal.png 2x"
                  src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_828/gh-pages/public/images/seal.png"
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>

            {/* Approved Stamp - Bottom Left */}
            <div className="absolute bottom-9 sm:bottom-6 left-6 sm:left-6 w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-70 sm:opacity-85 z-0 rotate-[-35deg]">
              <div className="relative w-full h-full">
                <img
                  alt="Approved Stamp"
                  width="500"
                  height="500"
                  decoding="async"
                  className="relative z-0 w-full h-full object-contain drop-shadow-md drop-shadow-black/80 pointer-events-none opacity-35"
                  srcSet="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_640/gh-pages/public/images/approved-stamp.png 1x, https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_1080/gh-pages/public/images/approved-stamp.png 2x"
                  src="https://res.cloudinary.com/dnpxalm5i/image/upload/f_auto,q_auto,w_1080/gh-pages/public/images/approved-stamp.png"
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons - Fixed position */}
          <div className="fixed top-2 right-4 flex gap-3">
            <button
              onClick={handleDownload}
              className="cursor-pointer p-2 bg-black/30 hover:bg-black/80 backdrop-blur-sm border border-black/20 rounded-full z-30 transition-all shadow-lg shadow-black/10 hover:shadow-black/20"
              aria-label="Download letter"
              title="Download this letter"
            >
              <Download className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
            <button
              onClick={onClose}
              className="cursor-pointer p-2 bg-black/30 hover:bg-black/80 backdrop-blur-sm border border-black/20 rounded-full z-30 transition-all shadow-lg shadow-black/10 hover:shadow-black/20"
              aria-label="Close letter"
              title="Close letter"
            >
              <X className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialLetter;