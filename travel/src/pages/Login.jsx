import React from "react";
import Hero from "../components/Hero";

import signup_hero from "../assets/signup_hero.jpg";

export default function Login() {
  return (
    <>
      <Hero
        cName="w-100 position-relative"
        heroImg={signup_hero}
        title="Sign Up"
        url="/"
      ></Hero>
      <div className="container my-5 col-md-8 ">
        <form>
          <div class="form-group mt-5 text-start">
            <label for="exampleInputEmail1" className="fs-4">
              Email address
            </label>
            <input
              type="email"
              class="form-control my-4 p-3 border-black"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group mt-5 text-start">
            <label for="exampleInputPassword1" className="fs-4">
              Password
            </label>
            <input
              type="password"
              class="form-control my-4 p-3 border-black"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            class="btn btn-outline-light btn-dark border-black fw-bold p-2 px-3 col-8 col-md-6"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
