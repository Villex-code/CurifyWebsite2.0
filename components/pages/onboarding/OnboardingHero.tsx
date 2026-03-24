"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Volume2, VolumeX } from "lucide-react";

export default function OnboardingHero() {
  const t = useTranslations("onboarding.hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 0.99]);

  return (
    <section
      ref={containerRef}
      className="relative pt-12 pb-8 md:pt-20 md:pb-12 max-w-7xl mx-auto"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* --- TOP ROW: HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  {t("badge")}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1]">
                {t("title.part1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500 italic font-serif pr-2">
                  {t("title.part2")}
                </span>
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium opacity-80">
                {t("subtitle")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- VIDEO AREA --- */}
        <motion.div
          style={{ y: yVideo, scale: scaleVideo }}
          className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(20,141,152,0.15)] bg-slate-100"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/cYq3wJg4Czc?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=cYq3wJg4Czc&rel=0&modestbranding=1&controls=1&iv_load_policy=3&showinfo=0`}
            title="Introduction Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Unmute Button Overlay */}
          <button
            onClick={() => setIsMuted((prev) => !prev)}
            className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all duration-300 group shadow-xl border border-white/10"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Unmute Video
                </span>
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Mute Video
                </span>
              </>
            )}
          </button>

          {/* Spotlight Glow behind video */}
          <div className="absolute -inset-10 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
