package com.lms.modules.course.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.modules.course.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
