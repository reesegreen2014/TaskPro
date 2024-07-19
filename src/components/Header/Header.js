import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <h1>TaskPro</h1>
        <div className='header-buttons'>
            <button className='header-button'>Add Task</button>
            <button className='header-button'>About The Project</button>
        </div>
    </header>
  )
}

export default Header;