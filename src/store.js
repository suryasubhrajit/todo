import { configureStore } from '@reduxjs/toolkit'; // Imports configureStore from Redux Toolkit
import todoReducer from './todoSlice'; // Imports the reducer function from your todoSlice.js file

// Creates a Redux store using configureStore
const store = configureStore({
  reducer: {
    todos: todoReducer, // Registers the todoReducer for managing "todos" slice of the state
  },
});

export default store; // Exports the store for use throughout the application
