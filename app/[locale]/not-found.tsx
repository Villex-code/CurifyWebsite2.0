"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  AlertOctagon,
  Home,
  ArrowRight,
  Search,
  BookOpen,
  LifeBuoy,
  Activity,
  WifiOff,
} from "lucide-react";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto font-sans flex flex-col justify-center relative overflow-hidden">
      {/* Subtle Background Blobs */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#148D98]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[100px] pointer-events-none" />

      {/* --- HERO SECTION (Split Layout) --- */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
        {/* Left: Visual Image (Polished) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] min-h-[450px] md:min-h-[600px] shadow-2xl shadow-slate-200/50 border border-slate-100 group order-last md:order-first"
        >
          {/* Abstract Image */}
          <img
            src="/images/graphics/404.jpg"
            alt="System Abstract"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/20 to-transparent opacity-80" />

          {/* Top Right: Connection Badge */}
          <div className="absolute top-6 right-6">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
              <WifiOff className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                {t("signalLost")}
              </span>
            </div>
          </div>

          {/* Bottom Left: The "Status Code" Card (Premium Glass) */}
          <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 pr-8 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider mb-0.5">
                  {t("errorCode")}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white tracking-tight">
                    404
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {t("notFound")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center relative overflow-hidden p-4"
        >
          <div className="relative">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#148D98]/10 text-[#148D98]">
                <Search className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-[#148D98] uppercase tracking-wider">
                {t("tag")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {t("title.line1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#148D98] to-teal-600">
                {t("title.line2")}
              </span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
              {t("description")}
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/"
                className="group relative px-8 py-4 bg-[#148D98] text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-[#148D98]/30 transition-all hover:shadow-[#148D98]/50 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("goHome")}
                  <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out" />
              </Link>

              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-[#148D98] hover:text-[#148D98] transition-all flex items-center gap-2"
              >
                {t("goBack")}
              </button>
            </div>

            {/* Helper Grid */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <Link
                href="/contact"
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#148D98]/30 hover:bg-[#148D98]/5 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-hover:text-[#148D98] transition-colors">
                    {t("needHelp")}
                  </p>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#148D98] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="text-lg font-bold text-slate-900">
                  {t("contactSupport")}
                </p>
              </Link>

              <Link
                href="/about"
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#148D98]/30 hover:bg-[#148D98]/5 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-hover:text-[#148D98] transition-colors">
                    {t("curious")}
                  </p>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#148D98] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="text-lg font-bold text-slate-900">
                  {t("aboutCurify")}
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- LOWER NAVIGATION CARDS --- */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1: Blog/Resources */}
        <Link href="/blog" className="block h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative h-[300px] md:h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100"
          >
            {/* Background Image */}
            <img
              src="/images/graphics/waves.jpg"
              alt="Curify Blog Image - Providing value"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Premium Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent opacity-90" />

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-start gap-5">
                {/* Glass Icon Box */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 group-hover:bg-[#148D98] group-hover:text-white group-hover:border-[#148D98] transition-all duration-300 flex-shrink-0 shadow-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                    {t("readBlog")}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-sm group-hover:text-white transition-colors">
                    {t("blogDescription")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Card 2: Features/Product */}
        <Link href="/features" className="block h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative h-[300px] md:h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100"
          >
            {/* Background Image */}
            <img
              src="/images/graphics/blobs.jpg"
              alt="Curify Features Image - Streamlining workflows"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Premium Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent opacity-90" />

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-start gap-5">
                {/* Glass Icon Box */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex-shrink-0 shadow-lg">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {t("exploreFeatures")}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-sm group-hover:text-white transition-colors">
                    {t("featuresDescription")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
