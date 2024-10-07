import React, { useState, useEffect } from 'react';
import './Grades.css'; // Import the CSS file

function Grades() {
  const [grades, setGrades] = useState([]);
  const [gradeValue, setGradeValue] = useState('');
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Fetch students, courses, and grades on component mount
  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchGrades();
  }, []);

  // Fetch students from backend
  const fetchStudents = () => {
    fetch('http://localhost:8080/api/students', { method: 'GET' })
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  };

  // Fetch courses from backend
  const fetchCourses = () => {
    fetch('http://localhost:8080/api/courses', { method: 'GET' })
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  };

  // Fetch grades from backend
  const fetchGrades = () => {
    fetch('http://localhost:8080/api/grades', { method: 'GET' })
      .then(response => response.json())
      .then(data => setGrades(data))
      .catch(error => console.error('Error fetching grades:', error));
  };

  // Handle the form submission for adding a new grade
  const handleSubmit = (e) => {
    e.preventDefault();
    if (gradeValue && selectedStudent && selectedCourse) {
      addGrade({
        grade: gradeValue,
        student: { id: selectedStudent },
        course: { id: selectedCourse }
      });
    }
  };

  // Add a new grade to the backend and update the UI
  const addGrade = (grade) => {
    fetch('http://localhost:8080/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(grade),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add grade');
        }
        return response.json();
      })
      .then(data => {
        setGrades([...grades, data]); // Append the new grade to the list
        setGradeValue(''); // Reset the form
        setSelectedStudent('');
        setSelectedCourse('');
      })
      .catch(error => console.error('Error adding grade:', error));
  };

  // Handle grade deletion
  const handleDelete = (gradeId) => {
    fetch(`http://localhost:8080/api/grades/${gradeId}`, { method: 'DELETE' })
      .then(() => {
        setGrades(grades.filter(grade => grade.id !== gradeId)); // Update the state
      })
      .catch(error => console.error('Error deleting grade:', error));
  };

  return (
    <div className="grades-container">
      <h1>Grades</h1>
      <form onSubmit={handleSubmit} className="grades-form">
        <div className="form-group">
          <label htmlFor="grade">Enter Grade:</label>
          <input
            type="text"
            id="grade"
            value={gradeValue}
            onChange={(e) => setGradeValue(e.target.value)}
            placeholder="Enter grade"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="student">Select Student:</label>
          <select
            id="student"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            required
          >
            <option value="">Select Student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="course">Select Course:</label>
          <select
            id="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Grade</button>
      </form>

      {/* Grade List */}
      <div className="grade-list">
        <h2>Grade List</h2>
        <ul>
          {grades.length > 0 ? (
            grades.map((grade) => (
              <li key={grade.id} className="grade-list-item">
                Grade: {grade.grade}, Student: {grade.student.name}, Course: {grade.course.name}
                <button
                  className="delete-grade-button"
                  onClick={() => handleDelete(grade.id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li>No grades available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Grades;
