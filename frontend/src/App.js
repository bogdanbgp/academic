// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Newspaper from './pages/Newspaper/Newspaper';
import Login from './pages/Management/Login/Login';
import AdminDashboard from './pages/Management/AdminDashboard/AdminDashboard';
import Students from './pages/Management/Students/Students';
import Courses from './pages/Management/Courses/Courses';
import Grades from './pages/Management/Grades/Grades';
import Faculty from './pages/Management/Faculty/Faculty';
import ClassCategory from './pages/Management/ClassCategories/ClassCategories'; // Updated import path
import NotFound from './pages/NotFound/NotFound'; // Import the NotFound component

// Main App component
function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container"> {/* Added container for styling */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newspaper" element={<Newspaper />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-students" element={<Students />} />
          <Route path="/manage-courses" element={<Courses />} />
          <Route path="/manage-grades" element={<Grades />} />
          <Route path="/manage-faculty" element={<Faculty />} />
          <Route path="/manage-class-categories" element={<ClassCategory />} />

          {/* Catch-All Route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
