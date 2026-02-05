// ============================================
// PROFILE CONFIGURATION
// Edit this file to customize the portfolio
// ============================================

// ========== UI TEXT & LABELS ==========
export const uiConfig = {
  // Hero Section UI
  hero: {
    greeting: "Welcome to my portfolio",
    namePrefix: "Hi, I'm",
    primaryButtonText: "View My Work",
    primaryButtonTarget: "#projects",
    secondaryButtonText: "Get In Touch",
    secondaryButtonTarget: "#contact"
  },
  
  // About Section UI
  about: {
    sectionTitle: "About",
    sectionTitleHighlight: "Me",
    verifiedBadge: "Verified Professional",
    statusBadge: "Active",
    experienceLabel: "Experience Level",
    experienceValue: "Senior",
    experienceSubValue: "Engineer",
    globalExperienceLabel: "Global Experience",
    globalExperienceFlags: ["🇹🇳", "🇫🇷", "🌍"],
    storyLabel: "My Story",
    ctaTitle: "Get in Touch",
    ctaSubtitle: "Start a conversation",
    ctaTarget: "#contact"
  },
  
  // Experience Section UI
  experience: {
    sectionTitle: "Work",
    sectionTitleHighlight: "Experience"
  },
  
  // Skills Section UI
  skills: {
    sectionTitleHighlight: "Skills",
    sectionTitle: "& Technologies"
  },
  
  // Projects Section UI
  projects: {
    sectionTitle: "Featured",
    sectionTitleHighlight: "Projects"
  },
  
  // Education Section UI
  education: {
    sectionTitleHighlight: "Education"
  },
  
  // Contact Section UI
  contact: {
    badge: "Ready for Takeoff",
    sectionTitle: "Get In",
    sectionTitleHighlight: "Touch",
    description: "Let's connect and discuss how we can work together on your next project",
    boardingPassTitle: "Connect Flight",
    boardingPassLabel: "Boarding Pass",
    gate: "A1",
    originLabel: "Origin",
    originText: "YOU",
    destinationLabel: "Destination",
    destinationText: "ME"
  }
};

// ========== SOCIAL LINKS ==========
export const socialLinks = {
  github: {
    url: "https://github.com/SofieneJOUINI",
    enabled: true
  },
  linkedin: {
    url: "https://www.linkedin.com/in/sofiene-jouini-934a50113/",
    enabled: true
  },
  email: {
    address: "jouinisofiene@gmail.com",
    enabled: true
  }
};

