import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setuserInput] = useState("");

  const handleChange = (e) => {
    setuserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setuserInput("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter new task"
        value={userInput}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};
export default ToDoForm;
