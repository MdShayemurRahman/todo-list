import React from "react";
import { v4 as uuidv4 } from "uuid";

import data from "./Data/data";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodos] = React.useState(data);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
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
