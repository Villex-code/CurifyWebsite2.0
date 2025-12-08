"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesCore } from "@/components/ui/background/Particles";
import { Play, X } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "@/components/ui/small/AnimatedButton";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function UseCaseCTA() {
  const t = useTranslations("HomePage");
  const [isPlaying, setIsPlaying] = useState(false);
  const vimeoId = "1028569515";
  const embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=0&controls=1`;

  return (
    <div className="min-h-screen w-full   flex flex-col items-center justify-center overflow-hidden relative py-20">
      {/* Background subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/30 to-transparent" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-4 w-full">
        {/* Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center relative flex flex-col gap-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 pb-2">
              {t("useCase.title.line1")}
            </span>
          </h2>
        </motion.div>

        {/* Video Container */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
              onClick={() => setIsPlaying(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-[90vw] aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <iframe
                  src={embedUrl}
                  className="w-full h-full rounded-xl"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto mt-8"
        >
          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full border-4 border-teal-600 rounded-xl overflow-hidden p-1">
              <Image
                src="/images/pex2.jpg"
                alt={t("useCase.videoAlt")}
                fill
                className="object-cover rounded-lg"
              />
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:bg-black/30 group"
              >
                <motion.div className="bg-white rounded-full p-4 shadow-lg transition-transform duration-300 group-hover:scale-110 active:scale-95">
                  <Play className="w-12 h-12 text-teal-600" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Sparkles container */}
        <div className="w-full max-w-4xl h-40 relative mt-8">
          {/* Animated gradient lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent h-px w-1/4" />
          </motion.div>

          {/* Sparkles effect */}
          <SparklesCore
            minSize={0.4}
            maxSize={1}
            particleDensity={1000}
            className="w-full h-full"
            particleColor="#0D9488"
            speed={0.5}
          />

          {/* Radial mask for smooth fade */}
          <div className="absolute inset-0 w-full h-full bg-[#ffffff] [mask-image:radial-gradient(350px_200px_at_top,transparent_30%,#ffffff)]" />
        </div>

        {/* Subtitle and CTA */}
        <Link href="/contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 space-y-6 flex flex-col items-center justify-center"
          >
            <p className="text-xl md:text-2xl text-teal-700 max-w-2xl mx-auto px-4">
              {t("useCase.subtitle")}
            </p>
            <AnimatedButton />
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default UseCaseCTA;
