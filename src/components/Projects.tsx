import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profileConfig, uiConfig, themeConfig } from "@/config/profileData";
import { 
  Plane, 
  Car, 
  Cog, 
  Layers,
  ArrowUpRight,
  Stethoscope
} from "lucide-react";

const Projects = () => {
  const { projects: projectsUI } = uiConfig;
  
  // Icon mapping based on project id
  const projectIcons: Record<string, React.ReactNode> = {
    "adad": <Plane className="w-8 h-8" />,
    "housecab": <Car className="w-8 h-8" />,
    "automation-tools": <Cog className="w-8 h-8" />,
    "ra-doctor": <Stethoscope className="w-8 h-8" />
  };

  return (
    <section id="projects" className="py-8 sm:py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          {projectsUI.sectionTitle} <span className="text-gradient">{projectsUI.sectionTitleHighlight}</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {profileConfig.projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-card border-none shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-fade-in group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${themeConfig.projectColors[project.id] || "from-primary/10 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <CardHeader className="relative z-10">
                {/* Icon */}
                <div className="mb-4 p-3 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {projectIcons[project.id] || <Layers className="w-8 h-8" />}
                </div>
                
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="border-primary/30 bg-background/50 backdrop-blur-sm group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300"
                      style={{ 
                        animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`,
                        transitionDelay: `${techIndex * 30}ms`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
