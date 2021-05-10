import React, { useState } from "react";

function FormTodo({ onAdd }) {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (!todo && !date) {
      alert("Please enter your task and date.");
      return;
    } else if (!todo) {
      alert("Please enter your task.");
      return;
    } else if (!date) {
      alert("Please enter a date.");
      return;
    }

    onAdd({ todo, date });

    setTodo("");
    setDate("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter your task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}

export default FormTodo;
