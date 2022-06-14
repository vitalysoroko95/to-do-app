import React, { useState } from "react";

const AddTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        _id: new Date(),
        title,
        isCompleted: false,
      },
    ]);
    setTitle("");
  };

  return (
    <div className="flexitems-center mb-4 rounded-2xl border-zinc-200 border-2 px-5 py-2 w-full mt-5">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && title.length && addTodo(title)}
        className="bg-transparent text-zinc-500 w-full border-none outline-none"
        placeholder="Whats need to be done?"
      />
    </div>
  );
};

export default AddTodoField;
