package com.lms.modules.content.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.modules.content.entity.Content;

public interface ContentRepository extends JpaRepository<Content, Long> {
}
