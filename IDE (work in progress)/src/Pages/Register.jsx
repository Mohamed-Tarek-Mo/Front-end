import React from "react";

export default function Register() {
  return (
    <div className="container d-flex justify-content-center p-3 mb-5">
      <form className="border border-primary p-4 mt-5 bg-info bg-opacity-10">
        <h3 className="text-center">Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
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
          <button type="submit" className="btn btn-primary mb-3">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/Login">Login?</a>
        </p>
      </form>
    </div>
  );
}
