import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user } = use(AuthContext);
  console.log(user)

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img src={userImg} alt="" />
        <Link to="/auth/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
