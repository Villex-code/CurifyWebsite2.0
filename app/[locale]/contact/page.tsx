"use client";
import { useEffect } from "react";
import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import SvgBackground from "@/components/ui/background/SvgBackground";

const ContactPage = () => {
  useEffect(() => {
    // Instantly set scroll position to top
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Main container with responsive padding */}
      <div className=" lg:max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-20">
        {/*<SvgBackground />*/}
        {/* Grid container with responsive columns */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* On mobile, components stack vertically */}
          <div className="w-full order-2 lg:order-1">
            <ContactLeft />
          </div>
          <div className="w-full order-1 lg:order-2">
            <ContactRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
