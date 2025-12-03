"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/sections/container-scroll";
import HeroRightContent from "@/components/pages/home/Hero/HeroRightContent";
import HeroLeftContent from "@/components/pages/home/Hero/HeroLeftContent";
import HeroTopContent from "@/components/pages/home/Hero/HeroTopContent";
import { motion } from "framer-motion";

// Images are loaded from public directory

export default function Hero() {
  return (
    <div className="flex flex-col bg-background ">
      {/* Mobile: HeroTopContent in normal flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:hidden my-20"
      >
        <HeroTopContent />
      </motion.div>

      {/* Desktop: HeroTopContent with absolute positioning and curve background */}
      <div className="hidden md:block relative w-full h-[22rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroTopContent />
          </motion.div>
          <div className="absolute inset-0 top-0 left-0 w-screen h-[50vh] z-[-1]">
            <picture>
              <source
                srcSet="/images/graphics/curve_thick.webp"
                type="image/webp"
              />
              <Image
                src="/images/graphics/curve_thick.webp"
                alt="Curve image"
                fill
                quality={85}
                className="opacity-40"
                priority
              />
            </picture>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden md:block pt-8 sm:pt-12 md:pt-20"
      >
        <ContainerScroll
          rightComponent={HeroRightContent}
          leftComponent={HeroLeftContent}
        />
      </motion.div>
    </div>
  );
}
