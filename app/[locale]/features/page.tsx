"use client";
import { useEffect, useState } from "react";
import React from "react";
import FeaturesHero from "./FeaturesHero";
import FeaturesSidebar from "./FeaturesSidebar";
import FeaturesContent from "./FeaturesContent";
import { featuresData } from "./featuresData";

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(featuresData[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Instantly set scroll position to top
    window.scrollTo(0, 0);
  }, []);

  // Sync search input from hero with sidebar
  useEffect(() => {
    const searchInput = document.getElementById(
      "feature-search"
    ) as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        setSearchQuery(target.value);
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full ">
      <FeaturesHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <FeaturesSidebar
            activeFeature={activeFeature}
            onFeatureSelect={setActiveFeature}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <FeaturesContent featureId={activeFeature} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
