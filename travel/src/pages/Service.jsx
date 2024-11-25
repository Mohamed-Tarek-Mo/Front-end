import React from "react";
import Hero from "../components/Hero";

import service_hero from "../assets/service_hero.jpg";
import Trip from "../components/Trip";

export default function Service() {
  return (
    <div>
      <Hero
        cName="w-100 position-relative"
        heroImg={service_hero}
        title="Service"
        url="/"
      ></Hero>
      <Trip></Trip>
    </div>
  );
}
