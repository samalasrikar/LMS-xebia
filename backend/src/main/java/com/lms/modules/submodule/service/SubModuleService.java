package com.lms.modules.submodule.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lms.modules.submodule.entity.SubModule;
import com.lms.modules.submodule.repository.SubModuleRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SubModuleService {

    private final SubModuleRepository repository;

    public SubModule create(SubModule subModule) {
        return repository.save(subModule);
    }

    public List<SubModule> getAll() {
        return repository.findAll();
    }

    public SubModule getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("SubModule not found"));
    }

    public SubModule update(Long id, SubModule updated) {

        SubModule subModule = getById(id);

        // BASIC INFO
        subModule.setTitle(updated.getTitle());
        subModule.setDescription(updated.getDescription());
        subModule.setSlug(updated.getSlug());

        // SEO
        subModule.setMetaTitle(updated.getMetaTitle());
        subModule.setMetaDescription(updated.getMetaDescription());
        subModule.setCanonicalUrl(updated.getCanonicalUrl());

        subModule.setOgTitle(updated.getOgTitle());
        subModule.setOgDescription(updated.getOgDescription());
        subModule.setOgImage(updated.getOgImage());

        // STATUS & ORDER
        subModule.setSubmoduleOrder(updated.getSubmoduleOrder());
        subModule.setIsActive(updated.getIsActive());

        // RELATION
        subModule.setCourseModule(updated.getCourseModule());

        return repository.save(subModule);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}