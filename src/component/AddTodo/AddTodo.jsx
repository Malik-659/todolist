import React, { useState } from "react";

function AddTodo({ handleTask }) {
  const [task, setTask] = useState("");
  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (!task.trim()) {
      alert("Input is emply!");
      return;
    }
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    setTask("");
    handleTask(newTask);
  };

  return (
    <div>
      <h2>Add TODO Component</h2>
      <input type="text" onChange={handleInput} value={task} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
