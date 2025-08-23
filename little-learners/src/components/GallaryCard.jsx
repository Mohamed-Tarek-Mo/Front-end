import Image from "../assets/Image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

const GallaryCard = ({ title, activeButton }) => {
  const isVisible = activeButton === "all" || activeButton === title;

  const images = [Image, Image, Image, Image, Image, Image];

  // refs
  const swiperRef = useRef(null);

  // generate unique keys/ids per card
  const uniqueKey = title.replace(/\s+/g, "-").toLowerCase();

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;

    // Attach unique buttons
    swiper.params.navigation.prevEl = `.prev-btn-${uniqueKey}`;
    swiper.params.navigation.nextEl = `.next-btn-${uniqueKey}`;
    swiper.navigation.init();
    swiper.navigation.update();
  }, [uniqueKey]);

  return (
    <section
      className={`${
        isVisible ? "flex" : "hidden"
      } relative flex flex-col md:flex-col w-full max-w-[450px] sm:max-w-[500px] md:max-w-[1596px] md:h-[400px] mt-[100px] md:mt-[230px] mx-auto rounded-[12px] border-2 border-[#262626] px-4 md:px-[120px] py-[30px] md:py-[180px] gap-2 bg-white shadow-[4px_4px_0_3px_#1E1E1E] mb-10`}
    >
      {/* Swiper for images */}
      <div className="absolute -top-[120px] left-0 w-full px-4">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          watchOverflow={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            670: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }, // ✅ 4 on large screens
          }}
          className="relative"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={`${uniqueKey}-img-${idx}`}>
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="
                  mx-auto h-[150px] w-auto max-w-[250px]
                  md:h-[260px] md:w-full md:max-w-none
                  object-cover rounded-xl shadow-md my-5
                "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-wrap mt-10 relative">
        {/* Custom navigation buttons */}
        <div className="flex justify-end items-end gap-1 min-[767px]:w-5/12 sm:w-2/12 w-full order-1 sm:order-2 absolute top-[0] right-0">
          <button
            className={`prev-btn-${uniqueKey} nav-btn bg-white border border-black w-10 h-10 flex items-center justify-center rounded-lg shadow hover:bg-gray-100`}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className={`next-btn-${uniqueKey} nav-btn bg-white border border-black w-10 h-10 flex items-center justify-center rounded-lg shadow hover:bg-gray-100`}
          >
            <ArrowRight size={18} />
          </button>
        </div>
        {/* Text Section */}
        <div className="relative items-start min-[767px]:w-9/12 sm:w-8/12 w-full order-2 sm:order-1">
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          <p className="text-gray-600 text-base md:text-xl mt-0 md:mt-6 lg:text-1xl">
            Our kindergarten school provides a nurturing
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallaryCard;
