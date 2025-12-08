"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Minus, Info, Sparkles } from "lucide-react";

const PricingComparison = () => {
  const t = useTranslations("useCases.pricing.comparison");
  const categories = t.raw("categories");

  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-slate-500">{t("description")}</p>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="overflow-x-auto pb-12 hide-scrollbar">
          <div className="min-w-[1000px] border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden bg-white">
            {/* 1. STICKY HEADER ROW */}
            <div className="grid grid-cols-5 bg-slate-50/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-200">
              <div className="p-6 flex items-end font-bold text-slate-900 text-lg">
                {t("features")}
              </div>

              {/* Starter */}
              <div className="p-6 text-center">
                <div className="font-bold text-slate-900 text-xl">Starter</div>
                <div className="text-slate-500 text-sm mt-1">
                  {t("soloPractice")}
                </div>
              </div>

              {/* Professional (Highlighted) */}
              <div className="p-6 text-center relative bg-teal-50/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-teal-500" />
                <div className="font-bold text-teal-700 text-xl flex items-center justify-center gap-2">
                  {t("professional")}{" "}
                  <Sparkles className="w-4 h-4 fill-teal-500" />
                </div>
                <div className="text-teal-600/80 text-sm mt-1">
                  {t("medicalCenters")}
                </div>
              </div>

              {/* Enterprise */}
              <div className="p-6 text-center">
                <div className="font-bold text-slate-900 text-xl">
                  {t("enterprise")}
                </div>
                <div className="text-slate-500 text-sm mt-1">
                  {t("hospitals")}
                </div>
              </div>

              {/* Enterprise Plus */}
              <div className="p-6 text-center">
                <div className="font-bold text-slate-900 text-xl">
                  {t("plus")}
                </div>
                <div className="text-slate-500 text-sm mt-1">
                  {t("customScale")}
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
                        {/* Optional Tooltip Icon could go here */}
                      </div>

                      {/* Starter Value */}
                      <div className="p-5 flex items-center justify-center border-l border-slate-50">
                        <StatusIcon value={feature.starter} />
                      </div>

                      {/* Pro Value (Highlighted Column) */}
                      <div className="p-5 flex items-center justify-center bg-teal-50/10 border-x border-teal-100 group-hover:bg-teal-50/30 transition-colors">
                        <StatusIcon value={feature.pro} highlight />
                      </div>

                      {/* Enterprise Value */}
                      <div className="p-5 flex items-center justify-center border-r border-slate-50">
                        <StatusIcon value={feature.ent} />
                      </div>

                      {/* Plus Value */}
                      <div className="p-5 flex items-center justify-center">
                        <StatusIcon value={feature.plus} />
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            {/* 3. TABLE FOOTER (CTA) */}
            <div className="grid grid-cols-5 border-t border-slate-200 bg-slate-50">
              <div className="p-6" />
              <div className="p-6 px-4">
                <button className="w-full py-3 rounded-xl border border-slate-300 font-bold text-slate-600 hover:bg-white hover:border-slate-400 transition-all text-sm">
                  {t("chooseStarter")}
                </button>
              </div>
              <div className="p-6 px-4 bg-teal-50/30 border-x border-teal-100">
                <button className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all text-sm">
                  {t("choosePro")}
                </button>
              </div>
              <div className="p-6 px-4 border-r border-slate-200">
                <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-black transition-all text-sm">
                  {t("contactSales")}
                </button>
              </div>
              <div className="p-6 px-4">
                <button className="w-full py-3 rounded-xl border border-slate-300 font-bold text-slate-600 hover:bg-white transition-all text-sm">
                  {t("contactUs")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- HELPER: RENDER CELL CONTENT ---
const StatusIcon = ({
  value,
  highlight,
}: {
  value: string | boolean;
  highlight?: boolean;
}) => {
  if (value === true) {
    return (
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          highlight ? "bg-teal-600 text-white" : "bg-slate-200 text-slate-600"
        }`}
      >
        <Check className="w-3.5 h-3.5 stroke-[3px]" />
      </div>
    );
  }

  if (value === false) {
    return <Minus className="w-4 h-4 text-slate-300" />;
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

export default PricingComparison;
