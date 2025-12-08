"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TextBlur from "@/components/ui/text/TextBlur";
import TextBlurH1 from "@/components/ui/text/TextBlurH1";

const HeroTopContent = () => {
  const t = useTranslations("home");

  return (
    <header className="w-full pb-12 md:pt-0 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4 md:px-6"
        id="hero"
      >
        {/* 1. Subtitle / Tagline */}
        <TextBlur
          text={t("hero.subtitle")}
          speed={1.5}
          animation={{
            hidden: { filter: "blur(8px)", opacity: 0 },
            visible: { filter: "blur(0px)", opacity: 1 },
          }}
          className="text-sm md:text-base font-bold text-teal-600 uppercase tracking-widest mb-6"
        />

        {/* 2. Main H1 Title 
            - Added 'text-balance' to force even line distribution (2 lines max usually)
            - Reduced max size to 'lg:text-6xl' to accommodate long Greek words
        */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900 mb-6 text-balance">
            <TextBlurH1
              text={t("hero.title")}
              speed={1.5}
              animation={{
                hidden: { filter: "blur(8px)", opacity: 0 },
                visible: { filter: "blur(0px)", opacity: 1 },
              }}
              className="bg-gradient-to-br from-teal-600 to-teal-800 bg-clip-text text-transparent inline-block"
            />
          </div>
        </div>

        {/* 3. Description 
            - 'text-balance' ensures it doesn't leave orphans
            - 'max-w-3xl' ensures it doesn't stretch too wide (keeping it to ~3 lines)
        */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 text-balance"
        >
          {t("hero.description")}
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            aria-label="Get started"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#148D98] text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-teal-900/20 transition-all hover:shadow-teal-900/40 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t("hero.cta.getStarted")}
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out" />
          </Link>

          <Link
            href="https://portal-staging.curifyapp.com/"
            target="_blank"
            aria-label="Watch demo"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-[#148D98] hover:text-[#148D98] hover:bg-teal-50 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            {t("hero.cta.watchDemo")}
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroTopContent;
