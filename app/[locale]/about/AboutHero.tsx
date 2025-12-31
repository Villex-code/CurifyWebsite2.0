"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDownRight } from "lucide-react";

const AboutHero = () => {
  const t = useTranslations("about.hero");
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the video container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative w-full  pt-24 pb-12 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* --- TOP ROW: HEADER & INTRO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {t("badge")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1]">
                {t("title.part1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500 italic font-serif pr-2">
                  {t("title.part2")}
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Subtext & CTA */}
          <div className="lg:col-span-4 lg:pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                {t("description")}
              </p>

              <div
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-700 cursor-pointer group"
                onClick={() => {
                  const missionSection = document.getElementById('mission');
                  if (missionSection) {
                    missionSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {t("cta")}
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- MIDDLE ROW: VIDEO / MEDIA CONTAINER --- */}
        <motion.div
          style={{ y: yVideo, scale: scaleVideo }}
          className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200"
        >
          {/* YouTube Video */}
          <iframe
            src={`https://www.youtube.com/embed/tBu5gykmNl0?autoplay=1&mute=1&loop=1&playlist=tBu5gykmNl0&rel=0`}
            title="Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        {/* --- BOTTOM ROW: STATS --- */}
        <div className="mt-20 border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex gap-4 items-center">
            <div className="bg-teal-50 px-3 py-1 rounded-full text-xs font-bold text-teal-700">
              {t("stats.badge")}
            </div>
            <span className="text-slate-500 text-sm">
              {t("stats.subtitle")}
            </span>
          </div>

          <div className="flex gap-12 md:gap-24">
            <StatItem number="50K+" label={t("stats.tasks")} />
            <StatItem number="1K+" label={t("stats.users")} />
            <StatItem number="99.9%" label={t("stats.uptime")} />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: STAT ITEM ---
const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      <span className="text-3xl md:text-4xl font-serif text-slate-900">
        {number}
      </span>
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
        {label}
      </span>
    </motion.div>
  </div>
);

export default AboutHero;
