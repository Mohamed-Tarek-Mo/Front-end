const Card = ({ icon, title, text }) => {
  return (
    <div className="relative w-full max-w-[400px] min-w-[250px] sm:min-w-[280px] rounded-xl border-2 border-white bg-white m-2 p-6 sm:p-8 pt-12 sm:pt-16 flex flex-col gap-6 sm:gap-8 shadow-[.5px_.5px_0_.5px_#1E1E1E] hover:shadow-[4px_4px_0_3px_#1E1E1E] transition-shadow duration-300 ease-in-out">
      
      {/* Icon container */}
      <div className="absolute -top-8 left-18 -translate-x-1/2p-3 sm:p-4 ">
        <img src={icon} alt="card icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
      </div>

      {/* Card Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">
        {title}
      </h2>

      {/* Card Text */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        {text}
      </p>
    </div>
  );
};

export default Card;