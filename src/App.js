import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import FormTodo from "./FormTodo";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      todo: "Thesis Defense",
      date: "April 17",
    },
    {
      id: 2,
      todo: "Project Reporting",
      date: "April 19",
    },
  ]);

  const newTodo = (data) => {
    const id = Math.round(Math.random() * 10000) + 1;
    const newTask = { id, ...data };
    setList([...list, newTask]);
  };

  const onRemoveTodo = (id) => {
    console.log(setList(list.filter((data) => data.id !== id)));
  };

  const [onAddButton, setOnAddButton] = useState(false);

  return (
    <div className="App">
      <Header
        onAdd={() => setOnAddButton(!onAddButton)}
        onAddText={!onAddButton}
      />
      {onAddButton ? <FormTodo onAdd={newTodo} /> : ""}
      {list.length > 0 ? (
        <TodoList todo={list} handleClick={onRemoveTodo} />
      ) : (
        <span>There are no tasks to display.</span>
      )}
    </div>
  );
}

export default App;
