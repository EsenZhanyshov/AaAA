import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import TodoDetail from "../components/TodoDetail";
import EditTodo from "../components/EditTodo";
import AddTodo from "../components/AddTodo";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/edit/:id" element={<EditTodo />} />
      <Route path="/details/:id" element={<TodoDetail />} />
    </Routes>
  );
};

export default MainRoutes;
