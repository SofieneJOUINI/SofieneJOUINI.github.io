import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  GitBranch, 
  Container,
  Boxes,
  Gauge,
  Layout,
  Layers,
  Workflow,
  Terminal,
  FileCode,
  BarChart3,
  Plane,
  CreditCard,
  Network,
  Cpu,
  Hexagon,
  Cog,
  Zap,
  FlaskConical,
  MonitorDot,
  PackageCheck,
  Activity,
  PieChart,
  Calculator,
  Globe,
  Brain
} from "lucide-react";
import { profileConfig, uiConfig } from "@/config/profileData";

const Skills = () => {
  const { skills: skillsUI } = uiConfig;
  
  const skillIcons: Record<string, React.ReactNode> = {
    // Frontend
    "Angular": <Hexagon className="w-5 h-5" />,
    "Nx Angular": <Boxes className="w-5 h-5" />,
    "TypeScript": <FileCode className="w-5 h-5" />,
    "Google Material Design": <Layout className="w-5 h-5" />,
    "ChartJS": <BarChart3 className="w-5 h-5" />,
    "Data Visualization": <PieChart className="w-5 h-5" />,
    // Backend
    "Node.js": <Hexagon className="w-5 h-5" />,
    "Nest.js": <Cpu className="w-5 h-5" />,
    "Java": <Code2 className="w-5 h-5" />,
    "Spring Boot": <Zap className="w-5 h-5" />,
    "Spring Reactive": <Activity className="w-5 h-5" />,
    "REST APIs": <Network className="w-5 h-5" />,
    "Express.js": <Server className="w-5 h-5" />,
    // Architecture & Design
    "Clean Architecture": <Layers className="w-5 h-5" />,
    "Domain-Driven Design": <Boxes className="w-5 h-5" />,
    "Hexagonal Architecture": <Hexagon className="w-5 h-5" />,
    "Event-Driven Architecture": <Workflow className="w-5 h-5" />,
    "TDD": <FlaskConical className="w-5 h-5" />,
    "Design Patterns": <Cog className="w-5 h-5" />,
    // DevOps & Tools
    "Docker": <Container className="w-5 h-5" />,
    "AWS": <Cloud className="w-5 h-5" />,
    "Linux": <Terminal className="w-5 h-5" />,
    "Shell Scripting": <Terminal className="w-5 h-5" />,
    "Git": <GitBranch className="w-5 h-5" />,
    "CI/CD": <PackageCheck className="w-5 h-5" />,
    "Jira": <MonitorDot className="w-5 h-5" />,
    "Scrum": <Activity className="w-5 h-5" />,
    // Data & Databases
    "SQL": <Database className="w-5 h-5" />,
    "MongoDB": <Database className="w-5 h-5" />,
    "NoSQL": <Database className="w-5 h-5" />,
    "ETL": <Workflow className="w-5 h-5" />,
    "Analytics": <BarChart3 className="w-5 h-5" />,
    "KPI Dashboards": <Gauge className="w-5 h-5" />,
    "Python": <Code2 className="w-5 h-5" />,
    "Pandas": <PieChart className="w-5 h-5" />,
    // Domain Expertise
    "Airline Industry": <Plane className="w-5 h-5" />,
    "Revenue Accounting": <Calculator className="w-5 h-5" />,
    "Payment Reconciliation": <CreditCard className="w-5 h-5" />,
    "Interline Operations": <Globe className="w-5 h-5" />,
    "Amadeus": <Plane className="w-5 h-5" />
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend": <Layout className="w-6 h-6" />,
    "Backend": <Server className="w-6 h-6" />,
    "Architecture & Design": <Layers className="w-6 h-6" />,
    "DevOps & Tools": <Container className="w-6 h-6" />,
    "Data & Databases": <Database className="w-6 h-6" />,
    "Domain Expertise": <Brain className="w-6 h-6" />
  };

  return (
    <section id="skills" className="py-8 sm:py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          <span className="text-gradient">{skillsUI.sectionTitleHighlight}</span> {skillsUI.sectionTitle}
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {profileConfig.skills.categories.map((category, index) => (
            <div 
              key={category.id}
              className="group glass-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-elegant)] animate-fade-in hover:shadow-[var(--shadow-glow)] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {categoryIcons[category.title]}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="group/badge px-4 py-2 text-sm bg-muted hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)] cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-primary group-hover/badge:scale-125 group-hover/badge:rotate-12 transition-all duration-300">
                        {skillIcons[skill]}
                      </span>
                      {skill}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
