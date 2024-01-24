import React, { useContext, useEffect } from "react";
import { todoContext } from "../context/TodoContextProvider";

const Todolist = () => {
  const { getTodos, todos } = useContext(todoContext);
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return <div></div>;
};

export default Todolist;
