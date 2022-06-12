import React from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = React.useState({ task: "", desc: "" });

  const { task, desc } = todo;

  const handleOnChange = (e) => {
    const elementName = e.target.name;

    setTodo((prevTodo) => {
      return { ...prevTodo, [elementName]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHandleNewTodo(todo);
    setTodo({ task: "", desc: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Task Name: </label>
        <input
          name="task"
          id="task"
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="desc">Description: </label>
        <textarea
          name="desc"
          id="desc"
          type="text"
          placeholder="Enter description of the todo"
          value={desc}
          onChange={handleOnChange}
        />
      </div>

      <button type="submit">
        <i className="fa fa-plus fa-2x"></i>
      </button>
    </form>
  );
};

export default NewTodo;
