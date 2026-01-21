import { 
  Calendar,
  MapPin,
  Trophy,
  ChevronRight
} from "lucide-react";
import { profileConfig, uiConfig } from "@/config/profileData";
import ensimagLogo from "@/assets/ensimag-logo.png";
import ensitLogo from "@/assets/ensit-logo.png";
import ipeitLogo from "@/assets/ipeit-logo.png";

const Education = () => {
  const { education: educationUI } = uiConfig;
  
  // Logo mapping based on education logo id
  const logoMap: Record<string, string> = {
    "ensimag": ensimagLogo,
    "ensit": ensitLogo,
    "ipeit": ipeitLogo
  };

  return (
    <section id="education" className="py-8 sm:py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center">
          <span className="text-gradient">{educationUI.sectionTitleHighlight}</span>
        </h2>
        
        <div className="grid gap-6 md:gap-8">
          {profileConfig.education.map((edu, index) => (
            <div 
              key={edu.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Main card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-[var(--shadow-glow)]">
                
                {/* Decorative gradient orb */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                
                <div className="relative p-6 sm:p-8">
                  {/* Top row with icon and metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
                    {/* Logo container */}
                    <div className="flex-shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-white border border-border/30 flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] p-2 cursor-pointer">
                      <img 
                        src={logoMap[edu.logo]} 
                        alt={edu.institution} 
                        className="w-full h-full object-contain scale-110 transition-transform duration-300 group-hover:scale-125"
                      />
                    </div>
                    
                    {/* Title and metadata */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          {edu.institution}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base pl-0 sm:pl-[88px]">
                    {edu.description}
                  </p>
                  
                  {/* Achievements grid */}
                  <div className="grid sm:grid-cols-2 gap-3 pl-0 sm:pl-[88px]">
                    {edu.achievements.map((achievement, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 border border-transparent hover:border-primary/20 transition-all duration-300 group/item"
                        style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-300">
                          <Trophy className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Connector between cards */}
              {index < profileConfig.education.length - 1 && (
                <div className="hidden md:flex justify-center py-2">
                  <div className="flex flex-col items-center gap-1">
                    <ChevronRight className="w-5 h-5 text-primary/40 rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
