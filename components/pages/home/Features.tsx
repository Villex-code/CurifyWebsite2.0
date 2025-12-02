"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
// import patients from "@/public/app/vitals.webp";
// import personnel from "@/public/app/personnel1.webp";
// import tasks from "@/public/app/tasks_open.webp";
// import storage from "@/public/app/storage_new.webp";
// import schedule from "@/public/app/schedule.webp";
// import analytics from "@/public/app/analytics2.webp";

const Features = () => {
  const t = useTranslations("features");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const createTransforms = (baseRotateX: number, baseRotateY: number) => ({
    rotateX: useTransform(
      smoothMouseY,
      [-1, 1],
      [baseRotateX - 5, baseRotateX + 5]
    ),
    rotateY: useTransform(
      smoothMouseX,
      [-1, 1],
      [baseRotateY - 5, baseRotateY + 5]
    ),
    x: useTransform(smoothMouseX, [-1, 1], [-10, 10]),
    y: useTransform(smoothMouseY, [-1, 1], [-10, 10]),
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const panels: any[] = [
    // Top row
    // {
    //   baseRotateY: 15,
    //   baseRotateX: -15,
    //   position: "left-[15%] top-[5%]",
    //   transforms: createTransforms(-25, 25),
    //   isTop: true,
    //   name: t("features.panels.patientManagement"),
    //   image: patients.src,
    // },
    // {
    //   baseRotateY: 0,
    //   baseRotateX: -15,
    //   position: "left-[40%] top-[2%]",
    //   transforms: createTransforms(-25, 0),
    //   isTop: true,
    //   name: t("features.panels.staffOrganization"),
    //   image: personnel.src,
    // },
    // {
    //   baseRotateY: -15,
    //   baseRotateX: -15,
    //   position: "right-[15%] top-[5%]",
    //   transforms: createTransforms(-25, -25),
    //   isTop: true,
    //   name: t("features.panels.taskAutomation"),
    //   image: tasks.src,
    // },
    // // Bottom row
    // {
    //   baseRotateY: 15,
    //   baseRotateX: 15,
    //   position: "left-[15%] bottom-[5%]",
    //   transforms: createTransforms(25, -25),
    //   isTop: false,
    //   name: t("features.panels.medicationStorage"),
    //   image: storage.src,
    // },
    // {
    //   baseRotateY: 0,
    //   baseRotateX: -15,
    //   position: "left-[40%] bottom-[5%]",
    //   transforms: createTransforms(25, 0),
    //   isTop: false,
    //   name: t("features.panels.appointmentSystem"),
    //   image: schedule.src,
    // },
    // {
    //   baseRotateY: -15,
    //   baseRotateX: 15,
    //   position: "right-[15%] bottom-[5%]",
    //   transforms: createTransforms(25, 25),
    //   isTop: false,
    //   name: t("features.panels.dataAnalytics"),
    //   image: analytics.src,
    // },
  ];

  return (
    <div className="relative min-h-[900px] h-screen w-full hidden md:block">
      <div className="relative h-full w-full">
        {/* Title Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700">
            {t("features.title")}
          </h1>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto text-base md:text-lg">
            {t("features.subtitle")}
          </p>
        </div>

        {panels.map((panel, index) => (
          <motion.div
            key={index}
            className={`absolute w-[20%] aspect-[16/10] ${panel.position}`}
            style={{
              ...panel.transforms,
              perspective: 1000,
            }}
          >
            {/* Feature name */}
            <div
              className={`absolute ${panel.isTop ? "bottom-[-3rem]" : "top-[-3rem]"} 
                         left-1/2 transform -translate-x-1/2 text-center w-full`}
            >
              <span className="text-lg font-medium text-black px-3 py-1 rounded-full">
                {panel.name}
              </span>
            </div>

            {/* Tablet-like container */}
            <div
              className="w-full h-full border-4 border-[#6C6C6C] rounded-[30px] p-2 bg-[#222222]"
              style={{
                boxShadow: panel.isTop
                  ? "0 -84px 50px #00000026, 0 -149px 60px #0000000a, 0 -233px 65px #00000003"
                  : "0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
              }}
            >
              {/* Inner content container with maintained aspect ratio */}
              <div className="w-full h-full bg-zinc-900 rounded-[20px] overflow-hidden relative">
                <div className="absolute inset-0">
                  <img
                    src={panel.image}
                    alt={panel.name}
                    className="w-full h-full object-fit"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>

                {/* Reflection and glare effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-[20px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[20px] pointer-events-none" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
