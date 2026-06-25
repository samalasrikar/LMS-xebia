package com.lms.modules.content.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.lms.modules.submodule.entity.SubModule;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "contents")
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // text | code | video | image | heading | callout | table
    @Column(nullable = false, length = 30)
    private String type;

    // text / callout
    @Column(columnDefinition = "TEXT")
    private String text;

    // code
    @Column(columnDefinition = "TEXT")
    private String code;

    @Column(length = 50)
    private String language;

    // video
    @Column(length = 500)
    private String videoUrl;

    // image
    @Column(length = 500)
    private String imageUrl;

    @Column(length = 200)
    private String alt;

    @Column(length = 300)
    private String caption;

    // heading / title
    @Column(length = 300)
    private String title;

    private Integer headingLevel;

    @Builder.Default
    @Column(name = "content_order", nullable = false)
    private Integer contentOrder = 0;

    @Builder.Default
    @Column(nullable = false)
    private Boolean isActive = true;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "submodule_id")
    @JsonBackReference
    private SubModule subModule;
}