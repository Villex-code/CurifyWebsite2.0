"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TextAnimation from "@/components/ui/text/TextAnimation";
import FinancialOsCard from "./FinancialOsCard";
import SmartPharmacyCard from "./SmartPharmacyCard";
import AiDiagnosticsCard from "./AiDiagnosticsCard";
import FacilityOperationsCard from "./FacilityOperationsCard";

const CoreCapabilities = () => {
  const t = useTranslations("home");

  return (
    <section className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <AnimatedTitle text={t("coreCapabilities.title")} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-500 leading-relaxed"
          >
            {t("coreCapabilities.description")}
          </motion.p>
        </div>

        {/* --- BROKEN MOSAIC GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* 1. HERO: FINANCIALS */}
          <div className="md:col-span-7 lg:col-span-8 row-span-2">
            <FinancialOsCard t={t} />
          </div>

          {/* 2. IOT PHARMACY */}
          <div className="md:col-span-5 lg:col-span-4 row-span-2">
            <SmartPharmacyCard t={t} />
          </div>

          {/* 3. AI INTELLIGENCE */}
          <div className="md:col-span-5 lg:col-span-4 min-h-[320px]">
            <AiDiagnosticsCard t={t} />
          </div>

          {/* 4. FACILITY OPS */}
          <div className="md:col-span-7 lg:col-span-8 min-h-[320px]">
            <FacilityOperationsCard t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated Title Component with Color Split
const AnimatedTitle = ({ text }: { text: string }) => {
  // Clean the text by removing HTML tags and extra spaces
  const cleanText = text
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = cleanText.split(" ");
  const firstThreeWords = words.slice(0, 3).join(" ");
  const lastFourWords = words.slice(3).join(" ");

  return (
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
      <TextAnimation
        text={firstThreeWords}
        classname="text-slate-900 normal-case"
        letterAnime={true}
        direction="up"
        as="span"
      />{" "}
      <TextAnimation
        text={lastFourWords}
        classname="text-teal-600 normal-case"
        letterAnime={true}
        direction="up"
        as="span"
      />
    </h2>
  );
};

export default CoreCapabilities;
