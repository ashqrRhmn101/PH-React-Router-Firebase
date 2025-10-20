import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {
  const { user, logoutUser } = use(AuthContext);
  console.log(user);

  // handleLogout
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("You Logged Out Successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="md:flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img className="h-12 border-1 border-gray-200 rounded-4xl p-1" src={`${user ? user.photoURL : userImg}`} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
