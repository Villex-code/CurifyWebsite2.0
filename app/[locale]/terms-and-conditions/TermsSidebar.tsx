"use client";

import React, { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { termsData } from "./termsData";

interface TermsSidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const TermsSidebar = ({ activeSection, onSectionClick }: TermsSidebarProps) => {
  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-32">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">
          Contents
        </h3>
        <nav className="space-y-1">
          {termsData.sections.map((section) => (
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

        {/* Download PDF Button */}
        <div className="mt-10 px-4">
          <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-teal-600 transition-colors">
            <FileText className="w-4 h-4" />
            Download as PDF
          </button>
        </div>
      </div>
    </aside>
  );
};

export default TermsSidebar;

