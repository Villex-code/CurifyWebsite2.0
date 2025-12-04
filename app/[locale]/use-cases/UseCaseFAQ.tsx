"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface UseCaseFAQProps {
  segment: string;
}

const UseCaseFAQ = ({ segment }: UseCaseFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Placeholder FAQ data - will be replaced with segment-specific content
  const faqData: FAQItem[] = [
    {
      question: "Does this integrate with my existing X-ray machine?",
      answer:
        "Yes, Curify offers seamless integration with most major medical imaging systems through standardized APIs and HL7 protocols. Our team can help you connect your existing equipment.",
    },
    {
      question: "Is this HIPAA/GDPR compliant for 10k+ records?",
      answer:
        "Absolutely. Curify is built with compliance at its core. We're HIPAA and GDPR compliant, with enterprise-grade encryption, audit trails, and data protection measures designed to handle large-scale deployments.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Implementation time varies based on your organization's size and requirements. Typically, smaller practices can be up and running in 2-4 weeks, while larger hospitals may take 8-12 weeks for full deployment.",
    },
    {
      question: "What kind of training do you provide?",
      answer:
        "We provide comprehensive training including on-site sessions, video tutorials, and ongoing support. Our team ensures your staff is comfortable with the platform before going live.",
    },
    {
      question: "Can I customize workflows for my specific needs?",
      answer:
        "Yes, Curify is highly customizable. Our platform allows you to configure workflows, forms, and processes to match your organization's unique requirements and clinical protocols.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "You maintain full ownership of your data. Upon cancellation, you have 30 days to export all your data in standard formats (CSV, JSON, SQL). After that period, data is securely deleted per our data retention policy.",
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about Curify for your setting
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="pt-4 border-t border-slate-100">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            Still have questions? Our team is here to help.
          </p>
          <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseFAQ;

