import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import MotivationalQuote from '../MotivationalQuote/MotivationalQuote';

function HomePage() {
  return (
    <div className='home-page'>
      <Header />
      <h1 className='welcome-message'>Welcome to TaskPro!</h1>
      <MotivationalQuote />
      <h2 className='your-tasks'><strong>Your Tasks:</strong></h2>
    </div>
  )
}

export default HomePage;
