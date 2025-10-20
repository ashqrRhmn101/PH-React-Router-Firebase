import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { logInUser } = use(AuthContext);
  // console.log(logInUser)
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location,navigate)
  const [error, setError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        // alert(error.message);
      });
  };

  return (
    <div className="flex  justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center p-5 font-bold">Login your account</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          {
            error && <p className="text-red-500">{error}</p>
          }

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
