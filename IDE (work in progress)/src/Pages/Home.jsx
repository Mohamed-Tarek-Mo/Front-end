import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import CE from "../Images/CE.jpg";
import MCE from "../Images/MCE.png";
import CPlus from "../Images/CPlus.png";
import C from "../Images/C.png";
import Python from "../Images/Python.png";

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="text-center">
        Start coding instantly <br />
        with WALL.
        <span
          className="px-3 text-white"
          style={{ background: "#0029FF", "border-radius": "25px" }}
        >
          E
        </span>
      </h1>
      <h4 className="text-center text-muted my-5">
        Fully configured intelligent dev environments that start in seconds
      </h4>
      <div className="row">
        <span className="col-md-4"></span>
        <a className="btn btn-primary px-5 py-2 col-md-4" href="/Templates">
          <h4>Start with just click</h4>
        </a>
      </div>
      <h4 className="text-center text-muted my-5">
        Dev environment that just work{" "}
        <FontAwesomeIcon icon={faCode} className="me-2"></FontAwesomeIcon>
      </h4>
      <div className="d-flex justify-content-center">
        <img src={CE} className="w-75 "></img>
      </div>
      <div className="row my-5">
        <div className="col-6 my-5">
          <div className="row mt-5">
            <h2 className="fw-bolder">
              Build your project <br /> with your mobile
            </h2>
          </div>
          <div className="row">
            <h4 className=" text-muted ">
              Responsive UI with great <br />
              user experience in <br />
              mobile devices
            </h4>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={MCE} className="h-75 "></img>
        </div>
      </div>
      <div className="row">
        <h2 className="text-center fw-bolder h1 mb-5">Supported Languages</h2>
      </div>
      <div className="row  p-2">
        <div className="col-4   d-flex justify-content-center">
          <img src={CPlus}></img>
        </div>

        <div className="col-4 d-flex justify-content-center">
          <img src={C}></img>
        </div>

        <div className="col-4   d-flex justify-content-center">
          <img src={Python}></img>
        </div>
      </div>
    </div>
  );
}
