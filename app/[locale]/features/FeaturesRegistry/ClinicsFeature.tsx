"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Building2,
  DoorOpen,
  Bed,
  Network,
  Plus,
  Settings,
  Globe,
  LayoutDashboard,
  Hash,
  Baby,
  Shield,
} from "lucide-react";

const ClinicsFeature = () => {
  const t = useTranslations("FeatureCards.clinics-infrastructure");

  return (
    <div className="space-y-16">
      {/* --- HERO VISUAL: THE DIGITAL BLUEPRINT --- */}
      <div className="relative w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl border border-slate-800">
        {/* Blueprint Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-20 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Network className="w-3 h-3" /> {t("hero.badge")}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.rich("hero.title", {
              br: () => <br />,
              strong: (chunks: React.ReactNode) => (
                <span className="text-blue-400">{chunks}</span>
              ),
            })}
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t("hero.description")}
          </p>
        </div>

        {/* Visual: The Hierarchy Tree */}
        <div className="relative z-10 w-full flex justify-center pt-4">
          <div className="flex flex-col items-center gap-8 w-full max-w-3xl">
            {/* Level 1: The Clinic (Parent) */}
            <div className="relative bg-slate-800 border-2 border-blue-500/50 rounded-2xl p-4 flex items-center gap-4 w-64 justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <Building2 className="w-6 h-6 text-blue-400" />
              <span className="text-white font-bold">
                {t("hierarchy.hospital")}
              </span>
              {/* Connector Line */}
              <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-slate-600" />
            </div>

            {/* Level 2: Wards */}
            <div className="flex justify-center gap-8 md:gap-16 w-full relative">
              {/* Horizontal Connector */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[60%] h-px bg-slate-600" />

              {/* Ward 1 */}
              <div className="flex flex-col items-center relative">
                <div className="absolute -top-8 left-1/2 w-px h-8 bg-slate-600" />
                <div className="bg-slate-800 border border-slate-600 rounded-xl p-3 flex items-center gap-3 w-40 justify-center">
                  <span className="text-sm font-bold text-slate-200">
                    {t("hierarchy.cardiology")}
                  </span>
                </div>
                <div className="h-6 w-px bg-slate-700" />
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center">
                    <DoorOpen className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="w-8 h-8 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center">
                    <DoorOpen className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
              </div>

              {/* Ward 2 (Highlighted) */}
              <div className="flex flex-col items-center relative">
                <div className="absolute -top-8 left-1/2 w-px h-8 bg-slate-600" />
                <div className="bg-slate-800 border border-teal-500 rounded-xl p-3 flex items-center gap-3 w-40 justify-center shadow-lg">
                  <span className="text-sm font-bold text-white">
                    {t("hierarchy.icu")}
                  </span>
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                </div>
                <div className="h-6 w-px bg-teal-500/50" />
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-teal-900/30 border border-teal-500/50 rounded-lg flex items-center justify-center">
                    <Bed className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="w-10 h-10 bg-teal-900/30 border border-teal-500/50 rounded-lg flex items-center justify-center">
                    <Bed className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
              </div>

              {/* Ward 3 */}
              <div className="flex flex-col items-center relative hidden md:flex">
                <div className="absolute -top-8 left-1/2 w-px h-8 bg-slate-600" />
                <div className="bg-slate-800 border border-slate-600 rounded-xl p-3 flex items-center gap-3 w-40 justify-center">
                  <span className="text-sm font-bold text-slate-200">
                    {t("hierarchy.pediatrics")}
                  </span>
                </div>
                <div className="h-6 w-px bg-slate-700" />
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center">
                    <DoorOpen className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CLINIC MANAGEMENT (The Container) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Attributes */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {t("config.title")}
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t("config.description")}
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm font-bold text-slate-700">
                {t("config.display_name")}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {t("config.icu_name")}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm font-bold text-slate-700">
                {t("config.direct_line")}
              </span>
              <span className="text-xs font-mono text-slate-500">
                +30 210...
              </span>
            </div>
          </div>
        </div>

        {/* Government ID (Integration) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold text-xs uppercase tracking-widest">
            <Globe className="w-4 h-4" /> {t("interop.badge")}
          </div>
          <h4 className="text-2xl font-bold mb-4">{t("interop.title")}</h4>
          <p className="text-slate-400 text-sm mb-8">
            {t("interop.description")}
          </p>
          <div className="bg-black/30 border border-white/10 p-4 rounded-xl flex items-center gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <Hash className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold">
                {t("interop.external_code")}
              </span>
              <div className="text-lg font-mono tracking-wider">EOPYY-9921</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ROOM MANAGEMENT (The Units) --- */}
      <div>
        <div className="mb-8 flex items-end justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {t("rooms.title")}
            </h3>
            <p className="text-slate-600">{t("rooms.description")}</p>
          </div>
          {/* Contextual Add Visual */}
          <div className="hidden md:flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-xs font-bold border border-teal-100">
            <Plus className="w-4 h-4" />
            <span>{t("rooms.quick_add")}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Capacity */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm group hover:border-teal-200 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-slate-100 rounded-xl text-slate-500 group-hover:text-teal-600 group-hover:bg-teal-50 transition-colors">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase">
                {t("rooms.capacity_label")}
              </span>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">
              2/4{" "}
              <span className="text-lg text-slate-400 font-medium">
                {t("rooms.beds_unit")}
              </span>
            </div>
            {/* Bed Visuals */}
            <div className="flex gap-2 mt-4">
              <div className="h-2 w-full bg-teal-500 rounded-full" />
              <div className="h-2 w-full bg-teal-500 rounded-full" />
              <div className="h-2 w-full bg-slate-200 rounded-full" />
              <div className="h-2 w-full bg-slate-200 rounded-full" />
            </div>
          </div>

          {/* Card 2: Room Types */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm group hover:border-purple-200 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-slate-100 rounded-xl text-slate-500 group-hover:text-purple-600 group-hover:bg-purple-50 transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase">
                {t("rooms.cat_label")}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
                <Bed className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  {t("rooms.std_ward")}
                </span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-purple-50 rounded-lg border border-purple-100">
                <Baby className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-bold text-purple-700">
                  {t("rooms.incubator")}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Drill Down */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-inner flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              {t("rooms.list_view")}
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-[150px]">
              {t("rooms.list_desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ICON HELPER ---
function Search({ className }: { className?: string }) {
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
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export default ClinicsFeature;
