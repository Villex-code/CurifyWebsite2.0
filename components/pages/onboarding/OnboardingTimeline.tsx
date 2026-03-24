"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, TrendingUp, Play } from "lucide-react";

interface TimelineCardProps {
  videoId: string;
  stepKey: string;
  index: number;
}

const TimelineCard = ({ videoId, stepKey, index }: TimelineCardProps) => {
  const t = useTranslations(`onboarding.steps.${stepKey}`);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const align = index % 2 === 0 ? "left" : "right";
  
  const alignmentClass =
    align === "left"
      ? "mr-auto md:ml-10 lg:ml-12"
      : "ml-auto md:mr-10 lg:mr-12";

  return (
    <div className={`relative w-full max-w-2xl ${alignmentClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative bg-white rounded-[2.5rem] p-1 shadow-2xl shadow-slate-200/60 border border-white group">
          <div className="bg-white rounded-[2.3rem] overflow-hidden relative">
            {/* Header Area */}
            <div className="p-8 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border text-teal-600 bg-teal-50 border-teal-100">
                  Step 0{index + 1}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Impact</span>
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    {t("stat")}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-teal-600 transition-colors">
                {t("title")}
              </h3>
              <p className="text-sm font-bold uppercase tracking-wide mb-4 text-teal-600/80">
                {t("subtitle")}
              </p>

              <p className="text-slate-600 leading-relaxed text-base mb-6">
                {t("description")}
              </p>
            </div>

            {/* Video Section */}
            <div 
              className="relative aspect-video w-full bg-black border-t border-slate-100 cursor-pointer group/video"
              onClick={() => setIsPlaying(true)}
            >
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=1`}
                  title={t("title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={t("title")}
                    className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity duration-500"
                  />
                  {/* Custom Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover/video:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white fill-current ml-1" />
                    </div>
                  </div>
                  {/* Bottom Gradient overlay to look like a player */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function OnboardingTimeline() {
  const t = useTranslations("onboarding.steps");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const steps = [
    { id: "_mOy4Ta4Tek", key: "step1" },
    { id: "A06iI-fydZI", key: "step2" },
    { id: "etkIGdbPpMk", key: "step3" },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header section similar to AboutGrowth */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-teal-600" />
                <span className="text-teal-700 font-bold uppercase tracking-widest text-sm">
                  {t("badge")}
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
                {t("title")}
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                {t("description")}
              </p>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <TrendingUp size={24} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Timeline with SVG Path */}
        <div className="relative">
          {/* Lifeline Background SVG - Responsive adaptation */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1000 1200"
              fill="none"
            >
              <motion.path
                d="M 200 0 C 200 100, 800 200, 800 300 C 800 400, 200 500, 200 600 C 200 700, 800 800, 800 900 C 800 1000, 200 1100, 200 1200"
                stroke="url(#gradientLineOnboarding)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 8"
                style={{ pathLength: scrollYProgress, opacity: 0.4 }}
              />
              <defs>
                <linearGradient id="gradientLineOnboarding" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-16 md:gap-32 w-full">
            {steps.map((step, idx) => (
              <TimelineCard 
                key={step.id} 
                videoId={step.id} 
                stepKey={step.key} 
                index={idx} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
