"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Activity,
  FileText,
  Pill,
  Clock,
  AlertCircle,
  Check,
  Search,
  LayoutTemplate,
  FolderOpen,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

const PatientProfileFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: PATIENT 360 HUB --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#2dd4bf 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-20 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <User className="w-3 h-3" /> Clinical Core
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The central nervous system <br />
            <span className="text-blue-400">of patient care.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            One unified card for everything. From demographics and AMKA
            auto-fill to real-time vitals and admission history.
          </p>
        </div>

        {/* Visual: The Profile Interface */}
        <div className="relative z-10 w-full bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          {/* Sidebar / Demographics */}
          <div className="w-full md:w-64 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-slate-700 pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600">
                <User className="w-8 h-8 text-slate-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">George K.</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 uppercase font-bold">
                    Admitted
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-700 flex justify-between text-xs">
                <span className="text-slate-500">Age</span>
                <span className="text-slate-300">34 Yrs</span>
              </div>
              <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-700 flex justify-between text-xs">
                <span className="text-slate-500">Blood</span>
                <span className="text-red-400 font-bold">A+</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Vitals Card */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-teal-400 text-xs font-bold uppercase">
                <Activity className="w-3 h-3" /> Vitals (Live)
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">98</span>
                <span className="text-xs text-slate-500">bpm</span>
              </div>
              {/* CSS Wave Animation */}
              <div className="mt-3 h-8 w-full flex items-end gap-1 opacity-50">
                {[20, 40, 30, 70, 40, 60, 30, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [h + "%", h + 20 + "%", h + "%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="flex-1 bg-teal-500 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* Active Meds */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3 text-purple-400 text-xs font-bold uppercase">
                <Pill className="w-3 h-3" /> Active Protocol
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs bg-slate-800 p-2 rounded border border-slate-700">
                  <span className="text-slate-300">Amoxicillin</span>
                  <span className="text-slate-500">8h</span>
                </div>
                <div className="flex items-center justify-between text-xs bg-slate-800 p-2 rounded border border-slate-700">
                  <span className="text-slate-300">Saline IV</span>
                  <span className="text-slate-500">Cont.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ONBOARDING & VITALS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AMKA Automation */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              AMKA Integration
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-8">
            Entering the 11-digit ID automatically fetches official data from
            the National Health System. Zero typing errors.
          </p>

          {/* Animation */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex gap-2 mb-4">
              <div className="h-8 w-32 bg-white border border-slate-200 rounded-lg flex items-center px-2 text-xs text-slate-400">
                140588...
              </div>
              <div className="h-8 w-20 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-sm">
                Fetch
              </div>
            </div>
            <div className="space-y-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-2 bg-slate-200 rounded-full"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="h-2 bg-slate-200 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Vitals & Alerts */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-50 rounded-xl text-red-600">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Smart Anomaly Detection
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-8">
            Inputs aren't just numbers. If a vital sign (HR, SpO2) deviates from
            safety norms, the system triggers an instant alert.
          </p>

          <div className="bg-slate-900 rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs text-slate-400">Heart Rate</span>
              <span className="text-xl font-bold text-red-400 animate-pulse">
                140 BPM
              </span>
            </div>
            {/* Fake Chart */}
            <div className="relative h-12 w-full flex items-end">
              <svg className="w-full h-full overflow-visible">
                <motion.path
                  d="M0 40 L10 40 L20 35 L30 40 L40 10 L50 40 L60 38 L70 40 L80 5 L90 40 L100 40"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* --- NO-CODE TEMPLATES --- */}
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-3">
              <LayoutTemplate className="w-3 h-3" /> Flexible Architecture
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              No-Code Clinical Templates
            </h3>
            <p className="text-slate-500 mt-2 max-w-md">
              A Dermatologist needs skin mapping. A Cardiologist needs EKG
              notes. Create custom forms without writing code.
            </p>
          </div>

          {/* Visual Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <div className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-bold text-slate-800">
              Cardiology
            </div>
            <div className="px-3 py-1 text-xs font-medium text-slate-500">
              Derma
            </div>
          </div>
        </div>

        {/* Template Visualizer */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-2xl mx-auto">
          <div className="text-center mb-6 pb-4 border-b border-slate-100">
            <h4 className="font-bold text-slate-800">Post-Op Check (Cardio)</h4>
            <span className="text-[10px] text-slate-400 uppercase tracking-wide">
              Custom Template
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="h-1.5 w-12 bg-slate-200 rounded-full" />
              <div className="h-8 w-full bg-slate-50 border border-slate-100 rounded-lg" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
              <div className="h-8 w-full bg-slate-50 border border-slate-100 rounded-lg" />
            </div>
            <div className="col-span-2 space-y-1">
              <div className="h-1.5 w-24 bg-slate-200 rounded-full" />
              <div className="h-16 w-full bg-slate-50 border border-slate-100 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* --- PROTOCOLS & HISTORY --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Protocols */}
        <div className="md:col-span-2 bg-teal-50 border border-teal-100 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-xl text-teal-600 shadow-sm">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-teal-900">
              1-Click Protocols
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p className="text-teal-800/70 text-sm leading-relaxed flex-1">
              Don't prescribe items one by one. Apply a{" "}
              <strong>"Post-Surgery Bundle"</strong> to instantly add 3 meds, 2
              nursing tasks, and diet orders to the schedule.
            </p>
            <div className="bg-white p-3 rounded-xl shadow-md border border-teal-100 w-48">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-white bg-teal-500 rounded-full p-0.5" />
                <span className="text-xs font-bold text-slate-700">
                  Bundle Applied
                </span>
              </div>
              <div className="space-y-1 pl-6">
                <div className="h-1 w-20 bg-slate-200 rounded-full" />
                <div className="h-1 w-16 bg-slate-200 rounded-full" />
                <div className="h-1 w-24 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* File System */}
        <div className="md:col-span-1 bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold text-xs uppercase tracking-widest">
            <FolderOpen className="w-4 h-4" /> Documents
          </div>
          <h4 className="text-xl font-bold mb-2">Hierarchical Files</h4>
          <p className="text-slate-400 text-sm mb-6">
            Store X-rays and consents in nested folders, just like on your
            desktop.
          </p>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileFeature;
