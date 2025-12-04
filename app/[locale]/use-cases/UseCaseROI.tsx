"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

interface UseCaseROIProps {
  segment: string;
}

const UseCaseROI = ({ segment }: UseCaseROIProps) => {
  const [patientVolume, setPatientVolume] = useState(50);
  const [staffCount, setStaffCount] = useState(5);

  // Placeholder calculation logic - will be replaced with actual formulas
  const calculateROI = () => {
    // Example calculations (to be replaced with real data)
    const hoursSavedPerDay = (patientVolume * 0.2 + staffCount * 2).toFixed(1);
    const hoursSavedPerMonth = (parseFloat(hoursSavedPerDay) * 22).toFixed(0);
    const costPerHour = 50; // Average hourly cost
    const moneySavedPerMonth = (
      parseFloat(hoursSavedPerMonth) * costPerHour
    ).toFixed(0);

    return {
      hoursPerDay: hoursSavedPerDay,
      hoursPerMonth: hoursSavedPerMonth,
      moneyPerMonth: moneySavedPerMonth,
    };
  };

  const roi = calculateROI();

  return (
    <section className="relative w-full bg-gradient-to-br from-teal-50 via-white to-blue-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-6">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how much time and money Curify can save your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Your Metrics
            </h3>

            <div className="space-y-6">
              {/* Patient Volume Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Average Daily Patient Volume
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={patientVolume}
                    onChange={(e) =>
                      setPatientVolume(parseInt(e.target.value))
                    }
                    className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <span className="text-2xl font-bold text-teal-600 min-w-[60px] text-right">
                    {patientVolume}
                  </span>
                </div>
              </div>

              {/* Staff Count Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Number of Staff Members
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={staffCount}
                    onChange={(e) => setStaffCount(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <span className="text-2xl font-bold text-teal-600 min-w-[60px] text-right">
                    {staffCount}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Hours Saved Per Day */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-teal-600" />
                <span className="text-sm font-semibold text-slate-600">
                  Hours Saved Per Day
                </span>
              </div>
              <p className="text-4xl font-bold text-slate-900">
                {roi.hoursPerDay}
                <span className="text-xl text-slate-500 ml-2">hours</span>
              </p>
            </div>

            {/* Hours Saved Per Month */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-semibold text-slate-600">
                  Hours Saved Per Month
                </span>
              </div>
              <p className="text-4xl font-bold text-slate-900">
                {roi.hoursPerMonth}
                <span className="text-xl text-slate-500 ml-2">hours</span>
              </p>
            </div>

            {/* Money Saved Per Month */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-6 h-6" />
                <span className="text-sm font-semibold opacity-90">
                  Estimated Savings Per Month
                </span>
              </div>
              <p className="text-4xl font-bold">
                ${parseInt(roi.moneyPerMonth).toLocaleString()}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            Ready to see these savings in your organization?
          </p>
          <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-colors">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseROI;

