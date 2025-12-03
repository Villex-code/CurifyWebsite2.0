"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

// Images are loaded from public directory

const HeroLeftContent = () => {
  const t = useTranslations("home");

  return (
    <motion.div
      className="h-screen flex flex-col justify-center gap-12 py-20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <div className="space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("heroLeft.title.part1")}
          <br />
          <span className="text-teal-600">{t("heroLeft.title.part2")}</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("heroLeft.subtitle")}
        </motion.p>
      </div>

      {/* Store Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex justify-start items-center gap-4">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/graphics/apple.png"
              alt="Download on App Store"
              width={180}
              height={60}
              className="object-contain"
            />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/graphics/google.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="object-contain"
            />
          </a>
        </div>
      </motion.div>

      {/* Features List */}
      <motion.div
        className="rounded-2xl p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="grid gap-6">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-teal-700" />
            </div>
            <span className="text-neutral-700 text-lg">
              {t("heroLeft.features.first")}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-teal-700" />
            </div>
            <span className="text-neutral-700 text-lg">
              {t("heroLeft.features.second")}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-teal-700" />
            </div>
            <span className="text-neutral-700 text-lg">
              {t("heroLeft.features.third")}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-teal-700" />
            </div>
            <span className="text-neutral-700 text-lg">
              {t("heroLeft.features.fourth")}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroLeftContent;
