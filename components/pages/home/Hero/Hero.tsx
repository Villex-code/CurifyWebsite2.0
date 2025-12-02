"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/sections/container-scroll";
import HeroRightContent from "@/components/pages/home/Hero/HeroRightContent";
import HeroLeftContent from "@/components/pages/home/Hero/HeroLeftContent";
import HeroTopContent from "@/components/pages/home/Hero/HeroTopContent";
import { motion } from "framer-motion";

// Import optimized images
// import curveImg from "@/public/art/curve_thick.webp";
// import curveImgFallback from "@/public/art/curve_thick_optimized.png";

export default function Hero() {
  return (
    <div className="flex flex-col bg-background">
      <div className="relative w-full h-[20rem] sm:h-[24rem] md:h-[27rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[100%] sm:top-[90%] md:top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroTopContent />
          </motion.div>
          {/* <div className="absolute inset-0 top-0 left-0 w-screen h-[50vh] z-[-1]">
            <picture>
              <source srcSet={curveImg.src} type="image/webp" />
              <Image
                src={curveImgFallback}
                alt="Curve image"
                fill
                quality={85}
                className="opacity-40"
                priority
              />
            </picture>
          </div> */}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-8 sm:pt-12 md:pt-20"
      >
        <ContainerScroll
          titleComponent={<HeroTopContent />}
        >
          <div className="flex h-full items-center justify-center bg-white dark:bg-black p-20">
             <HeroRightContent />
          </div>
        </ContainerScroll>
      </motion.div>
    </div>
  );
}
