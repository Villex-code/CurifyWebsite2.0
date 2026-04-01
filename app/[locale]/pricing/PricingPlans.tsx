"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Sparkles, Building2, User, Users, Flame } from "lucide-react";

const PricingPlans = () => {
  const t = useTranslations("useCases.pricing.plans");
  const rawPlans = t.raw("items");
  const [isYearly, setIsYearly] = useState(true); // Default to yearly as requested

  // Transform plans with scarcity logic and price overrides
  const plans = Array.isArray(rawPlans) ? rawPlans : [];

  return (
    <section className="relative w-full py-24 ">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6"
          >
            {t("title")} <br />
            <span className="text-teal-600">{t("titleHighlight")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 mb-10"
          >
            {t("description")}
          </motion.p>

          {/* --- Toggle Switch --- */}
          <div className="flex items-center justify-center gap-3 md:gap-4 flex-nowrap">
            <span
              className={`text-xs md:text-sm font-semibold transition-colors ${
                !isYearly ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {t("monthly")}
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 md:w-16 md:h-8 rounded-full p-1 transition-colors focus:outline-none ${
                isYearly
                  ? "bg-teal-600 hover:bg-teal-700"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              <motion.div
                className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>

            <div className="flex items-center gap-2">
              <span
                className={`text-xs md:text-sm font-semibold transition-colors ${
                  isYearly ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {t("yearly")}
              </span>
              <span
                className={`inline-block text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full uppercase tracking-wide transition-all duration-300 border ${
                  isYearly
                    ? "bg-teal-100 text-teal-700 border-teal-200 shadow-sm"
                    : "bg-slate-50 text-slate-400 border-slate-100 grayscale-[0.5]"
                }`}
              >
                {t("savePercent")}
              </span>
            </div>
          </div>
        </div>

        {/* --- Paid Pricing Grid (3 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-16">
          {plans
            .filter((p: any) => p.id !== "free")
            .map((plan: any, index: number) => (
              <PriceCard
                key={plan.id}
                plan={plan}
                isYearly={isYearly}
                index={index}
              />
            ))}
        </div>

        {/* --- Ultra-Compact Trial Ticket --- */}
        {plans.find((p: any) => p.id === "free") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 relative"
          >
            <div className="relative overflow-hidden bg-teal-600 border-2 border-dashed border-teal-50 rounded-[1.25rem] p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 group transition-all duration-300 shadow-xl shadow-teal-900/10">
              {/* Animated Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-xl" />

              <div className="flex-1 text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                  <Flame className="w-3 h-3 fill-white" />{" "}
                  {t("free_tier_label")} 🎁
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {plans.find((p: any) => p.id === "free").name}
                </h3>
                <p className="text-xs md:text-sm text-teal-50 font-medium mt-2 leading-tight opacity-90">
                  {plans.find((p: any) => p.id === "free").description}
                </p>

                {/* Compact Trial features in a row */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 justify-center md:justify-start">
                  {plans
                    .find((p: any) => p.id === "free")
                    .features.map((f: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-bold text-white"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-teal-300"
                          strokeWidth={4}
                        />
                        {f}
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-3 md:gap-4 min-w-[180px] relative z-10">
                <div className="text-center md:text-right">
                  <div className="flex items-baseline justify-center md:justify-end gap-1">
                    <span className="text-3xl md:text-4xl font-black text-white">
                      €0
                    </span>
                    <span className="text-teal-100 font-bold text-xs uppercase tracking-wider">
                      {t("perMonth")}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    window.open("https://portal-staging.curifyapp.com/")
                  }
                  className="w-full md:w-auto px-10 py-3.5 bg-white text-teal-600 rounded-xl font-black hover:bg-teal-50 hover:scale-105 transition-all shadow-xl shadow-teal-900/20 text-sm md:text-base border-b-4 border-teal-700/10 active:border-b-0 active:translate-y-1 transform uppercase tracking-wide"
                >
                  {plans.find((p: any) => p.id === "free").cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- Add-Ons Teaser --- */}
        <div className="mt-20 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-500 text-sm">
            {t("addOnsTitle")} <br className="md:hidden" />{" "}
            <a
              href="/contact"
              className="text-teal-600 font-bold cursor-pointer hover:underline"
            >
              {t("addOnsDesc")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Individual Price Card ---
const PriceCard = ({
  plan,
  isYearly,
  index,
}: {
  plan: any;
  isYearly: boolean;
  index: number;
}) => {
  const t = useTranslations("useCases.pricing.plans");

  // Map plan IDs to icons
  const getIcon = (planId: string) => {
    switch (planId) {
      case "free":
        return User;
      case "essentials":
        return Users;
      case "experience":
        return Building2;
      case "efficiency":
        return Sparkles;
      default:
        return User;
    }
  };

  const Icon = getIcon(plan.id);

  // Calculate display price (Monthly Equivalent for Yearly View)
  const displayPrice = isYearly
    ? plan.priceYearlyMonthlyEquivalent || plan.priceYearly || "Custom"
    : plan.priceMonthly || "Custom";

  const isCustomPrice =
    displayPrice === "Custom" || isNaN(parseFloat(displayPrice));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border flex flex-col h-full transition-all duration-300
        ${
          plan.popular
            ? "bg-white border-teal-500 shadow-2xl shadow-teal-900/10 scale-105 z-10"
            : "bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-teal-200"
        }
      `}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
          <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 fill-white" />{" "}
          {t("mostPopular")}
        </div>
      )}

      {plan.bestValue && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg whitespace-nowrap">
          <Flame className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
          {t("bestValue")}
        </div>
      )}

      {/* Header */}
      <div className="mb-4 md:mb-6 mt-2">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${
            plan.popular
              ? "bg-teal-50 text-teal-600"
              : "bg-slate-50 text-slate-500"
          }`}
        >
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
          {plan.name}
        </h3>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed h-8 md:h-10">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-baseline gap-1 flew-wrap">
          {!isCustomPrice && (
            <span className="text-3xl md:text-4xl font-bold text-slate-900">
              €
            </span>
          )}

          <motion.span
            key={isYearly ? "year" : "month"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {displayPrice}
          </motion.span>

          {!isCustomPrice && (
            <span className="text-slate-400 font-medium text-sm md:text-base">
              {t("perMonth")}
            </span>
          )}
        </div>

        <div className="text-xs text-slate-400 mt-2 font-medium min-h-[16px]">
          {!isCustomPrice && isYearly
            ? plan.billedYearlyDesc === "0"
              ? t("billedMonthly") // or simply empty
              : t("billedYearly", {
                  amount: plan.billedYearlyDesc || plan.billedYearly,
                })
            : !isCustomPrice
              ? t("billedMonthly")
              : ""}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => window.open("https://portal-staging.curifyapp.com/")}
        className={`
          w-full py-3 md:py-4 rounded-xl font-bold transition-all duration-200 mb-6 md:mb-8 text-sm md:text-base
          ${
            plan.popular
              ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20"
              : "bg-slate-100 text-slate-900 hover:bg-slate-200"
          }
        `}
      >
        {plan.cta}
      </button>

      {/* Features List */}
      <div className="flex-1">
        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 md:mb-4">
          {t("whatsIncluded")}
        </p>
        <ul className="space-y-2 md:space-y-3">
          {plan.features.map((feature: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-slate-600"
            >
              <div
                className={`mt-0.5 p-0.5 rounded-full ${
                  plan.popular
                    ? "bg-teal-100 text-teal-600"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <Check className="w-2.5 h-2.5 md:w-3 md:h-3" strokeWidth={3} />
              </div>
              <span className="flex-1 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PricingPlans;
