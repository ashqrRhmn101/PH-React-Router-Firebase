// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import React, { use, useState } from "react";
import { Link } from "react-router";
// import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "../AuthContext/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  // console.log(authInfo)

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password,name);

    // reset error
    setError("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     setError(error.message);
    //   });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
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
            {/* Email Field*/}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Pass Field*/}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>

          {error && <p className="text-red-400">{error}</p>}
        </form>

        <p>
          Already have an account? Please{" "}
          <Link to="/login" className="text-blue-500 underline font-semibold">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
