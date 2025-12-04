"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { CheckCircle2, TrendingUp, Image as ImageIcon } from "lucide-react";

// --- RICHER DATA STRUCTURE ---
const MILESTONES = [
  {
    year: "2020 — Phase 1",
    title: "The IoT Saver",
    subtitle: "Hardware Democratization",
    description:
      "Clinics were bleeding money on legacy contracts. We introduced an agile IoT layer that bypassed expensive proprietary hardware, instantly cutting inventory costs.",
    achievements: [
      "Replaced 6-figure licenses",
      "Plug-and-play Hardware",
      "Real-time Sync",
    ],
    stat: "-60% overhead",
    align: "left",
    color: "teal",
  },
  {
    year: "2022 — Phase 2",
    title: "Workflow Automation",
    subtitle: "Operational Velocity",
    description:
      "Saving money was step one. Saving time was step two. We built intelligent task managers to handle the mundane daily grind, freeing staff to focus on patient care.",
    achievements: [
      "Automated Restocking",
      "Shift Scheduling",
      "Task Assignment",
    ],
    stat: "20hrs/week saved",
    align: "right",
    color: "blue",
  },
  {
    year: "2023 — Phase 3",
    title: "The Complete Suite",
    subtitle: "Unified Operating System",
    description:
      "Data silos kill efficiency. We unified patient intake, billing, and pharmacy records into one seamless view, becoming the single source of truth for the facility.",
    achievements: ["End-to-End EMR", "Integrated Billing", "Multi-Dept Sync"],
    stat: "100% Data Visibility",
    align: "left",
    color: "indigo",
  },
  {
    year: "2025 — Phase 4",
    title: "Curify MCP",
    subtitle: "Master Control Platform",
    description:
      "The future is conversational. Leveraging advanced LLMs to turn complex healthcare logistics into simple natural language commands.",
    achievements: [
      "Natural Language Actions",
      "Predictive Analytics",
      "Zero-UI Operations",
    ],
    stat: "AI-Native Core",
    align: "right",
    color: "purple",
  },
];

const AboutGrowth = () => {
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                  Our Evolution
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                From a single tool <br />
                to an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Intelligent OS.
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
                We didn't start with a grand plan to build an ERP. We started by
                solving <strong>one specific problem</strong> for one clinic.
              </p>
              <p className="text-slate-500 text-sm">
                That obsession with solving real problems led us here.
              </p>
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

          {/* Cards Loop */}
          <div className="flex flex-col gap-24 md:gap-32 w-full">
            {MILESTONES.map((item, index) => (
              <MilestoneCard key={index} index={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CARD COMPONENT ---
const MilestoneCard = ({
  year,
  title,
  subtitle,
  description,
  achievements,
  stat,
  align,
  index,
  color,
}: any) => {
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
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-lg">
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

            {/* Graphic Placeholder Area (Bottom) */}
            <div className="relative h-64 w-full bg-slate-50 border-t border-slate-100 p-6 flex items-center justify-center group cursor-default">
              {/* Placeholder content */}
              <div className="w-full h-full rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3">
                <div
                  className={`p-4 rounded-full ${colors[color]
                    .replace("text-", "bg-")
                    .replace("600", "50")}`}
                >
                  <ImageIcon
                    className={`w-8 h-8 ${colors[color].split(" ")[0]}`}
                  />
                </div>
                <span className="text-slate-400 font-medium text-sm">
                  Visual Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutGrowth;
