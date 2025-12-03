"use client";

import React from "react";
import { motion } from "framer-motion";

const CoreCapabilities = () => {
  const capabilities = [
    {
      id: 1,
      title: "Capability 1",
      description: "Description of core capability",
      icon: "🔧",
    },
    {
      id: 2,
      title: "Capability 2",
      description: "Description of core capability",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Capability 3",
      description: "Description of core capability",
      icon: "🎯",
    },
    {
      id: 4,
      title: "Capability 4",
      description: "Description of core capability",
      icon: "🚀",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Core Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              The key features that power our platform
            </p>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {capability.title}
              </h3>
              <p className="text-gray-600">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;

