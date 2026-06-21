import { 
  Crown, 
  Target, 
  Rocket, 
  Wrench, 
  Sparkles,
  ChevronRight,
  Calendar,
  Building2
} from "lucide-react";
import { profileConfig, uiConfig, themeConfig } from "@/config/profileData";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { experience: experienceUI } = uiConfig;
  
  // Icon mapping - can be extended as needed
  const roleIcons: Record<string, React.ReactNode> = {
    "senior-manager": <Crown className="w-5 h-5" />,
    "team-lead": <Target className="w-5 h-5" />,
    "software-engineer": <Rocket className="w-5 h-5" />,
    "amadeus-engineer": <Wrench className="w-5 h-5" />,
    "internship": <Sparkles className="w-5 h-5" />
  };

  return (
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center">
          {experienceUI.sectionTitle} <span className="text-gradient">{experienceUI.sectionTitleHighlight}</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          {/* Animated dots on timeline */}
          <div className="hidden sm:block absolute left-[30px] top-0 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          
          <div className="space-y-6 sm:space-y-8">
            {profileConfig.experience.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative sm:pl-20 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline node */}
                <div className="hidden sm:flex absolute left-4 top-6 w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-background border-2 border-primary/60 ring-2 ring-primary/20 ring-offset-2 ring-offset-background items-center justify-center group-hover:scale-110 group-hover:border-primary group-hover:ring-primary/40 transition-all duration-300 group-hover:shadow-[var(--shadow-glow)] z-10">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {roleIcons[exp.id] || <Rocket className="w-5 h-5" />}
                  </div>
                </div>
                
                {/* Connector line - starts after the icon */}
                <div className="hidden sm:block absolute left-[52px] top-[30px] w-[28px] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 group-hover:from-primary group-hover:to-primary/40 transition-all duration-300" />
                
                {/* Content card */}
                <div className="glass-card rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:-translate-y-1 group-hover:border-primary/30">
                  {/* Card header with gradient */}
                  <div className={`relative p-4 sm:p-6 bg-gradient-to-r ${themeConfig.experienceColors[exp.id] || "from-primary/20 to-transparent"} bg-opacity-10`}>
                    {/* Mobile icon */}
                    <div className="sm:hidden absolute top-4 right-4 p-2 rounded-lg bg-primary/10 text-primary">
                      {roleIcons[exp.id] || <Rocket className="w-5 h-5" />}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground pr-12 sm:pr-0">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <Badge variant="secondary" className="gap-1.5 bg-primary/10 hover:bg-primary/20">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </Badge>
                        <Badge variant="outline" className="gap-1.5 border-primary/30">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card body */}
                  <div className="p-4 sm:p-6 pt-3 sm:pt-4">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2.5">
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-300" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
