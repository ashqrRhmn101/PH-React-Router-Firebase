import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex  justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center p-5 font-bold">Login your account</h1>
        <form className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <Link className="text-center pt-2" to="/auth/register">
            Dont’t Have An Account ?{" "}
            <span className="text-red-400">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
