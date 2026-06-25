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
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

    public Course update(Long id, Course updated) {

        Course course = getById(id);

        // BASIC INFO
        course.setName(updated.getName());
        course.setSlug(updated.getSlug());
        course.setDescription(updated.getDescription());
        course.setShortDescription(updated.getShortDescription());

        // COURSE DETAILS
        course.setLevel(updated.getLevel());
        course.setLanguage(updated.getLanguage());
        course.setDuration(updated.getDuration());

        // MEDIA
        course.setIcon(updated.getIcon());
        course.setThumbnail(updated.getThumbnail());
        course.setBannerImage(updated.getBannerImage());

        // STATUS
        course.setIsActive(updated.getIsActive());

        // RELATION
        course.setCategory(updated.getCategory());

        return repository.save(course);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}