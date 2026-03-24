"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
}

const containerVariants: any = {
  hidden: { opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    filter: "blur(10px)",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

export const NavDropdown: React.FC<NavDropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-white hover:text-teal-100 text-sm font-semibold transition-all duration-300 py-4 outline-none relative group",
          isOpen && "text-teal-100",
        )}
      >
        {label}
        <HiChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-500",
            isOpen && "rotate-180",
          )}
        />
        <span
          className={cn(
            "absolute inset-x-0 w-0 mx-auto -bottom-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[1px] transition-all duration-300",
            isOpen ? "w-full" : "group-hover:w-full",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[6000]"
          >
            <div className="bg-white rounded-[2rem] border border-slate-200/50 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] min-w-[520px] ring-1 ring-slate-900/5">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {items.map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <Link
                      href={item.href as any}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 group/item relative overflow-hidden"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-teal-600 group-hover/item:bg-teal-600 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:shadow-teal-200 group-hover/item:scale-110">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[15px] font-bold text-slate-900 group-hover/item:text-teal-600 transition-colors duration-300">
                          {item.title}
                        </span>
                        <span className="text-[13px] text-slate-500 leading-tight font-medium opacity-80 group-hover/item:opacity-100 transition-opacity">
                          {item.description}
                        </span>
                      </div>

                      {/* Subtle hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/0 via-teal-50/0 to-teal-50/50 opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer part of dropdown if needed */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium px-2">
                <span>Everything you need.</span>
                <Link href="/about" className="text-teal-600 hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
