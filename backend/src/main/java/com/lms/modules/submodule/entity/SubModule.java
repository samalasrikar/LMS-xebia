package com.lms.modules.submodule.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.lms.modules.content.entity.Content;
import com.lms.modules.coursemodule.entity.CourseModule;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "submodules")
public class SubModule {

    // =========================================================
    // PRIMARY KEY
    // =========================================================

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // =========================================================
    // BASIC INFORMATION
    // =========================================================

    @Column(nullable = false, length = 200)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, unique = true, length = 250)
    private String slug;

    // =========================================================
    // SEO FIELDS
    // =========================================================

    @Column(length = 70)
    private String metaTitle;

    @Column(length = 320)
    private String metaDescription;

    @Column(length = 1000)
    private String canonicalUrl;

    @Column(length = 150)
    private String ogTitle;

    @Column(length = 500)
    private String ogDescription;

    @Column(length = 1000)
    private String ogImage;

    // =========================================================
    // STATUS & ORDER
    // =========================================================

    @Builder.Default
    @Column(name = "sub_module_order", nullable = false)
    private Integer submoduleOrder = 0;

    @Builder.Default
    @Column(nullable = false)
    private Boolean isActive = true;

    // =========================================================
    // TIMESTAMPS
    // =========================================================

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // =========================================================
    // RELATIONSHIPS
    // =========================================================

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_module_id")
    @JsonBackReference
    private CourseModule courseModule;

    @OneToMany(mappedBy = "subModule", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    @Builder.Default
    private List<Content> contents = new ArrayList<>();
}