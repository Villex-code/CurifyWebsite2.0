"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  Sparkles,
  Globe,
  RefreshCw,
  Box,
  LayoutTemplate,
  Plus,
  CheckSquare,
  Binary,
  ArrowDown,
  Settings,
} from "lucide-react";

const ProtocolsFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: THE PROTOCOL ENGINE --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Background Schematic */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-20 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
            <ClipboardList className="w-3 h-3" /> Standardization
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Clinical standards, <br />
            <span className="text-purple-400">automated.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Don't rely on memory. Define <strong>Protocols</strong> (bundles)
            and <strong>Custom Templates</strong> to ensure every patient
            receives the exact standard of care, every time.
          </p>
        </div>

        {/* Visual: The Bundle Expansion */}
        <div className="relative z-10 w-full flex justify-center items-start min-h-[250px]">
          <div className="relative flex flex-col items-center">
            {/* The Protocol Card (Trigger) */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="z-20 bg-purple-600 text-white px-6 py-4 rounded-2xl shadow-xl shadow-purple-900/50 border border-purple-500 flex items-center gap-3 cursor-pointer"
            >
              <div className="p-1.5 bg-white/20 rounded-lg">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Post-Op Protocol</h4>
                <span className="text-[10px] text-purple-200 uppercase tracking-wide">
                  1 Click Apply
                </span>
              </div>
            </motion.div>

            {/* The Flow Lines */}
            <div className="h-8 w-px bg-slate-600 my-2" />
            <div className="w-64 h-px bg-slate-600 mb-4" />

            {/* The Output Items */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="h-4 w-px bg-slate-600" />
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-slate-800 border border-slate-700 p-3 rounded-xl w-32"
                >
                  <span className="text-[10px] text-teal-400 font-bold block mb-1">
                    MEDICATION
                  </span>
                  <div className="text-xs text-white">Painkiller IV</div>
                  <div className="text-[10px] text-slate-400">500mg • 8h</div>
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="h-4 w-px bg-slate-600" />
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-slate-800 border border-slate-700 p-3 rounded-xl w-32"
                >
                  <span className="text-[10px] text-blue-400 font-bold block mb-1">
                    TASK
                  </span>
                  <div className="text-xs text-white">Change Dressing</div>
                  <div className="text-[10px] text-slate-400">
                    Nursing Staff
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="h-4 w-px bg-slate-600" />
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-slate-800 border border-slate-700 p-3 rounded-xl w-32"
                >
                  <span className="text-[10px] text-orange-400 font-bold block mb-1">
                    DIET
                  </span>
                  <div className="text-xs text-white">Soft Foods</div>
                  <div className="text-[10px] text-slate-400">
                    Kitchen Order
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- NO-CODE BUILDER (Bento) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Text Explanation */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <PenTool className="w-6 h-6 text-blue-600" /> No-Code Form Builder
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            Cardiology needs EKG notes. Dermatology needs skin maps. Curify
            allows admins to design <strong>Custom Medical Records</strong> with
            a drag-and-drop interface.
          </p>

          <div className="flex flex-wrap gap-2">
            <FeatureBadge icon={Settings} text="Custom Fields" />
            <FeatureBadge icon={LayoutTemplate} text="Groups" />
            <FeatureBadge icon={Binary} text="Logic" />
          </div>
        </div>

        {/* Visual: The Builder Interface */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex gap-4 h-64">
            {/* Sidebar Palette */}
            <div className="w-1/4 bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col gap-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                Fields
              </div>
              <DraggableItem label="Text" />
              <DraggableItem label="Date / Time" />
              <DraggableItem label="Checkbox" />
              <DraggableItem label="File Upload" />
              <div className="mt-auto p-2 bg-purple-100 rounded-lg border border-purple-200">
                <div className="flex items-center gap-1 text-[10px] font-bold text-purple-700">
                  <Sparkles className="w-3 h-3" /> AI Field
                </div>
              </div>
            </div>

            {/* Canvas */}
            <div className="flex-1 bg-slate-50/50 rounded-xl border-2 border-dashed border-slate-200 relative p-4 flex flex-col gap-3">
              <div className="absolute top-2 right-2 text-[10px] text-slate-400 font-bold uppercase">
                Canvas
              </div>

              {/* Existing Field */}
              <div className="w-full bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                <div className="text-xs font-bold text-slate-700 mb-1">
                  Patient Symptoms
                </div>
                <div className="h-2 w-full bg-slate-100 rounded" />
              </div>

              {/* Existing Field */}
              <div className="w-full bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                <div className="text-xs font-bold text-slate-700 mb-1">
                  Date of Onset
                </div>
                <div className="h-2 w-1/2 bg-slate-100 rounded" />
              </div>

              {/* Drop Zone */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full h-12 border-2 border-blue-400/50 border-dashed rounded-lg bg-blue-50/50 flex items-center justify-center"
              >
                <Plus className="w-4 h-4 text-blue-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ADVANCED BEHAVIORS (Cards) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Public Link */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-teal-200 transition-colors group">
          <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
            <Globe className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg mb-2">
            Public Links
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Generate a URL for patient intake forms. Submissions directly
            populate the EMR profile.
          </p>
        </div>

        {/* Singleton */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-blue-200 transition-colors group">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg mb-2">
            Singleton Forms
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            "Update only" templates. Perfect for a "Patient Summary" card that
            evolves over time.
          </p>
        </div>

        {/* Nested */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-orange-200 transition-colors group">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
            <Box className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg mb-2">
            Nested Helpers
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Build "sub-components" (e.g., Address Block) and reuse them inside
            multiple larger forms.
          </p>
        </div>
      </div>

      {/* --- THE AI FIELD (Smart Logic) --- */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
        {/* Abstract Brain */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" /> Smart Computation
            </div>
            <h3 className="text-3xl font-bold mb-4">The AI Field</h3>
            <p className="text-purple-100/80 text-lg leading-relaxed">
              Don't ask users to do math. A special field type that runs logic
              based on other data points instantly.
            </p>
          </div>

          {/* Interactive Logic Visual */}
          <div className="flex-1 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-4">
            {/* Input */}
            <div className="flex-1 bg-slate-900/50 rounded-xl p-3 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                Date of Birth
              </div>
              <div className="text-sm font-mono">14/05/1990</div>
            </div>

            {/* Processing */}
            <div className="flex flex-col items-center text-purple-400">
              <div className="w-8 h-1 bg-purple-500/50 rounded-full mb-1" />
              <Settings className="w-5 h-5 animate-spin-slow" />
              <div className="w-8 h-1 bg-purple-500/50 rounded-full mt-1" />
            </div>

            {/* Output */}
            <div className="flex-1 bg-purple-500/20 rounded-xl p-3 border border-purple-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-purple-500/10 animate-pulse" />
              <div className="relative z-10">
                <div className="text-[10px] text-purple-200 uppercase font-bold mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Auto-Calculated
                </div>
                <div className="text-xl font-bold text-white">34 Yrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const FeatureBadge = ({ icon: Icon, text }: any) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold">
    <Icon className="w-3 h-3" /> {text}
  </span>
);

const DraggableItem = ({ label }: { label: string }) => (
  <div className="bg-white border border-slate-200 rounded p-2 shadow-sm cursor-grab active:cursor-grabbing flex items-center gap-2">
    <div className="flex flex-col gap-0.5">
      <div className="w-1 h-1 bg-slate-300 rounded-full" />
      <div className="w-1 h-1 bg-slate-300 rounded-full" />
      <div className="w-1 h-1 bg-slate-300 rounded-full" />
    </div>
    <span className="text-xs font-medium text-slate-600">{label}</span>
  </div>
);

export default ProtocolsFeature;
