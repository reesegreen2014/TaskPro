import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AddTaskForm.css';
import { addTask } from '../../store/slices/tasksSlice';

export default function AddTaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskPriority: "1" 
  });
  const [submitted, setSubmitted] = useState(false);

  const onFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const onSaveTaskClicked = () => {
    setSubmitted(true); 

    if (formData.taskTitle && formData.taskDescription) {
      dispatch(addTask({
        id: Date.now().toString(),
        title: formData.taskTitle,
        description: formData.taskDescription,
        priority: formData.taskPriority, 
        status: 'incomplete'
      }));
      setFormData({
        taskTitle: "",
        taskDescription: "",
        taskPriority: "1" 
      });
      setSubmitted(false); 
      alert("Task successfully recorded!")
    }
  };

  const onReturnToHomeClicked = () => {
    navigate('/'); 
  };

  return (
    <div>
      <section className='task-form-section'>
        <h2 className='task-form-header'>Add a New Task!</h2>
        <form className='task-form'>
          <div className='form-element'>
            <label htmlFor='taskTitle' className='task-label'>
              Title of Task:
            </label>
            <input
              type="text"
              id="taskTitle"
              name="taskTitle"
              placeholder="Title of task goes here . . ."
              onChange={onFormDataChange}
              className="form-control"
              value={formData.taskTitle}
            />
            <br />
            {submitted && !formData.taskTitle && (
              <span className='form-error-text'>Task Title Cannot be Empty!</span>
            )}
          </div>
          <br />
          <div className='form-element'>
            <label htmlFor='taskDescription' className='form-label'>
              Task Description:
            </label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              placeholder="Task description goes here . . ."
              onChange={onFormDataChange}
              className="form-control"
              rows="8"
              value={formData.taskDescription}
            >
            </textarea>
            <br />
            {submitted && !formData.taskDescription && (
              <span className='form-error-text'>Task Description Cannot be Empty!</span>
            )}
          </div>
          <br />
          <div className='form-element'>
            <label htmlFor='taskPriority' className='form-label'>
              Priority:
            </label>
            <select
              id="taskPriority"
              name="taskPriority"
              className="form-control"
              onChange={onFormDataChange}
              value={formData.taskPriority}
            >
              <option value="1">🟢 Priority 1  (Green - Whenever)</option>
              <option value="2">🔵 Priority 2 (Blue - Start Planning)</option>
              <option value="3">🟠 Priority 3 (Orange - Complete Soon)</option>
              <option value="4">🔴 Priority 4 (Red - Do First!)</option>
            </select>
          </div>
          <button
            type="button"
            onClick={onSaveTaskClicked}
            className="btn btn-default"
          >
            Save Task!
          </button>
          <button
            type="button"
            onClick={onReturnToHomeClicked}
            className="btn btn-default return-button"
          >
            Return to Home
          </button>
        </form>
      </section>
    </div>
  );
}
