"use client";

import { useEffect, useState } from "react";
import React from "react";
import UseCaseHero from "./UseCaseHero";
import UseCaseIndividual from "./UseCaseIndividual";
import UseCaseComparison from "./UseCaseComparison";
import UseCaseValue from "./UseCaseValue";
import UseCaseROI from "./UseCaseROI";
import UseCaseFAQ from "./UseCaseFAQ";
import Testing from "./Testing";

const UseCasesPageContent = () => {
  const [activeSegment, setActiveSegment] = useState("medical-office");

  useEffect(() => {
    // Instantly set scroll position to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      <UseCaseHero
        activeSegment={activeSegment}
        onSegmentChange={setActiveSegment}
      />
      <div id="use-case-content">
        <UseCaseIndividual segment={activeSegment} />
      </div>
      <UseCaseComparison segment={activeSegment} />
      <UseCaseValue segment={activeSegment} />
      <UseCaseROI segment={activeSegment} />
      <UseCaseFAQ segment={activeSegment} />
      <Testing />
    </div>
  );
};

export default UseCasesPageContent;

