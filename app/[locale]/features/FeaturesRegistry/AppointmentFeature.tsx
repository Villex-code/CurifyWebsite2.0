"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Bell,
  ShieldAlert,
  RefreshCw,
  UserCheck,
  ArrowRightLeft,
  Link as LinkIcon,
  AlertCircle,
} from "lucide-react";

const AppointmentFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO: THE INTELLIGENT CALENDAR --- */}
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
            <Calendar className="w-3 h-3" /> Smart Scheduling
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not just a calendar. <br />
            <span className="text-teal-400">An operational guardrail.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Curify's calendar is context-aware. It links patients to records,
            prevents double-booking via Google Sync, and enforces{" "}
            <strong>Smart Tag Limits</strong> to prevent staff burnout.
          </p>
        </div>

        {/* --- VISUAL: SMART CONSTRAINT DEMO --- */}
        <div className="relative z-10 w-full bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-6 overflow-hidden">
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
            <div className="flex gap-4">
              <div className="text-white font-bold text-lg">Dr. Smith</div>
              <div className="px-2 py-0.5 rounded bg-slate-700 text-xs text-slate-300 flex items-center">
                Surgeon
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldAlert className="w-3 h-3 text-orange-400" />
              <span>Rule Active: Max 3 Surgeries/Day</span>
            </div>
          </div>

          {/* Time Grid */}
          <div className="grid grid-cols-4 gap-4 h-40">
            {/* Slot 1: Booked */}
            <div className="bg-teal-900/40 border-l-4 border-teal-500 p-3 rounded-r-lg relative">
              <div className="text-xs text-teal-200 font-bold mb-1">
                09:00 AM
              </div>
              <div className="text-sm text-white font-bold">Surgery #1</div>
              <div className="text-[10px] text-teal-400">Appendectomy</div>
            </div>

            {/* Slot 2: Booked */}
            <div className="bg-teal-900/40 border-l-4 border-teal-500 p-3 rounded-r-lg relative">
              <div className="text-xs text-teal-200 font-bold mb-1">
                11:30 AM
              </div>
              <div className="text-sm text-white font-bold">Surgery #2</div>
              <div className="text-[10px] text-teal-400">Hernia Repair</div>
            </div>

            {/* Slot 3: Booked */}
            <div className="bg-teal-900/40 border-l-4 border-teal-500 p-3 rounded-r-lg relative">
              <div className="text-xs text-teal-200 font-bold mb-1">
                02:00 PM
              </div>
              <div className="text-sm text-white font-bold">Surgery #3</div>
              <div className="text-[10px] text-teal-400">
                ACL Reconstruction
              </div>
            </div>

            {/* Slot 4: BLOCKED ATTEMPT */}
            <div className="relative border-2 border-dashed border-slate-600 rounded-lg bg-slate-800/50 p-3 flex flex-col justify-center items-center opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed group">
              <div className="absolute inset-0 bg-red-500/10 z-0" />
              <span className="text-xs text-slate-400 relative z-10">
                04:00 PM
              </span>
              <span className="text-sm font-bold text-slate-300 relative z-10">
                Add Surgery
              </span>

              {/* The Alert Tooltip */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 bg-red-500 text-white text-xs p-2 rounded-lg shadow-xl z-20 flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <b>Limit Reached!</b>
                Daily max (3) exceeded.
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RECEPTIONIST COMMAND CENTER --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Text Description */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" /> Reception Command
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Managing high traffic? The <strong>Aggregate View</strong> allows
              receptionists to overlay multiple doctors' schedules to find open
              slots instantly.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>
                  <strong>Multi-Select:</strong> Toggle specific doctors on/off.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>
                  <strong>Split View:</strong> Compare schedules side-by-side.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual: Multi-Column View */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
            {["Dr. Smith", "Dr. Jones", "Nurse A"].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    i === 0
                      ? "bg-teal-500"
                      : i === 1
                      ? "bg-blue-500"
                      : "bg-purple-500"
                  }`}
                />
                <span className="text-xs font-bold text-slate-700">{name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden h-48">
            {/* Col 1 */}
            <div className="bg-white p-2 relative">
              <div className="absolute top-4 left-2 right-2 h-12 bg-teal-50 border-l-2 border-teal-500 rounded p-1">
                <div className="h-1 w-8 bg-teal-200 rounded-full mb-1" />
                <div className="h-1 w-12 bg-slate-200 rounded-full" />
              </div>
              <div className="absolute top-24 left-2 right-2 h-8 bg-teal-50 border-l-2 border-teal-500 rounded" />
            </div>
            {/* Col 2 */}
            <div className="bg-white p-2 relative">
              <div className="absolute top-10 left-2 right-2 h-20 bg-blue-50 border-l-2 border-blue-500 rounded p-1">
                <div className="h-1 w-10 bg-blue-200 rounded-full mb-1" />
                <div className="h-1 w-14 bg-slate-200 rounded-full" />
              </div>
            </div>
            {/* Col 3 */}
            <div className="bg-white p-2 relative">
              <div className="absolute top-2 left-2 right-2 h-8 bg-purple-50 border-l-2 border-purple-500 rounded" />
              <div className="absolute top-14 left-2 right-2 h-8 bg-purple-50 border-l-2 border-purple-500 rounded" />
              <div className="absolute top-32 left-2 right-2 h-8 bg-purple-50 border-l-2 border-purple-500 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* --- GOOGLE SYNC & NOTIFICATIONS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Sync */}
        <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white shadow-sm rounded-xl text-blue-600">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                2-Way Google Sync
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Personal commitments block medical slots automatically. No more
              double-booking.
            </p>

            <div className="flex items-center justify-center gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-teal-500" />{" "}
                {/* Curify Logo Placeholder */}
              </div>
              <motion.div
                animate={{ x: [5, -5, 5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRightLeft className="w-6 h-6 text-blue-400" />
              </motion.div>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                {/* Simple Google Calendar Icon Abstract */}
                <div className="w-8 h-8 bg-white border border-slate-100 rounded flex items-center justify-center font-bold text-blue-600 text-xs">
                  31
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Automated Reminders
            </h3>
          </div>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Reduce no-shows. We send SMS/Email alerts to patients 24h before
            their visit automatically.
          </p>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-1">
                System • Now
              </span>
              <p className="text-xs text-slate-500">
                Reminder sent to <strong>George K.</strong> for appointment
                tomorrow at 10:00 AM.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- PATIENT LINKING (The Detail) --- */}
      <div className="bg-teal-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-widest mb-2">
            <LinkIcon className="w-3 h-3" /> Context Aware
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Deep Patient Linking
          </h3>
          <p className="text-teal-100/80 text-sm">
            Appointments aren't just time slots. They are linked directly to the{" "}
            <strong>Medical File</strong>. Click the event to see history, meds,
            and notes instantly.
          </p>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 w-full md:w-auto">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
            GK
          </div>
          <div>
            <div className="text-white font-bold text-sm">George Katsaros</div>
            <div className="text-teal-200 text-xs">
              View Medical Profile &rarr;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFeature;
