"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Database,
  LayoutGrid,
  CreditCard,
  Stethoscope,
  Pill,
} from "lucide-react";

const UseCaseComparison = ({ segment }: { segment: string }) => {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* --- BACKGROUND SPLIT WITH FADE --- */}
      <div className="absolute inset-0 flex pointer-events-none">
        {/* Left Side: Gradients into Slate-50 instead of solid block */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-white via-slate-50 to-white border-r border-slate-100/50" />
        <div className="w-full lg:w-1/2 bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              The difference between <br />
              <span className="text-slate-400">fragmentation</span> and{" "}
              <span className="text-teal-600">unity.</span>
            </h2>
          </motion.div>
        </div>

        {/* --- COMPARISON GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* 1. THE PROBLEM (Chaos / Friction) */}
          <div className="relative group">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-xs mb-3">
                <AlertCircle className="w-4 h-4" /> The Old Way
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                The Data Labyrinth
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Patient history in paper files. Billing in a separate app.
                Inventory on a spreadsheet. Connecting the dots takes weeks.
              </p>
            </div>

            {/* VISUAL: THE PAPER CHASE (Chaos Stack) */}
            <div className="relative h-[400px] w-full bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden flex items-center justify-center shadow-sm">
              <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              <div className="relative w-48 h-64">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40, 0],
                      rotate: [i * 2, -5, i * 2],
                      zIndex: [i, 10, i],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.8,
                    }}
                    className="absolute inset-0 bg-slate-50 border border-slate-300 rounded-xl shadow-sm p-4 flex flex-col gap-2"
                    style={{ rotate: `${i * 3}deg` }}
                  >
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full" />
                    <div className="h-2 w-2/3 bg-slate-200 rounded-full" />
                    <div className="mt-auto h-6 w-20 bg-red-50 rounded text-[10px] flex items-center justify-center text-red-400 font-bold border border-red-100">
                      DISCONNECTED
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating "Loading" Badge */}
              <div className="absolute bottom-8 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100">
                <Clock className="w-4 h-4 text-orange-500 animate-spin-slow" />
                <span className="text-xs font-bold text-slate-600">
                  Syncing... (Forever)
                </span>
              </div>
            </div>
          </div>

          {/* 2. THE SOLUTION (Unification) */}
          <div className="relative">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs mb-3">
                <CheckCircle2 className="w-4 h-4" /> The Curify Way
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Everything Connected
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Curify acts as the central nervous system. Billing, EMR, and
                Inventory talk to each other instantly in one unified dashboard.
              </p>
            </div>

            {/* VISUAL: THE UNIFICATION (Systems Coming Together) */}
            <div className="relative h-[400px] w-full bg-slate-900 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl shadow-teal-900/20 flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-teal-500/10 blur-[80px] rounded-full scale-75" />

              {/* Central Core */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{
                  scale: 1,
                  boxShadow: "0 0 40px rgba(20, 184, 166, 0.3)",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="relative z-20 w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl flex items-center justify-center shadow-2xl border border-teal-400/30"
              >
                <LayoutGrid className="w-10 h-10 text-white" />
              </motion.div>

              {/* Orbiting Fragmented Systems (Coming In) */}
              <div className="absolute inset-0">
                <SatelliteNode
                  icon={CreditCard}
                  label="Billing"
                  angle={0}
                  delay={0}
                  color="blue"
                />
                <SatelliteNode
                  icon={Database}
                  label="Records"
                  angle={90}
                  delay={0.5}
                  color="purple"
                />
                <SatelliteNode
                  icon={Pill}
                  label="Inventory"
                  angle={180}
                  delay={1}
                  color="orange"
                />
                <SatelliteNode
                  icon={Stethoscope}
                  label="Clinical"
                  angle={270}
                  delay={1.5}
                  color="green"
                />
              </div>

              {/* Connecting Lines (Drawing Inward) */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="15%"
                  stroke="rgba(20, 184, 166, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -8] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="50%"
                  stroke="rgba(20, 184, 166, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -8] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="85%"
                  stroke="rgba(20, 184, 166, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -8] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="50%"
                  stroke="rgba(20, 184, 166, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -8] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Success Badge */}
              <div className="absolute bottom-6 flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full backdrop-blur-md">
                <Database className="w-4 h-4" />
                <span className="text-xs font-bold">Data Unified</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- COMPARISON METRICS (Bottom Bar) --- */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <MetricItem
            label="Search Time"
            before="14 Days"
            after="< 1 Sec"
            icon={Clock}
          />
          <MetricItem
            label="Error Rate"
            before="18%"
            after="0.1%"
            icon={AlertCircle}
          />
          <MetricItem
            label="Staff Load"
            before="Heavy"
            after="Automated"
            icon={UsersIcon}
          />

          <div className="flex-1 flex items-center justify-center md:justify-end pt-6 md:pt-0 pl-0 md:pl-8">
            <button className="group flex items-center gap-2 text-teal-600 font-bold text-sm hover:text-teal-700 transition-colors">
              See Feature Details{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- HELPER: ORBITING SATELLITE ---
const SatelliteNode = ({ icon: Icon, label, angle, delay, color }: any) => {
  // Define positions based on 90 degree increments roughly
  // This creates a cross shape around the center
  const isHorizontal = angle % 180 === 0;

  // We animate them floating slightly in and out towards the center
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        marginLeft: -32,
        marginTop: -32, // Center the 64x64 div
        rotate: angle, // Rotate the container to position
      }}
    >
      <motion.div
        animate={{ x: [120, 100, 120] }} // Move In and Out relative to rotation
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className="w-16 h-16"
        style={{ rotate: -angle }} // Counter-rotate so text stays upright
      >
        <div
          className={`
                    w-16 h-16 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-1 shadow-xl
                    ${
                      color === "blue"
                        ? "text-blue-400"
                        : color === "purple"
                        ? "text-purple-400"
                        : color === "orange"
                        ? "text-orange-400"
                        : "text-green-400"
                    }
                `}
        >
          <Icon className="w-6 h-6" />
          <span className="text-[10px] font-bold text-slate-400">{label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- SUB-COMPONENTS (Same as before) ---

const MetricItem = ({ label, before, after, icon: Icon }: any) => (
  <div className="flex-1 px-4 py-4 md:py-0 flex flex-col items-center md:items-start">
    <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
      <Icon className="w-4 h-4" /> {label}
    </div>
    <div className="flex items-baseline gap-3">
      <span className="text-lg text-slate-400 line-through decoration-red-300 decoration-2">
        {before}
      </span>
      <ArrowRight className="w-4 h-4 text-slate-300" />
      <span className="text-2xl md:text-3xl font-bold text-slate-900">
        {after}
      </span>
    </div>
  </div>
);

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

export default UseCaseComparison;
