import Frequently from "../components/Frequently";
import Navigatecard from "../components/Navigatecard";
import Ourbenefits from "../components/Ourbenefits";
import Ourtestimonials from "../components/Ourtestimonials";

import child from "../assets/Image.png";

const Home = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mt-16 relative gap-8 px-4">
        {/* Left Side - Image with circles */}
        <div className="bg-orange-200 flex justify-center items-center p-6 relative rounded-lg shadow-lg">
          {/* الدواير حوالين الصورة */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i / 16) * 2 * Math.PI;
            const radius = 190; // نصف القطر أكبر شوية
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <span
                key={i}
                className="absolute w-8 h-8 border border-gray-400 rounded-full bg-transparent shadow-md"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              ></span>
            );
          })}

          {/* مكان الصورة */}
          <div className="relative w-[300px] h-[300px] flex justify-center items-center z-10">
            <img
              src={child} // حط مسار الصورة هنا
              alt="Kids"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="bg-orange-50 flex flex-col justify-center p-8 md:p-12 rounded-lg shadow-lg">
          <p className="text-sm text-gray-600">
            Welcome to Little Learners Academy
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Where Young Minds Blossom <br />
            and <span className="text-orange-500">Dreams Take Flight.</span>
          </h1>
          <p className="text-gray-700 mt-4">
            Our kindergarten school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="border border-gray-300 rounded-lg p-4 text-center shadow-sm">
              <h2 className="text-xl font-bold">+7000</h2>
              <p className="text-sm text-gray-500">Students Passed Out</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 text-center shadow-sm">
              <h2 className="text-xl font-bold">+37</h2>
              <p className="text-sm text-gray-500">Awards & Recognitions</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 text-center shadow-sm">
              <h2 className="text-xl font-bold">+15</h2>
              <p className="text-sm text-gray-500">Experienced Educators</p>
            </div>
          </div>
        </div>
      </section>

      <Ourbenefits />
      <Ourtestimonials />
      <Frequently />
      <Navigatecard />
    </>
  );
};

export default Home;
