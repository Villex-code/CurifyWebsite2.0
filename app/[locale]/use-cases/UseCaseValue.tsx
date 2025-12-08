"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CreditCard,
  Layers,
  Zap,
  Check,
  ArrowRight,
  TrendingUp,
  Bell,
} from "lucide-react";

const UseCaseValue = ({ segment }: { segment: string }) => {
  const t = useTranslations("useCases.value");

  return (
    <section className="relative w-full py-24  overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                {t("titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. PAYMENTS (Visual Top) */}
          <ValueCard
            title={t("cards.integratedPayments.title")}
            desc={t("cards.integratedPayments.description")}
            delay={0.1}
            className="md:col-span-1"
          >
            <VisualPayments />
          </ValueCard>

          {/* 2. HOLISTIC MANAGEMENT (Large Center) */}
          <ValueCard
            title={t("cards.holisticManagement.title")}
            desc={t("cards.holisticManagement.description")}
            delay={0.2}
            className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
            dark
          >
            <VisualHolistic />
          </ValueCard>

          {/* 3. WORKFLOWS (Wide Bottom Left) */}
          <ValueCard
            title={t("cards.smartWorkflows.title")}
            desc={t("cards.smartWorkflows.description")}
            delay={0.3}
            className="md:col-span-2"
          >
            <VisualWorkflows t={t} />
          </ValueCard>

          {/* 4. ROI (Small Bottom Right) */}
          <ValueCard
            title={t("cards.instantRoi.title")}
            desc={t("cards.instantRoi.description")}
            delay={0.4}
            className="md:col-span-1 bg-teal-50 border-teal-100"
          >
            <VisualROI />
          </ValueCard>
        </div>
      </div>
    </section>
  );
};

// --- CARD COMPONENT ---
const ValueCard = ({ children, title, desc, delay, className, dark }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`
        group relative overflow-hidden rounded-[2.5rem] p-8 flex flex-col justify-between border transition-all duration-500
        hover:shadow-2xl hover:-translate-y-1
        ${
          dark
            ? "border-slate-700 shadow-xl shadow-slate-900/20"
            : "bg-white border-slate-200 shadow-lg shadow-slate-200/50 hover:border-teal-200"
        }
        ${className}
      `}
    >
      {/* Visual Container */}
      <div className="flex-1 min-h-[200px] flex items-center justify-center mb-8 relative z-10">
        {children}
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h3
          className={`text-2xl font-bold mb-3 ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {desc}
        </p>
      </div>

      {/* Decorative Gradient Background on Hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none 
         ${
           dark
             ? "bg-white/5"
             : "bg-gradient-to-tr from-teal-50/50 to-transparent"
         }
      `}
      />
    </motion.div>
  );
};

// ============================================================================
// ABSTRACT VISUALS (CSS + Framer Motion)
// ============================================================================

const VisualPayments = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Credit Card */}
    <motion.div
      animate={{ rotate: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-40 h-28 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl shadow-xl flex flex-col justify-between p-4 relative z-10"
    >
      <div className="w-8 h-5 bg-white/20 rounded" />
      <div className="flex justify-between items-center text-white/80">
        <span className="text-[10px] font-mono">**** 4291</span>
        <CreditCard className="w-4 h-4" />
      </div>
    </motion.div>

    {/* Floating Receipt */}
    <motion.div
      animate={{ y: [10, -10, 10], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-2 top-0 bg-white border border-slate-100 p-3 rounded-xl shadow-lg rotate-12 z-0"
    >
      <div className="flex gap-2 items-center mb-2">
        <div className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          <Check className="w-3 h-3" />
        </div>
        <div className="h-1.5 w-12 bg-slate-200 rounded-full" />
      </div>
      <div className="h-1 w-full bg-slate-100 rounded-full mb-1" />
      <div className="h-1 w-2/3 bg-slate-100 rounded-full" />
    </motion.div>
  </div>
);

const VisualHolistic = () => (
  <div className="relative w-full h-full flex items-center justify-center gap-6">
    {/* Central Dashboard Node */}
    <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl">
      <Layers className="w-10 h-10 text-teal-400" />
    </div>

    {/* Orbiting Satellites */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 shadow-lg flex items-center justify-center"
          style={{ marginTop: `${-60 - i * 30}px` }} // Offset distance
        >
          {i === 0 && <CreditCard className="w-5 h-5 text-blue-400" />}
          {i === 1 && <Zap className="w-5 h-5 text-yellow-400" />}
          {i === 2 && <Bell className="w-5 h-5 text-red-400" />}
        </div>
      </motion.div>
    ))}

    {/* Connecting Lines (Decor) */}
    <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.8]" />
    <div className="absolute inset-0 border border-dashed border-white/5 rounded-full scale-[2.5]" />
  </div>
);

const VisualWorkflows = ({ t }: { t: any }) => (
  <div className="w-full max-w-sm flex flex-col gap-3">
    {/* Step 1 */}
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-red-50 rounded-lg text-red-500">
          <Bell className="w-4 h-4" />
        </div>
        <span className="text-sm font-bold text-slate-700">
          {t("workflowSteps.lowStockAlert")}
        </span>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-300" />
    </motion.div>

    {/* Connector */}
    <div className="h-4 w-px bg-slate-300 ml-8" />

    {/* Step 2 */}
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
          <Zap className="w-4 h-4" />
        </div>
        <span className="text-sm font-bold text-slate-700">{t("workflowSteps.autoReorder")}</span>
      </div>
      <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">
        {t("workflowSteps.sent")}
      </div>
    </motion.div>
  </div>
);

const VisualROI = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#e2e8f0"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="#0d9488"
          strokeWidth="8"
          fill="none"
          strokeDasharray="251"
          strokeDashoffset="251"
          whileInView={{ strokeDashoffset: 50 }} // 80% filled
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-teal-800">
        <TrendingUp className="w-6 h-6 mb-1" />
        <span className="text-xl font-bold">10x</span>
      </div>
    </div>
  </div>
);

export default UseCaseValue;
