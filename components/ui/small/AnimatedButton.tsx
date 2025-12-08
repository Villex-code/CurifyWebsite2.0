"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AnimatedButton = () => {
  const t = useTranslations("ui.buttons.animatedButton");

  return (
    <motion.button
      className="group relative px-8 py-4 bg-teal-600 hover:bg-teal-700 rounded-full text-lg font-medium overflow-hidden flex items-center gap-4 transition-all shadow-lg shadow-[#148D98]/30 hover:shadow-[#148D98]/50 hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Text Container */}
      <div className="relative h-7 overflow-hidden">
        <motion.div
          className="flex flex-col items-start"
          animate={{ y: "-50%" }}
          transition={{
            duration: 0.3,
            ease: [0.65, 0, 0.35, 1],
          }}
          initial={false}
          whileHover={{ y: 0 }}
        >
          <span className="h-7 text-white">{t("primary")}</span>
          <span className="h-7 text-white">{t("secondary")}</span>
        </motion.div>
      </div>

      {/* Arrow Container */}
      <div className="relative h-6 w-6 flex-shrink-0">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-teal-950 group-hover:bg-white transition-all duration-200">
          {/* Grid container */}
          <div className="absolute inset-0 grid rotate-[25deg] grid-cols-4 grid-rows-4 -m-[1px]">
            {Array.from({ length: 16 }).map((_, index) => (
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
    </motion.button>
  );
};

export default AnimatedButton;
