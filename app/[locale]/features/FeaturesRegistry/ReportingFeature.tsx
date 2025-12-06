"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Printer,
  FileText,
  Lock,
  ShieldAlert,
  EyeOff,
  UserCheck,
  UserX,
  Clock,
  Syringe,
  AlertTriangle,
  FileBadge,
  CalendarDays,
} from "lucide-react";

const ReportingFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: THE PRINT ENGINE --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-20 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Printer className="w-3 h-3" /> Digital-to-Physical
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Paperless workflow. <br />
            <span className="text-blue-400">Print-ready backups.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Curify is digital-first, but reality-aware. Generate professional,
            legible PDF reports for Vitals, Meds, and Discharge Summaries
            instantly.
          </p>
        </div>

        {/* Visual: The PDF Generator */}
        <div className="relative z-10 w-full flex justify-center">
          <div className="relative w-64 h-80 bg-white rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl shadow-2xl transform rotate-[-6deg] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-16 bg-slate-100 border-b border-slate-200 flex items-center px-6 gap-3">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
              <div className="w-24 h-2 bg-slate-300 rounded-full" />
            </div>
            {/* Body Content (Animated Lines) */}
            <div className="p-6 space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`h-2 rounded-full ${
                    i === 3 ? "bg-blue-100 w-2/3" : "bg-slate-100"
                  }`}
                />
              ))}
              <div className="mt-8 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <ActivityIcon className="w-5 h-5 text-teal-500" />
                <div className="space-y-1 flex-1">
                  <div className="h-1.5 w-12 bg-slate-300 rounded-full" />
                  <div className="h-1.5 w-8 bg-slate-200 rounded-full" />
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-4 right-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
              PDF READY
            </div>
          </div>
        </div>
      </div>

      {/* --- REPORTING ASSETS (Bento) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Medication Log", "Vitals Chart", "Admissions"].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex items-center gap-4 hover:border-teal-200 transition-colors group"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{item}</h4>
              <p className="text-xs text-slate-500 mt-1">
                Export to PDF / Print
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- PRESCRIPTION DETAIL (High Fidelity) --- */}
      <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200">
        <div className="max-w-2xl mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            High-Fidelity Prescriptions
          </h3>
          <p className="text-slate-600">
            It's not just "Drug + Dose". Capture the nuance of hospital
            workflows with specific flags and responsibility tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Complex Card Visual */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative">
            <div className="h-2 w-full bg-purple-500" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Morphine Sulfate
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    IV Drip • 2mg/ml
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded border border-red-100">
                    SOS (Pain)
                  </span>
                  <span className="px-2 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded border border-purple-100 flex items-center gap-1">
                    <Syringe className="w-3 h-3" /> Pump
                  </span>
                </div>
              </div>

              {/* Timeline Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                  <span>Start: 14:00</span>
                  <span>End: 22:00</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-purple-500/20" />
                  <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-purple-500" />{" "}
                  {/* Progress */}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200" />
                  <span className="text-xs font-bold text-slate-600">
                    Dr. Papadopoulos
                  </span>
                </div>
                <FileBadge className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <FeatureRow
              icon={Clock}
              title="Precise Timeline"
              desc="Define exact Start/End times for infusions."
            />
            <FeatureRow
              icon={AlertTriangle}
              title="Special Flags"
              desc="'Patient Provided' (No Cost) or 'SOS' (On Demand)."
            />
            <FeatureRow
              icon={UserCheck}
              title="Clear Responsibility"
              desc="Assign specific supervisors to high-risk lines."
            />
          </div>
        </div>
      </div>

      {/* --- ZERO TRUST PRIVACY (The Security Core) --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden p-8 md:p-12 shadow-2xl border border-slate-800 flex flex-col md:flex-row gap-12">
        {/* Left Text */}
        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Lock className="w-3 h-3" /> Zero-Trust Model
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Granular Privacy
          </h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            Not everyone needs to see everything. Lock down sensitive files
            (VIPs, Psychiatric) using{" "}
            <strong>Access Control Lists (ACLs)</strong>.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700">
              User-Specific
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700">
              Role-Based
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700">
              Location-Based
            </span>
          </div>
        </div>

        {/* Right Visual: The Gatekeeper */}
        <div className="flex-1 bg-black/40 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 relative overflow-hidden">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            Access Log: Patient #9921 (VIP)
          </div>

          <div className="space-y-3">
            {/* User A: Allowed */}
            <div className="flex items-center justify-between p-3 bg-green-900/10 border border-green-900/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-green-400">
                    Dr. Smith
                  </div>
                  <div className="text-[10px] text-green-500/60">
                    Reason: Primary Doctor
                  </div>
                </div>
              </div>
              <Check className="w-4 h-4 text-green-500" />
            </div>

            {/* User B: Denied */}
            <div className="flex items-center justify-between p-3 bg-red-900/10 border border-red-900/30 rounded-xl opacity-80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-400">
                  <UserX className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-red-400">
                    Student Nurse
                  </div>
                  <div className="text-[10px] text-red-500/60">
                    Reason: Role Restriction
                  </div>
                </div>
              </div>
              <ShieldAlert className="w-4 h-4 text-red-500" />
            </div>

            {/* User C: Denied (Location) */}
            <div className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700 rounded-xl opacity-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
                  <EyeOff className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400">
                    Reception B
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Reason: Wrong Ward
                  </div>
                </div>
              </div>
              <Lock className="w-4 h-4 text-slate-500" />
            </div>
          </div>

          {/* Privacy Shield Overlay Effect */}
          <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-red-500/10 rounded-full blur-[60px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

// --- HELPER: FEATURE ROW ---
const FeatureRow = ({ icon: Icon, title, desc }: any) => (
  <div className="flex gap-4 p-3 rounded-xl hover:bg-white transition-colors hover:shadow-sm border border-transparent hover:border-slate-100">
    <div className="p-2 bg-slate-100 text-slate-600 rounded-lg h-fit">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-sm font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

// --- ICON WRAPPER ---
function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

// --- SIMPLE CHECK ICON ---
function Check({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default ReportingFeature;
