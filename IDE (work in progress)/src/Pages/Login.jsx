import React from "react";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center p-3 mb-5">
      <form className="border border-primary p-4 mt-5 bg-info bg-opacity-10">
        <h3 className="text-center">Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-3 text-center ">
          <a href="/Register">Create Account</a>
        </p>
      </form>
    </div>
  );
}
