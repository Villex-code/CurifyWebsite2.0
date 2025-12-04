"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CreditCard,
  ScanLine,
  Sparkles,
  Building2,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Pill,
} from "lucide-react";

const CoreCapabilities = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-teal-100/40 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            The Curify <span className="text-teal-600">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-500 leading-relaxed"
          >
            A unified platform where finance meets pharmacy, and AI meets
            operations. Designed to replace fragmented tools with one cohesive
            OS.
          </motion.p>
        </div>

        {/* --- BROKEN MOSAIC GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* 1. HERO: FINANCIALS (Dark Card, Large Landscape) */}
          <div className="md:col-span-7 lg:col-span-8 row-span-2">
            <TiltCard className="h-full bg-[#0f172a] text-white p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group">
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-teal-500/20 transition-colors duration-700" />

              <div className="relative z-10 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
                  <CreditCard className="w-3 h-3" /> Financial OS
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Integrated Payments & Revenue Cycle
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Automated billing, insurance claims, and real-time financial
                  analytics. Stop losing revenue to administrative errors.
                </p>
              </div>

              {/* Abstract Visual: Dashboard UI */}
              <div className="absolute -bottom-10 -right-10 w-[70%] h-[60%] bg-slate-800 rounded-tl-3xl border-t border-l border-white/10 shadow-2xl p-6 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
                {/* Fake Graph */}
                <div className="flex justify-between items-end h-32 gap-2 mb-4">
                  {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1 }}
                      className="w-full bg-gradient-to-t from-teal-600/20 to-teal-500 rounded-t-sm relative overflow-hidden"
                    >
                      <div className="absolute top-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500">Net Revenue</span>
                    <span className="text-xl font-bold text-white">$2.4M</span>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-lg flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> +12%
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 2. IOT PHARMACY (Tall Portrait, White) */}
          <div className="md:col-span-5 lg:col-span-4 row-span-2">
            <TiltCard className="h-full bg-white border border-slate-200 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <Pill className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Smart Pharmacy
                </h3>
                <p className="text-slate-500 text-sm">
                  IoT-enabled cabinets with automatic inventory tracking.
                </p>
              </div>

              {/* Visual: Floating Pills & Scanner */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[300px] h-[300px] border border-dashed border-slate-200 rounded-full"
                />
                <div className="relative">
                  <ScanLine className="w-24 h-24 text-slate-900 opacity-80" />
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-8 -right-8 bg-white shadow-lg border border-slate-100 p-3 rounded-xl"
                  >
                    <Pill className="w-8 h-8 text-teal-500" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-4 -left-12 bg-white shadow-lg border border-slate-100 p-2 rounded-xl"
                  >
                    <Pill className="w-6 h-6 text-red-400" />
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 3. AI INTELLIGENCE (Square-ish, Gradient) */}
          <div className="md:col-span-5 lg:col-span-4 min-h-[320px]">
            <TiltCard className="h-full bg-gradient-to-br from-teal-50 to-white border border-teal-100 p-8 flex flex-col relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-teal-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-600" /> AI Core
                </h3>
                <p className="text-teal-700/70 text-sm">
                  Clinical decision support & interaction checks.
                </p>
              </div>

              {/* Visual: Neural Network */}
              <div className="absolute right-0 bottom-0 w-48 h-48 opacity-50">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full animate-pulse"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="1"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="100" cy="100" r="20" fill="#ccfbf1" />
                </svg>
              </div>
            </TiltCard>
          </div>

          {/* 4. FACILITY OPS (Wide, Image/Map based) */}
          <div className="md:col-span-7 lg:col-span-8 min-h-[320px]">
            <TiltCard className="h-full bg-white border border-slate-200 p-8 flex flex-row items-center justify-between relative overflow-hidden group">
              <div className="relative z-10 max-w-sm">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Facility Operations
                </h3>
                <p className="text-slate-500">
                  Real-time room management, shift scheduling, and staff
                  allocation.
                </p>
              </div>

              {/* Visual: Isometric Room Cards */}
              <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-64 flex flex-col gap-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-[-10px] transition-all duration-500">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 transform translate-x-4">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-bold text-slate-600">
                    Room 101: Occupied
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs font-bold text-slate-600">
                    Room 102: Cleaning
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 transform translate-x-8">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-bold text-slate-600">
                    Room 103: Occupied
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- INTERACTIVE TILT COMPONENT ---
const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`rounded-3xl shadow-xl transition-shadow duration-300 hover:shadow-2xl ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default CoreCapabilities;
