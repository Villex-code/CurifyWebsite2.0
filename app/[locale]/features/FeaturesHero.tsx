"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Activity,
  CreditCard,
  Users,
  ChevronRight,
  BarChart3,
  Sparkles,
  Zap,
  Check,
  Stethoscope,
  Pill,
  ArrowRight,
} from "lucide-react";

// --- MAIN COMPONENT ---
const FeaturesHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center  pt-32 pb-20">
      {/* --- THE SATELLITE SYSTEM (Floating Cards) --- */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block max-w-[1400px] mx-auto">
        {/* Top Left: Analytics (Rotated Away Left) */}
        <FloatingSatellite x="10%" y="20%" delay={0} rotate={-25}>
          <VisualAnalytics />
        </FloatingSatellite>

        {/* Top Right: Payments (Rotated Away Right) */}
        <FloatingSatellite x="90%" y="20%" delay={0.5} rotate={25}>
          <VisualPayments />
        </FloatingSatellite>

        {/* Bottom Left: Patient Profile */}
        <FloatingSatellite x="15%" y="75%" delay={1} rotate={-15}>
          <VisualPatient />
        </FloatingSatellite>

        {/* Bottom Right: Automation */}
        <FloatingSatellite x="85%" y="70%" delay={1.5} rotate={15}>
          <VisualAutomation />
        </FloatingSatellite>
      </div>

      {/* --- CENTER CONTENT --- */}
      <div className="relative z-20 w-full max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100 shadow-sm text-teal-700 text-xs font-bold uppercase tracking-widest mb-10">
            <Sparkles className="w-3 h-3 fill-teal-500" />
            Feature Ecosystem
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-[1] mb-8">
            <span className="font-serif italic font-light text-slate-400 block mb-2">
              Total control over
            </span>
            <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-teal-800">
              your operation.
            </span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-16 font-light">
            Explore the documentation for the operating system that powers
            modern healthcare. From{" "}
            <strong className="text-teal-700 font-medium">IoT inventory</strong>{" "}
            to{" "}
            <strong className="text-teal-700 font-medium">
              AI diagnostics
            </strong>
            .
          </p>
        </motion.div>

        {/* Search Interface */}
        <div className="w-full max-w-2xl mx-auto relative z-50">
          <SearchInterface />
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide pt-2">
            Quick Access:
          </span>
          {["Smart Inventory", "E-Prescribing", "Billing", "Telehealth"].map(
            (tag) => (
              <button
                key={tag}
                className="text-sm font-medium text-slate-600 bg-white/50 border border-slate-200 px-4 py-1.5 rounded-full hover:bg-white hover:border-teal-200 hover:text-teal-700 hover:shadow-md transition-all duration-300"
              >
                {tag}
              </button>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// COMPONENT: FLOATING SATELLITE WRAPPER
// ============================================================================
const FloatingSatellite = ({
  children,
  x,
  y,
  delay,
  rotate,
}: {
  children: React.ReactNode;
  x: string;
  y: string;
  delay: number;
  rotate: number;
}) => {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0], // Subtle bobbing
          rotate: [rotate, rotate - 2, rotate], // Subtle rotation sway
        }}
        transition={{
          opacity: { duration: 0.8, delay },
          scale: { duration: 0.8, delay },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,128,128,0.15)] p-4 rounded-3xl -translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </motion.div>
    </div>
  );
};

// ============================================================================
// ABSTRACT VISUALS (Smaller & Compact)
// ============================================================================

