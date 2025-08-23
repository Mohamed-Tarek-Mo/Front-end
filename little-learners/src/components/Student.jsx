import StudentCard from "./StudentCard";

const Student = () => {
  return (
    <section className="flex flex-col items-center  w-full max-w-[1592px] mt-36 mb-12 mx-auto rounded-[12px] px-6 md:px-[120px] bg-[#FFF5F0]">
      <p className="title-p">Our Features</p>
      <h2 className="title-h2">What Students Learn</h2>
      <p className="mt-5 lg:w-2/3 text-center">
        Our kindergarten school provides a nurturing and stimulating
        environment, fostering a love for learning that lasts a lifetime. Join
        us as we embark on an exciting educational journey.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </section>
  );
};

export default Student;
