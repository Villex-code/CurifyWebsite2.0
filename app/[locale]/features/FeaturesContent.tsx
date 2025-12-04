"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { getFeatureById } from "./featuresRegistry"; // Import registry

interface FeaturesContentProps {
  featureId: string;
}

const FeaturesContent = ({ featureId }: FeaturesContentProps) => {
  const feature = getFeatureById(featureId);

  if (!feature) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-slate-400 bg-white rounded-3xl border border-slate-200 border-dashed">
        <Sparkles className="w-12 h-12 mb-4 text-slate-300" />
        <p className="text-lg">Select a feature to view details</p>
      </div>
    );
  }

  return (
    <main className="flex-1 min-w-0">
      {" "}
      {/* min-w-0 prevents flex overflow issues */}
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <article className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            {/* Common Header for all features (Consistent Title) */}
            <div className="mb-10 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {feature.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                {feature.title}
              </h1>
            </div>

            {/* THE CUSTOM COMPONENT RENDERED HERE */}
            <div className="feature-content-wrapper">{feature.component}</div>

            {/* Common CTA Footer */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-slate-900">
                  Ready to implement?
                </h4>
                <p className="text-slate-500 text-sm">
                  Get started with {feature.title} today.
                </p>
              </div>
              <button className="group bg-slate-900 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-teal-500/20">
                Book Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default FeaturesContent;
