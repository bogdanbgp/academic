// src/main/java/com/example/academic/service/ClassCategoryService.java
package com.example.academic.service;

import com.example.academic.entity.ClassCategory;
import com.example.academic.repository.ClassCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassCategoryService {
    @Autowired
    private ClassCategoryRepository classCategoryRepository;

    public List<ClassCategory> getAllClassCategories() {
        return classCategoryRepository.findAll();
    }

    public Optional<ClassCategory> getClassCategoryById(Long id) {
        return classCategoryRepository.findById(id);
    }

    public ClassCategory saveClassCategory(ClassCategory classCategory) {
        return classCategoryRepository.save(classCategory);
    }

    public void deleteClassCategory(Long id) {
        classCategoryRepository.deleteById(id);
    }
}
