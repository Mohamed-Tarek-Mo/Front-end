import React from "react";
import Hero from "../components/Hero";
import Destenation from "../components/Destenation";
import Trip from "../components/Trip";

import home_hero from "../assets/home_hero.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        cName="hom"
        heroImg={home_hero}
        title="Your Journey Your Story"
        text="See the world"
        url="/"
        btnText="Travel Plan"
        btnClass="btn btn-primary"
      ></Hero>
      <Destenation></Destenation>
      <Trip></Trip>
    </div>
  );
}
