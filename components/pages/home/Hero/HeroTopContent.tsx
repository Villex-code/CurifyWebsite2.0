import React from "react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TextBlur from "@/components/ui/text/TextBlur";
import TextBlurH1 from "@/components/ui/text/TextBlurH1";

const HeroTopContent = () => {
  const t = useTranslations("home");

  const scrollToDemo = () => {
    const demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4"
      id="hero"
    >
      <TextBlur
        text={t("hero.subtitle")}
        speed={1.5}
        animation={{
          hidden: { filter: "blur(8px)", opacity: 0 },
          visible: { filter: "blur(0px)", opacity: 1 },
        }}
        className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent mb-4"
      />

      <div className="text-4xl md:text-[6rem] font-bold mt-1 leading-tight">
        <TextBlurH1
          text={t("hero.title")}
          speed={1.5}
          animation={{
            hidden: { filter: "blur(8px)", opacity: 0 },
            visible: { filter: "blur(0px)", opacity: 1 },
          }}
          className="bg-gradient-to-r from-teal-600 to-teal-900 bg-clip-text text-transparent block"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-base md:text-xl text-black mt-8 max-w-2xl"
      >
        {t("hero.description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 mt-8"
      >
        <Link
          href="/contact"
          className="group relative px-8 py-4 bg-[#148D98] text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-[#148D98]/30 transition-all hover:shadow-[#148D98]/50 hover:-translate-y-1"
        >
          <span className="relative z-10 flex items-center gap-2">
            {t("hero.cta.getStarted")}
          </span>
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out" />
        </Link>
        <Link
          href="https://portal-staging.curifyapp.com/"
          target="_blank"
          className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-[#148D98] hover:text-[#148D98] transition-all flex items-center gap-2"
        >
          {t("hero.cta.watchDemo")}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroTopContent;
