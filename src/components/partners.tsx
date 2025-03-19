import { useEffect, useState, useRef } from 'react';

interface LogoSliderProps {
  logos: {
    src: string;
    alt: string;
  }[];
  speed?: number; // pixels per second
}

function LogoSlider({ logos, speed = 30 }: LogoSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Get container dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setScrollWidth(containerRef.current.scrollWidth / 2);
      }
    };
    
    updateDimensions();
    
    // Set up animation
    const logoContainer = containerRef.current;
    const totalScrollDistance = scrollWidth;
    
    // Create animation
    let start: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      
      // Calculate how far to scroll based on elapsed time and speed
      const scrollPosition = (elapsed * speed / 1000) % totalScrollDistance;
      
      if (logoContainer) {
        logoContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    // Handle resize
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [speed, scrollWidth]);
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Enhanced gradient overlays for better fade effect */}
      <div className="absolute top-0 left-0 h-full w-32 z-10" 
           style={{ 
             background: 'linear-gradient(to right, #f8fafc, #f8fafc 40%, rgba(255, 255, 255, 0))'
           }}>
      </div>
      <div className="absolute top-0 right-0 h-full w-32 z-10"
           style={{ 
             background: 'linear-gradient(to left, #f8fafc, #f8fafc 40%, rgba(255, 255, 255, 0))'
           }}>
      </div>
      
      <div className="overflow-hidden px-4">
        <div 
          ref={containerRef}
          className="flex items-center"
          style={{ willChange: 'transform' }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex-shrink-0 px-8 h-12">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-full w-auto max-h-8 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
              />
            </div>
          ))}
          
          {/* Duplicate logos for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex-shrink-0 px-8 h-12">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-full w-auto max-h-8 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Partners() {
  // Logos de exemplo
  const partnerLogos = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', alt: 'Nike' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', alt: 'Apple' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Amazon' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
  ];
  
  return (
    <section className="py-12 bg-[#f8fafc]">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-700">Empresas que confiam em nós</h2>
        <LogoSlider logos={partnerLogos} speed={40} />
      </div>
    </section>
  );
}