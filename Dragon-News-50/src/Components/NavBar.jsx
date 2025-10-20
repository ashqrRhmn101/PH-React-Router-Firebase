import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const NavBar = () => {
  const { user, logoutUser } = use(AuthContext);
  // console.log(user);

  // handleLogout
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // alert("You Logged Out Successfull");
        toast(
          <div role="alert" className="flex gap-2 text-red-500 alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>You Logged Out Successfull</span>
          </div>
        );
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
        <img
          className="h-12 border-1 border-gray-200 rounded-4xl p-1"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default NavBar;
