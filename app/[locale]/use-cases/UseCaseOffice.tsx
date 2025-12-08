"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  Mic,
  Activity,
  CheckCircle2,
  CloudCog,
  Receipt,
  ArrowRight,
  Database,
} from "lucide-react";

const UseCaseOffice = () => {
  return (
    <section
      className="relative w-full py-24 bg-white overflow-hidden"
      id="use-case-content"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- 1. THE NARRATIVE (Text Before Graphics) --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">
              Solo Practitioner OS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Run your practice <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                without the busywork.
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-slate-500 leading-relaxed"
            >
              You became a doctor to treat patients, not to wrestle with
              government portals or accounting. Curify acts as your{" "}
              <strong>digital partner</strong>, handling compliance (IDIKA),
              financial tracking, and clinical documentation automatically in
              the background.
            </motion.p>
          </motion.div>
        </div>

        {/* --- 2. THE VISUAL EVIDENCE & DESCRIPTIONS --- */}
        {/* Desktop: Cards then descriptions */}
        <div className="hidden lg:block">
          {/* THE VISUAL EVIDENCE (Bento Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* CARD 1: E-PRESCRIPTION (IDIKA) */}
            <VisualCard delay={0}>
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  Sync Active
                </span>
              </div>
              <VisualPrescription />
            </VisualCard>

            {/* CARD 2: INTEGRATED PAYMENTS */}
            <VisualCard delay={0.1}>
              <VisualPayments />
            </VisualCard>

            {/* CARD 3: AI SCRIBE */}
            <VisualCard delay={0.2}>
              <VisualAIScribe />
            </VisualCard>
          </div>

          {/* FEATURE DETAILS (Text Descriptions) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <DescriptionCol
              title="Native E-Prescription"
              desc="Direct 2-way integration with national systems (IDIKA / EOPYY). Prescribe medications and referrals instantly without logging into external portals."
              delay={0.3}
            />

            <DescriptionCol
              title="Automated Billing"
              desc="Convert a clinical visit into a compliant invoice in one click. Connects with myData/AADE to track revenue and outstanding balances effortlessly."
              delay={0.4}
            />

            <DescriptionCol
              title="AI Clinical Assistant"
              desc="Don't type. Just speak. Our AI Scribe listens to your consultation and auto-drafts structured SOAP notes and patient histories in seconds."
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
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  Sync Active
                </span>
              </div>
              <VisualPrescription />
            </VisualCard>
            <DescriptionCol
              title="Native E-Prescription"
              desc="Direct 2-way integration with national systems (IDIKA / EOPYY). Prescribe medications and referrals instantly without logging into external portals."
              delay={0.3}
            />
          </div>

          {/* CARD 2 + DESCRIPTION */}
          <div className="flex flex-col gap-6">
            <VisualCard delay={0.1}>
              <VisualPayments />
            </VisualCard>
            <DescriptionCol
              title="Automated Billing"
              desc="Convert a clinical visit into a compliant invoice in one click. Connects with myData/AADE to track revenue and outstanding balances effortlessly."
              delay={0.4}
            />
          </div>

          {/* CARD 3 + DESCRIPTION */}
          <div className="flex flex-col gap-6">
            <VisualCard delay={0.2}>
              <VisualAIScribe />
            </VisualCard>
            <DescriptionCol
              title="AI Clinical Assistant"
              desc="Don't type. Just speak. Our AI Scribe listens to your consultation and auto-drafts structured SOAP notes and patient histories in seconds."
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- VISUAL CARDS (Abstract UI) ---

const VisualPrescription = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative">
    {/* Connection Line */}
    <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 border-t border-dashed border-slate-300" />

    <div className="flex items-center gap-4 relative z-10">
      {/* Left: Internal Rx */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-24 h-32 bg-white rounded-xl shadow-lg border border-slate-200 p-3 flex flex-col gap-2"
      >
        <div className="h-2 w-12 bg-teal-100 rounded-full" />
        <div className="h-1.5 w-full bg-slate-100 rounded-full" />
        <div className="h-1.5 w-16 bg-slate-100 rounded-full" />
        <div className="mt-auto flex justify-end">
          <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
            <FileText className="w-3 h-3 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Center: Sync Node */}
      <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shadow-xl z-20">
        <ArrowRight className="w-5 h-5 text-white" />
      </div>

      {/* Right: Gov System (IDIKA) */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-24 h-32 bg-blue-50 rounded-xl shadow-inner border border-blue-100 p-3 flex flex-col gap-2 items-center justify-center text-center"
      >
        <CloudCog className="w-8 h-8 text-blue-500 mb-1" />
        <div className="text-[10px] font-bold text-blue-700 uppercase leading-tight">
          IDIKA <br /> E-Rx
        </div>
        <div className="mt-2 bg-green-100 text-green-700 px-2 py-0.5 rounded text-[8px] font-bold border border-green-200">
          VERIFIED
        </div>
      </motion.div>
    </div>
  </div>
);

const VisualPayments = () => (
  <div className="w-full h-full flex flex-col items-center justify-center pt-4">
    <div className="relative">
      {/* The Invoice */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-48 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 relative z-10"
      >
        <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-teal-50 rounded text-teal-600">
              <Receipt className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-700">
              Receipt #402
            </span>
          </div>
          <span className="text-xs font-bold text-slate-900">€80.00</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Consultation</span>
            <span>€50</span>
          </div>
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Ultrasound</span>
            <span>€30</span>
          </div>
        </div>

        {/* Success Badge */}
        <div className="mt-4 flex items-center justify-center gap-1.5 bg-green-50 text-green-700 py-1.5 rounded-lg border border-green-100">
          <CheckCircle2 className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase">
            Payment Complete
          </span>
        </div>
      </motion.div>

      {/* Decor: Credit Card floating behind */}
      <div className="absolute -top-4 -right-4 w-12 h-8 bg-slate-800 rounded-md rotate-12 opacity-80 z-0" />
      <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-teal-100 rounded-full blur-xl -z-10" />
    </div>
  </div>
);

const VisualAIScribe = () => (
  <div className="w-full h-full flex flex-col justify-center px-8">
    {/* Audio Wave Visual */}
    <div className="flex items-end justify-center gap-1 h-8 mb-6">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-gradient-to-t from-teal-500 to-teal-300 rounded-full"
          animate={{ height: ["20%", "100%", "20%"] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          style={{ height: Math.random() * 100 + "%" }}
        />
      ))}
    </div>

    {/* Typing Text Simulation */}
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-teal-500" />
      <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-slate-400 uppercase">
        <Mic className="w-3 h-3 text-teal-500" /> Listening...
      </div>
      <div className="space-y-1.5">
        <div className="h-2 w-full bg-slate-100 rounded-full" />
        <div className="h-2 w-[90%] bg-slate-100 rounded-full" />
        <motion.div
          className="h-2 bg-teal-100 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  </div>
);

// --- HELPERS ---

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
    <div
      className="absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
    <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
      {children}
    </div>
  </motion.div>
);

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

export default UseCaseOffice;
