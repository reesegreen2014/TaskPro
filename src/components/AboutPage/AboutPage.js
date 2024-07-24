import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import placeholderavatar from '../../images/placeholder-avatar.jpeg';
import reese from '../../images/Profile Photo.jpeg';
import jarvis from '../../images/Profile Photo-J.jpg';
import kevin from '../../images/Kevin - Profile Photo.jpg'


const AboutPage = () => {
  return (
    <div>
      <div className="main-content about-page">
        <h1>About the Team</h1>
        <p>Click on each team member to read their reflections on the project.</p>
        <div className="team-cards">
          <div className="team-card">
            <Link to="/reflections/member1">
              <img src={jarvis} alt="Team Member 1" />
            </Link>
            <h2>Jarvis</h2>
          </div>
          <div className="team-card">
            <Link to="/reflections/member2">
              <img src={reese} alt="Team Member 2" />
            </Link>
            <h2>Reese</h2>
          </div>
          <div className="team-card">
            <Link to="/reflections/member3">
              <img src={kevin} alt="Team Member 3" />
            </Link>
            <h2>Kevin</h2>
          </div>
        </div>
        <Link to="/" className="button-link back-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default AboutPage;
