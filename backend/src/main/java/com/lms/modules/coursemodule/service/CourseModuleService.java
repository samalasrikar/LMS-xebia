package com.lms.modules.coursemodule.service;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import com.lms.modules.coursemodule.entity.CourseModule;
import com.lms.modules.coursemodule.repository.CourseModuleRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseModuleService {

    private final CourseModuleRepository repository;

    public CourseModule create(CourseModule module) {
        return repository.save(module);
    }

    public List<CourseModule> getAll() {
        return repository.findAll();
    }

    public CourseModule getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Module not found"));
    }

    public CourseModule update(Long id, CourseModule updated) {

        CourseModule module = getById(id);

        // BASIC INFO
        module.setTitle(updated.getTitle());
        module.setDescription(updated.getDescription());

        // STATUS
        module.setIsActive(updated.getIsActive());

        // ORDER
        module.setModuleOrder(updated.getModuleOrder());

        // RELATION
        module.setCourse(updated.getCourse());

        return repository.save(module);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}