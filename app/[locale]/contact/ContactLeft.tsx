"use client";
import React from "react";
import {
  ArrowUpRight,
  Phone,
  Calendar,
  Building2,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import Scene from "./Scene";
import { useTranslations } from "next-intl";

const ContactLeft = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 w-full">
      {/* Scene Section - Responsive height */}
      <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] bg-teal-900 rounded-lg overflow-hidden">
        <Scene />
      </div>

      {/* Title Section - Responsive text sizes */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-3xl pb-4 sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <p className="text-base sm:text-lg text-gray-600">{t("subtitle")}</p>
      </div>

      {/* Info Row - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Location Section */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-teal-700">
            {t("location.title")}
          </h3>
          <div className="flex items-start gap-2 p-3 sm:p-4 rounded-lg">
            <Building2 className="w-4 h-4 text-teal-600 mt-1" />
            <p className="text-gray-600 text-sm sm:text-base">
              {t("location.address.line1")}
              <br />
              {t("location.address.line2")}
              <br />
              {t("location.address.line3")}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-teal-700">
            {t("social.title")}
          </h3>
          <div className="p-3 sm:p-4 rounded-lg">
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/company/curify-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-teal-700 hover:bg-teal-100 transition-colors"
                aria-label={t("social.linkedin")}
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="p-2 rounded-full text-teal-700 hover:bg-teal-100 transition-colors"
                aria-label={process.env.NEXT_PUBLIC_EMAIL}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Row - Responsive layout */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        {/* Call Us Option */}
        <a
          href="tel:+306987543041"
          className="group w-full flex items-center justify-between p-4 sm:p-5 bg-gradient-to-l shadow-md from-teal-50 to-teal-100 rounded-xl transition-all hover:shadow-lg hover:from-teal-100 hover:to-teal-200"
        >
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-semibold text-teal-800">
              {t("callUs.title")}
            </h3>
            <p className="text-xs sm:text-sm text-teal-600">+30 6987543041</p>
          </div>
          <div className="relative w-8 h-8">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-full group-hover:opacity-0 transition-all" />
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100 transition-all" />
          </div>
        </a>

        {/* Center Divider - Hidden on mobile */}
        <div className="hidden sm:flex flex-col items-center gap-3">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-teal-200 to-transparent" />
          <span className="text-sm font-medium text-teal-600">
            {t("divider")}
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-teal-200 to-transparent" />
        </div>

        {/* Book a Call Option */}
        <a
          href="https://calendly.com/appcurify/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-between p-4 sm:p-5 bg-gradient-to-l from-teal-500 to-teal-600 rounded-xl transition-all shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-700"
        >
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {t("bookCall.title")}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              {t("bookCall.subtitle")}
            </p>
          </div>
          <div className="relative w-8 h-8">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-full group-hover:opacity-0 transition-all" />
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100 transition-all" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactLeft;
