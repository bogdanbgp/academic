import React, { useState, useEffect } from 'react';
import './Students.css'; // Import the CSS file

function Students() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [classCategories, setClassCategories] = useState([]);
  const [selectedClassCategory, setSelectedClassCategory] = useState('');

  useEffect(() => {
    fetchClassCategories();
    fetchStudents();
  }, []);

  const fetchClassCategories = () => {
    fetch('http://localhost:8080/api/class-categories', { method: 'GET' }) // Explicitly mention GET
      .then(response => response.json())
      .then(data => setClassCategories(data))
      .catch(error => console.error('Error fetching class categories:', error));
  };

  const fetchStudents = () => {
    fetch('http://localhost:8080/api/students', { method: 'GET' }) // Explicitly mention GET
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName.trim() && selectedClassCategory) {
      addStudent({ name: studentName, classCategory: selectedClassCategory });
    }
  };

  const addStudent = (student) => {
    fetch('http://localhost:8080/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
      .then(response => response.json())
      .then(data => {
        setStudents([...students, data]);
        setStudentName('');
        setSelectedClassCategory('');
      })
      .catch(error => console.error('Error adding student:', error));
  };

  const handleDelete = (studentId) => {
    fetch(`http://localhost:8080/api/students/${studentId}`, { method: 'DELETE' })
      .then(() => {
        setStudents(students.filter(student => student.id !== studentId));
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div className="students-container">
      <h1>Students</h1>
      <form onSubmit={handleSubmit} className="students-form">
        <div className="form-group">
          <label htmlFor="studentName">Enter Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="classCategory">Select Class Category:</label>
          <select
            id="classCategory"
            value={selectedClassCategory}
            onChange={(e) => setSelectedClassCategory(e.target.value)}
            required
          >
            <option value="">Select Class Category</option>
            {classCategories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Student</button>
      </form>

      <div className="student-list">
        <h2>Student List</h2>
        <ul>
          {students.length > 0 ? (
            students.map((student) => (
              <li key={student.id} className="student-list-item">
                {student.name} - {student.classCategory}
                <button className="delete-student-button" onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li>No students available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Students;
