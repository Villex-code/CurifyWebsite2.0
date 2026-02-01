"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  LayoutGrid,
  MousePointerClick,
  Pill,
  Stethoscope,
  CreditCard,
} from "lucide-react";
import { getFeatureById } from "./featuresRegistry";
import { useRouter } from "next/navigation";

interface FeaturesContentProps {
  featureId: string;
}

const FeaturesContent = ({ featureId }: FeaturesContentProps) => {
  const feature = getFeatureById(featureId);
  const router = useRouter();

  // --- 1. EMPTY STATE: IDLE SYSTEM HUB ---
  if (!feature) {
    return (
      <main className="flex-1 min-w-0 h-full">
        <div className="relative w-full h-[600px] bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col items-center justify-center text-center p-8">
          {/* Background Grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#0f766e 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-50/80 rounded-full blur-[80px]" />

          {/* Central Hub Visual */}
          <div className="relative z-10 mb-8">
            {/* Core */}
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center relative z-20">
              <LayoutGrid className="w-10 h-10 text-teal-600" />
            </div>

            {/* Pulse Rings */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-3xl border-2 border-teal-500/20 z-10"
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
              className="absolute inset-0 rounded-3xl border border-teal-500/10 z-10"
            />

            {/* Orbiting Satellites */}
            <FloatingIcon
              icon={Pill}
              angle={0}
              delay={0}
              color="text-blue-500"
              bg="bg-blue-50"
            />
            <FloatingIcon
              icon={Stethoscope}
              angle={120}
              delay={1}
              color="text-purple-500"
              bg="bg-purple-50"
            />
            <FloatingIcon
              icon={CreditCard}
              angle={240}
              delay={2}
              color="text-orange-500"
              bg="bg-orange-50"
            />
          </div>

          {/* Call to Action */}
          <div className="relative z-10 max-w-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Curify Operating System
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              Select a module from the sidebar to explore the capabilities of
              the platform.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-wider animate-pulse">
              <MousePointerClick className="w-4 h-4" />
              Waiting for input...
            </div>
          </div>
        </div>
      </main>
    );
  }

  // --- 2. ACTIVE STATE: FEATURE CONTENT ---
  return (
    <main className="flex-1 min-w-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <article className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            {/* Header */}
            <div className="mb-10 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wider">
                  {feature.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                {feature.title}
              </h1>
            </div>

            {/* Custom Component Render */}
            <div className="feature-content-wrapper">{feature.component}</div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/50 -mx-8 -mb-12 p-8 rounded-b-[2.5rem]">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  Ready to optimize?
                </h4>
                <p className="text-slate-500 text-sm mt-1">
                  Start using {feature.title} in your workflow.
                </p>
              </div>
              <button
                onClick={() => router.push("/contact")}
                className="group bg-slate-900 hover:bg-teal-600 text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

// --- HELPER: ORBITING ICON ---
const FloatingIcon = ({ icon: Icon, angle, delay, color, bg }: any) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{
        width: 200, // Orbit diameter
        height: 200,
        marginTop: -100, // Center origin
        marginLeft: -100,
      }}
    >
      <motion.div
        className={`absolute top-0 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-xl ${bg} flex items-center justify-center shadow-sm border border-white`}
        style={{ transformOrigin: "50% 50%" }}
        animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Icon className={`w-5 h-5 ${color}`} />
      </motion.div>
    </motion.div>
  );
};

export default FeaturesContent;
