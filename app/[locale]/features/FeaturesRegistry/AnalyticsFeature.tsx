"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Filter,
  Users,
  Baby,
  DollarSign,
  ArrowUpRight,
  Layers,
  Search,
  LineChart,
  Target,
} from "lucide-react";

const AnalyticsFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO: THE "TRACK EVERYTHING" DASHBOARD --- */}
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-6">
            <LineChart className="w-3 h-3" /> Business Intelligence
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            If it happens in Curify, <br />
            <span className="text-teal-400">we track it.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Curify offers powerful <strong>initial analytics</strong> out of the
            box. Every task, transaction, and admission is logged to give you
            instant visibility into your facility's pulse without any setup.
          </p>
        </div>

        {/* The Visual Dashboard */}
        <div className="relative z-10 w-full bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row gap-8">
          {/* Global Filter Visual */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-slate-600 pointer-events-none">
            <Filter className="w-3 h-3 text-slate-500" />
            <span className="text-xs text-slate-200 font-mono">
              Filter: Last 30 Days
            </span>
          </div>

          {/* Main Chart */}
          <div className="flex-1 h-48 flex items-end justify-between gap-2 opacity-90 pt-8">
            {[35, 55, 45, 70, 60, 90, 75, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm relative group"
              >
                <div className="absolute top-0 w-full h-[1px] bg-white/50" />
              </motion.div>
            ))}
          </div>

          {/* Side KPIs */}
          <div className="flex md:flex-col gap-4 w-full md:w-48 shrink-0">
            <KpiCard label="Total Admissions" value="142" color="blue" />
            <KpiCard label="Bed Occupancy" value="88%" color="orange" />
            <KpiCard label="Net Revenue" value="$42.5k" color="purple" />
          </div>
        </div>
      </div>

      {/* --- PRE-DEFINED ANALYTICS (Bento) --- */}
      <div>
        <div className="mb-10 max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Standard Operational Intelligence
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Identify <strong>efficiency blocks</strong> and{" "}
            <strong>revenue leaks</strong> immediately. Our standard suite
            covers the core pillars of your organization: Inventory, Staff, and
            Finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Inventory Intelligence */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-500" /> Supply Chain
            </h3>
            <div className="flex-1 flex flex-col justify-center gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>Fast Movers</span>
                  <span className="text-green-600">Optimize Bulk Order</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-green-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>Dead Stock</span>
                  <span className="text-red-500">Liquidate</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-red-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Staff Performance */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" /> Workforce
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">
                    A
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-700 font-medium">
                      Nurse Anna
                    </span>
                    <span className="text-[10px] text-slate-400">ICU Ward</span>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-md">
                  50 Tasks
                </div>
              </div>
              <div className="flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-xs font-bold">
                    B
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-700 font-medium">
                      Nurse Bob
                    </span>
                    <span className="text-[10px] text-slate-400">General</span>
                  </div>
                </div>
                <div className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md">
                  32 Tasks
                </div>
              </div>
            </div>
          </div>

          {/* Profit & Loss */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-inner flex flex-col">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-teal-600" /> P&L Analysis
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Real-time calculation of COGS (Cost of Goods Sold) per treatment
              vs Revenue.
            </p>
            <div className="w-full h-12 bg-white rounded-xl border border-slate-200 flex overflow-hidden relative shadow-sm">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1 }}
                className="h-full bg-teal-500 relative group flex items-center pl-4"
              >
                <span className="text-white font-bold text-xs">Revenue</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-red-400 relative flex items-center justify-center"
              >
                <span className="text-white font-bold text-xs">Cost</span>
              </motion.div>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                +40% Margin
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- CUSTOM ENGINE (On-Demand) --- */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-[2.5rem] p-10 text-white overflow-hidden shadow-xl">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
              <Target className="w-3 h-3 inline mr-1" /> On-Demand Intelligence
            </div>
            <h3 className="text-3xl font-bold mb-4">Custom Metrics Engine</h3>
            <p className="text-teal-100 leading-relaxed mb-6 text-lg">
              Every organization has unique pain points. Curify allows you to
              build <strong>custom workflows and analysis</strong> to find
              specific blocks.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Search className="w-5 h-5 text-teal-300 shrink-0 mt-1" />
                <span className="text-teal-50 text-sm">
                  Research specific patient cohorts (e.g., "Post-Op
                  complications in Q3").
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-teal-300 shrink-0 mt-1" />
                <span className="text-teal-50 text-sm">
                  Track niche KPIs like "Stent Success Rate" or "Birth Types".
                </span>
              </li>
            </ul>
          </div>

          {/* Abstract Chart Visual: Maternity Example */}
          <div className="bg-white text-slate-900 p-6 rounded-3xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-pink-50 text-pink-500 rounded-lg">
                  <Baby className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-sm block">
                    Birth Statistics
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">
                    Custom Report
                  </span>
                </div>
              </div>
            </div>

            {/* Stacked Bar Per Doctor */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                  <span>Dr. Smith</span>
                  <span>42 Births</span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex border border-slate-100">
                  <div className="w-[70%] bg-teal-500" /> {/* Natural */}
                  <div className="w-[30%] bg-orange-400" /> {/* C-Section */}
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                  <span>Dr. Jones</span>
                  <span>38 Births</span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex border border-slate-100">
                  <div className="w-[40%] bg-teal-500" /> {/* Natural */}
                  <div className="w-[60%] bg-orange-400" /> {/* C-Section */}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6 justify-center text-[10px] font-bold uppercase text-slate-500 bg-slate-50 py-2 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-teal-500" /> Natural
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-orange-400" /> C-Section
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- KPI CARD HELPER ---
const KpiCard = ({ label, value, color }: any) => {
  const colors: any = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
  };

  return (
    <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wide">
          {label}
        </p>
        <p className="text-white text-lg font-bold">{value}</p>
      </div>
      <div
        className={`h-2 w-2 ${colors[color]} rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
      />
    </div>
  );
};

export default AnalyticsFeature;
