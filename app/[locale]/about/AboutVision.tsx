"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

const AboutVision = () => {
  const t = useTranslations("about.vision");
  const visionPoints = t.raw("points");

  return (
    <section className="py-24 md:py-32 relative overflow-visible">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* --- THE CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] border border-slate-100 relative z-10"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(13, 148, 136, 0.15), 0 0 0 1px rgba(13, 148, 136, 0.05)",
          }}
        >
          {/* Subtle Background Blob inside card */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[3rem] z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[100px]" />
          </div>

          <div className="relative w-full p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center lg:items-start pb-0 md:pb-0 lg:pb-20">
            {/* --- LEFT: CONTENT AREA --- */}
            <div className="w-full lg:w-3/5 relative z-20">
              {/* Artistic Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-teal-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    {t("badge")}
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl text-slate-900 leading-[0.95] tracking-tight">
                  <span className="font-bold block">{t("title.line1")}</span>
                  <span className="font-serif italic font-light text-teal-600 block pl-2 md:pl-12 mt-2">
                    {t("title.line2")}
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex gap-6 mb-12 pl-2"
              >
                <div className="w-px h-auto bg-gradient-to-b from-teal-500 to-transparent" />
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-md">
                  {t("description")}
                </p>
              </motion.div>

              {/* Floating Pills */}
              <div className="flex flex-wrap gap-3 max-w-xl">
                {visionPoints.map((point: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm hover:border-teal-200 hover:text-teal-700 hover:shadow-md transition-all cursor-default"
                  >
                    {point}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- RIGHT: POP-OUT IMAGE --- */}
            {/* 
                Positioned Absolute on Desktop to break out of the container bounds.
                Negative margins (-right, -bottom) allow it to overflow.
            */}
            <div className="relative mt-12 lg:mt-0 lg:absolute lg:bottom-[79px] lg:right-0 w-full lg:w-[45%] pointer-events-none z-30 flex justify-center lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                viewport={{ once: true }}
                // These negative margins create the "Pop Out" effect
                className="lg:-mr-12 lg:-mb-16 xl:-mr-20 xl:-mb-20"
              >
                <img
                  src="/images/graphics/flower.png"
                  alt="Artistic Vision"
                  className="w-[80%] md:w-[60%] lg:w-auto h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[700px] object-contain drop-shadow-2xl mx-auto lg:mx-0 translate-y-8 lg:translate-y-0"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVision;
