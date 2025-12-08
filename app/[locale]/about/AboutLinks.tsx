"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing"; // Ensure this matches your routing setup
import {
  Layers,
  Newspaper,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const AboutLinks = () => {
  const t = useTranslations("about.links");
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-teal-600" />
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">
              {t("badge")}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            {t("title")}
          </motion.h2>
        </div>

        {/* --- LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. SOLUTIONS / FEATURES */}
          <NavCard
            title={t("cards.solutions.title")}
            description={t("cards.solutions.description")}
            href="/features"
            icon={Layers}
            delay={0}
            actionText={t("cards.solutions.action")}
          />

          {/* 2. BLOG & INSIGHTS */}
          <NavCard
            title={t("cards.blog.title")}
            description={t("cards.blog.description")}
            href="/blog"
            icon={Newspaper}
            delay={0.1}
            actionText={t("cards.blog.action")}
          />

          {/* 3. CONTACT US */}
          <NavCard
            title={t("cards.contact.title")}
            description={t("cards.contact.description")}
            href="/contact"
            icon={MessageCircle}
            delay={0.2}
            highlight // Special style for contact
            actionText={t("cards.contact.action")}
          />
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: NAVIGATION CARD ---
const NavCard = ({
  title,
  description,
  href,
  icon: Icon,
  delay,
  highlight,
  actionText,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Link href={href} className="block h-full group outline-none">
        <div
          className={`
          relative h-full overflow-hidden rounded-[2rem] p-8 flex flex-col justify-between
          border transition-all duration-500 ease-out
          ${
            highlight
              ? "bg-slate-900 border-slate-800 hover:border-teal-500/50"
              : "bg-white border-slate-200 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-900/5"
          }
        `}
        >
          {/* Background Gradient Hover Effect */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
             ${
               highlight
                 ? "bg-gradient-to-br from-teal-900/20 to-transparent"
                 : "bg-gradient-to-br from-teal-50/50 to-transparent"
             }
          `}
          />

          {/* Top Content */}
          <div className="relative z-10">
            <div
              className={`
              w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
              ${
                highlight
                  ? "bg-white/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-white"
                  : "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"
              }
            `}
            >
              <Icon className="w-6 h-6" />
            </div>

            <h3
              className={`text-2xl font-bold mb-3 ${
                highlight ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                highlight ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {description}
            </p>
          </div>

          {/* Bottom Action Area */}
          <div className="relative z-10 mt-10 flex items-center gap-2">
            <span
              className={`text-sm font-bold tracking-wide transition-colors duration-300
               ${
                 highlight
                   ? "text-teal-400 group-hover:text-white"
                   : "text-slate-900 group-hover:text-teal-600"
               }
            `}
            >
              {actionText}
            </span>

            {/* Animated Arrow */}
            <div className="relative overflow-hidden w-6 h-6 flex items-center">
              <ArrowRight
                className={`absolute w-5 h-5 transition-all duration-300 
                  -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                  ${highlight ? "text-white" : "text-teal-600"}
               `}
              />
              <ArrowRight
                className={`absolute w-5 h-5 transition-all duration-300 
                  translate-x-0 opacity-100 group-hover:translate-x-4 group-hover:opacity-0
                  ${highlight ? "text-teal-400" : "text-slate-300"}
               `}
              />
            </div>
          </div>

          {/* Giant Decorative Watermark Icon (Moves on Hover) */}
          <Icon
            className={`
              absolute -bottom-8 -right-8 w-48 h-48 stroke-1 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-12
              ${highlight ? "text-white/5" : "text-slate-100"}
            `}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default AboutLinks;
