const Navigatecard = () => {
  const cards = [
    {
      title: "About Us",
      description:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experiences for your child. Learn about our passionate educators and our engaging approach to education.",
      link: "Learn More",
    },
    {
      title: "Students Life",
      description:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
      link: "Learn More",
    },
    {
      title: "Academics",
      description:
        "Dive into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
      link: "Learn More",
    },
    {
      title: "Admissions",
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      link: "Learn More",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-36 mb-12">
      {/* العنوان والوصف */}

      <div className="text-center mb-12">
        <span className=" title-p">Explore More</span>

        <h1 className="title-h2">Navigate through our Pages</h1>
        <p className="mt-5 text-sm md:text-base">
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school. Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten
          school.
        </p>
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-black hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6 flex flex-col">
              {/* العنوان مع البوردر */}
              <h2 className="text-xl font-bold text-black mb-6 relative text-center pb-6">
                {card.title}

                {/* خط متقطع مع 6 تقطيعات برتقالية داكنة وخط اسود */}
                <div className="absolute bottom-0 left-0 right-0 h-1 flex justify-between items-center">
                  {/* دائرة على اليسار */}
                  <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>

                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1 w-12 bg-orange-300"
                      style={{ borderTop: "1px solid black" }}
                    ></div>
                  ))}

                  {/* دائرة على اليمين */}
                  <div className="w-5 h-5 rounded-full border border-black bg-transparent"></div>
                </div>
              </h2>

              {/* الوصف */}
              <p className="text-black mb-8 text-center">{card.description}</p>

              {/* الزرار */}
              <div className="flex justify-center">
                <button className="bg-[#FFEFE5] text-black px-16 py-5 rounded-md font-semibold hover:bg-orange-100 transition-colors duration-200 w-3/4 md:w-2/3 flex items-center justify-center gap-3">
                  <span>{card.link}</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigatecard;
