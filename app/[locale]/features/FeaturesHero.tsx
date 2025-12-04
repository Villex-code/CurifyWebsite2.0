"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  Activity,
  Database,
  Shield,
  Stethoscope,
  Pill,
  CreditCard,
  Users,
  ChevronRight,
} from "lucide-react";

const FeaturesHero = () => {
  return (
    <section className="relative w-full min-h-[90vh]  flex flex-col justify-center pt-32 pb-20">
      {/* --- BACKGROUND ART (Abstract Teal Shapes) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px]" />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* --- LEFT COLUMN: TYPOGRAPHY & SEARCH --- */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 shadow-sm text-teal-700 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                System Capabilities
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.95] tracking-tight mb-6">
                Complete <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                  Control.
                </span>
              </h1>

              <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
                Explore the documentation for the operating system that powers
                modern healthcare. From IoT inventory to patient intake.
              </p>
            </motion.div>

            {/* --- INTERACTIVE SEARCH DROPDOWN --- */}
            <SearchInterface />
          </div>

          {/* --- RIGHT COLUMN: ABSTRACT VISUALIZATION --- */}
          <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
            <OrbitalSystem />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// COMPONENT: THE SEARCH INTERFACE (The Core Request)
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

  // Close when clicking outside
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="relative z-50 max-w-lg w-full"
      ref={dropdownRef}
    >
      {/* Input Field */}
      <div
        className={`
          relative flex items-center bg-white rounded-2xl border transition-all duration-300
          ${
            isOpen
              ? "shadow-2xl shadow-teal-900/10 border-teal-500 ring-4 ring-teal-500/10"
              : "shadow-xl shadow-slate-200/50 border-white ring-1 ring-slate-200 hover:border-teal-200"
          }
        `}
      >
        <div className="pl-6 text-slate-400">
          <Search
            className={`w-6 h-6 transition-colors ${
              isOpen ? "text-teal-600" : ""
            }`}
          />
        </div>

        <input
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a capability..."
          className="w-full h-16 px-4 bg-transparent outline-none text-lg text-slate-800 placeholder:text-slate-400 font-medium rounded-2xl"
        />

        <div className="pr-4 hidden sm:block">
          <span className="px-2 py-1 bg-slate-100 rounded-md text-xs font-bold text-slate-500 border border-slate-200">
            CMD + K
          </span>
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
            className="absolute top-full left-0 right-0 mt-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-teal-900/10 overflow-hidden"
          >
            <div className="p-2">
              <div className="px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Quick Navigation
              </div>

              <div className="grid grid-cols-1 gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-teal-50 group transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-teal-600 group-hover:border-teal-200 transition-colors">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-teal-800">
                        {cat.label}
                      </h4>
                      <p className="text-xs text-slate-500 group-hover:text-teal-600/70">
                        {cat.desc}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 flex justify-between items-center text-xs">
              <span className="text-slate-500">
                Press <strong className="text-slate-700">Enter</strong> to
                select
              </span>
              <span className="text-teal-600 font-bold hover:underline cursor-pointer">
                View all features
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================================================
// COMPONENT: ORBITAL VISUAL (The "Artistic" Side)
// ============================================================================

const OrbitalSystem = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Orbits */}
      <div className="absolute border border-dashed border-teal-200 rounded-full w-[500px] h-[500px] opacity-30 animate-spin-slow" />
      <div className="absolute border border-teal-100 rounded-full w-[350px] h-[350px] opacity-50" />

      {/* Central Node (Curify Core) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="relative z-20 w-32 h-32 bg-white rounded-3xl shadow-2xl shadow-teal-900/20 border border-white flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-teal-50 rounded-3xl opacity-50 blur-xl -z-10" />
        <Command className="w-12 h-12 text-teal-600" />
      </motion.div>

      {/* Floating Modules (Satellites) */}
      {/* Module 1: IoT */}
      <FloatingModule
        delay={0.2}
        x={-140}
        y={-80}
        icon={Database}
        label="IoT"
        color="bg-blue-500"
      />
      {/* Module 2: Security */}
      <FloatingModule
        delay={0.4}
        x={140}
        y={-60}
        icon={Shield}
        label="Security"
        color="bg-teal-500"
      />
      {/* Module 3: Vitals */}
      <FloatingModule
        delay={0.6}
        x={-100}
        y={120}
        icon={Activity}
        label="Vitals"
        color="bg-purple-500"
      />
      {/* Module 4: Clinical */}
      <FloatingModule
        delay={0.8}
        x={120}
        y={100}
        icon={Stethoscope}
        label="Clinical"
        color="bg-indigo-500"
      />
    </div>
  );
};

const FloatingModule = ({ delay, x, y, icon: Icon, label, color }: any) => (
  <motion.div
    initial={{ opacity: 0, x: 0, y: 0 }}
    animate={{ opacity: 1, x, y }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay,
    }}
    className="absolute z-10"
  >
    {/* Floating Animation Loop */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
      className="bg-white p-3 pr-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md ${color}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-bold text-slate-700 text-sm">{label}</span>
    </motion.div>
  </motion.div>
);

export default FeaturesHero;
