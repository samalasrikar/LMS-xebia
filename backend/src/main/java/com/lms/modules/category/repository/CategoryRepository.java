package com.lms.modules.category.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.modules.category.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
