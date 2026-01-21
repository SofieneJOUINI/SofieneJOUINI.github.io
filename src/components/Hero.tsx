import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpeg";
import { profileConfig, uiConfig, socialLinks } from "@/config/profileData";

const Hero = () => {
  const { hero: heroUI } = uiConfig;
  const { hero: heroData } = profileConfig;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 relative group">
            {/* Premium gold ring - outer */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-primary via-primary/60 to-primary/30 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Inner refined border */}
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-primary/80 via-primary/40 to-transparent" />
            
            {/* Image container with executive depth shadow */}
            <div className="relative w-full h-full rounded-full bg-background p-1 shadow-[0_15px_40px_-10px_hsl(var(--primary)/0.3),0_4px_15px_-5px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/0.4),0_8px_20px_-5px_rgba(0,0,0,0.4)] transition-all duration-500">
              <img 
                src={heroPortrait} 
                alt="Professional portrait" 
                className="w-full h-full object-cover rounded-full group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center md:text-left max-w-2xl">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{heroUI.greeting}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
            {heroUI.namePrefix}{" "}
            <span className="text-gradient">
              {heroData.name}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-4 md:mb-6 font-medium">
            {heroData.title}
          </p>
          
          {/* Description: split on newline and render each line separately to force two-line layout */}
          <div className="text-base sm:text-lg text-muted-foreground mb-8 md:mb-10 max-w-xl leading-relaxed space-y-2">
            {heroData.description.split('\n').map((line, idx) => (
              <p key={idx} className="m-0">
                {line}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 md:mb-10">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)] hover:shadow-[0_15px_40px_-10px_hsl(var(--primary)/0.6)] transition-all duration-300 w-full sm:w-auto group"
              onClick={() => document.querySelector(heroUI.primaryButtonTarget)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {heroUI.primaryButtonText}
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)] hover:shadow-[0_15px_40px_-10px_hsl(var(--primary)/0.6)] transition-all duration-300 w-full sm:w-auto group"
              onClick={() => document.querySelector(heroUI.secondaryButtonTarget)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {heroUI.secondaryButtonText}
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-3 justify-center md:justify-start">
            {socialLinks.github.enabled && (
              <a 
                href={socialLinks.github.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/30 hover:border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {socialLinks.linkedin.enabled && (
              <a 
                href={socialLinks.linkedin.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/30 hover:border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {socialLinks.email.enabled && (
              <a 
                href={`mailto:${socialLinks.email.address}`}
                className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/30 hover:border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
