package com.rithick.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(length = 500)
    private String technologies;

    @Column(length = 1500)
    private String features;

    private String githubUrl;
    private String liveDemoUrl;

    @Column(length = 1000)
    private String overview;

    @Column(length = 1000)
    private String problemStatement;

    @Column(length = 1000)
    private String solution;

    @Column(length = 500)
    private String architecture;

    private Integer displayOrder;

    public Project() {}

    public Project(String title, String description, String technologies, String features,
                   String githubUrl, String liveDemoUrl, String overview,
                   String problemStatement, String solution, String architecture, Integer displayOrder) {
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.features = features;
        this.githubUrl = githubUrl;
        this.liveDemoUrl = liveDemoUrl;
        this.overview = overview;
        this.problemStatement = problemStatement;
        this.solution = solution;
        this.architecture = architecture;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getTechnologies() { return technologies; }
    public void setTechnologies(String technologies) { this.technologies = technologies; }

    public String getFeatures() { return features; }
    public void setFeatures(String features) { this.features = features; }

    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }

    public String getLiveDemoUrl() { return liveDemoUrl; }
    public void setLiveDemoUrl(String liveDemoUrl) { this.liveDemoUrl = liveDemoUrl; }

    public String getOverview() { return overview; }
    public void setOverview(String overview) { this.overview = overview; }

    public String getProblemStatement() { return problemStatement; }
    public void setProblemStatement(String problemStatement) { this.problemStatement = problemStatement; }

    public String getSolution() { return solution; }
    public void setSolution(String solution) { this.solution = solution; }

    public String getArchitecture() { return architecture; }
    public void setArchitecture(String architecture) { this.architecture = architecture; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
