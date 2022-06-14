import React, { useState } from "react";

import TodosItem from "./item/TodosItem";
import AddTodoField from "./AddTodoField/AddTodoField";
import cn from "classnames";

const data = [
  {
    _id: "qqwe1",
    title: "Тестовое задание",
    isCompleted: false,
  },
  {
    _id: "qqwe1asdasd",
    title: "Прекрасный код",
    isCompleted: true,
  },
  {
    _id: "asdasd",
    title: "Покрытый тестами",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);
  const [sort, setSort] = useState("all");

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const filterFunc = (param) => {
    if (param === "active") {
      setSort(false);
    } else if (param === "comleted") {
      setSort(true);
    } else if (param === "all") {
      setSort("all");
    }
  };

  const clearCompleted = () => {
    const copy = [...todos];
    copy.forEach((item) => {
      item.isCompleted = false;
    });
    setTodos(copy);
  };

  return (
    <div
      className="bg-[#f5f5f5] text-white w-4/5 mx-auto p-10 min-h-4/5"
      data-testid="todos-container"
    >
      <h1 className="text-9xl text-[#eadbda]  text-center mb-8 font-[100]">
        todos
      </h1>
      <AddTodoField setTodos={setTodos} />
      {sort != "all"
        ? todos
            .filter((item) => item.isCompleted === sort)
            .map((todo) => (
              <TodosItem key={todo._id} todo={todo} changeTodo={changeTodo} />
            ))
        : todos.map((todo) => (
            <TodosItem key={todo._id} todo={todo} changeTodo={changeTodo} />
          ))}

      <div className="flex justify-between text-zinc-500 font-thin cursor-default items-center p-5">
        <div>
          {todos.filter((item) => item.isCompleted == false).length} items left
        </div>
        <div
          className="flex gap-4 cursor-pointer items-center mt-1"
          onClick={(e) => filterFunc(e.target.dataset.id)}
        >
          <span
            data-testid="all"
            data-id="all"
            className={cn({
              "border-2  rounded-md border-[#eadbda] p-1": sort === "all",
            })}
          >
            All
          </span>
          <span
            data-testid="active"
            data-id="active"
            className={cn({
              "border-2  rounded-md border-[#eadbda] p-1": !sort,
            })}
          >
            Active
          </span>
          <span
            data-testid="comleted"
            data-id="comleted"
            className={cn({
              "border-2  rounded-md border-[#eadbda] p-1": sort === true,
            })}
          >
            Completed
          </span>
        </div>
        <span
          data-testid="clear-comleted-button"
          className="cursor-pointer"
          onClick={() => clearCompleted()}
        >
          Clear comleted
        </span>
      </div>
    </div>
  );
};

export default Home;
