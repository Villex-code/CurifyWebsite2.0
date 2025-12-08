"use client";

import React from "react";
import { Building2 } from "lucide-react";

interface FacilityOperationsCardProps {
  t: (key: string) => string;
}

const FacilityOperationsCard = ({ t }: FacilityOperationsCardProps) => {
  return (
    <TiltCard className="h-full bg-white border border-slate-200 p-8 flex flex-row items-center justify-between relative overflow-hidden group">
      <div className="relative z-10 max-w-sm">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {t("coreCapabilities.facilityOperations.title")}
        </h3>
        <p className="text-slate-500 leading-relaxed">
          {t("coreCapabilities.facilityOperations.description")}
        </p>
      </div>

      {/* Visual: Isometric Room Cards */}
      <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-64 flex flex-col gap-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-[-10px] transition-all duration-500">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 transform translate-x-4">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs font-bold text-slate-600">
            {t("coreCapabilities.facilityOperations.room101")}
          </span>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 transform">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-xs font-bold text-slate-600">
            {t("coreCapabilities.facilityOperations.room102")}
          </span>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 transform translate-x-8">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs font-bold text-slate-600">
            {t("coreCapabilities.facilityOperations.room103")}
          </span>
        </div>
      </div>
    </TiltCard>
  );
};

// Shared TiltCard component
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
      className={`rounded-3xl shadow-xl transition-shadow duration-300 hover:shadow-2xl ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default FacilityOperationsCard;
