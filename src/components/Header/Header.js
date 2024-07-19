import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>TaskPro</h1>
      <div className="header-buttons">
        <button className="header-button">About the Project</button>
        <Link to="/add" className="header-button">
          Add a Task
        </Link>
      </div>
    </header>
  );
};

export default Header;
