package com.example.academic.service;

import com.example.academic.entity.Grade;
import com.example.academic.entity.Student;
import com.example.academic.entity.Course;
import com.example.academic.repository.GradeRepository;
import com.example.academic.repository.StudentRepository;
import com.example.academic.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    // fetch
    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    // save
    public Grade saveGrade(Grade grade) {
        // fetch student and course - based on their IDs
        Optional<Student> studentOpt = studentRepository.findById(grade.getStudentId());
        Optional<Course> courseOpt = courseRepository.findById(grade.getCourseId());

        // Check if both student and course exist
        if (studentOpt.isPresent() && courseOpt.isPresent()) {
            grade.setStudent(studentOpt.get());
            grade.setCourse(courseOpt.get());
            return gradeRepository.save(grade);
        } else {
            // throw exception if student or course not found
            throw new IllegalArgumentException("Student or Course does not exist");
        }
    }

    // delete
    public void deleteGrade(Long id) {
        gradeRepository.deleteById(id);
    }
}
