import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [arr, setArr] = useState([]);
  function handleChange(event) {
    const val = event.target.value;
    setNewItem(val);
  }
  function handleClick() {
    setArr((prev) => {
      return [...prev, newItem];
    });
    setNewItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
