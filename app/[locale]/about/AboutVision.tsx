"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AboutVision = () => {
  const visionPoints = [
    "Providing Accessible Education",
    "Building Trust",
    "Enhancing Student Engagement",
    "Community Involvement",
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- THE CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] border border-slate-100 relative z-10 overflow-visible"
          style={{
            // Custom Teal Shadow
            boxShadow:
              "0 25px 50px -12px rgba(13, 148, 136, 0.15), 0 0 0 1px rgba(13, 148, 136, 0.05)",
          }}
        >
          <div className="relative flex flex-col lg:flex-row items-center p-8 md:p-12 lg:p-16 min-h-[500px]">
            {/* --- LEFT: CONTENT --- */}
            {/* z-20 ensures text is always clickable/selectable over the image */}
            <div className="w-full lg:w-1/2 relative z-20 space-y-8 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Let's know about our <br />
                  <span className="text-teal-600">main goal</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 leading-relaxed max-w-lg"
              >
                We provide clear, accessible information about our programs so
                students and parents can make confident choices.
              </motion.p>

              {/* Checkmarks Grid */}
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-2">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm shadow-teal-200">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm sm:text-base leading-tight">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- RIGHT: IMAGE (Anchored Bottom Right) --- */}
            {/* 
                On Mobile: It's a relative block below text.
                On Desktop (lg): It's absolute bottom-right, ignoring text flow height.
            */}
            <div className="relative w-full h-[350px] lg:absolute lg:bottom-[40px] lg:right-[100px] lg:w-[50%] lg:h-auto lg:top-auto flex items-end justify-center lg:justify-end z-10 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative w-full h-full flex items-end justify-center lg:justify-end"
              >
                <img
                  src="/images/graphics/flower.png"
                  alt="Our Goal Visualization"
                  className="w-auto h-full max-h-[400px] lg:max-h-[650px] object-contain object-bottom lg:-mr-10 lg:-mb-10 drop-shadow-2xl"
                />
              </motion.div>

              {/* Decorative Blur (Behind Image) */}
              <div className="absolute right-10 bottom-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVision;
