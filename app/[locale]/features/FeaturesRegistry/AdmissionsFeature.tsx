"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  LogIn,
  LogOut,
  BedDouble,
  Ticket,
  Search,
  Filter,
  Lock,
  EyeOff,
  Activity,
  FileInput,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

const AdmissionsFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: THE THROUGHPUT ENGINE --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Background Data Flow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-30" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-30" />
        </div>

        <div className="relative z-20 mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Activity className="w-3 h-3" /> Global Ledger
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The heartbeat of <br />
            <span className="text-green-400">patient flow.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            A macro-level view of every hospitalization. Track occupancy,
            throughput efficiency, and discharge rates in real-time.
          </p>
        </div>

        {/* Visual: The Throughput Pipeline */}
        <div className="relative z-10 w-full grid grid-cols-3 gap-4">
          {/* 1. Inbound */}
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-2xl flex flex-col items-center relative overflow-hidden">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
              Admissions
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
              <LogIn className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">142</div>
            {/* Particle Effect */}
            <motion.div
              className="absolute top-1/2 right-0 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
              animate={{ x: [0, 50], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          {/* 2. Active (Occupancy) */}
          <div className="bg-slate-800 border border-teal-500/30 p-4 rounded-2xl flex flex-col items-center relative shadow-[0_0_30px_rgba(20,184,166,0.1)]">
            <div className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <div className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">
              Active Beds
            </div>
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-2">
              <BedDouble className="w-6 h-6 text-teal-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              88<span className="text-sm text-slate-500">/100</span>
            </div>
          </div>

          {/* 3. Outbound */}
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-2xl flex flex-col items-center relative overflow-hidden">
            <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">
              Discharged
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
              <LogOut className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">1,204</div>
            {/* Particle Effect */}
            <motion.div
              className="absolute top-1/2 left-0 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"
              animate={{ x: [0, 50], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* --- ADMISSIONS LOG (Bento Grid) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Explanation */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            The Master Register
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Forget scattered Excel sheets. Every admission event is logged with
            a status tag. Jump instantly from the log to the specific{" "}
            <strong>Admission Details</strong> or the{" "}
            <strong>Patient Master Profile</strong>.
          </p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full" /> Active
            </div>
            <div className="flex items-center gap-2 text-xs font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full" /> Discharged
            </div>
          </div>
        </div>

        {/* Visual: The Log Table */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="space-y-3">
            {/* Row 1 */}
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                  GK
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    George Katsaros
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    SURG-01 • General Surgery
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-lg">
                ACTIVE
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                  MP
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Maria P.
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    PATH-03 • Internal Med
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-lg">
                DISCHARGED
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                  JD
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    John Doe
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    ORTHO-02 • Orthopedics
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-lg">
                DISCHARGED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- REFERRALS (Service Tickets) --- */}
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Ticket className="w-6 h-6 text-purple-600" /> Referrals & Service
            Tickets
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Not every interaction is a full admission. Referrals track specific
            services like <strong>Blood Tests</strong> or{" "}
            <strong>X-Rays</strong> as individual tickets, keeping the main
            timeline clean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ticket 1 */}
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-5 relative shadow-sm group hover:border-purple-200 transition-all">
            {/* Ticket Notch */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-slate-50 rounded-full border-r border-slate-200" />
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-slate-50 rounded-full border-l border-slate-200" />

            <div className="flex justify-between items-start mb-4 pl-4">
              <div className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                HEMATOLOGY
              </div>
              <span className="text-[10px] text-slate-400">Today, 10:30</span>
            </div>
            <div className="pl-4">
              <h4 className="font-bold text-slate-900">Full Blood Count</h4>
              <p className="text-sm text-slate-500 mt-1">Ref by: Dr. Smith</p>
            </div>
          </div>

          {/* Ticket 2 */}
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-5 relative shadow-sm group hover:border-purple-200 transition-all">
            {/* Ticket Notch */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-slate-50 rounded-full border-r border-slate-200" />
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-slate-50 rounded-full border-l border-slate-200" />

            <div className="flex justify-between items-start mb-4 pl-4">
              <div className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                IMAGING
              </div>
              <span className="text-[10px] text-slate-400">Yesterday</span>
            </div>
            <div className="pl-4">
              <h4 className="font-bold text-slate-900">Chest X-Ray</h4>
              <p className="text-sm text-slate-500 mt-1">Ref by: Dr. Jones</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEARCH & PERMISSIONS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Advanced Filter */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-teal-50 rounded-xl text-teal-600">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Deep Filtering</h3>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-xs text-slate-600">
              <Search className="w-3 h-3 text-slate-400" /> "Cardiology"
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-xs text-slate-600">
              <FileInput className="w-3 h-3 text-slate-400" /> Status: Active
            </div>
          </div>
        </div>

        {/* Permission Control */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold">Role-Based View</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Receptionists see the admission exists (for billing). Clinical
              details remain locked without medical clearance.
            </p>
          </div>

          {/* Visual: Locked Content */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 relative">
            <div className="flex items-center justify-between mb-2 opacity-50 blur-[2px]">
              <span className="text-sm font-bold">Diagnosis</span>
              <span>Acute...</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-600 flex items-center gap-2 shadow-xl">
                <EyeOff className="w-3 h-3 text-red-400" />
                <span className="text-[10px] font-bold text-red-400 uppercase">
                  Restricted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsFeature;
