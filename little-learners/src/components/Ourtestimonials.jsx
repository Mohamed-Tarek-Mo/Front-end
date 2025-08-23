import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Mask_group from "../assets/Mask group.png";
import Profile_Container from "../assets/Profile Container.png";
import Vector from "../assets/Vector.png";

const Ourtestimonials = () => {
  const testimonials = [
    {
      image: Mask_group,
      name: "Jennifer B",
      text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
      rating: 5,
    },
    {
      image: Profile_Container,
      name: "David K",
      text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
      rating: 5,
    },
    {
      image: Vector,
      name: "Emily L",
      text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
      rating: 5,
    },
    {
      image: Mask_group,
      name: "Sarah M",
      text: "The teachers here truly care about each child's growth and happiness. I couldn't be more pleased.",
      rating: 5,
    },
    {
      image: Profile_Container,
      name: "James P",
      text: "An amazing learning environment with caring and supportive staff. Highly recommended.",
      rating: 5,
    },
    {
      image: Vector,
      name: "Olivia R",
      text: "A wonderful place for kids to learn and grow. The programs are engaging and fun.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(testimonials.length - itemsPerPage, 0)
        : prev - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="mt-36 mb-12 px-4 md:px-12" id="testmonials">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="title-p">Children Deserve Bright Future</span>
        <h2 className="title-h2">Our Testimonials</h2>
        <p className="mt-5 text-sm md:text-base">
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>

      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
        >
          <FaArrowLeft />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-1 px-4">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center text-center min-h-[280px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <div className="flex justify-center mb-4 text-yellow-500">
                {Array.from({ length: item.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Ourtestimonials;
