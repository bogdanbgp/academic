// src/pages/Management/AdminDashboard/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/manage-students">Manage Students</Link></li>
        <li><Link to="/manage-courses">Manage Courses</Link></li>
        <li><Link to="/manage-grades">Manage Grades</Link></li>
        <li><Link to="/manage-faculty">Manage Faculty</Link></li>
        <li><Link to="/manage-class-categories">Manage Class Categories</Link></li> {/* Updated link */}
      </ul>
    </div>
  );
}

export default AdminDashboard;
