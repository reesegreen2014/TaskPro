import React from 'react';
import { Link } from 'react-router-dom';
import './Reflections.css';

const Member2Reflection = () => {
  const purpleStyle = {color: `#603884`}

  return (
    <div className="reflection-page">
      <h1>Reese's Reflections</h1>
      <div className="reflection-box">
      <p>When we set out on this project, it was pretty daunting. We were tasked with implementing a completely new technology that none of us had ever worked with before: Redux.</p>

      <p>At first, the concept of managing global state seemed overwhelming, but as we dove into it, we realized how powerful it could be for our TaskPro app. We created a <span style={purpleStyle}><strong>tasksSlice</strong></span> using <span style={purpleStyle}><strong>createSlice</strong></span> from the <span style={purpleStyle}><strong>@reduxjs/toolkit</strong></span>, which allowed us to define the actions and reducers in one place. This made our code more organized and easier to maintain as we began building out the functionality of the application. By saving and loading the tasks from local storage, we ensured that our users' data persisted between sessions, which greatly enhanced the user experience. Dispatching actions like <span style={purpleStyle}><strong>addTask</strong></span> and <span style={purpleStyle}><strong>toggleTaskStatus</strong></span> to update the state quickly became second nature, and it was fascinating to see how the logic to handle these changes - all stored in one place - propagated throughout the application.</p>

      <p>Although setting up Redux required a bit of effort and fighting through a confusing learning curve, it ultimately provided a large framework for managing the state in our application, making the actual development of the application more efficient, while making the code more predictable. This experience not only improved my technical skills but also taught me how important it is to remain patient and dedicated when it comes to learning new technologies.</p>
      </div>
      <Link to="/about" className="back-link">Back to About</Link>
    </div>
  );
};

export default Member2Reflection;
