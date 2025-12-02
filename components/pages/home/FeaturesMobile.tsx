"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
// Import the same images used in the desktop version
// import patients from "@/public/app/vitals.png";
// import personnel from "@/public/app/personnel1.png";
// import tasks from "@/public/app/tasks_open.png";
// import storage from "@/public/app/storage_new.png";
// import schedule from "@/public/app/schedule.png";
// import analytics from "@/public/app/analytics2.png";

const FeaturesMobile = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features: any[] = [
    // { name: t("features.panels.patientManagement"), image: patients.src },
    // { name: t("features.panels.staffOrganization"), image: personnel.src },
    // { name: t("features.panels.taskAutomation"), image: tasks.src },
    // { name: t("features.panels.medicationStorage"), image: storage.src },
    // { name: t("features.panels.appointmentSystem"), image: schedule.src },
    // { name: t("features.panels.dataAnalytics"), image: analytics.src },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="md:hidden px-4 py-12 min-h-screen bg-background">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-md mx-auto space-y-8"
      >
        {/* First three features */}
        <div className="space-y-6">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="border-4 border-[#6C6C6C] rounded-[20px] p-2 bg-[#222222] shadow-lg">
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-fit"
                  />
                  {/* Reflection effects */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                  <span className="text-base font-medium text-black bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full whitespace-nowrap">
                    {feature.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Title Section */}
        <motion.div
          variants={itemVariants}
          className="text-center py-8 space-y-4"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700">
            {t("features.title")}
          </h1>
          <p className="text-neutral-400 text-base">{t("features.subtitle")}</p>
        </motion.div>

        {/* Last three features */}
        <div className="space-y-6">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              className="relative"
            >
              <div className="border-4 border-[#6C6C6C] rounded-[20px] p-2 bg-[#222222] shadow-lg">
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-fit"
                  />
                  {/* Reflection effects */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                  <span className="text-base font-medium text-black bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full whitespace-nowrap">
                    {feature.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesMobile;
