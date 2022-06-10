import React from "react";

const Todo = (props) => {
  return (
    <article>
      <div>
        <h3>{props.todo.task}</h3>
        <p>{props.todo.desc}</p>
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
