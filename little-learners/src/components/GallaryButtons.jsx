import React from "react";

/**
 * A reusable button component styled with Tailwind CSS based on the provided design.
 */
const StyledButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        h-[54px] box-border
        py-[14px] px-5 gap-[10px]
        bg-white border-2 border-slate-900 rounded-lg
        font-sans font-semibold text-slate-900 whitespace-nowrap
        hover:bg-slate-100
      "
    >
      {children}
    </button>
  );
};

export default function GallaryButtons({ activeButton, setActiveButton }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-[#FFF5F0]">
      <StyledButton onClick={() => setActiveButton("all")}>All</StyledButton>
      <StyledButton onClick={() => setActiveButton("ClassRooms")}>
        Class Rooms
      </StyledButton>
      <StyledButton onClick={() => setActiveButton("Library")}>
        Library
      </StyledButton>
      <StyledButton onClick={() => setActiveButton("Science Lab")}>
        Science Lab
      </StyledButton>
      <StyledButton onClick={() => setActiveButton("Computer Lab")}>
        Computer lab
      </StyledButton>
      <StyledButton onClick={() => setActiveButton("Garden and Nature Area")}>
        Garden and Nature Area
      </StyledButton>
    </div>
  );
}
