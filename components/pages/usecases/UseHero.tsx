"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Import images
import pex1 from "@/public/images/pex1.jpg";
import pex2 from "@/public/images/pex2.jpg";
import pex3 from "@/public/images/pex3.jpg";
import pex4 from "@/public/images/pex4.jpg";
import underlineSvg from "@/public/svgs/underline.svg";

interface UseHeroProps {
  containerHeight?: string;
}

const UseHero = ({
  containerHeight = "2xl:h-[400px] h-[500px]",
}: UseHeroProps) => {
  const t = useTranslations("useHero");

  const images = [
    {
      src: pex1.src,
      alt: t("useHero.images.image1Alt"),
      className: "lg:left-[-100px] top-[10%] rotate-[-15deg] left-[5%]",
    },
    {
      src: pex2.src,
      alt: t("useHero.images.image2Alt"),
      className: "lg:right-[-100px] top-[15%] rotate-[20deg] right-[5%]",
    },
    {
      src: pex3.src,
      alt: t("useHero.images.image3Alt"),
      className: "lg:left-[0%] top-[45%] rotate-[10deg] left-[10%]",
    },
    {
      src: pex4.src,
      alt: t("useHero.images.image4Alt"),
      className: "lg:right-[0] bottom-[25%] rotate-[-10deg] right-[10%] ",
    },
  ];

  return (
    <div className={`relative ${containerHeight} md:block hidden`}>
      <div className="absolute inset-0 w-[95vw] md:w-[80vw] mx-auto  min-h-[500px] sm:min-h-[600px] md:min-h-[700px] ">
        {/* Scattered Images */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`absolute w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 ${image.className}`}
          >
            <div className="relative w-full h-full shadow-xl rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover opacity-40 lg:opacity-75 xl:opacity-80 2xl:opacity-100"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}

        {/* Central Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-5xl px-4">
          {/* Animated Title */}
          <div className="mb-6 space-y-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl xl:text-8xl md:text-6xl font-bold bg-gradient-to-b from-teal-500 to-teal-700 text-transparent bg-clip-text leading-tight pb-4"
            >
              {t("useHero.title")}
            </motion.div>

            {/* Custom Underline SVG */}
            <motion.div
              className="relative h-12 mt-2 mx-auto w-[90%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src={underlineSvg.src}
                  alt={t("useHero.underlineAlt")}
                  fill
                  className="object-fill text-teal-500"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            dangerouslySetInnerHTML={{
              __html: t("useHero.subtitle", {
                emphasis: `<span class="font-bold text-teal-600">${t("useHero.subtitleEmphasis")}</span>`,
              }),
            }}
          />

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-12"
          >
            <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 border border-teal-500 rounded-full"></div>
              <div className="absolute inset-0 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-center gap-2 text-teal-500 group-hover:text-white transition-colors duration-300">
                {t("useHero.contactButton")}
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UseHero;
