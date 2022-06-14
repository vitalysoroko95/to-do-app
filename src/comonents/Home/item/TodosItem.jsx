import React from "react";
import Check from "./Checkbox";
import cn from "classnames";

const TodosItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center text-zinc-500 mb-4 bg-white rounded-2xl border-zinc-200 border-2 p-5 w-full">
      <Check
        isCompleted={todo.isCompleted}
        changeTodo={changeTodo}
        id={todo._id}
      />
      <span className={cn("mr-2", { "line-through": todo.isCompleted })}>
        {todo.title}
      </span>
    </div>
  );
};

export default TodosItem;
