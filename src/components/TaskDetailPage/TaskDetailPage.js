import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './TaskDetailPage.css';

function TaskDetailPage() {
  const { taskId } = useParams(); // Get taskId from URL parameters
  const task = useSelector(state => state.tasks.tasks.find(t => t.id === taskId)); // Find the task in the Redux state
  const navigate = useNavigate(); // Get navigate function to programmatically navigate

  if (!task) {
    return <div>Task not found</div>; // Display message if task is not found
  }

  return (
    <div className="task-detail-page">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default TaskDetailPage;
