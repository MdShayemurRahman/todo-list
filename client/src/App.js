import React from "react";

import data from "./Data/data";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodos] = React.useState(data);

  const handleNewTodo = (newTodo) => {
  
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <NewTodo onHandleNewTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
