import React, { useState } from "react";
import "./todo.css";
import List from "./List";
import InputArea from "./InputArea";

function Todo() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        {" "}
        <ul>
          {items.map((toDoItem, index) => (
            <List
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
