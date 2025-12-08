"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CheckCircle2,
  Zap,
  Box,
  ArrowRight,
  UserCheck,
  AlertCircle,
} from "lucide-react";

const WorkflowAutomationCard = () => {
  const t = useTranslations("about.growth");
  const milestones = t.raw("milestones");
  const milestone = milestones[1]; // Second milestone (Workflow Automation)

  const year = milestone.year;
  const title = milestone.title;
  const subtitle = milestone.subtitle;
  const description = milestone.description;
  const achievements = milestone.achievements;
  const stat = milestone.stat;
  const align = "right";
  const color = "blue";
  const index = 1;

  const alignmentClass = "ml-auto md:mr-10 lg:mr-12";

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
              <p
                className={`text-sm font-bold uppercase tracking-wide mb-4 opacity-70 text-blue-600`}
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
                    <CheckCircle2 className={`w-4 h-4 text-blue-600`} />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CUSTOM GRAPHIC: THE SMART PIPELINE --- */}
            <div className="relative h-64 w-full bg-slate-50 border-t border-slate-100 flex items-center justify-center overflow-hidden">
              {/* Background Flow Lines */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-30">
                <div className="w-full h-px bg-slate-200" />
                <div className="absolute w-full h-16 border-y border-dashed border-slate-200/50" />
              </div>

              {/* The "Automator" Core (Center) */}
              <div className="absolute z-20 bg-white p-3 rounded-2xl shadow-xl border border-blue-100">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                  <Zap className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {/* Animation Container */}
              <div className="absolute inset-0 flex items-center overflow-hidden">
                {/* 1. TASK: LOW STOCK -> REORDERED */}
                <motion.div
                  className="absolute"
                  animate={{
                    left: ["-20%", "120%"], // Move across screen
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0,
                  }}
                >
                  {/* We toggle the look of the card based on position logic using multiple overlaid divs with opacity animations is complex, 
                        so we use a keyframe-like approach with children */}
                  <div className="relative w-40 h-14">
                    {/* STATE 1: ALERT (Visible 0-45%) */}
                    <motion.div
                      className="absolute inset-0 bg-white border-l-4 border-red-400 shadow-md rounded-lg p-2 flex items-center gap-3"
                      animate={{ opacity: [1, 1, 0, 0, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        times: [0, 0.45, 0.5, 1, 1],
                      }}
                    >
                      <div className="bg-red-50 p-1.5 rounded text-red-500">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400">
                          ALERT
                        </div>
                        <div className="text-xs font-bold text-slate-800">
                          Low Stock
                        </div>
                      </div>
                    </motion.div>

                    {/* STATE 2: RESOLVED (Visible 55-100%) */}
                    <motion.div
                      className="absolute inset-0 bg-white border-l-4 border-green-500 shadow-md rounded-lg p-2 flex items-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        times: [0, 0.5, 0.55, 0.9, 1],
                      }}
                    >
                      <div className="bg-green-50 p-1.5 rounded text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400">
                          ACTION
                        </div>
                        <div className="text-xs font-bold text-slate-800">
                          Reordered
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* 2. TASK: SHIFT GAP -> ASSIGNED (Delayed) */}
                <motion.div
                  className="absolute top-40" // Offset vertically
                  animate={{
                    left: ["-20%", "120%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2, // Start halfway through
                  }}
                  style={{ top: "65%" }} // Manual positioning
                >
                  <div className="relative w-40 h-14">
                    {/* STATE 1: GAP */}
                    <motion.div
                      className="absolute inset-0 bg-white border-l-4 border-orange-400 shadow-md rounded-lg p-2 flex items-center gap-3"
                      animate={{ opacity: [1, 1, 0, 0, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        times: [0, 0.45, 0.5, 1, 1],
                        delay: 2,
                      }}
                    >
                      <div className="bg-orange-50 p-1.5 rounded text-orange-500">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400">
                          SCHEDULE
                        </div>
                        <div className="text-xs font-bold text-slate-800">
                          Shift Gap
                        </div>
                      </div>
                    </motion.div>

                    {/* STATE 2: ASSIGNED */}
                    <motion.div
                      className="absolute inset-0 bg-white border-l-4 border-blue-500 shadow-md rounded-lg p-2 flex items-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        times: [0, 0.5, 0.55, 0.9, 1],
                        delay: 2,
                      }}
                    >
                      <div className="bg-blue-50 p-1.5 rounded text-blue-600">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400">
                          AUTO-ASSIGN
                        </div>
                        <div className="text-xs font-bold text-slate-800">
                          Nurse A.
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Central Connection Flash */}
              <div className="absolute top-0 bottom-0 w-px bg-blue-200 z-10 left-1/2">
                <motion.div
                  className="w-1 h-20 bg-blue-500 absolute -left-[1.5px]"
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkflowAutomationCard;
