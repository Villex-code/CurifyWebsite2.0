"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, BellRing } from "lucide-react";
import Link from "next/link";

import { Iphone15Pro } from "@/components/ui/small/iPhone15";

const Testing = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive calculations
  const getPhoneScale = () => {
    if (screenWidth < 640) return 0.6; // Small mobile
    if (screenWidth < 768) return 0.7; // Mobile
    if (screenWidth < 1024) return 0.8; // Tablet
    return 0.9; // Desktop
  };

  const getCenterPhoneScale = () => {
    if (screenWidth < 640) return 0.65; // Small mobile
    if (screenWidth < 768) return 0.75; // Mobile
    if (screenWidth < 1024) return 0.85; // Tablet
    return 0.95; // Desktop
  };

  // Responsive positioning for phones
  const getLeftOffset = () => {
    // For mobile screens, position from center of container
    if (screenWidth < 1024) return "-translate-x-[calc(50%+60px)]";
    // For desktop, position from center of right column
    return "translate-x-[-110px]";
  };

  const getCenterOffset = () => {
    if (screenWidth < 1024) return "-translate-x-1/2";
    return "translate-x-0";
  };

  const getRightOffset = () => {
    if (screenWidth < 1024) return "translate-x-[calc(50%-60px)]";
    return "translate-x-[110px]";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-teal-50/10 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-teal-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Smart Appointment
              <span className="block text-teal-600 mt-1">Management</span>
            </motion.h2>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-gray-700">
                Streamline your appointment scheduling with our intelligent
                booking system. Patients can easily book appointments online,
                while you maintain full control over your schedule and
                availability.
              </p>

              <div className="pl-3 border-l-4 border-teal-200 italic text-sm text-gray-600">
                "Curify has transformed how we manage appointments. Our patients
                love the ease of booking, and we've reduced no-shows by 40%."
              </div>

              <p className="text-base text-gray-700">
                Set your availability, manage recurring appointments, and
                receive instant notifications for schedule changes. Keep your
                calendar organized and your patients satisfied.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                  <CalendarDays className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Online Booking System
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                  <BellRing className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Automated Reminders
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>

          {/* iPhone mockups column */}
          <div className="relative h-[600px] sm:h-[700px] flex items-center justify-center">
            {/* Background glow effects - LARGER */}
            <motion.div
              className="absolute w-full h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-teal-400/30 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[120px]" />
            </motion.div>

            {/* Left iPhone - appointment date */}
            <motion.div
              className={`absolute top-1/3 -translate-y-1/2 ${getLeftOffset()}`}
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{
                opacity: 0.8,
                x: -80,
                y: 40,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15))",
              }}
            >
              <div
                className="h-[45vh]"
                style={{
                  transform: `rotate(-25deg) scale(${getPhoneScale()})`,
                  transformOrigin: "center center",
                }}
              >
                <Iphone15Pro
                  src="/images/application/appointment_date.jpg"
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Center iPhone - main appointment */}
            <motion.div
              className={`absolute z-10 top-1/3 -translate-y-1/2 ${getCenterOffset()}`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                filter: "drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.25))",
              }}
            >
              <div
                className="h-[50vh]"
                style={{
                  transform: `scale(${getCenterPhoneScale()})`,
                  transformOrigin: "center center",
                }}
              >
                <Iphone15Pro
                  src="/images/application/appointment_main.jpg"
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Right iPhone - new appointment */}
            <motion.div
              className={`absolute top-1/3 -translate-y-1/2 ${getRightOffset()}`}
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{
                opacity: 0.8,
                x: 80,
                y: 40,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15))",
              }}
            >
              <div
                className="h-[45vh]"
                style={{
                  transform: `rotate(25deg) scale(${getPhoneScale()})`,
                  transformOrigin: "center center",
                }}
              >
                <Iphone15Pro
                  src="/images/application/appointment_new.jpg"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
