import React from 'react';
import './HomePage.css';
import MotivationalQuote from '../MotivationalQuote/MotivationalQuote';
import { useSelector } from 'react-redux';
import TaskFilter from '../Filter/Filter';
import TaskCard from '../TaskCard/TaskCard';

const HomePage = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);

  const priorityOrder = { '4': 1, '3': 2, '2': 3, '1': 4 };

  const sortedTasks = tasks
    .filter(task => filter === 'all' || task.status === filter)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <div className='home-page'>
      <h1 className='welcome-message'>Welcome to TaskPro!</h1>
      <MotivationalQuote />
      <TaskFilter />
      <h2 className='your-tasks'><strong>Your Tasks:</strong></h2>
      <div className='task-cards'>
        {sortedTasks.length > 0 ? (
          sortedTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <p className='no-tasks-message'>
            You have no tasks! Add one using the "Add Task" button.
          </p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
