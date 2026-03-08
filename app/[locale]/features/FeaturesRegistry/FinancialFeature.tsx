"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Receipt,
  Users,
  Building2,
  Stethoscope,
  Package,
  Zap,
  CheckCircle2,
  ArrowRight,
  History,
  PieChart,
  Wallet,
} from "lucide-react";
import { useTranslations } from "next-intl";

const FinancialFeature = () => {
  const t = useTranslations("FeatureCards.financial-management");

  return (
    <div className="space-y-12">
      {/* --- HERO VISUAL: THE SMART CHECKOUT --- */}
      <div className="relative h-[450px] w-full bg-slate-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center p-8 border border-slate-200">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-teal-50/30" />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          {/* 1. The Digital Receipt */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-teal-500 rounded-md">
                  <Receipt className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-xs font-bold uppercase">
                  {t("hero.invoice")}
                </span>
              </div>
              <span className="text-slate-400 text-[10px]">
                {t("hero.today")}
              </span>
            </div>

            {/* Line Items (Mixed Basket) */}
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-100">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-blue-500" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700">
                      {t("hero.service_title")}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {t("hero.service_type")}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-700">$80.00</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-100">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-500" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700">
                      {t("hero.product_title")}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {t("hero.product_type")}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-700">$25.00</span>
              </div>
            </div>

            {/* Total */}
            <div className="p-4 bg-slate-50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase">
                {t("hero.total")}
              </span>
              <span className="text-xl font-bold text-slate-900">$105.00</span>
            </div>
          </motion.div>

          {/* 2. The POS Interaction */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-1 bg-slate-200 rounded-full"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-48 bg-slate-900 rounded-3xl p-6 shadow-2xl text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500" />
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-teal-400" />
                </div>
              </div>
              <p className="text-white font-bold text-lg mb-1">
                {t("hero.processing")}
              </p>
              <p className="text-slate-400 text-xs">
                {t("hero.reader_active")}
              </p>

              {/* Success Check overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute inset-0 bg-teal-600 flex flex-col items-center justify-center z-20"
              >
                <CheckCircle2 className="w-10 h-10 text-white mb-2" />
                <span className="text-white font-bold text-sm">
                  {t("hero.approved")}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- WORKFLOW STEPS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">
              {t("steps.step1_title")}
            </h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t.rich("steps.step1_desc", {
              strong1: (chunks) => <strong>{t("steps.patient")}</strong>,
              strong2: (chunks) => <strong>{t("steps.business")}</strong>,
            })}
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">
              {t("steps.step2_title")}
            </h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t.rich("steps.step2_desc", {
              strong1: (chunks) => (
                <strong>{t("steps.medical_services")}</strong>
              ),
              strong2: (chunks) => (
                <strong>{t("steps.physical_products")}</strong>
              ),
            })}
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">
              {t("steps.step3_title")}
            </h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t.rich("steps.step3_desc", {
              strong: (chunks) => <strong>{t("steps.pos_terminal")}</strong>,
              em1: (chunks) => <em>{t("steps.pending")}</em>,
              em2: (chunks) => <em>{t("steps.completed")}</em>,
            })}
          </p>
        </div>
      </div>

      {/* --- SMART FEATURES (Templates & One-Click) --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* ONE-CLICK FLOW */}
        <div className="md:col-span-7 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3 h-3" /> {t("automation.badge")}
            </div>
            <h3 className="text-2xl font-bold mb-2">{t("automation.title")}</h3>
            <p className="text-slate-400 text-sm max-w-sm mb-8">
              {t("automation.description")}
            </p>

            {/* Visual Flow */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-center w-24">
                <History className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <span className="text-[10px] font-bold block">
                  {t("automation.visit_log")}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <div className="bg-teal-500 p-3 rounded-xl shadow-lg shadow-teal-500/20 text-center w-28 transform scale-110">
                <Receipt className="w-5 h-5 text-white mx-auto mb-2" />
                <span className="text-[10px] font-bold block">
                  {t("automation.auto_invoice")}
                </span>
              </div>
            </div>
          </div>

          {/* Decor */}
          <div className="absolute right-0 bottom-0 opacity-10">
            <Receipt className="w-48 h-48 -mb-8 -mr-8" />
          </div>
        </div>

        {/* TEMPLATES */}
        <div className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-xl text-orange-600">
              <PieChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {t("templates.title")}
            </h3>
          </div>
          <p className="text-slate-600 text-sm mb-6">
            {t("templates.description")}
          </p>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg border border-slate-200">
              {t("templates.template1")}
            </div>
            <div className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg border border-slate-200">
              {t("templates.template2")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialFeature;
