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

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="text-white hover:text-teal-100 text-sm font-semibold transition-colors relative group"
              >
                {t("home")}
                <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
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
                href="/features"
                className="text-white hover:text-teal-100 text-sm font-semibold transition-colors relative group"
              >
                {t("features")}
                <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              {/* <a
                href="/docs/Curify_Proposition.pdf"
                download
                className="text-white/90 hover:text-white text-sm font-semibold transition-colors relative group"
              >
                {t("nav.proposition")}
                <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a> */}
            </div>

            <Link
              href="/blog"
              className="text-white hover:text-teal-100 text-sm font-semibold transition-colors relative group"
            >
              Blog
              <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="relative px-5 py-2 text-sm font-semibold text-teal-800 bg-white rounded-full hover:bg-teal-50 transition-colors group"
            >
              {t("contact")}
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

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile Language Switcher */}
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

            <div className="absolute right-20 top-8">
              <HamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
            </div>
          </div>
        </div>
      </FloatingNav>
      {/* Full Screen Mobile Menu */}
      <FullScreenMenu isOpen={isOpen} toggle={toggleMenu} />
    </div>
  );
}
