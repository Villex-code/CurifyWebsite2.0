"use client";
import React from "react";
import { motion } from "framer-motion";
import logo from "@/public/images/logo.png";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mb-6"
        >
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full opacity-50 animate-pulse" />
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <Image src={logo.src} alt="Logo" width={32} height={32} />
            </div>
          </div>
        </motion.div>

        {/* Title section */}
        <div className="space-y-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span className="block">Smart Healthcare</motion.span>
            <motion.span className="block text-teal-600">
              Simplified
            </motion.span>
          </motion.h1>

          {/* Loading indicator */}
          <motion.div
            className="flex flex-col items-center gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Progress bar */}
            <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>

            {/* Subtitle text */}
            <motion.p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl font-light">
              Loading...
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
