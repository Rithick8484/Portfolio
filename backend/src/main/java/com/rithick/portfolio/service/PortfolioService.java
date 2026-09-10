package com.rithick.portfolio.service;

import com.rithick.portfolio.entity.*;
import com.rithick.portfolio.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioService {

    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final AchievementRepository achievementRepository;
    private final CertificationRepository certificationRepository;

    public PortfolioService(ProjectRepository projectRepository,
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

    public List<Project> getAllProjects() {
        return projectRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Skill> getAllSkills() {
        return skillRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Experience> getAllExperience() {
        return experienceRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Education> getAllEducation() {
        return educationRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Achievement> getAllAchievements() {
        return achievementRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Certification> getAllCertifications() {
        return certificationRepository.findAllByOrderByDisplayOrderAsc();
    }
}
