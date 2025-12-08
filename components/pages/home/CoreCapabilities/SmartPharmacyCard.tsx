"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Pill, ScanBarcode, Wifi, AlertCircle } from "lucide-react";

interface SmartPharmacyCardProps {
  t: (key: string) => string;
}

const SmartPharmacyCard = ({ t }: SmartPharmacyCardProps) => {
  return (
    <TiltCard className="h-full bg-white border border-slate-200 p-8 md:p-10 relative overflow-hidden group">
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Soft Gradient Wash */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-slate-50/50 to-transparent" />
      </div>

      {/* --- TEXT CONTENT --- */}
      <div className="relative z-20 pointer-events-none">
        <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
          {t("coreCapabilities.smartPharmacy.title")}
        </h3>
        <p className="text-slate-500 leading-relaxed text-base md:text-lg max-w-sm font-medium">
          {t("coreCapabilities.smartPharmacy.description")}
        </p>
      </div>

      {/* --- ABSTRACT VISUAL: THE WHITE CLINICAL CABINET --- */}
      <div className="absolute bottom-[-10px] right-[-10px] md:right-4 w-[90%] md:w-[85%] h-[55%] z-10 pointer-events-none">
        {/* The Cabinet Container (Clean White/Grey Look) */}
        <div className="relative w-full h-full bg-slate-50 rounded-tl-3xl border-t border-l border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 overflow-hidden">
          {/* Background Inner Texture */}
          <div className="absolute inset-0  bg-white rounded-xl" />

          {/* 1. Grid of Meds */}
          <div className="grid grid-cols-4 gap-3 relative z-10">
            {[...Array(12)].map((_, i) => {
              const isLow = i === 5 || i === 9;
              const isEmpty = i === 2;

              return (
                <div
                  key={i}
                  className={`
                        aspect-square rounded-xl relative overflow-hidden transition-all duration-500
                        ${
                          isEmpty
                            ? "bg-slate-100 border-2 border-dashed border-slate-200"
                            : "bg-white border border-slate-200 shadow-sm "
                        }
                      `}
                >
                  {!isEmpty && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Medicine Pill Representation */}
                      <div
                        className={`w-3 h-3 rounded-full shadow-sm ring-2 ring-white ${
                          isLow ? "bg-orange-400" : "bg-teal-500"
                        }`}
                      />
                    </div>
                  )}
                  {/* Glossy Reflection */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* 2. The Laser Scanner Beam (Subtle Teal) */}
          <motion.div
            animate={{ top: ["0%", "120%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-teal-400/50 shadow-[0_0_15px_rgba(45,212,191,0.4)] z-20 pointer-events-none"
          />

          {/* 3. Floating "Live Update" Card (Clean White Glass) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/60 z-30 flex items-center gap-3 ring-1 ring-slate-100"
          >
            <div className="bg-teal-50 p-2 rounded-xl border border-teal-100">
              <ScanBarcode className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                Dispensed
              </div>
              <div className="text-xs font-bold text-slate-700">
                Amoxicillin{" "}
                <span className="text-slate-400 font-normal">(-1)</span>
              </div>
            </div>
            <Wifi className="w-3 h-3 text-teal-500 ml-auto" />
          </motion.div>
        </div>

        {/* 4. Alert Badge Floating Outside (Clean Look) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-3 -left-2 bg-white border border-orange-100 text-orange-600 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 z-40"
        >
          <AlertCircle className="w-3 h-3 fill-orange-100" />
          <span className="text-[10px] font-bold uppercase tracking-wide">
            Low Stock
          </span>
        </motion.div>
      </div>
    </TiltCard>
  );
};

// --- SHARED TILT COMPONENT ---
const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`rounded-[2rem] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60 ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default SmartPharmacyCard;
