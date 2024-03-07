import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";

function Signup() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex justify-center content-center items-center bg-primary h-screen">
      <div className=" bg-white p-3 w-96 rounded h-auto m-2.5">
        <form action="">
          <h1 className="text-center">Sign Up</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>

            <input
              type="password"
              id="name"
              placeholder="Enter name"
              className="form-control"
              autocomplete="email"
            />
          </div>
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
              className="form-control mb-3"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <PasswordStrengthBar password={inputValue} />
          </div>
          <button className="btn btn-success w-100">Sign up</button>
          <p className="text-center">Agree to out terms and condotions</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light decoration-none">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
