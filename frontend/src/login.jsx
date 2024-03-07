import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="flex justify-center content-center items-center bg-primary h-screen">
      <div className=" bg-white p-3 w-96 rounded h-auto m-2.5">
        <form action="">
        <h1 className="text-center">Login</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="password"
              id="email"
              placeholder="Enter Email"
              className="form-control"
              autocomplete="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              autocomplete="password"
              type="password"
              id="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <button className="btn btn-success w-100">Login</button>
          <p className="text-center mb-4">Agree to out terms and condotions</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light hover:bg-slate-400">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
