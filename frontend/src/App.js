import React from "react";
import name from './name.js'
import TodoList from "./componets/TodoList";

const App = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <TodoList />
    </div>
  );
};

export default App;
