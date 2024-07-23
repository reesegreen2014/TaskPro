import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editTask } from '../../store/slices/tasksSlice';
import './TaskDetailPage.css';

function TaskDetailPage() {
  const { taskId } = useParams();
  const task = useSelector(state => state.tasks.tasks.find(t => t.id === taskId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [priority, setPriority] = useState(task ? task.priority : ''); 

  if (!task) {
    return <div className="task-not-found">Task not found</div>;
  }

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, title, description, priority }));
    setIsEditing(false);
  };

  return (
    <div className="task-detail-page">
      {isEditing ? (
        <form className="task-form" onSubmit={handleSave}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Priority:</label>
            <select
              id="taskPriority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="1">🟢 Priority 1  (Green - Whenever)</option>
              <option value="2">🔵 Priority 2 (Blue - Start Planning)</option>
              <option value="3">🟠 Priority 3 (Orange - Complete Soon)</option>
              <option value="3">🔴 Priority 4 (Red - Do First!)</option>
            </select>
          </div>
          <div className="form-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="task-content">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
          <div className="detail-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskDetailPage;
