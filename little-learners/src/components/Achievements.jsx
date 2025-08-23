import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ach1 from "../assets/ach1.svg";
import ach2 from "../assets/ach2.svg";
import ach3 from "../assets/ach3.svg";

export default function Achievements() {
  const awards = [
    {
      icon: ach1,
      title: "Outstanding Early Childhood Education Award",
      description:
        "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      icon: ach2,
      title: "Innovative STEAM Education Award",
      description:
        "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: ach3,
      title: "Environmental Stewardship Award",
      description:
        "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    },
    {
      icon: ach1,
      title: "Outstanding Early Childhood Education Award",
      description:
        "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      icon: ach2,
      title: "Innovative STEAM Education Award",
      description:
        "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: ach3,
      title: "Environmental Stewardship Award",
      description:
        "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    },
  ];

  return (
    <div className="mx-16 lg:mx-36" id="awards">
      <div className="flex justify-center items-center flex-col mt-36 mb-12">
        <p className="title-p">Our Achievements</p>
        <h2 className="title-h2">Our Awards and Recognitions</h2>
        <p className="mt-5 lg:w-2/3 text-center">
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We are
          honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect our
          team's relentless efforts in creating an exceptional learning
          environment for our students.
        </p>
      </div>

      <div className="w-full py-12 px-4 ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          loop={true}
          watchOverflow={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            670: { slidesPerView: 2 },
            1560: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-div p-10 mb-4 me-4 relative mt-6  md:h-[500px] lg:h-[360px]">
                <div className="w-12 h-12 rounded-lg bg-[#FFDECC] border border-black flex items-center justify-center mb-4 absolute -top-6  left-6">
                  <img src={award.icon} className="text-xl"></img>
                </div>
                <h3 className="font-bold text-2xl mb-5">{award.title} </h3>

                <p>{award.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between">
          <p className="mt-8 text-sm font-medium">8 More Awards</p>
          <div className="flex justify-end gap-2 mt-4">
            <button className="prev-btn nav-btn">
              <ArrowLeft size={18} />
            </button>
            <button className="next-btn nav-btn">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
