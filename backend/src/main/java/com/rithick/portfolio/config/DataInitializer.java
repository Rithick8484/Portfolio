package com.rithick.portfolio.config;

import com.rithick.portfolio.entity.*;
import com.rithick.portfolio.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final AchievementRepository achievementRepository;
    private final CertificationRepository certificationRepository;

    public DataInitializer(ProjectRepository projectRepository,
                           SkillRepository skillRepository,
                           ExperienceRepository experienceRepository,
                           EducationRepository educationRepository,
                           AchievementRepository achievementRepository,
                           CertificationRepository certificationRepository) {
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.achievementRepository = achievementRepository;
        this.certificationRepository = certificationRepository;
    }

    @Override
    public void run(String... args) {
        seedProjects();
        seedSkills();
        seedExperience();
        seedEducation();
        seedAchievements();
        seedCertifications();
        log.info("Portfolio database initialization verified.");
    }

    private void seedProjects() {
        if (projectRepository.count() == 0) {
            Project p1 = new Project(
                    "Employee Management System",
                    "Developed a web-based application to manage employee records efficiently with database integration.",
                    "Java Servlets, JDBC, MySQL",
                    "Add employee;Update employee;Delete employee;View employee;CRUD operations;Database integration",
                    "[ADD GITHUB URL]",
                    "[ADD LIVE DEMO URL]",
                    "A complete web-based application designed to streamline employee record management and administrative workflows.",
                    "Manual paperwork and scattered records cause data redundancy and delays in employee information lookup.",
                    "Implemented structured CRUD operations over JDBC with a normalized MySQL database for reliable data transactions.",
                    "Frontend -> Java Servlets -> JDBC -> MySQL Database",
                    1
            );

            Project p2 = new Project(
                    "SHIELD – Secure Web Platform",
                    "Developed a secure authentication-based web platform using JWT login and role-based access control.",
                    "Spring Boot, JWT, Role-Based Access Control",
                    "User authentication;JWT login;Role-based access control;Secure user access",
                    "[ADD GITHUB URL]",
                    "[ADD LIVE DEMO URL]",
                    "A security-centric web platform engineered to authenticate users and enforce granular role-based permissions.",
                    "Insecure or session-heavy architectures create vulnerability to unauthorized resource manipulation.",
                    "Architected stateless token-based authorization via JSON Web Tokens (JWT) and role access hierarchies in Spring Boot.",
                    "Client -> JWT Auth Filter -> Spring Boot REST API -> Role-Based Guard",
                    2
            );

            Project p3 = new Project(
                    "Bin Overflow Predictor API – Smart Waste Management",
                    "Developed an API to predict garbage bin overflow using historical fill-level data with documented endpoints.",
                    "Spring Boot, MySQL, REST APIs, JWT, Swagger",
                    "Bin overflow prediction;Historical fill-level data;REST APIs;JWT authentication;Swagger API documentation;MySQL database integration",
                    "[ADD GITHUB URL]",
                    "[ADD LIVE DEMO URL]",
                    "A smart waste management RESTful service predicting municipal container overflow through historical telemetry.",
                    "Unpredictable municipal waste accumulation leads to street overflow, health hazards, and inefficient collection routes.",
                    "Built clean RESTful endpoints secured by JWT and documented with Swagger that track fill-level time-series data.",
                    "Sensor / Client -> REST API (Swagger) -> Spring Boot Service -> MySQL",
                    3
            );

            projectRepository.saveAll(List.of(p1, p2, p3));
            log.info("Seeded initial projects.");
        }
    }

    private void seedSkills() {
        if (skillRepository.count() == 0) {
            List<Skill> skills = List.of(
                    // Languages
                    new Skill("Languages", "Java", "coffee", 1),
                    new Skill("Languages", "C++", "code", 2),
                    new Skill("Languages", "C", "terminal", 3),
                    new Skill("Languages", "SQL", "database", 4),
                    new Skill("Languages", "JavaScript", "file-code", 5),
                    new Skill("Languages", "Python", "cpu", 6),

                    // Frameworks
                    new Skill("Frameworks", "Spring Boot", "leaf", 1),
                    new Skill("Frameworks", "React", "atom", 2),

                    // Tools
                    new Skill("Tools", "Git", "git-branch", 1),
                    new Skill("Tools", "GitHub", "github", 2),
                    new Skill("Tools", "IntelliJ IDEA", "box", 3),
                    new Skill("Tools", "VS Code", "monitor", 4),
                    new Skill("Tools", "VMware", "server", 5),

                    // Technologies
                    new Skill("Technologies", "Java Servlets", "layers", 1),
                    new Skill("Technologies", "JDBC", "database", 2),
                    new Skill("Technologies", "REST APIs", "globe", 3),
                    new Skill("Technologies", "JWT", "shield-check", 4),
                    new Skill("Technologies", "Swagger", "file-text", 5),

                    // Core Concepts
                    new Skill("Core Concepts", "Object-Oriented Programming", "shapes", 1),
                    new Skill("Core Concepts", "REST APIs", "network", 2),
                    new Skill("Core Concepts", "DBMS", "hard-drive", 3)
            );
            skillRepository.saveAll(skills);
            log.info("Seeded initial skills.");
        }
    }

    private void seedExperience() {
        if (experienceRepository.count() == 0) {
            Experience exp = new Experience(
                    "Full Stack Java Intern",
                    "YELKOM TECHNOLOGIES",
                    "Coimbatore",
                    "April 2026 – June 2026",
                    "Completed 5-week training in Java, Spring Boot, and MySQL, gaining practical experience in full-stack Java development.",
                    "Java, Spring Boot, MySQL, Full-stack development",
                    1
            );
            experienceRepository.save(exp);
            log.info("Seeded initial experience.");
        }
    }

    private void seedEducation() {
        if (educationRepository.count() == 0) {
            List<Education> eduList = List.of(
                    new Education(
                            "B.Tech Information Technology",
                            "Sri Krishna College of Technology",
                            "2024 – 2028",
                            "CGPA: 7.96 / 10",
                            "Specializing in Software Engineering, Database Systems, and Object-Oriented Application Development.",
                            1
                    ),
                    new Education(
                            "HSC",
                            "Sri Vidhya Mandir (CBSE) Hr. Sec. School",
                            "2024",
                            "64%",
                            "Completed Higher Secondary Certificate with focus on Science and Mathematics.",
                            2
                    ),
                    new Education(
                            "SSLC",
                            "SRV Matric Hr. Sec. School",
                            "2022",
                            "85%",
                            "Completed Secondary School Leaving Certificate with strong academic foundation.",
                            3
                    )
            );
            educationRepository.saveAll(eduList);
            log.info("Seeded initial education.");
        }
    }

    private void seedAchievements() {
        if (achievementRepository.count() == 0) {
            List<Achievement> achievements = List.of(
                    new Achievement(
                            "LeetCode",
                            "110+ Day Coding Streak",
                            "Maintained a 110+ day coding streak, demonstrating consistent problem-solving practice.",
                            "Streak",
                            1
                    ),
                    new Achievement(
                            "Smart India Hackathon (SIH) 2025",
                            "National Hackathon",
                            "Participated and contributed to developing innovative solutions.",
                            "Hackathon",
                            2
                    ),
                    new Achievement(
                            "DevHack 2026",
                            "Sri Krishna College of Technology",
                            "Participated in the hackathon organized by Sri Krishna College of Technology.",
                            "Hackathon",
                            3
                    ),
                    new Achievement(
                            "MSME Hackathon",
                            "Industry Innovation",
                            "Designed technology-driven solutions to address real-world industry challenges.",
                            "Innovation",
                            4
                    ),
                    new Achievement(
                            "Statathon",
                            "Data & Insights",
                            "Performed data analysis and visualization to derive actionable insights from datasets.",
                            "Analytics",
                            5
                    )
            );
            achievementRepository.saveAll(achievements);
            log.info("Seeded initial achievements.");
        }
    }

    private void seedCertifications() {
        if (certificationRepository.count() == 0) {
            List<Certification> certList = List.of(
                    new Certification(
                            "Java Programming: A Comprehensive Bootcamp from Zero to Hero",
                            "Infosys Springboard",
                            "[ADD CERTIFICATE URL]",
                            1
                    ),
                    new Certification(
                            "Database Structures and Management with MySQL",
                            "Meta",
                            "[ADD CERTIFICATE URL]",
                            2
                    ),
                    new Certification(
                            "Introduction to Artificial Intelligence",
                            "Infosys Springboard",
                            "[ADD CERTIFICATE URL]",
                            3
                    ),
                    new Certification(
                            "Introduction to Large Language Models",
                            "NPTEL",
                            "[ADD CERTIFICATE URL]",
                            4
                    ),
                    new Certification(
                            "AWS Certified Cloud Practitioner",
                            "Amazon Web Services",
                            "[ADD CERTIFICATE URL]",
                            5
                    ),
                    new Certification(
                            "Crash Course on Python",
                            "Google",
                            "[ADD CERTIFICATE URL]",
                            6
                    )
            );
            certificationRepository.saveAll(certList);
            log.info("Seeded initial certifications.");
        }
    }
}
