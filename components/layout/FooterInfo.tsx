"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import { Clock } from "lucide-react";
import Script from "next/script";
import axios from "axios";

// --- Global Types for reCAPTCHA ---
declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function FooterInfo() {
  const t = useTranslations("footer");
  const [time, setTime] = useState<string>("");

  // --- Newsletter State ---
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // --- Live Clock Logic ---
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- reCAPTCHA Initialization ---
  useEffect(() => {
    // Define the callback for when the script loads
    window.onRecaptchaLoad = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setRecaptchaReady(true);
        });
      }
    };

    // If script is already cached/loaded
    if (window.grecaptcha && window.grecaptcha.ready) {
      window.grecaptcha.ready(() => {
        setRecaptchaReady(true);
      });
    }

    return () => {
      window.onRecaptchaLoad = () => {};
    };
  }, []);

  // --- Handle Subscribe Logic ---
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || status === "loading" || !recaptchaReady) return;

    setStatus("loading");

    try {
      // 1. Execute reCAPTCHA
      const recaptchaToken = await window.grecaptcha.execute(
        RECAPTCHA_SITE_KEY,
        {
          action: "submit",
        }
      );

      // 2. Send Data to Server (Same endpoint as Contact Form)
      await axios.post(`${SERVER_URL}/contact-forms`, {
        email,
        recaptchaToken,
        source: "footer_newsletter", // Optional: helpful to distinguish sources on backend
      });

      // 3. Success State
      setStatus("success");
      setEmail("");

      // 4. Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Subscription failed:", error);
      // Optional: Add an error state if you want UI feedback for failure
      setStatus("idle");
    }
  };

  return (
    <footer className="bg-[#F8FAFC] text-slate-900 border-t border-slate-200 font-sans relative z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* --- Top Section: Brand & Time --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
          <div>
            <h2 className="text-[12vw] lg:text-[140px] leading-[0.85] font-bold tracking-tighter text-slate-900 select-none">
              Curify<span className="text-teal-main">.</span>
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-slate-500 italic font-medium tracking-tight">
              The Healthcare Platform—
            </p>
          </div>

          <div className="text-right flex flex-col items-end">
            <p className="max-w-md text-lg text-slate-600 mb-6 font-medium leading-relaxed">
              We are currently deploying healthcare infrastructure globally and
              operating remotely from Athens.
            </p>
            <div className="flex items-center gap-2 text-slate-400 font-mono text-sm uppercase tracking-widest mb-1">
              <Clock className="w-4 h-4" />
              <span>Athens Time (EET)</span>
            </div>
            <div className="text-5xl md:text-6xl font-mono font-light text-slate-900 tracking-tighter tabular-nums">
              {time || "00:00:00"}
            </div>
          </div>
        </div>

        {/* --- Middle Section: Links & Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Navigation Links (Col 1-5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 self-start">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-lg font-medium text-slate-600 hover:text-teal-main transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-lg font-medium text-slate-600 hover:text-teal-main transition-colors"
              >
                About
              </Link>
              <Link
                href="/features"
                className="block text-lg font-medium text-slate-600 hover:text-teal-main transition-colors"
              >
                Features
              </Link>
              <Link
                href="/use-cases"
                className="block text-lg font-medium text-slate-600 hover:text-teal-main transition-colors"
              >
                Use Cases
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="/blog"
                className="block text-lg font-medium text-slate-600 hover:text-teal-main transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-lg font-medium text-slate-600 hover:text-teal-main transition-colors"
              >
                Contact
              </Link>
              <div className="h-4" /> {/* Spacer */}
              <Link
                href="/privacy-policy"
                className="block text-lg font-medium text-slate-400 hover:text-slate-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="block text-lg font-medium text-slate-400 hover:text-slate-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter Card (Col 6-9) */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Stay Connected
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Receive product updates, healthcare insights, and new feature
                  drops directly to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  placeholder={
                    status === "success" ? "Received!" : "Your email address"
                  }
                  className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-main transition-all rounded-t-lg disabled:opacity-70 disabled:cursor-not-allowed"
                />

                <button
                  type="submit"
                  disabled={
                    status === "loading" ||
                    status === "success" ||
                    !email ||
                    !recaptchaReady
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-teal-main transition-colors p-2 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <FaSpinner className="animate-spin text-teal-main" />
                  ) : status === "success" ? (
                    <FaCheck className="text-teal-main" />
                  ) : (
                    <FaArrowRight />
                  )}
                </button>

                {/* Success Message Pop */}
                {status === "success" && (
                  <p className="absolute -bottom-8 left-0 text-sm font-semibold text-teal-main animate-in fade-in slide-in-from-top-1">
                    We'll be in touch shortly!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Contact Links Card (Col 10-12) */}
          <div className="lg:col-span-3 h-full">
            <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden h-full min-h-[320px] flex flex-col">
              <div className="divide-y divide-slate-100 flex-grow">
                {/* 1. LinkedIn (Personal) */}
                <a
                  href="https://www.linkedin.com/in/vasilis-delikouras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors group"
                >
                  <FaLinkedinIn className="w-5 h-5 text-slate-400 group-hover:text-[#0077B5] transition-colors" />
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                    Vasilis Delikouras
                  </span>
                </a>

                {/* 2. LinkedIn (Business) */}
                <a
                  href="https://www.linkedin.com/company/curify-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors group"
                >
                  <FaLinkedinIn className="w-5 h-5 text-slate-400 group-hover:text-[#0077B5] transition-colors" />
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                    Curify App
                  </span>
                </a>

                {/* 3. Email */}
                <a
                  href="mailto:appcurify@gmail.com"
                  className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors group"
                >
                  <FaEnvelope className="w-5 h-5 text-slate-400 group-hover:text-teal-main transition-colors" />
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                    appcurify@gmail.com
                  </span>
                </a>

                {/* 4. Calendly */}
                <a
                  href="https://calendly.com/appcurify/15-minute-meeting-curify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors group"
                >
                  <FaPhoneAlt className="w-4 h-4 text-slate-400 group-hover:text-teal-main transition-colors" />
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                    Book a Call
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Badges --- */}
        <div className="mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} Curify Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
              Built With
            </span>
            <div className="flex items-center gap-4 text-2xl">💚</div>
          </div>
        </div>
      </div>

      {/* Load reCAPTCHA script via Next.js Script component */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`}
        strategy="lazyOnload"
      />
    </footer>
  );
}
