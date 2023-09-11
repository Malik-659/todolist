import React, { useState } from "react";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList/TodoList";
import EditTodo from "./component/editTodo/EditTodo";

const App = () => {
  // создаем состояние, создаем в Арр компоненте, так как должны предавать позже другие компоненты,
  // конкретно в список. Создаем пустой массив в котором будем сохранять обьекты, один обьект = одна тудушка

  let [todos, setTodos] = useState([]);
  const [editedObj, setEdited] = useState(null)

  function getEditedObj (id) {
    let oneObj = todos.find((item)=> item.id === id) 
    setEdited(oneObj)
  }

  function saveChanges(newObj) {
    let newTodos = [...todos]
    newTodos = newTodos.map((item) => {
      if (item.id === newObj.item) {
        return newObj
      } else {
        return item
      }
    })
    setTodos(newTodos)
    setEdited(null)
  }

  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function deleteTask(id) {
    let delTodos = todos.filter((task) => task.id !== id);
    setTodos(delTodos);
  }
  console.log(todos, "global");
  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList deleteTask={deleteTask} todos={todos} />
      { editedObj ? (
      <EditTodo editedObj={editedObj} saveChanges={saveChanges}/>
      ) : null
    } 
    </div>
  );
};

export default App;
