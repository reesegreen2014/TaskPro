import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const hiddenPaths = ['/about', '/reflections/member1', '/reflections/member2', '/reflections/member3'];

  return (
    <header className="header">
      <Link to="/" className="home-link">
      <h1>TaskPro</h1>
      </Link>
      {!hiddenPaths.includes(location.pathname) && (
        <div className="header-buttons">
        <Link to="/add" className="header-button">
          Add a Task
        </Link>
        <Link to="/about" className="header-link header-button">About the Project</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
