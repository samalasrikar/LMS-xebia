package com.lms.modules.coursemodule.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.modules.coursemodule.entity.CourseModule;

public interface CourseModuleRepository extends JpaRepository<CourseModule, Long> {
}
