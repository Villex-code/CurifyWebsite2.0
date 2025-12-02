"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import UseExamplesMainContent from "./UseExamplesMainContent";

const UseExamples = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Opening animation (0-10%)
  const openingScale = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const openingRadius = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["0px", "100px"],
  );

  // Closing animation (90-100%)
  const closingScale = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const closingRadius = useTransform(
    scrollYProgress,
    [0.9, 1],
    ["100px", "0px"],
  );

  // Combine both animations
  const scale = useTransform(scrollYProgress, (value) => {
    if (value <= 0.2) return openingScale.get();
    if (value >= 0.9) return closingScale.get();
    return 0;
  });

  const borderRadius = useTransform(scrollYProgress, (value) => {
    if (value <= 0.1) return openingRadius.get();
    if (value >= 0.9) return closingRadius.get();
    return "100px";
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[350vh] mt-[200px] bg-teal-700"
    >
      <UseExamplesMainContent scrollProgress={scrollYProgress} />

      {/* Mask Layer */}
      <motion.div
        className="absolute inset-0 bg-background origin-center"
        style={{
          scale,
          borderRadius,
        }}
      />
    </div>
  );
};

export default UseExamples;
