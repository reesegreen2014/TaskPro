import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TaskDetailPage from './components/TaskDetailPage/TaskDetailPage';
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
          <Route path="/task/:taskId" element={<TaskDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
