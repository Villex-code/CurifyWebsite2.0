"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const UseExamplesScrollable = () => {
  const images = Array(7)
    .fill(null)
    .map((_, i) => ({
      src: `/images/pex${(i % 4) + 1}.jpg`,
      alt: `Example ${(i % 4) + 1}`,
      height: `${Math.floor(Math.random() * (600 - 200 + 1)) + 200}px`, // Random height between 200px and 600px
      title: `Feature ${i + 1}`,
      description: `Description for feature ${i + 1}`,
    }));

  return (
    <div className="space-y-4 pb-24 flex justify-center flex-col items-center">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-2xl overflow-hidden relative"
          style={{ height: image.height }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
              <p className="text-gray-200">{image.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UseExamplesScrollable;
