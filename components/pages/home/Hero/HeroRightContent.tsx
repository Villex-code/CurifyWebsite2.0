"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// Remove NumberCount if not used or replace with compatible version
// import NumberCount from "@/components/ui/text/NumberCount";

const CircleProgress = ({ percentage }: { percentage: number }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="relative w-24 h-24">
      <svg className="transform -rotate-90 w-24 h-24">
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-teal-100"
        />
        <motion.circle
          cx="48"
          cy="48"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-teal-600"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {percentage}
        <span className="text-2xl font-bold text-teal-700">%</span>
      </div>
    </div>
  );
};

const HeroRightContent = () => {
  const t = useTranslations("Hero");

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-around py-20 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("right.title.part1")}
          <br />
          <span className="text-teal-600">{t("right.title.part2")}</span>{" "}
          {t("right.title.part3")}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-neutral-600 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("right.description")}
        </motion.p>
      </div>

      <motion.div
        className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200 max-w-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-8">
          <CircleProgress percentage={87} />
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-neutral-900">
              {t("right.timeCard.title")}
            </h3>
            <p className="text-neutral-600">
              {t("right.timeCard.description")}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-teal-600 mb-2">10,000 +</div>
          <div className="text-neutral-600">
            {t("right.stats.medicines.label")}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal-600 mb-2">14,350 +</div>
          <div className="text-neutral-600">{t("right.stats.tasks.label")}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
          <div className="text-neutral-600">
            {t("right.stats.support.label")}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroRightContent;
