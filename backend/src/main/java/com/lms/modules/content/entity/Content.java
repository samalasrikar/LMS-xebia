package com.lms.modules.content.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.lms.modules.submodule.entity.SubModule;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String type;
    // PDF, VIDEO, TEXT

    private String url;

    @Column(length = 5000)
    private String description;

    @ManyToOne
    @JoinColumn(name = "submodule_id")
    @JsonBackReference
    private SubModule subModule;
}
