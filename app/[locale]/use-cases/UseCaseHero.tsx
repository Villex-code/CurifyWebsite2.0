"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BriefcaseMedical,
  Stethoscope,
  Building2,
  ArrowDown,
  Sparkles,
  MousePointerClick,
} from "lucide-react";

interface UseCaseHeroProps {
  activeSegment: string;
  onSegmentChange: (segment: string) => void;
}

type SegmentId = "medical-office" | "clinic" | "hospital";

const SEGMENTS = [
  {
    id: "medical-office",
    title: "Medical Office",
    subtitle: "Solo Practitioners",
    icon: BriefcaseMedical,
  },
  {
    id: "clinic",
    title: "Private Clinic",
    subtitle: "Multi-Specialty",
    icon: Stethoscope,
  },
  {
    id: "hospital",
    title: "Hospital",
    subtitle: "Enterprise Scale",
    icon: Building2,
  },
];

const UseCaseHero = ({ activeSegment, onSegmentChange }: UseCaseHeroProps) => {
  const handleSelection = (id: SegmentId) => {
    onSegmentChange(id);
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
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-24 pb-16">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* The Field Image */}
        <div className="absolute bottom-0 w-full h-[80%] opacity-20 mix-blend-multiply">
          <div className="relative w-full h-full">
            <Image
              src="/images/graphics/background.jpg"
              alt="Background texture"
              fill
              className="object-cover object-bottom"
              priority
            />
            {/* Gradient Masks */}
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-white" />
            <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-transparent" />
          </div>
        </div>

        {/* Subtle Teal Glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* --- TYPOGRAPHY HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-teal-100 bg-white/60 backdrop-blur-md text-teal-700 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3 h-3" />
              Tailored Workflows
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-slate-900 mb-8">
              <span className="font-serif italic font-light text-slate-500/80 block md:inline mr-4">
                Precision healthcare
              </span>
              <br />
              <span className="font-sans font-extrabold text-transparent bg-clip-text bg-linear-to-br from-teal-700 to-teal-500">
                at any scale.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Curify shapeshifts to fit your environment.
            </p>
          </motion.div>
        </div>

        {/* --- INTERACTIVE INSTRUCTION --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <MousePointerClick className="w-4 h-4 text-teal-500" />
            Which one describes you best?
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400 animate-bounce" />
        </motion.div>

        {/* --- GLASS CARD SELECTOR --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SEGMENTS.map((segment, index) => {
            const isActive = activeSegment === segment.id;
            return (
              <motion.button
                key={segment.id}
                onClick={() => handleSelection(segment.id as SegmentId)}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                className={`
                  group relative flex flex-col items-center p-8 rounded-4xl text-center transition-all duration-300
                  backdrop-blur-xl border cursor-pointer outline-none
                  ${
                    isActive
                      ? "bg-white/90 border-teal-400 shadow-2xl shadow-teal-900/10 scale-105 z-10"
                      : "bg-white/40 border-white/60 hover:bg-white/70 hover:border-teal-200 hover:shadow-xl hover:-translate-y-2"
                  }
                `}
              >
                {/* Visual "Radio Button" Indicator at Top Right */}
                <div
                  className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isActive
                      ? "border-teal-500 bg-teal-50"
                      : "border-slate-300 bg-transparent"
                  }`}
                >
                  {isActive && (
                    <div className="w-3 h-3 bg-teal-500 rounded-full" />
                  )}
                </div>

                {/* Active Glow Background */}
                {isActive && (
                  <div className="absolute inset-0 bg-linear-to-b from-teal-50/40 to-transparent rounded-4xl -z-10" />
                )}

                {/* Icon Container */}
                <div
                  className={`
                  w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm border
                  ${
                    isActive
                      ? "bg-teal-600 text-white border-teal-500 rotate-3 shadow-teal-500/30"
                      : "bg-white text-slate-400 border-white group-hover:text-teal-600 group-hover:scale-110"
                  }
                `}
                >
                  <segment.icon className="w-10 h-10" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3
                    className={`text-2xl font-bold transition-colors ${
                      isActive ? "text-teal-900" : "text-slate-700"
                    }`}
                  >
                    {segment.title}
                  </h3>
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isActive
                        ? "text-teal-600"
                        : "text-slate-400 group-hover:text-teal-600/70"
                    }`}
                  >
                    {segment.subtitle}
                  </p>
                </div>

                {/* Click Hint (Only visible on hover or active) */}
                <div
                  className={`
                    mt-8 text-sm font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "text-teal-600"
                        : "text-slate-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    }
                `}
                >
                  {isActive ? "Selected" : "Click to Select"}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCaseHero;
