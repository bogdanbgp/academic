import React, { useState, useEffect } from 'react';
import './ClassCategories.css'; // Import the CSS file

function ClassCategories() {
  const [classCategories, setClassCategories] = useState([]);
  const [classCategoryName, setClassCategoryName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch class categories
    fetch('http://localhost:8080/api/class-categories', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to check its structure
        setClassCategories(Array.isArray(data) ? data : []); // Ensure it's an array
      })
      .catch(error => setError('Error fetching class categories: ' + error.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (classCategoryName.trim()) {
      fetch('http://localhost:8080/api/class-categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: classCategoryName })
      })
        .then(response => response.json())
        .then(data => {
          setClassCategories([...classCategories, data]);
          setClassCategoryName('');
        })
        .catch(error => setError('Error adding class category: ' + error.message));
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/class-categories/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setClassCategories(classCategories.filter(category => category.id !== id));
      })
      .catch(error => setError('Error deleting class category: ' + error.message));
  };

  return (
    <div className="class-categories-container">
      <h1>Class Categories</h1>
      <form onSubmit={handleSubmit} className="class-categories-form">
        <div className="form-group">
          <label htmlFor="classCategoryName">Class Category Name</label>
          <input
            type="text"
            id="classCategoryName"
            value={classCategoryName}
            onChange={(e) => setClassCategoryName(e.target.value)}
            placeholder="Enter class category name"
            required
          />
        </div>
        <button type="submit">Add Class Category</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <div className="class-category-list">
        <h2>Class Category List</h2>
        <ul>
          {Array.isArray(classCategories) && classCategories.length > 0 ? (
            classCategories.map(category => (
              <li key={category.id} className="class-category-list-item">
                {category.name}
                <button className="delete-class-category-button" onClick={() => handleDelete(category.id)}>Delete</button>
              </li>
            ))
          ) : (
            <li>No class categories available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ClassCategories;
