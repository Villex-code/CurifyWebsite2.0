"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Layers,
  Grid3X3,
  ScanBarcode,
  ArrowRightLeft,
  Truck,
  AlertTriangle,
  TrendingDown,
  Database,
  CheckCircle2,
  PackageSearch,
} from "lucide-react";

const StorageFeature = () => {
  return (
    <div className="space-y-12">
      {/* --- HERO VISUAL: THE DIGITAL TWIN CABINET --- */}
      <div className="relative h-[450px] w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-8 shadow-2xl border border-slate-800">
        {/* Background Grid Effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#2dd4bf 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* The Virtual Drawer */}
        <div className="relative z-10 w-full max-w-lg bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-6 shadow-2xl">
          <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">
                  Cabinet: ICU-North-1
                </h4>
                <p className="text-slate-400 text-xs">
                  Drawer 03 • Ambient Storage
                </p>
              </div>
            </div>
            <div className="text-teal-400 text-xs font-mono bg-teal-500/10 px-2 py-1 rounded">
              IoT Connected
            </div>
          </div>

          {/* The Grid Visualization */}
          <div className="grid grid-cols-5 gap-3">
            {[...Array(15)].map((_, i) => {
              // Simulate random stock states
              const isFull = [0, 1, 3, 4, 6, 7, 8, 11, 13, 14].includes(i);
              const isLow = i === 7;
              const isExpiring = i === 1;

              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  className={`aspect-square rounded-lg border flex items-center justify-center relative group cursor-default
                        ${
                          isFull
                            ? "bg-slate-700 border-slate-600 hover:border-teal-500/50"
                            : "bg-slate-800/50 border-slate-700 border-dashed"
                        }
                      `}
                >
                  {isFull && (
                    <>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          isLow
                            ? "bg-yellow-500"
                            : isExpiring
                            ? "bg-red-500"
                            : "bg-teal-500"
                        } shadow-lg`}
                      />
                      {/* Hover Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-32 bg-black text-white text-[10px] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        <p className="font-bold text-teal-400">Amoxicillin</p>
                        <p>Qty: {isLow ? "2 (Low)" : "50"}</p>
                        {isExpiring && (
                          <p className="text-red-400">Exp: 3 Days</p>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- ARCHITECTURE & INGESTION --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hierarchy Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Precision Mapping
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              We create a 1-to-1 digital twin of your facility. Every pill has
              an exact coordinate.
            </p>
            <div className="flex items-center gap-2 text-sm font-mono text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <Box className="w-4 h-4" /> Cabinet{" "}
              <ArrowRightLeft className="w-3 h-3" />
              <Layers className="w-4 h-4" /> Drawer{" "}
              <ArrowRightLeft className="w-3 h-3" />
              <Grid3X3 className="w-4 h-4" /> Position
            </div>
          </div>
        </div>

        {/* Barcode Automation */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-teal-50 rounded-xl text-teal-600">
              <ScanBarcode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Rapid Ingestion
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            Skip manual entry. Scan the manufacturer's barcode, and Curify
            identifies the product instantly.
          </p>

          {/* Visual Scanner Animation */}
          <div className="relative h-16 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-white/80 h-8 ${
                    i % 2 === 0 ? "h-6" : "h-10"
                  }`}
                />
              ))}
            </div>
            <motion.div
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-0.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            />
          </div>
        </div>
      </div>

      {/* --- SMART TRANSFERS (The Killer Feature) --- */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Background Flow Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Truck className="w-3 h-3" /> Logistics Automation
              </div>
              <h3 className="text-2xl font-bold text-white">
                Smart Scheduled Transfers
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Step 1: Analyze */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl">
              <div className="text-slate-400 text-xs uppercase font-bold mb-2">
                Step 1: Analyze
              </div>
              <p className="text-sm text-slate-200">
                System scans all <strong>Active Tasks</strong> for the next 24h.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <ArrowRightLeft className="text-teal-500 w-6 h-6 animate-pulse" />
            </div>

            {/* Step 2: Calculate */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl">
              <div className="text-slate-400 text-xs uppercase font-bold mb-2">
                Step 2: Calculate
              </div>
              <p className="text-sm text-slate-200">
                Calculates exact dosage needed per Ward.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-teal-900/50 border border-teal-500/30 p-4 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-teal-100">The Result:</h4>
              <p className="text-sm text-teal-200/80">
                Automatically creates a transfer order from Central Storage to
                the Ward Cabinet. No manual counting required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- ZERO TOUCH SYNC & ANALYTICS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Zero Touch Visual */}
        <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Zero-Touch Deductions
            </h3>
          </div>
          <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700">
                  Nurse completes task
                </p>
                <p className="text-xs text-slate-500">Administered 100mg</p>
              </div>
            </div>
            <ArrowRightLeft className="text-slate-300 w-5 h-5" />
            <div className="text-right">
              <p className="text-sm font-bold text-slate-700">Stock Update</p>
              <div className="flex items-center justify-end gap-1 text-red-500 font-mono font-bold">
                <TrendingDown className="w-3 h-3" /> -1 Unit
              </div>
            </div>
          </div>
        </div>

        {/* Expiry Alert */}
        <div className="md:col-span-1 bg-red-50 border border-red-100 rounded-3xl p-8 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-4">
            <AlertTriangle className="w-4 h-4" /> Safety First
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-2">
            Expiry Alerts
          </h4>
          <p className="text-slate-600 text-sm mb-4">
            Never administer expired drugs. High-priority warnings for items
            nearing date.
          </p>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-red-100 flex items-center gap-3">
            <PackageSearch className="w-5 h-5 text-red-400" />
            <div>
              <div className="text-xs font-bold text-slate-700">
                Insulin Batch A
              </div>
              <div className="text-[10px] text-red-500 font-bold">
                Exp: Tomorrow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageFeature;
