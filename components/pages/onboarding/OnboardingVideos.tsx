"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";

export default function OnboardingVideos() {
  const t = useTranslations("onboarding.videos");

  const videos = [
    { id: "vVIdvCizs_A", title: t("video1.title"), desc: t("video1.description") },
    { id: "L_LUpnjyPso", title: t("video2.title"), desc: t("video2.description") },
    { id: "dQw4w9WgXcQ", title: t("video3.title"), desc: t("video3.description") },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">{t("title")}</h2>
          <p className="text-slate-600 font-medium">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-500 leading-snug">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
