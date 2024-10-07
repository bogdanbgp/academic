package com.example.academic.controller;

import com.example.academic.entity.ClassCategory;
import com.example.academic.service.ClassCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/class-categories")
public class ClassCategoryController {

    @Autowired
    private ClassCategoryService classCategoryService;

    @GetMapping
    public List<ClassCategory> getAllClassCategories() {
        return classCategoryService.getAllClassCategories();
    }

    @PostMapping
    public ResponseEntity<ClassCategory> addClassCategory(@RequestBody ClassCategory classCategory) {
        ClassCategory savedClassCategory = classCategoryService.saveClassCategory(classCategory);
        return new ResponseEntity<>(savedClassCategory, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClassCategory(@PathVariable Long id) {
        classCategoryService.deleteClassCategory(id);
        return ResponseEntity.noContent().build();
    }
}

