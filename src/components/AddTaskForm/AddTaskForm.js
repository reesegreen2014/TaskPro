import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/tasksSlice'

export default function AddTaskForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: ""
  })

  const onFormDataChange = (event) => {

  }

  const onSaveTaskClicked = () => {

  }

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
            <span className='form-error-text'>
              Fill this area with titleError handling for Task Title "Task Title Cannot be Empty!"
            </span>
          </div>

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
            <span className='form-error-text'>
              Fill this area with descriptionError handling for Task Title "Task Description Cannot be Empty!"
            </span>
          </div>
          <button type="button"
            onClick={(onSaveTaskClicked)}
            className="btn btn-default"
          >
            Save Task!</button>
        </form>
      </section>
    </div>
  )
}
