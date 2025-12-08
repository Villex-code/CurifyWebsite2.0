"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Zap,
  CalendarCheck,
  Pill,
  ArrowRight,
} from "lucide-react";

const CurifyMCPCard = () => {
  const t = useTranslations("about.growth");
  const milestones = t.raw("milestones");
  const milestone = milestones[3]; // Fourth milestone (Curify MCP)

  const year = milestone.year;
  const title = milestone.title;
  const subtitle = milestone.subtitle;
  const description = milestone.description;
  const achievements = milestone.achievements;
  const stat = milestone.stat;
  const align = "right";
  const color = "purple"; // index 3 % 4 = 3, so purple
  const index = 3;

  const alignmentClass =
    align === "left"
      ? "mr-auto md:ml-10 lg:ml-12"
      : "ml-auto md:mr-10 lg:mr-12";

  const colors: any = {
    teal: "text-teal-600 bg-teal-50 border-teal-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
    purple: "text-purple-600 bg-purple-50 border-purple-100",
  };

  return (
    <div className={`relative w-full max-w-xl ${alignmentClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="relative bg-white rounded-[2.5rem] p-1 shadow-2xl shadow-slate-200/60 border border-white">
          <div className="bg-white rounded-[2.3rem] overflow-hidden relative">
            {/* Header Area */}
            <div className="p-8 pb-0 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[color]}`}
                >
                  {year}
                </span>
                {/* Stat Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    {t("impactLabel")}
                  </span>
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                    {stat}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-1">
                {title}
              </h3>
              <p
                className={`text-sm font-bold uppercase tracking-wide mb-4 opacity-70 ${
                  colors[color].split(" ")[0]
                }`}
              >
                {subtitle}
              </p>

              <p className="text-slate-600 leading-relaxed text-base mb-6">
                {description}
              </p>

              {/* Rich List */}
              <div className="space-y-2 mb-8">
                {achievements.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2
                      className={`w-4 h-4 ${colors[color].split(" ")[0]}`}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CUSTOM GRAPHIC: THE AI ASSISTANT --- */}
            <div className="relative h-72 w-full bg-slate-50 border-t border-slate-100 flex flex-col items-center justify-center overflow-hidden">
              {/* Background Ripple */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                    className="absolute w-40 h-40 border border-teal-200 rounded-full"
                  />
                ))}
              </div>

              {/* Central AI Chat Bubble */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-20 bg-white rounded-2xl shadow-xl border border-teal-100 p-4 flex items-center gap-3 max-w-xs"
              >
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                    Curify AI
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    "Discharging Room 102..."
                  </p>
                </div>
              </motion.div>

              {/* Action Cards (Result) */}
              <div className="absolute w-full h-full pointer-events-none">
                {/* Action 1: Calendar */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 left-8 bg-white p-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2"
                >
                  <div className="bg-blue-50 p-1.5 rounded-lg text-blue-600">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">
                    Bed Freed
                  </span>
                </motion.div>

                {/* Action 2: Meds */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-12 right-8 bg-white p-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2"
                >
                  <div className="bg-purple-50 p-1.5 rounded-lg text-purple-600">
                    <Pill className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">
                    Meds Stopped
                  </span>
                </motion.div>

                {/* Action 3: Task */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-16 right-16 bg-white p-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2"
                >
                  <div className="bg-orange-50 p-1.5 rounded-lg text-orange-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600">
                    Task Closed
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CurifyMCPCard;
