import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTaskForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
