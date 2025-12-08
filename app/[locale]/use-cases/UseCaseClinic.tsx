"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Activity,
  Users,
  Bell,
  CheckCircle2,
  Clock,
  AlertCircle,
  Quote,
} from "lucide-react";

const UseCaseClinic = () => {
  return (
    <section
      className="relative w-full py-24 bg-white overflow-hidden"
      id="use-case-content"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">
              Clinic Operations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Monitor, detect, and respond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                in real-time.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* --- NEW: ABSTRACT NARRATIVE (The "Why It Matters") --- */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 overflow-hidden"
          >
            {/* Decorative Gradient Blur */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[80px] pointer-events-none -mt-20 -mr-20" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-white rounded-full items-center justify-center shadow-sm text-teal-600">
                <Quote className="w-8 h-8 fill-teal-100" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-slate-900 leading-snug">
                  Clinics are living organisms, not just buildings.
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Complexity grows exponentially with every new room and staff
                  member. Curify acts as the{" "}
                  <strong className="text-teal-700 font-semibold">
                    central nervous system
                  </strong>
                  , turning the chaos of patient flow, inventory consumption,
                  and shift changes into a synchronized, predictable rhythm.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- THE BENTO GRID (Visuals) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* CARD 1: LIVE MONITORING */}
          <VisualCard delay={0}>
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-slate-600 uppercase">
                Live Floor Plan
              </span>
            </div>
            <VisualFloorPlan />
          </VisualCard>

          {/* CARD 2: AI CORE */}
          <VisualCard delay={0.1}>
            <VisualAICore />
          </VisualCard>

          {/* CARD 3: NOTIFICATIONS */}
          <VisualCard delay={0.2}>
            <VisualNotifications />
          </VisualCard>
        </div>

        {/* --- TEXT DESCRIPTIONS (Below Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <DescriptionCol
            title="Total Visibility"
            desc="See exactly which rooms are occupied, which need cleaning, and where the bottlenecks are in real-time. Manage patient flow effortlessly."
            delay={0.3}
          />

          <DescriptionCol
            title="AI-Powered Triage"
            desc="Our algorithms analyze patient intake forms to prioritize urgency automatically, ensuring critical cases are seen first."
            delay={0.4}
          />

          <DescriptionCol
            title="Instant Action"
            desc="Get immediate notifications for low inventory, waiting room overflow, or staff requests directly to your device."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

// --- WRAPPER FOR THE VISUAL CARDS ---
const VisualCard = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative aspect-[4/3] w-full bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 group"
  >
    {/* Subtle Grid Background */}
    <div
      className="absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />

    {/* Content */}
    <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
      {children}
    </div>
  </motion.div>
);

// --- WRAPPER FOR TEXT DESCRIPTIONS ---
const DescriptionCol = ({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
      {desc}
    </p>
  </motion.div>
);

// ============================================================================
// VISUALS (Existing code preserved)
// ============================================================================

const VisualFloorPlan = () => (
  <div className="w-full h-full flex flex-col gap-3 justify-center pt-6">
    {/* Room Row 1 */}
    <div className="flex gap-3 w-full">
      <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">RM 101</span>
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-slate-600" />
          <span className="text-xs font-medium text-slate-700">Occupied</span>
        </div>
      </div>
      <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-2 opacity-60">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">RM 102</span>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-medium text-slate-500">Ready</span>
        </div>
      </div>
    </div>

    {/* Room Row 2 */}
    <div className="flex gap-3 w-full">
      <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-2 opacity-60">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">RM 103</span>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-medium text-slate-500">Ready</span>
        </div>
      </div>
      <motion.div
        className="flex-1 bg-teal-50 p-3 rounded-xl shadow-md border border-teal-100 flex flex-col gap-2 relative overflow-hidden"
        animate={{ borderColor: ["#ccfbf1", "#5eead4", "#ccfbf1"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex justify-between items-center relative z-10">
          <span className="text-[10px] font-bold text-teal-600">RM 104</span>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <Clock className="w-4 h-4 text-teal-600" />
          <span className="text-xs font-bold text-teal-700">Cleaning</span>
        </div>
        {/* Progress Bar background */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-teal-300"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </div>
  </div>
);

const VisualAICore = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* The Brain Core */}
    <div className="relative z-10 w-24 h-24 bg-white rounded-3xl shadow-xl shadow-teal-900/10 border border-slate-100 flex items-center justify-center">
      <BrainCircuit className="w-10 h-10 text-teal-500" />
    </div>

    {/* Orbiting Elements */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 m-auto w-48 h-48 border border-dashed border-teal-200 rounded-full"
    />

    {/* Scanning Beam */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 m-auto w-48 h-48 rounded-full flex items-center justify-center"
    >
      <div className="absolute top-0 w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400" />
    </motion.div>

    {/* Data Points */}
    <div className="absolute top-8 left-10 bg-white px-2 py-1 rounded shadow-sm text-[10px] font-bold text-slate-400 border border-slate-100">
      Triage Lvl 1
    </div>
    <div className="absolute bottom-8 right-10 bg-teal-50 px-2 py-1 rounded shadow-sm text-[10px] font-bold text-teal-600 border border-teal-100">
      Rx Check
    </div>
  </div>
);

const VisualNotifications = () => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-3 w-full max-w-[260px] mx-auto">
    {/* Alert 1 */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-4 h-4 text-teal-600" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700">Room 104 Cleaned</div>
        <div className="text-[10px] text-slate-400">Just now</div>
      </div>
    </motion.div>

    {/* Alert 2 */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="w-full bg-white p-3 rounded-2xl shadow-md border-l-4 border-l-red-400 border-y border-r border-slate-100 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
        <AlertCircle className="w-4 h-4 text-red-500" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700">
          Low Stock: Panadol
        </div>
        <div className="text-[10px] text-red-400 font-bold">
          Action Required
        </div>
      </div>
    </motion.div>

    {/* Alert 3 */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="w-full bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 opacity-60"
    >
      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
        <Activity className="w-4 h-4 text-blue-500" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700">Shift Change</div>
        <div className="text-[10px] text-slate-400">In 15 mins</div>
      </div>
    </motion.div>
  </div>
);

export default UseCaseClinic;
