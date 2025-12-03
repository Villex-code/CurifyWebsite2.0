import React from "react";
import { HiArrowRight } from "react-icons/hi";

const ArrowEffect = () => {
  const gridSquares = Array.from({ length: 16 });

  return (
    <button className="group relative rounded-full">
      <div className="h-6 w-6">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-teal-950 hover:bg-white transition-all duration-200">
          {/* Grid container */}
          <div className="absolute inset-0 grid rotate-[25deg] grid-cols-4 grid-rows-4 -m-[1px]">
            {gridSquares.map((_, index) => (
              <div
                key={index}
                className="h-full w-full bg-teal-950 transition-all duration-200 group-hover:bg-white"
                style={{
                  transitionDelay: `${index * 20}ms`,
                }}
              />
            ))}
          </div>
          {/* Arrow Icon */}
          <HiArrowRight className="relative z-10 h-3 w-3 text-white scale-100 transition-all duration-200 ease-in-out group-hover:scale-[1.3] group-hover:text-teal-950" />
        </div>
      </div>
    </button>
  );
};

export default ArrowEffect;
