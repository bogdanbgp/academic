import React, { useState, useEffect } from 'react';
import './Courses.css'; // Import the CSS file

function Courses() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    // Fetch courses
    fetch('http://localhost:8080/api/courses', { method: 'GET' })
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseName.trim()) {
      fetch('http://localhost:8080/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: courseName })
      })
        .then(response => response.json())
        .then(data => {
          setCourses([...courses, data]);
          setCourseName('');
        })
        .catch(error => console.error('Error adding course:', error));
    }
  };

  const handleDelete = (courseId) => {
    fetch(`http://localhost:8080/api/courses/${courseId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setCourses(courses.filter(course => course.id !== courseId));
      })
      .catch(error => console.error('Error deleting course:', error));
  };

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <form onSubmit={handleSubmit} className="courses-form">
        <div className="form-group">
          <label htmlFor="courseName">Enter Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Enter course name"
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>

           {/* Course List */}
           <div className="course-list">
             <h2>Course List</h2>
             <ul>
               {courses.length > 0 ? (
                 courses.map((course) => (
                   <li key={course.id} className="course-list-item">
                     {course.name}
                     <button
                       className="delete-course-button"
                       onClick={() => handleDelete(course.id)}
                     >
                       Delete
                     </button>
                   </li>
                 ))
               ) : (
                 <li>No courses available</li>
               )}
             </ul>
           </div>
         </div>
       );
     }

     export default Courses;
