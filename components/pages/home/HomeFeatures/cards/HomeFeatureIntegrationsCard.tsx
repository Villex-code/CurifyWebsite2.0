"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Link2, 
  RefreshCw, 
  ShieldCheck, 
  Database, 
  Activity, 
  Cloud 
} from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeatureIntegrationsCard = () => {
  const t = useTranslations("HomeFeatures.cards.integrations.visual");

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
           <Cloud size={16} className="text-teal-500" />
        </div>
      </div>

      {/* Connectivity Hub Visualization */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        
        {/* Central Hub Node */}
        <div className="relative mb-12">
            <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-20 h-20 bg-white rounded-3xl shadow-2xl shadow-teal-600/10 border border-teal-100 flex items-center justify-center relative z-20"
            >
                <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white">
                    <Link2 size={24} />
                </div>
            </motion.div>
            
            {/* Pulsing Rings */}
            <div className="absolute inset-0 -m-4 border-2 border-teal-500/10 rounded-[2.5rem] animate-ping opacity-20" />
            <div className="absolute inset-0 -m-8 border border-teal-500/5 rounded-[3.5rem] animate-pulse opacity-10" />
        </div>

        {/* Integration Satellite Cards */}
        <div className="w-full grid grid-cols-1 gap-3 px-4 relative z-20">
            <IntegrationNode 
                label={t("nodes.idika.label")} 
                status={t("nodes.idika.status")} 
                icon={<Database size={14} />} 
                delay={0.1}
            />
            <IntegrationNode 
                label={t("nodes.mydata.label")} 
                status={t("nodes.mydata.status")} 
                icon={<Activity size={14} />} 
                isSyncing
                delay={0.2}
            />
            <IntegrationNode 
                label={t("nodes.eopyy.label")} 
                status={t("nodes.eopyy.status")} 
                icon={<ShieldCheck size={14} />} 
                delay={0.3}
            />
        </div>

        {/* Sync Metadata Badge */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200 flex items-center gap-2"
        >
            <RefreshCw size={10} className="text-teal-500 animate-spin-slow" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                {t("sync_badge")}
            </span>
        </motion.div>
      </div>

      {/* Consistent Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const IntegrationNode = ({ label, status, icon, isSyncing, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-teal-200 transition-colors"
  >
    <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 group-hover:text-teal-500 transition-colors">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-[11px] font-black text-slate-800 tracking-tight">{label}</span>
            <div className="flex items-center gap-1">
                <div className={`w-1 h-1 rounded-full ${isSyncing ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{status}</span>
            </div>
        </div>
    </div>
    <div className="text-slate-200">
        <ChevronRight size={14} />
    </div>
  </motion.div>
);