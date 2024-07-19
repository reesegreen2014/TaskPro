import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element = {<AddTaskForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
