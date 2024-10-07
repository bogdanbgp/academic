import React, { useState, useEffect } from 'react';
import './Faculty.css'; // Import the CSS file

function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [facultyName, setFacultyName] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    fetchCourses();
    fetchFaculty();
  }, []);

  const fetchCourses = () => {
    fetch('http://localhost:8080/api/courses', { method: 'GET' }) // Explicitly mention GET
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  };

  const fetchFaculty = () => {
    fetch('http://localhost:8080/api/faculty', { method: 'GET' }) // Explicitly mention GET
      .then(response => response.json())
      .then(data => setFaculty(data))
      .catch(error => console.error('Error fetching faculty:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (facultyName.trim() && selectedCourse) {
      addFaculty({ name: facultyName, course: selectedCourse });
    }
  };

  const addFaculty = (facultyMember) => {
    fetch('http://localhost:8080/api/faculty', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(facultyMember),
    })
      .then(response => response.json())
      .then(data => {
        setFaculty([...faculty, data]);
        setFacultyName('');
        setSelectedCourse('');
      })
      .catch(error => console.error('Error adding faculty member:', error));
  };

  const handleDelete = (facultyId) => {
    fetch(`http://localhost:8080/api/faculty/${facultyId}`, { method: 'DELETE' })
      .then(() => {
        setFaculty(faculty.filter(member => member.id !== facultyId));
      })
      .catch(error => console.error('Error deleting faculty member:', error));
  };

  return (
    <div className="faculty-container">
      <h1>Faculty</h1>
      <form onSubmit={handleSubmit} className="faculty-form">
        <div className="form-group">
          <label htmlFor="facultyName">Enter Faculty Name:</label>
          <input
            type="text"
            id="facultyName"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            placeholder="Enter faculty name"
            required
          />
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
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Faculty</button>
      </form>

      <div className="faculty-list">
        <h2>Faculty List</h2>
        <ul>
          {faculty.length > 0 ? (
            faculty.map((member) => (
              <li key={member.id} className="faculty-list-item">
                {member.name} - {member.course}
                <button className="delete-faculty-button" onClick={() => handleDelete(member.id)}>
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li>No faculty available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Faculty;
