import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, userPhoto } = use(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        userPhoto({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate('/')
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="flex  justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center p-5 font-bold">Register your account</h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Your Name"
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="Your Photo Url"
              />

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
                required
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
            <Link className="text-center pt-2" to="/auth/login">
              Dont’t Have An Account ?{" "}
              <span className="text-red-400">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
