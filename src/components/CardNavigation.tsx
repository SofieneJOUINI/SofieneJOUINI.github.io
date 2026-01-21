import { useState, useEffect } from "react";
import { CreditCard } from "lucide-react";

interface CardNavigationProps {
  sections: string[];
}

const CardNavigation = ({ sections }: CardNavigationProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    
    const sectionId = sections[index];
    const element = document.getElementById(sectionId);
    
    if (element) {
      setIsAnimating(true);
      setCurrentSection(index);
      
      // Scroll to show the header/top of the section
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start"
      });
      
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const handleNext = () => {
    if (!isAnimating && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (!isAnimating && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStart - touchEnd;
    
    if (swipeDistance > 30) {
      // Swiped up - go to previous section
      handlePrevious();
    } else if (swipeDistance < -30) {
      // Swiped down - go to next section
      handleNext();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setMouseStart(e.clientY);
    setMouseEnd(e.clientY);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMouseEnd(e.clientY);
    };

    const handleGlobalMouseUp = () => {
      const dragDistance = mouseStart - mouseEnd;
      
      if (dragDistance > 30) {
        // Dragged up - go to previous section
        handlePrevious();
      } else if (dragDistance < -30) {
        // Dragged down - go to next section
        handleNext();
      }
      
      setIsDragging(false);
      setMouseStart(0);
      setMouseEnd(0);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, mouseStart, mouseEnd]);

  useEffect(() => {
    const handleScroll = () => {
      if (isAnimating) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Handle edge case: at the very top
      if (window.scrollY < 50) {
        setCurrentSection(0);
        return;
      }
      
      // Handle edge case: at the very bottom
      if (window.scrollY >= maxScroll - 50) {
        setCurrentSection(sections.length - 1);
        return;
      }
      
      // Find the section closest to the center of the viewport
      let closestSection = 0;
      let closestDistance = Infinity;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(elementCenter - viewportCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = index;
          }
        }
      });
      
      setCurrentSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run on mount to set initial section
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, isAnimating]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {/* Credit Card with Swipe */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        className={`cursor-grab active:cursor-grabbing select-none transition-all duration-300 rotate-90 ${
          isAnimating || isDragging ? "scale-110 rotate-[96deg]" : "scale-100 rotate-90"
        } hover:scale-105 active:scale-95`}
      >
        <div className="relative p-2 bg-gradient-to-br from-[hsl(45_95%_58%)] to-[hsl(45_85%_48%)] backdrop-blur-sm rounded-lg shadow-2xl">
          <CreditCard 
            className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
          
          {/* Section Indicator - Counter rotated back to horizontal */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 -rotate-90 bg-background text-foreground text-xs px-2 py-0.5 rounded-full font-medium border border-border shadow-lg whitespace-nowrap">
            {currentSection + 1}/{sections.length}
          </div>
        </div>
      </div>

      {/* Section Dots */}
      <div className="flex flex-col gap-2 mt-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSection === index
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardNavigation;
