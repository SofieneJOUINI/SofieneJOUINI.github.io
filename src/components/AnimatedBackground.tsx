import { useEffect, useState } from "react";
import paperPlane from "@/assets/paper-plane.png";

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Financial gradient background */}
      <div className="absolute inset-0 bg-[var(--gradient-sky)]" />
      
      {/* Clouds - parallax effect on scroll */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {/* Large clouds */}
        <div className="absolute top-[10%] left-[5%] w-64 h-32 bg-white/50 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '0s', animationDuration: '15s' }} />
        <div className="absolute top-[15%] right-[15%] w-80 h-40 bg-white/45 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '3s', animationDuration: '18s' }} />
        <div className="absolute top-[40%] left-[20%] w-72 h-36 bg-white/40 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '6s', animationDuration: '20s' }} />
      </div>

      <div 
        className="absolute inset-0 opacity-40"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* Medium clouds */}
        <div className="absolute top-[25%] right-[25%] w-56 h-28 bg-white/50 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '2s', animationDuration: '16s' }} />
        <div className="absolute top-[60%] left-[35%] w-64 h-32 bg-white/45 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '5s', animationDuration: '19s' }} />
        <div className="absolute top-[50%] right-[10%] w-48 h-24 bg-white/40 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '8s', animationDuration: '17s' }} />
      </div>


      {/* Paper airplanes flying - realistic flight paths */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Planes flying from left to right with staggered timing */}
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[8%] -left-[10%] w-8 h-8 animate-plane-fly opacity-0" 
          style={{ '--plane-duration': '18s', animationDelay: '0s', '--plane-rotate': '15deg' } as React.CSSProperties}
        />
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[22%] -left-[15%] w-6 h-6 animate-plane-fly opacity-0" 
          style={{ '--plane-duration': '22s', animationDelay: '3s', '--plane-rotate': '12deg' } as React.CSSProperties}
        />
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[38%] -left-[8%] w-7 h-7 animate-plane-fly opacity-0" 
          style={{ '--plane-duration': '20s', animationDelay: '6s', '--plane-rotate': '18deg' } as React.CSSProperties}
        />
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[55%] -left-[12%] w-5 h-5 animate-plane-fly opacity-0" 
          style={{ '--plane-duration': '25s', animationDelay: '9s', '--plane-rotate': '10deg' } as React.CSSProperties}
        />
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[72%] -left-[5%] w-8 h-8 animate-plane-fly opacity-0" 
          style={{ '--plane-duration': '19s', animationDelay: '12s', '--plane-rotate': '14deg' } as React.CSSProperties}
        />
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[85%] -left-[18%] w-6 h-6 animate-plane-fly opacity-0" 
          style={{ '--plane-duration': '23s', animationDelay: '15s', '--plane-rotate': '16deg' } as React.CSSProperties}
        />
        
        {/* Drifting planes for depth - slower, subtle movement */}
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[15%] right-[25%] w-4 h-4 animate-plane-drift opacity-20" 
          style={{ animationDelay: '1s', '--plane-rotate': '20deg' } as React.CSSProperties}
        />
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[45%] left-[60%] w-3 h-3 animate-plane-drift opacity-15" 
          style={{ animationDelay: '2.5s', '--plane-rotate': '15deg' } as React.CSSProperties}
        />
        <img 
          src={paperPlane} 
          alt="" 
          className="absolute top-[68%] right-[40%] w-5 h-5 animate-plane-drift opacity-25" 
          style={{ animationDelay: '4s', '--plane-rotate': '18deg' } as React.CSSProperties}
        />
      </div>

      {/* Data flow particles */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        {/* Small transaction particles */}
        <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-[hsl(210_85%_55%)] rounded-full blur-[1px] animate-float" 
             style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
        <div className="absolute top-[40%] right-[30%] w-1.5 h-1.5 bg-[hsl(45_95%_58%)] rounded-full blur-[1px] animate-float" 
             style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
        <div className="absolute top-[60%] left-[15%] w-1.5 h-1.5 bg-[hsl(145_65%_50%)] rounded-full blur-[1px] animate-float" 
             style={{ animationDelay: '2.5s', animationDuration: '4.2s' }} />
        <div className="absolute top-[85%] right-[20%] w-1.5 h-1.5 bg-[hsl(210_85%_55%)] rounded-full blur-[1px] animate-float" 
             style={{ animationDelay: '3.5s', animationDuration: '4.8s' }} />
      </div>

      {/* Financial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(45_95%_58%_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(45_95%_58%_/_0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
    </div>
  );
};

export default AnimatedBackground;
