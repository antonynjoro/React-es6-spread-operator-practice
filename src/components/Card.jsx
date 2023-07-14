import React, { useState } from "react";
import ItemList from "./ItemList.jsx";

function Card(props) {
  const [todoText, setTodoText] = useState("");
  const [todoItemList, setTodoItemList] = useState([]);

  function handleAdd() {
    setTodoItemList((initialValue) => {
      return [...initialValue, todoText];
    });
    setTodoText("");
  }

  function handleTyping(state) {
    setTodoText(state.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="toDoText"
          onChange={handleTyping}
          value={todoText}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <ItemList items={todoItemList} />
    </div>
  );
}

export default Card;
