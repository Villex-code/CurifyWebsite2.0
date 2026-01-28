"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Activity,
  Users,
  Bell,
  CheckCircle2,
  Clock,
  AlertCircle,
  Hospital,
  Ambulance,
  Heart,
  Zap,
} from "lucide-react";

import { useTranslations } from "next-intl";

const UseCaseHospital = () => {
  const t = useTranslations("useCases.modules.hospital");

  return (
    <section
      className="relative w-full py-24 bg-white overflow-hidden"
      id="use-case-content"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {t("title")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                {t("titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-slate-500">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* --- THE VISUAL EVIDENCE & DESCRIPTIONS --- */}
        {/* Desktop: Cards then descriptions */}
        <div className="hidden lg:block">
          {/* THE BENTO GRID (Visuals) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* CARD 1: EMERGENCY COORDINATION */}
            <VisualCard delay={0}>
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  {t("features.emergency.visual.emergencyCenter")}
                </span>
              </div>
              <VisualEmergencyCoordination t={t} />
            </VisualCard>

            {/* CARD 2: AI COMMAND CENTER */}
            <VisualCard delay={0.1}>
              <VisualAIHospital t={t} />
            </VisualCard>

            {/* CARD 3: MULTI-DEPT ALERTS */}
            <VisualCard delay={0.2}>
              <VisualHospitalAlerts t={t} />
            </VisualCard>
          </div>

          {/* TEXT DESCRIPTIONS (Below Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <DescriptionCol
              title={t("features.emergency.title")}
              desc={t("features.emergency.description")}
              delay={0.3}
            />

            <DescriptionCol
              title={t("features.sync.title")}
              desc={t("features.sync.description")}
              delay={0.4}
            />

            <DescriptionCol
              title={t("features.alerts.title")}
              desc={t("features.alerts.description")}
              delay={0.5}
            />
          </div>
        </div>

        {/* Mobile: Card + Description stacked */}
        <div className="block lg:hidden space-y-12">
          {/* CARD 1 + DESCRIPTION */}
          <div className="flex flex-col gap-6">
            <VisualCard delay={0}>
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  {t("features.emergency.visual.emergencyCenter")}
                </span>
              </div>
              <VisualEmergencyCoordination t={t} />
            </VisualCard>
            <DescriptionCol
              title={t("features.emergency.title")}
              desc={t("features.emergency.description")}
              delay={0.3}
            />
          </div>

          {/* CARD 2 + DESCRIPTION */}
          <div className="flex flex-col gap-6">
            <VisualCard delay={0.1}>
              <VisualAIHospital t={t} />
            </VisualCard>
            <DescriptionCol
              title={t("features.sync.title")}
              desc={t("features.sync.description")}
              delay={0.4}
            />
          </div>

          {/* CARD 3 + DESCRIPTION */}
          <div className="flex flex-col gap-6">
            <VisualCard delay={0.2}>
              <VisualHospitalAlerts t={t} />
            </VisualCard>
            <DescriptionCol
              title={t("features.alerts.title")}
              desc={t("features.alerts.description")}
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- WRAPPER FOR THE VISUAL CARDS ---
const VisualCard = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative aspect-[4/3] w-full bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 group"
  >
    {/* Subtle Grid Background */}
    <div
      className="absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />

    {/* Content */}
    <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
      {children}
    </div>
  </motion.div>
);

// --- WRAPPER FOR TEXT DESCRIPTIONS ---
const DescriptionCol = ({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
      {desc}
    </p>
  </motion.div>
);

// ============================================================================
// HOSPITAL-SPECIFIC VISUALS
// ============================================================================

const VisualEmergencyCoordination = ({ t }: { t: any }) => (
  <div className="w-full h-full flex flex-col gap-3 justify-center pt-6">
    {/* Emergency Row 1 */}
    <div className="flex gap-3 w-full">
      <motion.div
        className="flex-1 bg-red-50 p-3 rounded-xl shadow-md border border-red-100 flex flex-col gap-2 relative overflow-hidden"
        animate={{ borderColor: ["#fecaca", "#fca5a5", "#fecaca"] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex justify-between items-center relative z-10">
          <span className="text-[10px] font-bold text-red-600">
            {t("features.emergency.visual.traumaBay1")}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <Heart className="w-4 h-4 text-red-600" />
          <span className="text-xs font-bold text-red-700">
            {t("features.emergency.visual.critical")}
          </span>
        </div>
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 bg-red-100"
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">
            {t("features.emergency.visual.erBay2")}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-slate-600" />
          <span className="text-xs font-medium text-slate-700">
             {t("features.emergency.visual.stable")}
          </span>
        </div>
      </div>
    </div>

    {/* Emergency Row 2 */}
    <div className="flex gap-3 w-full">
      <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-2 opacity-60">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">
            {t("features.emergency.visual.icuRoom5")}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-medium text-slate-500">
            {t("features.emergency.visual.monitoring")}
          </span>
        </div>
      </div>
      <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-2 opacity-60">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">
            {t("features.emergency.visual.ambulance")}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2">
          <Ambulance className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-medium text-slate-500">
            {t("features.emergency.visual.available")}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const VisualAIHospital = ({ t }: { t: any }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* The AI Hospital Core */}
    <div className="relative z-10 w-24 h-24 bg-white rounded-3xl shadow-xl shadow-teal-900/10 border border-slate-100 flex items-center justify-center">
      <BrainCircuit className="w-10 h-10 text-teal-500" />
    </div>

    {/* Orbiting Elements */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 m-auto w-48 h-48 border border-dashed border-teal-200 rounded-full"
    />

    {/* Emergency Response Beam */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 m-auto w-48 h-48 rounded-full flex items-center justify-center"
    >
      <div className="absolute top-0 w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-400" />
    </motion.div>

    {/* Hospital Data Points */}
    <div className="absolute top-8 left-10 bg-white px-2 py-1 rounded shadow-sm text-[10px] font-bold text-slate-400 border border-slate-100">
      {t("features.sync.visual.codeBlue")}
    </div>
    <div className="absolute bottom-8 right-10 bg-red-50 px-2 py-1 rounded shadow-sm text-[10px] font-bold text-red-600 border border-red-100">
      {t("features.sync.visual.erStatus")}
    </div>
    <div className="absolute left-8 bottom-16 bg-blue-50 px-2 py-1 rounded shadow-sm text-[10px] font-bold text-blue-600 border border-blue-100">
      {t("features.sync.visual.icuBeds")}
    </div>
  </div>
);

const VisualHospitalAlerts = ({ t }: { t: any }) => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-3 w-full max-w-[260px] mx-auto">
    {/* Critical Alert */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full bg-white p-3 rounded-2xl shadow-lg border-l-4 border-l-red-500 border-y border-r border-slate-100 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
        <AlertCircle className="w-4 h-4 text-red-500" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700">
           {t("features.alerts.visual.codeBlueRoom")}
        </div>
        <div className="text-[10px] text-red-400 font-bold">
           {t("features.alerts.visual.immediateResponse")}
        </div>
      </div>
    </motion.div>

    {/* Department Alert */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="w-full bg-white p-3 rounded-2xl shadow-md border-l-4 border-l-orange-400 border-y border-r border-slate-100 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
        <Hospital className="w-4 h-4 text-orange-500" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700">
           {t("features.alerts.visual.icuCapacity")}
        </div>
        <div className="text-[10px] text-orange-400 font-bold">
           {t("features.alerts.visual.transferProtocol")}
        </div>
      </div>
    </motion.div>

    {/* Resource Alert */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="w-full bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-4 h-4 text-green-600" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-700">
           {t("features.alerts.visual.bloodBank")}
        </div>
        <div className="text-[10px] text-slate-400">
          {t("features.alerts.visual.allAvailable")}
        </div>
      </div>
    </motion.div>
  </div>
);

export default UseCaseHospital;
