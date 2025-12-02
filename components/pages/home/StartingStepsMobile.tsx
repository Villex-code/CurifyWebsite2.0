"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import step1 from "@/public/images/Appi1SS.png";
import step2 from "@/public/images/curify_org.png";
import step3 from "@/public/images/training_med.jpg";
import step4 from "@/public/images/analytics2.png";

const StartingStepsMobile = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: t("startingSteps.steps.1.title"),
      description: t("startingSteps.steps.1.description"),
      image: step1.src,
    },
    {
      id: 2,
      title: t("startingSteps.steps.2.title"),
      description: t("startingSteps.steps.2.description"),
      image: step2.src,
    },
    {
      id: 3,
      title: t("startingSteps.steps.3.title"),
      description: t("startingSteps.steps.3.description"),
      image: step3.src,
    },
    {
      id: 4,
      title: t("startingSteps.steps.4.title"),
      description: t("startingSteps.steps.4.description"),
      image: step4.src,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 3],
  );

  const createSlideTransform = (index: number) => {
    const segments = steps.map((_, i) => i / (steps.length - 1));
    return useTransform(
      scrollYProgress,
      segments,
      segments.map((segment) => {
        if (segment < index / (steps.length - 1)) return "100%";
        if (segment === index / (steps.length - 1)) return "0%";
        return "-100%";
      }),
    );
  };

  const createStepOpacity = (index: number) => {
    const segments = steps.map((_, i) => i / (steps.length - 1));
    return useTransform(
      scrollYProgress,
      segments,
      segments.map((segment) =>
        segment === index / (steps.length - 1) ? 1 : 0,
      ),
    );
  };

  return (
    <div ref={containerRef} className="lg:hidden h-[400vh] relative">
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center pt-8 sm:pt-12 mb-6 sm:mb-8 text-teal-700 px-4">
          {t("startingSteps.mainTitle.line1")}
          <br />
          {t("startingSteps.mainTitle.line2")}
        </h1>

        {/* Image Panel */}
        <div className="w-full px-4 sm:px-6 mb-8">
          <div className="md:max-w-[80%] max-w-[95%] mx-auto">
            <motion.div
              className="w-full border-4 border-[#6C6C6C] p-3 sm:p-4
                       bg-[#222222] rounded-[20px] sm:rounded-[30px] shadow-2xl"
              style={{
                aspectRatio: "16/10",
                boxShadow:
                  "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
              }}
            >
              <div className="h-full w-full rounded-2xl bg-zinc-900 relative overflow-hidden">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="absolute inset-0"
                    style={{
                      opacity: useTransform(
                        imageIndex,
                        [index - 0.25, index, index + 0.25],
                        [0, 1, 0],
                      ),
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-fit"
                        priority
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex-1 relative overflow-hidden px-4 sm:px-6 mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="absolute top-0 left-0 w-full px-4"
              style={{
                x: createSlideTransform(index),
                opacity: createStepOpacity(index),
              }}
            >
              <div className="max-w-md mx-auto">
                <div className="flex items-start gap-4">
                  {/* Step number */}
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: useTransform(
                        scrollYProgress,
                        [
                          index / (steps.length - 1),
                          (index + 1) / (steps.length - 1),
                        ],
                        ["rgb(38, 38, 38)", "rgb(229, 229, 229)"],
                      ),
                    }}
                  >
                    <span className="text-neutral-200 text-base sm:text-lg font-medium">
                      {step.id}
                    </span>
                  </motion.div>

                  {/* Step content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-base sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartingStepsMobile;
