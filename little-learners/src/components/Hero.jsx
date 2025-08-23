import React from "react";
import Abstract from "../assets/Abstract.png";
import DivButton from "./DivButton";

const Hero = ({ title = "", subTitle = "" }) => {
  return (
    <div className="w-full px-5">
      <section className="relative flex flex-col md:flex-row w-full max-w-[1820px] mt-10 rounded-[12px] border-2 border-[#262626] px-4 md:px-[120px] py-[40px] md:py-[150px] gap-[20px] md:gap-[50px] bg-white shadow-[4px_4px_0_3px_#1E1E1E] overflow-hidden">
        {/* Top-left image */}
        <img
          src={Abstract}
          alt="Abstract design"
          className="absolute top-0 left-0 w-[80px] sm:w-[100px] md:w-[200px] h-auto  "
        />

        {/* Left column (Title & Subtitle) */}
        <div className="md:w-6/12 p-2 flex flex-col">
          <p className="border-2 rounded-lg border-black p-1 px-4 w-fit bg-white mb-2 mx-auto md:mx-0 ">
            {title}
          </p>
          <h2 className="text-5xl font-semibold ">{subTitle}</h2>
        </div>

        {/* Right column (Description) */}
        <div className="w-full md:max-w-[765px] text-sm sm:text-base md:text-lg text-left flex flex-col justify-center items-start md:items-end mt-6 md:mt-0">
          Welcome to our Academics page, where we take pride in providing a
          comprehensive and stimulating educational experience for your child.
          Our kindergarten school's academic program is thoughtfully designed to
          foster a love for learning while building a strong foundation of
          essential skills and knowledge. From language arts and mathematics to
          science and social studies, our curriculum is carefully crafted to
          spark curiosity and encourage active exploration.
        </div>
      </section>
    </div>
  );
};

export default Hero;
