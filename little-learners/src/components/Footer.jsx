import React from "react";
import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="shadow-div m-5 mt-32">
      <div className="p-10 pb-0 mb-3">
        <div className="w-full flex flex-wrap justify-between border-b-[1px] border-black">
          <div className="md:w-4/12 w-full md:pe-20">
            <div className="w-full mb-5 flex flex-wrap md:justify-normal justify-center">
              <h3 className="flex flex-wrap items-center mb-3">
                <img src={logo} />
                <span className="font-semibold text-xl ps-3">
                  Little Learners
                </span>
              </h3>
              <p className="ps-5 md:text-start text-center">
                We believe in the power of play to foster creativity,
                problem-solving skill`s, and imagination.
              </p>
            </div>
            <div className="w-full mb-7">
              <div className="flex flex-wrap w-full items-center mb-2">
                <button className="w-10 h-10 rounded-lg bg-[#FFF5F0] border border-black flex items-center justify-center me-3">
                  <img src={mail} className="text-xl"></img>
                </button>
                <p>hello@littlelearners.com</p>
              </div>
              <div className="flex flex-wrap w-full items-center mb-2">
                <button className="w-10 h-10 rounded-lg bg-[#FFF5F0] border border-black flex items-center justify-center me-3">
                  <img src={phone} className="text-xl"></img>
                </button>
                <p>+91 91813 23 2309</p>
              </div>
              <div className="flex flex-wrap w-full items-center">
                <button className="w-10 h-10 rounded-lg bg-[#FFF5F0] border border-black flex items-center justify-center me-3">
                  <img src={location} className="text-xl"></img>
                </button>
                <p>Somewhere in the World</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/12 w-1/2 md:mb-0 mb-5">
            <h4 className="font-semibold mb-5">Home</h4>
            <NavLink to="/" className="block mb-2">
              Features
            </NavLink>
            <NavLink to="/" className="block mb-2">
              Our Testimonials
            </NavLink>
            <NavLink to="/" className="block mb-2">
              FAQ
            </NavLink>
          </div>
          <div className="md:w-2/12 w-1/2 md:mb-0 mb-5">
            <h4 className="font-semibold mb-5">About Us</h4>
            <NavLink to="/about" className="block mb-2">
              Our Mission
            </NavLink>
            <NavLink to="/about" className="block mb-2">
              Our Vission
            </NavLink>
            <NavLink to="/about" className="block mb-2">
              Awards and Recognitions
            </NavLink>
            <NavLink to="/about" className="block mb-2">
              History
            </NavLink>
            <NavLink to="/about" className="block mb-2">
              Teachers
            </NavLink>
          </div>
          <div className="md:w-2/12 w-1/2 md:mb-0 mb-5">
            <h4 className="font-semibold mb-5">Academics</h4>
            <NavLink to="/academics" className="block mb-2">
              Special Features
            </NavLink>
            <NavLink to="/academics" className="block mb-2">
              Gallery
            </NavLink>
          </div>
          <div className="md:w-2/12 w-1/2 md:mb-0 mb-5">
            <h4 className="font-semibold mb-5">Contact Us</h4>
            <p className="mb-2">Information</p>
            <p className="mb-2">Map & Direction</p>
          </div>
        </div>
      </div>
      <div className="px-10 mb-3">
        <div className="w-full flex flex-wrap justify-between border-b-[1px] border-black pb-3">
          <div className="md:w-8/12 w-full flex md:justify-normal justify-center md:mb-0 mb-3">
            <p className="border-e-[1px] border-black my-2 pe-3">
              Terms and Service
            </p>
            <p className="border-e-[1px] border-black my-2 px-3">
              Privacy and Policy
            </p>
            <p className="my-2 px-3">Cookie Policy</p>
          </div>
          <div className="md:w-3/12 flex w-full md:justify-end justify-center">
            <button className="w-12 h-12 rounded-lg bg-[#FFDECC] border border-black flex items-center justify-center me-3">
              <img src={facebook} className="text-xl"></img>
            </button>
            <button className="w-12 h-12 rounded-lg bg-[#FFDECC] border border-black flex items-center justify-center me-3">
              <img src={twitter} className="text-xl"></img>
            </button>
            <button className="w-12 h-12 rounded-lg bg-[#FFDECC] border border-black flex items-center justify-center me-3">
              <img src={linkedin} className="text-xl"></img>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
      </div>
    </div>
  );
}
