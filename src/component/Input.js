import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import ErrMsg from "../msg/ErrMsg";
import Succes from "../msg/Succes";

function Input() {
  const [todoValue, setTodoValue] = useState("");
  const [category, setCategory] = useState("");
  const [currentTodo, setCurrentTodo] = useState("")
  const [errMssg, setErrMssg] = useState("");
  const [succesMsg, setSuccesMsg] = useState("")
  const [showErr, setShowErr] = useState(false);
  const [showSuccess, setShowSuccess] = useState("")
  const option = [
    {
      _id: 1000,
      title: "categories",
    },

    {
      _id: 1001,
      title: "personal",
    },

    {
      _id: 1002,
      title: "business",
    },

    {
      _id: 1003,
      title: "others",
    },
  ];

  const handleTodo = (e) => {
    e.preventDefault();
    if (todoValue === "") {
      setErrMssg("Please write your todo!");
      setShowErr(true);
      setShowSuccess(false)
    } else if (category === "") {
      setErrMssg("select a category");
      setShowErr(true);
      setShowSuccess(true)
    } else if (category === "categories") {
      setErrMssg("Select a valid categories");
      setShowErr(true);
      setShowSuccess(false)
      setShowErr(false)
    } else {
      setCurrentTodo(todoValue)
      setTodoValue("");
      setShowSuccess(true)
      setSuccesMsg("Todo added successfully! congratulations")
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showErr && setShowErr(false);
      showSuccess && setShowSuccess(false)

    }, 2000);
    return () => clearTimeout(timer);
  }, [showErr, showSuccess]);

  return (
    <div className=" w-full bg-amazon_ligh flex flex-col gap-4">
      <div className=" flex items-center gap-4 h-12">
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          className="w-[80%] h-full bg-amazon_light border-[1px] border-gray-400 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-amazon_yellow hover:border-white"
          type="text"
          placeholder="Enter your Todo..."
        />
        <div className=" w-[30%] h-full relative">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className=" w-full h-full text-center capitalize outline-none bg-amazon_light border-[1px] border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-amazon_yellow hover:border-white "
          >
            {option.map((item) => (
              <option key={item._id}> {item.title}</option>
            ))}
          </select>
          <span className=" absolute right-3 top-3">
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </div>
      </div>
      <button
        onClick={handleTodo}
        className="btn w-full relative inline-flex  mt-3 px-6 py-2 items-center justify-start overflow-hidden transition-all bg-blue-900  rounded hover:bg-car group"
        to="/register/welcome"
      >
        {/* purple box */}
        <span className="w-0 h-0 rounded  bg-[#003366] absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
        <span className="w-full text-white transition-colors duration-300 ease-in-out text-center group-hover:text-orange-600 z-10">
          Add Todo
        </span>
      </button>
      <div className=" flex flex-col gap-4">
        <ul className=" grid grid-cols-1 gap-4 border-gray-600 border-[1px]  shadow-xl shadow-[#003366] mt-6 p-4">
          <TodoList todoValue={currentTodo} />
        </ul>
      </div>
      {/* =========================================== */}
      {showErr && <ErrMsg errMssg={errMssg} />}
      {/* ============================================ */}
      {
        showSuccess && <Succes successMsg={succesMsg}/> 
      }
    </div>
  );
}

export default Input;
