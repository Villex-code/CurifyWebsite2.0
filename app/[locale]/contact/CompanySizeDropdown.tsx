import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Users, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { NumberOfEmployees } from "./ContactRight";
import { motion, AnimatePresence } from "framer-motion";

interface CompanySize {
  value: NumberOfEmployees;
  label: string;
  range: string;
}

interface CompanySizeDropdownProps {
  value: NumberOfEmployees;
  onChange: (value: NumberOfEmployees) => void;
}

const CompanySizeDropdown = ({ value, onChange }: CompanySizeDropdownProps) => {
  const t = useTranslations("contact");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const companySizes: CompanySize[] = [
    {
      value: NumberOfEmployees.SMALL,
      label: t("form.sizeDropdown.small.label"),
      range: "1 - 10",
    },
    {
      value: NumberOfEmployees.MEDIUM,
      label: t("form.sizeDropdown.medium.label"),
      range: "10 - 100",
    },
    {
      value: NumberOfEmployees.LARGE,
      label: t("form.sizeDropdown.large.label"),
      range: "100 - 1000",
    },
    {
      value: NumberOfEmployees.ENTERPRISE,
      label: t("form.sizeDropdown.enterprise.label"),
      range: "1000+",
    },
  ];

  const selectedSize = companySizes.find((size) => size.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-300 outline-none
          ${
            isOpen
              ? "bg-white border-teal-500 ring-2 ring-teal-500/20"
              : "bg-gray-50 border-gray-100 hover:bg-white hover:border-gray-300"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <Users
            className={`w-5 h-5 transition-colors ${
              isOpen ? "text-teal-600" : "text-gray-400"
            }`}
          />
          <div className="flex flex-col items-start">
            {selectedSize ? (
              <span className="text-gray-900 font-medium text-sm">
                {selectedSize.label}{" "}
                <span className="text-gray-400 ml-1 font-normal">
                  ({selectedSize.range})
                </span>
              </span>
            ) : (
              <span className="text-gray-400 text-sm">
                {t("form.sizeDropdown.placeholder")}
              </span>
            )}
          </div>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-teal-600" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl shadow-teal-900/10 border border-gray-100 overflow-hidden"
          >
            <div className="p-1.5">
              {companySizes.map((size) => {
                const isSelected = value === size.value;
                return (
                  <button
                    key={size.value}
                    type="button"
                    onClick={() => {
                      onChange(size.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-sm transition-colors
                      ${
                        isSelected
                          ? "bg-teal-50 text-teal-800 font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <span className="flex items-center gap-2">
                      {size.label}{" "}
                      <span className="opacity-60 text-xs">({size.range})</span>
                    </span>

                    {isSelected && <Check className="w-4 h-4 text-teal-600" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanySizeDropdown;
