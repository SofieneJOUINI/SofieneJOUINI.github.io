import { profileConfig, uiConfig } from "@/config/profileData";
import { User, Shield, Sparkles, CheckCircle2 } from "lucide-react";

const About = () => {
  const { about: aboutUI } = uiConfig;
  const { about: aboutData } = profileConfig;

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center">
          {aboutUI.sectionTitle} <span className="text-gradient">{aboutUI.sectionTitleHighlight}</span>
        </h2>
        
        {/* Digital Wallet Container */}
        <div className="relative animate-fade-in">
          {/* Main wallet card */}
          <div className="relative bg-gradient-to-br from-card via-card to-muted/50 backdrop-blur-xl rounded-3xl overflow-hidden">
            
            {/* Glassmorphism overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            {/* Header */}
            <div className="relative p-6 sm:p-8 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">{aboutUI.sectionTitle} {aboutUI.sectionTitleHighlight}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Shield className="w-3 h-3" /> {aboutUI.verifiedBadge}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-500">{aboutUI.statusBadge}</span>
              </div>
            </div>

            {/* Balance-style info card */}
            <div className="relative mx-6 sm:mx-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{aboutUI.experienceLabel}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground flex items-baseline gap-2">
                    {aboutUI.experienceValue}
                    <span className="text-sm font-normal text-primary">{aboutUI.experienceSubValue}</span>
                  </p>
                </div>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {aboutUI.globalExperienceFlags.map((flag, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-sm">
                      {flag}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{aboutUI.globalExperienceLabel}</span>
              </div>
            </div>

            {/* About content as transaction items */}
            <div className="relative p-6 sm:p-8 space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-px bg-border" />
                {aboutUI.storyLabel}
              </h4>
              
              {aboutData.paragraphs.map((paragraph, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
