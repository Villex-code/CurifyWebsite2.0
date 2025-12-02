"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8"
        >
          About Curify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Revolutionizing healthcare management through innovative technology and patient-centered solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
