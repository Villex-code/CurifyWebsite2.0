"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Plus,
  Minus,
  MessageCircle,
  Mail,
  FileText,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const UseCaseFAQ = ({ segment }: { segment: string }) => {
  const t = useTranslations("useCases.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Get questions based on segment
  // Using t.raw() to get the array of objects for the specific segment
  // The segment prop from parent matches the JSON keys (medical-office, clinic, hospital)
  const questions =
    t.raw(`segments.${segment}`) || t.raw("segments.medical-office");

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* --- LEFT: STICKY HELP CENTER --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs mb-4">
                <HelpCircle className="w-4 h-4" /> {t("header.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t("header.title")}
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {t("header.subtitle")}
              </p>

              {/* Support Cards */}
              <div className="space-y-4">
                <SupportCard
                  icon={MessageCircle}
                  title={t("supportCards.chat.title")}
                  desc={t("supportCards.chat.desc")}
                  action={t("supportCards.chat.cta")}
                />
                <SupportCard
                  icon={Mail}
                  title={t("supportCards.email.title")}
                  desc={t("supportCards.email.desc")}
                  action={t("supportCards.email.cta")}
                />
                <SupportCard
                  icon={FileText}
                  title={t("supportCards.docs.title")}
                  desc={t("supportCards.docs.desc")}
                  action={t("supportCards.docs.cta")}
                />
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: INTERACTIVE FAQ LIST --- */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {questions?.map((item: any, index: number) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={segment + index} // Key changes on segment to re-animate
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative rounded-2xl transition-all duration-300 border
                            ${
                              isOpen
                                ? "bg-white border-teal-200 shadow-xl shadow-teal-900/5"
                                : "bg-white border-slate-100 hover:border-teal-100 hover:shadow-md"
                            }
                         `}
                  >
                    {/* Active Left Border Indicator */}
                    <div
                      className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-teal-500 transition-all duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-8 py-6 flex items-start justify-between text-left gap-4"
                    >
                      <span
                        className={`text-lg font-bold transition-colors ${
                          isOpen
                            ? "text-teal-900"
                            : "text-slate-700 group-hover:text-slate-900"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`flex-shrink-0 mt-1 p-1 rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "bg-teal-500 border-teal-500 text-white rotate-180"
                            : "bg-white border-slate-200 text-slate-400 group-hover:border-teal-200 group-hover:text-teal-500"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 pt-0">
                            <p className="text-slate-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: SUPPORT CONTACT CARD ---
const SupportCard = ({ icon: Icon, title, desc, action }: any) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-teal-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
        <Icon className="w-5 h-5 text-slate-400 group-hover:text-teal-600" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-transform" />
    </div>
  );
};

export default UseCaseFAQ;
