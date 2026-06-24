package com.lms.modules.coursemodule.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.lms.modules.coursemodule.entity.CourseModule;
import com.lms.modules.coursemodule.service.CourseModuleService;

import java.util.List;

@RestController
@RequestMapping("/api/modules")
@RequiredArgsConstructor
public class CourseModuleController {

    private final CourseModuleService service;

    @PostMapping
    public CourseModule create(@RequestBody CourseModule module) {
        return service.create(module);
    }

    @GetMapping
    public List<CourseModule> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public CourseModule getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public CourseModule update(
            @PathVariable Long id,
            @RequestBody CourseModule module
    ) {
        return service.update(id, module);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "CourseModule Deleted Successfully";
    }
}