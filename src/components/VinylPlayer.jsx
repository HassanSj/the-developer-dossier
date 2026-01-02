import { useState, useRef, useEffect } from 'react';

function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/enchanted.mp3');
      
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.preload = 'auto';
      
      // Handle when audio can play
      audioRef.current.addEventListener('canplay', () => {
        console.log('Audio is ready to play');
      });
      
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });

      // Handle errors when audio fails to load
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio failed to load:', e);
        console.error('Audio error details:', {
          code: audioRef.current?.error?.code,
          message: audioRef.current?.error?.message,
          src: audioRef.current?.src
        });
        setIsPlaying(false);
      });
      
      // Load the audio
      audioRef.current.load();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        // Ensure audio is loaded
        if (audioRef.current.readyState === 0) {
          audioRef.current.load();
        }
        
        // Try to play the audio
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Audio play failed:', error);
        console.error('Audio state:', {
          readyState: audioRef.current.readyState,
          src: audioRef.current.src,
          error: audioRef.current.error
        });
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      id="vinyl"
      onClick={togglePlay}
      className="cursor-pointer border border-foreground/20 rounded-full transition-all focus:outline-none ring-1 ring-primary"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.88 122.88"
        className={`text-foreground w-6 h-6 ${isPlaying ? 'vinyl-playing' : ''}`}
      >
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', transform: 'rotate(0deg)' }}>
          <circle
            cx="61.44"
            cy="61.44"
            r="55"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M34.22,54.89c-0.44,1.27-1.82,1.94-3.09,1.51c-1.27-0.44-1.94-1.82-1.51-3.09 c1.72-4.97,4.45-9.45,7.94-13.21c3.5-3.77,7.78-6.82,12.59-8.9c1.23-0.53,2.66,0.04,3.19,1.27c0.53,1.23-0.04,2.66-1.27,3.19 c-4.17,1.8-7.89,4.46-10.95,7.76C38.09,46.69,35.72,50.59,34.22,54.89z"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.29,52.45c-0.33,1.31-1.66,2.1-2.96,1.76c-1.31-0.33-2.1-1.66-1.76-2.97 c1.96-7.68,5.79-14.61,10.96-20.29c5.21-5.72,11.79-10.16,19.21-12.82c1.27-0.45,2.67,0.21,3.12,1.48 c0.45,1.27-0.21,2.67-1.48,3.12c-6.67,2.39-12.57,6.38-17.25,11.5C26.49,39.33,23.05,45.56,21.29,52.45z"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="61.44" cy="61.44" r="10" fill="currentColor" opacity="0.8" />
        </g>
        <g
          className="transition-transform duration-700 ease-in-out"
          style={{ transformBox: 'fill-box', transformOrigin: 'top right', transform: 'rotate(-50deg)', opacity: 0.8 }}
        >
          <path
            d="M84.49,65.97c2.34,0,4.41,1.16,5.67,2.94l7.86-1.46l16.42-55.19c0.45-1.54,2.07-2.42,3.61-1.97 s2.42,2.07,1.97,3.61l-16.93,56.9c-0.33,1.13-1.29,1.91-2.39,2.06l-9.48,1.76c-0.76,3.02-3.49,5.25-6.74,5.25 c-3.84,0-6.95-3.11-6.95-6.95S80.65,65.97,84.49,65.97z"
            fill="currentColor"
          />
        </g>
      </svg>
    </button>
  );
}

export default VinylPlayer;
