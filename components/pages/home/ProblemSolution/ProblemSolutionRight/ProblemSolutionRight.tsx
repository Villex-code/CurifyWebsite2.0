"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepPrompt from "./StepPrompt";
import StepThinking from "./StepThinking";
import StepPatientForm from "./StepPatientForm";
import StepPrescription from "./StepPrescription";

// --- CONFIGURATION: MANIPULATE TIME HERE (in milliseconds) ---
const TIMINGS = {
  STEP_0_PROMPT: 7000, // 10s: Time to type and read the chat
  STEP_1_THINKING: 5000, // 5s:  Time to show the "brain" animation
  STEP_2_FORM: 7000, // 10s: Time to watch the form auto-fill
  STEP_3_RX: 7000, // 10s: Time to read the prescription card
};

// Automatically calculate total cycle time
const TOTAL_DURATION = Object.values(TIMINGS).reduce(
  (acc, curr) => acc + curr,
  0
);

// Add type definition for window.UnicornStudio
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const ProblemSolutionRight = () => {
  const [step, setStep] = useState(0);

  // --- 1. UNICORN STUDIO INITIALIZATION ---
  useEffect(() => {
    const scriptUrl =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js";

    let script = document.querySelector(
      `script[src="${scriptUrl}"]`
    ) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.UnicornStudio) {
        window.UnicornStudio.init();
      }
    }
  }, []);

  // --- 2. ROBUST SEQUENCE CONTROLLER ---
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let interval: NodeJS.Timeout;

    const runCycle = () => {
      // Clear any pending timeouts from previous cycle to prevent bugs/overlaps
      timeouts.forEach(clearTimeout);
      timeouts = [];

      // Start Step 0 Immediately
      setStep(0);

      // Schedule Step 1 (Thinking)
      // Starts after Prompt time finishes
      let timeAccumulator = TIMINGS.STEP_0_PROMPT;
      timeouts.push(setTimeout(() => setStep(1), timeAccumulator));

      // Schedule Step 2 (Form)
      // Starts after Prompt + Thinking time
      timeAccumulator += TIMINGS.STEP_1_THINKING;
      timeouts.push(setTimeout(() => setStep(2), timeAccumulator));

      // Schedule Step 3 (Rx)
      // Starts after Prompt + Thinking + Form time
      timeAccumulator += TIMINGS.STEP_2_FORM;
      timeouts.push(setTimeout(() => setStep(3), timeAccumulator));

      // (The cycle restarts automatically via setInterval at TOTAL_DURATION)
    };

    // Run immediately
    runCycle();

    // Set interval to repeat the whole process
    interval = setInterval(runCycle, TOTAL_DURATION);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative h-[600px] w-full rounded-[32px] border border-gray-200 shadow-2xl flex flex-col overflow-hidden bg-white/40 backdrop-blur-xl transition-all duration-300">
      {/* --- UNICORN STUDIO BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          data-us-project="bmaMERjX2VZDtPrh4Zwx"
          className="absolute inset-0 w-full h-full opacity-40"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/10 via-white/80 to-white/95" />
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-20 px-6 md:px-8 pt-6 pb-4 flex justify-between items-center border-b border-gray-100/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-xs font-bold text-white uppercase tracking-widest">
            Curify AI Agent
          </span>
        </div>
        <div className="text-xs font-mono text-gray-100">v2</div>
      </div>

      {/* --- MAIN STAGE --- */}
      <div className="relative z-10 flex-1 p-4 md:p-8 flex items-center justify-center min-h-[450px]">
        <AnimatePresence mode="wait">
          {step === 0 && <StepPrompt key="step0" />}
          {step === 1 && <StepThinking key="step1" />}
          {step === 2 && <StepPatientForm key="step2" />}
          {step === 3 && <StepPrescription key="step3" />}
        </AnimatePresence>
      </div>

      {/* --- PROGRESS BAR --- */}
      <div className="relative z-20 h-1 w-full bg-gray-100">
        {/* We use key={step} to reset the animation every time the step changes, 
            or we can use a single long animation for the whole cycle. 
            Here, a continuous bar for the total duration feels smoothest. */}
        <motion.div
          className="h-full bg-teal-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: TOTAL_DURATION / 1000,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default ProblemSolutionRight;
