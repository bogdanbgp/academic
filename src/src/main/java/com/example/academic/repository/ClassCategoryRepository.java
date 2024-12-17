package com.example.academic.repository;

import com.example.academic.entity.ClassCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassCategoryRepository extends JpaRepository<ClassCategory, Long> {
}