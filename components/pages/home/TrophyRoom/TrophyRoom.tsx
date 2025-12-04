"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  TrendingUp,
  Activity,
  X,
  CheckCircle2,
  FileText,
} from "lucide-react";

// --- DATA: ACHIEVEMENTS WITH DETAILED CONTENT ---
const ACHIEVEMENTS = [
  {
    id: "efficiency",
    metric: "2 Weeks",
    subtitle: "Saved Per Month",
    title: "Research Time",
    description:
      "Replaced manual history digging with AI-powered instant search retrieval.",
    visual: <VisualEfficiency />,
    // Popup Details
    longDescription:
      "Before Curify, the average clinician at Partner Clinic A spent ~15 hours a month manually cross-referencing patient history, lab results, and paper archives. By implementing our Semantic AI Search, we indexed 50,000+ documents.",
    keyResults: [
      "Instant keyword retrieval across 10 years of records.",
      "Automated summarization of patient history.",
      "Zero time spent locating physical files.",
    ],
  },
  {
    id: "safety",
    metric: "87%",
    subtitle: "Error Reduction",
    title: "Patient Safety",
    description:
      "IoT cabinets and AI cross-checks eliminated critical medication errors.",
    visual: <VisualSafety />,
    // Popup Details
    longDescription:
      "Medication errors are the leading cause of preventable harm. We deployed IoT-connected cabinets that only unlock for the specific nurse, patient, and dosage time. Coupled with AI contraindication checks, safety skyrocketed.",
    keyResults: [
      "Real-time alerts for drug-drug interactions.",
      "Biometric access control for narcotics.",
      "Digital audit trail for every milligram dispensed.",
    ],
  },
  {
    id: "operations",
    metric: "100%",
    subtitle: "Traceability",
    title: "Inventory Tracking",
    description:
      "End-to-end digital tracking from warehouse to patient administration.",
    visual: <VisualTracking />,
    // Popup Details
    longDescription:
      "Stockouts and expiration waste cost clinics thousands. Curify introduced a 'Pixel-to-Pill' tracking system. We now track inventory levels in real-time, automatically reordering supplies before they run out.",
    keyResults: [
      "Automated procurement orders.",
      "Expiration date alerts 30 days in advance.",
      "Reduction in medical waste by 40%.",
    ],
  },
  {
    id: "growth",
    metric: "3.5x",
    subtitle: "Faster Intake",
    title: "Patient Throughput",
    description:
      "Automated admissions allow clinics to scale without adding admin staff.",
    visual: <VisualGrowth />,
    // Popup Details
    longDescription:
      "Scaling usually means hiring more admin staff. Curify changed the equation by automating the intake process. Patients fill forms digitally before arrival, and AI pre-populates the clinical chart.",
    keyResults: [
      "Waiting room times reduced by 60%.",
      "Admin staff refocused on patient experience.",
      "Capacity increased without new real estate.",
    ],
  },
];

const TrophyRoom = () => {
  const [selectedStudy, setSelectedStudy] = useState<
    (typeof ACHIEVEMENTS)[0] | null
  >(null);

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 bg-yellow-50 rounded-lg text-yellow-600 border border-yellow-100">
                <Trophy className="w-5 h-5" />
              </span>
              <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                Proven Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Measurable results. <br />
              <span className="text-teal-600">Exponential growth.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-xs text-gray-400 uppercase font-bold tracking-wide">
                Clinics Optimized
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900">10M+</div>
              <div className="text-xs text-gray-400 uppercase font-bold tracking-wide">
                Patient Records
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <AchievementCard
              key={item.id}
              data={item}
              delay={index * 0.1}
              onOpen={() => setSelectedStudy(item)}
            />
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <CaseStudyModal
        isOpen={!!selectedStudy}
        onClose={() => setSelectedStudy(null)}
        data={selectedStudy}
      />
    </section>
  );
};

