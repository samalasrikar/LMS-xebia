package com.lms.modules.submodule.service;



import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import com.lms.modules.submodule.entity.SubModule;
import com.lms.modules.submodule.repository.SubModuleRepository;

import java.util.List;

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
        return repository.findById(id).orElseThrow();
    }

    public SubModule update(Long id, SubModule updated) {

        SubModule subModule = getById(id);

        subModule.setTitle(updated.getTitle());

        return repository.save(subModule);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}