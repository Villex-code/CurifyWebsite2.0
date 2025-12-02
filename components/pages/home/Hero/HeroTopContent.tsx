import React from "react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TextBlur from "@/components/ui/text/TextBlur";
import TextBlurH1 from "@/components/ui/text/TextBlurH1";

const HeroTopContent = () => {
  const t = useTranslations("Hero");

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
        text={t("subtitle")}
        speed={1.5}
        animation={{
          hidden: { filter: "blur(8px)", opacity: 0 },
          visible: { filter: "blur(0px)", opacity: 1 },
        }}
        className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent mb-4"
      />

      <div className="text-4xl md:text-[6rem] font-bold mt-1 leading-tight">
        <TextBlurH1
          text={t("title")}
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
        {t("description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-row gap-4 mt-8"
      >
        <Link
          href="/contact"
          className="px-8 py-4 bg-teal-950 text-white rounded-full font-semibold hover:bg-teal-900 transition-all duration-300 transform hover:scale-105 text-center"
        >
          {t("cta.getStarted")}
        </Link>
        <Link
          href="https://portal-staging.curifyapp.com/"
          target="_blank"
          className="px-8 py-4 bg-background border-2 border-teal-950 text-teal-950 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
        >
          {t("cta.watchDemo")}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroTopContent;
