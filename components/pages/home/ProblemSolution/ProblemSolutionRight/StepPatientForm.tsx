"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, Hash, MapPin, Check, Sparkles } from "lucide-react";

// --- TYPES ---
interface FieldData {
  id: string;
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  colSpan?: number; // 1 or 2 (for grid)
}

// --- DATA CONFIGURATION ---
const FIELDS: FieldData[] = [
  { id: "fname", label: "First Name", value: "George", colSpan: 1 },
  { id: "lname", label: "Last Name", value: "Katsaros", colSpan: 1 },
  {
    id: "dob",
    label: "Date of Birth",
    value: "14/05/1988",
    icon: Calendar,
    colSpan: 1,
  },
  {
    id: "amka",
    label: "AMKA (SSN)",
    value: "14058801923",
    icon: Hash,
    colSpan: 1,
  },
  {
    id: "addr",
    label: "Address",
    value: "Kifisias Ave 12, Athens",
    icon: MapPin,
    colSpan: 2,
  },
];

const StepPatientForm = () => {
  // State for the cursor position
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeFieldId, setActiveFieldId] = useState<string | null>(null);

  // State to store current typed value for each field
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  // Refs to capture input positions
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // --- ANIMATION SEQUENCE ---
  useEffect(() => {
    let isMounted = true;

    const processFields = async () => {
      // Small initial delay
      await wait(250);

      for (const field of FIELDS) {
        if (!isMounted) return;

        // 1. Get coordinates of the target field
        const el = fieldRefs.current.get(field.id);
        const container = containerRef.current;

        if (el && container) {
          const elRect = el.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // Calculate center relative to container
          const targetX = elRect.left - containerRect.left + elRect.width / 2;
          const targetY = elRect.top - containerRect.top + elRect.height / 2;

          // 2. Move Cursor
          setCursorPos({ x: targetX, y: targetY + 10 }); // +10 for visual offset so cursor tip hits center
          await wait(300); // Travel time (reduced from 600ms)

          // 3. Focus Field
          setActiveFieldId(field.id);
          await wait(100); // Reduced from 200ms

          // 4. Type Text
          const chars = field.value.split("");
          let currentText = "";
          for (const char of chars) {
            if (!isMounted) return;
            currentText += char;
            setFieldValues((prev) => ({ ...prev, [field.id]: currentText }));
            await wait(25); // Typing speed (reduced from 40ms)
          }

          // 5. Short pause before moving to next
          await wait(150); // Reduced from 300ms
          setActiveFieldId(null);
        }
      }

      // End Sequence: Move cursor to "Save" button area (approx bottom right)
      if (isMounted) {
        setCursorPos({ x: 380, y: 320 });
        await wait(250); // Reduced from 500ms
        setIsComplete(true);
      }
    };

    processFields();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="relative w-full max-w-md bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
    >
      {/* --- HEADER --- */}
      <div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-1 rounded-md">
            <User className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-sm font-bold text-gray-700">
            New Patient Entry
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-teal-50 border border-teal-100 rounded-full">
          <Sparkles className="w-3 h-3 text-teal-500" />
          <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wide">
            Auto-Filling
          </span>
        </div>
      </div>

      {/* --- FORM GRID --- */}
      <div className="p-6 grid grid-cols-2 gap-5 relative z-0">
        {FIELDS.map((field) => (
          <div
            key={field.id}
            className={field.colSpan === 2 ? "col-span-2" : "col-span-1"}
            ref={(el) => {
              if (el) fieldRefs.current.set(field.id, el);
            }}
          >
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
              {field.label}
            </label>
            <div
              className={`
                relative h-11 w-full rounded-xl border flex items-center px-3 transition-all duration-300
                ${
                  activeFieldId === field.id
                    ? "bg-white border-teal-500 ring-2 ring-teal-500/10 shadow-sm"
                    : "bg-gray-50 border-gray-200"
                }
              `}
            >
              {field.icon && (
                <field.icon
                  className={`w-4 h-4 mr-3 transition-colors ${
                    activeFieldId === field.id
                      ? "text-teal-500"
                      : "text-gray-400"
                  }`}
                />
              )}
              <span className="text-sm font-medium text-gray-800">
                {fieldValues[field.id] || ""}
              </span>

              {/* Blinking Cursor caret inside field */}
              {activeFieldId === field.id && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-0.5 h-5 bg-teal-500 ml-0.5"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER STATUS --- */}
      <div className="bg-gray-50/50 px-6 py-3 border-t border-gray-100 flex justify-between items-center h-12">
        <div className="text-[10px] text-gray-400 font-mono">
          ID: #GENERATING...
        </div>
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100"
            >
              <Check className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">Saved to Database</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- THE AI CURSOR (Overlay) --- */}
      <AICursor x={cursorPos.x} y={cursorPos.y} isActive={!!activeFieldId} />
    </motion.div>
  );
};

// --- HELPER: Wait function ---
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// --- COMPONENT: The Custom Cursor ---
const AICursor = ({
  x,
  y,
  isActive,
}: {
  x: number;
  y: number;
  isActive: boolean;
}) => {
  return (
    <motion.div
      className="absolute top-0 left-0 z-50 pointer-events-none"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 180,
        mass: 0.8,
      }}
    >
      <div className="relative -ml-3 -mt-3">
        {/* The Mouse Pointer SVG */}
        <svg
          className={`w-6 h-6 transition-transform duration-150 ${
            isActive ? "scale-90" : "scale-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="#0d9488" // Teal-600
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* The Label Tag */}
        <motion.div
          className="absolute left-4 top-4 bg-teal-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Curify AI
        </motion.div>

        {/* Click Ripple Effect */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-2 -left-2 w-8 h-8 bg-teal-400/30 rounded-full"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StepPatientForm;
