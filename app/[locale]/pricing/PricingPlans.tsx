"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Sparkles, Building2, User, Users } from "lucide-react";

const PricingPlans = () => {
  const t = useTranslations("useCases.pricing.plans");
  const plans = t.raw("items");
  const [isYearly, setIsYearly] = useState(false);

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
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
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
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold ${
                !isYearly ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {t("monthly")}
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors hover:bg-slate-300 focus:outline-none"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>

            <span
              className={`text-sm font-semibold ${
                isYearly ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {t("yearly")}
              <span className="ml-2 inline-block bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                {t("savePercent")}
              </span>
            </span>
          </div>
        </div>

        {/* --- Pricing Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan: any, index: number) => (
            <PriceCard
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </div>

        {/* --- Enterprise Plus / Custom Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              <Building2 className="text-teal-400" /> {t("enterprisePlus")}
            </h3>
            <p className="text-slate-400 max-w-xl">{t("enterprisePlusDesc")}</p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-teal-50 transition-colors shadow-lg whitespace-nowrap">
            {t("contactCustom")}
          </button>
        </motion.div>

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
      case "starter":
        return User;
      case "professional":
        return Users;
      case "enterprise":
        return Building2;
      default:
        return User;
    }
  };

  const Icon = getIcon(plan.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative p-8 rounded-[2.5rem] border flex flex-col h-full transition-all duration-300
        ${
          plan.popular
            ? "bg-white border-teal-500 shadow-2xl shadow-teal-900/10 scale-105 z-10"
            : "bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-teal-200"
        }
      `}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
          <Sparkles className="w-3 h-3 fill-white" /> {t("mostPopular")}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
            plan.popular
              ? "bg-teal-50 text-teal-600"
              : "bg-slate-50 text-slate-500"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed h-10">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-slate-900">€</span>
          <motion.span
            key={isYearly ? "year" : "month"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {isYearly ? plan.priceYearly : plan.priceMonthly}
          </motion.span>
          <span className="text-slate-400 font-medium">{t("perMonth")}</span>
        </div>
        <div className="text-xs text-slate-400 mt-2 font-medium h-4">
          {isYearly
            ? t("billedYearly", { amount: plan.billedYearly })
            : t("billedMonthly")}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => window.open("https://portal-staging.curifyapp.com/")}
        className={`
         w-full py-4 rounded-xl font-bold transition-all duration-200 mb-8
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
        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
          {t("whatsIncluded")}
        </p>
        <ul className="space-y-3">
          {plan.features.map((feature: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-slate-600"
            >
              <div
                className={`mt-0.5 p-0.5 rounded-full ${
                  plan.popular
                    ? "bg-teal-100 text-teal-600"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PricingPlans;
