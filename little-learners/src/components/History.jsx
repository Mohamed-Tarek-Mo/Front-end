import React from "react";
import dash from "../assets/dash.svg";
import sqr from "../assets/sqr.svg";

export default function History() {
  const time_data = [
    {
      year: "2023",
      title: "Resilience and Future Horizons",
      description:
        "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
    },
    {
      year: "2017",
      title: "Innovation and Technology",
      description:
        "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
    },
    {
      year: "2012",
      title: "Expansion and Recognition",
      description:
        "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
    },
    {
      year: "2005",
      title: "Inception and Growth",
      description:
        "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
    },
  ];

  return (
    <div className="mx-16 lg:mx-36" id="history">
      <div className="flex justify-center items-center flex-col  mt-36 mb-16">
        <p className="title-p">Our Progressive Journey</p>
        <h2 className="title-h2">Our History</h2>
        <p className="mt-5 lg:w-2/3 text-center">
          Founded with a passion for early education in 2005, our kindergarten
          school boasts a rich history of empowering young learners to reach
          their potential through innovative teaching methods and a supportive
          learning environment
        </p>
      </div>
      <div className="shadow-div m-5 pt-10 min-[1163px]:ps-28 ps-10 flex flex-wrap">
        <div className="min-[1300px]:pb-36 min-[1271px]:pb-44 min-[1024px]:pb-48 min-[695px]:pb-[17.5rem] min-[620px]:pb-[20rem] pb-[22rem]">
          <div className="w-[20px] h-full my-8 bg-[#FFBE99] flex justify-center">
            <div className="border-e-2 border-black"></div>
          </div>
        </div>
        <div className="w-11/12 ps-8 pe-3">
          {time_data.map((date) => {
            return (
              <div>
                <div className="mb-10 lg:flex">
                  <div className="w-fit me-4 mb-7">
                    <div className="relative w-fit">
                      <img
                        src={dash}
                        className="absolute top-[35%] left-[-55px]"
                      />
                      <div className="shadow-div flex flex-wrap p-4 w-fit items-center">
                        <img src={sqr} />
                        <h2 className="text-4xl font-bold ps-5">{date.year}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="ps-4 w-full lg:w-8/12">
                    <h3 className="font-semibold text-3xl mb-4">
                      {date.title}
                    </h3>
                    <p className="font-medium">{date.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
