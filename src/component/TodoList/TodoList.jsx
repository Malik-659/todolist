import React from "react";
import Button from "../../ui/Button/Button";

function TodoList({ todos }) {
  console.log(todos);
  let style = {
    color: "red",
    listStyleType: "none",
  };
  return (
    <div>
      <h2>TODO List Component</h2>
      <ul style={style}>
        {todos.map((task) => (
          <li
            style={{
              border: "1px solid orange",
              borderRadius: "15px",
              margin: "10px",
              padding: "15px",
            }}
          >
            <h1>Task: {task.task}</h1>
            <Button colorText={"white"} color={"darkred"}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
