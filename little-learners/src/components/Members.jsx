import React from "react";
import sarah from "../assets/sarah.png";
import david from "../assets/david.png";
import emily from "../assets/emily.png";
import michael from "../assets/michael.png";
import jessica from "../assets/jessica.png";
import williwam from "../assets/william.png";
import mail from "../assets/mail.svg";

export default function Members() {
  const members = [
    {
      img: sarah,
      name: "Ms. Sarah Anderson",
      qulifications:
        "Qualification: Bachelor's Degree in Early Childhood Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
      img: david,
      name: "Mr. David Roberts",
      qulifications: "Qualification: Master's Degree in Elementary Education",
      description:
        "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    },
    {
      img: emily,
      name: "Ms. Emily Hernandez",
      qulifications: "Qualification: Diploma in Child Psychology",
      description:
        "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    },
    {
      img: michael,
      name: "Mr. Michael Turner",
      qulifications: "Qualification: Bachelor's Degree in Physical Education",
      description:
        "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    },
    {
      img: jessica,
      name: "Ms. Jessica Lee",
      qulifications: "Qualification: Master's Degree in Special Education",
      description:
        "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    },
    {
      img: williwam,
      name: "Mr. William Parker",
      qulifications: "Qualification: Bachelor's Degree in Fine Arts",
      description:
        "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    },
  ];

  return (
    <div className="mx-16 lg:mx-36" id="members">
      <div className="flex justify-center items-center flex-col  mt-36 mb-16">
        <p className="title-p">Our Teachers With Experties</p>
        <h2 className="title-h2">Our Team Members</h2>
        <p className="mt-5 lg:w-2/3 text-center">
          At Little Learners Academy, our teaching team is the heart of our
          educational journey. We take great pride in employing highly qualified
          and passionate educators who possess a deep understanding of early
          childhood development. Our teachers create a warm and engaging
          atmosphere, encouraging curiosity, instilling confidence, and
          fostering a love for learning.
        </p>
      </div>

      <div className="flex flex-wrap justify-between lg:gap-7 md:gap-4">
        {members.map((member) => {
          return (
            <div className="shadow-div md:w-[48%] p-10 mb-4">
              <div className="flex flex-wrap justify-between mb-8 items-center">
                <div className="flex flex-wrap items-center">
                  <img src={member.img} alt={member.name} className="w-20" />
                  <h2 className="font-bold text-3xl p-2">{member.name}</h2>
                </div>
                <button className="w-12 h-12 rounded-lg bg-[#FFDECC] border border-black flex items-center justify-center">
                  <img src={mail} className="text-xl"></img>
                </button>
              </div>
              <div className="rounded-lg bg-[#FFDECC] border border-black p-5">
                <h3 className="font-semibold text-xl mb-2">
                  {member.qulifications}
                </h3>
                <p>{member.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
