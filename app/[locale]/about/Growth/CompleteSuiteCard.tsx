"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CheckCircle2,
  LayoutGrid,
  Users,
  Receipt,
  Pill,
  Activity,
  Database,
} from "lucide-react";

const CompleteSuiteCard = () => {
  const t = useTranslations("about.growth");
  const milestones = t.raw("milestones");
  const milestone = milestones[2]; // Third milestone (Complete Suite)

  const year = milestone.year;
  const title = milestone.title;
  const subtitle = milestone.subtitle;
  const description = milestone.description;
  const achievements = milestone.achievements;
  const stat = milestone.stat;
  const align = "left";
  const color = "indigo";
  const index = 2;

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
                <div className="flex items-center gap-2 hidden md:flex">
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    {t("impactLabel")}
                  </span>
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm">
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

            {/* --- CUSTOM GRAPHIC: THE UNIFIED OS --- */}
            <div className="relative h-72 w-full bg-slate-50 border-t border-slate-100 flex items-center justify-center overflow-hidden">
              {/* Background Grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Central Connector Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-px h-32 bg-indigo-200/50" />
                <div className="absolute w-32 h-px bg-indigo-200/50" />
              </div>

              {/* The 4 Modules (Animated) */}
              <div className="grid grid-cols-2 gap-2 relative z-10 transform rotate-3">
                {/* Module 1: Patients */}
                <ModuleBlock
                  icon={Users}
                  label="Patients"
                  color="bg-white text-indigo-600"
                  delay={0}
                  x={-20}
                  y={-20}
                />

                {/* Module 2: Billing */}
                <ModuleBlock
                  icon={Receipt}
                  label="Billing"
                  color="bg-indigo-600 text-white"
                  delay={0.2}
                  x={20}
                  y={-20}
                />

                {/* Module 3: Inventory */}
                <ModuleBlock
                  icon={Pill}
                  label="Pharma"
                  color="bg-indigo-100 text-indigo-700"
                  delay={0.4}
                  x={-20}
                  y={20}
                />

                {/* Module 4: Clinical */}
                <ModuleBlock
                  icon={Activity}
                  label="Clinical"
                  color="bg-slate-800 text-white"
                  delay={0.6}
                  x={20}
                  y={20}
                />

                {/* Central "Lock" / Sync Icon that appears when united */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-indigo-100 flex items-center justify-center z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2, type: "spring" }}
                >
                  <LayoutGrid className="w-4 h-4 text-indigo-600" />
                </motion.div>
              </div>

              {/* Floating "Synced" Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-indigo-100 flex items-center gap-2"
              >
                <Database className="w-3 h-3 text-indigo-500" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">
                  Data Unified
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- SUB-COMPONENT: ANIMATED MODULE BLOCK ---
const ModuleBlock = ({ icon: Icon, label, color, delay, x, y }: any) => {
  return (
    <motion.div
      className={`w-28 h-20 rounded-xl shadow-md flex flex-col items-center justify-center gap-1 border border-slate-100/10 ${color}`}
      // Animation: Start separated, then snap to center (0,0)
      initial={{ x, y }}
      whileInView={{ x: 0, y: 0 }}
      transition={{
        duration: 1.5,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 15,
        repeat: Infinity,
        repeatDelay: 3,
        repeatType: "reverse",
      }}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs font-bold">{label}</span>
    </motion.div>
  );
};

export default CompleteSuiteCard;
