import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/shape-14.png";
import banner from "../assets/Banner.png";
import arrow from "../assets/arrow.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Shared link style (non-active)
  const baseLink =
    "px-4 py-2 border-t md:border-t-0 md:border-l border-[#262626] hover:bg-orange-100 cursor-pointer";

  // Active style (matches previous Contact color)
  const activeLink =
    "bg-orange-300 hover:bg-orange-300 border-0 rounded-none font-semibold";

  return (
    <div className="mx-5">
      {/* Top banner */}
      <div className="h-[50px] w-full max-w-[1400px] mt-2 mx-auto overflow-hidden border-l-2 border-r-2 border-[#262626] rounded-[12px] relative text-center flex items-center justify-center">
        <NavLink to="/admissions">
          <img
            src={banner}
            className="absolute -z-10 top-0 left-0 object-cover h-[50px]"
          />
          <p>
            Admission is Open, Grab your seat now{" "}
            <img src={arrow} className="inline w-6" />
          </p>
        </NavLink>
      </div>

      {/* Navbar */}
      <nav className="flex flex-wrap md:flex-nowrap items-center justify-between border border-[#262626] w-full max-w-[1400px] mt-2 mx-auto rounded-[12px] overflow-hidden">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center bg-orange-500 px-4 py-3 rounded-none"
        >
          <span className="text-black font-bold text-sm flex items-center gap-2">
            <img src={logo1} alt="Logo" className="w-5 h-5 object-contain" />
            Little Learners
          </span>
        </NavLink>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:hover:bg-orange-400 dark:focus:ring-orange-400 me-1 bg-orange-400 "
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu items */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/academics"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Academics
            </NavLink>
            <NavLink
              to="/admissions"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to="/student-life"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Student Life
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
