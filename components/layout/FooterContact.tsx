"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import Script from "next/script";
import axios from "axios";

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const FooterContact = () => {
  const t = useTranslations("FooterContact");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.onRecaptchaLoad = () => {
      window.grecaptcha.ready(() => {
        setRecaptchaReady(true);
      });
    };

    return () => {
      window.onRecaptchaLoad = () => {};
    };
  }, []);

  const executeRecaptcha = async () => {
    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA not loaded");
    }

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "submit",
      });
      return token;
    } catch (error) {
      console.error("reCAPTCHA execution failed:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting || !recaptchaReady) return;

    setIsSubmitting(true);

    try {
      const recaptchaToken = await executeRecaptcha();

      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact-forms`, {
        email,
        recaptchaToken,
      });

      setIsSubmitted(true);
      setEmail("");

      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const scrollToHero = () => {
    const heroElement = document.getElementById("hero");
    heroElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-neutral-900 min-h-[100vh] flex flex-col justify-between py-12 sm:py-16 md:py-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column */}
          <div className="space-y-12 md:space-y-20">
            {/* Location */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
                {t("location.title")}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-600">
                {t("location.address.line1")}
                <br />
                {t("location.address.line2")}
                <br />
                {t("location.address.line3")}
              </p>
            </div>

            {/* Links */}
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4">
                  {t("links.enquiries.title")}
                </h3>
                <a
                  href={`mailto:${t("links.enquiries.email")}`}
                  className="text-lg sm:text-xl md:text-2xl text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {t("links.enquiries.email")}
                </a>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4">
                  {t("links.business.title")}
                </h3>
                <a
                  href={`mailto:${t("links.business.email")}`}
                  className="text-lg sm:text-xl md:text-2xl text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {t("links.business.email")}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end space-y-8 md:space-y-0">
            <div className="hidden md:block mb-8 md:mb-20 h-[30vh] md:h-[40vh] rounded-2xl bg-neutral-100">
              {/* Video content here if needed */}
            </div>

            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                {t("emailForm.title")} <br />
                {t("emailForm.titleBreak")}
              </h3>
              <div className="relative perspective-1000">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      initial={{ rotateX: -90, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1 }}
                      exit={{
                        rotateX: 90,
                        opacity: 0,
                        transition: { duration: 0.3, ease: [0.65, 0, 0.35, 1] },
                      }}
                      className="w-full relative"
                    >
                      <div className="relative h-[60px] sm:h-[72px]">
                        <motion.div
                          className="absolute inset-0 bg-neutral-600 rounded-lg origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isSubmitting ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t("emailForm.placeholder")}
                          disabled={isSubmitting}
                          className="w-full h-full px-6 sm:px-8 text-base sm:text-lg md:text-xl
                                   bg-neutral-300 border-2 border-neutral-300 rounded-lg text-neutral-900
                                   placeholder-neutral-500 focus:outline-none focus:ring-2
                                   focus:border-neutral-400 focus:ring-neutral-300 relative z-10
                                   transition-all duration-300 disabled:opacity-80"
                        />
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      className="w-full"
                      initial={{ rotateX: 90, opacity: 0 }}
                      animate={{
                        rotateX: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: [0.65, 0, 0.35, 1],
                          delay: 0.3,
                        },
                      }}
                    >
                      <div
                        className="h-[60px] sm:h-[72px] bg-teal-50 border-2 border-teal-200 rounded-lg
                                    px-6 sm:px-8 flex items-center gap-4"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.4,
                            type: "spring",
                            duration: 0.3,
                          }}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-full flex-shrink-0
                                    flex items-center justify-center"
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 0.5, duration: 0.3 }}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>
                        <div className="flex flex-col justify-center overflow-hidden">
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                            className="text-teal-800 text-sm sm:text-base font-medium truncate"
                          >
                            {t("emailForm.successMessage")}
                          </motion.p>
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="text-teal-600 text-xs sm:text-sm truncate"
                          >
                            {email}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20">
        <div
          className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row
                       justify-between items-center border-t border-neutral-200 pt-6 sm:pt-8"
        >
          <div className="text-neutral-600 text-base sm:text-lg order-2 md:order-1">
            {t("bottomBar.copyright")}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0
                         sm:space-x-8 text-neutral-600 text-base sm:text-lg order-1 md:order-2"
          >
            <span>{t("bottomBar.rd")}</span>
            <div className="flex items-center">
              {t("bottomBar.builtWith")}{" "}
              <FaHeart className="mx-2 text-red-500" />
            </div>
          </div>
        </div>
      </div>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`}
        strategy="lazyOnload"
      />
    </div>
  );
};

export default FooterContact;
