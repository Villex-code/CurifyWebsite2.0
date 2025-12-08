"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, Server, Wifi, ArrowDown } from "lucide-react";

const IoTSaverCard = () => {
  const t = useTranslations("about.growth");
  const milestones = t.raw("milestones");
  const milestone = milestones[0]; // First milestone (IoT Saver)

  const year = milestone.year;
  const title = milestone.title;
  const subtitle = milestone.subtitle;
  const description = milestone.description;
  const achievements = milestone.achievements;
  const stat = milestone.stat;
  const align = "left";
  const color = "teal";
  const index = 0;

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
                    Impact
                  </span>
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                    {stat}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-1">
                {title}
              </h3>
              <p className="text-sm font-bold uppercase tracking-wide mb-4 opacity-70 text-teal-600">
                {subtitle}
              </p>

              <p className="text-slate-600 leading-relaxed text-base mb-6">
                {description}
              </p>

              {/* Rich List */}
              <div className="space-y-2 mb-8">
                {achievements.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CUSTOM GRAPHIC: THE IOT HUB --- */}
            <div className="relative h-64 w-full bg-slate-50 border-t border-slate-100 flex items-center justify-center overflow-hidden group">
              {/* Background Grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(#0f766e 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Animated Connection Lines (Data Stream) */}
              <div className="absolute inset-0 flex justify-center">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px bg-gradient-to-b from-transparent via-teal-400 to-transparent h-full"
                    style={{
                      left: `${50 + (i === 1 ? 0 : i === 2 ? 20 : -20)}%`,
                    }}
                    animate={{ top: ["100%", "-100%"] }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>

              {/* The Hardware Device */}
              <motion.div
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative z-10 w-32 h-32 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center gap-2"
              >
                {/* Glowing Core */}
                <div className="relative">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 relative z-10">
                    <Server className="w-6 h-6 text-slate-700" />
                  </div>
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-teal-500 rounded-xl -z-0"
                  />
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1.5 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold text-teal-700 font-mono">
                    ONLINE
                  </span>
                </div>
              </motion.div>

              {/* Floating Cost Reduction Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-10 right-10 bg-white shadow-lg border border-slate-100 px-3 py-2 rounded-xl flex flex-col items-center z-20 transform rotate-6"
              >
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  Legacy Cost
                </span>
                <div className="flex items-center gap-1 text-teal-500 font-bold text-sm">
                  <ArrowDown className="w-3 h-3" />
                  <span className="line-through text-slate-300 mr-1">
                    $100k
                  </span>
                  <span>$0</span>
                </div>
              </motion.div>

              {/* WiFi Waves Animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Wifi className="w-64 h-64 text-teal-500/5" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IoTSaverCard;
