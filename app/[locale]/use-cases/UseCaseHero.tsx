"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  BriefcaseMedical,
  Stethoscope,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface UseCaseHeroProps {
  activeSegment: string;
  onSegmentChange: (segment: string) => void;
}

type SegmentId = "medical-office" | "clinic" | "hospital";

const UseCaseHero = ({ activeSegment, onSegmentChange }: UseCaseHeroProps) => {
  const t = useTranslations("useCases.hero");

  const SEGMENTS = [
    {
      id: "medical-office",
      title: t("segments.medicalOffice.title"),
      subtitle: t("segments.medicalOffice.subtitle"),
      desc: t("segments.medicalOffice.description"),
      icon: BriefcaseMedical,
    },
    {
      id: "clinic",
      title: t("segments.clinic.title"),
      subtitle: t("segments.clinic.subtitle"),
      desc: t("segments.clinic.description"),
      icon: Stethoscope,
    },
    {
      id: "hospital",
      title: t("segments.hospital.title"),
      subtitle: t("segments.hospital.subtitle"),
      desc: t("segments.hospital.description"),
      icon: Building2,
    },
  ];

  const handleSelection = (id: SegmentId) => {
    onSegmentChange(id);
    // Small delay to ensure state updates before scrolling
    setTimeout(() => {
      const element = document.getElementById("use-case-content");
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center  pt-32 pb-20">
      {/* --- BACKGROUND SUBTLETY --- */}

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        {/* --- REFINED HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-teal-500" />
              {t("badge")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight mb-6">
              {t("title")} <br />
              <span className="font-serif italic text-teal-700">
                {t("titleHighlight")}
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* --- SPOTLIGHT SELECTOR GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {SEGMENTS.map((segment, index) => (
            <SpotlightCard
              key={segment.id}
              segment={segment}
              isActive={activeSegment === segment.id}
              onClick={() => handleSelection(segment.id as SegmentId)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: SPOTLIGHT CARD ---
const SpotlightCard = ({ segment, isActive, onClick, index }: any) => {
  const t = useTranslations("useCases.hero");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`
        group relative flex flex-col items-start text-left p-6 md:p-8 rounded-2xl border transition-all duration-300 w-full
        ${
          isActive
            ? "bg-white border-teal-500 ring-1 ring-teal-500 shadow-xl shadow-teal-900/5"
            : "bg-white/40 border-slate-200 hover:border-teal-200 hover:bg-white"
        }
      `}
    >
      {/* Spotlight Effect (Only visible on hover) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(20, 184, 166, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Header: Icon & Active Indicator */}
      <div className="flex w-full justify-between items-start mb-6">
        <div
          className={`
           w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
           ${
             isActive
               ? "bg-teal-50 text-teal-600"
               : "bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-sm"
           }
        `}
        >
          <segment.icon className="w-6 h-6" />
        </div>

        {/* Radio Circle */}
        <div
          className={`
           w-5 h-5 rounded-full border flex items-center justify-center transition-colors
           ${
             isActive
               ? "border-teal-500"
               : "border-slate-300 group-hover:border-teal-300"
           }
        `}
        >
          {isActive && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full" />}
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 space-y-1">
        <h3
          className={`text-lg font-bold transition-colors ${
            isActive ? "text-slate-900" : "text-slate-700"
          }`}
        >
          {segment.title}
        </h3>
        <p className="text-xs font-bold text-teal-600 uppercase tracking-wide">
          {segment.subtitle}
        </p>
        <p className="text-sm text-slate-500 leading-relaxed pt-2">
          {segment.desc}
        </p>
      </div>

      {/* Hover Reveal Arrow */}
      <div
        className={`
         mt-6 flex items-center gap-2 text-sm font-bold transition-all duration-300
         ${
           isActive
             ? "text-teal-600 opacity-100"
             : "text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
         }
      `}
      >
        {isActive ? t("viewDetails") : t("select")}
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.button>
  );
};

export default UseCaseHero;
