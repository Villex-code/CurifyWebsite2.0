"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import FooterContact from "./FooterContact";
import FooterInfo from "./FooterInfo";
import FooterImage from "./FooterImage";
import { usePathname } from "next/navigation";

const Footer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const borderRadius = useTransform(scrollYProgress, [0, 0.8], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  useEffect(() => {
    const unsubscribeProgress = scrollYProgress.onChange((value) => {});
    const unsubscribeBorderRadius = borderRadius.onChange((value) => {});
    return () => {
      unsubscribeProgress();
      unsubscribeBorderRadius();
    };
  }, [scrollYProgress, borderRadius]);

  const pathname = usePathname();

  // Check if we're in the present route
  const isPresentRoute = pathname.includes("/present");

  // If we're in the present route, don't render the navbar
  if (isPresentRoute) {
    return null;
  }

  return (
    <div ref={containerRef} className="pt-[40vh] bg-background">
      <div className="overflow-hidden sticky top-0">
        <FooterImage opacity={opacity} />
      </div>
      <motion.div
        className="bg-background h-full flex flex-col justify-center items-center sticky top-0 overflow-hidden shadow-xl"
        style={{ borderRadius: useMotionTemplate`${borderRadius}px` }}
      >
        <div className="w-full flex flex-col justify-between h-full">
          <FooterContact />
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
