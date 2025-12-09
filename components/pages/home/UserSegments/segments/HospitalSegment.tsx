"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import TextAnimation from "@/components/ui/text/TextAnimation";
import {
  Activity,
  ArrowRight,
  Server,
  ShieldCheck,
  Database,
  Network,
  Lock,
  Globe,
  CheckCircle2,
  User,
} from "lucide-react";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const HospitalSegment = () => {
  const t = useTranslations("home.userSegments.segments.hospital");

  return (
    <div className="flex flex-col items-center gap-16 text-center max-w-5xl mx-auto w-full">
      {/* --- TEXT CONTENT --- */}
      <div className="flex flex-col items-center max-w-3xl">
        <Badge icon={Activity} text={t("badge")} color="indigo" />

        <div className="mb-6 mt-6">
          <TextAnimation
            as="h3"
            text={t("headline")}
            classname="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] normal-case"
            direction="down"
            letterAnime={true}
          />
        </div>

        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {t("description")}
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              // Store the segment preference and navigate to use-cases
              localStorage.setItem('selectedSegment', 'hospital');
              window.location.href = '/use-cases';
            }}
            className="group flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            {t("cta")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* --- VISUAL CONTENT --- */}
      <div className="w-full">
        <VisualContainer color="indigo" wide>
          <EnterpriseInfrastructureVisual />
        </VisualContainer>
      </div>
    </div>
  );
};

// ============================================================================
// CUSTOM VISUAL: ENTERPRISE INFRASTRUCTURE (Clean/Teal Version)
// ============================================================================

const EnterpriseInfrastructureVisual = () => {
  const [activePacket, setActivePacket] = useState<number>(0);

  // Simulate data packets arriving at the core
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePacket((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
      {/* --- LAYER 1: LIGHT GRID BACKGROUND --- */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* --- LAYER 2: ORBITAL RINGS --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] border border-dashed border-slate-200 rounded-full opacity-50" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[350px] h-[350px] border border-teal-100 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-teal-200 rounded-full" />
        </motion.div>
      </div>

      {/* --- LAYER 3: CENTRAL CORE (WHITE HUB) --- */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Floating Security Badge */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-14 z-30 bg-white shadow-lg shadow-teal-900/5 px-3 py-1.5 rounded-full flex items-center gap-2 border border-teal-100"
        >
          <ShieldCheck className="w-3 h-3 text-teal-600" />
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">
            Encrypted Core
          </span>
        </motion.div>

        {/* The Server Core */}
        <div className="w-28 h-28 bg-white rounded-3xl shadow-2xl shadow-teal-900/10 flex flex-col items-center justify-center relative border border-slate-100">
          {/* Inner Icon */}
          <Server className="w-10 h-10 text-teal-600 relative z-10" />

          {/* Status Lights */}
          <div className="flex gap-1.5 mt-3 relative z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-75" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-150" />
          </div>

          {/* Pulse Ring (Reactive) */}
          <motion.div
            key={activePacket}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-3xl border-2 border-teal-200"
          />
        </div>
      </div>

      {/* --- LAYER 4: SATELLITES & DATA FLOW --- */}
      <div className="absolute inset-0 pointer-events-none">
        <SatelliteNode
          x="15%"
          y="20%"
          icon={Activity}
          label="ER / ICU"
          isActive={activePacket === 0}
          delay={0}
        />
        <SatelliteNode
          x="85%"
          y="20%"
          icon={Database}
          label="Laboratory"
          isActive={activePacket === 1}
          delay={1}
        />
        <SatelliteNode
          x="15%"
          y="80%"
          icon={User}
          label="Admin / HR"
          isActive={activePacket === 2}
          delay={2}
        />
        <SatelliteNode
          x="85%"
          y="80%"
          icon={Globe}
          label="Remote Care"
          isActive={activePacket === 3}
          delay={3}
        />
      </div>

      {/* --- LAYER 5: DATA HIGHWAYS (SVG) --- */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <DataPath
          startX="15%"
          startY="20%"
          endX="50%"
          endY="50%"
          active={activePacket === 0}
        />
        <DataPath
          startX="85%"
          startY="20%"
          endX="50%"
          endY="50%"
          active={activePacket === 1}
        />
        <DataPath
          startX="15%"
          startY="80%"
          endX="50%"
          endY="50%"
          active={activePacket === 2}
        />
        <DataPath
          startX="85%"
          startY="80%"
          endX="50%"
          endY="50%"
          active={activePacket === 3}
        />
      </svg>
    </div>
  );
};

// --- SUB-COMPONENT: SATELLITE NODE ---
const SatelliteNode = ({ x, y, icon: Icon, label, isActive }: any) => (
  <div
    className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-20"
    style={{ left: x, top: y }}
  >
    <motion.div
      animate={{
        scale: isActive ? 1.05 : 1,
        borderColor: isActive ? "#2dd4bf" : "#f1f5f9",
      }}
      className="w-14 h-14 bg-white rounded-2xl shadow-lg border flex items-center justify-center transition-colors duration-500"
    >
      <Icon
        className={`w-6 h-6 transition-colors duration-300 ${
          isActive ? "text-teal-600" : "text-slate-400"
        }`}
      />
    </motion.div>
    <div className="mt-3 bg-white/60 backdrop-blur px-3 py-1 rounded-lg border border-slate-100 shadow-sm">
      <span className="text-xs font-bold text-slate-600">{label}</span>
    </div>
  </div>
);

// --- SUB-COMPONENT: ANIMATED DATA PATH ---
const DataPath = ({ startX, startY, endX, endY, active }: any) => {
  return (
    <>
      {/* Static Base Line */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="#e2e8f0"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      {/* Moving Packet (CSS Animation via class or simple motion) */}
      <AnimatePresence>
        {active && (
          <motion.circle
            r="3"
            fill="#0d9488" // Teal-600
            style={{
              offsetPath: `path("M ${startX.replace("%", "")} ${startY.replace(
                "%",
                ""
              )} L ${endX.replace("%", "")} ${endY.replace("%", "")}")`,
              offsetDistance: "50%",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// ============================================================================
// HELPERS
// ============================================================================

const Badge = ({ icon: Icon, text, color }: any) => {
  const colors: any = {
    teal: "bg-teal-50 text-teal-700 border-teal-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  };
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[color]}`}
    >
      <Icon className="w-4 h-4" />
      {text}
    </div>
  );
};

const VisualContainer = ({
  children,
  color,
  wide,
}: {
  children: React.ReactNode;
  color: string;
  wide?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50 flex items-center justify-center group ${
        wide ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
      }`}
    >
      {/* Subtle Teal Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[80px] opacity-40 transition-opacity duration-700 group-hover:opacity-60 bg-teal-100" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        {children}
      </div>
    </motion.div>
  );
};

export default HospitalSegment;
