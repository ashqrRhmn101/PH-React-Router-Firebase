import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
