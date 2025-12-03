"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

const StepThinking = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  // Fetch the Lottie JSON from the public folder
  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch("/animations/ai.json");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    fetchAnimation();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center relative p-6"
    >
      {/* --- BACKGROUND GLOW --- */}
      {/* A large radial gradient to anchor the floating elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* --- MAIN GLASS CARD --- */}
      <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl shadow-teal-900/5 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center overflow-hidden">
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50" />

        {/* --- LOTTIE ANIMATION --- */}
        <div className="w-48 h-48 relative flex items-center justify-center mb-6">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full drop-shadow-lg"
            />
          ) : (
            // Fallback while loading JSON
            <div className="w-16 h-16 rounded-full border-4 border-teal-100 border-t-teal-500 animate-spin" />
          )}
        </div>

        {/* --- PROCESSING LOGS --- */}
        <div className="w-full space-y-3">
          {/* Headline */}
          <div className="text-center mb-4">
            <h4 className="text-lg font-bold text-slate-800 tracking-tight">
              Processing Context
            </h4>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
              Curify Neural Engine
            </p>
          </div>

          {/* Animated Steps */}
          <div className="flex flex-col gap-2 w-full">
            <ProcessingLog text="Identifying Patient Record..." delay={0.2} />
            <ProcessingLog text="Analyzing Clinical History..." delay={1.5} />
            <ProcessingLog text="Validating Drug Interactions..." delay={2.8} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Sub-component for the "Terminal" style logs ---
const ProcessingLog = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/50 border border-slate-100"
  >
    {/* Blinking Dot */}
    <div className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
    </div>

    <span className="text-xs font-mono text-slate-600 font-medium">{text}</span>

    {/* Checkmark appears after a delay */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay + 1 }} // Appears 1s after the text
      className="ml-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-teal-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </motion.div>
  </motion.div>
);

export default StepThinking;
