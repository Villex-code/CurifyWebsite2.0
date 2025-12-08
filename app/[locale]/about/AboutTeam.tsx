"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

// --- TRANSLATED DATA CONFIGURATION ---

// --- COMPONENT: TEXT ANIMATION (Reused) ---
const TextAnimation = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="inline-block whitespace-nowrap mr-[0.25em]"
        >
          {word.split("").map((character, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              className="inline-block"
            >
              {character}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
};

// --- COMPONENT: BLUR REVEAL IMAGE ---
const BlurRevealImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
      <motion.div
        initial={{ scale: 1.2, filter: "blur(15px)" }}
        whileInView={{ scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </motion.div>

      {/* Optional: A subtle vignette overlay that fades out to enhance the 'center clear' feel */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10 pointer-events-none bg-white/20"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(255,255,255,0.8) 100%)",
        }}
      />
    </div>
  );
};

// --- COMPONENT: COSMIC BUTTON (Teal Version) ---
const CosmicButton = ({ text }: { text: string }) => {
  return (
    <Link href="/contact">
      <div className="relative inline-block group text-sm rounded-full cursor-pointer">
        <button
          className="group relative inline-flex min-w-[160px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.05] text-white tracking-tight rounded-full py-4 px-8 items-center justify-center overflow-hidden"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
            background:
              "radial-gradient(ellipse at bottom, #0f766e 0%, #0d9488 100%)", // Teal-700 to Teal-600
          }}
        >
          <span className="relative z-10 font-semibold text-sm flex items-center gap-2">
            {text}{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>

          {/* Shine effect on hover */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
            }}
          ></span>
        </button>

        {/* Bottom Glow */}
        <span
          className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 50%, rgba(20, 184, 166, 0.6), rgba(20, 184, 166, 0.3) 35%, transparent 70%)", // Teal Glow
            filter: "blur(10px) saturate(120%)",
          }}
          aria-hidden="true"
        ></span>
      </div>
    </Link>
  );
};

// --- MAIN COMPONENT ---
const AboutTeam = () => {
  const t = useTranslations("about.team");
  const teamMembers = t.raw("members");

  // Add image paths to the translated data
  const TEAM_MEMBERS = teamMembers.map((member: any, index: number) => ({
    ...member,
    image: [
      "/images/team/mavrelis.jpeg",
      "/images/team/vasilis.JPG",
      "/images/team/george.jpg",
      "/images/team/fwtopoulos.jpg",
    ][index],
  }));
  return (
    <section className="py-24 md:py-32  text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-sm font-bold text-teal-700 uppercase tracking-widest mb-6"
            >
              {t("badge")}
            </motion.div>

            <TextAnimation
              text={t("title")}
              className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-slate-900"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-lg text-gray-500 leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {TEAM_MEMBERS.map((member: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative h-[420px] w-full"
            >
              {/* Image Container with Reveal Effect */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                <BlurRevealImage src={member.image} alt={member.name} />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-teal-200 text-xs font-bold uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Recruitment Banner --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#EAE8E1] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/50 shadow-sm"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                {t("recruitment.title")}
              </h3>
              <span className="inline-flex items-center justify-center px-3 py-1 bg-white rounded-full text-xs font-bold text-teal-700 shadow-sm border border-teal-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2 animate-pulse" />
                {t("recruitment.vacancies")}
              </span>
            </div>
            <p className="text-slate-500 max-w-xl text-lg">
              {t("recruitment.description")}
            </p>
          </div>

          {/* Custom Cosmic Button */}
          <CosmicButton text={t("recruitment.cta")} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
