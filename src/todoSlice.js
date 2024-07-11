import { createSlice } from "@reduxjs/toolkit";

// Creates a Redux slice named "todos" for managing todo data
const todoSlice = createSlice({
    name: "todos",
    // Defines the initial state of the slice as an empty array
    initialState: [],
    // Defines reducers (functions) that handle different actions on the state
    reducers: {
        addTodo: (state, action) => {
            // Creates a new todo object with a unique ID, text, and initial completion state (false)
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            // Immutably adds the new todo object to the end of the state array
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            // Finds the todo object in the state that matches the provided ID
            const todo = state.find((todo) => todo.id === action.payload);
            // If the todo is found, toggles its completed state
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            // Finds the index of the todo object in the state that matches the provided ID
            const index = state.findIndex((todo) => todo.id === action.payload);
            // If the index is found (not -1), removes the todo object from the state array using splice
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        editTodo: (state, action) => {
            // Destructures the ID and new text from the action payload
            const { id, newText } = action.payload;
            // Finds the todo object in the state that matches the provided ID
            const todo = state.find((todo) => todo.id === id);
            // If the todo is found, updates its text with the new text
            if (todo) {
                todo.text = newText;
            }
        },
    },
});

// Exports the individual action creators for dispatching actions
export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;

// Exports the reducer function of the slice to be used in the Redux store
export default todoSlice.reducer;
