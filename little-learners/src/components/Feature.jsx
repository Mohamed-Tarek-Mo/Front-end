import Icon1 from "../assets/Icon Container (1).png";
import Icon2 from "../assets/Icon Container (2).png";
import Icon3 from "../assets/Icon Container (3).png";
import Icon4 from "../assets/Icon Container (4).png";
import Icon5 from "../assets/Icon Container (5).png";
import Icon6 from "../assets/Icon Container.png";
import Card from "./Card";

const Feature = () => {
  const cards = [
    {
      icon: Icon1,
      title: "Learning",
      text: "We provide quality learning resources.",
    },
    {
      icon: Icon2,
      title: "Creativity",
      text: "Encouraging creativity and innovation.",
    },
    {
      icon: Icon3,
      title: "Teamwork",
      text: "Building strong collaboration skills.",
    },
    {
      icon: Icon4,
      title: "Fun",
      text: "Making learning enjoyable and exciting.",
    },
    {
      icon: Icon5,
      title: "Growth",
      text: "Focusing on personal and academic growth.",
    },
    {
      icon: Icon6,
      title: "Success",
      text: "Helping every child succeed with confidence.",
    },
  ];
  return (
    <section className="relative flex flex-col items-center w-full max-w-[1592px] mt-36 mb-12 mx-auto rounded-[12px] px-6 md:px-[120px] pt-[50px] gap-[20px] md:gap-[50px] bg-[#FFF5F0]">
      <div className="flex justify-center items-center flex-col">
        <p className="title-p">Our Features</p>
        <h2 className="title-h2">Our Special Features</h2>
        <p className="mt-5 lg:w-2/3 text-center">
          Our kindergarten school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
