package com.rithick.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "achievements")
public class Achievement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String subtitle;

    @Column(length = 1000)
    private String description;

    private String badge;

    private Integer displayOrder;

    public Achievement() {}

    public Achievement(String title, String subtitle, String description, String badge, Integer displayOrder) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.badge = badge;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSubtitle() { return subtitle; }
    public void setSubtitle(String subtitle) { this.subtitle = subtitle; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
