import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface FullScreenMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

import {
  Home,
  User,
  Zap,
  Building2,
  Euro,
  BookOpen,
  Rocket,
  Mail,
  X,
} from "lucide-react";

interface FullScreenMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, toggle }) => {
  const t = useTranslations("nav");

  const mainItems = [
    { name: t("home"), desc: t("homeDesc"), route: "/", icon: Home },
    { name: t("about"), desc: t("aboutDesc"), route: "/about", icon: User },
    {
      name: t("useCases"),
      desc: t("useCasesDesc"),
      route: "/use-cases",
      icon: Building2,
    },
    {
      name: t("pricing"),
      desc: t("pricingDesc"),
      route: "/pricing",
      icon: Euro,
    },
  ];

  const resourceItems = [
    {
      name: t("features"),
      desc: t("featuresDesc"),
      route: "/features",
      icon: Zap,
    },
    { name: t("blog"), desc: t("blogDesc"), route: "/blog", icon: BookOpen },
    {
      name: t("onboarding"),
      desc: t("onboardingDesc"),
      route: "/onboarding",
      icon: Rocket,
    },
    {
      name: t("contact"),
      desc: t("contactDesc"),
      route: "/contact",
      icon: Mail,
    },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-teal-950/95 backdrop-blur-xl overflow-y-auto pt-20"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="px-6 pb-20 space-y-10"
          >
            {/* Primary Section */}
            <div className="space-y-4">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest pl-2">
                Navigation
              </p>
              <div className="grid gap-2">
                {mainItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.route as any}
                      className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group"
                      onClick={toggle}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-300 group-hover:bg-teal-500 group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-white">
                          {item.name}
                        </span>
                        <span className="text-sm text-teal-100/60 leading-tight">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div className="space-y-4">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest pl-2">
                Resources
              </p>
              <div className="grid gap-2">
                {resourceItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.route as any}
                      className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group"
                      onClick={toggle}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-300 group-hover:bg-teal-500 group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-white">
                          {item.name}
                        </span>
                        <span className="text-sm text-teal-100/60 leading-tight">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Login CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="https://portal-staging.curifyapp.com/"
                target="_blank"
                className="flex items-center justify-center w-full py-5 rounded-3xl bg-white text-teal-900 font-bold text-lg shadow-xl shadow-teal-500/10 active:scale-95 transition-all"
                onClick={toggle}
              >
                {t("login")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
