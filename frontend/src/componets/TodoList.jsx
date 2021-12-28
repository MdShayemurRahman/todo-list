import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { DeleteForeverOutlined, EditOutlined } from "@material-ui/icons";

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

  const deleteById = async (id) => {
    let updatedTodo = [...todo].filter((res) => res._id !== id);
    setTodo(updatedTodo);
  };

  return (
    <div>
      {todo.map((res, index) => (
        <>
          <li>{res.title}</li>
          <Button onClick={() => deleteById(res._id)}>
            <DeleteForeverOutlined color="secondary" />
          </Button>
        </>
      ))}
    </div>
  );
};

export default TodoList;
