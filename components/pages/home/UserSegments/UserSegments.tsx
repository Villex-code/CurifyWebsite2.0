"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextAnimation from "@/components/ui/text/TextAnimation";
import {
  Stethoscope,
  Building2,
  Activity,
  ArrowRight,
  BriefcaseMedical,
  CheckCircle2,
  Calendar,
  Clock,
  Bell,
  Mail,
  CheckSquare,
  Mic,
  FileText,
  Server,
  ShieldCheck,
} from "lucide-react";

const UserSegments = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  // Container Transform Animations
  const paddingValue = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  const radiusValue = useTransform(scrollYProgress, [0, 1], ["0px", "48px"]);
  const borderValue = useTransform(scrollYProgress, [0, 1], ["0px", "1px"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden py-10"
    >
      {/* --- ANIMATED CONTAINER WRAPPER --- */}
      <motion.div
        style={{ padding: paddingValue }}
        className="w-full transition-all ease-out duration-700"
      >
        <motion.div
          style={{
            borderRadius: radiusValue,
            borderWidth: borderValue,
          }}
          className="relative w-full bg-[#F5F7F9] overflow-hidden shadow-sm border-slate-200/60"
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 w-full h-full opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
            {/* =========================================
                1. HERO SECTION
            ========================================= */}
            <div className="relative w-full max-w-5xl mx-auto text-center mb-48">
              <FloatingStickers />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-white rounded-[2rem] shadow-xl shadow-slate-200 flex items-center justify-center mx-auto mb-10 relative z-20"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="w-3 h-3 rounded-full bg-teal-500" />
                  <div className="w-3 h-3 rounded-full bg-teal-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
              </motion.div>

              <h2 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-[1] mb-8 relative z-20">
                Think, plan, and track <br />
                <span className="text-teal-600">all in one place</span>
              </h2>

              <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed relative z-20">
                The comprehensive OS for modern healthcare. Efficiently manage
                patients, inventory, and staff to boost productivity.
              </p>

              <button className="bg-teal-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-colors relative z-20">
                Get free demo
              </button>
            </div>

            {/* =========================================
                2. SEGMENTS (Zig-Zag then Center)
            ========================================= */}
            <div className="flex flex-col gap-32 lg:gap-48 relative z-20">
              {/* --- SEGMENT A: MEDICAL OFFICE (Text Left | Visual Right) --- */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                <div className="flex-1 text-center lg:text-left">
                  <Badge
                    icon={BriefcaseMedical}
                    text="For Solo Practitioners"
                    color="blue"
                  />

                  <div className="mb-6 mt-6">
                    <TextAnimation
                      as="h3"
                      text="Focus on care, not paperwork."
                      classname="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] normal-case"
                      direction="left"
                      letterAnime={true}
                    />
                  </div>

                  <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Curify acts as your always-on digital scribe. It listens,
                    transcribes, and organizes patient data instantly, saving
                    you 2+ hours of admin work daily.
                  </p>

                  <CtaButton color="blue" text="Explore Doctor Tools" />
                </div>

                <div className="flex-1 w-full">
                  <VisualContainer color="blue">
                    <DoctorVisual />
                  </VisualContainer>
                </div>
              </div>

              {/* --- SEGMENT B: PRIVATE CLINIC (Visual Left | Text Right) --- */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="flex-1 text-center lg:text-left">
                  <Badge
                    icon={Stethoscope}
                    text="For Private Clinics"
                    color="teal"
                  />

                  <div className="mb-6 mt-6">
                    <TextAnimation
                      as="h3"
                      text="Unified patient flow system."
                      classname="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] normal-case"
                      direction="right"
                      letterAnime={true}
                    />
                  </div>

                  <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Stop the fragmentation. From the reception desk to the exam
                    room, ensure every team member views the same real-time
                    patient status.
                  </p>

                  <CtaButton color="teal" text="See Clinic Features" />
                </div>

                <div className="flex-1 w-full">
                  <VisualContainer color="teal">
                    <ClinicVisual />
                  </VisualContainer>
                </div>
              </div>

              {/* --- SEGMENT C: HOSPITAL (Text Top | Visual Bottom) --- */}
              <div className="flex flex-col items-center gap-16 text-center max-w-5xl mx-auto w-full">
                <div className="flex flex-col items-center max-w-3xl">
                  <Badge
                    icon={Activity}
                    text="For Enterprise Hospitals"
                    color="indigo"
                  />

                  <div className="mb-6 mt-6">
                    <TextAnimation
                      as="h3"
                      text="Scale without the friction."
                      classname="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] normal-case"
                      direction="down"
                      letterAnime={true}
                    />
                  </div>

                  <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                    Military-grade security, full API interoperability, and IoT
                    inventory tracking designed for high-volume, multi-wing
                    healthcare environments.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <button className="group flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                      View Enterprise Solutions
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="w-full">
                  <VisualContainer color="indigo" wide>
                    <HospitalVisual />
                  </VisualContainer>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ============================================================================
// SUB-COMPONENTS & VISUALS
// ============================================================================

const Badge = ({ icon: Icon, text, color }: any) => {
  const colors: any = {
    teal: "bg-teal-50 text-teal-700 border-teal-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  };
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[color]}`}
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
    indigo: "hover:text-indigo-600",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-8 flex justify-center lg:justify-start"
    >
      <button
        className={`group flex items-center gap-2 text-sm font-bold text-slate-900 ${hoverColors[color]} transition-colors`}
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
  wide,
}: {
  children: React.ReactNode;
  color: string;
  wide?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50 flex items-center justify-center group ${
        wide ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
      }`}
    >
      {/* Subtle Background Blob */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[80px] opacity-40 transition-opacity duration-700 group-hover:opacity-60
            ${
              color === "teal"
                ? "bg-teal-100"
                : color === "blue"
                ? "bg-blue-100"
                : "bg-indigo-100"
            }
        `}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        {children}
      </div>
    </motion.div>
  );
};

// --- ABSTRACT GRAPHICS ---

const DoctorVisual = () => (
  <div className="relative w-full max-w-[280px] flex flex-col gap-4">
    {/* Chat Bubble 1 */}
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-slate-100 flex gap-3 items-center"
    >
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
        <Mic className="w-4 h-4 text-slate-400" />
      </div>
      <div className="space-y-2 w-full">
        <div className="w-full h-2 bg-slate-100 rounded-full" />
        <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
      </div>
    </motion.div>

    {/* Chat Bubble 2 (AI Response) */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-lg flex gap-3 items-center self-end max-w-[90%]"
    >
      <div className="space-y-2 w-full">
        <div className="w-full h-2 bg-white/40 rounded-full" />
        <div className="w-3/4 h-2 bg-white/20 rounded-full" />
      </div>
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
        <FileText className="w-4 h-4 text-white" />
      </div>
    </motion.div>
  </div>
);

const ClinicVisual = () => (
  <div className="relative w-full max-w-[300px] h-[220px] flex items-center justify-center">
    {/* Stacked Background Cards */}
    <motion.div
      className="absolute inset-0 bg-white border border-slate-100 rounded-2xl shadow-sm z-0"
      animate={{ rotate: -6, y: -10 }}
    />
    <motion.div
      className="absolute inset-0 bg-white border border-slate-100 rounded-2xl shadow-sm z-10"
      animate={{ rotate: 6, y: -5 }}
    />
    {/* Main Card */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="absolute inset-0 bg-white border border-blue-100 rounded-2xl shadow-xl z-20 p-6 flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-teal-500" />
          </div>
          <div className="space-y-1">
            <div className="w-24 h-3 bg-slate-200 rounded-full" />
            <div className="w-16 h-2 bg-slate-100 rounded-full" />
          </div>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full" />
      </div>
      <div className="space-y-2">
        <div className="w-full h-2 bg-slate-50 rounded-full" />
        <div className="w-full h-2 bg-slate-50 rounded-full" />
        <div className="w-2/3 h-2 bg-slate-50 rounded-full" />
      </div>
      <div className="flex gap-2 pt-4">
        <div className="w-full h-8 bg-teal-600 rounded-lg opacity-90" />
        <div className="w-1/3 h-8 bg-slate-100 rounded-lg" />
      </div>
    </motion.div>
  </div>
);

const HospitalVisual = () => (
  <div className="relative flex flex-col items-center justify-center">
    <Server className="w-32 h-32 text-indigo-100" strokeWidth={1} />

    {/* Animated Floating Nodes */}
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 bg-white px-3 py-2 rounded-xl shadow-lg border border-indigo-50 flex items-center gap-2"
    >
      <Activity className="w-4 h-4 text-indigo-500" />
      <span className="text-[10px] font-bold text-slate-600">99.9%</span>
    </motion.div>

    <motion.div
      animate={{ y: [8, -8, 8] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="absolute bottom-0 left-0 bg-white px-3 py-2 rounded-xl shadow-lg border border-indigo-50 flex items-center gap-2"
    >
      <ShieldCheck className="w-4 h-4 text-green-500" />
      <span className="text-[10px] font-bold text-slate-600">Secure</span>
    </motion.div>
  </div>
);

// --- FLOATING STICKERS (Small & Edge-positioned) ---
const FloatingStickers = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 w-full h-full overflow-visible">
      {/* Top Left: Yellow Note (Smaller scale) */}
      <motion.div
        initial={{ rotate: -6, y: 0 }}
        whileInView={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-40px] left-[-20px] lg:left-[-10%] w-40 h-40 bg-[#fef08a] shadow-xl rounded-sm p-4 hidden lg:flex flex-col transform -rotate-6"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-400 mx-auto -mt-6 shadow-sm border border-red-500/20" />
        <p className="font-handwriting text-slate-800 text-sm leading-snug font-medium">
          Take notes to keep track of crucial details.
        </p>
        <div className="mt-auto bg-white/50 w-10 h-10 rounded-xl flex items-center justify-center self-end shadow-sm">
          <CheckSquare className="text-white w-4 h-4 text-blue-500" />
        </div>
      </motion.div>

      {/* Top Right: Reminders (Smaller & moved right) */}
      <motion.div
        initial={{ rotate: 3 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[-20px] right-[0px] lg:right-[-10%] bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/60 max-w-[180px] hidden lg:block transform rotate-3"
      >
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-slate-800 text-sm">Reminders</h4>
          <div className="w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm -mt-8 -mr-8">
            <Clock className="w-4 h-4 text-red-400" />
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-2">
          <p className="text-xs font-bold text-slate-700">Team Meeting</p>
          <p className="text-[10px] text-slate-400">10:00 AM</p>
        </div>
      </motion.div>

      {/* Bottom Left: Tasks */}
      <motion.div
        initial={{ rotate: -2 }}
        whileInView={{ y: [0, -8, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-[20%] left-[5%] lg:left-[-5%] bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-4 w-52 hidden lg:block transform -rotate-2"
      >
        <h4 className="text-sm font-bold text-slate-900 mb-3">Today's tasks</h4>
        <div className="space-y-3">
          <div className="bg-white border border-slate-100 p-2 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
              8
            </div>
            <div className="flex-1">
              <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Right: Integrations */}
      <motion.div
        initial={{ rotate: 2 }}
        whileInView={{ y: [0, 8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-[20%] right-[10%] lg:right-[-5%] bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 p-4 hidden lg:block transform rotate-2"
      >
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm text-lg">
            <Mail className="w-4 h-4 text-red-500" />
          </div>
          <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm text-lg">
            <Bell className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserSegments;
