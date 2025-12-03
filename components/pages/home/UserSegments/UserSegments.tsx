"use client";

import React from "react";
import { motion } from "framer-motion";

const UserSegments = () => {
  const segments = [
    {
      id: 1,
      title: "Segment 1",
      description: "Description of user segment",
      icon: "👥",
      color: "blue",
    },
    {
      id: 2,
      title: "Segment 2",
      description: "Description of user segment",
      icon: "🏥",
      color: "teal",
    },
    {
      id: 3,
      title: "Segment 3",
      description: "Description of user segment",
      icon: "💼",
      color: "green",
    },
    {
      id: 4,
      title: "Segment 4",
      description: "Description of user segment",
      icon: "🔬",
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    teal: "bg-teal-50 border-teal-200 text-teal-900",
    green: "bg-green-50 border-green-200 text-green-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
  };

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
              User Segments
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Who we serve and how we help
            </p>
          </motion.div>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-6 border-2 ${
                colorClasses[segment.color as keyof typeof colorClasses]
              } shadow-md hover:shadow-lg transition-all`}
            >
              <div className="text-5xl mb-4">{segment.icon}</div>
              <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
              <p className="opacity-80">{segment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSegments;
