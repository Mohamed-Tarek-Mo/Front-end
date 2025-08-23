import React from "react";
import squares from "../assets/squares.svg";

export default function overview() {
  return (
    <div className="shadow-div m-5 flex flex-wrap md:p-32 sm:p-20 p-16 relative">
      <div className="absolute top-0 left-0 lg:w-3/12 md:w-4/12 w-5/12">
        <img src={squares} className="lg:w-1/2 w-2/3" />
      </div>
      <div className="md:w-6/12 p-2">
        <p className="title-p m-auto md:m-0">Overview</p>
        <h2 className="title-h2 m-auto md:m-0 text-center md:text-start">
          Welcome to Little Learners Academy
        </h2>
      </div>
      <div className="md:w-6/12 pt-8 m-auto md:m-0 text-center md:text-start">
        <p>
          A leading kinder garden school dedicated to providing a nurturing and
          stimulating environment for young learners. With a commitment to
          excellence in early education, we believe in shaping curious minds and
          building a strong foundation for a lifelong love of learning. Our
          holistic approach fosters intellectual, social, emotional, and
          physical development, ensuring that each child reaches their full
          potential.
        </p>
      </div>
    </div>
  );
}
