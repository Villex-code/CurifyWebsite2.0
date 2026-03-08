"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FileClock,
  History,
  Search,
  ShieldAlert,
  User,
  GitCommit,
  Trash2,
  Edit3,
  PlusCircle,
  Filter,
  Eye,
  AlertTriangle,
  ArrowRight,
  Check,
  Activity,
} from "lucide-react";

const AuditLogFeature = () => {
  const t = useTranslations("FeatureCards.audit-log");

  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: THE BLACK BOX RECORDER --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Background Matrix Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent opacity-50" />
          <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent opacity-30" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-20" />
        </div>

        <div className="relative z-20 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-6">
            <FileClock className="w-3 h-3" /> {t("hero.badge")}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.rich("hero.title", {
              br: () => <br />,
              strong: (chunks: React.ReactNode) => (
                <span className="text-teal-400">{chunks}</span>
              ),
            })}
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t.rich("hero.description", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

        {/* Visual: The Live Log Stream */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-md border border-slate-700 rounded-2xl p-6 flex flex-col gap-4">
          {/* Log Header */}
          <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-slate-400">
                {t("live.badge")}
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              {t("live.secure")}
            </div>
          </div>

          {/* Log Entries */}
          <div className="space-y-3">
            {/* Entry 1: Modification (The Diff) */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 border-l-4 border-blue-500 rounded-r-lg p-3 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex items-center gap-3 min-w-[180px]">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  NS
                </div>
                <div>
                  <div className="text-xs text-blue-400 font-bold">
                    {t("live.modification")}
                  </div>
                  <div className="text-[10px] text-slate-500">10:42:15 AM</div>
                </div>
              </div>
              <div className="flex-1 bg-black/20 rounded p-2 flex items-center gap-3 text-xs font-mono">
                <span className="text-slate-400">{t("live.dosage")}</span>
                <span className="text-red-400 line-through opacity-70">
                  500mg
                </span>
                <ArrowRight className="w-3 h-3 text-slate-500" />
                <span className="text-green-400 font-bold">1000mg</span>
              </div>
            </motion.div>

            {/* Entry 2: Creation */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 border-l-4 border-green-500 rounded-r-lg p-3 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex items-center gap-3 min-w-[180px]">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  DR
                </div>
                <div>
                  <div className="text-xs text-green-400 font-bold">
                    {t("live.creation")}
                  </div>
                  <div className="text-[10px] text-slate-500">10:45:02 AM</div>
                </div>
              </div>
              <div className="flex-1 text-xs text-slate-300">
                {t.rich("live.created_prescription", {
                  strong: (chunks: React.ReactNode) => (
                    <span className="text-white font-bold">{chunks}</span>
                  ),
                })}
              </div>
            </motion.div>

            {/* Entry 3: Deletion (Warning) */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-800/50 border-l-4 border-red-500 rounded-r-lg p-3 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex items-center gap-3 min-w-[180px]">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  AD
                </div>
                <div>
                  <div className="text-xs text-red-400 font-bold">
                    {t("live.deletion")}
                  </div>
                  <div className="text-[10px] text-slate-500">10:48:55 AM</div>
                </div>
              </div>
              <div className="flex-1 text-xs text-slate-300 flex items-center gap-2">
                <Trash2 className="w-3 h-3 text-red-400" />
                {t.rich("live.removed_file", {
                  strong: (chunks: React.ReactNode) => (
                    <span className="text-white font-bold">{chunks}</span>
                  ),
                })}
                <span className="bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded text-[9px] border border-red-500/30">
                  {t("live.irreversible")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- METRICS & FILTERS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Activity Metrics */}
        <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-600" /> {t("metrics.title")}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">
                {t("metrics.modifications")}
              </div>
              <div className="text-2xl font-bold text-blue-600">1,240</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">
                {t("metrics.creations")}
              </div>
              <div className="text-2xl font-bold text-green-600">856</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">
                {t("metrics.deletions")}
              </div>
              <div className="text-2xl font-bold text-red-500">12</div>
            </div>
          </div>
        </div>

        {/* Search Engine */}
        <div className="md:col-span-1 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-inner">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-400 uppercase tracking-wide">
            <Filter className="w-4 h-4" /> {t("search.badge")}
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-4">
            {t("search.title")}
          </h4>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <User className="w-3 h-3 text-slate-400" /> {t("search.actor")}
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <Edit3 className="w-3 h-3 text-slate-400" /> {t("search.action")}
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <History className="w-3 h-3 text-slate-400" /> {t("search.date")}
            </div>
          </div>
        </div>
      </div>

      {/* --- THE DIFF ENGINE (Granular Detail) --- */}
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            <GitCommit className="w-3 h-3" /> {t("diff.badge")}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {t("diff.title")}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            {t.rich("diff.description", {
              strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

        {/* Visual: The Diff Comparison */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
          {/* Before */}
          <div className="relative">
            <div className="absolute -top-3 left-4 bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-1 rounded uppercase">
              {t("diff.before")}
            </div>
            <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 opacity-70 grayscale">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold">
                  {t("diff.prescription")}
                </span>
              </div>
              <div className="text-sm font-mono text-slate-800">500mg</div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center py-2 md:py-0">
            <ArrowRight className="w-6 h-6 text-blue-500" />
          </div>

          {/* After */}
          <div className="relative">
            <div className="absolute -top-3 left-4 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase">
              {t("diff.after")}
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-blue-100 shadow-lg">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-blue-900">
                  {t("diff.prescription")}
                </span>
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <div className="text-sm font-mono text-slate-900 font-bold bg-yellow-50 inline-block px-1 rounded">
                1000mg
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SAFETY & ACCOUNTABILITY --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Security */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex items-center gap-6">
          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
            <ShieldAlert className="w-8 h-8 text-teal-400" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">{t("security.title")}</h4>
            <p className="text-slate-400 text-sm">
              {t("security.description")}
            </p>
          </div>
        </div>

        {/* Error Resolution */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">
              {t("error.title")}
            </h4>
            <p className="text-slate-500 text-sm">{t("error.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ICON HELPER ---
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

export default AuditLogFeature;
