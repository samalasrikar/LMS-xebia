package com.lms.modules.content.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.lms.modules.content.entity.Content;
import com.lms.modules.content.service.ContentService;

import java.util.List;

@RestController
@RequestMapping("/api/contents")
@RequiredArgsConstructor
public class ContentController {

    private final ContentService service;

    @PostMapping
    public Content create(@RequestBody Content content) {
        return service.create(content);
    }

    @GetMapping
    public List<Content> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Content getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Content update(
            @PathVariable Long id,
            @RequestBody Content content
    ) {
        return service.update(id, content);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Content Deleted Successfully";
    }
}