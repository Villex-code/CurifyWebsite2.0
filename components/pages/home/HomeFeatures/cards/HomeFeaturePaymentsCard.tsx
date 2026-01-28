"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Wallet, 
  FileText, 
  TrendingUp, 
  ChevronRight, 
  CheckCircle2, 
  Printer, 
  ExternalLink
} from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeaturePaymentsCard = () => {
  const t = useTranslations("HomeFeatures.cards.payments.visual");

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F5F9] p-4 md:p-6 font-sans overflow-hidden relative">
      {/* Top Header & Breadcrumbs */}
      <div className="relative z-10 flex items-start justify-between mb-4 md:mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mb-1">
            <span>{t("header.home")}</span>
            <ChevronRight size={10} />
            <span className="text-teal-600 font-bold">{t("header.category")}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{t("header.title")}</h3>
        </div>
        <div className="bg-teal-600 text-white px-3 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2 shadow-md shadow-teal-600/20">
            <span>{t("header.new_transaction")}</span>
        </div>
      </div>

      {/* Main Stats Area: Revenue + Success Rate */}
      <div className="relative z-10 grid grid-cols-2 gap-3 mb-4 md:mb-6">
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"
        >
            <div className="flex justify-between items-start mb-2">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{t("stats.total_revenue")}</span>
                <div className="p-1.5 bg-teal-50 text-teal-600 rounded-lg"><Wallet size={14} /></div>
            </div>
            <div className="text-lg font-black text-slate-800 tracking-tight">7.311€</div>
            <div className="mt-2 inline-flex px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] font-bold rounded-full">
                {t("stats.net")}: 6.306€
            </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-teal-600 p-4 rounded-2xl shadow-lg shadow-teal-600/20 relative overflow-hidden"
        >
            <div className="flex justify-between items-start mb-2 relative z-10">
                <span className="text-[8px] font-black text-teal-100 uppercase tracking-widest">{t("stats.revenue_flow")}</span>
                <TrendingUp size={14} className="text-teal-200" />
            </div>
            {/* Simple Sparkline simulation */}
            <div className="absolute bottom-0 left-0 w-full h-12 opacity-30">
                <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d">
                    <path d="M0 40 L20 35 L40 38 L60 10 L80 32 L100 35" fill="none" stroke="white" strokeWidth="3" />
                </svg>
            </div>
            <div className="text-lg font-black text-white relative z-10">{t("stats.live")}</div>
        </motion.div>
      </div>

      {/* The "Summary" Receipt: This is the high-impact visual from your screen */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col flex-1"
      >
        <div className="p-5 border-b border-slate-50 flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-800 tracking-[0.2em]">{t("receipt.title")}</span>
            <FileText size={16} className="text-teal-500" />
        </div>
        
        <div className="p-6 space-y-4">
            <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-400">{t("receipt.net_amount")}</span>
                <span className="text-slate-700">€44.35</span>
            </div>
            <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-400">{t("receipt.vat")}</span>
                <span className="text-slate-700">€10.65</span>
            </div>
            
            <div className="border-t border-dashed border-slate-200 pt-4 flex justify-between items-end">
                <span className="text-sm font-black text-slate-800 uppercase">{t("receipt.total")}</span>
                <span className="text-2xl font-black text-teal-600 tracking-tighter">€55.00</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-500 text-[10px] font-bold">
                    <Printer size={14} />
                    <span>{t("receipt.receipt_btn")}</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-600 text-white text-[10px] font-bold shadow-md shadow-teal-600/10">
                    <ExternalLink size={14} />
                    <span>{t("receipt.pdf_btn")}</span>
                </div>
            </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full border border-emerald-100">
             <CheckCircle2 size={10} />
             <span className="text-[8px] font-black">{t("receipt.ok")}</span>
        </div>
      </motion.div>

      {/* Seamless Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};