"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Iphone15Pro } from "@/components/ui/small/iPhone15";
// import mobile_storage from "@/public/app/mobile_storage.webp";
// import mobile_settings from "@/public/app/mobile_settings.webp";
// import mobile_storage_fallback from "@/public/app/mobile_storage_optimized.png";
// import mobile_settings_fallback from "@/public/app/mobile_settings_optimized.png";
import { useTranslations } from "next-intl";

const DeviceScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const t = useTranslations("DeviceScroll");

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Responsive transform calculations
  const getPhoneScale = () => {
    if (screenWidth < 640) return 0.35; // Small mobile
    if (screenWidth < 768) return 0.4; // Mobile
    if (screenWidth < 1024) return 0.7; // Tablet
    return 0.8; // Desktop
  };

  const getPhonePosition = () => {
    if (screenWidth < 640) return "5%";
    if (screenWidth < 768) return "8%";
    if (screenWidth < 1024) return "10%";
    return "10%";
  };

  const getPhoneRotation = () => {
    if (screenWidth < 640) return 15;
    if (screenWidth < 768) return 20;
    return 25;
  };

  // Transform values with responsive considerations
  const rightPhoneY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-200%" : "-300%"]
  );

  const leftPhoneY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-20%" : "-80%"]
  );

  return (
    <div ref={containerRef} className="relative h-[100vh] w-full">
      {/* Content container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Text content */}
        <div className="absolute z-10 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light pb-4 bg-clip-text text-transparent bg-gradient-to-b from-teal-500 to-teal-700">
            {t("title.firstLine")} <br />{" "}
            {t("title.secondLine")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Phones container */}
        <div className="relative w-full h-full">
          {/* Left phone */}
          <motion.div
            className={`absolute left-[${getPhonePosition()}] top-1/2 -translate-x-1/2 -translate-y-1/2`}
            style={{
              y: leftPhoneY,
              scale: getPhoneScale(),
            }}
          >
            <div
              className={`h-[50vh] transform`}
              style={{
                rotate: `-${getPhoneRotation()}deg`,
                transformOrigin: "center center",
              }}
            >
              <Iphone15Pro src={""} className="w-full h-full" />
            </div>
          </motion.div>

          {/* Right phone - Hidden on very small screens */}
          <motion.div
            className={`absolute right-[${getPhonePosition()}] top-1/2 translate-x-1/2 -translate-y-1/2 `}
            style={{
              y: rightPhoneY,
              scale: getPhoneScale(),
            }}
          >
            <div
              className={`h-[50vh] transform`}
              style={{
                rotate: `${getPhoneRotation()}deg`,
                transformOrigin: "center center",
              }}
            >
              <Iphone15Pro
                src={""}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DeviceScroll;
