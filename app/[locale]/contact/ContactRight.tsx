"use client";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Send, AlertCircle } from "lucide-react";
import Script from "next/script";
import CompanyTypeSelector from "./CompanyType";
import CompanySizeDropdown from "./CompanySizeDropdown";
import { useTranslations } from "next-intl";
import axios from "axios";

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

const InputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">
    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-teal-700 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    {children}
  </div>
);

const CustomAlert = ({
  message,
  type = "error",
}: {
  message: string;
  type?: "error" | "success";
}) => (
  <div
    className={`flex items-center p-4 mb-6 border-l-4 ${
      type === "error"
        ? "text-red-800 border-red-600 bg-red-50"
        : "text-green-800 border-green-600 bg-green-50"
    }`}
  >
    {type === "error" ? (
      <AlertCircle className="w-5 h-5 mr-2" />
    ) : (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    )}
    <span className="text-sm font-medium">{message}</span>
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

  const loadRecaptchaScript = useCallback(() => {
    // Clean up existing script if any
    if (recaptchaScriptRef.current && recaptchaScriptRef.current.parentNode) {
      recaptchaScriptRef.current.parentNode.removeChild(
        recaptchaScriptRef.current
      );
    }

    // Reset loading state
    setRecaptchaLoading(true);

    // Create and append new script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    recaptchaScriptRef.current = script;
  }, []);

  useEffect(() => {
    // Define the callback function for when reCAPTCHA script loads
    window.onRecaptchaLoad = () => {
      // Initialize reCAPTCHA
      window.grecaptcha.ready(() => {
        setRecaptchaReady(true);
        setRecaptchaLoading(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      });
    };

    // Initial load
    loadRecaptchaScript();

    // Check if reCAPTCHA hasn't loaded after 3 seconds
    timeoutRef.current = setTimeout(() => {
      if (!recaptchaReady && recaptchaRetries < 3) {
        setRecaptchaRetries((prev) => prev + 1);
        loadRecaptchaScript();
      } else if (!recaptchaReady) {
        // After 3 retries, just stop loading and show an error message
        setRecaptchaLoading(false);
        console.error("Failed to load reCAPTCHA after multiple attempts");
      }
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.onRecaptchaLoad = () => {};
    };
  }, [recaptchaRetries, recaptchaReady, loadRecaptchaScript]);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError({ show: false, message: "" });
    setShowSuccess(false);

    try {
      // If reCAPTCHA is not ready, show an error
      if (!recaptchaReady) {
        throw new Error("reCAPTCHA is not ready. Please try again later.");
      }

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
          "An error occurred while submitting the form. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* No longer need to include Script component here as we're loading it dynamically */}

      <div className="w-full bg-white rounded-xl shadow-lg">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700">
              {t("form.title")}
            </h2>
            <p className="text-base sm:text-lg text-teal-600">
              {t("form.subtitle")}
            </p>
          </div>

          {error.show && <CustomAlert message={error.message} type="error" />}
          {showSuccess && (
            <CustomAlert
              message={
                t("form.successMessage") ||
                "Success! We'll get back to you within 24 hours."
              }
              type="success"
            />
          )}
          {!recaptchaReady && !recaptchaLoading && (
            <CustomAlert
              message={
                t("form.recaptchaError") ||
                "Unable to load reCAPTCHA. You can still submit the form, but it may not be processed immediately."
              }
              type="error"
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <InputWrapper>
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("form.firstName")}
                  required
                  className="w-full py-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-teal-700 placeholder-gray-400 text-teal-700 transition-colors duration-200"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </InputWrapper>

              <InputWrapper>
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("form.lastName")}
                  required
                  className="w-full py-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-teal-700 placeholder-gray-400 text-teal-700 transition-colors duration-200"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </InputWrapper>
            </div>

            <InputWrapper>
              <input
                type="email"
                name="email"
                placeholder={t("form.email")}
                required
                className="w-full py-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-teal-700 placeholder-gray-400 text-teal-700 transition-colors duration-200"
                onChange={handleChange}
                value={formData.email}
              />
            </InputWrapper>

            <InputWrapper>
              <input
                type="text"
                name="companyName"
                placeholder={t("form.companyName")}
                required
                className="w-full py-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-teal-700 placeholder-gray-400 text-teal-700 transition-colors duration-200"
                onChange={handleChange}
                value={formData.companyName}
              />
            </InputWrapper>

            <div className="space-y-6">
              <CompanySizeDropdown
                value={formData.companySize}
                onChange={(value) =>
                  setFormData({ ...formData, companySize: value })
                }
              />

              <InputWrapper>
                <textarea
                  name="message"
                  placeholder={t("form.message")}
                  rows={3}
                  className="w-full py-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-teal-700 placeholder-gray-400 text-teal-700 resize-none transition-colors duration-200"
                  onChange={handleChange}
                  value={formData.message}
                />
              </InputWrapper>

              <CompanyTypeSelector
                selectedType={formData.companyType}
                onChange={(type) =>
                  setFormData({ ...formData, companyType: type })
                }
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || (recaptchaLoading && recaptchaRetries < 3)}
              className="group relative w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-teal-700 text-white rounded-md overflow-hidden mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <div className="relative flex items-center justify-center gap-2">
                {isLoading || recaptchaLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span className="font-medium text-sm sm:text-base">
                      {t("form.submit")}
                    </span>
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactRight;
