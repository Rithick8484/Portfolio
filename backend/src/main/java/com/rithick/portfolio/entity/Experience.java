package com.rithick.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "experience")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String role;

    @Column(nullable = false)
    private String company;

    private String location;

    private String duration;

    @Column(length = 1000)
    private String description;

    private String technologies;

    private Integer displayOrder;

    public Experience() {}

    public Experience(String role, String company, String location, String duration,
                      String description, String technologies, Integer displayOrder) {
        this.role = role;
        this.company = company;
        this.location = location;
        this.duration = duration;
        this.description = description;
        this.technologies = technologies;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getTechnologies() { return technologies; }
    public void setTechnologies(String technologies) { this.technologies = technologies; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
