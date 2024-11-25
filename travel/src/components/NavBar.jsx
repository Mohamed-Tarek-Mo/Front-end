import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleInfo,
  faHouseUser,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="position-absolute bg-white w-99 fw-bold shadow z "
    >
      <Container>
        <Navbar.Brand href="#home">
          <NavLink className="nav-link" to="/">
            <h2>Travel</h2>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h5">
            <NavLink className="nav-link rounded" to="Home">
              <FontAwesomeIcon icon={faHouseUser} /> Home
            </NavLink>
            <NavLink className="nav-link rounded" to="About">
              <FontAwesomeIcon icon={faCircleInfo} /> About
            </NavLink>
            <NavLink className="nav-link rounded" to="Service">
              <FontAwesomeIcon icon={faBriefcase} /> Service
            </NavLink>
            <NavLink className="nav-link rounded" to="Contact">
              <FontAwesomeIcon icon={faAddressBook} /> Contact
            </NavLink>
            <NavLink className="nav-link sbg rounded " to="Login">
              Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
