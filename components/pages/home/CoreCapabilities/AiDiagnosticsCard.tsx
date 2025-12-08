"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, BrainCircuit, Activity } from "lucide-react";

interface AiDiagnosticsCardProps {
  t: (key: string) => string;
}

const AiDiagnosticsCard = ({ t }: AiDiagnosticsCardProps) => {
  return (
    <TiltCard className="h-full bg-white border border-slate-200 p-6 relative overflow-hidden group flex flex-col justify-between">
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#0d9488 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* --- CONTENT (Light Text) --- */}
      <div className="relative z-20">
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
          {t("coreCapabilities.aiDiagnostics.title")}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
          {t("coreCapabilities.aiDiagnostics.description")}
        </p>
      </div>

      {/* --- ABSTRACT VISUAL: THE NEURAL PULSE --- */}
      {/* Centered, compact animation suitable for a small card */}
      <div className="relative h-32 w-full mt-6 flex items-center justify-center">
        {/* 1. The Core Node */}
        <div className="relative z-10 w-12 h-12 bg-white rounded-2xl shadow-lg border border-teal-100 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-teal-500 fill-teal-500" />
        </div>

        {/* 2. Expanding Ripples (Breathing effect) */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 rounded-2xl border border-teal-400/30"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}

        {/* 3. Orbiting Data Points */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-24 h-24 rounded-full border border-dashed border-slate-200"
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full -translate-x-1/2 -translate-y-1 shadow-sm" />
        </motion.div>

        {/* 4. Connection Lines (Decor) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-full h-px bg-teal-400 absolute top-1/2 left-0" />
          <div className="h-full w-px bg-teal-400 absolute left-1/2 top-0" />
        </div>
      </div>

      {/* --- BOTTOM STATUS --- */}
      <div className="relative z-20 mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
        <Activity className="w-3 h-3 text-teal-500" />
        <span className="text-[10px] font-mono text-slate-400 uppercase">
          Analysis Active
        </span>
      </div>
    </TiltCard>
  );
};

// --- SHARED TILT COMPONENT ---
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
      className={`rounded-[2rem] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/10 ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default AiDiagnosticsCard;
