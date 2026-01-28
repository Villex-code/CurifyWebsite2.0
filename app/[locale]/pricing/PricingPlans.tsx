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
  const plans = Array.isArray(rawPlans)
    ? rawPlans.map((plan: any, index: number) => {
        // Essential Plan (Index 0)
        if (index === 0) {
          return {
            ...plan,
            name: "Essential",
            // Keep original strings for reference if needed, but we override heavily
            originalPriceMonthly: "80", // Hardcode original price to 80 as requested
            originalPriceYearly: "858", // 519 is ~40% off, so 858/12 ~ 71.5. If monthly is 80, yearly orig ~ 960? adjusting to user request "crossed out 80"
            // Actually, if cross out is 80 monthly, let's just ensure display logic handles it.

            // New Campaign Prices
            priceMonthly: "49",
            priceYearlyTotal: "519", // The full billed amount
            priceYearlyMonthlyEquivalent: "43", // 519 / 12 approx
            
            billedYearlyDesc: "519",
            
            isScarcity: true,
            slotsTotal: 50,
            slotsLeft: 24,
            scarcityLabelKey: "partnership", // Changed to key for translation
            scarcityColor: "amber", // Shared color theme
            
            // Override features to update user count if it's dynamic, else we rely on t() keys
            // Since features come from t(), we might need to map them if we cant change en.json
            // But usually we just render what's there. 
            // If the user wants to say "15 user accounts", we might need to string replace the specific feature
            features: plan.features.map((f: string) => f.includes("5") && f.includes("user") ? "15 user accounts" : f) 
          };
        }

        // Professional Plan (Index 1)
        if (index === 1) {
          return {
            ...plan,
            // name: "Professional", // Assumed from JSON
            originalPriceMonthly: plan.priceMonthly,
            originalPriceYearly: plan.priceYearly,

            // "Like 279" - reverting to 449 as requested
            priceMonthly: "449",
            priceYearlyTotal: "4490", 
            priceYearlyMonthlyEquivalent: "374", // 4490 / 12 approx
            
            billedYearlyDesc: "4,490",
            
            // Scarcity removed as requested
            // isScarcity: true,
            // slotsTotal: 9,
            // slotsLeft: 9, 
            // scarcityLabelKey: "earlyAdopter",
            // scarcityColor: "amber",
          };
        }

        // Enterprise/Hospital Plan (Index 2)
        if (index === 2) {
          return {
            ...plan,
            // name: "Hospital", // Assumed from JSON
            
            // Enterprise usually custom, but we add scarcity
            // isScarcity: true, // Removed as requested
            // slotsTotal: 3,
            // slotsLeft: 2,
            // scarcityLabelKey: "exclusive",
            // scarcityColor: "amber",

            // Keep original pricing or "Custom" if it's contact sales
            // If the original plan has prices, we can use them. 
            // If original was "Contact Us", we might need to handle numbers if intended.
            // Assuming we keep existing logic for Enterprise price display unless overridden.
            // But let's add a fallback if it was text-based.
            priceMonthly: "1800", // As per user request "monthly correct 1800"
            priceYearlyTotal: "19440", // 1620 * 12
            priceYearlyMonthlyEquivalent: "1620", // 1800 - 10% = 1620
            
            billedYearlyDesc: "19,440",
          };
        }

        return plan;
      })
    : [];

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
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <span
              className={`text-xs md:text-sm font-semibold ${
                !isYearly ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {t("monthly")}
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 md:w-16 md:h-8 bg-slate-200 rounded-full p-1 transition-colors hover:bg-slate-300 focus:outline-none"
            >
              <motion.div
                className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>

            <span
              className={`text-xs md:text-sm font-semibold ${
                isYearly ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {t("yearly")}
              <span className="ml-1 md:ml-2 inline-block bg-teal-100 text-teal-700 text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full uppercase tracking-wide">
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
          className="mt-12 md:mt-16 bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center flex flex-col items-center gap-6 md:gap-8 shadow-xl"
        >
          <div className="max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center justify-center gap-2">
              <Building2 className="text-teal-400 w-5 h-5 md:w-6 md:h-6" />{" "}
              {t("enterprisePlus")}
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {t("enterprisePlusDesc")}
            </p>
          </div>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-white text-slate-900 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-bold hover:bg-teal-50 transition-colors shadow-lg text-sm md:text-base whitespace-nowrap cursor-pointer"
          >
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
  const isScarcity = plan.isScarcity;
  
  // Calculate display price (Monthly Equivalent for Yearly View)
  const displayPrice = isYearly 
    ? (plan.priceYearlyMonthlyEquivalent || plan.priceYearly || "Custom") 
    : (plan.priceMonthly || "Custom");
    
  const isCustomPrice = displayPrice === "Custom" || isNaN(parseFloat(displayPrice));

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
            : isScarcity
            ? "bg-white border-teal-600/40 shadow-xl shadow-teal-900/5 ring-1 ring-teal-500/20"
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

      {/* Scarcity Banner (Unified Style) */}
      {isScarcity && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg whitespace-nowrap">
          <Flame className="w-3 h-3 md:w-3.5 md:h-3.5 fill-white" />
          Limited {t(`scarcity.${plan.scarcityLabelKey}`)}
        </div>
      )}

      {/* Header */}
      <div className="mb-4 md:mb-6 mt-2">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${
            plan.popular
              ? "bg-teal-50 text-teal-600"
              : isScarcity
              ? "bg-amber-50 text-amber-600"
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
             <span className="text-3xl md:text-4xl font-bold text-slate-900">€</span>
          )}
          
          {/* Strikethrough Original Price */}
          {isScarcity && !isCustomPrice && (
            <span className="text-xl md:text-2xl font-semibold text-slate-400 line-through decoration-slate-400/50 mr-2">
              {isYearly 
                 ? "71" // 858/12 roughly. If user wants strictly 80 crossed out in monthly:
                 : plan.originalPriceMonthly}
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
            ? t("billedYearly", { amount: plan.billedYearlyDesc || plan.billedYearly })
            : !isCustomPrice ? t("billedMonthly") : ""}
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
             : isScarcity
             ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10"
             : "bg-slate-100 text-slate-900 hover:bg-slate-200"
         }
      `}
      >
        {plan.cta}
      </button>

      {/* Scarcity Slots & Disclaimer - Moved Below CTA */}
      {isScarcity && plan.slotsTotal && (
        <div className="mb-6">
          <div className="mb-2 p-2 bg-amber-50 rounded-lg border border-amber-100">
            <div className="flex justify-between items-center text-xs font-semibold text-amber-800 mb-1.5">
              <span>{plan.slotsLeft} {t("scarcity.slotsLeft")}</span>
              <span className="text-amber-600/70">{t(`scarcity.${plan.scarcityLabelKey}`)}</span>
            </div>
            <div className="w-full h-1.5 bg-amber-200/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                style={{ width: `${(plan.slotsLeft / plan.slotsTotal) * 100}%` }} 
              />
            </div>
          </div>
          <p className="text-[10px] md:text-[11px] leading-tight text-amber-700/80 font-medium">
             {t("scarcity.disclaimer", { slots: plan.slotsTotal })}
          </p>
        </div>
      )}

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
                    : isScarcity
                    ? "bg-amber-100 text-amber-600"
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
