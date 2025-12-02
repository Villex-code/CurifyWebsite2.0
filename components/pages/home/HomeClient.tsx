"use client";
import React, { useEffect } from "react";
import StructuredData from "@/components/SEO/StructuredData";

/**
 * Client component for Home page
 * Handles client-side functionality like structured data and scroll behavior
 */
export default function HomeClient() {
  // Start at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Curify",
    url: "https://www.curifyapp.com",
    logo: "https://www.curifyapp.com/images/logo.png",
    description: "Smart healthcare platform for medical professionals",
    sameAs: [
      "https://twitter.com/curifyapp",
      "https://www.linkedin.com/company/curify-app/",
    ],
  };

  return (
    <>
      <StructuredData data={organizationData} id="organization-data" />
    </>
  );
}
