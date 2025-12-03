import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Hospital,
  Stethoscope,
  Building2,
  Users,
  Pill,
  MoreHorizontal,
  Check,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { OrganizationType } from "./ContactRight";

interface CompanyType {
  id: OrganizationType;
  label: string;
  icon: React.ReactNode;
}

interface CompanyTypeSelectorProps {
  selectedType: OrganizationType;
  onChange: (type: OrganizationType) => void;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const CompanyTypeSelector = ({
  selectedType,
  onChange,
}: CompanyTypeSelectorProps) => {
  const t = useTranslations("contact");

  const companyTypes: CompanyType[] = [
    {
      id: OrganizationType.HOSPITAL,
      label: t("form.companyType.hospital"),
      icon: <Hospital className="w-5 h-5" />,
    },
    {
      id: OrganizationType.LAB,
      label: t("form.companyType.lab"),
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      id: OrganizationType.PHARMACY,
      label: t("form.companyType.pharmacy"),
      icon: <Pill className="w-5 h-5" />,
    },
    {
      id: OrganizationType.OTHER,
      label: t("form.companyType.other"),
      icon: <MoreHorizontal className="w-5 h-5" />,
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 gap-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {companyTypes.map((type) => {
        const isSelected = selectedType === type.id;
        return (
          <motion.button
            key={type.id}
            variants={item}
            type="button"
            onClick={() => onChange(type.id)}
            className={`group relative flex items-center gap-3 px-4 py-3 w-full rounded-xl border transition-all duration-300 overflow-hidden text-left outline-none
              ${
                isSelected
                  ? "bg-white border-teal-500 shadow-md shadow-teal-900/5 ring-1 ring-teal-500"
                  : "bg-gray-50 border-gray-100 hover:bg-white hover:border-teal-200"
              }
            `}
          >
            {/* Background Gradient for selected state */}
            {isSelected && (
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-transparent pointer-events-none" />
            )}

            {/* Icon Container */}
            <div
              className={`relative z-10 p-2 rounded-lg transition-colors duration-300
              ${
                isSelected
                  ? "bg-teal-100 text-teal-700"
                  : "bg-white text-gray-400 group-hover:text-teal-600 group-hover:bg-teal-50"
              }`}
            >
              {type.icon}
            </div>

            {/* Label & Checkmark */}
            <div className="relative z-10 flex-1 flex justify-between items-center">
              <span
                className={`text-sm font-medium transition-colors ${
                  isSelected
                    ? "text-teal-900"
                    : "text-gray-600 group-hover:text-gray-900"
                }`}
              >
                {type.label}
              </span>

              {/* Animated Checkmark */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-teal-600 rounded-full p-0.5"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </div>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default CompanyTypeSelector;
