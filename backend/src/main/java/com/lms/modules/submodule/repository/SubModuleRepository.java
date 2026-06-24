package com.lms.modules.submodule.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.modules.submodule.entity.SubModule;

public interface SubModuleRepository extends JpaRepository<SubModule, Long> {
}