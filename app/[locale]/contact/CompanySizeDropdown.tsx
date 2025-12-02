import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { NumberOfEmployees } from "./ContactRight";

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

  return (
    <div className="relative group">
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-teal-700 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-2 bg-transparent border-b border-gray-200 flex items-center justify-between text-left focus:outline-none group"
      >
        {selectedSize ? (
          <span className="text-teal-700">
            {selectedSize.label} - ({selectedSize.range})
          </span>
        ) : (
          <span className="text-gray-400">
            {t("form.sizeDropdown.placeholder")}
          </span>
        )}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-all duration-200 ${
            isOpen
              ? "transform rotate-180 text-teal-700"
              : "text-gray-400 group-hover:text-teal-700"
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 py-1 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden">
          {companySizes.map((size) => (
            <div
              key={size.value}
              onClick={() => {
                onChange(size.value);
                setIsOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer transition-colors flex items-center justify-between
                ${
                  value === size.value
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
                }
              `}
            >
              <span className="font-medium">
                {size.label} - ({size.range})
              </span>
              {value === size.value && (
                <div className="w-1.5 h-1.5 rounded-full bg-teal-700" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanySizeDropdown;
