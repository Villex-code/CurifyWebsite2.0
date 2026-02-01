"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  LineChart,
  Users,
  Sparkles,
  ArrowRight,
  Palette,
} from "lucide-react";

export type RoleType =
  | "frontend"
  | "ai"
  | "marketing"
  | "sales"
  | "wildcard"
  | null;

interface ApplicationSelectProps {
  onSelectRole: (role: RoleType) => void;
}

import { useTranslations } from "next-intl";

const ApplicationSelect = ({ onSelectRole }: ApplicationSelectProps) => {
  const t = useTranslations("application.select");
  const tRoles = useTranslations("application.questions.role.options");
  const tRolesDesc = useTranslations("application.rolesDescriptions");

  const roles = [
    {
      id: "frontend",
      title: tRoles("frontend"),
      subtitle: tRolesDesc("frontend.subtitle"),
      icon: Code2,
      description: tRolesDesc("frontend.description"),
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600",
    },
    {
      id: "ai",
      title: tRoles("ai"),
      subtitle: tRolesDesc("ai.subtitle"),
      icon: BrainCircuit,
      description: tRolesDesc("ai.description"),
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-teal-600",
    },
    {
      id: "marketing",
      title: tRoles("marketing"),
      subtitle: tRolesDesc("marketing.subtitle"),
      icon: LineChart,
      description: tRolesDesc("marketing.description"),
      gradient: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-600",
    },
    {
      id: "sales",
      title: tRoles("sales"),
      subtitle: tRolesDesc("sales.subtitle"),
      icon: Users,
      description: tRolesDesc("sales.description"),
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600",
    },
  ];

  // Recreated Cosmic Button logic for selection action
  const SelectButton = ({
    text,
    onClick,
  }: {
    text: string;
    onClick: () => void;
  }) => {
    return (
      <div
        className="relative inline-block group text-sm rounded-full cursor-pointer"
        onClick={onClick}
      >
        <button
          type="button"
          className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.05] text-white tracking-tight rounded-full py-3 px-6 items-center justify-center overflow-hidden"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
            background:
              "radial-gradient(ellipse at bottom, #0f766e 0%, #0d9488 100%)",
          }}
        >
          <span className="relative z-10 font-semibold text-sm flex items-center gap-2">
            {text}{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
            }}
          ></span>
        </button>
        <span
          className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-32 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 50%, rgba(20, 184, 166, 0.6), rgba(20, 184, 166, 0.3) 35%, transparent 70%)",
            filter: "blur(10px) saturate(120%)",
          }}
          aria-hidden="true"
        ></span>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-[#EAE8E1] rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* MOST WANTED TAG for Frontend Engineer */}
            {role.id === "frontend" && (
              <div className="absolute top-10 left-0 z-20 rotate-[-30deg]">
                <div className="bg-teal-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-2xl  shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white fill-white" />
                  {t("mostWanted")}
                </div>
              </div>
            )}

            {/* Custom Background Graphic for each card */}
            <div
              className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${role.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/2 -translate-y-1/2`}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 text-left w-full md:w-auto">
              <div
                className={`p-4 bg-white rounded-2xl shadow-sm border border-slate-100 ${role.iconColor} group-hover:scale-110 transition-transform duration-500`}
              >
                <role.icon className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {role.title}
                  </h3>
                  <span className="inline-flex max-w-fit items-center px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-200">
                    {role.subtitle}
                  </span>
                </div>
                <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-auto flex justify-start md:justify-end">
              <SelectButton
                text={t("applyNow")}
                onClick={() => onSelectRole(role.id as RoleType)}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Wildcard Option - Distinct Style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative group cursor-pointer"
        onClick={() => onSelectRole("wildcard")}
      >
        {/* Animated Border Gradient */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-[2.6rem] blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-gradient-xy" />

        <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px] animate-pulse" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 group-hover:rotate-12 transition-transform duration-500">
              <Sparkles className="w-10 h-10 text-yellow-300" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t("wildcardTitle")}
              </h3>
              <p className="text-slate-300 max-w-xl text-lg leading-relaxed">
                {t("wildcardDescription")}
              </p>
            </div>
          </div>

          <div className="relative z-10 min-w-[160px]">
            <button className="w-full px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-white/10 flex items-center justify-center gap-2">
              {t("wildcardButton")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationSelect;
