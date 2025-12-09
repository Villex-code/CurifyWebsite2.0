"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

const AboutMission = () => {
  const t = useTranslations("about.mission");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the background text
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0]);

  return (
    <section
      id="mission"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-white overflow-hidden"
    >
      {/* --- ABSTRACT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Giant vertically scrolling text behind */}
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute top-0 left-0 w-full text-[15vw] font-bold text-teal-900 leading-none whitespace-nowrap opacity-5"
        >
          INNOVATE
        </motion.div>

        {/* Soft Gradient Blob */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-50/80 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* --- SMALL LABEL --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-12 bg-teal-600" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            {t("badge")}
          </span>
        </motion.div>

        {/* --- THE MANIFESTO (Staggered Text Reveal) --- */}
        <div className="space-y-12">
          <RevealText delay={0.1}>
            <span className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1]">
              {t("manifesto.line1")}
            </span>
          </RevealText>

          <RevealText delay={0.2}>
            <span className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1] ml-8 md:ml-24 block">
              {t("manifesto.line2")}{" "}
              <span className="italic text-teal-600">
                {t("manifesto.highlight")}
              </span>
            </span>
          </RevealText>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-12">
            <div className="flex-shrink-0 pt-2 hidden md:block">
              <div className="p-4 bg-teal-50 rounded-full text-teal-700">
                <Quote className="w-6 h-6" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                {t("description")}
                <strong className="text-slate-900 font-semibold ml-2">
                  {t("emphasis")}
                </strong>
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <PillBadge text={t("badges.efficiency")} delay={0.5} />
                <PillBadge text={t("badges.empathy")} delay={0.6} />
                <PillBadge text={t("badges.innovation")} delay={0.7} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

const RevealText = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

const PillBadge = ({ text, delay }: { text: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="px-6 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 bg-white hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50 transition-colors cursor-default"
  >
    {text}
  </motion.span>
);

export default AboutMission;
