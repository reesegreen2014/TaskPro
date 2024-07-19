import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import MotivationalQuote from '../MotivationalQuote/MotivationalQuote';

function HomePage() {
  return (
    <div className='home-page'>
      <Header />
      <h1>Welcome to TaskPro!</h1>
      <MotivationalQuote />
    </div>
  )
}

export default HomePage;
