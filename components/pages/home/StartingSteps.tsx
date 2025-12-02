"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
// import step1 from "@/public/images/Appi1SS.webp";
// import step2 from "@/public/images/curify_org.webp";
// import step3 from "@/public/images/training_med.webp";
// import step4 from "@/public/images/analytics2.webp";

const StartingSteps = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const steps: any[] = [
    // {
    //   id: 1,
    //   title: t("startingSteps.steps.1.title"),
    //   description: t("startingSteps.steps.1.description"),
    //   image: step1.src,
    // },
    // {
    //   id: 2,
    //   title: t("startingSteps.steps.2.title"),
    //   description: t("startingSteps.steps.2.description"),
    //   image: step2.src,
    // },
    // {
    //   id: 3,
    //   title: t("startingSteps.steps.3.title"),
    //   description: t("startingSteps.steps.3.description"),
    //   image: step3.src,
    // },
    // {
    //   id: 4,
    //   title: t("startingSteps.steps.4.title"),
    //   description: t("startingSteps.steps.4.description"),
    //   image: step4.src,
    // },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Adjust scroll progress to have initial delay
  const adjustedScrollProgress = useTransform(scrollYProgress, (value) => {
    if (value < 0.2) return 0; // No movement for first 20% of scroll
    return (value - 0.2) / 0.8; // Normalize remaining scroll (0.8 = 1 - 0.2)
  });

  const imageIndex = useTransform(
    adjustedScrollProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 3]
  );

  const y = useTransform(adjustedScrollProgress, [0, 1], ["0%", "-75%"]);

  const createStepOpacity = (index: number) => {
    const segments = steps.map((_, i) => i / (steps.length - 1));
    const opacityValues = segments.map((segment) => {
      if (index === 0 && segment === 0) return 1;
      if (segment === index / (steps.length - 1)) return 1;
      if (segment === (index + 1) / (steps.length - 1)) return 0;
      return 0;
    });
    return useTransform(adjustedScrollProgress, segments, opacityValues);
  };

  const createStepScale = (index: number) => {
    const segments = steps.map((_, i) => i / (steps.length - 1));
    const scaleValues = segments.map((segment) => {
      if (segment === index / (steps.length - 1)) return 1;
      return 0.95;
    });
    return useTransform(adjustedScrollProgress, segments, scaleValues);
  };

  const createFadeTransition = (index: number) => {
    return useTransform(
      imageIndex,
      [index - 0.5, index - 0.3, index, index + 0.3, index + 0.5],
      [0, 1, 1, 1, 0]
    );
  };
  return (
    <div
      ref={containerRef}
      className="h-[400vh] relative hidden lg:block py-40"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center">
        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl font-semibold text-center pt-40 mb-20 text-teal-700 flex flex-col">
          <span className="pb-4">{t("startingSteps.mainTitle.line1")}</span>

          <span>{t("startingSteps.mainTitle.line2")}</span>
        </h2>

        <div className="w-screen max-w-[90vw] px-4 sm:px-6 lg:px-8 flex gap-20 mx-auto">
          {/* Left Side - Tablet Panel */}
          <div className="w-2/3 relative">
            <motion.div
              className="max-w-[100%] mx-auto w-[80%] border-4 border-[#6C6C6C] p-6
                        bg-[#222222] rounded-[30px] shadow-2xl"
              style={{
                boxShadow:
                  "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
                aspectRatio: "16/10",
              }}
            >
              <div className="h-full w-full rounded-2xl bg-zinc-900 relative overflow-hidden">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="absolute inset-0"
                    style={{
                      opacity: createFadeTransition(index),
                      zIndex: useTransform(imageIndex, (value) =>
                        Math.round(value) === index ? 2 : 1
                      ),
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-fit"
                        priority={index === 0}
                        quality={85}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Steps */}
          <div className="w-1/3 relative h-[30rem]">
            <motion.div style={{ y }} className="absolute top-0 left-0 w-full">
              <div className="space-y-40">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="relative"
                    style={{
                      opacity: createStepOpacity(index),
                      scale: createStepScale(index),
                    }}
                  >
                    {/* Step divider */}
                    <div className="absolute -top-6 left-0 w-full">
                      <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
                        style={{
                          opacity: createStepOpacity(index),
                        }}
                      />
                    </div>

                    <div className="flex items-start gap-8">
                      {/* Step number */}
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: useTransform(
                            adjustedScrollProgress,
                            [
                              index / (steps.length - 1),
                              (index + 1) / (steps.length - 1),
                            ],
                            ["rgb(38, 38, 38)", "rgb(229, 229, 229)"]
                          ),
                        }}
                      >
                        <span className="text-neutral-200 text-lg font-medium">
                          {step.id}
                        </span>
                      </motion.div>

                      {/* Step content */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingSteps;
