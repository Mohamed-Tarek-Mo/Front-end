import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top shadow">
      <Container>
        <NavLink className="nav-link" to="Home">
          <h4 className="fw-bold">
            <FontAwesomeIcon icon={faCode} className="me-2"></FontAwesomeIcon>
            WALL.
            <span
              className="px-2 text-white"
              style={{ background: "#0029FF", "border-radius": "20px" }}
            >
              E
            </span>
          </h4>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="Home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="Login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="Register">
              Register
            </NavLink>
            <NavLink className="nav-link" to="Account">
              Account
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
