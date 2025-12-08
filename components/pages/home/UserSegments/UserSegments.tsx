"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./segments/HeroSection";
import OfficeSegment from "./segments/OfficeSegment";
import ClinicSegment from "./segments/ClinicSegment";
import HospitalSegment from "./segments/HospitalSegment";

const UserSegments = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  // Container Transform Animations
  const paddingValue = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  const radiusValue = useTransform(scrollYProgress, [0, 1], ["0px", "48px"]);
  const borderValue = useTransform(scrollYProgress, [0, 1], ["0px", "1px"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden py-10"
    >
      {/* --- ANIMATED CONTAINER WRAPPER --- */}
      <motion.div
        style={{ padding: paddingValue }}
        className="w-full transition-all ease-out duration-700"
      >
        <motion.div
          style={{
            borderRadius: radiusValue,
            borderWidth: borderValue,
          }}
          className="relative w-full bg-[#F5F7F9] overflow-hidden shadow-sm border-slate-200/60"
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 w-full h-full opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
            {/* =========================================
                1. HERO SECTION
            ========================================= */}
            <HeroSection />

            {/* =========================================
                2. SEGMENTS (Zig-Zag then Center)
            ========================================= */}
            <div className="flex flex-col gap-32 lg:gap-48 relative z-20">
              {/* --- SEGMENT A: MEDICAL OFFICE --- */}
              <OfficeSegment />

              {/* --- SEGMENT B: PRIVATE CLINIC --- */}
              <ClinicSegment />

              {/* --- SEGMENT C: HOSPITAL --- */}
              <HospitalSegment />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UserSegments;
