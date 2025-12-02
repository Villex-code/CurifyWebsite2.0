import React from "react";

const SvgBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-[5] opacity-30">
      <svg
        className="w-full h-full opacity-20"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Straight line animations */}
        <path
          className="animate-[dash_20s_linear_infinite]"
          d="M0 100 L1920 100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="0"
        />

        <path
          className="animate-[dash_25s_linear_infinite]"
          d="M100 0 L100 1080"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="100"
        />

        {/* Diagonal lines */}
        <path
          className="animate-[dash_30s_linear_infinite]"
          d="M0 0 L1920 1080"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="300"
          strokeDashoffset="200"
        />

        {/* Curved lines */}
        <path
          className="animate-[dash_35s_linear_infinite]"
          d="M0 540 Q480 0 960 540 T1920 540"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="400"
          strokeDashoffset="300"
        />

        <path
          className="animate-[dash_40s_linear_infinite]"
          d="M0 200 C480 400 960 0 1440 200 S1920 400 2400 200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="500"
          strokeDashoffset="400"
        />

        {/* Circular path */}
        <path
          className="animate-[dash_45s_linear_infinite]"
          d="M960 540 m -400 0 a 400 400 0 1 0 800 0 a 400 400 0 1 0 -800 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="2513"
          strokeDashoffset="0"
        />
      </svg>
    </div>
  );
};

export default SvgBackground;
