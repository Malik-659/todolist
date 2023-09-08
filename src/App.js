import React, { useState } from "react";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList/TodoList";

const App = () => {
  // создаем состояние, создаем в Арр компоненте, так как должны предавать позже другие компоненты,
  // конкретно в список. Создаем пустой массив в котором будем сохранять обьекты, один обьект = одна тудушка

  let [todos, setTodos] = useState([]);
  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }
  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
