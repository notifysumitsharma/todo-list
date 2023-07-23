import React from "react";
import ToDo from "./ToDo";
const ToDoList = ({ todoList, handleFilter, handleToggle }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleFilter={handleFilter}
            handleToggle={handleToggle}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed Task
      </button>
    </div>
  );
};

export default ToDoList;
