"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  BarChart3, 
  ChevronRight, 
  Activity, 
  TrendingUp, 
  Users, 
  Mic 
} from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeatureAnalyticsCard = () => {
  const t = useTranslations("HomeFeatures.cards.data.visual");

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F5F9] p-6 font-sans overflow-hidden relative">
      {/* Consistent Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-teal-600/5 -skew-y-3 transform origin-top-left" />

      {/* Header Area */}
      <div className="relative z-10 flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mb-1">
            <span>{t("header.home")}</span>
            <ChevronRight size={10} />
            <span className="text-teal-600 font-bold">{t("header.category")}</span>
          </div>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">{t("header.title")}</h3>
        </div>
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
           <BarChart3 size={16} className="text-teal-500" />
        </div>
      </div>

      {/* Top Trend Row */}
      <div className="relative z-10 grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
            <div className="flex justify-between items-center text-[8px] font-black text-slate-400 uppercase tracking-widest">
                <span>{t("trend.patients_load")}</span>
                <TrendingUp size={10} className="text-teal-500" />
            </div>
            <div className="text-lg font-black text-slate-800">24</div>
            <div className="text-[9px] font-bold text-teal-500 flex items-center gap-1">
                <Activity size={8} />
                <span>{t("trend.vs_last_week")}</span>
            </div>
        </div>
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{t("trend.occupancy")}</span>
            <div className="space-y-2">
                <div className="space-y-0.5">
                    <div className="flex justify-between text-[7px] font-bold text-slate-500">
                        <span>{t("trend.rooms")}</span>
                        <span>9%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                        <div className="h-full w-[9%] bg-teal-500" />
                    </div>
                </div>
                <div className="space-y-0.5">
                    <div className="flex justify-between text-[7px] font-bold text-slate-500">
                        <span>{t("trend.shelves")}</span>
                        <span>3%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                        <div className="h-full w-[3%] bg-indigo-500" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content: Staff Actions & Donut Simulation */}
      <div className="relative z-10 grid grid-cols-5 gap-4 h-full">
         {/* Staff Performance Column */}
         <div className="col-span-3 flex flex-col gap-3">
             <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">{t("staff.title")}</span>
             <StaffAnalyticsRow name="Φωτόπουλος Ανδρέας" role={t("staff.role.pathologist")} tasks="0" tickets="11" delay={0.1} />
             <StaffAnalyticsRow name="Delikouras Vasilis" role={t("staff.role.pathologist")} tasks="0" tickets="0" isSpecial delay={0.2} />
             <StaffAnalyticsRow name="True Real" role={t("staff.role.cardiologist")} tasks="0" tickets="0" delay={0.3} />
         </div>

         {/* Demographic Donut Column */}
         <div className="col-span-2 flex flex-col items-center">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center mb-4">{t("demographics.title")}</span>
            <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-100" strokeWidth="4" />
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-teal-500" strokeWidth="4" strokeDasharray="30, 100" />
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-indigo-400" strokeWidth="4" strokeDasharray="20, 100" strokeDashoffset="-30" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-black text-slate-800">12</span>
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 w-full px-2">
                <LegendItem color="bg-teal-500" label="18-30" />
                <LegendItem color="bg-indigo-400" label="31-55" />
                <LegendItem color="bg-slate-300" label="56+" />
            </div>
         </div>
      </div>

      {/* App's Floating Mic Button */}
      <div className="absolute bottom-6 right-6 z-20 bg-teal-600 text-white p-3.5 rounded-full shadow-lg shadow-teal-600/30">
         <Mic size={20} />
      </div>

      {/* Consistent Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const StaffAnalyticsRow = ({ name, role, tasks, tickets, isSpecial, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className={`p-3 rounded-2xl border ${isSpecial ? 'bg-teal-50 border-teal-100 shadow-sm' : 'bg-white border-slate-100'} flex items-center justify-between`}
  >
    <div className="flex items-center gap-2 max-w-[50%]">
        <div className={`w-7 h-7 rounded-lg ${isSpecial ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-400'} flex items-center justify-center font-black text-[9px] shrink-0`}>
            {name.substring(0, 1)}
        </div>
        <div className="flex flex-col truncate">
            <span className="text-[9px] font-bold text-slate-700 truncate">{name}</span>
            <span className="text-[7px] text-slate-400">{role}</span>
        </div>
    </div>
    <div className="flex gap-3 text-right">
        <div className="flex flex-col">
            <span className="text-[6px] text-slate-400 font-black uppercase">Tasks</span>
            <span className="text-[9px] font-black text-slate-800">{tasks}</span>
        </div>
        <div className="flex flex-col">
            <span className="text-[6px] text-slate-400 font-black uppercase">Tickets</span>
            <span className="text-[9px] font-black text-slate-800">{tickets}</span>
        </div>
    </div>
  </motion.div>
);

const LegendItem = ({ color, label }: any) => (
  <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
          <span className="text-[7px] font-bold text-slate-400">{label}</span>
      </div>
  </div>
);