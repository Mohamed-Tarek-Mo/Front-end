import React from "react";
import mission from "../assets/mission.svg";
import vision from "../assets/vision.svg";

export default function Mission() {
  return (
    <div className="mx-16 lg:mx-36" id="mission">
      <div className="flex justify-center items-center flex-col  mt-36 mb-16">
        <p className="title-p">Mission & Visions</p>
        <h2 className="title-h2">Our Mission & Visions</h2>
        <p className="mt-5 lg:w-1/2 text-center">
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </div>
      <div className="md:flex gap-16">
        <div className="md:w-1/2 shadow-div p-10 mb-10">
          <div className="flex justify-between">
            <span className="title-h2 pe-5">Mission</span>
            <img src={mission} className="w-16" />
          </div>
          <p className="mt-10 font-medium">
            At Little Learners Academy, our mission is to inspire a passion for
            learning and empower young minds to become confident, compassionate,
            and creative individuals. We strive to create a safe and inclusive
            space where children thrive academically, socially, and emotionally,
            setting the stage for a successful educational journey.
          </p>
        </div>
        <div className="md:w-1/2 shadow-div p-10 mb-10">
          <div className="flex justify-between">
            <span className="title-h2 pe-5">Vision</span>
            <img src={vision} className="w-16" />
          </div>
          <p className="mt-10 font-medium">
            Our vision is to be a beacon of educational excellence, where
            children are encouraged to explore, discover, and express their
            unique talents. We aim to foster a generation of lifelong learners
            equipped with critical thinking, empathy, and a deep appreciation
            for diversity.
          </p>
        </div>
      </div>
    </div>
  );
}
