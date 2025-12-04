"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, LayoutGrid } from "lucide-react";
import {
  FEATURE_REGISTRY,
  getCategories,
  getFeaturesByCategory,
} from "./featuresRegistry"; // Import from your new registry file

interface FeaturesSidebarProps {
  activeFeature: string;
  onFeatureSelect: (featureId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const FeaturesSidebar = ({
  activeFeature,
  onFeatureSelect,
  searchQuery,
  onSearchChange,
}: FeaturesSidebarProps) => {
  const categories = getCategories();

  // Default: Open all categories initially for better discovery
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories)
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  // Filter features based on search query
  const filteredFeatures = useMemo(() => {
    if (!searchQuery.trim()) return FEATURE_REGISTRY;

    const query = searchQuery.toLowerCase();
    return FEATURE_REGISTRY.filter(
      (feature) =>
        feature.title.toLowerCase().includes(query) ||
        feature.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group filtered features
  const groupedFeatures = useMemo(() => {
    const grouped: Record<string, typeof FEATURE_REGISTRY> = {};
    filteredFeatures.forEach((feature) => {
      if (!grouped[feature.category]) {
        grouped[feature.category] = [];
      }
      grouped[feature.category].push(feature);
    });
    return grouped;
  }, [filteredFeatures]);

  return (
    <aside className="hidden lg:flex flex-col w-80 flex-shrink-0 h-[calc(100vh-8rem)] sticky top-32">
      {/* Search Header */}
      <div className="mb-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
          <input
            type="text"
            placeholder="Find a feature..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm shadow-sm"
          />
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {categories.map((category) => {
          const categoryFeatures = groupedFeatures[category] || [];
          if (categoryFeatures.length === 0) return null;

          const isExpanded = expandedCategories.has(category);

          return (
            <div key={category}>
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-teal-600 transition-colors mb-2"
              >
                <span>{category}</span>
                <ChevronRight
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isExpanded ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* Category Features */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden space-y-1"
                  >
                    {categoryFeatures.map((feature) => {
                      const isActive = activeFeature === feature.id;
                      return (
                        <button
                          key={feature.id}
                          onClick={() => onFeatureSelect(feature.id)}
                          className={`
                            w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3
                            ${
                              isActive
                                ? "bg-white text-teal-700 shadow-md shadow-teal-900/5 ring-1 ring-teal-100"
                                : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm"
                            }
                          `}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? "bg-teal-500" : "bg-slate-300"
                            }`}
                          />
                          {feature.title}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FeaturesSidebar;
