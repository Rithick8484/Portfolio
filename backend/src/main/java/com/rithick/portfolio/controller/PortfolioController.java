package com.rithick.portfolio.controller;

import com.rithick.portfolio.dto.ApiResponse;
import com.rithick.portfolio.entity.*;
import com.rithick.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/projects")
    public ResponseEntity<ApiResponse<List<Project>>> getProjects() {
        List<Project> projects = portfolioService.getAllProjects();
        return ResponseEntity.ok(ApiResponse.success("Projects fetched successfully", projects));
    }

    @GetMapping("/skills")
    public ResponseEntity<ApiResponse<List<Skill>>> getSkills() {
        List<Skill> skills = portfolioService.getAllSkills();
        return ResponseEntity.ok(ApiResponse.success("Skills fetched successfully", skills));
    }

    @GetMapping("/experience")
    public ResponseEntity<ApiResponse<List<Experience>>> getExperience() {
        List<Experience> experience = portfolioService.getAllExperience();
        return ResponseEntity.ok(ApiResponse.success("Experience fetched successfully", experience));
    }

    @GetMapping("/education")
    public ResponseEntity<ApiResponse<List<Education>>> getEducation() {
        List<Education> education = portfolioService.getAllEducation();
        return ResponseEntity.ok(ApiResponse.success("Education fetched successfully", education));
    }

    @GetMapping("/achievements")
    public ResponseEntity<ApiResponse<List<Achievement>>> getAchievements() {
        List<Achievement> achievements = portfolioService.getAllAchievements();
        return ResponseEntity.ok(ApiResponse.success("Achievements fetched successfully", achievements));
    }

    @GetMapping("/certifications")
    public ResponseEntity<ApiResponse<List<Certification>>> getCertifications() {
        List<Certification> certifications = portfolioService.getAllCertifications();
        return ResponseEntity.ok(ApiResponse.success("Certifications fetched successfully", certifications));
    }
}
