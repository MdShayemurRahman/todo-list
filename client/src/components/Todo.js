import React from "react";

const Todo = (props) => {
  const {task, desc} = props.todo;

  return (
    <article>
      <div>
        <h3>{task}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button>
          <i className="fa fa-edit fa-2x"></i>
        </button>
        
        <button>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
