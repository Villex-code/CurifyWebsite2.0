"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  MessageCircle,
  Mail,
  FileText,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

// --- DATA CONFIGURATION ---
const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  "medical-office": [
    {
      question: "Is Curify too complex for a single practitioner?",
      answer:
        "Not at all. We have a specific 'Solo Mode' that hides enterprise features. You get a streamlined dashboard focused purely on your calendar, patient notes, and billing.",
    },
    {
      question: "Can I migrate my existing patient Excel sheets?",
      answer:
        "Yes. Our onboarding team provides a free migration service. We clean, format, and import your existing CSV/Excel data into Curify securely within 24 hours.",
    },
    {
      question: "Does the digital scribe work with my accent?",
      answer:
        "Curify's AI is trained on diverse medical datasets and accents. It achieves 98.5% accuracy in clinical transcription regardless of dialect.",
    },
  ],
  clinic: [
    {
      question: "How does multi-specialty scheduling work?",
      answer:
        "We use 'Resource-Based Scheduling.' You can link specific rooms or equipment (e.g., MRI machine) to appointment types, preventing double-booking across departments.",
    },
    {
      question: "Can I restrict access for reception staff?",
      answer:
        "Yes. Our Role-Based Access Control (RBAC) is granular. Receptionists can see schedules and demographics but cannot access clinical notes or sensitive history.",
    },
    {
      question: "What hardware do I need for the Inventory system?",
      answer:
        "None, initially. You can start with our mobile app scanning. Later, you can upgrade to our IoT Smart Cabinets for automated dispensing tracking.",
    },
  ],
  hospital: [
    {
      question: "Do you support HL7 and FHIR standards?",
      answer:
        "Yes, Curify is built on FHIR resources. We support bi-directional HL7 v2/v3 messaging to integrate seamlessly with your existing RIS, PACS, and LIS systems.",
    },
    {
      question: "Can we host this on-premise?",
      answer:
        "For enterprise tiers, we offer on-premise deployment or a dedicated private cloud instance to meet specific data sovereignty and security requirements.",
    },
    {
      question: "How do you handle downtime/SLAs?",
      answer:
        "We offer a 99.99% uptime SLA backed by financial guarantees. Our architecture uses redundant failover clusters across multiple availability zones.",
    },
  ],
};

const UseCaseFAQ = ({ segment }: { segment: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Safe fallback
  const questions =
    FAQ_DATA[segment as keyof typeof FAQ_DATA] || FAQ_DATA["medical-office"];

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
                <HelpCircle className="w-4 h-4" /> Support Center
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Questions? <br /> We have answers.
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Everything you need to know about implementing Curify in your{" "}
                {segment.replace("-", " ")}.
              </p>

              {/* Support Cards */}
              <div className="space-y-4">
                <SupportCard
                  icon={MessageCircle}
                  title="Live Chat"
                  desc="Available Mon-Fri, 9am-6pm"
                  action="Start Chat"
                />
                <SupportCard
                  icon={Mail}
                  title="Email Support"
                  desc="Response within 24 hours"
                  action="Contact Us"
                />
                <SupportCard
                  icon={FileText}
                  title="Documentation"
                  desc="Technical guides & API docs"
                  action="View Docs"
                />
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: INTERACTIVE FAQ LIST --- */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {questions.map((item, index) => {
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
