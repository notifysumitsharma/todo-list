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
      {/* button for deletion */}
      <button
        style={{ margin: "20px", padding: "10px" }}
        onClick={handleFilter}
      >
        Clear Completed Task
      </button>
    </div>
  );
};

export default ToDoList;
