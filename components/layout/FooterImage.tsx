"use client";
import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface FooterImageProps {
  opacity?: MotionValue<number>;
}

const FooterImage = ({ opacity }: FooterImageProps) => {
  const t = useTranslations("footer");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Transform for parallax effect - image moves up as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <motion.div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden flex items-center justify-between sticky
        top-0"
    >
      {/* Parallax Image Container */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/footer-placeholder.svg"
            alt={t("imageAlt")}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="w-screen h-screen"
          />
          {/* Dynamic Overlay - gets darker as we scroll */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{
              opacity: opacity
                ? useTransform(opacity, [1, 0.4], [0.4, 0.7])
                : 0.3,
            }}
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Empty left column for image space */}
          <div></div>
          {/* Right column with text */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              {t("title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterImage;
