"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Plus, 
  Calendar as CalendarIcon 
} from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeatureAppointmentsCard = () => {
  const t = useTranslations("HomeFeatures.cards.appointments.visual");

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F5F9] p-4 md:p-6 font-sans overflow-hidden relative">
      {/* Consistent Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-teal-600/5 -skew-y-3 transform origin-top-left" />

      {/* Header Area: Consistent with other cards */}
      <div className="relative z-10 flex items-start justify-between mb-4 md:mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mb-1">
            <span>{t("header.home")}</span>
            <ChevronRight size={10} />
            <span className="text-teal-600 font-bold">{t("header.category")}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{t("header.title")}</h3>
        </div>
        <div className="flex items-center gap-2">
          
            <div className="bg-teal-600 text-white px-3 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2 shadow-md shadow-teal-600/20">
                <Plus size={14} />
                <span className="hidden sm:inline">{t("header.new_appointment")}</span>
            </div>
        </div>
      </div>

      {/* Main Calendar Content Area */}
      <div className="relative z-10 flex gap-4 h-full">
        {/* The Main Schedule Grid */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
            <div className="flex border-b border-slate-100 p-3 justify-between items-center bg-slate-50/30">
                <div className="flex items-center gap-2">
                    <div className="p-1 hover:bg-white rounded-md transition-colors cursor-pointer">
                        <ChevronLeft size={14} className="text-slate-400" />
                    </div>
                    <span className="text-[11px] font-black text-slate-700">26 {t("schedule.jan")} - 1 Feb</span>
                    <div className="p-1 hover:bg-white rounded-md transition-colors cursor-pointer">
                        <ChevronRight size={14} className="text-slate-400" />
                    </div>
                </div>
                <CalendarIcon size={14} className="text-teal-500" />
            </div>

            {/* Grid Body */}
            <div className="relative flex-1 p-4 flex flex-col gap-6">
                {/* Time Scale Lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-full h-[1px] bg-slate-50 relative">
                        <span className="absolute -left-1 -top-2 text-[8px] text-slate-300 font-bold">0{9+i}:00</span>
                    </div>
                ))}

                {/* Live "Current Time" Marker */}
                <div className="absolute top-[35%] left-0 w-full z-20 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 ml-8 shadow-[0_0_10px_rgba(239,68,68,0.6)] border-2 border-white" />
                    <div className="flex-1 h-[1px] bg-red-500/40" />
                </div>

                {/* Appointment Block 1: Teal */}
                <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-[48%] left-12 right-6 bg-teal-600 rounded-xl p-3 shadow-lg shadow-teal-600/20 border-l-4 border-teal-400 z-10"
                >
                    <div className="text-[10px] font-black text-white">{t("schedule.general_checkup")}</div>
                    <div className="flex items-center gap-1 text-[8px] text-teal-100 font-bold mt-1">
                        <Clock size={10} />
                        <span>11:30 - 12:00</span>
                    </div>
                </motion.div>

                {/* Appointment Block 2: Indigo */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-[18%] left-10 right-14 bg-indigo-500 rounded-xl p-3 shadow-lg shadow-indigo-500/20 border-l-4 border-indigo-300 z-10"
                >
                    <div className="text-[10px] font-black text-white">{t("schedule.follow_up")}</div>
                    <div className="flex items-center gap-1 text-[8px] text-indigo-100 font-bold mt-1">
                        <Clock size={10} />
                        <span>09:45 - 10:15</span>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Floating Mini-Calendar Sidebar */}
        <div className="hidden lg:flex w-24 flex-col gap-4">
             <div className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm">
                <div className="text-[8px] font-black text-slate-400 mb-2 uppercase tracking-widest text-center">{t("schedule.jan")}</div>
                <div className="grid grid-cols-7 gap-0.5 text-center">
                    {Array.from({length: 21}).map((_, i) => (
                        <div key={i} className={`text-[7px] py-1 rounded-md font-bold ${i === 12 ? 'bg-teal-500 text-white' : 'text-slate-300'}`}>
                            {i + 1}
                        </div>
                    ))}
                </div>
             </div>

             <div className="bg-white rounded-2xl p-2 border border-slate-100 shadow-sm flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-[10px]">VD</div>
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             </div>
        </div>
      </div>

      {/* Consistent Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};