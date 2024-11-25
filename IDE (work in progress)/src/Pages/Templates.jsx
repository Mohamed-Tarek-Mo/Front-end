import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faE, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

export default function Templates() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span className="threedots" />
    </a>
  ));

  var project = {
    projects: [
      {
        projectName: "Project name 1",
        projectId: "hfjdjhgfjhgf123",
        lastUpdate: "10-1-23",
      },
      {
        projectName: "Project name 2",
        projectId: "hfjdjhgfjhgf124",
        lastUpdate: "14-5-23",
      },
    ],
  };

  return (
    <div className="mb-5">
      <div className="row border bg-light p-3">
        <h2>Quick Start Templates</h2>

        <div className="col-md-4 border bg-light p-4 position-relative">
          <div className="row border-bottom">
            <div className="col-9 py-2 ">Blank</div>
            <div className="col-3">
              <FontAwesomeIcon
                icon={faFile}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
          <div className="row pb-5 pt-3">
            Start with a blank canvas or import any packages you need.
          </div>
          <div className="row">
            <a
              className="col-lg-6 col-11 py-1 border btn btn-outline-secondary position-absolute bottom-0 mb-3"
              href="/CodeEditor"
            >
              <h6>Use this template</h6>
            </a>
          </div>
        </div>

        <div className="col-md-4 border bg-light p-4 position-relative">
          <div className="row border-bottom">
            <div className="col-9 py-2 ">React</div>
            <div className="col-3">
              <FontAwesomeIcon
                icon={faReact}
                size="2xl"
                style={{ color: "#00aaff" }}
              />
            </div>
          </div>
          <div className="row pb-5 pt-3">
            A popular javascript library for building user interfaces based on
            UI components
          </div>
          <div className="row">
            <a
              className="col-lg-6 col-11 py-1 border btn btn-outline-secondary position-absolute bottom-0 mb-3"
              href="/CodeEditor"
            >
              <h6>Use this template</h6>
            </a>
          </div>
        </div>

        <div className="col-md-4 border bg-light p-4 position-relative">
          <div className="row border-bottom">
            <div className="col-9 py-2 ">Express</div>
            <div className="col-3">
              <FontAwesomeIcon
                icon={faE}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
          <div className="row pb-5 pt-3">
            A minimal and flexible Node.js web application framework that
            provides a robust set of features for web and mobile applications.
          </div>
          <div className="row">
            <a
              className="col-lg-6 col-11 py-1 border btn btn-outline-secondary position-absolute bottom-0 mb-3"
              href="/CodeEditor"
            >
              <h6>Use this template</h6>
            </a>
          </div>
        </div>
      </div>
      <div className="row border bg-light p-3 mt-4 ">
        <h2>Last added projects</h2>
      </div>
      {project.projects.map((proj) => {
        return (
          <div className="row border text-center">
            <div className="col-md-9 col-6 border-end text-start pt-2">
              {proj.projectName}
            </div>
            <div className="col-md-2 col-4 border-end">
              Last updated: <br /> {proj.lastUpdate}
            </div>
            <div className="col-md-1 col-2 pt-2">
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    size="2xl"
                    style={{ color: "#6e6e6e" }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu size="sm" title="">
                  <Dropdown.Item>Rename</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        );
      })}
    </div>
  );
}
