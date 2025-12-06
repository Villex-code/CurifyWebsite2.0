"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Clock,
  AlertCircle,
  CheckCircle2,
  Activity,
  Syringe,
  History,
  ArrowRight,
  Bell,
  CalendarClock,
} from "lucide-react";

const TaskManagementFeature = () => {
  return (
    <div className="space-y-12">
      {/* --- HERO VISUAL: THE OPERATIONAL HEARTBEAT --- */}
      <div className="relative h-[400px] w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex items-center justify-center p-8 shadow-2xl">
        {/* Background Heartbeat Graph */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0 200 H 200 L 230 100 L 260 300 L 290 200 H 800"
              fill="none"
              stroke="#2dd4bf" // teal-400
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            {/* Moving Pulse */}
            <motion.circle
              r="4"
              fill="#2dd4bf"
              className="drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M0 200 H 200 L 230 100 L 260 300 L 290 200 H 800"
              />
            </motion.circle>
          </svg>
        </div>

        {/* Floating Task UI Cards */}
        <div className="relative z-10 flex flex-col gap-4 w-full max-w-md">
          {/* Card 1: Completed */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center justify-between opacity-60"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">
                  Amoxicillin 500mg
                </h4>
                <span className="text-xs text-slate-400">
                  Administered at 08:00
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-green-400">DONE</span>
          </motion.div>

          {/* Card 2: Active (The Pulse) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-4 rounded-2xl shadow-[0_0_30px_rgba(20,184,166,0.15)] border-l-4 border-teal-500 flex items-center justify-between transform scale-105 relative"
          >
            <div className="absolute -left-1 top-0 bottom-0 w-1 bg-teal-500 rounded-l-lg animate-pulse" />
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                <Syringe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-900 text-sm font-bold">
                  Insulin (Regular)
                </h4>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Due: 12:00 PM (Now)
                </span>
              </div>
            </div>
            <button className="px-3 py-1.5 bg-teal-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-teal-700 transition-colors">
              Complete
            </button>
          </motion.div>

          {/* Card 3: Upcoming */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-700 rounded-lg text-slate-400">
                <CalendarClock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-300 text-sm font-bold">
                  Vitals Check
                </h4>
                <span className="text-xs text-slate-500">Scheduled: 16:00</span>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500">PENDING</span>
          </motion.div>
        </div>
      </div>

      {/* --- CONTENT BLOCKS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Workflow Logic */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              From Prescription to Task
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            Tasks are automatically generated when a Doctor creates a
            prescription. The system calculates the entire schedule based on the{" "}
            <strong>Administration Rate</strong> and <strong>Duration</strong>.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span>Input: Medicine & Dosage</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span>Input: Frequency (e.g. "Every 8 Hours")</span>
            </div>
            <div className="pl-1">
              <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 my-1" />
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-teal-700 bg-teal-50 p-2 rounded-lg border border-teal-100">
              <Activity className="w-4 h-4" />
              <span>Result: Auto-populated Task Queue</span>
            </div>
          </div>
        </div>

        {/* Safety & Alerts */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-50 rounded-xl text-red-600">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Safety Net & Monitoring
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            The system actively monitors timestamps. If a task passes its due
            time without action, it flags as <strong>Neglected</strong>.
          </p>

          <div className="grid gap-4">
            {/* Alert Visual */}
            <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
              <Bell className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-red-700">
                  Neglect Detected
                </h4>
                <p className="text-xs text-red-600/80 mt-1">
                  Alert sent to Head Nurse regarding missed dose for Patient
                  #1024.
                </p>
              </div>
            </div>

            {/* Audit Visual */}
            <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <History className="w-5 h-5 text-slate-500 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-700">
                  Full Audit Trail
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Who performed the action, exact timestamp, and any
                  modifications logged permanently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM: TASK TYPES --- */}
      <div className="p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl border border-teal-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Supported Workflow Types
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600 font-bold text-sm border border-teal-100">
              1
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Scheduled Tasks</h4>
              <p className="text-sm text-slate-600">
                Automatically appear in the queue when their time approaches
                based on the prescription timeline.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500 font-bold text-sm border border-orange-100">
              2
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Stat (One-Time)</h4>
              <p className="text-sm text-slate-600">
                Immediate administration logic. Allows staff to prescribe and
                administer "on the spot" without future scheduling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementFeature;
