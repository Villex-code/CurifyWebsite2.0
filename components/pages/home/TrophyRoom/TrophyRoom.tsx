"use client";

import React from "react";
import { motion } from "framer-motion";

const TrophyRoom = () => {
  const achievements = [
    {
      id: 1,
      title: "Achievement 1",
      description: "Description of achievement",
      year: "2024",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Achievement 2",
      description: "Description of achievement",
      year: "2024",
      icon: "⭐",
    },
    {
      id: 3,
      title: "Achievement 3",
      description: "Description of achievement",
      year: "2023",
      icon: "🎖️",
    },
    {
      id: 4,
      title: "Achievement 4",
      description: "Description of achievement",
      year: "2023",
      icon: "💎",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
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
              Trophy Room
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Our achievements and recognitions
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-teal-100"
            >
              <div className="text-5xl mb-4 text-center">{achievement.icon}</div>
              <div className="text-sm text-teal-600 font-semibold mb-2">
                {achievement.year}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrophyRoom;

