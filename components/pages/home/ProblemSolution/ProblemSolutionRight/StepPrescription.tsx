"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Check,
  QrCode,
  Pill,
  Clock,
  Calendar,
  FileBadge,
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.3, // Staggered start
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  }),
};

// --- HELPER COMPONENT FOR GRID ITEMS ---
const DetailItem = ({
  icon: Icon,
  label,
  value,
  index,
}: {
  icon: any;
  label: string;
  value: string;
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={itemVariants}
    className="flex flex-col bg-gray-50/80 p-3 rounded-xl border border-gray-100"
  >
    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
      <Icon className="w-3 h-3" />
      {label}
    </div>
    <div className="text-sm font-semibold text-gray-800">{value}</div>
  </motion.div>
);

const StepPrescription = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative w-full max-w-sm"
    >
      {/* Glow Effect behind the card */}
      <div className="absolute -inset-4 bg-teal-500/10 blur-2xl rounded-full -z-10" />

      {/* --- THE CARD --- */}
      <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white ring-1 ring-gray-100 overflow-hidden relative">
        {/* Decorative Header Pattern */}
        <div className="h-1.5 w-full bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-400" />

        <div className="p-6 md:p-8">
          {/* 1. HEADER (Logo & ID) */}
          <motion.div
            custom={0}
            variants={itemVariants}
            className="flex justify-between items-start mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm border border-teal-100">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                  Official e-Rx
                </h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] font-mono text-gray-400">
                    #RX-9923-QA
                  </p>
                </div>
              </div>
            </div>
            <QrCode className="w-8 h-8 text-gray-200 opacity-50" />
          </motion.div>

          {/* 2. MAIN DRUG INFO (Hero) */}
          <div className="mb-6 space-y-2">
            <motion.div
              custom={1}
              variants={itemVariants}
              className="flex justify-between items-end"
            >
              <h2 className="text-2xl font-bold text-gray-800 leading-none">
                Amoxicillin
              </h2>
              <div className="bg-teal-50 text-teal-700 text-xs font-bold px-2 py-1 rounded-md border border-teal-100">
                500mg
              </div>
            </motion.div>
            <motion.div
              custom={2}
              variants={itemVariants}
              className="h-px w-full bg-dashed border-b border-gray-100"
            />
          </div>

          {/* 3. DETAILS GRID (Dropping in) */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <DetailItem index={3} icon={Pill} label="Dosage" value="1 Tablet" />
            <DetailItem
              index={4}
              icon={Clock}
              label="Frequency"
              value="Every 8 Hours"
            />
            <DetailItem
              index={5}
              icon={Calendar}
              label="Duration"
              value="7 Days"
            />
            <DetailItem
              index={6}
              icon={FileBadge}
              label="Refills"
              value="None"
            />
          </div>

          {/* 4. FOOTER / SIGNATURE (The "Complete" Stamp) */}
          <motion.div
            initial={{ scale: 1.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 1.8, type: "spring", bounce: 0.5 }} // Enters last
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 p-[1px]"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center gap-2">
              <div className="bg-white rounded-full p-1">
                <Check className="w-3 h-3 text-teal-600 stroke-[3px]" />
              </div>
              <span className="text-sm font-bold text-white tracking-wide text-shadow-sm">
                Verified & Signed
              </span>
            </div>
          </motion.div>

          {/* 5. BARCODE VISUAL (Decoration) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-6 flex justify-center opacity-30 grayscale"
          >
            {/* Simple CSS Barcode representation */}
            <div className="flex gap-[2px] h-6 items-end">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-gray-800 w-[2px] ${
                    Math.random() > 0.5 ? "h-full" : "h-2/3"
                  }`}
                  style={{ width: Math.random() > 0.5 ? "1px" : "3px" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StepPrescription;
