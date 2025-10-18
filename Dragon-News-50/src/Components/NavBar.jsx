import React from "react";
import { NavLink } from "react-router";
import userImg from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img src={userImg} alt="" />
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
