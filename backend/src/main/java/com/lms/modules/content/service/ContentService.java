package com.lms.modules.content.service;


import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import com.lms.modules.content.entity.Content;
import com.lms.modules.content.repository.ContentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContentService {

    private final ContentRepository repository;

    public Content create(Content content) {
        return repository.save(content);
    }

    public List<Content> getAll() {
        return repository.findAll();
    }

    public Content getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Content update(Long id, Content updated) {

        Content content = getById(id);

        content.setTitle(updated.getTitle());
        content.setType(updated.getType());
        content.setUrl(updated.getUrl());
        content.setDescription(updated.getDescription());

        return repository.save(content);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}