import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage, storeInLocalStorage } from "../../LocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
    filter: 'all'
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      storeInLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      const tempItem = action.payload;
      const filteredItems = state.tasks.filter(task => task.id !== tempItem);
      state.tasks = filteredItems;
      storeInLocalStorage(state.tasks);
    },
    editTask: (state, action) => {
      const { id, title, description, priority } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.priority = priority;
        storeInLocalStorage(state.tasks);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.status = task.status === 'complete' ? 'incomplete' : 'complete';
        storeInLocalStorage(state.tasks);
      }
    }
  }
});

export const { addTask, deleteTask, editTask, setFilter, toggleTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;