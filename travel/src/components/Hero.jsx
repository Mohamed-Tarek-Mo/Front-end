import React from "react";
import "./HeroStyle.css";

export default function Hero(props) {
  return (
    <div className={`w-100 position-relative ${props.cName}`}>
      <img alt="Hero image" src={props.heroImg}></img>
      <div className="Hero-text">
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
}
