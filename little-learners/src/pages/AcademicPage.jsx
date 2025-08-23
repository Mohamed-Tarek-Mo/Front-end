import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Student from "../components/Student";
import Gallary from "../components/Gallary";
const AcademicPage = () => {
  return (
    <section className="bg-[#FFF5F0] min-h-screen">
      <Hero title="Academics" subTitle="Nurturing Young Minds for Success" />
      <Feature/>

      <Student />
      <Gallary />

      {/* Additional sections can be added here */}
      {/* <Events /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}

    </section>
  );
};

export default AcademicPage;