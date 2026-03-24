"use client";
import React, { useState, useEffect } from "react";
import { FloatingNav } from "./floatingNavbar";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";
import FullScreenMenu from "./FullScreenMenu";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname, useRouter } from "@/i18n/routing";

// Import flag images
// import greekFlag from "@/public/images/greece.png";
// import englishFlag from "@/public/images/english.webp";

import { NavDropdown } from "./NavDropdown";
import {
  Building2,
  Stethoscope,
  Hospital,
  Home,
  Zap,
  BookOpen,
  Rocket,
  Mail,
  BarChart3,
} from "lucide-react";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const useCaseItems = [
    {
      title: t("productOffice"),
      description: t("productOfficeDesc"),
      href: "/use-cases",
      icon: Stethoscope,
    },
    {
      title: t("productClinic"),
      description: t("productClinicDesc"),
      href: "/use-cases",
      icon: Building2,
    },
    {
      title: t("productHospital"),
      description: t("productHospitalDesc"),
      href: "/use-cases",
      icon: Hospital,
    },
  ];

  const resourceItems = [
    {
      title: t("home"),
      description: t("homeDesc"),
      href: "/",
      icon: Home,
    },
    {
      title: t("features"),
      description: t("featuresDesc"),
      href: "/features",
      icon: Zap,
    },
    {
      title: t("blog"),
      description: t("blogDesc"),
      href: "/blog",
      icon: BookOpen,
    },
    {
      title: t("onboarding"),
      description: t("onboardingDesc"),
      href: "/onboarding",
      icon: Rocket,
    },
    {
      title: t("contact"),
      description: t("contactDesc"),
      href: "/contact",
      icon: Mail,
    },
  ];

  // Check if we're in the present route
  const isPresentRoute = pathname.includes("/present");

  // If we're in the present route, don't render the navbar
  if (isPresentRoute) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    const newLang = locale === "en" ? "el" : "en";

    // Set cookie for language preference
    document.cookie = `preferred_language=${newLang};path=/;max-age=${
      60 * 60 * 24 * 365
    };samesite=lax`;

    // Navigate to the new locale
    router.push(pathname, { locale: newLang });
  };

  return (
    <div className="relative w-full">
      <FloatingNav>
        <div className="flex items-center justify-between w-full px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center justify-between h-full">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tight"
            >
              CURIFY
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Main nav items */}
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="text-white hover:text-teal-100 text-sm font-semibold transition-colors relative group"
              >
                {t("about")}
                <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/use-cases"
                className="text-white hover:text-teal-100 text-sm font-semibold transition-colors relative group"
              >
                {t("useCases")}
                <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/pricing"
                className="text-white hover:text-teal-100 text-sm font-semibold transition-colors relative group"
              >
                {t("pricing")}
                <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <NavDropdown label={t("resources")} items={resourceItems} />
            </div>

            {/* Login Button */}
            <Link
              href="https://portal-staging.curifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 text-sm font-semibold text-teal-800 bg-white rounded-full hover:bg-teal-50 transition-colors group"
            >
              {t("login")}
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-teal-300 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Language Switcher */}
            <motion.button
              onClick={toggleLanguage}
              className="relative w-8 h-8 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow
                       ring-2 ring-white/10 hover:ring-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={locale}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={
                      locale === "en"
                        ? "/images/general/english.webp"
                        : "/images/general/greece.png"
                    }
                    alt={locale === "en" ? "English" : "Ελληνικά"}
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Login Button */}
            <Link
              href="https://portal-staging.curifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs font-semibold text-teal-800 bg-white rounded-full hover:bg-teal-50 transition-all active:scale-95 shadow-sm"
            >
              {t("login")}
            </Link>

            {/* Hamburger Menu */}
            <div className="flex items-center justify-center p-1">
              <HamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
            </div>

            {/* Mobile Language Switcher (at the very right) */}
            <motion.button
              onClick={toggleLanguage}
              className="relative w-8 h-8 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all
                       ring-2 ring-white/10 hover:ring-white/20 active:scale-90 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={locale}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={
                      locale === "en"
                        ? "/images/general/english.webp"
                        : "/images/general/greece.png"
                    }
                    alt={locale === "en" ? "English" : "Ελληνικά"}
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </FloatingNav>
      {/* Full Screen Mobile Menu */}
      <FullScreenMenu isOpen={isOpen} toggle={toggleMenu} />
    </div>
  );
}
