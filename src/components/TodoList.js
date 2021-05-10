import React from "react";

function TodoList({ todo, handleClick }) {
  return (
    <ul className="todolist-wrapper">
      {todo.map((data) => (
        <li key={data.id}>
          <h3>
            {data.todo}
            <i
              onClick={() => handleClick(data.id)}
              class="fas fa-window-close"
            ></i>
          </h3>
          <p>{data.date}</p>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
