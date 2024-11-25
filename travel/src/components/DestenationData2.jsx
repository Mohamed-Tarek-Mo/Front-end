import React from "react";
import "./DestenationStyle.css";

export default function DestenationData2(props) {
  return (
    <>
      <div className="row w-100 mb-5 shadow-lg border border-primary">
        <div className="col-md-6 order-last order-md-first pt-5">
          <img
            src={props.image1}
            alt="image 1"
            className="col-3 w-50 px-1 shadow rounded down"
          />
          <img
            src={props.image2}
            alt="image 2"
            className="col-3 w-50 px-1 shadow rounded "
          />
        </div>
        <div className="col-md-6 order-first order-md-last p-4">
          <h2 className="mb-4 fs-1">{props.heading}</h2>
          <p className="fs-4">{props.description}</p>
        </div>
      </div>
    </>
  );
}
