"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { getRoleConfig } from "./ApplicationQuestions";
import {
  Send,
  ArrowLeft,
  Video,
  Link as LinkIcon,
  Zap,
  User,
  Globe,
  CheckCircle2,
  AlertCircle,
  Plus,
  X,
  Paperclip,
} from "lucide-react";
import { RoleType } from "./ApplicationSelect";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Ld-c4kqAAAAAI8KiIDzVJ2hqgSbmPHkmLL4qe92";

interface ApplicationFillOutScreenProps {
  selectedRole: RoleType;
  onBack: () => void;
}

const ApplicationFillOutScreen = ({
  selectedRole,
  onBack,
}: ApplicationFillOutScreenProps) => {
  const t = useTranslations("application");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>([]);
  const [currentLink, setCurrentLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const config = getRoleConfig(selectedRole);

  // Recaptcha State
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaRetries, setRecaptchaRetries] = useState(0);
  const [recaptchaLoading, setRecaptchaLoading] = useState(true);
  const recaptchaScriptRef = useRef<HTMLScriptElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const loadRecaptchaScript = useCallback(() => {
    if (recaptchaScriptRef.current && recaptchaScriptRef.current.parentNode) {
      recaptchaScriptRef.current.parentNode.removeChild(
        recaptchaScriptRef.current,
      );
    }
    setRecaptchaLoading(true);
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    recaptchaScriptRef.current = script;
  }, []);

  useEffect(() => {
    window.onRecaptchaLoad = () => {
      window.grecaptcha.ready(() => {
        setRecaptchaReady(true);
        setRecaptchaLoading(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      });
    };
    loadRecaptchaScript();
    timeoutRef.current = setTimeout(() => {
      if (!recaptchaReady && recaptchaRetries < 3) {
        setRecaptchaRetries((prev) => prev + 1);
        loadRecaptchaScript();
      } else if (!recaptchaReady) {
        setRecaptchaLoading(false);
      }
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.onRecaptchaLoad = () => {};
    };
  }, [recaptchaRetries, recaptchaReady, loadRecaptchaScript]);

  const executeRecaptcha = async () => {
    if (!window.grecaptcha) throw new Error("reCAPTCHA not loaded");
    return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
      action: "submit",
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddLink = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    if (currentLink.trim()) {
      setPortfolioLinks([...portfolioLinks, currentLink.trim()]);
      setCurrentLink("");
    }
  };

  const removeLink = (index: number) => {
    setPortfolioLinks(portfolioLinks.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      if (!recaptchaReady)
        throw new Error("reCAPTCHA is not ready. Please try again later.");
      const recaptchaToken = await executeRecaptcha();

      const finalData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        skills: formData.skills || undefined,
        goals: formData.goals || undefined,
        loom: formData.loom || undefined,
        role:
          selectedRole && typeof selectedRole === "string"
            ? selectedRole
            : undefined,
        portfolioLinks: portfolioLinks.length > 0 ? portfolioLinks : undefined,
        recaptchaToken,
      };

      console.log("Submitting:", finalData);

      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/contact-forms/talent`,
        finalData,
      );

      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-950 rounded-[3rem] p-16 shadow-2xl text-center border border-slate-800"
      >
        <div className="w-24 h-24 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal-500/20">
          <CheckCircle2 className="w-12 h-12 text-teal-500" />
        </div>
        <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
          {t("messages.successTitle")}
        </h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          {t("messages.successText")}
        </p>
        <button
          onClick={onBack}
          className="px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-teal-500 hover:text-white transition-all uppercase tracking-widest text-sm"
        >
          {t("messages.returnHome")}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto"
    >
      {/* Top Navigation */}
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between mb-12">
        <button
          onClick={onBack}
          className="group flex items-center text-slate-400 hover:text-slate-900 font-bold uppercase tracking-widest text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          {t("backButton")}
        </button>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {t("targetRole")}:
          </span>
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter border ${
              selectedRole === "wildcard"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-teal-50 text-teal-700 border-teal-100"
            }`}
          >
            {selectedRole?.replace("-", " ")}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* SECTION 01: IDENTITY */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black text-teal-600 tracking-widest">
                  01
                </span>
                <h3 className="text-xl font-black text-slate-900 uppercase">
                  {t("sections.identity.title")}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t("sections.identity.subtitle")}
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  {t("sections.identity.nameLabel")}
                </label>
                <input
                  required
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder={t("sections.identity.namePlaceholder")}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all outline-none font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  {t("sections.identity.emailLabel")}
                </label>
                <input
                  required
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder={t("sections.identity.emailPlaceholder")}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 transition-all outline-none font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  {t("sections.identity.phoneLabel")}
                </label>
                <input
                  required
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  placeholder={t("sections.identity.phonePlaceholder")}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 transition-all outline-none font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 02: THE HUSTLE */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black text-teal-600 tracking-widest">
                  02
                </span>
                <h3 className="text-xl font-black text-slate-900 uppercase">
                  {t("sections.hustle.title")}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t("sections.hustle.subtitle")}
              </p>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  {t(config.hustleLabel)}
                </label>
                <textarea
                  required
                  name="skills"
                  onChange={handleChange}
                  placeholder={t(config.hustlePlaceholder)}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 transition-all outline-none font-medium resize-none shadow-inner"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  {t(config.goalsLabel)}
                </label>
                <textarea
                  required
                  name="goals"
                  onChange={handleChange}
                  placeholder={t(config.goalsPlaceholder)}
                  rows={3}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 transition-all outline-none font-medium resize-none shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 03: THE SELECTION GATE (LOOM & PORTFOLIO) */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Video size={120} className="text-teal-500" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black text-teal-400 tracking-widest">
                  03
                </span>
                <h3 className="text-xl font-black text-white uppercase">
                  {t("sections.gate.title")}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("sections.gate.subtitle")}
              </p>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* Loom Video Input */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 text-teal-400 mb-2">
                  <Video size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {t(config.gateLabel)}
                  </span>
                </div>
                <input
                  required
                  name="loom"
                  onChange={handleChange}
                  type="url"
                  placeholder={config.gatePlaceholder}
                  className="w-full px-0 py-2 bg-transparent border-b-2 border-slate-800 focus:border-teal-500 outline-none transition-all font-mono text-teal-500 text-lg placeholder:text-slate-700"
                />
                <p className="text-[10px] text-slate-500 italic">
                  {t("sections.gate.tip")}
                </p>
              </div>

              {/* Dynamic Portfolio Links */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  {t(config.portfolioLabel)}
                </label>

                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                    <input
                      value={currentLink}
                      onChange={(e) => setCurrentLink(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddLink(e)}
                      type="text"
                      placeholder={t("sections.gate.addLinkPlaceholder")}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white focus:border-teal-500 transition-all outline-none font-medium placeholder:text-slate-700"
                    />
                  </div>
                  <button
                    onClick={handleAddLink}
                    type="button"
                    className="w-14 bg-slate-800 rounded-2xl flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition-colors"
                  >
                    <Plus size={24} />
                  </button>
                </div>

                {/* Link Tags */}
                {portfolioLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {portfolioLinks.map((link, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium"
                      >
                        <Globe size={12} />
                        {link}
                        <button
                          type="button"
                          onClick={() => removeLink(index)}
                          className="hover:text-white transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button Area */}
        <div className="pt-8 flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full md:w-auto px-16 py-6 bg-teal-600 text-white font-black uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-teal-500 transition-all disabled:opacity-50 overflow-hidden"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <span className="flex items-center justify-center gap-3">
                {t("messages.submitButton")}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            )}
          </button>

          {status === "error" && (
            <div className="mt-4 flex items-center text-red-500 text-sm font-bold">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errorMessage}
            </div>
          )}

          <p className="mt-6 text-[10px] text-center text-slate-400 font-bold uppercase tracking-[0.2em]">
            {t("messages.disclaimer")}
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default ApplicationFillOutScreen;