// --- REUSABLE CARD COMPONENT ---
const AchievementCard = ({
  data,
  delay,
  onOpen,
}: {
  data: any;
  delay: number;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      onClick={onOpen}
      className="group relative h-full min-h-[480px] rounded-[2rem] bg-white border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* 1. VISUAL STAGE */}
      <div className="h-[220px] bg-slate-50/50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center group-hover:bg-teal-50/30 transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="relative z-10 w-full h-full p-6">{data.visual}</div>
      </div>

      {/* 2. CONTENT STAGE */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="text-5xl font-bold text-gray-900 tracking-tight group-hover:text-teal-600 transition-colors">
              {data.metric}
            </h3>
          </div>
          <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-6">
            {data.subtitle}
          </p>

          <h4 className="text-xl font-bold text-gray-900 mb-2">{data.title}</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="mt-6 flex items-center text-xs font-bold text-gray-400 group-hover:text-teal-600 transition-colors">
          View Case Study <ArrowUpRight className="w-3 h-3 ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

// --- MODAL COMPONENT ---
const CaseStudyModal = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}) => {
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60] flex items-center justify-center p-4"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed z-[70] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="relative bg-slate-50 p-6 md:p-8 border-b border-gray-100 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Case Study
                  </span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wide">
                    {data.subtitle}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {data.metric} <span className="text-teal-600">Impact</span>
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {data.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {data.longDescription}
              </p>

              <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <h5 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-500" /> Key Results
                </h5>
                <ul className="space-y-3">
                  {data.keyResults.map((result: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-xs font-medium text-gray-500">
                  Verified Data
                </span>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-lg shadow-teal-600/20">
                Book a Demo
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- VISUALS (Same as before) ---
function VisualEfficiency() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-teal-500 border-r-transparent border-b-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-20 rounded-lg shadow-md border border-gray-100 flex flex-col items-center pt-2">
          <div className="w-8 h-1 bg-teal-500 rounded-full mb-2" />
          <div className="w-10 h-1 bg-slate-200 rounded-full mb-1" />
          <div className="w-10 h-1 bg-slate-200 rounded-full mb-1" />
          <div className="w-6 h-1 bg-slate-200 rounded-full" />
          <motion.div
            className="absolute bottom-2 right-2 text-teal-500"
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Clock className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function VisualSafety() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <ShieldCheck className="w-32 h-32 text-slate-100" />
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.6)]"
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-lg border border-teal-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-slate-600">SAFE</span>
        </div>
      </div>
    </div>
  );
}

function VisualTracking() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[180px] relative h-20">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 rounded-full -translate-y-1/2" />
        <motion.div
          className="absolute top-1/2 left-0 w-8 h-8 bg-white border-2 border-teal-500 rounded-lg shadow-md -translate-y-1/2 flex items-center justify-center z-10"
          animate={{ left: ["0%", "80%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Activity className="w-4 h-4 text-teal-600" />
        </motion.div>
        <div className="absolute top-1/2 left-0 w-4 h-4 bg-slate-300 rounded-full -translate-y-1/2 border-2 border-white" />
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-slate-300 rounded-full -translate-y-1/2 -translate-x-1/2 border-2 border-white" />
        <div className="absolute top-1/2 right-0 w-4 h-4 bg-slate-300 rounded-full -translate-y-1/2 border-2 border-white" />
      </div>
    </div>
  );
}

function VisualGrowth() {
  return (
    <div className="w-full h-full flex items-end justify-center gap-3 px-8 pb-8">
      {[30, 50, 45, 75, 60, 100].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: "10%" }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 1, delay: i * 0.1, ease: "backOut" }}
          className="w-full bg-gradient-to-t from-teal-500 to-emerald-400 rounded-t-lg relative overflow-hidden group opacity-80 hover:opacity-100 transition-opacity"
        >
          <div className="absolute top-0 w-full h-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-1/3 right-10 bg-white shadow-lg p-2 rounded-full"
      >
        <TrendingUp className="w-6 h-6 text-green-500" />
      </motion.div>
    </div>
  );
}

export default TrophyRoom;