const VisualAnalytics = () => (
  <div className="flex flex-col gap-2 w-36">
    <div className="flex items-center gap-2 mb-1">
      <div className="p-1 bg-teal-50 text-teal-600 rounded-md">
        <BarChart3 className="w-3 h-3" />
      </div>
      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">
        GROWTH
      </span>
    </div>
    <div className="flex items-end justify-between h-12 gap-1 px-1">
      {[40, 60, 50, 85, 65].map((h, i) => (
        <div
          key={i}
          className="w-full bg-teal-100/50 rounded-t-[2px] relative overflow-hidden"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="absolute bottom-0 w-full bg-teal-500"
          />
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center text-[9px] text-slate-400 font-medium pt-1 border-t border-slate-100">
      <span>Revenue</span>
      <span className="text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded-md">
        +24%
      </span>
    </div>
  </div>
);

const VisualPatient = () => (
  <div className="flex items-center gap-3 w-40">
    <div className="relative">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
        <Users className="w-5 h-5 text-slate-400" />
      </div>
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-teal-500 border-2 border-white rounded-full" />
    </div>
    <div className="flex-1 space-y-1.5">
      <div className="h-2 w-20 bg-slate-200 rounded-full" />
      <div className="h-1.5 w-12 bg-teal-100 rounded-full" />
    </div>
    <div className="p-1.5 bg-white rounded-full text-slate-300 shadow-sm">
      <ChevronRight className="w-3 h-3" />
    </div>
  </div>
);

const VisualPayments = () => (
  <div className="w-36">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="p-1 bg-teal-50 text-teal-600 rounded-md">
          <CreditCard className="w-3 h-3" />
        </div>
        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">
          BILLING
        </span>
      </div>
    </div>
    <div className="bg-slate-50 rounded-lg p-2.5 flex items-center justify-between border border-slate-100">
      <div className="flex flex-col">
        <span className="text-[8px] font-bold text-slate-400 uppercase">
          AMOUNT
        </span>
        <span className="text-xs font-bold text-slate-800">$2,450.00</span>
      </div>
      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
        <Check className="w-3 h-3 text-white" />
      </div>
    </div>
  </div>
);

const VisualAutomation = () => (
  <div className="w-40 flex flex-col gap-2">
    <div className="flex items-center gap-2 mb-1">
      <div className="p-1 bg-slate-100 text-slate-600 rounded-md">
        <Activity className="w-3 h-3" />
      </div>
      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">
        WORKFLOW
      </span>
    </div>
    <div className="flex items-center justify-between bg-white border border-slate-100 p-2 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
        <div className="flex flex-col gap-1">
          <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
          <div className="h-1 w-8 bg-slate-100 rounded-full" />
        </div>
      </div>
      <div className="px-1.5 py-0.5 bg-teal-50 text-teal-700 text-[9px] font-bold rounded">
        ACTIVE
      </div>
    </div>
  </div>
);

// ============================================================================
// COMPONENT: SEARCH INTERFACE
// ============================================================================

const categories = [
  {
    id: "clinical",
    label: "Clinical Tools",
    icon: Stethoscope,
    desc: "SOAP notes, Vitals",
  },
  {
    id: "inventory",
    label: "Smart Inventory",
    icon: Pill,
    desc: "IoT Cabinets, Stock",
  },
  {
    id: "finance",
    label: "Financials",
    icon: CreditCard,
    desc: "Billing, Claims",
  },
  { id: "admin", label: "Administration", icon: Users, desc: "Staff, Shifts" },
];

const SearchInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full z-50">
      {/* Search Input */}
      <div
        className={`
          relative flex items-center bg-white rounded-2xl transition-all duration-300
          ${
            isOpen
              ? "shadow-2xl shadow-teal-900/20 border-teal-500 ring-4 ring-teal-500/10 scale-105"
              : "shadow-xl shadow-slate-200/50 border border-white ring-1 ring-slate-200 hover:border-teal-300 hover:ring-teal-100"
          }
        `}
      >
        <div className="pl-6 text-slate-400">
          <Search
            className={`w-5 h-5 transition-colors ${
              isOpen ? "text-teal-600" : ""
            }`}
          />
        </div>
        <input
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find a feature (e.g. 'Reports')..."
          className="w-full h-16 px-5 bg-transparent outline-none text-lg text-slate-800 placeholder:text-slate-400 font-medium rounded-2xl"
        />
        <div className="pr-6 hidden sm:block">
          <div className="bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-400 shadow-sm">
            CMD + K
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full mt-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-2xl shadow-teal-900/10 overflow-hidden z-40"
          >
            <div className="p-3">
              <div className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Categories
              </div>
              <div className="grid grid-cols-1 gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-teal-50/50 group transition-all text-left border border-transparent hover:border-teal-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-hover:shadow-md transition-all">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-teal-900">
                        {cat.label}
                      </h4>
                      <p className="text-xs text-slate-500 group-hover:text-teal-700/70">
                        {cat.desc}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-slate-50/80 px-6 py-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
              <span>
                Press <strong>Enter</strong> to select
              </span>
              <span className="flex items-center gap-1 text-teal-700 font-bold cursor-pointer hover:underline">
                Full Documentation <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeaturesHero;
