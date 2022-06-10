import React from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHandleNewTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        placeholder="Enter your task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">
        <i className="fa fa-plus fa-2x"></i>
      </button>
    </form>
  );
};

export default NewTodo;
