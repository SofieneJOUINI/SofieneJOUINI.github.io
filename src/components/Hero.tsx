import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpeg";
import { profileConfig, uiConfig, socialLinks } from "@/config/profileData";

const Hero = () => {
  const { hero: heroUI } = uiConfig;
  const { hero: heroData } = profileConfig;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 scroll-mt-20 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(0,0,0,0.22) 0%, transparent 100%)"
      }} />
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
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.querySelector(heroUI.secondaryButtonTarget)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {heroUI.secondaryButtonText}
            </Button>
            {/* Download Resume dropdown — same outline style */}
            <div className="relative group/cv w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 w-full sm:w-auto flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </Button>
              <div className="absolute left-0 top-full mt-2 w-44 rounded-xl border border-primary/20 bg-card/95 backdrop-blur-xl shadow-lg opacity-0 invisible group-hover/cv:opacity-100 group-hover/cv:visible transition-all duration-200 z-50 overflow-hidden">
                <a href="/Sofiene_JOUINI_Resume.pdf" download
                  className="flex items-center gap-2.5 px-4 py-3 text-sm text-primary/80 hover:bg-primary/10 hover:text-primary transition-colors duration-150 border-b border-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  PDF
                </a>
                <a href="/Sofiene_JOUINI_Resume.docx" download
                  className="flex items-center gap-2.5 px-4 py-3 text-sm text-primary/80 hover:bg-primary/10 hover:text-primary transition-colors duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  Word
                </a>
              </div>
            </div>
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
