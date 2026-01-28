"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Smartphone, 
  Bell, 
  User, 
  Calendar, 
  Activity,
  Mic,
  Plus
} from "lucide-react";
import { useTranslations } from "next-intl";

export const HomeFeatureMobileAccessCard = () => {
  const t = useTranslations("HomeFeatures.cards.mobile.visual");

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
           <Smartphone size={16} className="text-teal-500" />
        </div>
      </div>

      {/* Smartphone Mockup Visualization */}
      <div className="relative z-10 flex flex-1 items-center justify-center pt-4">
        
        {/* Floating Notification Badge */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.8 }}
           className="absolute top-10 right-4 z-30 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <Bell size={16} />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-800">{t("notification.title")}</span>
                <span className="text-[8px] text-slate-400 font-bold">{t("notification.subtitle")}</span>
            </div>
        </motion.div>

        {/* The Phone Frame */}
        <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative border-[6px] border-slate-900 bg-slate-900 rounded-[2.5rem] h-[480px] w-[230px] shadow-2xl overflow-hidden"
        >
            {/* Phone Notch/Speaker */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-2xl z-40" />
            
            {/* Mobile App Screen Content */}
            <div className="w-full h-full bg-white p-4 pt-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={16} />
                    </div>
                    <div className="bg-teal-600 text-white p-1.5 rounded-lg">
                        <Plus size={14} />
                    </div>
                </div>

                {/* Mobile Daily Summary Card */}
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 mb-6 shadow-lg shadow-teal-600/20">
                    <span className="text-[8px] font-black text-teal-100 uppercase tracking-widest">{t("screen.today")}</span>
                    <div className="text-xl font-black text-white mt-1">420.00€</div>
                    <div className="flex items-center gap-1 text-[8px] text-teal-100 font-bold mt-2">
                        <Activity size={10} />
                        <span>{t("screen.appointments_count")}</span>
                    </div>
                </div>

                {/* Mobile Schedule Preview */}
                <div className="space-y-3">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">{t("screen.up_next")}</span>
                    {[
                        { name: t("screen.patients.0.name"), time: "10:30" },
                        { name: t("screen.patients.1.name"), time: "11:45" },
                        { name: t("screen.patients.2.name"), time: "13:00" }
                    ].map((app, i) => (
                        <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-700">{app.name}</span>
                            <span className="text-[8px] font-black text-teal-600">{app.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>

        {/* Extra Decorative Element: Activity Ring */}
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-20 left-4 z-30 bg-white p-4 rounded-full shadow-xl border border-slate-100 flex items-center justify-center"
        >
            <Calendar size={20} className="text-indigo-500" />
        </motion.div>
      </div>

      {/* App's Floating Mic Button (Consistent across cards) */}
      <div className="absolute bottom-6 right-6 z-20 bg-teal-600 text-white p-3.5 rounded-full shadow-lg shadow-teal-600/30">
         <Mic size={20} />
      </div>

      {/* Consistent Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};