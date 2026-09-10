package com.rithick.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String degree;

    @Column(nullable = false)
    private String institution;

    private String duration;

    private String score;

    @Column(length = 500)
    private String description;

    private Integer displayOrder;

    public Education() {}

    public Education(String degree, String institution, String duration, String score,
                     String description, Integer displayOrder) {
        this.degree = degree;
        this.institution = institution;
        this.duration = duration;
        this.score = score;
        this.description = description;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getScore() { return score; }
    public void setScore(String score) { this.score = score; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
