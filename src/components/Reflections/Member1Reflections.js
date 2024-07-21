import React from 'react';
import { Link } from 'react-router-dom';
import './Reflections.css';

const Member1Reflection = () => {
  return (
    <div className="reflection-page">
      <h1>Jarvis' Reflection</h1>
      <div className="reflection-box">
        <p>Reflection content for Jarvis...</p>
      </div>
      <Link to="/about" className="back-link">Back to About</Link>
    </div>
  );
};

export default Member1Reflection;
