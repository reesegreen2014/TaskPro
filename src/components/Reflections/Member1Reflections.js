import React from 'react';
import { Link } from 'react-router-dom';
import './Reflections.css';

const Member1Reflection = () => {
  const purpleStyle = {color: `#603884`};

  return (
    <div className="reflection-page">
      <h1>Jarvis's Reflections</h1>
      <div className="reflection-box">
        <p>When we embarked on this project, integrating Redux with React seemed like a formidable challenge. Despite initial apprehension, we quickly discovered the immense benefits Redux brings to state management in our TaskPro app.</p>
  
        <p>Setting up a store and integrating it with React using <span style={purpleStyle}><strong>configureStore</strong></span> from <span style={purpleStyle}><strong>@reduxjs/toolkit</strong></span> simplified the process by automating much of the boilerplate code. This streamlined the setup and made it easier to understand how the store and reducers fit together. Creating slices with <span style={purpleStyle}><strong>createSlice</strong></span> was a game changer. We encapsulated our actions and reducers within <span style={purpleStyle}><strong>tasksSlice</strong></span>, making our code more modular and readable. This allowed us to focus on features rather than state management complexities. Adding or toggling tasks became straightforward operations within our slice. Persisting state using <span style={purpleStyle}><strong>redux-persist</strong></span> ensured that tasks were saved between sessions, significantly improving the user experience, as tasks didn't disappear upon refreshes or closing the browser.</p>
  
        <p>Implementing selectors to access state from the Redux store was another highlight. These selectors provided a clean way to retrieve data without scattering state logic throughout components. This enhanced code maintainability and made it easier to test our application. While the learning curve was steep, adopting Redux paid off. It forced us to think critically about the structure and flow of our application. Debugging became more intuitive as we could trace state changes through defined actions and reducers. This project has been a significant learning experience. Working with Redux has deepened my understanding of state management in React and reinforced the value of perseverance when learning new technologies. Despite initial hurdles, the organized and scalable codebase we achieved with Redux made the endeavor worthwhile.</p>
      </div>
      <Link to="/about" className="back-link">Back to About</Link>
    </div>
  );   
};

export default Member1Reflection;
