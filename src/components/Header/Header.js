import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>TaskPro</h1>
      <div className="header-buttons">
        <button className="header-button">About the Project</button>
        <button className="header-button">Add a Task</button>
      </div>
    </header>
  );
};

export default Header;
