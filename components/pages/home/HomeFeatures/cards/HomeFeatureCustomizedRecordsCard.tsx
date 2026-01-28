"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Settings2, 
  Mic, 
  ChevronDown, 
  Calendar, 
  Calculator 
} from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeatureCustomizedRecordsCard = () => {
    const t = useTranslations("HomeFeatures.cards.customization.visual");
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F5F9] p-6 font-sans overflow-hidden relative">
      {/* Consistent Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-teal-600/5 -skew-y-3 transform origin-top-left" />

      {/* Header Area: Matches the rest of the carousel */}
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
           <Settings2 size={16} className="text-teal-500" />
        </div>
      </div>

      {/* App Tab Simulation */}
      <div className="relative z-10 flex gap-1 mb-6 overflow-x-auto pb-1 scrollbar-none">
        {[t("tabs.general"), t("tabs.visits"), t("tabs.history"), t("tabs.clinical")].map((tab, i) => (
            <div key={i} className={`px-3 py-1.5 rounded-lg text-[9px] font-black whitespace-nowrap transition-colors ${i === 0 ? 'bg-teal-600 text-white' : 'bg-white text-slate-400 border border-slate-100'}`}>
                {tab}
            </div>
        ))}
      </div>

      {/* Main Record Content Area */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Basic Info Section Simulation */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{t("form.title")}</span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                <AppFormField label={t("form.surname")} value="Fotopoulos" />
                <AppFormField label={t("form.name")} value="Andreas" />
                
                <div className="col-span-2">
                    <AppFormField label={t("form.email")} value="fotopoulos.a@gmail.com" />
                </div>

                {/* Auto-calculated Age field from app */}
                <div className="col-span-2">
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-1">
                            <Calculator size={10} className="text-teal-500" />
                            <span className="text-[8px] font-black text-teal-600 uppercase">{t("form.auto_calc")}</span>
                        </div>
                        <div className="bg-teal-50 border border-teal-100 p-3 rounded-xl text-center text-xs font-black text-teal-800">
                            {t("form.age_result")}
                        </div>
                    </div>
                </div>

                <AppFormField label={t("form.birth")} value="15/09/2003" icon={<Calendar size={12} />} />
                <AppFormField label={t("form.gender")} value={t("form.gender_val")} icon={<ChevronDown size={12} />} />
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

// Internal Form Helper
const AppFormField = ({ label, value, icon }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col gap-1.5"
  >
    <span className="text-[9px] font-bold text-slate-400">{label}</span>
    <div className="bg-white border border-slate-200 px-3 py-2 rounded-xl flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-700">{value}</span>
        {icon && <span className="text-slate-300">{icon}</span>}
    </div>
  </motion.div>
);