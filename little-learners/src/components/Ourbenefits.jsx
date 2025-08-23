import icon1 from "../assets/Icon1.png";
import Group from "../assets/Group.png";
import Icon3 from "../assets/Icon3.png";
import Icon_Container from "../assets/Icon Container.png";
import Icon5 from "../assets/Icon5.png";
import Union from "../assets/Union.png";

const benefitsData = [
  {
    img: icon1, // حط مسار الصورة هنا
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    img: Group,
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    img: Icon3,
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    img: Icon_Container,
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    img: Icon5,
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    img: Union,
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

const Ourbenefits = () => {
  return (
    <section className="px-4 md:px-12 mt-36 mb-12" id="features">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="title-p">Children Deserve Bright Future</span>
        <h2 className="title-h2">Our Benefits</h2>
        <p className="mt-5 text-sm md:text-base">
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-300 rounded-lg shadow-lg pt-14 p-8 text-center min-h-[280px]"
          >
            {/* Image Positioned Left */}
            <div className="absolute -top-6 left-6 bg-orange-100 p-3 rounded-md shadow-md">
              <img src={benefit.img} alt={benefit.title} className="w-6 h-6" />
            </div>
            {/* Title */}
            <h3 className="font-semibold text-lg mt-2">{benefit.title}</h3>
            {/* Description */}
            <p className="text-gray-600 text-sm mt-3">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourbenefits;
