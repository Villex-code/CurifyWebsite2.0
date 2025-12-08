"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background/GradientBackgorund";
import SvgBackground from "@/components/ui/background/SvgBackground";
import Card1 from "./ScrollCards/Card1";
import Card2 from "./ScrollCards/Card2";
import Card3 from "./ScrollCards/Card3";
import Card4 from "./ScrollCards/Card4";
import { useTranslations } from "next-intl";

const UseScrollCards = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const t = useTranslations("scrollCards");

  const titleProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const cardRanges = [
    { start: 0.2, end: 0.35 },
    { start: 0.45, end: 0.55 },
    { start: 0.65, end: 0.75 },
    { start: 0.85, end: 0.95 },
  ];

  const cardConfigs = [
    {
      Component: Card1,
      startPosition: { x: -100, y: -50, rotation: -45 },
      endPosition: { x: 0, y: 0, rotation: -4 },
    },
    {
      Component: Card2,
      startPosition: { x: 100, y: -50, rotation: 45 },
      endPosition: { x: 0, y: 0, rotation: 4 },
    },
    {
      Component: Card3,
      startPosition: { x: -100, y: 50, rotation: -45 },
      endPosition: { x: 0, y: 0, rotation: -6 },
    },
    {
      Component: Card4,
      startPosition: { x: 100, y: 50, rotation: 45 },
      endPosition: { x: 0, y: 0, rotation: 5 },
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-[600vh] w-screen overflow-x-clip scrollbar-hide py-40"
    >
      <div className="sticky top-0 left-0 w-full h-screen">
        {/* Background */}
        {/* <div className="absolute inset-0">
          <SvgBackground />
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(243, 244, 246)"
            gradientBackgroundEnd="rgb(229, 231, 235)"
            firstColor="13, 148, 136"
            secondColor="15, 118, 110"
            thirdColor="17, 94, 89"
            fourthColor="240, 253, 250"
            fifthColor="204, 251, 241"
            pointerColor="20, 184, 166"
            size="100%"
            blendingValue="soft-light"
            interactive={false}
            containerClassName="!absolute"
          />
        </div> */}

        {/* Title Section */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4"
          style={{
            opacity: useTransform(titleProgress, [0, 0.5, 1], [0, 1, 0]),
            scale: useTransform(titleProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-teal-700 mb-4 max-w-4xl">
            {t("scrollCards.title")}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-600 mb-4">
            {t("scrollCards.subtitle")}
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-teal-600 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-1 bg-teal-600 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Cards Container */}
        <div className="relative h-full w-full flex items-center justify-center z-10">
          {cardConfigs.map((config, index) => {
            const progress = useTransform(
              scrollYProgress,
              [cardRanges[index].start, cardRanges[index].end],
              [0, 1]
            );

            const x = useTransform(
              progress,
              [0, 1],
              [config.startPosition.x * 8, config.endPosition.x]
            );
            const y = useTransform(
              progress,
              [0, 1],
              [config.startPosition.y * 8, config.endPosition.y]
            );
            const rotate = useTransform(
              progress,
              [0, 1],
              [config.startPosition.rotation, config.endPosition.rotation]
            );
            const opacity = useTransform(
              progress,
              [0, 0.1, 0.9, 1],
              [0, 1, 1, index === cardConfigs.length - 1 ? 1 : 1]
            );

            return (
              <motion.div
                key={index}
                className="absolute bg-white/95 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl"
                style={{
                  x,
                  y,
                  rotate,
                  opacity,
                  zIndex: index + 1,
                }}
              >
                <config.Component />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseScrollCards;
