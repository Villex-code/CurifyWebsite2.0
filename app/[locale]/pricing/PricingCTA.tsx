"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const PricingCTA = () => {
  const t = useTranslations("useCases.pricing.cta");

  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-slate-300 text-sm font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-teal-400" />
              {t("badge")}
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              {t("title")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 group"
              >
                {t("primaryCTA")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-slate-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                {t("secondaryCTA")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-full mb-4">
              <Shield className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="font-bold text-white mb-2">{t("trust.enterprise")}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("trust.enterpriseDesc")}
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-white mb-2">{t("trust.support")}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("trust.supportDesc")}
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-bold text-white mb-2">{t("trust.uptime")}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("trust.uptimeDesc")}
            </p>
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t("contact.title")}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://calendly.com/appcurify/15-minute-meeting-curify"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-slate-600 hover:bg-white/10 hover:border-slate-500 transition-all duration-300"
            >
              <Calendar className="w-8 h-8 text-teal-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white mb-2">{t("contact.demo.title")}</h4>
              <p className="text-slate-400 text-sm text-center leading-relaxed">
                {t("contact.demo.description")}
              </p>
            </a>

            <a
              href="mailto:appcurify@gmail.com"
              className="group flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-slate-600 hover:bg-white/10 hover:border-slate-500 transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white mb-2">{t("contact.email.title")}</h4>
              <p className="text-slate-400 text-sm text-center leading-relaxed">
                {t("contact.email.description")}
              </p>
            </a>

            <a
              href="tel:+302101234567"
              className="group flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-slate-600 hover:bg-white/10 hover:border-slate-500 transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white mb-2">{t("contact.phone.title")}</h4>
              <p className="text-slate-400 text-sm text-center leading-relaxed">
                {t("contact.phone.description")}
              </p>
            </a>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            {t("faq.question")}{" "}
            <Link
              href="/use-cases"
              className="text-teal-400 hover:text-teal-300 font-medium underline decoration-teal-400/50 hover:decoration-teal-300 transition-colors"
            >
              {t("faq.link")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
