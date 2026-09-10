/**
 * Central profile and portfolio configuration for Rithick P.
 * Easily update social URLs, project links, or personal details in this single file.
 */

export const PROFILE = {
  name: "Rithick P",
  primaryRole: "Java Developer",
  secondaryRole: "Java Full-Stack Developer",
  tagline: "Building practical web applications with Java, Spring Boot, React and MySQL.",
  location: "Coimbatore, Tamil Nadu",
  email: "rithick0807@gmail.com",
  phone: "+91-7358878040",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
  
  // Social links - Centralized for easy editing
  socialLinks: {
    github: "[ADD GITHUB URL]",
    linkedin: "[ADD LINKEDIN URL]",
    leetcode: "[ADD LEETCODE URL]",
  },

  // Career objective directly from resume
  careerObjective:
    "Motivated and aspiring Java Developer with hands-on experience in Java, Spring Boot, MySQL, REST APIs, and full-stack web development. Seeking an opportunity to apply my problem-solving and programming skills, contribute to real-world software projects, and continuously learn and grow as a software professional.",

  // Quick info highlight cards
  quickInfo: [
    { label: "Role", value: "Java Developer", icon: "Code2" },
    { label: "Education", value: "B.Tech Information Technology", icon: "GraduationCap" },
    { label: "College", value: "Sri Krishna College of Technology", icon: "Building2" },
    { label: "Location", value: "Coimbatore, Tamil Nadu", icon: "MapPin" },
  ],

  stats: [
    { label: "LeetCode Streak", value: "110+ Days", detail: "Problem Solving" },
    { label: "Academic CGPA", value: "7.96 / 10", detail: "B.Tech IT" },
    { label: "Certifications", value: "6 Verified", detail: "Meta, AWS, Google" },
    { label: "Core Focus", value: "Java & Spring", detail: "REST APIs & MySQL" },
  ],

  skills: [
    {
      category: "Languages",
      items: ["Java", "C++", "C", "SQL", "JavaScript", "Python"],
    },
    {
      category: "Frameworks",
      items: ["Spring Boot", "React"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "VMware"],
    },
    {
      category: "Technologies",
      items: ["Java Servlets", "JDBC", "REST APIs", "JWT", "Swagger"],
    },
    {
      category: "Core Concepts",
      items: ["Object-Oriented Programming", "REST APIs", "DBMS"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Employee Management System",
      category: "Java & Backend",
      badge: "Enterprise Java",
      technologies: "Java Servlets, JDBC, MySQL",
      description: "Developed a web-based application to manage employee records efficiently with complete CRUD operations and database integration.",
      features: [
        "Add employee records",
        "Update existing employees",
        "Delete employee records",
        "View employee directory",
        "Full CRUD operations",
        "ACID database integration"
      ],
      githubUrl: "[ADD GITHUB URL]",
      liveDemoUrl: "[ADD LIVE DEMO URL]",
      overview: "A structured web application built using enterprise Java Servlets and JDBC to streamline corporate employee administrative workflows.",
      problemStatement: "Paper-based and decentralized employee tracking causes high operational overhead, record redundancy, and sluggish data lookups.",
      solution: "Implemented an ACID-compliant, database-backed Java system with clean Servlet routing and direct JDBC queries for rapid CRUD operations.",
      architecture: "Frontend / Web View ➔ Java Servlets ➔ JDBC Layer ➔ MySQL Database"
    },
    {
      id: 2,
      title: "SHIELD – Secure Web Platform",
      category: "Security",
      badge: "Spring Security & JWT",
      technologies: "Spring Boot, JWT, Role-Based Access Control",
      description: "Developed a secure authentication-based web platform using JWT login and role-based access control.",
      features: [
        "User authentication",
        "JWT login tokens",
        "Role-based access control (RBAC)",
        "Secure endpoint protection"
      ],
      githubUrl: "[ADD GITHUB URL]",
      liveDemoUrl: "[ADD LIVE DEMO URL]",
      overview: "A security-first web platform engineered to protect sensitive application endpoints through stateless tokens and role-based authority gates.",
      problemStatement: "Legacy session state models scale poorly and increase vulnerability to unauthorized endpoint exploitation across distributed systems.",
      solution: "Engineered stateless token verification via JSON Web Tokens (JWT) integrated with Spring Security to enforce strict role-level resource permissions.",
      architecture: "Client Request ➔ JWT Auth Filter ➔ Spring Boot Security ➔ Role-Based Controller Guard"
    },
    {
      id: 3,
      title: "Bin Overflow Predictor API – Smart Waste Management",
      category: "Full Stack & Web",
      badge: "Smart City API",
      technologies: "Spring Boot, MySQL, REST APIs, JWT, Swagger",
      description: "Developed an API to predict garbage bin overflow using historical fill-level data with secure REST endpoints and Swagger documentation.",
      features: [
        "Bin overflow prediction",
        "Historical fill-level data",
        "REST APIs",
        "JWT authentication",
        "Swagger API documentation",
        "MySQL database integration"
      ],
      githubUrl: "[ADD GITHUB URL]",
      liveDemoUrl: "[ADD LIVE DEMO URL]",
      overview: "A smart municipal waste management API designed to forecast garbage container overflow events based on historical fill logs.",
      problemStatement: "Irregular waste accumulation leads to roadside bin overflow, health hazards, and inefficient municipal garbage truck routing.",
      solution: "Architected RESTful endpoints documented via Swagger that ingest sensor fill telemetry and evaluate fill velocity to trigger pre-emptive collection alerts.",
      architecture: "Telemetry Clients ➔ REST Endpoints (Swagger) ➔ Spring Boot Predictor Service ➔ MySQL Data Store"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Full Stack Java Intern",
      company: "YELKOM TECHNOLOGIES",
      location: "Coimbatore, Tamil Nadu",
      duration: "April 2026 – June 2026",
      description: "Completed 5-week training in Java, Spring Boot, and MySQL, gaining practical experience in full-stack Java development.",
      technologies: "Java, Spring Boot, MySQL, Full-stack development"
    }
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech Information Technology",
      institution: "Sri Krishna College of Technology",
      duration: "2024 – 2028",
      score: "CGPA: 7.96 / 10",
      description: "Specializing in Software Engineering, Data Structures, OOP, and Enterprise Full-Stack Application Development."
    },
    {
      id: 2,
      degree: "HSC",
      institution: "Sri Vidhya Mandir (CBSE) Hr. Sec. School",
      duration: "2024",
      score: "64%",
      description: "Completed Higher Secondary Certificate with emphasis on Science and Mathematics."
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "SRV Matric Hr. Sec. School",
      duration: "2022",
      score: "85%",
      description: "Completed Secondary School Leaving Certificate with strong academic distinction."
    }
  ],

  achievements: [
    {
      id: 1,
      title: "LeetCode",
      subtitle: "110+ Day Coding Streak",
      description: "Maintained a 110+ day coding streak, demonstrating consistent problem-solving practice.",
      badge: "Coding Streak",
      highlight: true
    },
    {
      id: 2,
      title: "Smart India Hackathon (SIH) 2025",
      subtitle: "National Innovation Challenge",
      description: "Participated and contributed to developing innovative solutions.",
      badge: "Hackathon",
      highlight: false
    },
    {
      id: 3,
      title: "DevHack 2026",
      subtitle: "Sri Krishna College of Technology",
      description: "Participated in the hackathon organized by Sri Krishna College of Technology.",
      badge: "Hackathon",
      highlight: false
    },
    {
      id: 4,
      title: "MSME Hackathon",
      subtitle: "Industry Driven Solutions",
      description: "Designed technology-driven solutions to address real-world industry challenges.",
      badge: "Industry Challenge",
      highlight: false
    },
    {
      id: 5,
      title: "Statathon",
      subtitle: "Data Analytics & Insights",
      description: "Performed data analysis and visualization to derive actionable insights from datasets.",
      badge: "Data Analytics",
      highlight: false
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Java Programming: A Comprehensive Bootcamp from Zero to Hero",
      provider: "Infosys Springboard",
      credentialUrl: "[ADD CERTIFICATE URL]"
    },
    {
      id: 2,
      title: "Database Structures and Management with MySQL",
      provider: "Meta",
      credentialUrl: "[ADD CERTIFICATE URL]"
    },
    {
      id: 3,
      title: "Introduction to Artificial Intelligence",
      provider: "Infosys Springboard",
      credentialUrl: "[ADD CERTIFICATE URL]"
    },
    {
      id: 4,
      title: "Introduction to Large Language Models",
      provider: "NPTEL",
      credentialUrl: "[ADD CERTIFICATE URL]"
    },
    {
      id: 5,
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      credentialUrl: "[ADD CERTIFICATE URL]"
    },
    {
      id: 6,
      title: "Crash Course on Python",
      provider: "Google",
      credentialUrl: "[ADD CERTIFICATE URL]"
    }
  ]
};
