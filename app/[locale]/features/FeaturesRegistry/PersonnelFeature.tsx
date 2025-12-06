"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  Shield,
  Key,
  Briefcase,
  Building2,
  Stethoscope,
  Mail,
  Check,
  Lock,
  Unlock,
  Eye,
  FileEdit,
  Activity,
} from "lucide-react";

const PersonnelFeature = () => {
  return (
    <div className="space-y-12">
      {/* --- HERO VISUAL: THE IDENTITY FORGE --- */}
      <div className="relative h-[450px] w-full bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-8 shadow-2xl border border-slate-800">
        {/* Background Network */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#2dd4bf 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* The Card Being Created */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Admin Invite Action */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur border border-slate-700 px-4 py-2 rounded-full flex items-center gap-3 mb-8 shadow-lg"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-slate-300">
              Admin sending invite to:{" "}
              <span className="text-teal-400">dr.alex@curify.com</span>
            </span>
            <Mail className="w-3 h-3 text-slate-500" />
          </motion.div>

          {/* The ID Card */}
          <div className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
            {/* Header / Clinic Brand */}
            <div className="h-24 bg-gradient-to-br from-teal-600 to-teal-800 relative p-4">
              <div className="absolute bottom-[-24px] left-4 w-16 h-16 bg-white rounded-full p-1 shadow-md">
                <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
                  <Users className="w-8 h-8 text-slate-300" />
                </div>
              </div>
              <div className="flex justify-end">
                <Building2 className="w-6 h-6 text-white/50" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-8 px-4 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Dr. Alex K.</h3>
              <p className="text-xs text-slate-500 mb-4">ID: #STF-2024-88</p>

              {/* Dynamic Tags (Animating In) */}
              <div className="space-y-2">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
                >
                  <Briefcase className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-bold text-blue-700">
                    Role: Doctor
                  </span>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100"
                >
                  <Stethoscope className="w-3 h-3 text-purple-600" />
                  <span className="text-xs font-bold text-purple-700">
                    Specialty: Cardiology
                  </span>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100"
                >
                  <Shield className="w-3 h-3 text-orange-600" />
                  <span className="text-xs font-bold text-orange-700">
                    Access: Level 3 (Full)
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex justify-between items-center">
              <span className="text-[10px] text-teal-600 font-bold">
                Active Staff
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* --- WORKFLOW & SPECIALTIES --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Invitation Flow */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Secure Onboarding
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            Admins trigger an invite via email. This links the user's unique
            identity to your facility instantly.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm font-bold text-slate-700">
                1. Input Email
              </span>
              <Check className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm font-bold text-slate-700">
                2. Assign Clinic
              </span>
              <Check className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm font-bold text-slate-700">
                3. Define Specialty
              </span>
              <Check className="w-4 h-4 text-green-500" />
            </div>
          </div>
        </div>

        {/* Specialty Logic */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Smart Routing</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-8">
            Specialties aren't just tags. They dictate workflow. A{" "}
            <span className="text-purple-600 font-bold">Cardiologist</span>{" "}
            automatically sees Cardiac patients.
          </p>

          {/* Visual Logic Flow */}
          <div className="relative h-20 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-around px-4">
            <div className="text-center">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">
                Patient
              </div>
              <div className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs font-bold text-slate-800 shadow-sm">
                Heart Issue
              </div>
            </div>

            <div className="flex-1 h-px bg-slate-300 mx-4 relative">
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"
              />
            </div>

            <div className="text-center">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">
                Routed To
              </div>
              <div className="bg-purple-100 border border-purple-200 px-3 py-1 rounded-md text-xs font-bold text-purple-700 shadow-sm">
                Cardiology
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RBAC / PERMISSIONS (The Technical Deep Dive) --- */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Key className="w-3 h-3" /> Access Control
          </div>
          <h3 className="text-3xl font-bold mb-4">Granular Permissions</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            Default roles get you started, but <strong>Admin Overrides</strong>{" "}
            give you control. Restrict sensitive financial data or enable
            prescribing rights per user.
          </p>
          <div className="flex gap-4 text-sm font-bold">
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-4 h-4" /> GDPR Compliant
            </div>
            <div className="flex items-center gap-2 text-teal-400">
              <Check className="w-4 h-4" /> Zero-Trust Model
            </div>
          </div>
        </div>

        {/* The Switchboard Visual */}
        <div className="w-full md:w-96 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
            Permission Settings
          </div>

          <div className="space-y-4">
            <PermissionToggle label="View Medical Files" active={true} />
            <PermissionToggle label="Create Prescriptions" active={true} />
            <PermissionToggle label="View Financials" active={false} locked />
            <PermissionToggle label="Delete Records" active={false} locked />
          </div>
        </div>
      </div>

      {/* --- STAFF DIRECTORY --- */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-slate-900">
            Organization Directory
          </h3>
          <p className="text-slate-500 text-sm">
            Smart grouping by Role for instant visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Group: Doctors */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-3 text-teal-700 font-bold text-sm uppercase tracking-wide">
              <Stethoscope className="w-4 h-4" /> Doctors
            </div>
            <div className="space-y-2">
              <StaffRow name="Dr. Smith" status="active" />
              <StaffRow name="Dr. Jones" status="active" />
              <StaffRow name="Dr. Doe" status="busy" />
            </div>
          </div>

          {/* Group: Nurses */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm uppercase tracking-wide">
              <Activity className="w-4 h-4" /> Nurses
            </div>
            <div className="space-y-2">
              <StaffRow name="Nurse Anna" status="active" />
              <StaffRow name="Nurse Bob" status="offline" />
            </div>
          </div>

          {/* Group: Admins */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-3 text-slate-700 font-bold text-sm uppercase tracking-wide">
              <Shield className="w-4 h-4" /> Admin
            </div>
            <div className="space-y-2">
              <StaffRow name="Admin Sarah" status="active" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const PermissionToggle = ({
  label,
  active,
  locked,
}: {
  label: string;
  active: boolean;
  locked?: boolean;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      {locked ? (
        <Lock className="w-4 h-4 text-slate-500" />
      ) : (
        <Unlock className="w-4 h-4 text-teal-400" />
      )}
      <span
        className={`text-sm font-medium ${
          active ? "text-white" : "text-slate-500"
        }`}
      >
        {label}
      </span>
    </div>
    <div
      className={`w-10 h-5 rounded-full relative transition-colors ${
        active ? "bg-teal-500" : "bg-slate-700"
      }`}
    >
      <div
        className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
          active ? "left-6" : "left-1"
        }`}
      />
    </div>
  </div>
);

const StaffRow = ({
  name,
  status,
}: {
  name: string;
  status: "active" | "busy" | "offline";
}) => {
  const statusColor = {
    active: "bg-green-500",
    busy: "bg-orange-500",
    offline: "bg-slate-400",
  };

  return (
    <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600">
          {name.charAt(0)}
        </div>
        <span className="text-xs font-bold text-slate-700">{name}</span>
      </div>
      <div className={`w-2 h-2 rounded-full ${statusColor[status]}`} />
    </div>
  );
};

export default PersonnelFeature;
