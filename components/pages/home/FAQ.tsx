"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import StructuredData from "@/components/SEO/StructuredData";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const t = useTranslations("FAQ");
  const [activeId, setActiveId] = useState<number>(1);

  // Memoize data
  const faqs = useMemo(
    () => [
      { id: 1, q: t("questions.1.question"), a: t("questions.1.answer") },
      { id: 2, q: t("questions.2.question"), a: t("questions.2.answer") },
      { id: 3, q: t("questions.3.question"), a: t("questions.3.answer") },
      { id: 4, q: t("questions.4.question"), a: t("questions.4.answer") },
      { id: 5, q: t("questions.5.question"), a: t("questions.5.answer") },
      { id: 6, q: t("questions.6.question"), a: t("questions.6.answer") },
    ],
    [t]
  );

  const activeFaq = faqs.find((f) => f.id === activeId);

  // SEO: Structured Data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <StructuredData data={faqStructuredData} id="faq-schema" />

      {/* Background Decor (Teal Touches) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal-600 font-semibold uppercase text-sm px-3 py-1 rounded-full">
              Support & Knowledge
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our friendly
              team.
            </p>
          </motion.div>
        </div>

        {/* --- DESKTOP LAYOUT (Questions Right, Answer Left) --- */}
        <div className="hidden lg:flex flex-row gap-16 xl:gap-24 items-start">
          {/* LEFT: Answer Display (Sticky) */}
          <div className="flex-1 sticky top-32">
            <div className="relative min-h-[300px]">
              {/* Giant Background Number */}
              <div className="absolute -top-14 -left-6 text-[180px] leading-none font-bold text-teal-50/80 select-none z-0">
                {String(activeId).padStart(2, "0")}
              </div>

              <AnimatePresence mode="wait">
                {activeFaq && (
                  <motion.div
                    key={activeFaq.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10 pt-4"
                  >
                    {/* QUESTION */}
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      {activeFaq.q}
                    </h3>

                    {/* --- DIVIDER BETWEEN Q AND A --- */}
                    <div className="relative w-full max-w-sm h-4 mt-8 mb-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full relative flex justify-start items-start opacity-50"
                      >
                        {/* Long Base Line */}
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-teal-300/40 via-teal-300/40 to-transparent h-[1px] w-full blur-[1px]" />
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-teal-400/50 via-teal-400/50 to-transparent h-px w-full" />

                        {/* Shorter, Brighter Center Line */}
                        <div className="absolute left-0 top-0 bg-gradient-to-r from-teal-200/30 via-teal-200/30 to-transparent h-[2px] w-1/2 blur-[1px]" />
                        <div className="absolute left-0 top-0 bg-gradient-to-r from-teal-300/40 via-teal-300/40 to-transparent h-px w-1/2" />
                      </motion.div>
                    </div>

                    {/* ANSWER */}
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {activeFaq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Questions List */}
          <div className="w-[450px] flex-shrink-0 flex flex-col gap-2">
            {faqs.map((faq) => {
              const isActive = activeId === faq.id;
              return (
                <button
                  key={faq.id}
                  onClick={() => setActiveId(faq.id)}
                  className={`group relative flex items-center justify-between w-full text-left p-5 rounded-2xl transition-all duration-300 border border-transparent ${
                    isActive
                      ? "bg-teal-50/60"
                      : "hover:bg-gray-50 hover:border-gray-100"
                  }`}
                  aria-expanded={isActive}
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-teal-900"
                        : "text-gray-500 group-hover:text-gray-800"
                    }`}
                  >
                    {faq.q}
                  </span>

                  {/* Floating Dot Indicator */}
                  <div className="relative flex items-center justify-center w-6 h-6 ml-4 shrink-0">
                    {isActive && (
                      <motion.div
                        layoutId="active-dot"
                        className="absolute w-2.5 h-2.5 bg-teal-500 rounded-full shadow-[0_0_12px_rgba(20,184,166,0.6)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    {/* Inactive state dot placeholder */}
                    {!isActive && (
                      <div className="w-1.5 h-1.5 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- MOBILE LAYOUT (Accordion) --- */}
        <div className="lg:hidden flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-teal-500/30 shadow-md" : "border-gray-100"
                }`}
              >
                <button
                  onClick={() => setActiveId(isOpen ? 0 : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className={`font-medium text-base sm:text-lg ${
                      isOpen ? "text-teal-800" : "text-gray-700"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 p-1.5 rounded-full transition-colors ${
                      isOpen
                        ? "bg-teal-100 text-teal-600"
                        : "bg-gray-50 text-gray-400"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 text-gray-500 leading-relaxed border-t border-gray-50 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
