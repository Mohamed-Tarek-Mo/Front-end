import React from "react";
import "./Card.css";

export default function TripCard(props) {
  return (
    <div className="card col-md-4 col-12 p-2 border-0">
      <span className="overflow-hidden border-end border-start shadow">
        <img
          className="card-img-top img-fluid zom"
          src={props.Cimg}
          alt="Card image cap"
        />
      </span>
      <div className="card-body border-end border-start shadow">
        <h5 className="card-title">Trip in {props.Cdest}</h5>
        <p className="card-text">{props.Ctext}</p>
      </div>
    </div>
  );
}
