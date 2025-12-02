"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const UseWords = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[95vw] md:w-[80vw] mx-auto py-32 md:py-40">
      {/* Top Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-teal-700 to-transparent mb-20 md:mb-32" />
      {/* Paragraphs */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-32 text-gray-600 leading-relaxed mb-20 md:mb-32 text-xl md:text-2xl">
        <p
          className="flex-1"
          dangerouslySetInnerHTML={{
            __html: t("useWords.paragraph1", {
              highlight1: '<strong class="text-teal-700">',
              highlight2: '<strong class="text-teal-700">',
              highlight3: '<strong class="text-teal-700">',
              end: "</strong>",
            }),
          }}
        />
        <p
          className="flex-1"
          dangerouslySetInnerHTML={{
            __html: t("useWords.paragraph2", {
              highlight1: '<strong class="text-teal-700">',
              highlight2: '<strong class="text-teal-700">',
              highlight3: '<strong class="text-teal-700">',
              end: "</strong>",
            }),
          }}
        />
      </div>
      {/* Custom Hand-drawn SVG */}
      <div className="relative flex justify-start mb-20 md:mb-32 ml-16 md:ml-24">
        <Link href="/about" className="group relative">
          <svg
            width="245"
            height="99"
            viewBox="0 0 140 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform scale-100 hover:scale-105 transition-transform"
          >
            <motion.path
              d="M95 6.50014C52 1.1668 -5.99998 12.4002 14 46.0002C34 79.6002 99.3333 65.6668 129.5 54.5001C150.833 44.6668 177.2 21.3001 112 6.50014C30.5 -11.9999 1 19.5001 0.5 36.5"
              stroke="currentColor"
              strokeWidth="2"
              className="text-teal-500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl text-teal-700 group-hover:text-teal-600 transition-colors whitespace-nowrap rotate-[-10deg]">
            {t("useWords.moreAbout")}
          </span>
        </Link>
      </div>
      {/* Active Status */}
      <div className="flex items-center gap-4">
        <motion.div
          className="w-4 h-4 rounded-full bg-teal-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <p className="text-gray-600 text-lg md:text-xl">
          {t("useWords.activeStatus")}
        </p>
      </div>
    </div>
  );
};

export default UseWords;
