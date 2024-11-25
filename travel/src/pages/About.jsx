import React from "react";
import Hero from "../components/Hero";

import about_hero from "../assets/about_hero.jpg";

export default function About() {
  return (
    <div>
      <Hero
        cName="w-100 position-relative"
        heroImg={about_hero}
        title="About"
        url="/"
      ></Hero>
      <div className="container text-start my-5">
        <h2 className="mb-3 mt-5">Our History</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus natus, eaque dicta autem fugit neque? Consequatur
          tempora rerum laboriosam architecto velit sapiente quisquam animi
          reiciendis recusandae illo! Eveniet, incidunt molestiae! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Iste laborum facilis hic
          placeat doloribus veritatis nobis! Facere nisi placeat aliquid
          repellendus minima aperiam accusantium, magnam ullam voluptates sint
          distinctio. Magni. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus facere natus quidem eligendi voluptatibus eveniet
          dolorum ab modi aperiam magnam. Rerum asperiores laborum doloribus ut
          in. Rem dolore cupiditate veniam!
        </p>
        <h2 className="mb-3 mt-5">Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero impedit
          deleniti culpa odit laboriosam quo earum, recusandae voluptates
          reprehenderit! Esse, ex explicabo. Ullam eaque corrupti placeat
          facilis quo laudantium quam? Quas, quidem hic. Consectetur rem vero
          laborum ad nobis illo beatae exercitationem tempore, quam, quia
          temporibus, eligendi reprehenderit modi distinctio ducimus odit
          sapiente illum reiciendis repellendus? Architecto natus ab nesciunt.
        </p>
        <h2 className="mb-3 mt-5">Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          reiciendis alias harum, inventore sapiente facilis, dolor quod ducimus
          neque ut facere, ratione rerum eaque cupiditate cum ipsam fuga commodi
          numquam.
        </p>
      </div>
    </div>
  );
}
