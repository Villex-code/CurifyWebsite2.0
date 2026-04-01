"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Check, Minus, Info, Sparkles, ShieldCheck } from "lucide-react";

const PricingComparison = () => {
  const t = useTranslations("useCases.pricing.comparison");
  const categories = t.raw("categories");
  const { locale } = useParams();

  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-slate-500">{t("description")}</p>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mb-6 text-xs font-semibold text-slate-500 bg-slate-100/50 py-2.5 px-4 rounded-full w-fit mx-auto border border-slate-200">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
              <span className="text-[10px] font-black">+</span>
            </div>
            {t("addOnsLegend")}
          </div>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="overflow-x-auto pb-12 hide-scrollbar">
          <div className="min-w-[1000px] border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden bg-white">
            {/* 1. STICKY HEADER ROW */}
            <div className="grid grid-cols-5 bg-slate-50/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-200">
              <div className="p-6 flex items-end font-bold text-slate-900 text-lg">
                {t("features")}
              </div>

              {/* Free */}
              <div className="p-6 text-center">
                <div className="font-bold text-slate-900 text-xl">
                  {t("labelFree")} 🎁
                </div>
                <div className="text-slate-500 text-xs mt-1">
                  {t("descFree")}
                </div>
              </div>

              {/* Essentials (Highlighted) */}
              <div className="p-6 text-center relative bg-teal-50/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-teal-500" />
                <div className="font-bold text-teal-700 text-xl flex items-center justify-center gap-2">
                  {t("labelEssentials")} <Sparkles className="w-4 h-4 fill-teal-500" />
                </div>
                <div className="text-teal-600/80 text-xs mt-1">
                  {t("descEssentials")}
                </div>
              </div>

              {/* Experience */}
              <div className="p-6 text-center">
                <div className="font-bold text-slate-900 text-xl">
                  {t("labelExperience")}
                </div>
                <div className="text-slate-500 text-xs mt-1">
                  {t("descExperience")}
                </div>
              </div>

              {/* Efficiency */}
              <div className="p-6 text-center">
                <div className="font-bold text-slate-900 text-xl">
                  {t("labelEfficiency")}
                </div>
                <div className="text-slate-500 text-xs mt-1">
                  {t("descEfficiency")}
                </div>
              </div>
            </div>

            {/* 2. TABLE BODY */}
            <div className="divide-y divide-slate-100">
              {categories.map((category: any, catIndex: number) => (
                <React.Fragment key={catIndex}>
                  {/* Category Title */}
                  <div className="bg-slate-50/50 p-4 pl-6 font-bold text-slate-500 text-xs uppercase tracking-widest sticky left-0">
                    {category.title}
                  </div>

                  {/* Feature Rows */}
                  {category.features.map((feature: any, featIndex: number) => (
                    <div
                      key={featIndex}
                      className="grid grid-cols-5 hover:bg-slate-50 transition-colors group"
                    >
                      {/* Feature Name */}
                      <div className="p-5 pl-6 text-sm font-medium text-slate-700 flex items-center gap-2">
                        {feature.name}
                      </div>

                      {/* Free */}
                      <div className="p-5 flex items-center justify-center border-l border-slate-50">
                        <StatusIcon value={feature.free} />
                      </div>

                      {/* Essentials (Highlighted) */}
                      <div className="p-5 flex items-center justify-center bg-teal-50/10 border-x border-teal-100 group-hover:bg-teal-50/30 transition-colors">
                        <StatusIcon value={feature.essentials} highlight hasAddon={feature.hasAddons} />
                      </div>

                      {/* Experience */}
                      <div className="p-5 flex items-center justify-center border-r border-slate-50">
                        <StatusIcon value={feature.experience} hasAddon={feature.hasAddons} />
                      </div>

                      {/* Efficiency */}
                      <div className="p-5 flex items-center justify-center">
                        <StatusIcon value={feature.efficiency} hasAddon={feature.hasAddons} />
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            {/* 3. TABLE FOOTER (CTA) */}
            <div className="grid grid-cols-5 border-t border-slate-200 bg-slate-50">
              <div className="p-6" />
              {/* Free CTA */}
              <div className="p-6 px-4">
                <button
                  onClick={() =>
                    window.open("https://portal-staging.curifyapp.com/")
                  }
                  className="w-full py-3 rounded-xl border border-slate-300 font-bold text-slate-600 hover:bg-white hover:border-slate-400 transition-all text-sm"
                >
                  {t("startFree")}
                </button>
              </div>
              {/* Essentials (Highlighted) CTA */}
              <div className="p-6 px-4 bg-teal-50/30 border-x border-teal-100">
                <button
                  onClick={() =>
                    window.open("https://portal-staging.curifyapp.com/")
                  }
                  className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all text-sm"
                >
                  {t("chooseEssentials")}
                </button>
              </div>
              {/* Experience CTA */}
              <div className="p-6 px-4 border-r border-slate-200">
                <button
                  onClick={() =>
                    window.open("https://portal-staging.curifyapp.com/")
                  }
                  className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-black transition-all text-sm"
                >
                  {t("chooseExperience")}
                </button>
              </div>
              {/* Efficiency CTA */}
              <div className="p-6 px-4">
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full py-3 rounded-xl border border-slate-300 font-bold text-slate-600 hover:bg-white transition-all text-sm"
                >
                  {t("chooseEfficiency")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- AADE / myDATA Disclaimer (Greek Only) --- */}
        {locale === "el" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 relative overflow-hidden bg-white border-2 border-teal-100/60 rounded-[2rem] p-6 md:p-8 shadow-lg shadow-teal-900/5 flex flex-col md:flex-row items-center md:items-start gap-6 group"
          >
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-inner border border-teal-100 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                {t("aadeDisclaimerTitle")}
                <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[9px] uppercase font-black rounded-md">Official</span>
              </h4>
              <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                {t("aadeDisclaimerText")}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// --- HELPER: RENDER CELL CONTENT ---
const StatusIcon = ({
  value,
  highlight,
  hasAddon,
}: {
  value: string | boolean;
  highlight?: boolean;
  hasAddon?: boolean;
}) => {
  const renderIcon = () => {
    if (value === true) {
      return (
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
            highlight ? "bg-teal-600 text-white" : "bg-slate-200 text-slate-600"
          }`}
        >
          <Check className="w-3.5 h-3.5 stroke-[3px]" />
        </div>
      );
    }

    if (value === false) {
      return <Minus className="w-4 h-4 text-slate-300 shrink-0" />;
    }

    return (
      <span
        className={`text-sm font-bold ${
          highlight ? "text-teal-900" : "text-slate-900"
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="flex items-center gap-2">
      {renderIcon()}
      {hasAddon && value !== false && (
        <div className="w-4 h-4 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shadow-sm border border-teal-200 shrink-0 select-none">
          <span className="text-[10px] font-black leading-none">+</span>
        </div>
      )}
    </div>
  );
};

export default PricingComparison;
