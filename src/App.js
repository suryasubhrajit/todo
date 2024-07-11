import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import the Redux store created in a separate file
import Todo from "./Todo"; // Import the Todo component

const App = () => {
  // The main application component
  return (
    <Provider store={store}>
      {/* Wraps the entire application with the Provider component */}
      <Todo />
      {/* Renders the Todo component, providing access to the Redux store */}
    </Provider>
  );
};

export default App;
