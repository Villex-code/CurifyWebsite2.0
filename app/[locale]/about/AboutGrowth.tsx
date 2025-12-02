"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutGrowth = () => {
  const stats = [
    { number: "500+", label: "Healthcare Facilities" },
    { number: "50K+", label: "Patients Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8">
            Our Growth Story
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small team with big dreams to a leading healthcare technology company,
            our journey has been driven by innovation, dedication, and unwavering commitment
            to improving patient care worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-600">2020</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Company Founded</h3>
              <p className="text-gray-600">Started with a vision to revolutionize healthcare management</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-600">2022</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">First Major Deployment</h3>
              <p className="text-gray-600">Successfully implemented our solutions in 50+ healthcare facilities</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-600">2024</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Global Expansion</h3>
              <p className="text-gray-600">Expanding our reach to serve healthcare providers worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrowth;
