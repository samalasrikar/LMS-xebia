package com.lms.modules.submodule.controller;


import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import com.lms.modules.submodule.entity.SubModule;
import com.lms.modules.submodule.service.SubModuleService;

import java.util.List;

@RestController
@RequestMapping("/api/submodules")
@RequiredArgsConstructor
public class SubModuleController {

    private final SubModuleService service;

    @PostMapping
    public SubModule create(@RequestBody SubModule subModule) {
        return service.create(subModule);
    }

    @GetMapping
    public List<SubModule> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public SubModule getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public SubModule update(
            @PathVariable Long id,
            @RequestBody SubModule subModule
    ) {
        return service.update(id, subModule);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "SubModule Deleted Successfully";
    }
}