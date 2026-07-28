import React from "react";

const SolutionCard = ({ icon, title }) => {
  return (
    <div
      className="relative group h-[110px] w-full overflow-hidden"

    >

        <img
    src="/Dot2.png"
    alt=""
    className="absolute inset-0 h-full w-full object-fill pointer-events-none"
  />


      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-2">

        <img
          src={icon}
          alt={title}
          className="w-10 w-auto object-contain"
        />

        <p className="text-center text-[11px] font-medium leading-tight text-white md:text-xs">
          {title}
        </p>

      </div>
    </div>
  );
};

export default SolutionCard;