import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login now!</h1>
        <form>
          <fieldset className="fieldset">
            {/* Email Field*/}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            {/* Pass Field*/}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
            New to our website? Please <Link to='/register' className="text-blue-500 underline font-semibold"> Register</Link>
        </p>
      </div>
    </div>
    );
};

export default Login;