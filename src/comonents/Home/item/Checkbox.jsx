import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Check = ({ isCompleted, id, changeTodo }) => {
  return (
    <div
      className="border-zinc-300 border-2 rounded-full  flex  items-center justify-center w-8 h-8 mr-3 cursor-pointer "
      onClick={() => changeTodo(id)}
    >
      {isCompleted && <BsCheck2 size={25} className="text-[#7ac1b1]" />}
    </div>
  );
};

export default Check;
