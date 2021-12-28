import React, { useState, useEffect } from "react";

import { getRandomTask } from "../hooks/api";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    listOfTask();
  }, []);

  const listOfTask = async () => {
    let response = await getRandomTask();
    setTodo(response.data);
  };

  return (
    <div>
      {todo.map((res) => (
        <li>{res.title}</li>
      ))}
    </div>
  );
};

export default TodoList;
