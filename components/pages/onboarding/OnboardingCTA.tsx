"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function OnboardingCTA() {
  const t = useTranslations("onboarding.cta");

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-600 to-teal-800 p-8 md:p-16 text-center shadow-2xl shadow-teal-900/20"
        >
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl text-teal-50 mb-10 leading-relaxed font-medium">
              {t("subtitle")}
            </p>

            <a
              href="https://calendly.com/appcurify/15-minute-meeting-curify"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-white text-teal-900 font-black rounded-full shadow-xl hover:bg-teal-50 transition-all hover:scale-105 active:scale-95 text-lg uppercase tracking-tight"
            >
              <Calendar className="w-6 h-6 text-teal-600" />
              {t("button")}
              <ArrowUpRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
