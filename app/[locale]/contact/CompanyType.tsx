import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Hospital,
  Stethoscope,
  Building2,
  Users,
  Pill,
  MoreHorizontal,
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
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
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-400">
        {t("form.companyType.label")}
      </label>
      <motion.div
        className="grid grid-cols-2 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {companyTypes.map((type) => (
          <motion.button
            key={type.id}
            variants={item}
            type="button"
            onClick={() => onChange(type.id)}
            className={`relative flex items-center gap-3 p-3 w-full rounded-lg group overflow-hidden
              ${
                selectedType === type.id
                  ? "bg-teal-50 text-teal-700"
                  : "hover:bg-gray-50 text-gray-600"
              }
            `}
          >
            {/* Selection Shine Effect */}
            {selectedType === type.id && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200/40 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />
              </motion.div>
            )}

            {/* Checkbox */}
            <motion.div
              className={`
                relative w-5 h-5 rounded-full border-2 transition-colors duration-200 flex items-center justify-center
                ${
                  selectedType === type.id
                    ? "border-teal-700 bg-teal-700"
                    : "border-gray-300 group-hover:border-teal-700"
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              {/* Checkmark */}
              <motion.div
                className="w-2 h-2 rounded-full bg-white"
                initial={false}
                animate={{
                  scale: selectedType === type.id ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              />
            </motion.div>

            {/* Icon */}
            <motion.div
              className={`transition-colors duration-200
                ${
                  selectedType === type.id
                    ? "text-teal-700"
                    : "text-gray-400 group-hover:text-teal-700"
                }
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.icon}
            </motion.div>

            {/* Label */}
            <span className="text-sm font-medium flex-1 text-left">
              {type.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default CompanyTypeSelector;
