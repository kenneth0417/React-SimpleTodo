import React from "react";

function Header({ onAdd, onAddText }) {
  return (
    <div className="header">
      <h2>To Do List</h2>
      <button onClick={onAdd}>{onAddText ? "Add" : "Cancel"}</button>
    </div>
  );
}

export default Header;
