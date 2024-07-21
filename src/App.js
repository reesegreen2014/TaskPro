import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TaskDetailPage from './components/TaskDetailPage/TaskDetailPage';
import Header from './components/Header/Header';
import AboutPage from './components/AboutPage/AboutPage';
import Member2Reflection from './components/Reflections/Member2Reflections';
import Member1Reflection from './components/Reflections/Member1Reflections';
import Member3Reflection from './components/Reflections/Member3Reflections';
import './App.css';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTaskForm />} />
          <Route path="/task/:taskId" element={<TaskDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reflections/member1" element={<Member1Reflection />} />
          <Route path="/reflections/member2" element={<Member2Reflection />} />
          <Route path="/reflections/member3" element={<Member3Reflection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
