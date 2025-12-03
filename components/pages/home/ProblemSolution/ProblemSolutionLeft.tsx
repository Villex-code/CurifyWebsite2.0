"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Zap,
  XCircle,
} from "lucide-react";

const ProblemSolutionLeft = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* --- THE PROBLEM (RED) --- */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6 border border-red-100">
          <AlertCircle className="w-3 h-3" />
          The Challenge
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          Manual input is <br />
          <span className="text-red-600 decoration-red-200 underline decoration-4 underline-offset-4">
            slowing you down.
          </span>
        </h3>

        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          Doctors spend 40% of their time clicking through tabs, creating
          patient files, writing prescriptions, and cross-checking schedules.
          It’s tedious and error-prone.
        </p>

        {/* --- THE SOLUTION (TEAL) --- */}
        <div className="mt-10 border-t border-gray-100 pt-10">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
              <Zap className="w-5 h-5" />
            </div>
            One prompt. Done.
          </h4>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="mt-1">
                <XCircle className="w-5 h-5 text-red-400 group-hover:hidden" />
                <CheckCircle2 className="w-5 h-5 text-teal-500 hidden group-hover:block" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">
                  Natural Language Action
                </h5>
                <p className="text-sm text-gray-500 mt-1">
                  Don't navigate menus. Just tell Curify what you need:
                  "Register patient, prescribe meds, book follow-up."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="mt-1">
                <XCircle className="w-5 h-5 text-red-400 group-hover:hidden" />
                <CheckCircle2 className="w-5 h-5 text-teal-500 hidden group-hover:block" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">
                  Multi-Step Execution
                </h5>
                <p className="text-sm text-gray-500 mt-1">
                  Our AI understands context. It creates the patient file,
                  generates the Rx, and syncs the calendar simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 group">
            Try AI automation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemSolutionLeft;
