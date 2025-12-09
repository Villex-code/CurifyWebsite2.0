"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import TextAnimation from "@/components/ui/text/TextAnimation";
import {
  Stethoscope,
  ArrowRight,
  FileText,
  Activity,
  Pill,
  Database,
  CheckCircle2,
  ScanLine,
} from "lucide-react";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const ClinicSegment = () => {
  const t = useTranslations("home.userSegments.segments.clinic");

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
      {/* --- TEXT SIDE --- */}
      <div className="flex-1 text-center lg:text-left">
        <Badge icon={Stethoscope} text={t("badge")} color="teal" />

        <div className="mb-6 mt-6">
          <TextAnimation
            as="h3"
            text={t("headline")}
            classname="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] normal-case"
            direction="right"
            letterAnime={true}
          />
        </div>

        <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
          {t("description")}
        </p>

        <CtaButton color="teal" text={t("cta")} />
      </div>

      {/* --- VISUAL SIDE --- */}
      <div className="flex-1 w-full">
        <VisualContainer color="teal">
          <UnifiedFilesVisual />
        </VisualContainer>
      </div>
    </div>
  );
};

// ============================================================================
// CUSTOM VISUAL: MAGNETIC ORGANIZER
// ============================================================================

const FILES = [
  {
    id: 1,
    label: "Lab Results",
    sub: "Blood Panel",
    icon: Activity,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 2,
    label: "Prescription",
    sub: "Amoxicillin",
    icon: Pill,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: 3,
    label: "Scan Report",
    sub: "MRI - Knee",
    icon: Database,
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    id: 4,
    label: "Doctor Note",
    sub: "Follow-up",
    icon: FileText,
    color: "text-slate-600",
    bg: "bg-slate-100",
  },
];

const UnifiedFilesVisual = () => {
  const [isOrganized, setIsOrganized] = useState(false);

  useEffect(() => {
    // Slower loop for better readability
    const interval = setInterval(() => {
      setIsOrganized((prev) => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[340px] flex items-center justify-center">
      {/* 1. THE "MASTER FOLDER" CONTAINER (Appears when organized) */}
      <motion.div
        className="absolute inset-0 bg-white rounded-3xl border border-slate-200 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isOrganized ? 1 : 0,
          scale: isOrganized ? 1 : 0.95,
          borderColor: isOrganized ? "#2dd4bf" : "#e2e8f0", // Teal-400 border when active
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-12 border-b border-slate-100 bg-slate-50/50 rounded-t-3xl flex items-center px-6 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Patient: #8821
            </span>
          </div>
          {isOrganized && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-teal-600"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold">Unified</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* 2. THE FLOATING FILES */}
      <div className="relative z-10 w-64 h-64">
        {FILES.map((file, index) => (
          <motion.div
            key={file.id}
            layout // Framer Motion magic for smooth position changes
            initial={false}
            animate={isOrganized ? "organized" : "chaos"}
            variants={{
              chaos: {
                // Scattered positions
                top:
                  index === 0 ? 0 : index === 1 ? 140 : index === 2 ? 40 : 120,
                left:
                  index === 0 ? -40 : index === 1 ? -20 : index === 2 ? 60 : 50,
                rotate:
                  index === 0 ? -6 : index === 1 ? 4 : index === 2 ? 8 : -3,
                scale: 1,
                zIndex: index,
              },
              organized: {
                // Stacked positions (Vertical list)
                top: 40 + index * 58, // Even spacing inside the folder
                left: 0,
                rotate: 0,
                scale: 1,
                zIndex: 10,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 100, // Softer spring
              damping: 18, // Less bounce
              mass: 0.8,
              delay: index * 0.05, // Subtle stagger
            }}
            className="absolute w-64 p-3 bg-white rounded-xl shadow-md border border-slate-100 flex items-center gap-4 cursor-default"
          >
            {/* Icon Box */}
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${file.bg} ${file.color}`}
            >
              <file.icon className="w-5 h-5" />
            </div>

            {/* Text Lines */}
            <div className="flex-1">
              <div className="text-xs font-bold text-slate-800">
                {file.label}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                {file.sub}
              </div>
            </div>

            {/* Status Dot (Only shows when organized) */}
            <motion.div
              animate={{ opacity: isOrganized ? 1 : 0 }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
          </motion.div>
        ))}
      </div>

      {/* 3. SCANNING LINE EFFECT (Transition Trigger) */}
      <AnimatePresence>
        {!isOrganized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Vertical scanning line representing AI organizing data */}
            <motion.div
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[2px] bg-teal-500/30 blur-[2px] z-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================================================
// HELPERS (Reused)
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

const CtaButton = ({ color, text }: any) => {
  const hoverColors: any = {
    teal: "hover:text-teal-600",
    blue: "hover:text-blue-600",
    indigo: "hover:text-indigo-600",
  };

  const handleClick = () => {
    // Store the segment preference and navigate to use-cases
    localStorage.setItem('selectedSegment', 'clinic');
    window.location.href = '/use-cases';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-8 flex justify-center lg:justify-start"
    >
      <button
        onClick={handleClick}
        className={`group flex items-center gap-2 text-sm font-bold text-slate-900 ${hoverColors[color]} transition-colors cursor-pointer`}
      >
        {text}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
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
      {/* Subtle Background Blob */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[80px] opacity-40 transition-opacity duration-700 group-hover:opacity-60
            ${
              color === "teal"
                ? "bg-teal-100"
                : color === "blue"
                ? "bg-blue-100"
                : "bg-indigo-100"
            }
        `}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        {children}
      </div>
    </motion.div>
  );
};

export default ClinicSegment;
