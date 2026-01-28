"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Mic, 
  ChevronRight, 
  CornerDownLeft, 
  Calendar, 
  UserPlus, 
  ArrowUp,
  Sparkles
} from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeatureAIAgentCard = () => {
  const t = useTranslations("HomeFeatures.cards.ai.visual");

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
           <Sparkles size={16} className="text-amber-400" />
        </div>
      </div>

      {/* AI Hub Simulation: Replicating the Modal content */}
      <div className="relative z-10 flex-1 flex flex-col items-center text-center">
        
        {/* Glowing Mic Button */}
        <motion.div 
           animate={{ boxShadow: ["0 0 0px rgba(13,148,136,0)", "0 0 20px rgba(13,148,136,0.3)", "0 0 0px rgba(13,148,136,0)"] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-teal-600/20 mb-4 cursor-pointer hover:scale-105 transition-transform"
        >
            <Mic size={28} />
        </motion.div>
        
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">{t("features.mic_label")}</span>
        <h4 className="text-xl font-black text-teal-600 leading-tight mb-6">{t("features.main_title")}</h4>

        {/* Input Box Simulation */}
        <div className="w-full bg-white rounded-3xl border-2 border-teal-500/10 p-4 shadow-xl shadow-slate-200/50 mb-8 relative">
            <div className="text-left text-[11px] text-slate-400 font-medium mb-12">
                {t("features.input_placeholder")}
            </div>
            <div className="absolute bottom-3 right-3 w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center text-slate-300">
                <ArrowUp size={16} />
            </div>
            
            {/* Keyboard hint */}
            <div className="flex justify-center gap-4 text-[8px] font-bold text-slate-300">
                <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 rounded">Enter</span>
                    <span>{t("features.keyboard.send")}</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 rounded">Shift + Enter</span>
                    <span>{t("features.keyboard.newline")}</span>
                </div>
            </div>
        </div>

        {/* Suggestion Cards Area */}
        <div className="w-full grid grid-cols-2 gap-3 mb-10">
            <SuggestionCard 
                icon={<Calendar size={14} />} 
                title={t("features.suggestions.appointment.title")}
                desc={t("features.suggestions.appointment.desc")}
                delay={0.2}
            />
            <SuggestionCard 
                icon={<UserPlus size={14} />} 
                title={t("features.suggestions.patient.title")}
                desc={t("features.suggestions.patient.desc")}
                delay={0.3}
            />
        </div>
      </div>

      {/* Consistent Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const SuggestionCard = ({ icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-left flex flex-col gap-1.5"
  >
    <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 border border-slate-100">
        {icon}
    </div>
    <div className="text-[10px] font-black text-slate-800">{title}</div>
    <div className="text-[8px] font-medium text-slate-400 leading-tight">{desc}</div>
  </motion.div>
);