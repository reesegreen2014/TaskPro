import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './slices/tasksSlice.js'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
})