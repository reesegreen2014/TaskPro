import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../../store/slices/tasksSlice';
import { Link } from 'react-router-dom';
import './TaskCard.css'; 


function TaskCard({ task }) {
  const dispatch = useDispatch(); // Get dispatch function from useDispatch

  const handleToggleTask = () => {
    dispatch(toggleTaskStatus(task.id)); // Dispatch action to toggle task status
  }

  const handleRemoveTask = () => {
    dispatch(deleteTask(task.id)); // Dispatch action to remove task
  }

  return (
    <div className={`task-card ${task.status === 'complete' ? 'completed' : ''}` }>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-card-buttons">
        <button onClick={handleToggleTask}>
          {task.status === 'complete' ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        <button onClick={handleRemoveTask}>Remove Task</button>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </div>      
    </div>
  )
}

export default TaskCard
