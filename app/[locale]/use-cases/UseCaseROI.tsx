"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import {
  Calculator,
  DollarSign,
  Clock,
  Users,
  Building,
  Stethoscope,
  TrendingUp,
  ArrowRight,
  BarChart3,
} from "lucide-react";

// --- CONFIGURATION ---
type SegmentType = "medical-office" | "clinic" | "hospital";

const CONFIG: Record<
  SegmentType,
  { label: string; multiplier: number; color: string; bg: string }
> = {
  "medical-office": {
    label: "Medical Office",
    multiplier: 1.2,
    color: "text-blue-600",
    bg: "bg-blue-600",
  },
  clinic: {
    label: "Private Clinic",
    multiplier: 2.5,
    color: "text-teal-600",
    bg: "bg-teal-600",
  },
  hospital: {
    label: "Hospital",
    multiplier: 5.0,
    color: "text-purple-600",
    bg: "bg-purple-600",
  },
};

const UseCaseROI = ({ segment }: { segment: string }) => {
  // Safe default
  const activeSegment = (
    CONFIG[segment as SegmentType] ? segment : "medical-office"
  ) as SegmentType;

  const [patients, setPatients] = useState(500);
  const [staff, setStaff] = useState(5);
  const [currentTab, setCurrentTab] = useState<SegmentType>(activeSegment);

  useEffect(() => {
    if (CONFIG[segment as SegmentType]) setCurrentTab(segment as SegmentType);
  }, [segment]);

  // --- LOGIC ---
  const multiplier = CONFIG[currentTab].multiplier;

  // Calculations
  const hoursSaved = Math.round(patients * 0.15 + staff * 10 * multiplier);
  const revenueIncrease = Math.round(hoursSaved * 65); // Assuming $65 value per hour generated

  // For Bar Chart Logic
  const currentCost = Math.round(staff * 5000 + patients * 20); // Arbitrary overhead calc
  const newCost = Math.round(currentCost * 0.65); // 35% reduction

  const themeColor = CONFIG[currentTab].color;
  const themeBg = CONFIG[currentTab].bg;

  return (
    <section className="relative w-full py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 mb-6">
            <Calculator className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              ROI Calculator
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            See the magic <span className={themeColor}>numbers.</span>
          </h2>
        </div>

        {/* --- MAIN INTERFACE CARD --- */}
        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 p-8 md:p-12 overflow-hidden relative">
          {/* Decorative Top Line */}
          <div
            className={`absolute top-0 left-0 w-full h-2 ${themeBg} opacity-80`}
          />

          {/* 1. SEGMENT SWITCHER */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-100 p-1.5 rounded-2xl flex relative w-full max-w-lg">
              <motion.div
                layoutId="activeTab"
                className="absolute bg-white shadow-md rounded-xl h-[calc(100%-12px)] top-1.5 bottom-1.5 z-0"
                style={{
                  width: `calc(33.33% - 8px)`,
                  left:
                    currentTab === "medical-office"
                      ? "6px"
                      : currentTab === "clinic"
                      ? "calc(33.33% + 4px)"
                      : "calc(66.66% + 2px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              {(Object.keys(CONFIG) as SegmentType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`relative z-10 flex-1 px-2 py-3 text-xs md:text-sm font-bold transition-colors ${
                    currentTab === tab
                      ? CONFIG[tab].color
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {CONFIG[tab].label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* --- LEFT: INPUTS (Custom Sliders) --- */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-12">
              {/* Input 1 */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="flex items-center gap-2 font-bold text-slate-700 text-lg">
                    <Users className={`w-5 h-5 ${themeColor}`} />
                    {currentTab === "hospital"
                      ? "Total Beds"
                      : "Monthly Patients"}
                  </label>
                  <div className="text-2xl font-bold text-slate-900">
                    {patients.toLocaleString()}
                  </div>
                </div>
                <CustomSlider
                  min={100}
                  max={5000}
                  step={100}
                  value={patients}
                  onChange={setPatients}
                  color={themeBg}
                />
              </div>

              {/* Input 2 */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="flex items-center gap-2 font-bold text-slate-700 text-lg">
                    {currentTab === "hospital" ? (
                      <Building className={`w-5 h-5 ${themeColor}`} />
                    ) : (
                      <Stethoscope className={`w-5 h-5 ${themeColor}`} />
                    )}
                    {currentTab === "hospital"
                      ? "Departments"
                      : "Staff Members"}
                  </label>
                  <div className="text-2xl font-bold text-slate-900">
                    {staff}
                  </div>
                </div>
                <CustomSlider
                  min={1}
                  max={100}
                  step={1}
                  value={staff}
                  onChange={setStaff}
                  color={themeBg}
                />
              </div>

              {/* Info Box */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                  Estimation Basis
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Calculations based on average admin load reduction observed
                  across {currentTab === "hospital" ? "enterprise" : "clinical"}{" "}
                  partners using Curify v2.4.
                </p>
              </div>
            </div>

            {/* --- RIGHT: VISUALIZER --- */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. REVENUE CARD (Hero) */}
              <motion.div
                layout
                className={`col-span-1 md:col-span-2 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between h-[280px] bg-gradient-to-br ${
                  currentTab === "medical-office"
                    ? "from-blue-600 to-indigo-600"
                    : currentTab === "clinic"
                    ? "from-teal-600 to-emerald-600"
                    : "from-purple-600 to-pink-600"
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-wider text-xs mb-3">
                    <TrendingUp className="w-4 h-4" /> Potential Change in
                    Revenue
                  </div>
                  <div className="text-5xl md:text-7xl font-bold tracking-tight">
                    $<AnimatedNumber value={revenueIncrease} />
                  </div>
                  <p className="text-white/60 mt-2 font-medium">
                    Estimated additional yearly revenue through efficiency.
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                    <ArrowRight className="w-4 h-4" /> That's a 3.5x ROI
                  </div>
                </div>
              </motion.div>

              {/* 2. COST BAR CHART */}
              <div className="col-span-1 bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl flex flex-col justify-between h-[300px] relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-slate-500" />
                  </div>
                  <h4 className="font-bold text-slate-700 text-sm uppercase">
                    Cost Efficiency
                  </h4>
                </div>

                <div className="flex items-end justify-between gap-4 h-full pt-4">
                  {/* Bar 1: Old Cost */}
                  <div className="w-full flex flex-col items-center gap-2">
                    <div className="text-xs font-bold text-slate-400">
                      ${(currentCost / 1000).toFixed(0)}k
                    </div>
                    <motion.div
                      className="w-full bg-slate-200 rounded-t-2xl relative group"
                      initial={{ height: "20%" }}
                      animate={{ height: "80%" }}
                      transition={{ type: "spring", stiffness: 60 }}
                    >
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
                        Old
                      </div>
                    </motion.div>
                  </div>

                  {/* Bar 2: New Cost */}
                  <div className="w-full flex flex-col items-center gap-2">
                    <div className={`text-xs font-bold ${themeColor}`}>
                      ${(newCost / 1000).toFixed(0)}k
                    </div>
                    <motion.div
                      className={`w-full rounded-t-2xl relative group ${themeBg}`}
                      initial={{ height: "20%" }}
                      animate={{ height: "45%" }}
                      transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
                    >
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white/90">
                        New
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* 3. TIME SAVED */}
              <div className="col-span-1 bg-slate-50 rounded-[2.5rem] border border-slate-100 p-8 shadow-inner flex flex-col justify-center h-[300px]">
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 text-3xl mb-1">
                    <AnimatedNumber value={hoursSaved} />{" "}
                    <span className="text-slate-400 text-xl">hrs</span>
                  </h4>
                  <p className="text-slate-500 font-medium text-sm">
                    Reclaimed per month
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="block font-bold text-slate-800">
                        Efficiency Boost
                      </span>
                      <span className="text-slate-500">
                        Staff is 40% more productive
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- CTA FOOTER --- */}
          <div className="mt-16 text-center border-t border-slate-100 pt-10">
            <button
              className={`group text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center gap-3 ${themeBg}`}
            >
              Get Your Full Report
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-slate-400 text-sm font-medium">
              Free analysis based on your metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CUSTOM SLIDER COMPONENT ---
const CustomSlider = ({
  min,
  max,
  step,
  value,
  onChange,
  color,
}: {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (val: number) => void;
  color: string;
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative w-full h-6 flex items-center">
      {/* Track Background */}
      <div className="absolute w-full h-3 bg-slate-100 rounded-full overflow-hidden">
        {/* Active Fill */}
        <motion.div
          className={`h-full ${color}`}
          style={{ width: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* The Invisible Range Input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
      />

      {/* The Custom Thumb Handle */}
      <motion.div
        className="absolute h-8 w-8 bg-white rounded-full shadow-md border-4 border-slate-50 flex items-center justify-center z-10 pointer-events-none"
        style={{ left: `calc(${percentage}% - 16px)` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className={`w-2 h-2 rounded-full ${color}`} />
      </motion.div>
    </div>
  );
};

// --- ANIMATED NUMBER COMPONENT ---
const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [value, motionValue]);

  return <motion.span>{roundedValue}</motion.span>;
};

export default UseCaseROI;
