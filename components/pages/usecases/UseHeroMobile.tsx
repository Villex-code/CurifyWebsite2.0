"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import images
import pex1 from "@/public/images/pex1.jpg";
import pex2 from "@/public/images/pex2.jpg";
import pex3 from "@/public/images/pex3.jpg";
import pex4 from "@/public/images/pex4.jpg";
import underlineSvg from "@/public/svgs/underline.svg";

interface UseHeroMobileProps {
  containerHeight?: string;
}

const UseHeroMobile = ({
  containerHeight = "h-[200px]",
}: UseHeroMobileProps) => {
  const { t } = useTranslation();

  const images = [
    {
      src: pex1.src,
      alt: t("useHero.images.image1Alt"),
    },
    {
      src: pex2.src,
      alt: t("useHero.images.image2Alt"),
    },
    {
      src: pex3.src,
      alt: t("useHero.images.image3Alt"),
    },
    {
      src: pex4.src,
      alt: t("useHero.images.image4Alt"),
    },
  ];

  return (
    <div className={`relative ${containerHeight} md:hidden`}>
      <div className="absolute inset-0 w-[95vw] mx-auto min-h-[600px]">
        {/* Images Row - Positioned absolutely at the top */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full">
          <div className="flex justify-center gap-3 px-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20"
              >
                <div
                  className={`relative w-full h-full shadow-lg rounded-lg overflow-hidden transform ${
                    index % 2 === 0 ? "rotate-[-8deg]" : "rotate-[8deg]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Section - Centered absolutely */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          {/* Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-teal-500 to-teal-700 text-transparent bg-clip-text leading-tight text-center"
            >
              {t("useHero.title")}
            </motion.div>

            {/* Custom Underline SVG */}
            <motion.div
              className="relative h-8 mt-2 mx-auto w-[90%] sm:w-[85%]"
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
            className="text-sm sm:text-base text-gray-600 text-center max-w-md mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            dangerouslySetInnerHTML={{
              __html: t("useHero.subtitle", {
                emphasis: `<span class="font-bold text-teal-600">${t("useHero.subtitleEmphasis")}</span>`,
              }),
            }}
          />

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center mt-8"
          >
            <button className="group relative px-6 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 overflow-hidden">
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
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UseHeroMobile;
