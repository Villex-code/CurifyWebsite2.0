"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CreditCard,
  ArrowUpRight,
  Wifi,
  CheckCircle2,
  Wallet,
} from "lucide-react";

interface FinancialOsCardProps {
  t: (key: string) => string;
}

const FinancialOsCard = ({ t }: FinancialOsCardProps) => {
  return (
    <TiltCard className="h-full bg-[#0f172a] text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group border border-slate-800">
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at 100% 100%, black, transparent 80%)",
          }}
        />
      </div>

      {/* Glow Orb - Pushed further back */}
      <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Protection Gradient for Text */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/80 to-transparent z-10 pointer-events-none" />

      {/* --- TEXT CONTENT (High Z-Index for Readability) --- */}
      <div className="relative z-30 max-w-lg pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-6 text-teal-400 shadow-lg"
        >
          <Wallet className="w-3 h-3" />
          {t("coreCapabilities.financialOs.badge")}
        </motion.div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight text-white drop-shadow-sm">
          {t("coreCapabilities.financialOs.title")}
        </h3>
        <p className="text-slate-300 leading-relaxed text-base md:text-lg drop-shadow-sm font-medium">
          {t("coreCapabilities.financialOs.description")}
        </p>
      </div>

      {/* --- ABSTRACT VISUAL: THE TRANSACTION PROCESSOR --- */}
      {/* Pushed lower and scaled down to avoid overlap */}
      <div className="absolute bottom-0 right-0 w-full h-[55%] z-20 pointer-events-none translate-y-4 md:translate-y-0">
        {/* The Virtual Card (Floating) */}
        <motion.div
          initial={{ y: 50, rotateX: 10, rotateY: -10, opacity: 0 }}
          whileInView={{ y: 0, rotateX: 0, rotateY: -15, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="absolute bottom-6 right-[-10px] md:right-8 w-72 h-44 rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden scale-90 md:scale-100 origin-bottom-right"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-15deg) rotateX(10deg)",
          }}
        >
          {/* Card Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 w-[200%] animate-shimmer" />

          <div className="p-5 flex flex-col justify-between h-full relative z-10">
            <div className="flex justify-between items-start">
              <div className="w-9 h-6 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md shadow-sm" />
              <Wifi className="w-5 h-5 text-slate-500/50 rotate-90" />
            </div>
            <div className="font-mono text-lg tracking-widest text-slate-300 shadow-black drop-shadow-md">
              •••• •••• •••• 4291
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold">
                  Card Holder
                </div>
                <div className="text-xs font-medium text-slate-200">
                  Curify Clinic
                </div>
              </div>
              <div className="text-white">
                <CreditCard className="w-6 h-6 opacity-80" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Notification Pills (Simulating Transactions) */}
        <motion.div
          className="absolute bottom-40 right-48 z-30 scale-90 md:scale-100 origin-bottom-right"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-white/95 backdrop-blur text-slate-900 px-3 py-2 rounded-lg shadow-xl flex items-center gap-3 border border-white/50">
            <div className="bg-green-500 rounded-full p-0.5">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-500 uppercase">
                Payment Received
              </div>
              <div className="text-xs font-bold">$120.00</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-72 z-10 opacity-70 scale-75 origin-bottom-right hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="bg-slate-800/90 backdrop-blur text-white px-3 py-2 rounded-lg shadow-lg border border-slate-600 flex items-center gap-3">
            <div className="bg-blue-500 rounded-full p-0.5">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-400 uppercase">
                Insurance Claim
              </div>
              <div className="text-xs font-bold text-slate-200">
                Processing...
              </div>
            </div>
          </div>
        </motion.div>

        {/* Total Revenue Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute bottom-6 right-6 md:right-8 bg-teal-500 text-white px-4 py-2 rounded-xl shadow-xl shadow-teal-500/20 flex flex-col items-end z-40"
        >
          <span className="text-[9px] font-bold uppercase opacity-80">
            {t("coreCapabilities.financialOs.netRevenue")}
          </span>
          <span className="text-xl font-bold tracking-tight">$2.4M</span>
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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]); // Reduced tilt for stability
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
      className={`rounded-[2rem] shadow-2xl transition-shadow duration-300 hover:shadow-teal-900/10 ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default FinancialOsCard;
