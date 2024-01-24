import React, { useContext, useState } from "react";
import { todoContext } from "../context/TodoContextProvider";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const { addTodo } = useContext(todoContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name || !phone || !img) {
      return;
    }
    let newTodo = {
      todName: name,
      todoPhone: phone,
      todoImg: img,
    };
    addTodo(newTodo);
    setName("");
    setPhone("");
    setImg("");
    navigate("/");
  };
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setPhone(e.target.value)} />
      <input type="text" onChange={(e) => setImg(e.target.value)} />
      <button onClick={handleClick}>ADDTODO</button>
    </div>
  );
};

export default AddTodo;
