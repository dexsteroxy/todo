import React, { useState } from "react";

function TodoList({todoValue}) {
  const [mark, setMark] = useState(false)
 
  return (
  <li onClick={()=>setMark(!mark)} className={` ${mark ?"border-l-orange-500 border-orange-900" : "border-l-green-500 border-green-900"} w-full font-poppins font-medium text-base border-[1px] border-l-[6px] px-2 py-1 cursor-pointer  flex items-center justify-between`}>
      {todoValue}
      <span className=" text-xl text-gray-300 hover:text-red-700 duration-300 cursor-pointer">
        <i className="fa-solid fa-trash"></i>
      </span>
    </li>
  );
}

export default TodoList;
