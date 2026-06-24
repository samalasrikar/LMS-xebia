package com.lms.modules.course.controller;


import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import com.lms.modules.course.entity.Course;
import com.lms.modules.course.service.CourseService;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService service;

    @PostMapping
    public Course create(@RequestBody Course course) {
        return service.create(course);
    }

    @GetMapping
    public List<Course> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Course getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Course update(
            @PathVariable Long id,
            @RequestBody Course course
    ) {
        return service.update(id, course);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Course Deleted Successfully";
    }
}