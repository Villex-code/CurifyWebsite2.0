"use client";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Send, AlertCircle, CheckCircle2, Building2, User } from "lucide-react";
import CompanyTypeSelector from "./CompanyType";
import CompanySizeDropdown from "./CompanySizeDropdown";
import { useTranslations } from "next-intl";
import axios from "axios";
import { motion } from "framer-motion";

export enum NumberOfEmployees {
  SMALL = "1 - 10",
  MEDIUM = "10 - 100",
  LARGE = "100 - 1000",
  ENTERPRISE = "1000+",
}

export enum OrganizationType {
  HOSPITAL = "HOSPITAL",
  PHARMACY = "PHARMACY",
  LAB = "LAB",
  OTHER = "OTHER",
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companySize: NumberOfEmployees;
  companyName: string;
  companyType: OrganizationType;
  message: string;
}

interface FormError {
  show: boolean;
  message: string;
}

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Ld-c4kqAAAAAI8KiIDzVJ2hqgSbmPHkmLL4qe92";

// --- Modern UI Components ---

const FloatingInput = ({
  name,
  value,
  onChange,
  label,
  type = "text",
  required = false,
  icon: Icon,
}: {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  required?: boolean;
  icon?: any;
}) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="peer w-full px-4 py-3.5 pl-11 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:bg-white transition-all duration-300 outline-none"
      placeholder={label}
    />
    <label
      htmlFor={name}
      className="absolute left-11 -top-2.5 bg-white px-2 text-xs font-medium text-teal-600 transition-all 
                 peer-placeholder-shown:left-11 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent
                 peer-focus:left-11 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-teal-600 peer-focus:bg-white rounded-md pointer-events-none"
    >
      {label}
    </label>
    {Icon && (
      <Icon className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 peer-focus:text-teal-500 transition-colors duration-300" />
    )}
  </div>
);

const ContactRight = () => {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companySize: NumberOfEmployees.SMALL,
    companyName: "",
    companyType: OrganizationType.OTHER,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<FormError>({ show: false, message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaRetries, setRecaptchaRetries] = useState(0);
  const [recaptchaLoading, setRecaptchaLoading] = useState(true);

  const recaptchaScriptRef = useRef<HTMLScriptElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- Logic remains exactly the same ---
  const loadRecaptchaScript = useCallback(() => {
    if (recaptchaScriptRef.current && recaptchaScriptRef.current.parentNode) {
      recaptchaScriptRef.current.parentNode.removeChild(
        recaptchaScriptRef.current
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError({ show: false, message: "" });
    setShowSuccess(false);

    try {
      if (!recaptchaReady)
        throw new Error("reCAPTCHA is not ready. Please try again later.");
      const recaptchaToken = await executeRecaptcha();
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        organizationName: formData.companyName,
        companySize: formData.companySize as NumberOfEmployees,
        organizationType: formData.companyType as OrganizationType,
        message: formData.message,
        recaptchaToken,
      };
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/contact-forms`,
        payload
      );
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companySize: NumberOfEmployees.SMALL,
        companyName: "",
        companyType: OrganizationType.OTHER,
        message: "",
      });
    } catch (error: any) {
      setError({
        show: true,
        message:
          error.response?.data?.message ||
          error.message ||
          "An error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 -inset-x-4 h-full bg-gradient-to-b from-teal-50 to-transparent blur-3xl opacity-50 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl shadow-teal-900/5 border border-white/50 backdrop-blur-sm overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-1 h-2 w-full" />

        <div className="p-6 sm:p-10">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {t("form.title")}
            </h2>
            <p className="mt-2 text-gray-500 text-lg">{t("form.subtitle")}</p>
          </div>

          {/* Alerts */}
          {error.show && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl flex items-center mb-6"
            >
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{error.message}</span>
            </motion.div>
          )}

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-green-50 border border-green-100 text-teal-700 px-4 py-3 rounded-xl flex items-center mb-6"
            >
              <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">
                {t("form.successMessage") || "Message sent successfully!"}
              </span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details Group */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingInput
                  name="firstName"
                  label={t("form.firstName")}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  icon={User}
                />
                <FloatingInput
                  name="lastName"
                  label={t("form.lastName")}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  icon={User}
                />
              </div>

              <FloatingInput
                name="email"
                type="email"
                label={t("form.email")}
                value={formData.email}
                onChange={handleChange}
                required
                icon={() => (
                  <svg
                    className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 peer-focus:text-teal-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
              />
            </div>

            {/* Company Section Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-start">
                <span className="bg-white pr-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Organization Details
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <FloatingInput
                name="companyName"
                label={t("form.companyName")}
                value={formData.companyName}
                onChange={handleChange}
                required
                icon={Building2}
              />

              {/* Wrapped Custom Components to match style */}
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <p className="text-sm font-medium text-gray-700 mb-2 ml-1">
                    Company Size
                  </p>
                  <CompanySizeDropdown
                    value={formData.companySize}
                    onChange={(value) =>
                      setFormData({ ...formData, companySize: value })
                    }
                  />
                </div>

                <div className="relative">
                  <p className="text-sm font-medium text-gray-700 mb-2 ml-1">
                    Organization Type
                  </p>
                  <CompanyTypeSelector
                    selectedType={formData.companyType}
                    onChange={(type) =>
                      setFormData({ ...formData, companyType: type })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="relative group">
              <textarea
                name="message"
                id="message"
                placeholder=" "
                rows={4}
                className="peer w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:bg-white transition-all duration-300 resize-none"
                onChange={handleChange}
                value={formData.message}
              />
              <label
                htmlFor="message"
                className="absolute left-4 -top-2.5 bg-white px-2 text-xs font-medium text-teal-600 transition-all 
                          peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent
                          peer-focus:left-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-teal-600 peer-focus:bg-white rounded-md"
              >
                {t("form.message")}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || (recaptchaLoading && recaptchaRetries < 3)}
              className="group relative w-full flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold shadow-lg shadow-teal-600/20 hover:shadow-teal-600/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {isLoading || recaptchaLoading ? (
                <div className="relative w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <div className="relative flex items-center gap-2">
                  <span>{t("form.submit")}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              )}
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-400">
                Protected by reCAPTCHA. Google
                <a
                  href="https://policies.google.com/privacy"
                  className="hover:text-teal-600 underline mx-1"
                >
                  Privacy
                </a>{" "}
                &
                <a
                  href="https://policies.google.com/terms"
                  className="hover:text-teal-600 underline mx-1"
                >
                  Terms
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactRight;
