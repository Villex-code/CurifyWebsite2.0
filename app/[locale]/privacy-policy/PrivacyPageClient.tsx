"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Calendar } from "lucide-react";
import { privacyData } from "./privacyData";
import PrivacySidebar from "./PrivacySidebar";
import PrivacyContent from "./PrivacyContent";

const PrivacyPageClient = () => {
  const [activeSection, setActiveSection] = useState(
    privacyData.sections[0].id
  );

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = privacyData.sections.map((s) =>
        document.getElementById(s.id)
      );

      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // Offset for sticky header
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- HEADER --- */}
      <header className="relative bg-white border-b border-slate-200 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Lock className="w-4 h-4" />
              Data Protection
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4" /> Last Updated:{" "}
                {privacyData.lastUpdated}
              </span>
              <span className="hidden md:inline">•</span>
              <span>Committed to GDPR & HIPAA Compliance</span>
            </div>
          </motion.div>
        </div>

        {/* Background Gradient Blob */}
        <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-teal-50/40 to-transparent pointer-events-none" />
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          <PrivacySidebar
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
          <PrivacyContent />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPageClient;

