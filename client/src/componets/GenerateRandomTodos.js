import React from "react";

import { generateTodos } from "../hooks/api.jsx";

const GenerateRandomTodos = () => {
  const addUser = async () => {
    await generateTodos();
  };

  return (
    
    <button onClick={() => addUser()}>Add Todos</button>
  )
};

export default GenerateRandomTodos;
