"use client";
import { useEffect } from "react";
import React from "react";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutVision from "./AboutVision";
import AboutGrowth from "./AboutGrowth";
import AboutTeam from "./AboutTeam";
import AboutCTA from "./AboutCTA";
import AboutLinks from "./AboutLinks";
import UseCaseCTA from "@/components/pages/home/UseCaseCTA";

const AboutPage = () => {
  useEffect(() => {
    // Instantly set scroll position to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Main container with responsive padding */}
      <div className="lg:max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <AboutMission />
        <AboutVision />
        <AboutGrowth />
        <AboutTeam />
        <UseCaseCTA />
        <AboutLinks />
      </div>
    </div>
  );
};

export default AboutPage;
