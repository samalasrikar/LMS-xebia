package com.lms.modules.coursemodule.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.lms.modules.course.entity.Course;
import com.lms.modules.submodule.entity.SubModule;
import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "coursemodules")
public class CourseModule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonBackReference
    private Course course;

    @OneToMany(mappedBy = "courseModule", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<SubModule> subModules;
}
