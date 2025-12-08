"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("home.userSegments.hero");

  return (
    <div className="relative w-full max-w-5xl mx-auto text-center mb-48">
      <FloatingStickers />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 bg-white rounded-[2rem] shadow-xl shadow-slate-200 flex items-center justify-center mx-auto mb-10 relative z-20"
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="w-3 h-3 rounded-full bg-teal-500" />
          <div className="w-3 h-3 rounded-full bg-teal-300" />
          <div className="w-3 h-3 rounded-full bg-slate-800" />
          <div className="w-3 h-3 rounded-full bg-slate-300" />
        </div>
      </motion.div>

      <h2 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-[1] mb-8 relative z-20">
        {t("titlePrefix")} <br />
        <span className="text-teal-600">{t("titleHighlight")}</span>
      </h2>

      <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed relative z-20">
        {t("description")}
      </p>

      <button className="bg-teal-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-colors relative z-20">
        {t("cta")}
      </button>
    </div>
  );
};

// --- FLOATING STICKERS (Small & Edge-positioned) ---
const FloatingStickers = () => {
  const t = useTranslations("home.userSegments.stickers");

  return (
    <div className="absolute inset-0 pointer-events-none z-0 w-full h-full overflow-visible">
      {/* Top Left: Yellow Note (Smaller scale) */}
      <motion.div
        initial={{ rotate: -6, y: 0 }}
        whileInView={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-40px] left-[-20px] lg:left-[-10%] w-40 h-40 bg-[#fef08a] shadow-xl rounded-sm p-4 hidden lg:flex flex-col transform -rotate-6"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-400 mx-auto -mt-6 shadow-sm border border-red-500/20" />
        <p className="font-handwriting text-slate-800 text-sm leading-snug font-medium">
          {t("note")}
        </p>
        <div className="mt-auto bg-white/50 w-10 h-10 rounded-xl flex items-center justify-center self-end shadow-sm">
          <CheckSquare className="text-white w-4 h-4 text-blue-500" />
        </div>
      </motion.div>

      {/* Top Right: Reminders (Smaller & moved right) */}
      <motion.div
        initial={{ rotate: 3 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[-20px] right-[0px] lg:right-[-10%] bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/60 max-w-[180px] hidden lg:block transform rotate-3"
      >
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-slate-800 text-sm">{t("reminderTitle")}</h4>
          <div className="w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm -mt-8 -mr-8">
            <Clock className="w-4 h-4 text-red-400" />
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-2">
          <p className="text-xs font-bold text-slate-700">{t("reminderBody")}</p>
          <p className="text-[10px] text-slate-400">10:00 AM</p>
        </div>
      </motion.div>

      {/* Bottom Left: Tasks */}
      <motion.div
        initial={{ rotate: -2 }}
        whileInView={{ y: [0, -8, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-[20%] left-[5%] lg:left-[-5%] bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-4 w-52 hidden lg:block transform -rotate-2"
      >
        <h4 className="text-sm font-bold text-slate-900 mb-3">{t("tasksTitle")}</h4>
        <div className="space-y-3">
          <div className="bg-white border border-slate-100 p-2 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
              8
            </div>
            <div className="flex-1">
              <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Right: Integrations */}
      <motion.div
        initial={{ rotate: 2 }}
        whileInView={{ y: [0, 8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-[20%] right-[10%] lg:right-[-5%] bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 p-4 hidden lg:block transform rotate-2"
      >
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm text-lg">
            <Mail className="w-4 h-4 text-red-500" />
          </div>
          <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm text-lg">
            <Bell className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Import required icons
import { CheckSquare, Clock, Mail, Bell } from "lucide-react";

export default HeroSection;
