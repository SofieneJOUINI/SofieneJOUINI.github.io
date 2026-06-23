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
    description: "Senior software engineer with experience delivering payment reconciliation and accounting solutions in the airline industry. Grew from hands-on development to leading backend and frontend engineering teams, driving technical decisions and implementation across the full product lifecycle.",
    profileImage: "/src/assets/hero-portrait.jpeg"
  },

  // ========== ABOUT SECTION ==========
  about: {
    paragraphs: [
      "Senior software engineer at M&C since 2018, progressively taking on more complex responsibilities across payment reconciliation and airline accounting systems.",
      "Work on backend-heavy systems processing airline sales, payment, and accounting transactions, with a strong focus on clean architecture and domain-driven design.",
      "Currently leading backend and frontend teams, coordinating with DevOps, Architecture, and Product to keep delivery on track."
    ]
  },

  // ========== EXPERIENCE SECTION ==========
  experience: [
    {
      id: "senior-lead",
      title: "Senior Software Engineer (Team Lead)",
      company: "M&C",
      period: "Jan 2024 - Present",
      description: "Took on technical leadership in Adad, leading and synchronizing backend and frontend teams to design and deliver clean, well-architected solutions around payment reconciliation and accounting in the airline industry.",
      achievements: [
        "Along the way, built solid functional expertise in payment reconciliation and airline finance, which helped a lot in translating business needs into the right technical decisions.",
        "Provided guidance and mentorship across the team, and made sure clean architecture, clean code, and design patterns were applied consistently.",
        "Coordinated with DevOps during releases, collaborated with the Architecture team on design decisions and technical evolution, and worked with the Product team on roadmap alignment."
      ]
    },
    {
      id: "software-engineer",
      title: "Software Engineer - Adad (Payment Reconciliation Platform)",
      company: "M&C",
      period: "Apr 2022 - Dec 2023",
      description: "ADAD is an agnostic end-to-end payment reconciliation platform for the airline industry, connecting with airlines' payment and finance ecosystems to automate the validation and reconciliation of transactions across multiple payment providers, bank accounts, and platforms. A SaaS product that brings real structure to a traditionally complex and manual process, currently live in production with several international carriers and being rolled out to more.",
      achievements: [
        "Involved in the full product lifecycle, from inception to delivery. Worked in an Agile environment using Scrum and Jira, designing and building ETL pipelines, REST APIs, and services around a Hexagonal, Event-Driven SOA architecture with ActiveMQ as the messaging broker.",
        "Implemented using TypeScript, NestJS, Java, Spring Reactive, and Angular, backed by PostgreSQL and MongoDB with Redis for caching, deployed on AWS. Practiced DDD, TDD, and Reactive Programming throughout, with a constant focus on clean, maintainable, and reliable code.",
        "Also contributed to data analytics, KPI dashboards, and data visualization, bringing visibility into reconciliation outcomes and financial reporting."
      ]
    },
    {
      id: "amadeus-engineer",
      title: "Software Engineer – Amadeus Revenue Accounting",
      company: "M&C",
      period: "Oct 2018 - Mar 2022",
      description: "Amadeus Revenue Accounting is a platform that manages airline passenger revenue accounting from real-time sales and usage recording to ticket auditing, interline billing, and financial settlement between airlines.",
      achievements: [
        "Worked on support, operations, maintenance, and recovery tasks in this environment, picking up solid knowledge of airline IT, airline accounting, and interline operations, and built tools to automate some of the manual processes along the way."
      ]
    },
    {
      id: "internship",
      title: "Software Engineering Intern",
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
        skills: ["PostgreSQL", "MongoDB", "ETL", "Analytics", "KPI Dashboards", "Python", "Pandas"]
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
    phone: "+216 96 842 492",
    location: "Tunis, Tunisia"
  }
};

// ========== THEME CONFIGURATION ==========
export const themeConfig = {
  // Experience role styling (maps experience id to gradient)
  experienceColors: {
    "senior-lead": "from-primary to-primary/60",
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
