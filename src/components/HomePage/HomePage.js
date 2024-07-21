import React from 'react';
import './HomePage.css';
import MotivationalQuote from '../MotivationalQuote/MotivationalQuote';
import { useSelector } from 'react-redux';
import TaskFilter from '../Filter/Filter'
import TaskCard from '../TaskCard/TaskCard'; // Import TaskCard component

const HomePage = () => {
const tasks = useSelector(state => state.tasks.tasks)
const filter = useSelector(state => state.tasks.filter)

const filteredTasks = tasks.filter(task => {
  if (filter === 'all') return true;
  return task.status === filter
})

  return (
    <div className='home-page'>
      <h1 className='welcome-message'>Welcome to TaskPro!</h1>
      <MotivationalQuote />
      <TaskFilter />
      <h2 className='your-tasks'><strong>Your Tasks:</strong></h2>
      <div className='task-cards'>
      {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
