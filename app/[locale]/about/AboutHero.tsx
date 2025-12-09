"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Play, ArrowDownRight } from "lucide-react";

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
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200"
        >
          {/* Placeholder for Video/Image */}
          <div className="absolute inset-0 bg-slate-900">
            {/* 
                REPLACE THIS IMG WITH YOUR VIDEO OR IMAGE.
                If using a video tag: <video autoPlay muted loop playsInline className="w-full h-full object-cover" />
             */}
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop"
              alt="Team collaborating"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="group relative flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </motion.button>
          </div>

          {/* Video Caption */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white max-w-md hidden md:block">
            <p className="text-sm font-medium opacity-80 mb-2">
              {t("video.caption")}
            </p>
            <p className="text-xl font-light">{t("video.description")}</p>
          </div>
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
