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
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("heroLeft.title")}
        </motion.h2>
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
        <aside aria-label="Download Curify Medical App">
          <div className="flex justify-start items-center gap-4">
            <a
              href="https://apps.apple.com/in/app/curify/id6743257211"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/graphics/apple.png"
                alt="Download Curify Medical App on Apple App Store"
                width={180}
                height={60}
                className="object-contain"
                priority
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.curifyapp.mobile&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/graphics/google.png"
                alt="Download Curify Medical App on Google Play Store"
                width={200}
                height={60}
                className="object-contain"
                priority
              />
            </a>
          </div>
        </aside>
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
