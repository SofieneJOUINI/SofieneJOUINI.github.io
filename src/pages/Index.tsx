import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";
import CardNavigation from "@/components/CardNavigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const sections = ["hero", "about", "experience", "skills", "projects", "education", "contact"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <AnimatedBackground />
      <ThemeToggle />
      <CardNavigation sections={sections} />
      <div id="hero">
        <Hero />
      </div>
      <Separator className="max-w-6xl mx-auto opacity-30" />
      <div id="about">
        <About />
      </div>
      <Separator className="max-w-6xl mx-auto opacity-30" />
      <div id="experience">
        <Experience />
      </div>
      <Separator className="max-w-6xl mx-auto opacity-30" />
      <div id="skills">
        <Skills />
      </div>
      <Separator className="max-w-6xl mx-auto opacity-30" />
      <div id="projects">
        <Projects />
      </div>
      <Separator className="max-w-6xl mx-auto opacity-30" />
      <div id="education">
        <Education />
      </div>
      <Separator className="max-w-6xl mx-auto opacity-30" />
      <div id="contact">
        <Contact />
      </div>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p className="text-sm">
          © {new Date().getFullYear()} Sofiene JOUINI Profile.
        </p>
      </footer>
    </div>
  );
};

export default Index;
