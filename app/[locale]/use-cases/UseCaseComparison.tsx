"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check, Clock, FileText, Users, AlertCircle } from "lucide-react";

interface ComparisonItem {
  label: string;
  before: string;
  after: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface UseCaseComparisonProps {
  segment: string;
}

const UseCaseComparison = ({ segment }: UseCaseComparisonProps) => {
  // Placeholder data - will be replaced with actual content
  const comparisonData: ComparisonItem[] = [
    {
      label: "Patient Intake",
      before: "Paper forms, manual entry, 15+ minutes per patient",
      after: "Digital forms, auto-populated, 3 minutes per patient",
      icon: FileText,
    },
    {
      label: "Wait Times",
      before: "Average 45-minute wait, frustrated patients",
      after: "Average 10-minute wait, streamlined flow",
      icon: Clock,
    },
    {
      label: "Staff Efficiency",
      before: "Overwhelmed staff, manual processes",
      after: "Automated workflows, focus on patient care",
      icon: Users,
    },
  ];

  return (
    <section
      id="use-case-comparison"
      className="relative w-full bg-slate-50 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            A Day in the Life
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See the transformation from chaos to clarity
          </p>
        </motion.div>

        {/* Split Screen Comparison */}
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* BEFORE - Left Side (Problem) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:20px_20px]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Before Curify
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, index) => {
                  const Icon = item.icon || AlertCircle;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-red-100"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-900 mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm text-slate-600">
                            {item.before}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* AFTER - Right Side (Solution) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(20,184,166,0.15)_1px,_transparent_0)] bg-[length:20px_20px]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  After Curify
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, index) => {
                  const Icon = item.icon || AlertCircle;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-teal-100"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-900 mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm text-slate-600">
                            {item.after}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseComparison;

