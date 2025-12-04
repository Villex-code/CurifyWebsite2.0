"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BriefcaseMedical, Stethoscope, Building2 } from "lucide-react";

const SEGMENTS = [
  {
    id: "medical-office",
    label: "Medical Office",
    icon: BriefcaseMedical,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "clinic",
    label: "Clinic",
    icon: Stethoscope,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    id: "hospital",
    label: "Hospital",
    icon: Building2,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

interface UseCaseHeroProps {
  activeSegment: string;
  onSegmentChange: (segment: string) => void;
}

const UseCaseHero = ({ activeSegment, onSegmentChange }: UseCaseHeroProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Who are you?
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Select your healthcare setting to see how Curify transforms your
            operations
          </p>

          {/* Segment Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {SEGMENTS.map((segment) => {
              const Icon = segment.icon;
              const isActive = activeSegment === segment.id;

              return (
                <button
                  key={segment.id}
                  onClick={() => onSegmentChange(segment.id)}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300
                    ${
                      isActive
                        ? `${segment.bgColor} ${segment.color} shadow-lg scale-105`
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {segment.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Sticky Navigation Bar */}
      <motion.div
        initial={false}
        animate={{
          opacity: isSticky ? 1 : 0,
          y: isSticky ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className={`
          sticky top-20 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm
          ${isSticky ? "block" : "hidden"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 py-4">
            <span className="text-sm font-semibold text-slate-500 mr-4">
              Jump to:
            </span>
            {SEGMENTS.map((segment) => {
              const Icon = segment.icon;
              const isActive = activeSegment === segment.id;

              return (
                <button
                  key={segment.id}
                  onClick={() => {
                    onSegmentChange(segment.id);
                    // Scroll to comparison section
                    document
                      .getElementById("use-case-comparison")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? `${segment.bgColor} ${segment.color}`
                        : "text-slate-600 hover:bg-slate-100"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {segment.label}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UseCaseHero;

