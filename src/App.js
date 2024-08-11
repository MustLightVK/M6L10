import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import './App.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <Router>
      <div className="page-container">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <div className="theme-switcher">
              <label className="switch">
                <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
                <span className="slider"></span>
              </label>
              <span className="theme-label">{isDarkTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}</span>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
        </Routes>
        <footer>
          <p>&copy; 2024 My SPA Application</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
