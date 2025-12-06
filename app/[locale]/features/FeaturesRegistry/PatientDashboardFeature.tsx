"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  Filter,
  BedDouble,
  TrendingUp,
  Microscope,
  Database,
  FileSpreadsheet,
  ArrowRight,
  CalendarRange,
  Tags,
  FlaskConical,
  Activity,
} from "lucide-react";

const PatientDashboardFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: THE RESEARCH ENGINE --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Background Data Stream Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        </div>

        <div className="relative z-20 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Microscope className="w-3 h-3" /> Clinical Research
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Turn raw data into <br />
            <span className="text-indigo-400">medical insights.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Stop digging through paper files. Use our{" "}
            <strong>Advanced Query Builder</strong> to filter millions of
            records in seconds. Perfect for audits, studies, and cohort
            analysis.
          </p>
        </div>

        {/* --- VISUAL: THE QUERY LOGIC STACK --- */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-8">
          {/* 1. The Filters (Inputs) */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/80 backdrop-blur border border-slate-700 p-3 rounded-xl flex items-center gap-3"
            >
              <div className="p-1.5 bg-blue-500/20 rounded text-blue-400">
                <CalendarRange className="w-4 h-4" />
              </div>
              <div className="text-sm font-mono text-slate-300">
                Last 3 Months
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/80 backdrop-blur border border-slate-700 p-3 rounded-xl flex items-center gap-3"
            >
              <div className="p-1.5 bg-purple-500/20 rounded text-purple-400">
                <Tags className="w-4 h-4" />
              </div>
              <div className="text-sm font-mono text-slate-300">
                Tag: Oncology
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/80 backdrop-blur border border-slate-700 p-3 rounded-xl flex items-center gap-3"
            >
              <div className="p-1.5 bg-red-500/20 rounded text-red-400">
                <FlaskConical className="w-4 h-4" />
              </div>
              <div className="text-sm font-mono text-slate-300">
                Result: Abnormal
              </div>
            </motion.div>
          </div>

          {/* Arrow */}
          <div className="hidden md:block">
            <ArrowRight className="w-8 h-8 text-slate-600 animate-pulse" />
          </div>

          {/* 2. The Result (Output) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="w-full max-w-xs bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 shadow-2xl shadow-indigo-500/20 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <h4 className="text-indigo-200 text-xs font-bold uppercase mb-2">
                Cohort Identified
              </h4>
              <div className="text-5xl font-bold mb-4">42</div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg cursor-pointer hover:bg-white/30 transition-colors">
                <FileSpreadsheet className="w-4 h-4" />
                <span className="text-xs font-bold">
                  Export for Publication
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- OPERATIONAL SNAPSHOT (Metrics) --- */}
      <div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-6 h-6 text-teal-600" /> Operational Snapshot
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            Instant visibility into load and capacity the moment you log in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metric 1: New Patients */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <Users className="w-5 h-5" />
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12%
              </span>
            </div>
            <div className="text-3xl font-bold text-slate-900">148</div>
            <p className="text-xs text-slate-400 mt-1">
              New patients this month
            </p>
            {/* Mini Sparkline */}
            <div className="mt-4 flex items-end gap-1 h-8">
              {[4, 7, 5, 9, 6, 8, 10].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-blue-100 rounded-t-sm"
                  style={{ height: `${h * 10}%` }}
                />
              ))}
            </div>
          </div>

          {/* Metric 2: Occupancy Visual */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-50 rounded-xl text-orange-600">
                <BedDouble className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Capacity
              </span>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">85%</div>
            <p className="text-xs text-slate-400 mb-6">42 / 50 Beds Full</p>

            {/* Bed Grid Visualization */}
            <div className="grid grid-cols-10 gap-1">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i < 42 ? "bg-teal-500" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Metric 3: Active Treatment */}
          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-white rounded-xl text-teal-600 shadow-sm">
                <Activity className="w-5 h-5" />
              </div>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-900">82</div>
              <p className="text-xs text-teal-700/70 mt-1">
                Patients currently active
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- OPERATIONAL SEARCH --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Universal Search
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Don't scroll through lists. Find any patient by Name, AMKA (SSN), or
            Internal ID instantly.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
              Active vs Discharged
            </span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
              Filter by Ward
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 shadow-lg">
          {/* Fake Search Bar */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-6">
            <Search className="w-5 h-5 text-slate-400" />
            <div className="h-4 w-32 bg-slate-200 rounded-full opacity-50" />
            <div className="ml-auto flex gap-2">
              <div className="w-20 h-6 bg-white rounded-md shadow-sm" />
              <div className="w-6 h-6 bg-white rounded-md shadow-sm" />
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-3">
            <ResultRow name="George Katsaros" id="10293" status="active" />
            <ResultRow
              name="Maria Papadopoulou"
              id="10294"
              status="discharged"
            />
            <ResultRow name="John Doe" id="10295" status="active" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HELPER: RESULT ROW ---
const ResultRow = ({
  name,
  id,
  status,
}: {
  name: string;
  id: string;
  status: "active" | "discharged";
}) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-default border border-transparent hover:border-slate-100">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
        {name.charAt(0)}
      </div>
      <div>
        <div className="text-sm font-bold text-slate-700">{name}</div>
        <div className="text-[10px] text-slate-400">ID: #{id}</div>
      </div>
    </div>
    <span
      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
        status === "active"
          ? "bg-teal-50 text-teal-600"
          : "bg-slate-100 text-slate-500"
      }`}
    >
      {status}
    </span>
  </div>
);

export default PatientDashboardFeature;
