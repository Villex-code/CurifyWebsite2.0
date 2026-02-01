"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ApplicationHeader = () => {
  const t = useTranslations("application.header");

  return (
    // overflow-hidden is crucial to prevent the giant "1%" from creating horizontal scroll on mobile
    <div className="relative pb-12 md:pb-20 border-b border-slate-200/60 overflow-hidden">
      {/* Background Decorative Element - Adjusted for mobile responsiveness */}
      <div className="hidden md:absolute -top-10 -right-10 md:top-0 md:right-0 -z-10 opacity-[0.07] md:opacity-5 select-none pointer-events-none">
        <h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black leading-none tracking-tighter">
          1%
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
        {/* Left Side: The "Authority" Statement */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
              {t("eliteSelection")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            // Added hyphens-auto and adjusted responsive text sizes for long Greek words
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[0.95] md:leading-[0.9] break-words md:break-normal"
            style={{ hyphens: "auto" }}
          >
            {t("title")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl"
          >
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-tight italic">
              {t("quote")}
            </p>
          </motion.div>
        </div>

        {/* Right Side: The Manifesto */}
        <div className="lg:col-span-5 space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-slate-700 text-base md:text-lg"
          >
            <div className="space-y-4 border-l-2 border-slate-900 pl-5 md:pl-6">
              <p className="font-bold text-slate-900 uppercase tracking-tight text-sm md:text-base">
                {t("standardTitle")}
              </p>
              <div className="space-y-4 leading-relaxed">
                <p>
                  {t("standardText1")}{" "}
                  <span className="text-slate-950 font-semibold underline decoration-teal-400 decoration-2 underline-offset-4">
                    {t("standardTextHighlight")}
                  </span>
                  {t("standardText2")}
                </p>
                <p>{t("standardText3")}</p>
                <p className="font-bold text-slate-950 tracking-tight">
                  {t("standardText4")}
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm font-medium text-slate-400 italic leading-snug">
              {t("disclaimer")}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHeader;
