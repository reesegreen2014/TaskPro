import React from 'react';
import { Link } from 'react-router-dom';
import './Reflections.css';

const Member3Reflection = () => {
  const purpleStyle = { color: `#603884` }

  return (
    <div className="reflection-page">
      <h1>Kevin's Reflections</h1>
      <div className="reflection-box">
        <p>When creating this project, we knew we wanted to learn and implement a global state management solution like Redux. Applications are becoming increasingly complex, and certain pages or components often need to manage numerous states. We wanted to gain experience in managing the state of my components centrally, in one place.</p>

        <p>Using Redux allowed us to create components and dispatch individual actions to our <span style={purpleStyle}><strong>tasksSlice</strong></span> file. The slice file, created using <span style={purpleStyle}><strong>createSlice</strong></span> from <span style={purpleStyle}><strong>@reduxjs/toolkit</strong></span>, defines the actions and reducers that manage our application's state. By organizing the state logic in one central file, we made our code more structured and easier to maintain. This setup enabled us to handle actions like <span style={purpleStyle}><strong>addTask</strong></span> and <span style={purpleStyle}><strong>toggleTaskStatus</strong></span> effectively, with the state updates propagating throughout the application seamlessly.</p>

        <p>Diving into Redux was initially challenging, but it ultimately proved to be an excellent solution for state management in our application. It streamlined the development process, enhancing both efficiency and predictability in our code. With Redux, we could effectively manage tasks and ensure that user data remained intact between sessions by leveraging local storage. The framework also facilitated features such as easy edits and reverts, and it came equipped with robust debugging tools like Redux DevTools. This journey not only honed my technical skills but also highlighted the value of persistence when learning new technologies. For our TaskPro application, Redux was a game-changer, providing seamless global state management and significantly improving the user experience.</p>
      </div>
      <Link to="/about" className="back-link">Back to About</Link>
    </div>

  );
};

export default Member3Reflection;
