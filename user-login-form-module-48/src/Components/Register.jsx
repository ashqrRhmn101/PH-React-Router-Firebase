import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    // Password "regEx" ..............

    const passwordPattern = /^.{6,}$/;
    const passwordAllPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{7,}$/;

    if (!passwordPattern.test(password)) {
      console.log("password don't match");
      setError("Password must be 6 character");
      return;
    }

    if (!passwordAllPattern.test(password)) {
      setError(
        "Password must be over 6 characters, contain upper & lower case letters, and at least one special character!"
      );
      return;
    }

    // reset error or success
    setError("");
    setSuccess(false);

    if (!terms) {
      setError("Please accept our terms and condition");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();

        sendEmailVerification(result.user).then(() => {
          alert("Please login your email and verify your address");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                />
                {/* Email  */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="pass"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleTogglePassword}
                    className="absolute right-6 top-3"
                  >
                    {showPassword ? (
                      <FaEye size={15} />
                    ) : (
                      <FaEyeSlash size={15} />
                    )}
                  </button>
                </div>
                {/* Check Box */}
                <div>
                  <label className="label">
                    <input type="checkbox" name="terms" className="checkbox" />
                    Remember me
                  </label>
                </div>

                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <div>
                {error && <p className="text-red-500">{error} </p>}
                {success && (
                  <p className="text-green-400 font-bold">
                    Account Successfully
                  </p>
                )}
              </div>
            </form>
            <p>
              Already have an account? Please{" "}
              <Link to="/login" className="text-blue-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
