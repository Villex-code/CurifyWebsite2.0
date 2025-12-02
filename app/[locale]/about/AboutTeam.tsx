"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "George Mavrelis",
      role: "CEO & Founder",
      image: "/images/team/george.jpg",
      bio: "Visionary leader with 15+ years in healthcare technology and digital transformation.",
    },
    {
      name: "Vasilis Fwtopoulos",
      role: "CTO",
      image: "/images/team/fwtopoulos.jpg",
      bio: "Technical innovator specializing in healthcare software and scalable solutions.",
    },
    {
      name: "Mavrelis Family",
      role: "Strategic Advisors",
      image: "/images/team/mavrelis.jpeg",
      bio: "Bringing decades of healthcare industry expertise and business acumen.",
    },
    {
      name: "Vasilis Team",
      role: "Development Lead",
      image: "/images/team/vasilis.JPG",
      bio: "Leading our engineering efforts with a focus on quality and innovation.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team brings together healthcare expertise, technical
            innovation, and business acumen to deliver exceptional solutions
            that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
