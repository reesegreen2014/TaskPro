import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 - Page Not Found</h1>
      <p className="not-found-message">
        Are you procrastinating again?? Don't worry, TaskPro can help you with that! 
        <br />
        <Link to="/" className="home-link">Go back to the homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
