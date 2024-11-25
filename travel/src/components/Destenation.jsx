import React from "react";
import DestenationData from "./DestenationData";
import DestenationData2 from "./DestenationData2";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

export default function Destenation() {
  var des = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            quae consequuntur pariatur labore eum non error beatae? Minus, ullam
            sapiente delectus dignissimos corporis eaque totam, sunt quas, atque
            sint quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Accusamus deserunt officia qui adipisci nesciunt voluptates
            veritatis? Nisi iure animi sit fugiat doloremque illo maiores
            distinctio accusamus? Labore sint culpa voluptatibus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Est eum sint corrupti
            porro perspiciatis labore pariatur quae totam minima, iure et animi,
            expedita, sit facere. Aliquam voluptas impedit rerum voluptatibus.`;

  return (
    <div className="container">
      <div className="row w-100 my-5">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      </div>
      <DestenationData
        heading="Taal Volcano, Batangas"
        description={des}
        image1={img1}
        image2={img2}
      ></DestenationData>
      <DestenationData2
        heading="MT. Daguldul, Batangas"
        description={des}
        image1={img3}
        image2={img4}
      ></DestenationData2>
    </div>
  );
}
