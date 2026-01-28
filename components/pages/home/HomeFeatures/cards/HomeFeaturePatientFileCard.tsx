"use client";
import React from "react";
import { motion } from "motion/react";
import { Search, Plus, Filter, Mic, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeaturePatientFileCard = () => {
  const t = useTranslations("HomeFeatures.cards.patients.visual");

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F5F9] p-4 md:p-6 font-sans overflow-hidden relative">
      {/* Background App-like subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-teal-600/5 -skew-y-3 transform origin-top-left" />

      {/* Header Area: Breadcrumbs + Title */}
      <div className="relative z-10 flex items-start justify-between mb-4 md:mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mb-1">
            <span>{t("header.home")}</span>
            <ChevronRight size={10} />
            <span className="text-teal-600 font-bold">{t("header.category")}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{t("header.title")}</h3>
        </div>
        <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">{t("header.simple_search")}</span>
        </div>
      </div>

      {/* Stats Row: Exact layout from app */}
      <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-8">
        <AppStatCard val="30" label={t("stats.new_patients")} trend="-93%" trendDown delay={0.1} color="bg-teal-50 text-teal-600" />
        <AppStatCard val="24" label={t("stats.active")} trend="0%" delay={0.2} color="bg-blue-50 text-blue-600" />
        <AppStatCard val="22" label={t("stats.occupied")} trend="0%" delay={0.3} color="bg-emerald-50 text-emerald-600" />
      </div>

      {/* Action Bar */}
      <div className="relative z-10 flex gap-2 mb-4 md:mb-6">
         <div className="bg-white text-slate-500 border border-slate-200 px-3 py-2 rounded-xl text-[11px] font-bold flex items-center gap-2 shadow-sm shrink-0">
            <Filter size={14} className="text-slate-400" />
            <span className="hidden md:inline">{t("actions.filters")}</span>
         </div>
         <div className="flex-1 bg-white border border-slate-200 rounded-xl flex items-center px-3 py-2 shadow-sm">
            <Search size={14} className="text-slate-300 mr-2" />
            <span className="text-xs text-slate-300 font-medium">{t("actions.search_placeholder")}</span>
         </div>
         <div className="bg-teal-600 text-white px-3 py-2 rounded-xl text-[11px] font-bold flex items-center gap-2 shadow-md shadow-teal-600/20 shrink-0">
            <Plus size={14} />
            <span className="hidden md:inline">{t("actions.new_patient")}</span>
         </div>
      </div>

      {/* Patient List: Matching the App UI exactly */}
      <div className="relative z-10 flex flex-col gap-3 flex-1 overflow-hidden">
         <AppPatientItem 
            name={t("list.patients.0.name")}
            clinical={t("list.patients.0.clinical")} 
            code="A00" 
            diag={t("list.patients.0.diag")} 
            delay={0.4} 
            labels={{ clinical: t("list.clinical"), diagnosis: t("list.diagnosis"), vitals: t("list.vitals"), notes: t("list.notes") }}
         />
         <AppPatientItem 
            name={t("list.patients.1.name")}
            clinical={t("list.patients.1.clinical")} 
            code="V95.4" 
            diag={t("list.patients.1.diag")} 
            avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop"
            delay={0.5} 
            labels={{ clinical: t("list.clinical"), diagnosis: t("list.diagnosis"), vitals: t("list.vitals"), notes: t("list.notes") }}
         />
         <AppPatientItem 
            name={t("list.patients.2.name")}
            clinical={t("list.patients.2.clinical")} 
            code="C10" 
            diag={t("list.patients.2.diag")}
            delay={0.6} 
            labels={{ clinical: t("list.clinical"), diagnosis: t("list.diagnosis"), vitals: t("list.vitals"), notes: t("list.notes") }}
         />
      </div>

      {/* App's Floating Dictation Mic */}
      <div className="absolute bottom-6 right-6 z-20 bg-teal-600 text-white p-3.5 rounded-full shadow-lg shadow-teal-600/30">
         <Mic size={20} />
      </div>

      {/* Seamless Bottom Fade for Carousel compatibility */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Sub-components to keep code clean
interface AppStatCardProps {
  val: string;
  label: string;
  trend: string;
  trendDown?: boolean;
  delay: number;
  color: string;
}

const AppStatCard = ({ val, label, trend, trendDown, delay, color }: AppStatCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-1"
  >
    <div className="flex justify-between items-start">
        <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center font-black text-sm`}>{val}</div>
        <span className={`text-[9px] font-black ${trendDown ? 'text-red-500' : 'text-teal-500'}`}>{trend}</span>
    </div>
    <div className="text-[10px] font-bold text-slate-500 mt-1 leading-tight">{label}</div>
  </motion.div>
);

interface AppPatientItemProps {
  name: string;
  clinical: string;
  code: string;
  diag: string;
  avatar?: string;
  delay: number;
  labels: {
      clinical: string;
      diagnosis: string;
      vitals: string;
      notes: string;
  }
}

const AppPatientItem = ({ name, clinical, code, diag, avatar, delay, labels }: AppPatientItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
  >
    <div className="flex justify-between items-center border-b border-slate-50 pb-2 mb-2">
        <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg overflow-hidden ${avatar ? '' : 'bg-teal-100 text-teal-600 flex items-center justify-center font-black text-[10px] relative'}`}>
                {avatar ? <img src={avatar} className="w-full h-full object-cover" alt={name} /> : name.substring(0, 2)}
            </div>
            <span className="text-xs font-bold text-slate-700">{name}</span>
        </div>
        <div className="flex gap-1">
            <div className="px-2 py-0.5 bg-cyan-50 text-cyan-600 text-[9px] rounded font-bold">{labels.vitals}</div>
            <div className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[9px] rounded font-bold">{labels.notes}</div>
        </div>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
            <span className="text-[8px] font-black text-teal-600 uppercase tracking-tighter">{labels.clinical}</span>
            <span className="text-[10px] text-slate-500 font-medium">{clinical}</span>
        </div>
        <div className="flex flex-col">
            <span className="text-[8px] font-black text-teal-600 uppercase tracking-tighter">{labels.diagnosis} {code}</span>
            <span className="text-[10px] text-slate-500 font-medium truncate">{diag}</span>
        </div>
    </div>
  </motion.div>
);