// ========== PROFILE DATA ==========
export const profileConfig = {
  // ========== HERO SECTION ==========
  hero: {
    name: "Sofiene JOUINI",
    title: "Senior Software Engineer",
    description: "I design and develop scalable, maintainable systems for the airline IT industry, focused on payment management and accounting systems.",
    profileImage: "/src/assets/hero-portrait.jpeg"
  },

  // ========== ABOUT SECTION ==========
  about: {
    paragraphs: [
      "I'm a software engineering leader with 7+ years of experience in the airline industry, working continuously within the same organization. My journey started with hands-on development and evolved into leading and coordinating engineering teams across complex payment and accounting domains.",
      "I'm working on scalable, modular solutions handling millions of airline sales, payment, and accounting transactions, with a strong focus on clean architecture and domain-driven design."
      "Currently leading backend and frontend teams, working closely with DevOps, Architecture, and Product teams to align efforts and meet delivery targets."
    ]
  },

  // ========== EXPERIENCE SECTION ==========
  experience: [
    {
      id: "senior-manager",
      title: "Senior Application Manager",
      company: "M&C",
      period: "Aug 2025 - Present",
      description: "Manage and coordinate backend and frontend teams working on the project.",
      achievements: [
        "Guiding team leads to maintain efficient collaboration and delivery",
        "Working with DevOps, Architecture, and Product teams to align efforts",
        "Collaborating with the Product team to align the roadmap and meet delivery targets",
        "Reviewing and approving technical and change requests"
      ]
    },
    {
      id: "team-lead",
      title: "Team Lead – Software Engineering",
      company: "M&C",
      period: "Jan 2024 - Jul 2025",
      description: "Leading a development team to design and deliver clean, well-architected solutions addressing payment reconciliation and accounting challenges in the airline industry.",
      achievements: [
        "Team leadership, mentorship, and agile facilitation",
        "Technical guidance and cross-team collaboration",
        "Implementing Clean Architecture and Clean Code principles",
        "Design patterns and component principles"
      ]
    },
    {
      id: "software-engineer",
      title: "Software Engineer",
      company: "M&C",
      period: "Apr 2022 - Dec 2023",
      description: "Developing a payment reconciliation platform for the airline industry using a scalable architecture and delivering clean, maintainable, and reliable code.",
      achievements: [
        "Implementing Domain-Driven Design (DDD) and Hexagonal Architecture",
        "Event-Driven Architecture with ActiveMQ",
        "Building REST APIs and ETL pipelines",
        "Data visualization and KPI dashboards development"
      ]
    },
    {
      id: "amadeus-engineer",
      title: "Software Engineer – Amadeus Revenue Accounting",
      company: "M&C",
      period: "Oct 2018 - Mar 2022",
      description: "Support, operations, maintenance, and recovery tasks within Amadeus ecosystem.",
      achievements: [
        "Gaining hands-on experience in airline accounting and interline operations",
        "Developing automation solutions to streamline processes",
        "Supporting production systems and incident resolution",
        "Building airline industry domain expertise"
      ]
    },
    {
      id: "internship",
      title: "Graduation Project – Software Engineer",
      company: "M&C (Internship)",
      period: "Mar 2018 - Jul 2018",
      description: "Designed and developed a software solution for HouseCab, a chauffeur-driven tourism vehicle company.",
      achievements: [
        "Built dashboards providing actionable insights on driver activity",
        "Implemented MEAN stack (MongoDB, ExpressJS, Angular, NodeJS)",
        "Integrated WEBFLEET API and Google Maps API",
        "Data analysis with Python (Pandas) and ChartJS visualizations"
      ]
    }
  ],

  // ========== SKILLS SECTION ==========
  skills: {
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        skills: ["Angular", "Nx Angular", "TypeScript", "Google Material Design", "ChartJS", "Data Visualization"]
      },
      {
        id: "backend",
        title: "Backend",
        skills: ["Node.js", "Nest.js", "Java", "Spring Boot", "Spring Reactive", "REST APIs", "Express.js"]
      },
      {
        id: "architecture",
        title: "Architecture & Design",
        skills: ["Clean Architecture", "Domain-Driven Design", "Hexagonal Architecture", "Event-Driven Architecture", "TDD", "Design Patterns"]
      },
      {
        id: "devops",
        title: "DevOps & Tools",
        skills: ["Docker", "AWS", "Linux", "Shell Scripting", "Git", "CI/CD", "Jira", "Scrum"]
      },
      {
        id: "data",
        title: "Data & Databases",
        skills: ["SQL", "MongoDB", "NoSQL", "ETL", "Analytics", "KPI Dashboards", "Python", "Pandas"]
      },
      {
        id: "domain",
        title: "Domain Expertise",
        skills: ["Airline Industry", "Revenue Accounting", "Payment Reconciliation", "Interline Operations", "Amadeus"]
      }
    ]
  },

  // ========== PROJECTS SECTION ==========
  projects: [
    {
      id: "adad",
      title: "Adad",
      description: "Scalable payment reconciliation platform for the airline industry with clean architecture and reliable processing.",
      tech: ["TypeScript", "Nest.js", "Spring Boot", "Java", "Postgres", "ActiveMQ"]
    },
    {
      id: "ra-doctor",
      title: "RA Doctor",
      description: "Diagnostic tool for Amadeus Revenue Accounting that detects impacted airline tickets based on defined patterns and facilitates their recovery.",
      tech: ["Python", "SQL", "Shell Scripting"]
    },
    {
      id: "automation-tools",
      title: "Process Automation Tools",
      description: "Automation solutions for Amadeus Revenue Accounting support and maintenance operations.",
      tech: ["Python", "Shell Scripting", "Linux", "SQL"]
    },
    {
      id: "housecab",
      title: "HouseCab VTC Platform",
      description: "Driver activity dashboards and decision support system for a chauffeur-driven tourism vehicle company.",
      tech: ["MongoDB", "Express.js", "Angular", "Node.js", "Python"]
    }
  ],

  // ========== EDUCATION SECTION ==========
  education: [
    {
      id: "ensimag",
      degree: "Engineering Degree – Computer Science",
      institution: "Grenoble INP - Ensimag",
      period: "2017 - 2018",
      description: "École nationale supérieure d'informatique et de mathématiques appliquées",
      achievements: [
        "Specialized in Software Engineering",
        "International exchange program"
      ],
      logo: "ensimag"
    },
    {
      id: "ensit",
      degree: "Engineering Degree – Computer Science",
      institution: "ENSIT - École nationale supérieure des ingénieurs de Tunis",
      period: "2015 - 2017",
      description: "National Engineering School of Tunis",
      achievements: [
        "Software Engineering specialization",
        "Strong foundation in algorithms and systems"
      ],
      logo: "ensit"
    },
    {
      id: "ipeit",
      degree: "Preparatory Classes",
      institution: "IPEIT - Institut Préparatoire aux Etudes d'Ingénieurs de Tunis",
      period: "2013 - 2015",
      description: "Intensive preparatory program for engineering schools",
      achievements: [
        "Mathematics and Physics focus",
        "Competitive entrance exam preparation"
      ],
      logo: "ipeit"
    }
  ],

  // ========== CONTACT SECTION ==========
  contact: {
    email: "jouinisofiene@gmail.com",
    phone: "+216 XX XXX XXX",
    location: "Tunis, Tunisia"
  }
};

// ========== THEME CONFIGURATION ==========
export const themeConfig = {
  // Experience role styling (maps experience id to gradient)
  experienceColors: {
    "senior-manager": "from-primary to-primary/60",
    "team-lead": "from-primary/80 to-primary/40",
    "software-engineer": "from-primary/60 to-primary/30",
    "amadeus-engineer": "from-primary/50 to-primary/20",
    "internship": "from-primary/40 to-primary/10"
  },
  
  // Project styling (maps project id to gradient)
  projectColors: {
    "adad": "from-primary/20 to-primary/5",
    "housecab": "from-amber-500/20 to-amber-500/5",
    "automation-tools": "from-secondary/40 to-secondary/10",
    "ra-doctor": "from-teal-500/20 to-teal-500/5"
  }
};
