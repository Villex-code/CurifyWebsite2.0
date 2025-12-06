"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Folder,
  FileText,
  Image as ImageIcon,
  Search,
  Filter,
  ShieldCheck,
  Lock,
  User,
  Calendar,
  FileCheck,
  Eye,
  EyeOff,
} from "lucide-react";

const FileManagerFeature = () => {
  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: THE MEDICAL FILE OS --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Background Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#2dd4bf 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-20 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Folder className="w-3 h-3" /> Digital Assets
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your organization's <br />
            <span className="text-orange-400">central archive.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            A desktop-class file manager built for the web. Organize thousands
            of scans, consent forms, and reports in a structured, nested
            hierarchy.
          </p>
        </div>

        {/* Visual: The File Explorer Interface */}
        <div className="relative z-10 w-full bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex h-[300px]">
          {/* Sidebar (Folders) */}
          <div className="w-1/3 border-r border-slate-700 p-4 flex flex-col gap-2 bg-slate-900/50">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
              Library
            </div>
            <div className="flex items-center gap-2 text-teal-400 bg-teal-500/10 px-3 py-2 rounded-lg border border-teal-500/20">
              <Folder className="w-4 h-4 fill-teal-500/20" /> Cardiology
            </div>
            <div className="flex items-center gap-2 text-slate-400 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors ml-4">
              <Folder className="w-4 h-4" /> 2024
            </div>
            <div className="flex items-center gap-2 text-slate-400 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors ml-8">
              <Folder className="w-4 h-4" /> January
            </div>
            <div className="flex items-center gap-2 text-slate-400 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              <Folder className="w-4 h-4" /> Neurology
            </div>
          </div>

          {/* Main Area (Files) */}
          <div className="flex-1 p-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <span>Cardiology</span> <span className="opacity-50">/</span>
              <span>2024</span> <span className="opacity-50">/</span>
              <span className="text-white font-medium">January</span>
            </div>

            {/* File Grid */}
            <div className="grid grid-cols-3 gap-4">
              {["MRI_Scan_001.png", "Blood_Panel.pdf", "Consent_Form.pdf"].map(
                (file, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-800 hover:bg-slate-700 border border-slate-600 p-4 rounded-xl flex flex-col items-center gap-3 group cursor-pointer transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                      {file.endsWith("png") ? (
                        <ImageIcon className="w-5 h-5 text-purple-400" />
                      ) : (
                        <FileText className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                    <span className="text-xs text-slate-300 font-medium truncate w-full text-center">
                      {file}
                    </span>
                  </motion.div>
                )
              )}
              {/* Empty Slot visual */}
              <div className="border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center opacity-50">
                <div className="w-6 h-6 text-slate-600">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEARCH & FILTERING ENGINE --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Text Side */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Search className="w-6 h-6 text-teal-600" /> Find a needle in a
            haystack.
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            The search engine scans across all patients and folders
            simultaneously. Use granular filters to trace documents by{" "}
            <strong>Uploader</strong> (Accountability) or{" "}
            <strong>Date Range</strong> (Specific Window).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <FilterTag label="By Patient" icon={User} color="blue" />
            <FilterTag label="By Uploader" icon={ShieldCheck} color="purple" />
            <FilterTag label="By File Type" icon={FileCheck} color="orange" />
            <FilterTag label="By Date" icon={Calendar} color="green" />
          </div>
        </div>

        {/* Visual Side: Filter Stack */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          {/* Search Bar Mockup */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-6">
            <Search className="w-5 h-5 text-slate-400" />
            <div className="text-slate-800 font-medium text-sm">
              Dr. Papadopoulos
            </div>
            <div className="ml-auto flex gap-2">
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-[10px] font-bold uppercase">
                Uploader
              </span>
              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-[10px] font-bold uppercase">
                X-Ray
              </span>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3">
            <ResultRow
              name="Chest_XRay_04.png"
              patient="George K."
              date="Yesterday"
            />
            <ResultRow
              name="Lab_Results_Q3.pdf"
              patient="Maria P."
              date="2 days ago"
            />
            <div className="p-3 rounded-xl border border-dashed border-slate-200 text-center text-xs text-slate-400">
              34 more files found...
            </div>
          </div>
        </div>
      </div>

      {/* --- SECURITY INHERITANCE (The Feature Highlight) --- */}
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-6">
            <Lock className="w-3 h-3" /> Smart Security
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Global Search, Scoped Access.
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-10">
            The Global File Finder <strong>does not bypass</strong> patient
            profile security. If a user is restricted from viewing a VIP
            patient, those files will remain invisible in the global search
            results. Zero leaks.
          </p>
        </div>

        {/* Visual: Security Gate Logic */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Scenario A: Access Granted */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Dr. Smith
                </div>
                <div className="text-xs text-slate-500">
                  Searching "Patient A"
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                5 Files Found
              </div>
            </div>
          </div>

          {/* Scenario B: Access Denied */}
          <div className="bg-slate-50 rounded-2xl p-6 shadow-inner border border-slate-200 flex items-center justify-between relative overflow-hidden opacity-80">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                <EyeOff className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-700">
                  Nurse Bob
                </div>
                <div className="text-xs text-slate-400">
                  Searching "VIP Patient"
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded flex items-center gap-1">
                <Lock className="w-3 h-3" /> 0 Results
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const FilterTag = ({ label, icon: Icon, color }: any) => {
  const colors: any = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    green: "bg-green-50 text-green-600 border-green-100",
  };
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${colors[color]}`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-xs font-bold">{label}</span>
    </div>
  );
};

const ResultRow = ({ name, patient, date }: any) => (
  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
    <div className="flex items-center gap-3">
      <FileText className="w-5 h-5 text-slate-400" />
      <div>
        <div className="text-sm font-bold text-slate-700">{name}</div>
        <div className="text-[10px] text-slate-500">Patient: {patient}</div>
      </div>
    </div>
    <div className="text-xs text-slate-400">{date}</div>
  </div>
);

export default FileManagerFeature;
