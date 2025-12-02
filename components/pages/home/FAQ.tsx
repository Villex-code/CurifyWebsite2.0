"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import StructuredData from "@/components/SEO/StructuredData";

const Faq = () => {
  const t = useTranslations("FAQ");
  const [activeQuestion, setActiveQuestion] = useState<{
    id: number;
    question: string;
    answer: string;
  } | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Create FAQ array using useMemo to prevent unnecessary recreations
  const faqs = useMemo(
    () => [
      {
        id: 1,
        question: t("questions.1.question"),
        answer: t("questions.1.answer"),
      },
      {
        id: 2,
        question: t("questions.2.question"),
        answer: t("questions.2.answer"),
      },
      {
        id: 3,
        question: t("questions.3.question"),
        answer: t("questions.3.answer"),
      },
      {
        id: 4,
        question: t("questions.4.question"),
        answer: t("questions.4.answer"),
      },
      {
        id: 5,
        question: t("questions.5.question"),
        answer: t("questions.5.answer"),
      },
      {
        id: 6,
        question: t("questions.6.question"),
        answer: t("questions.6.answer"),
      },
    ],
    [t]
  );

  // Set initial active question when translations are ready
  useEffect(() => {
    if (faqs.length > 0) {
      setActiveQuestion(faqs[0]);
    }
  }, [faqs]);

  const handleQuestionClick = (faq: (typeof faqs)[0]) => {
    if (window.innerWidth >= 768) {
      setActiveQuestion(faq);
    } else {
      setExpandedId(expandedId === faq.id ? null : faq.id);
    }
  };

  // Create FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  if (!activeQuestion) {
    return null; // or a loading state
  }

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
      {/* Add structured data for FAQ */}
      <StructuredData data={faqStructuredData} id="faq-data" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-center mb-12 sm:mb-16 lg:mb-20 text-teal-600">
          {t("title")}
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col md:flex-row gap-20">
          {/* Left side - Active Question Content */}
          <div className="md:w-1/2">
            <div className="sticky top-40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl lg:text-4xl font-medium">
                    {activeQuestion.question}
                  </h3>
                  <div className="w-20 h-1 bg-neutral-200" />
                  <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
                    {activeQuestion.answer}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right side - Question List */}
          <div className="md:w-1/2">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.button
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq)}
                  className={`w-full text-left p-6 rounded-xl transition-colors relative ${
                    activeQuestion.id === faq.id
                      ? "bg-teal-700 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg lg:text-xl font-medium">
                      {faq.question}
                    </span>
                    {activeQuestion.id === faq.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-3 h-3 rounded-full bg-white ml-4"
                        transition={{
                          type: "spring",
                          bounce: 0.3,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="rounded-xl overflow-hidden">
              <motion.button
                onClick={() => handleQuestionClick(faq)}
                className={`w-full text-left p-4 sm:p-6 transition-colors relative ${
                  expandedId === faq.id
                    ? "bg-teal-700 text-white"
                    : "bg-neutral-100 text-neutral-600"
                }`}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-base sm:text-lg font-medium">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-white"
                  >
                    <div className="p-4 sm:p-6 text-md text-black">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
