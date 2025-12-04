"use client";

import React from "react";
import { Mail } from "lucide-react";
import { privacyData } from "./privacyData";

interface PrivacySidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const PrivacySidebar = ({
  activeSection,
  onSectionClick,
}: PrivacySidebarProps) => {
  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-32">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">
          Table of Contents
        </h3>
        <nav className="space-y-1">
          {privacyData.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 border-l-2
                ${
                  activeSection === section.id
                    ? "bg-white text-teal-700 border-teal-500 shadow-lg shadow-teal-900/5 translate-x-2"
                    : "text-slate-500 border-transparent hover:bg-white/60 hover:text-slate-700"
                }
              `}
            >
              {section.title}
            </button>
          ))}
        </nav>

        {/* DPO Contact Button */}
        <div className="mt-10 px-4">
          <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase mb-2">
              Data Protection Officer
            </p>
            <a
              href={`mailto:${privacyData.contactEmail}`}
              className="flex items-center gap-2 text-sm font-bold text-teal-700 hover:underline"
            >
              <Mail className="w-4 h-4" /> Contact DPO
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PrivacySidebar;

