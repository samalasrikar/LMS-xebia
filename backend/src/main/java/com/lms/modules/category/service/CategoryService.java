package com.lms.modules.category.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.lms.modules.category.entity.Category;
import com.lms.modules.category.repository.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository repository;

    public Category create(Category category) {
        return repository.save(category);
    }

    public List<Category> getAll() {
        return repository.findAll();
    }

    public Category getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Category update(Long id, Category updated) {
        Category category = getById(id);

        category.setName(updated.getName());

        return repository.save(category);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
