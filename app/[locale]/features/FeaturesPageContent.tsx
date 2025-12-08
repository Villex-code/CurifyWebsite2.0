"use client";

import React, { useEffect, useState } from "react";
import FeaturesHero from "./FeaturesHero";
import FeaturesSidebar from "./FeaturesSidebar";
import FeaturesContent from "./FeaturesContent";
import { FEATURE_REGISTRY } from "./featuresRegistry";

const FeaturesPageContent = () => {
  // Initialize with the first available feature
  const [activeFeature, setActiveFeature] = useState(
    FEATURE_REGISTRY[0]?.id || ""
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Instantly set scroll position to top
    window.scrollTo(0, 0);

    // Listen for custom event from hero search
    const handleFeatureSelected = (event: CustomEvent) => {
      const featureId = event.detail.featureId;
      if (featureId) {
        setActiveFeature(featureId);
      }
    };

    window.addEventListener(
      "featureSelected",
      handleFeatureSelected as EventListener
    );

    return () => {
      window.removeEventListener(
        "featureSelected",
        handleFeatureSelected as EventListener
      );
    };
  }, []);

  return (
    <div className="min-h-screen w-full ">
      <FeaturesHero />
      <div
        id="features-content-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
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

export default FeaturesPageContent;

