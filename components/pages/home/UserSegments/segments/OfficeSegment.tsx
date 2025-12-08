"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import TextAnimation from "@/components/ui/text/TextAnimation";
import {
  BriefcaseMedical,
  ArrowRight,
  User,
  Calendar,
  FileText,
  CheckCircle2,
  Save,
  Zap,
} from "lucide-react";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const OfficeSegment = () => {
  const t = useTranslations("home.userSegments.segments.office");

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
      {/* --- TEXT SIDE --- */}
      <div className="flex-1 text-center lg:text-left">
        <Badge icon={BriefcaseMedical} text={t("badge")} color="blue" />

        <div className="mb-6 mt-6">
          <TextAnimation
            as="h3"
            text={t("headline")}
            classname="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] normal-case"
            direction="left"
            letterAnime={true}
          />
        </div>

        <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
          {t("description")}
        </p>

        <CtaButton color="blue" text={t("cta")} />
      </div>

      {/* --- VISUAL SIDE --- */}
      <div className="flex-1 w-full">
        <VisualContainer color="teal">
          <FormAutoFillVisual />
        </VisualContainer>
      </div>
    </div>
  );
};

// ============================================================================
// CUSTOM VISUAL: FORM AUTO-FILL (LOOPING)
// ============================================================================

const FORM_STEPS = [
  { id: "patient", value: "George Katsaros", icon: User },
  { id: "date", value: "12/10/2025", icon: Calendar },
  {
    id: "notes",
    value: "Patient reports migraine. Prescribed analgesics.",
    icon: FileText,
  },
];

const FormAutoFillVisual = () => {
  // State
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [activeField, setActiveField] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 150, y: 150 });
  const [isSaved, setIsSaved] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Refs for coordinate calculation
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let isMounted = true;

    const runLoop = async () => {
      while (isMounted) {
        // 0. RESET
        setFieldValues({});
        setIsSaved(false);
        setActiveField(null);
        await wait(500);

        // 1. FILL FIELDS
        for (const step of FORM_STEPS) {
          if (!isMounted) break;

          const el = fieldRefs.current.get(step.id);
          const container = containerRef.current;

          if (el && container) {
            // Calculate target position (middle of input)
            const elRect = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const targetX = elRect.left - containerRect.left + 20; // Offset for realism
            const targetY = elRect.top - containerRect.top + elRect.height / 2;

            // Move Cursor
            setCursorPos({ x: targetX, y: targetY });
            await wait(500); // Movement time

            // Type Text
            setActiveField(step.id);
            const chars = step.value.split("");
            let currentText = "";
            for (const char of chars) {
              if (!isMounted) break;
              currentText += char;
              setFieldValues((prev) => ({ ...prev, [step.id]: currentText }));
              await wait(30); // Typing speed
            }
            await wait(200);
          }
        }

        // 2. CLICK SAVE
        if (buttonRef.current && containerRef.current) {
          const btnRect = buttonRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const btnX = btnRect.left - containerRect.left + btnRect.width / 2;
          const btnY = btnRect.top - containerRect.top + btnRect.height / 2;

          setCursorPos({ x: btnX, y: btnY });
          setActiveField(null);
          await wait(600);

          // Click animation
          setIsClicking(true);
          await wait(150);
          setIsClicking(false);
          setIsSaved(true);

          // Move cursor away to show result
          setCursorPos({ x: 300, y: 350 });
          await wait(2000); // Show "Saved" state
        }
      }
    };

    runLoop();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] bg-white rounded-3xl shadow-2xl shadow-teal-900/10 border border-slate-100 overflow-hidden flex flex-col h-[380px]"
    >
      {/* Header */}
      <div className="bg-slate-50 px-5 py-4 border-b border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          New Entry
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 flex flex-col gap-5 relative z-0">
        {FORM_STEPS.map((step) => (
          <div key={step.id}>
            <label className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 flex items-center gap-1.5">
              <step.icon className="w-3 h-3" /> {step.id}
            </label>
            <div
              ref={(el) => {
                if (el) fieldRefs.current.set(step.id, el);
              }}
              className={`
                     h-10 w-full rounded-xl border flex items-center px-3 text-sm font-medium text-slate-700 transition-all duration-200
                     ${
                       activeField === step.id
                         ? "border-teal-500 bg-teal-50/30 ring-2 ring-teal-100"
                         : "border-slate-200 bg-slate-50"
                     }
                  `}
            >
              {fieldValues[step.id] || ""}
              {activeField === step.id && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="w-0.5 h-4 bg-teal-600 ml-0.5"
                />
              )}
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className="mt-auto pt-2">
          <button
            ref={buttonRef}
            className={`
                  w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300
                  ${
                    isSaved
                      ? "bg-green-500 text-white shadow-lg shadow-green-200 scale-105"
                      : "bg-slate-900 text-white shadow-lg hover:shadow-xl"
                  }
               `}
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Saved Successfully
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> Save Record
              </>
            )}
          </button>
        </div>
      </div>

      {/* --- THE CURSOR (Overlay) --- */}
      <motion.div
        className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-xl"
        animate={{ x: cursorPos.x, y: cursorPos.y }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 250, // Snappy movement
          mass: 0.8,
        }}
      >
        <div className="relative -ml-1 -mt-1">
          {/* Pointer SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="#0f766e"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Label */}
          <div className="absolute top-4 left-4 bg-teal-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap flex items-center gap-1">
            <Zap className="w-2 h-2 fill-white" /> Curify AI
          </div>

          {/* Click Ripple */}
          <AnimatePresence>
            {isClicking && (
              <motion.div
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-3 -left-3 w-10 h-10 bg-teal-400/50 rounded-full"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

// ============================================================================
// HELPERS
// ============================================================================

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Badge = ({ icon: Icon, text, color }: any) => {
  const colors: any = {
    teal: "bg-teal-50 text-teal-700 border-teal-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
  };
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
        colors[color] || colors.blue
      }`}
    >
      <Icon className="w-4 h-4" />
      {text}
    </div>
  );
};

const CtaButton = ({ color, text }: any) => {
  const hoverColors: any = {
    teal: "hover:text-teal-600",
    blue: "hover:text-blue-600",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-8 flex justify-center lg:justify-start"
    >
      <button
        className={`group flex items-center gap-2 text-sm font-bold text-slate-900 ${
          hoverColors[color] || hoverColors.blue
        } transition-colors`}
      >
        {text}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

const VisualContainer = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50 flex items-center justify-center group aspect-[4/3]`}
    >
      {/* Background Blob */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[80px] opacity-40 transition-opacity duration-700 group-hover:opacity-60 bg-teal-100`}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        {children}
      </div>
    </motion.div>
  );
};

export default OfficeSegment;
