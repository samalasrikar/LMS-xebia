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
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Content not found"));
    }

    public Content update(Long id, Content updated) {

        Content content = getById(id);

        content.setType(updated.getType());

        // text
        content.setText(updated.getText());

        // code
        content.setCode(updated.getCode());
        content.setLanguage(updated.getLanguage());

        // video
        content.setVideoUrl(updated.getVideoUrl());

        // image
        content.setImageUrl(updated.getImageUrl());
        content.setAlt(updated.getAlt());
        content.setCaption(updated.getCaption());

        // title / heading
        content.setTitle(updated.getTitle());
        content.setHeadingLevel(updated.getHeadingLevel());

        // status & order
        content.setContentOrder(updated.getContentOrder());
        content.setIsActive(updated.getIsActive());

        // relation
        content.setSubModule(updated.getSubModule());

        return repository.save(content);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}