"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ShinyButton from "@/components/ui/buttons/ShinnyButton";
import DotPattern from "@/components/ui/background/DotPattern";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/buttons/RainbowButton";
import TextAnimation from "@/components/ui/text/TextAnimation";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const UseCTA = () => {
  const t = useTranslations("useCTA");
  const locale = useLocale();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background px-4">
      {/* Content Container with better spacing */}
      <DotPattern className="absolute inset-0 h-full w-full text-teal-600/20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
      <div className="flex min-h-screen flex-col items-center gap-8 py-24">
        {/* Top Section */}
        <RainbowButton className="bg-white text-white">
          {t("useCTA.value")}
        </RainbowButton>
        {/* Middle Section - Main CTA */}
        <div className="relative z-10 mx-auto max-w-[95vw] lg:max-w-[80vw] text-center">
          <h2 className="bg-gradient-to-b from-teal-500 to-teal-700 bg-clip-text text-6xl font-bold text-transparent md:text-5xl lg:text-6xl pb-4">
            {t("useCTA.title")}
          </h2>
          <p className="mt-8 text-xl text-muted-foreground md:text-2xl text-gray-500">
            {t("useCTA.subtitle")}
          </p>
          <Link href={`/${locale}/contact`}>
            <button className="mt-12 rounded-lg bg-teal-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-teal-700">
              {t("useCTA.contactButton")}
            </button>
          </Link>
        </div>
        <div className="h-[40rem] flex items-center justify-center">
          <TextAnimation text="CURIFY" />
        </div>
      </div>
    </div>
  );
};

export default UseCTA;
