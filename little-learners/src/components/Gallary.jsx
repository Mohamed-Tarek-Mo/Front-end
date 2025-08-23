import React, { useState } from "react";
import GallaryButtons from "./GallaryButtons";
import GallaryCard from "./GallaryCard";

const Gallary = () => {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <section className="flex flex-col items-center  w-full max-w-[1592px] mt-36 mb-12 mx-auto rounded-[12px] px-6 md:px-[120px] bg-[#FFF5F0]">
      <p className="title-p">Our Features</p>
      <h2 className="title-h2">Our Room Gallery</h2>
      <p className="mt-5 lg:w-2/3 text-center mb-20">
        Our kindergarten school provides a nurturing and stimulating
        environment, fostering a love for learning that lasts a lifetime. Join
        us as we embark on an exciting educational journey.
      </p>

      {/* Buttons */}
      <GallaryButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {/* Cards */}
      <GallaryCard title="ClassRooms" activeButton={activeButton} />
      <GallaryCard title="Library" activeButton={activeButton} />
      <GallaryCard title="Science Lab" activeButton={activeButton} />
      <GallaryCard title="Computer Lab" activeButton={activeButton} />
      <GallaryCard title="Garden and Nature Area" activeButton={activeButton} />
    </section>
  );
};

export default Gallary;
