"use client";
import React from "react";
import { VelocityScroll } from "@/components/ui/text/VelocityScroll";
import { useTranslations } from "next-intl";

const MainVelocityText = () => {
  const t = useTranslations("MainVelocityText");

  return (
    <div className="w-screen flex flex-col items-center justify-center overflow-hidden py-40">
      <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-teal-800 to-transparent mb-12" />
      <VelocityScroll
        topText={t("topText")}
        bottomText={t("bottomText")}
        default_velocity={1}
        topClassName="font-display text-center text-2xl font-semibold tracking-[-0.02em] text-teal-800 drop-shadow-sm md:text-5xl md:leading-[4rem] mt-8"
        bottomClassName="font-display text-center text-2xl font-light tracking-[-0.02em] text-teal-600 drop-shadow-sm md:text-5xl md:leading-[4rem] mb-8"
        dividerClassName="w-[60%] h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent my-6"
      />
      <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-teal-800 to-transparent mt-12" />
    </div>
  );
};

export default MainVelocityText;
