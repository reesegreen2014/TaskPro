import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const hiddenPaths = ['/about', '/reflections/member1', '/reflections/member2', '/reflections/member3'];

  return (
    <header className="header">
      <h1>TaskPro</h1>
      {!hiddenPaths.includes(location.pathname) && (
        <div className="header-buttons">
          <Link to="/add" className="header-button">
          Add a Task
        </Link>
        <button className="header-button">About the Project</button>
        </div>
      )}
    </header>
  );
};

export default Header;
