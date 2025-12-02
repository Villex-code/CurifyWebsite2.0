"use client";
import React from "react";
import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import UseExamplesScrollable from "./UseExamplesScrollable";

interface UseExamplesMainContentProps {
  scrollProgress: MotionValue<number>;
}

const UseExamplesMainContent = ({
  scrollProgress,
}: UseExamplesMainContentProps) => {
  return (
    <div className="w-[95vw] md:w-[80vw] mx-auto relative">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sticky Left Section */}
        <div className="md:w-[40%] md:sticky md:top-20 h-fit">
          <div className=" backdrop-blur-sm rounded-2xl p-8 md:p-12">
            {/* Status and Values */}
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="w-3 h-3 rounded-full bg-white"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-gray-300 text-sm md:text-base">Values</span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight uppercase leading-tight">
              Our mission is to deliver value
            </h2>

            {/* SVG Button */}
            <div className="relative flex justify-start">
              <Link href="/about" className="group relative">
                <svg
                  width="245"
                  height="99"
                  viewBox="0 0 140 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform scale-100 hover:scale-105 transition-transform"
                >
                  <motion.path
                    d="M95 6.50014C52 1.1668 -5.99998 12.4002 14 46.0002C34 79.6002 99.3333 65.6668 129.5 54.5001C150.833 44.6668 177.2 21.3001 112 6.50014C30.5 -11.9999 1 19.5001 0.5 36.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl text-white group-hover:text-gray-200 transition-colors whitespace-nowrap rotate-[-10deg]">
                  More about us
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling Right Section */}
        <div className="md:w-[60%]">
          <UseExamplesScrollable />
        </div>
      </div>
    </div>
  );
};

export default UseExamplesMainContent;
