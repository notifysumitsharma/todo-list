import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import data from "./data.json";
import ToDoList from "./TodoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [todoList, setTodoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const handleFilter = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy.push({ id: todoList.length + 1, task: userInput, complete: false });
    setTodoList(copy);
  };
  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        todoList={todoList}
        handleFilter={handleFilter}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
