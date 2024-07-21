import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>TaskPro</h1>
      {location.pathname !== '/about' && (
        <div className="header-buttons">
          <button className="header-button">Add a Task</button>
          <Link to="/about" className="header-link header-button">About the Project</Link>
        </div>
      )}
    </header>
  );
};

export default Header;