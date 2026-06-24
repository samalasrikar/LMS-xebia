package com.lms.modules.course.service;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import com.lms.modules.course.entity.Course;
import com.lms.modules.course.repository.CourseRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository repository;

    public Course create(Course course) {
        return repository.save(course);
    }

    public List<Course> getAll() {
        return repository.findAll();
    }

    public Course getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Course update(Long id, Course updated) {

        Course course = getById(id);

        course.setName(updated.getName());

        return repository.save(course);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}