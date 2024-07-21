import React from 'react';
import { Link } from 'react-router-dom';
import './Reflections.css';

const Member3Reflection = () => {
  return (
    <div className="reflection-page">
      <h1>Kevin's Reflections</h1>
      <div className="reflection-box">
        <p>Reflection content for Kevin...</p>
      </div>
      <Link to="/about" className="back-link">Back to About</Link>
    </div>
  );
};

export default Member3Reflection;
