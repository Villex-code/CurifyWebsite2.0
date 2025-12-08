import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface FullScreenMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, toggle }) => {
  const t = useTranslations("nav");

  const menuItems = [
    { name: t("home"), route: "/" },
    { name: t("about"), route: "/about" },
    { name: t("features"), route: "/features" },
    { name: t("useCases"), route: "/use-cases" },
    { name: t("pricing"), route: "/pricing" },
    // { name: t("proposition"), route: "/docs/Curify_Proposition.pdf", external: true },
    { name: t("contact"), route: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
        >
          <div className="flex flex-col items-center space-y-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.route}
                  className="text-3xl sm:text-4xl text-white hover:text-teal-300 transition-colors duration-300 flex items-center gap-2 group"
                  onClick={toggle}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute inset-x-0 w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
