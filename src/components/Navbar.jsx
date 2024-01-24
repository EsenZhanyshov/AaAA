import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/add"}>Add</NavLink>
      <NavLink to={"/edit"}>edit</NavLink>
    </div>
  );
};

export default Navbar;
