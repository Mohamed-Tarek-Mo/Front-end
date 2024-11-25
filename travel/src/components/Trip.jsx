import React from "react";
import TripCard from "./TripCard";

import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";

export default function Trip() {
  var txt =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at dolore laudantium quasi fugiat, cum voluptas sint facere ut corrupti ea. Dolores cumque vitae velit voluptatem, ipsa atque vel eum?";
  return (
    <div className="my-5">
      <div className="row w-100 my-5">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
      </div>
      <div className="container m-auto  overflow-hidden">
        <div className="row row-gap-3 ">
          <TripCard Cimg={c1} Cdest="Indonesia" Ctext={txt}></TripCard>
          <TripCard Cimg={c2} Cdest="Malaysia" Ctext={txt}></TripCard>
          <TripCard Cimg={c3} Cdest="Egypt" Ctext={txt}></TripCard>
        </div>
      </div>
    </div>
  );
}
