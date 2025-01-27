import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../../store/slices/tasksSlice';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TaskCard.css';

function TaskCard({ task }) {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleRemoveTask = () => {
    dispatch(deleteTask(task.id));
  };

  const getPriorityColorAndDescription = (priority) => {
    switch (priority) {
      case "1":
        return { color: "green", description: " 1 (Green - Whenever)" };
      case "2":
        return { color: "blue", description: " 2 (Blue - Start Planning)" };
      case "3":
        return { color: "orange", description: " 3 (Orange - Complete Soon)" };
      case "4":
        return { color: "red", description: " 4 (Red - Do First!)" };
      default:
        return { color: "black", description: "No Priority" };
    }
  };

  const { color, description } = getPriorityColorAndDescription(task.priority);

  return (
    <div className={`task-card ${task.status === 'complete' ? 'completed' : ''}`}>
      <div className="task-card-header" style={{ backgroundColor: color }}>
        <div className="task-priority">Priority Level: {description}</div>
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-status">
        Status: {task.status === 'complete' ? 'Completed' : 'Incomplete'}
      </div>
      <div className="task-card-buttons">
        <button onClick={handleToggleTask}>
          {task.status === 'complete' ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        <button onClick={handleRemoveTask}>Remove Task</button>
        <Link to={`/task/${task.id}`} className="view-details-button">View Details</Link>
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    priority: PropTypes.string,
    status: PropTypes.string
  }).isRequired
};

export default TaskCard;

