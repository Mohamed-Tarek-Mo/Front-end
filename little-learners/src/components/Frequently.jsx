import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      question: "Is there a uniform policy for students?",
      answer:
        "Yes, we have a uniform policy to promote a sense of community and minimize distractions. Uniform details will be provided upon enrollment.",
    },
    {
      question: "What extracurricular activities are available for students?",
      answer:
        "We offer a variety of extracurricular activities including music, art, sports, and STEM clubs. Activities vary by season and age group.",
    },
    {
      question: "How do you handle food allergies and dietary restrictions?",
      answer:
        "We take food allergies very seriously. Parents must notify us of any allergies, and we maintain nut-free classrooms. Special dietary needs can be accommodated.",
    },
    {
      question:
        "What is the teacher-to-student ratio at Little Learners Academy?",
      answer:
        "We maintain a low teacher-to-student ratio of 1:8 to ensure personalized attention for each child.",
    },
    {
      question: "How do you handle discipline and behavior management?",
      answer:
        "We use positive reinforcement and age-appropriate consequences. Our approach focuses on teaching appropriate behaviors rather than punishment.",
    },
    {
      question: "How do I apply for admission to Little Learners Academy?",
      answer:
        "Applications can be submitted through our website. The process includes a school tour, application form, and meeting with our admissions team.",
    },
    {
      question: "What is your approach to early childhood education?",
      answer:
        "We use a play-based learning approach that combines structured activities with child-directed exploration to foster all areas of development.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cardColor = "#FFEFE5"; // خلفية الكارد

  return (
    <div className="max-w-6xl mx-auto px-4 mt-36 mb-12" id="frequently">
      <div className="text-center mb-12">
        <span className="title-p">Solutions For The Doubts</span>
        <h1 className="title-h2">Frequently Asked Questions</h1>
        <p className="mt-5 lg:px-24 text-sm md:text-base">
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child's education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {faqs.slice(0, 4).map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg overflow-hidden border transition-colors duration-300"
                style={{
                  backgroundColor: isActive ? "white" : cardColor,
                  borderColor: "black",
                }}
              >
                <button
                  className={`flex justify-between items-center w-full text-left p-6 ${
                    isActive ? "text-black" : "text-black"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span
                    className="w-8 h-8 flex items-center justify-center border text-xl font-light"
                    style={{
                      borderColor: "black",
                      color: "black",
                      borderRadius: "4px",
                    }}
                  >
                    {isActive ? "-" : "+"}
                  </span>
                </button>

                {isActive && (
                  <div className="px-6 pb-6 text-black">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {faqs.slice(4, 8).map((faq, index) => {
            const realIndex = index + 4;
            const isActive = activeIndex === realIndex;
            return (
              <div
                key={realIndex}
                className="rounded-lg overflow-hidden border transition-colors duration-300"
                style={{
                  backgroundColor: isActive ? "white" : cardColor,
                  borderColor: "black",
                }}
              >
                <button
                  className={`flex justify-between items-center w-full text-left p-6 ${
                    isActive ? "text-black" : "text-black"
                  }`}
                  onClick={() => toggleFAQ(realIndex)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span
                    className="w-8 h-8 flex items-center justify-center border text-xl font-light"
                    style={{
                      borderColor: "black",
                      color: "black",
                      borderRadius: "4px",
                    }}
                  >
                    {isActive ? "-" : "+"}
                  </span>
                </button>

                {isActive && (
                  <div className="px-6 pb-6 text-black">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
