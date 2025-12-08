"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { TrendingUp } from "lucide-react";
import IoTSaverCard from "./Growth/IoTSaverCard";
import WorkflowAutomationCard from "./Growth/WorkflowAutomationCard";
import CompleteSuiteCard from "./Growth/CompleteSuiteCard";
import CurifyMCPCard from "./Growth/CurifyMCPCard";

// --- TRANSLATED DATA STRUCTURE ---

const AboutGrowth = () => {
  const t = useTranslations("about.growth");

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full py-32 ">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto md:px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-teal-600" />
                <span className="text-teal-700 font-bold uppercase tracking-widest text-sm">
                  {t("badge")}
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                {t("title.line1")} <br />
                {t("title.line2")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
                  {t("title.highlight")}
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10"
            >
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                {t("description.part1")}{" "}
                <strong>{t("description.highlight")}</strong>{" "}
                {t("description.part2")}
              </p>
              <p className="text-slate-500 text-sm">{t("followUp")}</p>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <TrendingUp size={24} />
              </div>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-teal-50/50 rounded-3xl -z-10 blur-xl" />
          </div>
        </div>

        {/* --- SCROLL TIMELINE --- */}
        <div className="relative">
          {/* Lifeline Background */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1000 1800"
              fill="none"
            >
              <motion.path
                d="M 200 0 C 200 200, 800 400, 800 600 C 800 800, 200 1000, 200 1200 C 200 1400, 800 1600, 800 1800"
                stroke="url(#gradientLine)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 8"
                style={{ pathLength: scrollYProgress, opacity: 0.4 }}
              />
              <defs>
                <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-24 md:gap-32 w-full">
            <IoTSaverCard />
            <WorkflowAutomationCard />
            <CompleteSuiteCard />
            <CurifyMCPCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrowth;
